import React from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';
import { commoditiesData } from '../data/commoditiesData';

export default function CatalogModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-[#090F20] border border-agro-gold-500/40 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
          <div className="p-3 rounded-2xl bg-agro-gold-500/20 text-agro-gold-400 border border-agro-gold-500/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-black text-2xl text-white">
                2026 Bulk Pulses & Grains Crop Specification Dossier
              </h3>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Official
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Laboratory Grading Standard for Industrial Dal Mills, Canners & Importers (Bangladesh CPA & Mongla)
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-6 text-xs text-slate-300">
          
          <div className="p-4 rounded-2xl bg-agro-navy-950 border border-slate-800 flex items-center justify-between">
            <div>
              <p className="font-bold text-white text-sm">International Inspection Standards Enforced</p>
              <p className="text-slate-400 text-xs mt-0.5">
                All bulk pulse parcels governed by Canadian Grain Commission (CGC), Pulse Australia Standards & GAFTA 124.
              </p>
            </div>
            <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
          </div>

          {/* Table of all commodities */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#0B142B]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-[11px] font-bold uppercase text-agro-gold-400 tracking-wider">
                  <th className="p-3">Commodity & Grade</th>
                  <th className="p-3">Origin</th>
                  <th className="p-3">Purity %</th>
                  <th className="p-3">Max Moisture</th>
                  <th className="p-3">Foreign Matter</th>
                  <th className="p-3">Protein %</th>
                  <th className="p-3">Packaging Options</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs font-medium">
                {commoditiesData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-3 font-bold text-white">
                      <div>{item.name}</div>
                      <div className="text-[10px] text-agro-gold-400/80 font-normal">{item.localName}</div>
                    </td>
                    <td className="p-3 text-slate-300">{item.origin.split(' ')[0]}</td>
                    <td className="p-3 font-mono text-emerald-400 font-bold">{item.specs.purity}</td>
                    <td className="p-3 font-mono text-white">{item.specs.moisture}</td>
                    <td className="p-3 font-mono text-cyan-300">{item.specs.foreignMatter}</td>
                    <td className="p-3 font-mono text-amber-300">{item.specs.protein}</td>
                    <td className="p-3 text-[11px] text-slate-400">
                      {item.packaging[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Biochemical & Quality Assays Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#0B142B] border border-slate-800">
              <h4 className="font-bold text-sm text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Specialized Yellow Split Peas Milling Performance</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>• Milling recovery yield: 84% - 87% clean unblemished dal halves.</li>
                <li>• Uniform cooking time: 24 to 28 minutes without chemical tenderizers.</li>
                <li>• Low starch gelatinization temperature for industrial batter and snack extrusion.</li>
                <li>• Naturally non-GMO, grown in high-latitude Saskatchewan soils.</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B142B] border border-slate-800">
              <h4 className="font-bold text-sm text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Desi & Kabuli Chickpeas Caliber Consistency</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>• Sieve-screened sizing ensures consistent boiling and high water absorption.</li>
                <li>• Certified free from live weevils, bruchids, or internal insect infestation.</li>
                <li>• Rigorous sortex optical scanning removes dark-eyed and shriveled grains.</li>
                <li>• High shelf-life stability under tropical storage conditions (12+ months).</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Printer className="w-4 h-4 text-agro-gold-400" />
            <span>Print Specification Sheet</span>
          </button>

          <button
            onClick={() => {
              // Simulated instant file download
              const element = document.createElement("a");
              const file = new Blob([JSON.stringify(commoditiesData, null, 2)], {type: 'application/json'});
              element.href = URL.createObjectURL(file);
              element.download = "AGRO_OCEAN_2026_Commodity_Specs.json";
              document.body.appendChild(element);
              element.click();
              document.body.removeChild(element);
            }}
            className="px-6 py-2.5 rounded-xl bg-agro-gold-500 hover:bg-agro-gold-400 text-agro-navy-950 font-bold text-xs shadow-lg transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Crop Specs (.PDF / Data)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
