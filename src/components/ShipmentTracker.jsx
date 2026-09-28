import React, { useState } from 'react';
import { 
  Ship, 
  Search, 
  MapPin, 
  Compass, 
  Clock, 
  Thermometer, 
  Droplets, 
  ShieldCheck, 
  Radio, 
  Anchor, 
  Navigation,
  FileText,
  AlertCircle
} from 'lucide-react';
import { activeVessels } from '../data/routesData';

export default function ShipmentTracker() {
  const [selectedVessel, setSelectedVessel] = useState(activeVessels[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    const found = activeVessels.find(
      v => v.vesselName.toLowerCase().includes(query) || 
           v.id.toLowerCase().includes(query) ||
           v.imoNumber.includes(query) ||
           v.cargo.toLowerCase().includes(query)
    );

    if (found) {
      setSelectedVessel(found);
      setSearchMessage(`Found registered consignment: ${found.vesselName}`);
    } else {
      setSearchMessage(`Demo simulated tracking for: "${searchQuery}" - Linked to active CPA Sea Lane`);
    }
  };

  return (
    <section id="tracking" className="py-20 bg-[#070B18] relative border-t border-slate-800">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>AIS Vessel Telemetry & Cargo Radar</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Live Bulk <span className="text-cyan-400">Shipment & Ocean Radar</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
              Track vessel positions, hold humidity levels, and customs clearance milestones from loading ports to Chittagong CPA outer anchorage.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-4 md:mt-0 w-full md:w-80">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter B/L No, Vessel or IMO..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-agro-navy-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </form>
            {searchMessage && (
              <p className="text-[11px] text-cyan-400 mt-1 font-mono">{searchMessage}</p>
            )}
          </div>
        </div>

        {/* Quick Vessel Selector Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6">
          <span className="text-xs font-bold uppercase text-slate-400 whitespace-nowrap">Active Vessels:</span>
          {activeVessels.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVessel(v);
                setSearchMessage('');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedVessel.id === v.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                  : 'bg-agro-navy-900/80 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              <Ship className="w-3.5 h-3.5" />
              <span>{v.vesselName}</span>
              <span className="text-[10px] font-mono text-slate-400">[{v.id}]</span>
            </button>
          ))}
        </div>

        {/* Vessel Radar Dashboard Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0B152E] to-[#070B18] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          
          {/* Top Info Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <Ship className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-black text-2xl text-white tracking-wide">
                    {selectedVessel.vesselName}
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Flag: {selectedVessel.flag}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  Bulk Cargo: <span className="text-agro-gold-400 font-bold">{selectedVessel.cargo}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">AIS Status:</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  {selectedVessel.status}
                </span>
              </div>
              <div className="text-right pl-4 border-l border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">ETA Chittagong (CPA):</span>
                <span className="font-mono text-sm font-black text-white">{selectedVessel.eta}</span>
              </div>
            </div>
          </div>

          {/* Voyage Route Progress Bar */}
          <div className="py-6 border-b border-slate-800">
            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-agro-gold-400" />
                <span className="font-semibold">Origin: {selectedVessel.originPort}</span>
              </div>
              <div className="font-mono font-bold text-cyan-400">
                {selectedVessel.progressPercent}% Transit Completed
              </div>
              <div className="flex items-center gap-1 text-slate-300">
                <Anchor className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold">Destination: {selectedVessel.destinationPort}</span>
              </div>
            </div>

            <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <div 
                className="bg-gradient-to-r from-agro-gold-500 via-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-1000 shadow-md"
                style={{ width: `${selectedVessel.progressPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mt-2">
              <span>Sailed from loading terminal</span>
              <span className="text-cyan-300">Current GPS: {selectedVessel.currentPosition}</span>
              <span>CPA Pilot Berth Ready</span>
            </div>
          </div>

          {/* Environmental Telemetry & Lab Quality Metrics Grid */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Hold Temperature */}
            <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Cargo Hold Temp</span>
                <Thermometer className="w-4 h-4 text-rose-400" />
              </div>
              <div className="font-mono text-xl font-bold text-white">
                {selectedVessel.telemetry.holdTemp}
              </div>
              <p className="text-[10px] text-emerald-400 font-medium mt-1">✓ Optimal grain thermal zone</p>
            </div>

            {/* Hold Humidity */}
            <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Relative Humidity</span>
                <Droplets className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="font-mono text-xl font-bold text-white">
                {selectedVessel.telemetry.holdHumidity}
              </div>
              <p className="text-[10px] text-emerald-400 font-medium mt-1">✓ Anti-sweat ventilated hold</p>
            </div>

            {/* Phytosanitary Fumigation */}
            <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Fumigation Clearance</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="font-mono text-xs font-bold text-emerald-300 truncate">
                {selectedVessel.telemetry.fumigationCert}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Methyl Bromide treated</p>
            </div>

            {/* SGS Seal Number */}
            <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">SGS Security Seal</span>
                <FileText className="w-4 h-4 text-agro-gold-400" />
              </div>
              <div className="font-mono text-xs font-bold text-agro-gold-300">
                {selectedVessel.telemetry.sgsSealNumber}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Tamper-evident verification</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
