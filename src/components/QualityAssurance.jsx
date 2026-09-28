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

export default function QualityAssurance() {
  const [activeTab, setActiveTab] = useState('sgs');

  const supplyChainSteps = [
    {
      step: "01",
      title: "Origin & Farmgate Assay",
      desc: "Raw pulses sampled at prairie elevators in Saskatchewan (Canada) and Queensland (Australia). Moisture tested below 12.0%.",
      icon: Microscope,
      badge: "Pre-Clean Purity"
    },
    {
      step: "02",
      title: "Optical Sortex & Calibration",
      desc: "Double Bühler Sortex optical sorting eliminates discolored grains, foreign matter (<0.2%), and calibrates seed diameter to precision.",
      icon: CheckSquare,
      badge: "Sortex 99.5%"
    },
    {
      step: "03",
      title: "Fumigation & Port Loading",
      desc: "Methyl Bromide phytosanitary fumigation in accordance with NPPO & Bangladesh plant quarantine standards. SGS seal attached.",
      icon: Ship,
      badge: "Insect-Free Cert"
    },
    {
      step: "04",
      title: "Maritime Hold Telemetry",
      desc: "Continuous ventilation monitoring during 18-28 day voyages prevents humidity buildup, mold germination, and cargo sweat.",
      icon: ShieldCheck,
      badge: "Telemetry Guard"
    },
    {
      step: "05",
      title: "CPA Customs & Berth Offload",
      desc: "Pre-arrival customs documentation ensures fast-track clearance at Chittagong Port Authority (CPA) berths within 36-48 hours.",
      icon: Building2,
      badge: "Priority Berth"
    },
    {
      step: "06",
      title: "Direct Dal Mill Delivery",
      desc: "Bulk container discharge or 50kg bagging transferred directly to buyer silos, bonded warehouses, or nationwide mill yards.",
      icon: Truck,
      badge: "Mill Handover"
    }
  ];

  const certificates = {
    sgs: {
      name: "SGS Agricultural Testing & Inspection",
      authority: "SGS Société Générale de Surveillance (Geneva)",
      scope: "Pre-shipment verification of protein content, moisture percentage, foreign matter count, and container tare/gross weight.",
      parameters: [
        { label: "Purity Grade", value: "99.5% Minimum" },
        { label: "Max Moisture Content", value: "12.0% Maximum" },
        { label: "Foreign Material", value: "Less than 0.20%" },
        { label: "Sample Batch Size", value: "Random 100-Point Composite Sampling" }
      ],
      complianceCode: "SGS-AGRO-CERT-2026-X89"
    },
    bv: {
      name: "Bureau Veritas Quality & Weight Certificate",
      authority: "Bureau Veritas Agri-Commodities Division",
      scope: "Official independent survey of bulk vessel draft surveys, hold hygiene inspection, and hatch sealing before sailing.",
      parameters: [
        { label: "Hold Cleanliness", value: "Certified Food-Grade Clean" },
        { label: "Draft Survey Accuracy", value: "±0.1% Metric Ton Certified" },
        { label: "Marine Insurance Survey", value: "Lloyd's Standard Covered" },
        { label: "Temperature Log", value: "Calibrated Digital Data Loggers" }
      ],
      complianceCode: "BV-MARITIME-8891-B"
    },
    phyto: {
      name: "Phytosanitary & Plant Quarantine Clearance",
      authority: "National Plant Protection Organization (NPPO / CFIA / DAFF)",
      scope: "Mandatory official government clearance certifying consignments free from quarantine pests, weed seeds, and pathogens.",
      parameters: [
        { label: "Fumigation Agent", value: "Methyl Bromide (CH3Br) / Phosphine" },
        { label: "Exposure Period", value: "48 Hours at 21°C" },
        { label: "Quarantine Pest Status", value: "100% Free / Non-Detected" },
        { label: "Import Permit Alignment", value: "Compliant with Bangladesh Plant Quarantine Act" }
      ],
      complianceCode: "NPPO-EXP-PHYTO-99214"
    },
    gafta: {
      name: "GAFTA (Grain & Feed Trade Association)",
      authority: "GAFTA Approved Superintendent & Analyst",
      scope: "Contract compliance under standard GAFTA Contract No. 88 & 122 for international pulses and bulk grain trade.",
      parameters: [
        { label: "Contract Standard", value: "GAFTA Form 88 & 124" },
        { label: "Dispute Arbitration", value: "GAFTA London International Board" },
        { label: "Trade Assurance", value: "Approved Trade Supplier Status" },
        { label: "Sampling Standard", value: "GAFTA 124 Standard Methods" }
      ],
      complianceCode: "GAFTA-MEMBER-T9981"
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
            <span>Industrial Quality Assurance</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Rigorous Sourcing & <span className="text-emerald-400">SGS Quality Protocol</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            From Canadian and Australian farm elevators to Chittagong port silos, every metric ton is inspected, laboratory certified, and monitored.
          </p>
        </div>

        {/* 6-Step Visual Timeline of the Supply Chain Journey */}
        <div className="mb-20">
          <h3 className="text-xs font-bold uppercase tracking-wider text-agro-gold-400 mb-6 text-center">
            The Supply Chain Journey: From Harvest to Delivery
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
                src="/images/qa_inspection.jpg" 
                alt="Agricultural commodity testing laboratory moisture analyzer"
                className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-transparent to-black/20" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-agro-navy-950/90 backdrop-blur-md border border-white/10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Accredited Laboratory Testing</span>
                  <span className="text-emerald-400 font-mono font-bold">ISO/IEC 17025</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Composite grain moisture analyzer, optical density assays, and non-GMO purity certification.
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
                SGS Inspection
              </button>
              <button
                onClick={() => setActiveTab('bv')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'bv'
                    ? 'bg-emerald-500 text-agro-navy-950 shadow-md'
                    : 'text-slate-400 hover:text-white bg-slate-900/60'
                }`}
              >
                Bureau Veritas
              </button>
              <button
                onClick={() => setActiveTab('phyto')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'phyto'
                    ? 'bg-emerald-500 text-agro-navy-950 shadow-md'
                    : 'text-slate-400 hover:text-white bg-slate-900/60'
                }`}
              >
                Phytosanitary Clearance
              </button>
              <button
                onClick={() => setActiveTab('gafta')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'gafta'
                    ? 'bg-emerald-500 text-agro-navy-950 shadow-md'
                    : 'text-slate-400 hover:text-white bg-slate-900/60'
                }`}
              >
                GAFTA Trade Rules
              </button>
            </div>

            {/* Tab Body */}
            <div className="space-y-4">
              
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                  Accredited Certification Authority
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
                  <span className="text-slate-500 text-[10px] block">Standard Verification ID:</span>
                  <span className="font-mono font-bold text-agro-gold-400">{activeCert.complianceCode}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Clean</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
