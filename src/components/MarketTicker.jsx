import React from 'react';
import { TrendingUp, TrendingDown, Ship, Radio, AlertCircle } from 'lucide-react';
import { liveMarketTickerData, convertPrice } from '../data/marketRates';

export default function MarketTicker({ selectedCurrency, onSelectCommodityForQuote }) {
  // Double data array for seamless loop
  const tickerItems = [...liveMarketTickerData, ...liveMarketTickerData];

  return (
    <div className="w-full bg-[#050811] border-y border-agro-gold-500/20 py-2.5 overflow-hidden relative shadow-inner">
      {/* Side fades for infinite carousel polish */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050811] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050811] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center">
        {/* Static live badge */}
        <div className="flex-shrink-0 z-20 pl-4 pr-3 flex items-center gap-2 border-r border-slate-700/80 bg-[#050811]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-black uppercase tracking-widest text-agro-gold-400 whitespace-nowrap flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-agro-gold-400" />
            <span>TRADE DESK LIVE</span>
          </span>
        </div>

        {/* Marquee Track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap pl-4">
          {tickerItems.map((item, idx) => {
            const isNumericPrice = typeof item.price === 'number';
            return (
              <div 
                key={idx}
                onClick={() => onSelectCommodityForQuote && onSelectCommodityForQuote(item.commodity)}
                className="inline-flex items-center gap-3 mx-4 px-3 py-1 rounded-lg bg-agro-navy-900/60 border border-slate-800 hover:border-agro-gold-500/40 hover:bg-agro-navy-800 transition-all cursor-pointer group"
              >
                <span className="text-xs font-semibold text-slate-200 group-hover:text-agro-gold-300 transition-colors">
                  {item.commodity}
                </span>

                <span className="text-xs font-mono font-bold text-white bg-agro-navy-800 px-2 py-0.5 rounded border border-slate-700">
                  {isNumericPrice 
                    ? `${convertPrice(item.price, selectedCurrency)}/MT`
                    : item.price
                  }
                </span>

                <span className={`text-[11px] font-medium flex items-center gap-0.5 ${
                  item.changeType === 'up' ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {item.changeType === 'up' ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  <span>{item.change}</span>
                </span>

                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  [{item.term}]
                </span>

                <span className="text-[10px] text-agro-gold-400/80 font-mono">
                  • {item.volume}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
