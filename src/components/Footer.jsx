import React from 'react';
import { 
  Anchor, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Globe2, 
  ArrowUp,
  FileText
} from 'lucide-react';

export default function Footer({ onOpenRFQ, onOpenCatalog }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand & Corporate Persona */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-agro-gold-500 to-agro-amber-600 p-0.5">
                <div className="w-full h-full bg-[#0B132B] rounded-[10px] flex items-center justify-center">
                  <Anchor className="w-5 h-5 text-agro-gold-400" />
                </div>
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-wider">
                  AGRO<span className="text-agro-gold-400">OCEAN</span> GLOBAL
                </span>
                <p className="text-[10px] text-slate-400 font-medium">Bulk Commodity Import & Maritime Trading</p>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Direct primary importer of agricultural pulses, Canadian Yellow Split Peas ("But" / Booter Dal), and Australian Chickpeas ("Chola"). Connecting global prairie harvest to South Asian commercial food mills.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300">
                GAFTA Member No. 8920
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300">
                CPA Port Registered
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-emerald-400">
                SGS Inspected
              </span>
            </div>
          </div>

          {/* Col 3: Core Commodities */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider">
              Wholesale Commodities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  Canadian Yellow Split Peas (Booter Dal)
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  Australian Desi Chickpeas (Chola)
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  Kabuli Chickpeas Jumbo 9mm
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  Crimson Red Split Lentils (Masoor)
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  Green Mung Beans & Dun Peas
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  Whole Yellow & Green Peas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trade Portals & Tools */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider">
              Trade Desk & Logistics
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#calculator" className="hover:text-agro-gold-400 transition-colors">
                  CIF / FOB Pricing Calculator
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-agro-gold-400 transition-colors">
                  Interactive Route Map
                </a>
              </li>
              <li>
                <a href="#tracking" className="hover:text-agro-gold-400 transition-colors">
                  Live Vessel Radar (CPA & Mongla)
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-agro-gold-400 transition-colors">
                  SGS Quality Standards
                </a>
              </li>
              <li>
                <button onClick={onOpenCatalog} className="hover:text-agro-gold-400 transition-colors text-left">
                  Download 2026 Crop Specs
                </button>
              </li>
              <li>
                <button onClick={onOpenRFQ} className="text-agro-gold-400 font-bold hover:underline">
                  Submit Institutional RFQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Global Offices & Port Desks */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider">
              Trade Port Desks
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <p className="font-bold text-white text-[11px]">Chittagong Port Terminal Office:</p>
                <p className="text-slate-400 text-[11px]">Agrabad Commercial Area, Chattogram 4100, Bangladesh</p>
              </div>

              <div>
                <p className="font-bold text-white text-[11px]">Dhaka Trade Headquarters:</p>
                <p className="text-slate-400 text-[11px]">Motijheel C/A, Dhaka 1000, Bangladesh</p>
              </div>

              <div>
                <p className="font-bold text-white text-[11px]">Global Sourcing Desks:</p>
                <p className="text-slate-400 text-[11px]">Vancouver (Canada) • Brisbane (Australia) • Dubai (UAE)</p>
              </div>

              <div className="pt-1 text-slate-300 font-mono text-[11px]">
                <p>Phone: +880 (31) 712000-05</p>
                <p>Email: trade@agro-ocean.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 AGRO-OCEAN GLOBAL ENTERPRISE. All Rights Reserved. Specializing in Bulk Agricultural Pulses & Legumes Import.
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Terms of Maritime Cargo</span>
            <span className="hover:text-slate-300 cursor-pointer">L/C Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacy & KYC</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
