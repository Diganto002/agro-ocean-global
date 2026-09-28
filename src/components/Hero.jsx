import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Ship, 
  Download, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  Clock,
  Layers,
  FileSpreadsheet,
  Globe,
  MapPin
} from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function Hero({ onOpenRFQ, onOpenTracker, onOpenCatalog }) {
  // Animated Counter simulation
  const [metrics, setMetrics] = useState({
    metricTons: 135000,
    chinaShare: 82,
    clearance: 99.4,
    vessels: 16
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setMetrics((prev) => ({
        metricTons: Math.min(148500, prev.metricTons + 380),
        chinaShare: 84,
        clearance: 99.6,
        vessels: 18
      }));
    }, 45);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-vignette">
      {/* 3D Interactive Canvas Particle System */}
      <HeroCanvas />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-agro-gold-500/10 via-amber-500/10 to-agro-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 left-10 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Magnetic CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Operational Pill with China & BD focus */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agro-navy-800/80 border border-agro-gold-500/30 shadow-lg shadow-black/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping-slow" />
              <span className="text-xs font-semibold text-agro-gold-300">
                বাংলাদেশ-চীন প্রধান বাণিজ্য করিডোর • খাতুনগঞ্জ ও দেশব্যাপী সরবরাহ
              </span>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-agro-gold-500/20 text-agro-gold-300 border border-agro-gold-500/30">
                ৮০%+ চীন আমদানি
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-3xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-[1.14]">
              চীন ও আঞ্চলিক দেশ থেকে <br />
              <span className="bg-gradient-to-r from-agro-gold-400 via-amber-300 to-agro-gold-500 bg-clip-text text-transparent">
                বাল্ক ডাল ও শস্যদানা
              </span> <br />
              চট্টগ্রাম ও মোংলায় সরাসরি আমদানি।
            </h1>

            {/* Sub-headline tailored to Khatunganj & China-Bangladesh Trade */}
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              দেশের শীর্ষস্থানীয় ডাল মিল, প্রক্রিয়াজাত খাদ্য প্রস্তুতকারক এবং <strong className="text-white font-semibold">খাতুনগঞ্জ ও বাদামতলীর পাইকারি আড়তদারদের</strong> প্রধান আমদানিকারক প্রতিষ্ঠান। প্রধানত <strong className="text-agro-gold-300 font-semibold">চীন (গুয়াংজু ও কিংদাও)</strong> থেকে ৮০%+ বাল্ক ভলিউম এবং আশপাশের প্রতিবেশী দেশ <strong className="text-white font-semibold">(ভারত ও মিয়ানমার)</strong> থেকে বাছাইকৃত <strong className="text-white font-semibold">বুটের ডাল (Yellow Split Peas), ছোলা (Desi Chickpeas), কিডনি বিনস ও মসুর ডাল</strong> নিয়মিত বাল্ক ও কনটেইনার কার্গোতে সরাসরি সরবরাহ।
            </p>

            {/* Key feature pills with Bangladeshi Trade Realities */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-agro-navy-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-agro-gold-400" />
                <span>খাতুনগঞ্জ আড়ত ও মিল ইয়ার্ডে ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-agro-navy-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>বাংলাদেশ ব্যাংক অনুমোদিত L/C at Sight</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-agro-navy-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>চীন ও বাংলাদেশ প্ল্যান্ট কোয়ারেন্টাইন পাস</span>
              </div>
            </div>

            {/* Magnetic CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              
              {/* Primary RFQ CTA */}
              <button
                onClick={onOpenRFQ}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-agro-gold-500 via-amber-500 to-agro-gold-600 text-agro-navy-950 font-display font-black text-sm tracking-wide shadow-xl shadow-agro-gold-500/25 hover:shadow-agro-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <span>তাৎক্ষণিক বাল্ক রেট জানুন (RFQ)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Live Vessel Radar */}
              <button
                onClick={onOpenTracker}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-agro-navy-800/90 hover:bg-agro-navy-700/90 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2.5 shadow-lg group"
              >
                <Ship className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>লাইভ জাহাজ ট্র্যাকিং</span>
              </button>

              {/* Download Catalog */}
              <button
                onClick={onOpenCatalog}
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2"
                title="ডাল ও শস্যদানার টেকনিক্যাল স্পেসিফিকেশন"
              >
                <Download className="w-4 h-4 text-agro-gold-400" />
                <span>২০২৬ ক্রপ স্পেক শিট</span>
              </button>

            </div>

          </div>

          {/* Right Column: Hero Visual Card with High-Res China-Bangladesh Ocean Vessel */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame with 3D Tilt aesthetic */}
              <div className="relative rounded-3xl overflow-hidden border border-agro-gold-500/30 shadow-2xl shadow-black/80 bg-agro-navy-900 group">
                <img 
                  src="/images/china_bd_cargo.jpg" 
                  alt="চীন ও বাংলাদেশ রুটে চলাচলকারী বিশাল কৃষি কমোডিটি কার্গো জাহাজ"
                  className="w-full h-[430px] object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-[#070B18]/30 to-transparent" />

                {/* Vessel Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-xl bg-[#0B132B]/85 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      MV China-Bengal Express (৪৮,৫০০ MT)
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                    চট্টগ্রাম বন্দর বহিনোঙ্গর
                  </span>
                </div>

                {/* Cargo Detail Card bottom overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-agro-navy-950/85 backdrop-blur-md border border-agro-gold-500/30 shadow-2xl">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">বর্তমানে খালাস চলমান</p>
                      <h4 className="text-sm font-bold text-agro-gold-300">চীনা ও কানাডিয়ান বুটের ডাল (Grade 1)</h4>
                    </div>
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-agro-gold-500/20 text-agro-gold-400 border border-agro-gold-500/30">
                      পিউরিটি ৯৯.৫%
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="p-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <p className="text-slate-400">ময়েশ্চার</p>
                      <p className="font-bold text-white font-mono">১১.৮%</p>
                    </div>
                    <div className="p-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <p className="text-slate-400">কোয়ারেন্টাইন</p>
                      <p className="font-bold text-emerald-400">NPPO পাস</p>
                    </div>
                    <div className="p-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <p className="text-slate-400">হোল্ড তাপমাত্রা</p>
                      <p className="font-bold text-cyan-300 font-mono">২১.২°C</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Pill: Khatunganj Wholesale Ready */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-agro-navy-900/90 backdrop-blur-md border border-agro-gold-500/40 shadow-2xl animate-float-gentle">
                <div className="w-10 h-10 rounded-xl bg-agro-gold-500/20 flex items-center justify-center border border-agro-gold-500/30">
                  <MapPin className="w-6 h-6 text-agro-gold-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">খাতুনগঞ্জ আড়ত নিজস্ব ওয়্যারহাউস</p>
                  <p className="text-[11px] text-slate-400">দৈনিক রেডি স্টক থেকে ট্রাকে ডেলিভারি</p>
                </div>
              </div>

              {/* Floating Pill: China Hubs */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-agro-navy-900/90 backdrop-blur-md border border-emerald-500/40 shadow-xl">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">৮০%+ সরাসরি চীন থেকে আমদানি</span>
              </div>

            </div>
          </div>

        </div>

        {/* Live Animated KPI Counters Row */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* KPI 1 */}
            <div className="p-5 rounded-2xl bg-agro-navy-900/50 border border-slate-800/80 hover:border-agro-gold-500/30 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">বার্ষিক আমদানিকৃত ভলিউম</span>
                <span className="w-2 h-2 rounded-full bg-agro-gold-400 group-hover:scale-125 transition-transform" />
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                {metrics.metricTons.toLocaleString('en-IN')}+
                <span className="text-lg font-bold text-agro-gold-400 ml-1">MT</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">চট্টগ্রাম ও মোংলায় বাল্ক খাদ্যশস্য খালাস</p>
            </div>

            {/* KPI 2 */}
            <div className="p-5 rounded-2xl bg-agro-navy-900/50 border border-slate-800/80 hover:border-agro-gold-500/30 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">চীন বাণিজ্য অংশীদারিত্ব</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                {metrics.chinaShare}%
                <span className="text-lg font-bold text-cyan-400 ml-1">চীন ভলিউম</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">বাকি অংশ ভারত ও মিয়ানমার আমদানি</p>
            </div>

            {/* KPI 3 */}
            <div className="p-5 rounded-2xl bg-agro-navy-900/50 border border-slate-800/80 hover:border-agro-gold-500/30 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">বন্দর ক্লিয়ারেন্স রেট</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-emerald-400 tracking-tight">
                {metrics.clearance}%
              </div>
              <p className="text-xs text-slate-400 mt-1">CPA ও মোংলায় দ্রুততম সময়ে কাস্টমস রিলিজ</p>
            </div>

            {/* KPI 4 */}
            <div className="p-5 rounded-2xl bg-agro-navy-900/50 border border-slate-800/80 hover:border-agro-gold-500/30 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">সক্রিয় জাহাজ বহর</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                {metrics.vessels}
                <span className="text-lg font-bold text-amber-400 ml-1">টি জাহাজ</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">বাজারে নিরবচ্ছিন্ন পণ্য সরবরাহের নিশ্চয়তা</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
