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
  Info
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

  // Port ocean freight adjustments (USD per MT)
  const freightMatrix = {
    chittagong: 55, // USD/MT from Vancouver/Brisbane to CPA
    mongla: 58,     // USD/MT
    singapore: 35,
    jebelali: 45
  };

  // Packaging adjustment (USD per MT)
  const packagingMatrix = {
    '50kg-pp-bags': 18, // Clean standard bag packing
    'bulk-liner': 6,    // Lowest cost bulk 20ft container liner
    '1ton-jumbo': 14    // Jumbo FIBC big bags
  };

  // Delivery schedule premium
  const scheduleMatrix = {
    'prompt-15d': 8, // Prompt spot dispatch
    'forward-30d': 0, // Standard forward contract
    'forward-60d': -6 // Future crop booking discount
  };

  // Calculate pricing based on Incoterm
  const baseFobPrice = selectedCommodity.basePriceFOB;
  const freightCost = (incoterm === 'CIF' || incoterm === 'CFR') ? freightMatrix[destinationPort] : 0;
  const insuranceCost = incoterm === 'CIF' ? 7.5 : 0; // Maritime all-risk insurance USD/MT
  const packCost = packagingMatrix[packagingType];
  const scheduleAdjustment = scheduleMatrix[deliverySchedule];

  const effectiveRatePerMT = baseFobPrice + freightCost + insuranceCost + packCost + scheduleAdjustment;
  const totalOrderValueUSD = effectiveRatePerMT * metricTons;
  
  // Approximate container counts (assuming 25 MT per 20ft FCL)
  const approxContainers = Math.ceil(metricTons / 25);

  const handleGenerateRFQ = () => {
    const quotePayload = {
      commodity: selectedCommodity.name,
      volumeMT: metricTons,
      incoterm,
      destinationPort: destinationPort === 'chittagong' ? 'Chittagong Port (CPA)' : destinationPort.toUpperCase(),
      packaging: packagingType,
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
            <span>Real-Time Pricing Engine</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Interactive Bulk <span className="text-agro-gold-400">CIF / FOB Calculator</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Estimate direct ocean freight, cargo insurance, packaging formats, and landed costs to Chittagong or Mongla Port.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Col 7) */}
          <div className="lg:col-span-7 bg-[#0B132B]/90 rounded-3xl border border-agro-gold-500/25 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            
            {/* 1. Commodity Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Select Agricultural Commodity
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
                  2. Order Volume (Metric Tons)
                </label>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xl font-black text-agro-gold-400">
                    {metricTons.toLocaleString()} <span className="text-xs font-sans text-slate-300">MT</span>
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-agro-navy-800 border border-slate-700 text-slate-300">
                    ~{approxContainers} Containers (FCL)
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
                <span>25 MT (1 FCL)</span>
                <span>250 MT</span>
                <span>500 MT</span>
                <span>1,500 MT</span>
                <span>5,000 MT (Vessel Hold)</span>
              </div>
            </div>

            {/* 3. Incoterms & Destination Port */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Incoterms Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  3. Trade Incoterms
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
                  {incoterm === 'CIF' && 'Cost, Ocean Freight & Full Marine Insurance included.'}
                  {incoterm === 'CFR' && 'Cost and Ocean Freight included (Buyer handles insurance).'}
                  {incoterm === 'FOB' && 'Free On Board origin terminal (Buyer arranges ocean freight).'}
                </p>
              </div>

              {/* Destination Port */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  4. Discharge Port
                </label>
                <select
                  value={destinationPort}
                  onChange={(e) => setDestinationPort(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold focus:border-agro-gold-500 focus:outline-none"
                >
                  <option value="chittagong">Chittagong Port Authority (CPA) - Bangladesh</option>
                  <option value="mongla">Mongla Port - Bangladesh</option>
                  <option value="singapore">Singapore Transshipment (PSA)</option>
                  <option value="jebelali">Jebel Ali Port - Dubai (UAE)</option>
                </select>
              </div>

            </div>

            {/* 4. Packaging Format & Delivery Schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  5. Packaging Specification
                </label>
                <select
                  value={packagingType}
                  onChange={(e) => setPackagingType(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold focus:border-agro-gold-500 focus:outline-none"
                >
                  <option value="50kg-pp-bags">50 kg Woven PP Bags (+ Inner Liner)</option>
                  <option value="bulk-liner">Bulk Container Liners (In 20ft FCL)</option>
                  <option value="1ton-jumbo">1,000 kg Jumbo Bags (FIBC Totes)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  6. Shipment Window
                </label>
                <select
                  value={deliverySchedule}
                  onChange={(e) => setDeliverySchedule(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold focus:border-agro-gold-500 focus:outline-none"
                >
                  <option value="prompt-15d">Prompt Spot Loading (10 - 15 Days)</option>
                  <option value="forward-30d">30-Day Forward Contract</option>
                  <option value="forward-60d">60-Day Forward Crop Booking (Discounted)</option>
                </select>
              </div>

            </div>

          </div>

          {/* Right: Live Landed Quotation Dossier & Lock-In Button (Col 5) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F1A38] to-[#0B132B] rounded-3xl border-2 border-agro-gold-500/40 p-6 sm:p-8 shadow-2xl relative">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-agro-gold-500/20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-agro-gold-400" />
                <span className="font-display font-black text-sm tracking-wide text-white uppercase">
                  Quotation Estimate
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                Live Pricing Matrix
              </span>
            </div>

            {/* Selected Commodity Summary */}
            <div className="mb-6">
              <span className="text-[11px] text-slate-400 block font-medium">Selected Commodity:</span>
              <h3 className="font-display font-bold text-lg text-agro-gold-300">
                {selectedCommodity.name}
              </h3>
              <p className="text-xs text-slate-300">
                Origin: {selectedCommodity.origin} • {selectedCommodity.grade}
              </p>
            </div>

            {/* Detailed Financial Breakdown */}
            <div className="space-y-3 text-xs mb-6">
              
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Base Farmgate / FOB Price:</span>
                <span className="font-mono font-bold text-white">
                  ${baseFobPrice.toFixed(2)} / MT
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Ocean Freight to {destinationPort.toUpperCase()}:</span>
                <span className="font-mono font-bold text-cyan-300">
                  {freightCost > 0 ? `+$${freightCost.toFixed(2)} / MT` : '$0.00 (FOB terms)'}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Maritime All-Risk Insurance:</span>
                <span className="font-mono font-bold text-white">
                  {insuranceCost > 0 ? `+$${insuranceCost.toFixed(2)} / MT` : 'Not Included'}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Packaging Format Cost:</span>
                <span className="font-mono font-bold text-white">
                  +${packCost.toFixed(2)} / MT
                </span>
              </div>

              {scheduleAdjustment !== 0 && (
                <div className="flex items-center justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Forward Contract Adjustment:</span>
                  <span className={`font-mono font-bold ${scheduleAdjustment < 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {scheduleAdjustment < 0 ? `-$${Math.abs(scheduleAdjustment)}.00 / MT` : `+$${scheduleAdjustment}.00 / MT`}
                  </span>
                </div>
              )}

              {/* Effective Rate per MT */}
              <div className="p-3 rounded-2xl bg-agro-navy-950 border border-agro-gold-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-agro-gold-400 block">
                    Calculated {incoterm} Rate / MT
                  </span>
                  <span className="font-mono text-2xl font-black text-white">
                    {convertPrice(effectiveRatePerMT, selectedCurrency)}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  (${effectiveRatePerMT.toFixed(2)} USD)
                </span>
              </div>

            </div>

            {/* Total Estimated Consignment Value */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-agro-gold-500/20 to-amber-500/10 border border-agro-gold-500/40 mb-6">
              <span className="text-[11px] uppercase font-bold tracking-wider text-agro-gold-300 block">
                Total Consignment Valuation ({metricTons.toLocaleString()} MT):
              </span>
              <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mt-1">
                {convertPrice(totalOrderValueUSD, selectedCurrency)}
              </div>
              <p className="text-[11px] text-slate-300 mt-1">
                Equal to approx. ${totalOrderValueUSD.toLocaleString()} USD ({approxContainers} x 20' Dry Containers)
              </p>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleGenerateRFQ}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-agro-gold-500 via-amber-400 to-agro-gold-600 text-agro-navy-950 font-display font-black text-sm tracking-wide shadow-xl shadow-agro-gold-500/30 hover:shadow-agro-gold-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Lock-In This Rate & Request Official RFQ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[10px] text-slate-400 text-center mt-3">
              ⚡ Quotes subject to final confirmation of ocean freight booking & Letter of Credit (L/C) opening.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
