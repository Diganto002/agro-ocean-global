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
    commodity: 'Canadian Yellow Split Peas',
    volumeMT: 500,
    incoterm: 'CIF',
    destinationPort: 'Chittagong Port Authority (CPA)',
    packaging: '50 kg Woven PP Bags with Inner Liner',
    paymentTerm: '100% Irrevocable Letter of Credit (L/C) at Sight',
    targetMonth: 'Prompt (Within 15 Days)',
    companyName: '',
    contactPerson: '',
    designation: 'Managing Director / Procurement Head',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in">
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
                  Direct Institutional Import Desk
                </span>
              </div>
              <h3 className="font-display font-black text-2xl text-white">
                Request Formal Proforma / Bulk RFQ
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Step {step} of 3 — Complete trade requirements for verified pricing and vessel allocation.
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
                      Commodity Required
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
                        Order Volume (Metric Tons)
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
                        Incoterms
                      </label>
                      <select
                        value={formData.incoterm}
                        onChange={(e) => handleChange('incoterm', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      >
                        <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                        <option value="CFR">CFR (Cost & Ocean Freight)</option>
                        <option value="FOB">FOB (Free On Board Origin)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        Discharge Port
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
                        Packaging
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
                      Acceptable Payment Terms
                    </label>
                    <select
                      value={formData.paymentTerm}
                      onChange={(e) => handleChange('paymentTerm', e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                    >
                      <option value="100% Irrevocable Letter of Credit (L/C) at Sight">
                        100% Irrevocable Letter of Credit (L/C) at Sight
                      </option>
                      <option value="Cash Against Documents (CAD) via Prime Bank">
                        Cash Against Documents (CAD) via Prime Bank
                      </option>
                      <option value="Usance L/C 60/90 Days (Subject to Credit Review)">
                        Usance L/C 60/90 Days (Subject to Credit Review)
                      </option>
                      <option value="20% Advance TT + 80% Against BL Copy">
                        20% Advance TT + 80% Against BL Copy
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      Target Port Arrival Window
                    </label>
                    <select
                      value={formData.targetMonth}
                      onChange={(e) => handleChange('targetMonth', e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                    >
                      <option value="Prompt (Within 15 Days)">Prompt (Within 15 Days)</option>
                      <option value="Next Month (30 Days Forward)">Next Month (30 Days Forward)</option>
                      <option value="Upcoming Season / Ramadan Buffer Window">Upcoming Season / Ramadan Buffer Window</option>
                      <option value="Quarterly Multi-Vessel Spread Contract">Quarterly Multi-Vessel Spread Contract</option>
                    </select>
                  </div>

                  {/* Drag-and-Drop PO / L/C Upload Simulator */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      Attach Purchase Order / L/C Draft / Mill Specs (Optional)
                    </label>
                    <div className="border-2 border-dashed border-slate-700 hover:border-agro-gold-500/60 rounded-2xl p-6 text-center transition-colors bg-slate-950/60 cursor-pointer relative">
                      <input 
                        type="file" 
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                      />
                      <UploadCloud className="w-8 h-8 text-agro-gold-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-300 font-semibold">
                        {uploadedFile ? `Attached: ${uploadedFile}` : 'Drag & drop your PDF / Word document or click to browse'}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1">
                        Supported: PDF, DOCX, XLSX (Up to 25MB)
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
                        Company / Mill Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Meghna Agro Mills Ltd."
                        value={formData.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        BIN / Trade License No
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. BIN-00291048-0201"
                        value={formData.tradeLicenseBIN}
                        onChange={(e) => handleChange('tradeLicenseBIN', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Masum Ahmed"
                        value={formData.contactPerson}
                        onChange={(e) => handleChange('contactPerson', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        WhatsApp / Mobile No *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +880 1712-345678"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-agro-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      Official Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. procurement@meghna-agro.com"
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
                    <span>Previous</span>
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-agro-gold-500 to-amber-500 text-agro-navy-950 font-bold text-xs shadow-lg hover:shadow-agro-gold-500/30 flex items-center gap-2"
                >
                  <span>{step === 3 ? 'Submit Institutional RFQ' : 'Continue to Next Step'}</span>
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
                RFQ Confirmed & Dispatched!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">
                Ref Code: <span className="font-mono text-agro-gold-400 font-bold">RFQ-AGRO-{Math.floor(100000 + Math.random() * 900000)}</span>. 
                Our Commodity Trading Desk will contact you on WhatsApp/Phone within 60 minutes.
              </p>
            </div>

            {/* Printable Formal Spec & Proforma Summary */}
            <div className="p-6 rounded-2xl bg-white text-slate-900 shadow-xl border border-slate-300 font-sans text-xs">
              
              <div className="flex justify-between items-start border-b border-slate-300 pb-3 mb-3">
                <div>
                  <h4 className="font-display font-black text-base tracking-wide text-slate-900">
                    AGRO-OCEAN GLOBAL ENTERPRISE
                  </h4>
                  <p className="text-[10px] text-slate-600">Agricultural Wholesale Imports • Chittagong & Mongla</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-slate-100 rounded border border-slate-300">
                    PROFORMA ESTIMATE
                  </span>
                  <p className="text-[10px] text-slate-500 mt-1">Date: {new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3 pb-3 border-b border-slate-200">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Consignee / Buyer:</p>
                  <p className="font-bold text-slate-800">{formData.companyName || 'Corporate Client'}</p>
                  <p className="text-[11px] text-slate-600">Attn: {formData.contactPerson || 'Procurement Desk'}</p>
                  <p className="text-[11px] text-slate-600">Phone: {formData.phone || '+880-1700-000000'}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Discharge Details:</p>
                  <p className="font-semibold text-slate-800">{formData.destinationPort}</p>
                  <p className="text-[11px] text-slate-600">Terms: {formData.incoterm} • L/C at Sight</p>
                  <p className="text-[11px] text-slate-600">Packing: {formData.packaging}</p>
                </div>
              </div>

              <table className="w-full text-left mb-3">
                <thead>
                  <tr className="border-b border-slate-300 text-[10px] uppercase text-slate-500">
                    <th className="py-1">Commodity</th>
                    <th className="py-1 text-right">Volume</th>
                    <th className="py-1 text-right">Term</th>
                    <th className="py-1 text-right">Estimated Total</th>
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
                <p>✓ Quality Guarantee: Certified 99.5% Purity by SGS inspection before vessel departure.</p>
                <p>✓ All shipments backed by official Phytosanitary & Non-Radiation certificates.</p>
              </div>

            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrintQuote}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Printer className="w-4 h-4 text-agro-gold-400" />
                <span>Print / Save PDF Quote</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-agro-gold-500 hover:bg-agro-gold-400 text-agro-navy-950 font-bold text-xs shadow-lg transition-colors"
              >
                Done
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
