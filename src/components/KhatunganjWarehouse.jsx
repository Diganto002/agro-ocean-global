import React from 'react';
import { 
  Building2, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  Scale, 
  Package, 
  PhoneCall,
  Clock,
  ArrowRight
} from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function KhatunganjWarehouse({ onOpenRFQ }) {
  return (
    <section className="py-20 bg-[#090F20] relative border-t border-slate-800 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Authentic Warehouse Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-agro-gold-500/40 shadow-2xl relative group">
              <img 
                src={getAssetUrl("images/khatunganj_warehouse.jpg")} 
                alt="Zentra Trade খাতুনগঞ্জ পাইকারি আড়ত ও আধুনিক ডাল ওয়্যারহাউস"
                className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-transparent to-black/30" />
              
              {/* Top Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-agro-navy-950/90 text-agro-gold-300 border border-agro-gold-500/40 text-xs font-bold shadow-lg flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-agro-gold-400" />
                  <span>Zentra Trade • খাতুনগঞ্জ আড়ত ও ওয়্যারহাউস কমপ্লেক্স, চট্টগ্রাম</span>
                </span>
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-agro-navy-950/90 backdrop-blur-md border border-white/10 text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <span className="font-bold text-white text-sm">দৈনিক সরবরাহ সক্ষমতা: ২০০০+ মেট্রিক টন</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                    রেডি স্টক
                  </span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  চীন ও আন্তর্জাতিক উৎস থেকে সরাসরি চট্টগ্রাম পোর্টে খালাসের পর নিজস্ব বহরে দ্রুততম সময়ে আড়ত ও মিল ইয়ার্ডে ডেলিভারি।
                </p>
              </div>

            </div>
          </div>

          {/* Right: Khatunganj Wholesale & Mill Delivery Features */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agro-gold-500/10 border border-agro-gold-500/30 text-agro-gold-400 text-xs font-bold uppercase tracking-widest mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>Zentra Trade পাইকারি বাণিজ্য নেটওয়ার্ক</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                খাতুনগঞ্জ, মৌলভীবাজার ও <br />
                <span className="text-agro-gold-400">দেশব্যাপী ডাল মিলগুলোতে</span> সরাসরি ডেলিভারি
              </h2>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                Zentra Trade শুধু সাগরপথে জাহাজ আমদানি করে না—চট্টগ্রাম বন্দরের বহির্নোঙ্গর ও জেটি থেকে সরাসরি নিজস্ব ট্রাকে করে খাতুনগঞ্জের আড়ত, ঢাকার মৌলভীবাজার ও সারা দেশের অটো ডাল মিলগুলোর ফ্যাক্টরি সাইলোতে খাদ্যপণ্য পৌঁছে দেয়।
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-agro-navy-900/70 border border-slate-800 hover:border-agro-gold-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-agro-gold-500/20 flex items-center justify-center text-agro-gold-400 mb-3">
                  <Package className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white">৫০ কেজির স্ট্যান্ডার্ড বস্তা</h4>
                <p className="text-slate-400 text-xs mt-1">
                  খাতুনগঞ্জ ট্রেডের উপযোগী ব্র্যান্ডেড ও সর্টেক্স কোয়ালিটি ডাবল সেলাইয়ের পলিপ্রপিলিন বস্তা।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-agro-navy-900/70 border border-slate-800 hover:border-agro-gold-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white">সরাসরি মিল ইয়ার্ডে আনলোডিং</h4>
                <p className="text-slate-400 text-xs mt-1">
                  চট্টগ্রাম বা মোংলা থেকে ট্রাক ও রেল ওয়াগনে মিলগেটে কোনো প্রকার ঘাটতি ছাড়া ডেলিভারি।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-agro-navy-900/70 border border-slate-800 hover:border-agro-gold-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white">শতভাগ সঠিক ওজন ও মান</h4>
                <p className="text-slate-400 text-xs mt-1">
                  ডিজিটাল ব্রিজ স্কেল ও SGS সার্টিফাইড ল্যাব টেস্টে দানার সাইজ ও ময়েশ্চার নিশ্চিতকরণ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-agro-navy-900/70 border border-slate-800 hover:border-agro-gold-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white">সহজ ব্যাংক L/C ও পেমেন্ট</h4>
                <p className="text-slate-400 text-xs mt-1">
                  বাংলাদেশ ব্যাংক গাইডলাইন অনুযায়ী সোনালী, ইসলামী, সিটি সহ শীর্ষ ব্যাংকে সহজ L/C সুবিধা।
                </p>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenRFQ}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-agro-gold-500 hover:bg-agro-gold-400 text-agro-navy-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>খাতুনগঞ্জ রেটে বাল্ক কোটেশন চান</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+8801711000000"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-agro-gold-400" />
                <span>ট্রেড হটলাইন: +৮৮০ (৩১) ৭১২০০০</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
