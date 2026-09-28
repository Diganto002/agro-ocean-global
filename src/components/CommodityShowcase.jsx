import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ShieldCheck, 
  Package, 
  SlidersHorizontal, 
  Scale, 
  FileText, 
  ArrowUpRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { commoditiesData, commodityCategories, originCountries } from '../data/commoditiesData';
import { convertPrice } from '../data/marketRates';

export default function CommodityShowcase({ 
  selectedCurrency, 
  onSelectCommodityForQuote,
  onOpenSpecModal 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeOrigin, setActiveOrigin] = useState('all');
  const [expandedCardId, setExpandedCardId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  const filteredCommodities = commoditiesData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesOrigin = activeOrigin === 'all' || item.origin.toLowerCase().includes(activeOrigin);
    return matchesCategory && matchesOrigin;
  });

  return (
    <section id="commodities" className="py-24 bg-[#070B18] relative overflow-hidden">
      
      {/* Decorative ambient elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-agro-gold-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agro-gold-500/10 border border-agro-gold-500/30 text-agro-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Bulk Portfolio</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Premium Agricultural <br />
            <span className="bg-gradient-to-r from-agro-gold-400 via-amber-300 to-agro-gold-500 bg-clip-text text-transparent">
              Pulses, Peas & Legumes
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            Specialized wholesale import supplies designed for Dal processing mills, packaged retail re-packers, and bulk commodity trading across Bangladesh.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-agro-navy-900/60 border border-slate-800/80 mb-10 backdrop-blur-md">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {commodityCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-agro-gold-500 text-agro-navy-950 shadow-lg shadow-agro-gold-500/20'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Origin Country Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
              <Filter className="w-3.5 h-3.5 text-agro-gold-400" />
              <span>Origin:</span>
            </span>
            <div className="flex items-center gap-1">
              {originCountries.map((org) => (
                <button
                  key={org.id}
                  onClick={() => setActiveOrigin(org.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeOrigin === org.id
                      ? 'bg-agro-navy-700 text-agro-gold-300 border border-agro-gold-500/50'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {org.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Commodity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCommodities.map((item) => {
            const isExpanded = expandedCardId === item.id;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-[#0D152A] border border-slate-800 hover:border-agro-gold-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-agro-gold-500/10 flex flex-col overflow-hidden"
              >
                {/* Product Image Frame */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D152A] via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-agro-navy-900/90 text-agro-gold-300 border border-agro-gold-500/30 text-[11px] font-bold shadow-md">
                      {item.origin}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/90 text-agro-navy-950 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                      {item.badge}
                    </span>
                  </div>

                  {/* Live CIF Chittagong Price pill */}
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-agro-navy-950/90 backdrop-blur-md border border-white/10 text-xs">
                    <span className="text-slate-400 text-[10px] block">Indicative CIF Chittagong:</span>
                    <span className="font-mono font-black text-agro-gold-400 text-sm">
                      {convertPrice(item.basePriceCIF, selectedCurrency)} <span className="text-[10px] font-sans text-slate-300">/ MT</span>
                    </span>
                  </div>

                  {/* Grade Badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-slate-900/80 border border-slate-700 text-[11px] text-slate-300 font-medium">
                    {item.grade.split(' ')[0]} {item.grade.split(' ')[1]}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div>
                    {/* Local Bengali Title */}
                    <p className="text-xs font-semibold text-agro-gold-400/90 mb-1">
                      {item.localName}
                    </p>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-agro-gold-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Core Laboratory Specs Badges */}
                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                    <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span className="text-slate-400 text-[10px] block">Purity</span>
                      <span className="font-bold text-emerald-400 font-mono">{item.specs.purity}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span className="text-slate-400 text-[10px] block">Moisture</span>
                      <span className="font-bold text-white font-mono">{item.specs.moisture}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span className="text-slate-400 text-[10px] block">Foreign Matter</span>
                      <span className="font-bold text-cyan-400 font-mono">{item.specs.foreignMatter}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span className="text-slate-400 text-[10px] block">
                        {item.specs.caliber ? 'Seed Caliber' : 'Protein'}
                      </span>
                      <span className="font-bold text-amber-300 font-mono">
                        {item.specs.caliber || item.specs.protein}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Specifications Tray */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-800 space-y-3 text-xs animate-in fade-in slide-in-from-top-2">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-agro-gold-400 tracking-wider">
                          Standard Packaging Options:
                        </span>
                        <ul className="mt-1 space-y-1 text-slate-300">
                          {item.packaging.map((pkg, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <Package className="w-3.5 h-3.5 text-agro-gold-400 flex-shrink-0 mt-0.5" />
                              <span>{pkg}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                          Official Inspection & Certificates:
                        </span>
                        <ul className="mt-1 space-y-1 text-slate-300">
                          {item.testCertificates.map((cert, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-2.5 rounded-xl bg-agro-navy-950 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-400">Minimum Order Qty (MOQ):</span>
                        <span className="font-bold text-white font-mono">{item.minOrderQuantity} Metric Tons</span>
                      </div>
                    </div>
                  )}

                  {/* Card Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    
                    {/* Toggle Specs Tray */}
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 flex items-center gap-1 transition-colors"
                      title="Expand Technical Details"
                    >
                      <span>{isExpanded ? 'Less' : 'Specs'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {/* Instant Add to RFQ Calculator */}
                    <button
                      onClick={() => onSelectCommodityForQuote(item)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-agro-gold-500 hover:bg-agro-gold-400 text-agro-navy-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>Calculate CIF Quote</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Fast-Action Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-agro-navy-900 via-agro-navy-850 to-agro-navy-900 border border-agro-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-agro-gold-500/10 border border-agro-gold-500/30 flex items-center justify-center flex-shrink-0">
              <Scale className="w-7 h-7 text-agro-gold-400" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                Need Custom Caliber Sorting or Specific Dal-Mill Contract Specs?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                We broker direct containerized consignments and charter vessel holds tailored to your flour and mill extraction ratios.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenSpecModal && onOpenSpecModal()}
              className="w-full md:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-700 whitespace-nowrap transition-colors"
            >
              View Full 2026 Lab Analysis
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
