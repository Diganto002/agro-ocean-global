import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Ship, 
  Anchor, 
  ShieldCheck, 
  Layers, 
  FileCheck2, 
  ArrowRight, 
  Sliders, 
  Coins, 
  Package,
  Calendar,
  Sparkles,
  Info,
  MapPin
} from 'lucide-react';
import { commoditiesData } from '../data/commoditiesData';
import { convertPrice, currencies } from '../data/marketRates';

export default function BulkQuoteCalculator({ 
  selectedCurrency, 
  preSelectedCommodity, 
  onLockInQuote 
}) {
  const [commodityId, setCommodityId] = useState(commoditiesData[0].id);
  const [metricTons, setMetricTons] = useState(500); // 500 MT default
  const [incoterm, setIncoterm] = useState('CIF'); // CIF, FOB, CFR
  const [destinationPort, setDestinationPort] = useState('chittagong');
  const [packagingType, setPackagingType] = useState('50kg-pp-bags');
  const [deliverySchedule, setDeliverySchedule] = useState('prompt-15d');

  // Sync if pre-selected from another section
  useEffect(() => {
    if (preSelectedCommodity) {
      setCommodityId(preSelectedCommodity.id);
    }
  }, [preSelectedCommodity]);

  const selectedCommodity = commoditiesData.find(c => c.id === commodityId) || commoditiesData[0];

  // Port ocean freight adjustments (USD per MT from China/Regional to BD)
  const freightMatrix = {
    chittagong: 45, // USD/MT China (Guangzhou) to Chittagong
    mongla: 48,     // USD/MT
    benapole: 32,   // USD/MT overland rail/road
    khatunganj: 52  // Delivered to Khatunganj warehouse gate
  };

  // Packaging adjustment (USD per MT)
  const packagingMatrix = {
    '50kg-pp-bags': 16, // Clean standard 50kg bag packing
    'bulk-liner': 6,    // Lowest cost bulk 20ft container liner
    '1ton-jumbo': 12    // Jumbo FIBC big bags
  };

  // Delivery schedule premium
  const scheduleMatrix = {
    'prompt-15d': 6,  // Spot prompt dispatch
    'forward-30d': 0,  // Standard forward L/C
    'forward-60d': -6  // Seasonal forward booking discount
  };

  // Calculate pricing based on Incoterm
  const baseFobPrice = selectedCommodity.basePriceFOB;
  const freightCost = (incoterm === 'CIF' || incoterm === 'CFR') ? freightMatrix[destinationPort] : 0;
  const insuranceCost = incoterm === 'CIF' ? 6.5 : 0; // Maritime all-risk insurance USD/MT
  const packCost = packagingMatrix[packagingType];
  const scheduleAdjustment = scheduleMatrix[deliverySchedule];

  const effectiveRatePerMT = baseFobPrice + freightCost + insuranceCost + packCost + scheduleAdjustment;
  const totalOrderValueUSD = effectiveRatePerMT * metricTons;
  
  // Approximate container counts (assuming 25 MT per 20ft FCL)
  const approxContainers = Math.ceil(metricTons / 25);
  // Approximate 50kg bag count
  const approxBags = metricTons * 20;

  const handleGenerateRFQ = () => {
    const portLabels = {
      chittagong: 'চট্টগ্রাম বন্দর (CPA)',
      mongla: 'মোংলা বন্দর',
      benapole: 'বেনাপোল স্থলবন্দর',
      khatunganj: 'খাতুনগঞ্জ আড়ত ডেলিভারি'
    };

    const quotePayload = {
      commodity: selectedCommodity.name,
      volumeMT: metricTons,
      incoterm,
      destinationPort: portLabels[destinationPort] || destinationPort,
      packaging: packagingType === '50kg-pp-bags' ? '৫০ কেজি পিপি ব্যাগ' : 'বাল্ক লাইনার',
      schedule: deliverySchedule,
      ratePerMT: effectiveRatePerMT,
      totalValueUSD: totalOrderValueUSD,
      approxContainers
    };
    onLockInQuote(quotePayload);
  };

  return (
    <section id="calculator" className="py-20 bg-[#090F20] relative border-t border-slate-800">
      
      {/* Decorative lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agro-gold-500/10 border border-agro-gold-500/30 text-agro-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>বাংলাদেশ আমদানি ও ল্যান্ডেড প্রাইসিং ইঞ্জিন</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            বাল্ক কোটেশন ও <span className="text-agro-gold-400">CIF / FOB ক্যালকুলেটর</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            চীন ও আন্তর্জাতিক পোর্ট থেকে চট্টগ্রাম বা মোংলা বন্দরে সরাসরি জাহাজে খাদ্যশস্য আমদানির ল্যান্ডেড খরচ ও টাকার দর হিসাব করুন।
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Col 7) */}
          <div className="lg:col-span-7 bg-[#0B132B]/90 rounded-3xl border border-agro-gold-500/25 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            
            {/* 1. Commodity Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                ১. আমদানিকৃত কৃষি পণ্য নির্বাচন করুন
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {commoditiesData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCommodityId(item.id)}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      commodityId === item.id
                        ? 'border-agro-gold-500 bg-agro-gold-500/15 text-white shadow-md'
                        : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div>
                      <p className="font-bold text-xs text-white">{item.name}</p>
                      <p className="text-[10px] text-agro-gold-400/90">{item.origin.split(' ')[0]}</p>
                    </div>
                    {commodityId === item.id && (
                      <span className="w-2.5 h-2.5 rounded-full bg-agro-gold-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Volume in Metric Tons (MT) Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  ২. অর্ডার ভলিউম (মেট্রিক টন)
                </label>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xl font-black text-agro-gold-400">
                    {metricTons.toLocaleString('en-IN')} <span className="text-xs font-sans text-slate-300">MT</span>
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-agro-navy-800 border border-slate-700 text-slate-300">
                    ~{approxContainers}টি ২০' কন্টেইনার ({approxBags.toLocaleString('en-IN')} বস্তা)
                  </span>
                </div>
              </div>

              {/* Slider Input */}
              <input 
                type="range"
                min="25"
                max="5000"
                step="25"
                value={metricTons}
                onChange={(e) => setMetricTons(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-agro-gold-500"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1.5">
                <span>২৫ MT (১ কনটেইনার)</span>
                <span>২৫০ MT</span>
                <span>৫০০ MT</span>
                <span>১,৫০০ MT</span>
                <span>৫,০০০ MT (বাল্ক হোল্ড)</span>
              </div>
            </div>

            {/* 3. Incoterms & Destination Port */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Incoterms Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  ৩. ট্রেড ইনকোটার্মস (Incoterms)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['CIF', 'CFR', 'FOB'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setIncoterm(term)}
                      className={`py-2 px-3 rounded-xl text-xs font-black transition-all ${
                        incoterm === term
                          ? 'bg-agro-gold-500 text-agro-navy-950 shadow-md'
                          : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {term}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 mt-1.5">
                  {incoterm === 'CIF' && 'পণ্যমূল্য, সমুদ্র ফ্রেইট ও অল-রিস্ক মেরিন ইন্স্যুরেন্স অন্তর্ভুক্ত।'}
                  {incoterm === 'CFR' && 'পণ্যমূল্য ও সমুদ্র ফ্রেইট অন্তর্ভুক্ত (ইন্স্যুরেন্স বায়ারের)।'}
                  {incoterm === 'FOB' && 'চীন বন্দরে জাহাজে তুলে দেওয়ার মূল্য (ফ্রেইট বায়ার বহন করবে)।'}
                </p>
              </div>

              {/* Destination Port in Bangladesh */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  ৪. খালাস বন্দর / ডেলিভারি হাব
                </label>
                <select
                  value={destinationPort}
                  onChange={(e) => setDestinationPort(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold focus:border-agro-gold-500 focus:outline-none"
                >
                  <option value="chittagong">চট্টগ্রাম বন্দর (CPA) - প্রধান জেটি ও বহির্নোঙ্গর</option>
                  <option value="mongla">মোংলা বন্দর - দ্রুত লাইটারেজ খালাস</option>
                  <option value="khatunganj">খাতুনগঞ্জ আড়ত গেট ডেলিভারি (চট্টগ্রাম)</option>
                  <option value="benapole">বেনাপোল স্থলবন্দর (রেল ও রোড কার্গো)</option>
                </select>
              </div>

            </div>

            {/* 4. Packaging Format & Delivery Schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  ৫. প্যাকেজিং স্পেসিফিকেশন
                </label>
                <select
                  value={packagingType}
                  onChange={(e) => setPackagingType(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold focus:border-agro-gold-500 focus:outline-none"
                >
                  <option value="50kg-pp-bags">৫০ কেজি হেভি-ডিউটি পিপি বস্তা (খাতুনগঞ্জ ট্রেড)</option>
                  <option value="bulk-liner">বাল্ক কনটেইনার লাইনার (২০ ফুট FCL)</option>
                  <option value="1ton-jumbo">১,০০০ কেজি জাম্বো বিগ ব্যাগ (FIBC)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  ৬. জাহাজীকরণ সময়সূচি
                </label>
                <select
                  value={deliverySchedule}
                  onChange={(e) => setDeliverySchedule(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold focus:border-agro-gold-500 focus:outline-none"
                >
                  <option value="prompt-15d">তাৎক্ষণিক স্পট শিপমেন্ট (১০ - ১৫ দিন)</option>
                  <option value="forward-30d">৩০ দিন ফরোয়ার্ড এল/সি চুক্তি</option>
                  <option value="forward-60d">৬০ দিন অগ্রিম সিজনাল ক্রপ বুকিং (ডিসকাউন্টেড)</option>
                </select>
              </div>

            </div>

          </div>

          {/* Right: Live Landed Quotation Dossier in BDT & USD */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F1A38] to-[#0B132B] rounded-3xl border-2 border-agro-gold-500/40 p-6 sm:p-8 shadow-2xl relative">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-agro-gold-500/20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-agro-gold-400" />
                <span className="font-display font-black text-sm tracking-wide text-white uppercase">
                  আনুমানিক প্রাক্কলন কোটেশন
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                লাইভ ব্যাংক এক্সচেঞ্জ রেট
              </span>
            </div>

            {/* Selected Commodity Summary */}
            <div className="mb-6">
              <span className="text-[11px] text-slate-400 block font-medium">নির্বাচিত পণ্য:</span>
              <h3 className="font-display font-bold text-lg text-agro-gold-300">
                {selectedCommodity.name}
              </h3>
              <p className="text-xs text-slate-300">
                উৎস: {selectedCommodity.origin} • {selectedCommodity.grade}
              </p>
            </div>

            {/* Detailed Financial Breakdown */}
            <div className="space-y-3 text-xs mb-6">
              
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">উৎস পোর্ট / FOB রেট:</span>
                <span className="font-mono font-bold text-white">
                  ${baseFobPrice.toFixed(2)} / MT
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">সমুদ্র ফ্রেইট (চীন থেকে বাংলাদেশ):</span>
                <span className="font-mono font-bold text-cyan-300">
                  {freightCost > 0 ? `+$${freightCost.toFixed(2)} / MT` : '$০.০০ (FOB শর্তে)'}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">মেরিন অল-রিস্ক কার্গো ইন্স্যুরেন্স:</span>
                <span className="font-mono font-bold text-white">
                  {insuranceCost > 0 ? `+$${insuranceCost.toFixed(2)} / MT` : 'অন্তর্ভুক্ত নয়'}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">প্যাকেজিং খরচ (বস্তা):</span>
                <span className="font-mono font-bold text-white">
                  +${packCost.toFixed(2)} / MT
                </span>
              </div>

              {/* Effective Rate per MT in BDT and USD */}
              <div className="p-3 rounded-2xl bg-agro-navy-950 border border-agro-gold-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-agro-gold-400 block">
                    কার্যকরী {incoterm} রেট / মেট্রিক টন
                  </span>
                  <span className="font-mono text-2xl font-black text-white">
                    {convertPrice(effectiveRatePerMT, selectedCurrency)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-slate-400 block">
                    (${effectiveRatePerMT.toFixed(2)} USD)
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold">
                    ~৳{((effectiveRatePerMT * 122.5) / 1000).toFixed(1)}/কেজি
                  </span>
                </div>
              </div>

            </div>

            {/* Total Estimated Consignment Value */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-agro-gold-500/20 to-amber-500/10 border border-agro-gold-500/40 mb-6">
              <span className="text-[11px] uppercase font-bold tracking-wider text-agro-gold-300 block">
                মোট কনসাইনমেন্ট মূল্য ({metricTons.toLocaleString('en-IN')} মেট্রিক টন):
              </span>
              <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mt-1">
                {convertPrice(totalOrderValueUSD, selectedCurrency)}
              </div>
              <p className="text-[11px] text-slate-300 mt-1">
                সমান আনুমানিক ${totalOrderValueUSD.toLocaleString()} USD ({approxContainers}টি ২০ ফুট কনটেইনার বা বাল্ক হোল্ড)
              </p>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleGenerateRFQ}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-agro-gold-500 via-amber-400 to-agro-gold-600 text-agro-navy-950 font-display font-black text-sm tracking-wide shadow-xl shadow-agro-gold-500/30 hover:shadow-agro-gold-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
            >
              <span>এই রেটে অফিসিয়াল প্রোফরমা ইনভয়েস চান</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[10px] text-slate-400 text-center mt-3">
              ⚡ বাংলাদেশ ব্যাংক বিধিমালা ও ব্যাংকে L/C নিশ্চিতকরণের পর চূড়ান্ত মূল্য কার্যকর হবে।
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
