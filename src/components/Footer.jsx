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
  FileText,
  Building2
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
                  AGRO<span className="text-agro-gold-400">OCEAN</span> BANGLADESH
                </span>
                <p className="text-[10px] text-slate-400 font-medium">চীন-বাংলাদেশ বাল্ক খাদ্যপণ্য আমদানি ও সরবরাহকারী প্রতিষ্ঠান</p>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              চীন (৮০%+) ও প্রতিবেশী দেশগুলো থেকে উন্নত জাতের বুটের ডাল (Yellow Split Peas), ছোলা (Desi & Kabuli Chickpeas), সাদা শিম বিচি ও মসুর ডালের প্রধান আমদানিকারক। খাতুনগঞ্জ আড়ত ও দেশব্যাপী ডাল মিলগুলোতে নির্ভরযোগ্য পণ্য সরবরাহ।
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300">
                খাতুনগঞ্জ ট্রেড অ্যাসোসিয়েশন
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300">
                চট্টগ্রাম বন্দর নিবন্ধিত আমদানিকারক
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-emerald-400">
                DCCI ও GAFTA মেম্বার
              </span>
            </div>
          </div>

          {/* Col 3: Core Commodities */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider">
              প্রধান খাদ্যপণ্যসমূহ
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  বাছাইকৃত বুটের ডাল (চীন ও কানাডা)
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  অস্ট্রেলিয়ান ও দেশি ছোলা (ছোলা বুট)
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  চীনা হোয়াইট কিডনি বিনস
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  লাল মসুর ডাল (ফুটবল ও স্প্লিট)
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  সবুজ মুগ ডাল (মিয়ানমার ও চীন)
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-agro-gold-400 transition-colors">
                  চীন এক্সপোর্ট: দেশি কালো ও সাদা তিল
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trade Portals & Tools */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider">
              বাণিজ্য সেবা ও ক্যালকুলেটর
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#calculator" className="hover:text-agro-gold-400 transition-colors">
                  টাকায় ল্যান্ডেড খরচ ক্যালকুলেটর
                </a>
              </li>
              <li>
                <a href="#warehouse" className="hover:text-agro-gold-400 transition-colors">
                  খাতুনগঞ্জ ওয়্যারহাউস ও মিল ডেলিভারি
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-agro-gold-400 transition-colors">
                  চীন-চট্টগ্রাম শিপিং রুট
                </a>
              </li>
              <li>
                <a href="#tracking" className="hover:text-agro-gold-400 transition-colors">
                  লাইভ জাহাজ রাডার ট্র্যাকিং
                </a>
              </li>
              <li>
                <button onClick={onOpenCatalog} className="hover:text-agro-gold-400 transition-colors text-left">
                  ২০২৬ ক্রপ ল্যাব স্পেক শিট
                </button>
              </li>
              <li>
                <button onClick={onOpenRFQ} className="text-agro-gold-400 font-bold hover:underline">
                  ইনস্টিটিউশনাল L/C কোটেশন
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Global Offices & Port Desks */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider">
              অফিস ও ওয়্যারহাউস
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <p className="font-bold text-white text-[11px]">চট্টগ্রাম ও খাতুনগঞ্জ অফিস:</p>
                <p className="text-slate-400 text-[11px]">খাতুনগঞ্জ আড়ত ও আগ্রাবাদ বা/এ, চট্টগ্রাম-৪১০০</p>
              </div>

              <div>
                <p className="font-bold text-white text-[11px]">ঢাকা হেড অফিস:</p>
                <p className="text-slate-400 text-[11px]">মতিঝিল বাণিজ্যিক এলাকা, ঢাকা-১০০০, বাংলাদেশ</p>
              </div>

              <div>
                <p className="font-bold text-white text-[11px]">চীন অফিস (China Sourcing):</p>
                <p className="text-slate-400 text-[11px]">Tianhe District, Guangzhou & Qingdao, China</p>
              </div>

              <div className="pt-1 text-slate-300 font-mono text-[11px]">
                <p>হটলাইন: +৮৮০ (৩১) ৭১২০০০-০৫</p>
                <p>হোয়াটসঅ্যাপ: +৮৮০ ১৭১১-০০০০০০</p>
                <p>ইমেইল: trade@agro-ocean.com.bd</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © ২০২৬ AGRO-OCEAN BANGLADESH LTD. সর্বস্বত্ব সংরক্ষিত। চীন ও আঞ্চলিক কৃষি কমোডিটি আমদানি ও পাইকারি সরবরাহ।
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">বাংলাদেশ ব্যাংক L/C নীতিমালা</span>
            <span className="hover:text-slate-300 cursor-pointer">কাস্টমস ও ট্যারিফ গাইড</span>
            <span className="hover:text-slate-300 cursor-pointer">প্রাইভেসি ও শর্তাবলী</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              title="উপরে যান"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
