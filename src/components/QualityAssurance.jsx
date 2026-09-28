import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  FileCheck, 
  Microscope, 
  Truck, 
  Ship, 
  Building2, 
  CheckSquare, 
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function QualityAssurance() {
  const [activeTab, setActiveTab] = useState('sgs');

  const supplyChainSteps = [
    {
      step: "01",
      title: "চীন ও আন্তর্জাতিক অরিজিন টেস্টিং",
      desc: "চীনের কিংদাও, গুয়াংজু এবং কানাডা/অস্ট্রেলিয়ার সাইলোতে ময়েশ্চার, পিউরিটি ও অপটিক্যাল কোয়ালিটি ল্যাব টেস্ট।",
      icon: Microscope,
      badge: "প্রাক-জাহাজীকরণ পিউরিটি"
    },
    {
      step: "02",
      title: "অপটিক্যাল সর্টেক্স ও ক্যালিবার সাইজিং",
      desc: "ডাবল অপটিক্যাল সর্টেক্সের মাধ্যমে অপুষ্ট দানা ও অপদ্রব্য (<০.২%) দূর করে নিখুঁত সম-আকারের খাদ্যশস্য বাছাই।",
      icon: CheckSquare,
      badge: "সর্টেক্স ৯৯.৫%"
    },
    {
      step: "03",
      title: "ফিউমিগেশন ও কনটেইনার লোডিং",
      desc: "আন্তর্জাতিক ও বাংলাদেশ উদ্ভিদ সংগনিরোধ (NPPO) নীতিমালায় মিথাইল ব্রোমাইড ফিউমিগেশন ও SGS সিল সংযুক্তিকরণ।",
      icon: Ship,
      badge: "কীটমুক্ত ছাড়পত্র"
    },
    {
      step: "04",
      title: "জাহাজের হোল্ড টেলিমেট্রি মনিটরিং",
      desc: "চীন থেকে চট্টগ্রাম ১০-১২ দিনের সমুদ্রযাত্রায় সার্বক্ষণিক হোল্ডের তাপমাত্রা ও আর্দ্রতা নজরদারি।",
      icon: ShieldCheck,
      badge: "টেলিমেট্রি গার্ড"
    },
    {
      step: "05",
      title: "চট্টগ্রাম ও মোংলা বন্দরে খালাস",
      desc: "প্রাক-আগমন কাস্টমস কাগজপত্রের মাধ্যমে চট্টগ্রাম বন্দরের বহির্নোঙ্গর ও জেটিতে দ্রুততম সময়ে খালাস।",
      icon: Building2,
      badge: "অগ্রাধিকার বার্থিং"
    },
    {
      step: "06",
      title: "খাতুনগঞ্জ ও ডাল মিল সরাসরি ডেলিভারি",
      desc: "বাল্ক লাইনার বা ৫০ কেজির নতুন বস্তায় সরাসরি ক্রেতার গুদাম বা ডাল মিল প্রাঙ্গণে স্থানান্তর।",
      icon: Truck,
      badge: "গেট ডেলিভারি"
    }
  ];

  const certificates = {
    sgs: {
      name: "SGS আন্তর্জাতিক কৃষি ও খাদ্যশস্য পরিদর্শন সনদ",
      authority: "SGS Société Générale de Surveillance (Geneva & Guangzhou Bureau)",
      scope: "চীন ও আন্তর্জাতিক বন্দরে জাহাজে বোঝাইয়ের পূর্বে প্রোটিন, আর্দ্রতা এবং ব্যাগের নিখুঁত গ্রস/নেট ওজন যাচাই।",
      parameters: [
        { label: "বিশুদ্ধতার মাত্রা (Purity)", value: "৯৯.৫% সর্বনিম্ন" },
        { label: "সর্বোচ্চ আর্দ্রতা (Max Moisture)", value: "১২.০% বা তার কম" },
        { label: "অপদ্রব্য (Foreign Matter)", value: "০.২০% এর নিচে" },
        { label: "নমুনা পরীক্ষা", value: "র‍্যান্ডম কম্পোজিট ল্যাব অ্যাসে" }
      ],
      complianceCode: "SGS-ZENTRA-CERT-2026-BD"
    },
    bv: {
      name: "Bureau Veritas ও CCIC গুণগত মান সনদ",
      authority: "Bureau Veritas Agri & China Inspection and Quarantine (CIQ)",
      scope: "জাহাজের হোল্ডের খাদ্য-উপযোগী পরিচ্ছন্নতা, ড্রাফট সার্ভে এবং পানিরোধক হ্যাচ সিল নিশ্চিতকরণ।",
      parameters: [
        { label: "হোল্ড হাইজিন", value: "সার্টিফাইড ফুড-গ্রেড ক্লিন" },
        { label: "ড্রাফট সার্ভে নির্ভুলতা", value: "±০.১% মেট্রিক টন সার্টিফাইড" },
        { label: "মেরিন কার্গো কভার", value: "লয়েডস লন্ডন স্ট্যান্ডার্ড" },
        { label: "ডিজিটাল ডেটা লগ", value: "ক্যালিব্রেটেড টেম্পারেচার ট্র্যাকার" }
      ],
      complianceCode: "BV-ZENTRA-8891-CN"
    },
    phyto: {
      name: "উদ্ভিদ সংগনিরোধ ও স্বাস্থ্য সুরক্ষা ছাড়পত্র (Phyto)",
      authority: "জাতীয় উদ্ভিদ সংগনিরোধ উইং (খামারবাড়ি, ঢাকা ও CIQ চীন)",
      scope: "বাংলাদেশ আমদানি নীতি অনুযায়ী ক্ষতিকারক পোকামাকড়, আগাছা বীজ ও রোগজীবাণুমুক্ত সার্টিফিকেট।",
      parameters: [
        { label: "ফিউমিগেশন এজেন্ট", value: "মিথাইল ব্রোমাইড (CH3Br) / ফসফিন" },
        { label: "এক্সপোজার সময়", value: "৪৮ ঘণ্টা ২১°C তাপমাত্রায়" },
        { label: "কোয়ারেন্টাইন পেস্ট স্ট্যাটাস", value: "১০০% কীটমুক্ত ও ফ্রেশ" },
        { label: "আইপি অনুমোদন", value: "বাংলাদেশ উদ্ভিদ সংগনিরোধ আইন সংগতিপূর্ণ" }
      ],
      complianceCode: "NPPO-BD-ZENTRA-99214"
    },
    gafta: {
      name: "GAFTA আন্তর্জাতিক শস্য বাণিজ্য স্ট্যান্ডার্ড",
      authority: "GAFTA Approved Superintendent & Analyst",
      scope: "আন্তর্জাতিক খাদ্যশস্য বাণিজ্য চুক্তি GAFTA Contract No. 88 ও 124 এর অধীনে বিরোধহীন নিষ্পত্তি ও ডেলিভারি।",
      parameters: [
        { label: "চুক্তি স্ট্যান্ডার্ড", value: "GAFTA Form 88 & 124" },
        { label: "সালিশি বিধি", value: "GAFTA লন্ডন আন্তর্জাতিক বোর্ড" },
        { label: "ট্রেড অ্যাসুরেন্স", value: "অনুমোদিত আন্তর্জাতিক সাপ্লায়ার" },
        { label: "স্যাম্পলিং বিধি", value: "GAFTA 124 অফিসিয়াল স্ট্যান্ডার্ড" }
      ],
      complianceCode: "GAFTA-ZENTRA-T9981"
    }
  };

  const activeCert = certificates[activeTab];

  return (
    <section id="quality" className="py-24 bg-[#090F20] relative border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Zentra Trade গুণগত মান নিয়ন্ত্রণ</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            কঠোর মাননিয়ন্ত্রণ ও <span className="text-emerald-400">SGS ল্যাব পরিদর্শন প্রটোকল</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            চীন ও আন্তর্জাতিক ফার্মগেট থেকে চট্টগ্রাম বন্দর হয়ে খাতুনগঞ্জ আড়ত পর্যন্ত প্রতিটি চালানের রাসায়নিক ও পুষ্টিগুণ পরীক্ষিত।
          </p>
        </div>

        {/* 6-Step Visual Timeline of the Supply Chain Journey */}
        <div className="mb-20">
          <h3 className="text-xs font-bold uppercase tracking-wider text-agro-gold-400 mb-6 text-center">
            Zentra Trade সাপ্লাই চেইন জার্নি: উৎস থেকে আপনার গুদামে
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplyChainSteps.map((stepItem, idx) => {
              const Icon = stepItem.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-[#0B142B] border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-emerald-400 transition-colors">
                      {stepItem.step}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {stepItem.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-slate-900 text-agro-gold-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-base text-white">
                      {stepItem.title}
                    </h4>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed mt-2">
                    {stepItem.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Compliance Certifications Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Quality Lab Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl relative group">
              <img 
                src={getAssetUrl("images/qa_inspection.jpg")} 
                alt="Zentra Trade কৃষি খাদ্যশস্য টেস্টিং ল্যাবরেটরি"
                className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-transparent to-black/20" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-agro-navy-950/90 backdrop-blur-md border border-white/10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">স্বীকৃত আন্তর্জাতিক ল্যাব পরীক্ষা</span>
                  <span className="text-emerald-400 font-mono font-bold">ISO/IEC 17025</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  কম্পোজিট গ্রেইন ময়েশ্চার অ্যানালাইজার, অপটিক্যাল ডেনসিটি ও শতভাগ নন-জিএমও বিশুদ্ধতা নিশ্চিতকরণ।
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Tabs & Certificate Details */}
          <div className="lg:col-span-7 bg-[#0B142B] rounded-3xl border border-agro-gold-500/20 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            
            {/* Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-slate-800 scrollbar-none">
              <button
                onClick={() => setActiveTab('sgs')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'sgs'
                    ? 'bg-emerald-500 text-agro-navy-950 shadow-md'
                    : 'text-slate-400 hover:text-white bg-slate-900/60'
                }`}
              >
                SGS ইন্সপেকশন
              </button>
              <button
                onClick={() => setActiveTab('bv')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'bv'
                    ? 'bg-emerald-500 text-agro-navy-950 shadow-md'
                    : 'text-slate-400 hover:text-white bg-slate-900/60'
                }`}
              >
                Bureau Veritas & CIQ
              </button>
              <button
                onClick={() => setActiveTab('phyto')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'phyto'
                    ? 'bg-emerald-500 text-agro-navy-950 shadow-md'
                    : 'text-slate-400 hover:text-white bg-slate-900/60'
                }`}
              >
                উদ্ভিদ সংগনিরোধ (Phyto)
              </button>
              <button
                onClick={() => setActiveTab('gafta')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'gafta'
                    ? 'bg-emerald-500 text-agro-navy-950 shadow-md'
                    : 'text-slate-400 hover:text-white bg-slate-900/60'
                }`}
              >
                GAFTA ট্রেড রুলস
              </button>
            </div>

            {/* Tab Body */}
            <div className="space-y-4">
              
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                  সনদ প্রদানকারী আন্তর্জাতিক কর্তৃপক্ষ
                </span>
                <h4 className="font-display font-bold text-xl text-white mt-0.5">
                  {activeCert.name}
                </h4>
                <p className="text-xs text-slate-300 font-medium">
                  {activeCert.authority}
                </p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  {activeCert.scope}
                </p>
              </div>

              {/* Parameters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeCert.parameters.map((param, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">{param.label}</span>
                    <span className="font-bold text-white text-xs font-mono">{param.value}</span>
                  </div>
                ))}
              </div>

              {/* Certificate Verification Code */}
              <div className="p-3 rounded-2xl bg-agro-navy-950 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 text-[10px] block">ভেরিফিকেশন ট্র্যাকিং আইডি:</span>
                  <span className="font-mono font-bold text-agro-gold-400">{activeCert.complianceCode}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle className="w-4 h-4" />
                  <span>ক্লিন ভেরিফাইড</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
