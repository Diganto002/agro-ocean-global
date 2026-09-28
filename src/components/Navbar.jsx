import React, { useState, useEffect } from 'react';
import { 
  Ship, 
  Anchor, 
  Globe2, 
  Calculator, 
  ShieldCheck, 
  PhoneCall, 
  FileText, 
  ChevronDown, 
  Menu, 
  X,
  Compass,
  Layers,
  Sparkles
} from 'lucide-react';
import { currencies } from '../data/marketRates';

export default function Navbar({ 
  selectedCurrency, 
  setSelectedCurrency, 
  onOpenRFQ,
  onOpenTracker,
  activeLanguage,
  setActiveLanguage
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'EN', name: 'English (Global Trade)' },
    { code: 'BN', name: 'বাংলা (বাংলাদেশ ট্রেড)' },
    { code: 'AR', name: 'العربية (الشرق الأوسط)' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#070B18]/90 backdrop-blur-md border-b border-agro-gold-500/20 py-2.5 shadow-2xl shadow-black/50' 
        : 'bg-transparent py-4 border-b border-white/5'
    }`}>
      {/* Top operational announcement banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agro-gold-500 via-agro-amber-600 to-agro-navy-900 p-0.5 shadow-lg shadow-agro-gold-500/20 group-hover:shadow-agro-gold-500/40 transition-all">
              <div className="w-full h-full bg-[#0B132B] rounded-[10px] flex items-center justify-center">
                <Anchor className="w-5 h-5 text-agro-gold-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black tracking-wider text-xl text-white">
                  AGRO<span className="text-agro-gold-400">OCEAN</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold px-1.5 py-0.5 rounded bg-agro-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  GLOBAL
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-slate-400 font-medium">
                Bulk Agro-Commodities • CIF Chittagong & Mongla
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#commodities" className="hover:text-agro-gold-400 transition-colors flex items-center gap-1.5">
              <span>Commodities</span>
            </a>
            <a href="#calculator" className="hover:text-agro-gold-400 transition-colors flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-agro-gold-400" />
              <span>CIF / FOB Calculator</span>
            </a>
            <a href="#routes" className="hover:text-agro-gold-400 transition-colors flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-agro-gold-400" />
              <span>Global Routes</span>
            </a>
            <a href="#tracking" className="hover:text-agro-gold-400 transition-colors flex items-center gap-1.5">
              <Ship className="w-3.5 h-3.5 text-cyan-400" />
              <span>Live Vessel Radar</span>
            </a>
            <a href="#quality" className="hover:text-agro-gold-400 transition-colors flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SGS Quality & QA</span>
            </a>
          </nav>

          {/* Controls: Currency, Language & Primary CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Currency Selector */}
            <div className="relative">
              <button 
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-agro-navy-800/80 border border-slate-700/60 text-slate-200 hover:border-agro-gold-500/50 hover:bg-agro-navy-700 transition-all"
                title="Select Currency"
              >
                <span className="text-agro-gold-400 font-bold">{currencies[selectedCurrency].symbol}</span>
                <span>{selectedCurrency}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {currencyDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-36 bg-[#0E172E] border border-agro-gold-500/30 rounded-xl shadow-2xl py-1 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setCurrencyDropdownOpen(false)}
                >
                  {Object.keys(currencies).map((code) => (
                    <button
                      key={code}
                      onClick={() => {
                        setSelectedCurrency(code);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-agro-navy-700 transition-colors ${
                        selectedCurrency === code ? 'text-agro-gold-400 font-bold bg-agro-navy-800' : 'text-slate-300'
                      }`}
                    >
                      <span>{code}</span>
                      <span className="text-slate-400 font-mono text-[11px]">{currencies[code].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-agro-navy-800/80 border border-slate-700/60 text-slate-300 hover:border-agro-gold-500/50 transition-all"
              >
                <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                <span>{activeLanguage}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-[#0E172E] border border-agro-gold-500/30 rounded-xl shadow-2xl py-1 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setActiveLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-agro-navy-700 transition-colors ${
                        activeLanguage === lang.code ? 'text-agro-gold-400 font-bold bg-agro-navy-800' : 'text-slate-300'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Instant RFQ Button */}
            <button
              onClick={onOpenRFQ}
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-agro-gold-500 via-amber-400 to-agro-gold-600 rounded-xl transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-agro-navy-950 text-xs font-bold text-agro-gold-300 transition-all duration-300 group-hover:bg-transparent group-hover:text-agro-navy-950">
                <Sparkles className="w-3.5 h-3.5 text-agro-gold-400 group-hover:text-agro-navy-950" />
                <span>Instant RFQ Quote</span>
              </span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenRFQ}
              className="px-3 py-1.5 rounded-lg bg-agro-gold-500 text-agro-navy-950 text-xs font-bold"
            >
              RFQ
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-agro-navy-800 text-slate-200 border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 p-4 bg-[#0E172E] border border-agro-gold-500/20 rounded-2xl space-y-3 shadow-2xl animate-in fade-in">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
              <a 
                href="#commodities" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-agro-navy-800 rounded-lg flex items-center gap-2"
              >
                <span>Agricultural Commodities</span>
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-agro-navy-800 rounded-lg flex items-center gap-2 text-agro-gold-400"
              >
                <Calculator className="w-4 h-4" />
                <span>CIF / FOB Bulk Calculator</span>
              </a>
              <a 
                href="#routes" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-agro-navy-800 rounded-lg flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Global Shipping Routes</span>
              </a>
              <a 
                href="#tracking" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-agro-navy-800 rounded-lg flex items-center gap-2"
              >
                <Ship className="w-4 h-4 text-blue-400" />
                <span>Live Vessel Telemetry</span>
              </a>
              <a 
                href="#quality" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-agro-navy-800 rounded-lg flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SGS Quality & Fumigation</span>
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between">
              <div className="flex gap-2">
                {Object.keys(currencies).map(code => (
                  <button
                    key={code}
                    onClick={() => setSelectedCurrency(code)}
                    className={`px-2 py-1 text-xs rounded border ${
                      selectedCurrency === code ? 'border-agro-gold-500 bg-agro-gold-500/20 text-agro-gold-300' : 'border-slate-700 text-slate-400'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRFQ();
                }}
                className="px-4 py-2 rounded-xl bg-agro-gold-500 text-agro-navy-950 font-bold text-xs"
              >
                Request Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
