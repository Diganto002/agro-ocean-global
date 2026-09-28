import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  UploadCloud, 
  FileText, 
  Sparkles, 
  Building2, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Download, 
  Printer, 
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { commoditiesData } from '../data/commoditiesData';
import { convertPrice } from '../data/marketRates';

export default function RFQModal({ 
  isOpen, 
  onClose, 
  initialQuoteData, 
  selectedCurrency 
}) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    commodity: 'Yellow Split Peas (মটর ও বুটের ডাল)',
    volumeMT: 500,
    incoterm: 'CIF',
    destinationPort: 'চট্টগ্রাম বন্দর (CPA)',
    packaging: '৫০ কেজি পলিপ্রপিলিন বস্তা',
    paymentTerm: '১০০% অলঙ্ঘনীয় লেটার অব ক্রেডিট (L/C at Sight)',
    targetMonth: 'তাৎক্ষণিক স্পট (১৫ দিনের মধ্যে)',
    companyName: '',
    contactPerson: '',
    designation: 'ম্যানেজিং ডিরেক্টর / প্রকিউরমেন্ট হেড',
    email: '',
    phone: '',
    tradeLicenseBIN: '',
    specialInstructions: ''
  });

  // Pre-fill if coming from Calculator
  useEffect(() => {
    if (initialQuoteData) {
      setFormData(prev => ({
        ...prev,
        commodity: initialQuoteData.commodity || prev.commodity,
        volumeMT: initialQuoteData.volumeMT || prev.volumeMT,
        incoterm: initialQuoteData.incoterm || prev.incoterm,
        destinationPort: initialQuoteData.destinationPort || prev.destinationPort,
        packaging: initialQuoteData.packaging || prev.packaging,
      }));
    }
  }, [initialQuoteData]);

  if (!isOpen) return null;

  const handleChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Blast celebratory confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback
    }
  };

  const handlePrintQuote = () => {
    window.print();
  };

  const estimatedValue = formData.volumeMT * (formData.incoterm === 'CIF' ? 425 : 375);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#0B142B] border border-agro-gold-500/40 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            
            {/* Header & Steps Indicator */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-agro-gold-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-agro-gold-400">
                  ZENTRA TRADE • প্রাতিষ্ঠানিক আমদানি ডেস্ক
                </span>
              </div>
              <h3 className="font-display font-black text-2xl text-white">
                বাল্ক খাদ্যশস্য আমদানির প্রোফরমা কোটেশন (RFQ)
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                ধাপ {step} এর ৩ — সঠিক তথ্য প্রদান করে জাহাজের স্পেস ও খাতুনগঞ্জ রেট নিশ্চিত করুন।
              </p>

              {/* Progress Steps */}
              <div className="flex items-center gap-2 mt-4">
                {[1, 2, 3].map((s) => (
                  <div 
                    key={s} 
                    className={`h-1.5 flex-1 rounded-full transition-all ${
                      step >= s ? 'bg-gradient-to-r from-agro-gold-500 to-amber-400' : 'bg-slate-800'
                    }`} 
                  />
                ))}
              </div>
            </div>

            <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); setStep(step + 1); }}>
              
              {/* STEP 1: COMMODITY & VOLUME */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      প্রয়োজনীয় খাদ্যপণ্য
                    </label>
                    <select
                      value={formData.commodity}
                      onChange={(e) => handleChange('commodity', e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                    >
                      {commoditiesData.map(c => (
                        <option key={c.id} value={c.name}>{c.name} ({c.origin})</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        অর্ডার পরিমাণ (মেট্রিক টন)
                      </label>
                      <input
                        type="number"
                        min="25"
                        step="25"
                        value={formData.volumeMT}
                        onChange={(e) => handleChange('volumeMT', Number(e.target.value))}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono font-bold text-white focus:border-agro-gold-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        ট্রেড ইনকোটার্মস
                      </label>
                      <select
                        value={formData.incoterm}
                        onChange={(e) => handleChange('incoterm', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      >
                        <option value="CIF">CIF (পণ্যমূল্য, ফ্রেইট ও ইন্স্যুরেন্স সহ)</option>
                        <option value="CFR">CFR (পণ্যমূল্য ও সমুদ্র ফ্রেইট সহ)</option>
                        <option value="FOB">FOB (চীন উৎস বন্দর খালাস)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        খালাস বন্দর / ডেলিভারি পয়েন্ট
                      </label>
                      <input
                        type="text"
                        value={formData.destinationPort}
                        onChange={(e) => handleChange('destinationPort', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        প্যাকেজিং পছন্দ
                      </label>
                      <input
                        type="text"
                        value={formData.packaging}
                        onChange={(e) => handleChange('packaging', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: PAYMENT & LOGISTICS */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      পেমেন্ট ও ব্যাংক এল/সি মাধ্যম
                    </label>
                    <select
                      value={formData.paymentTerm}
                      onChange={(e) => handleChange('paymentTerm', e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                    >
                      <option value="১০০% অলঙ্ঘনীয় লেটার অব ক্রেডিট (L/C at Sight)">
                        ১০০% অলঙ্ঘনীয় লেটার অব ক্রেডিট (100% Irrevocable L/C at Sight)
                      </option>
                      <option value="ক্যাশ এগেইনস্ট ডকুমেন্টস (CAD via Prime Bank)">
                        ক্যাশ এগেইনস্ট ডকুমেন্টস (CAD via Prime Bank)
                      </option>
                      <option value="ইউজেন্স এল/সি ৬০/৯০ দিন (ক্রেডিট রিভিউ সাপেক্ষে)">
                        ইউজেন্স এল/সি ৬০/৯০ দিন (Usance L/C 60/90 Days)
                      </option>
                      <option value="২০% অগ্রিম টিটি + ৮০% বিল অব লেডিং কপি প্রাপ্তিতে">
                        ২০% অগ্রিম টিটি + ৮০% বিল অব লেডিং কপি প্রাপ্তিতে
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      কাঙ্ক্ষিত বন্দর আগমন সময়সূচি
                    </label>
                    <select
                      value={formData.targetMonth}
                      onChange={(e) => handleChange('targetMonth', e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                    >
                      <option value="তাৎক্ষণিক স্পট (১৫ দিনের মধ্যে)">তাৎক্ষণিক স্পট (১৫ দিনের মধ্যে)</option>
                      <option value="আগামী মাস (৩০ দিনের ফরোয়ার্ড চুক্তি)">আগামী মাস (৩০ দিনের ফরোয়ার্ড চুক্তি)</option>
                      <option value="আসন্ন রমজান বাৎসরিক বাফার স্টক">আসন্ন রমজান বাৎসরিক বাফার স্টক</option>
                      <option value="ত্রৈমাসিক মাল্টি-ভ্যাসেল বিস্তার চুক্তি">ত্রৈমাসিক মাল্টি-ভ্যাসেল বিস্তার চুক্তি</option>
                    </select>
                  </div>

                  {/* Drag-and-Drop PO / L/C Upload Simulator */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      পারচেজ অর্ডার / এল/সি ড্রাফট / স্পেসিফিকেশন ফাইল সংযুক্ত করুন (ঐচ্ছিক)
                    </label>
                    <div className="border-2 border-dashed border-slate-700 hover:border-agro-gold-500/60 rounded-2xl p-6 text-center transition-colors bg-slate-950/60 cursor-pointer relative">
                      <input 
                        type="file" 
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                      />
                      <UploadCloud className="w-8 h-8 text-agro-gold-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-300 font-semibold">
                        {uploadedFile ? `সংযুক্ত ফাইল: ${uploadedFile}` : 'PDF / Word ফাইল টেনে আনুন অথবা ব্রাউজ করুন'}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1">
                        সাপোর্টেড ফরম্যাট: PDF, DOCX, XLSX (সর্বোচ্চ ২৫ মেগাবাইট)
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: ENTERPRISE & CONTACT DETAILS */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        প্রতিষ্ঠানের / ডাল মিলের নাম *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="যেমন: মেঘনা অ্যাগ্রো মিলস লি."
                        value={formData.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        ই-টিআইএন / বিআইএন / ট্রেড লাইসেন্স
                      </label>
                      <input
                        type="text"
                        placeholder="যেমন: BIN-00291048-0201"
                        value={formData.tradeLicenseBIN}
                        onChange={(e) => handleChange('tradeLicenseBIN', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        যোগাযোগকারীর নাম *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="যেমন: মোঃ মাসুম আহমেদ"
                        value={formData.contactPerson}
                        onChange={(e) => handleChange('contactPerson', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        হোয়াটসঅ্যাপ / মোবাইল নম্বর *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="যেমন: +880 1712-345678"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      অফিসিয়াল ইমেইল অ্যাড্রেস *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="যেমন: procurement@meghna-agro.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Modal Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 text-xs font-semibold hover:bg-slate-800 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>পূর্ববর্তী</span>
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-agro-gold-500 to-amber-500 text-agro-navy-950 font-bold text-xs shadow-lg hover:shadow-agro-gold-500/30 flex items-center gap-2"
                >
                  <span>{step === 3 ? 'অফিসিয়াল RFQ জমা দিন' : 'পরবর্তী ধাপ'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Submission Confirmation & Official PDF-Style Quotation Sheet */
          <div className="space-y-6 animate-in zoom-in-95">
            
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-black text-2xl text-white">
                RFQ সফলভাবে জমা হয়েছে!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">
                রেফারেন্স কোড: <span className="font-mono text-agro-gold-400 font-bold">ZENTRA-RFQ-{Math.floor(100000 + Math.random() * 900000)}</span>. 
                Zentra Trade-এর সিনিয়র ব্রোকার আগামী ৬০ মিনিটের মধ্যে আপনার সাথে যোগাযোগ করবেন।
              </p>
            </div>

            {/* Printable Formal Spec & Proforma Summary */}
            <div className="p-6 rounded-2xl bg-white text-slate-900 shadow-xl border border-slate-300 font-sans text-xs">
              
              <div className="flex justify-between items-start border-b border-slate-300 pb-3 mb-3">
                <div>
                  <h4 className="font-display font-black text-base tracking-wide text-slate-900">
                    ZENTRA TRADE BANGLADESH
                  </h4>
                  <p className="text-[10px] text-slate-600">চীন ও আন্তর্জাতিক বাল্ক খাদ্যপণ্য আমদানি • চট্টগ্রাম ও মোংলা</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-slate-100 rounded border border-slate-300">
                    PROFORMA ESTIMATE
                  </span>
                  <p className="text-[10px] text-slate-500 mt-1">তারিখ: {new Date().toLocaleDateString('bn-BD')}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3 pb-3 border-b border-slate-200">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">বায়ার / কনসাইনি:</p>
                  <p className="font-bold text-slate-800">{formData.companyName || 'কর্পোরেট ক্লায়েন্ট'}</p>
                  <p className="text-[11px] text-slate-600">মনোযোগ: {formData.contactPerson || 'প্রকিউরমেন্ট ডিপার্টমেন্ট'}</p>
                  <p className="text-[11px] text-slate-600">ফোন: {formData.phone || '+৮৮০ ১৭১১-০০০০০০'}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 font-bold uppercase">ডেলিভারি বিবরণ:</p>
                  <p className="font-semibold text-slate-800">{formData.destinationPort}</p>
                  <p className="text-[11px] text-slate-600">টার্ম: {formData.incoterm} • L/C at Sight</p>
                  <p className="text-[11px] text-slate-600">প্যাকিং: {formData.packaging}</p>
                </div>
              </div>

              <table className="w-full text-left mb-3">
                <thead>
                  <tr className="border-b border-slate-300 text-[10px] uppercase text-slate-500">
                    <th className="py-1">পণ্য</th>
                    <th className="py-1 text-right">পরিমাণ</th>
                    <th className="py-1 text-right">টার্ম</th>
                    <th className="py-1 text-right">মোট দর (টাকা)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-[11px]">
                  <tr>
                    <td className="py-1.5 font-bold text-slate-800">{formData.commodity}</td>
                    <td className="py-1.5 text-right font-mono">{formData.volumeMT} MT</td>
                    <td className="py-1.5 text-right">{formData.incoterm}</td>
                    <td className="py-1.5 text-right font-mono font-bold text-amber-700">
                      {convertPrice(estimatedValue, selectedCurrency)}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="p-2 rounded bg-slate-100 border border-slate-200 text-[10px] text-slate-600">
                <p>✓ গুণগত মান গ্যারান্টি: জাহাজে বোঝাইয়ের পূর্বে SGS ও CIQ ল্যাব টেস্টে ৯৯.৫% বিশুদ্ধতা প্রত্যয়িত।</p>
                <p>✓ সকল চালান জাতীয় উদ্ভিদ সংগনিরোধ (NPPO) ও রেডিয়েশন-মুক্ত সনদপ্রাপ্ত।</p>
              </div>

            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrintQuote}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Printer className="w-4 h-4 text-agro-gold-400" />
                <span>প্রিন্ট / PDF ডাউনলোড</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-agro-gold-500 hover:bg-agro-gold-400 text-agro-navy-950 font-bold text-xs shadow-lg transition-colors"
              >
                সম্পন্ন
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
