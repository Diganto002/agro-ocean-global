import React, { useState } from 'react';
import { 
  Compass, 
  Anchor, 
  Ship, 
  MapPin, 
  Navigation, 
  Clock, 
  CheckCircle, 
  Activity, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { tradeHubs, shippingRoutes } from '../data/routesData';

export default function TradeRouteMap({ onSelectRouteForQuote }) {
  const [activeHub, setActiveHub] = useState(tradeHubs.destinations[0]); // default to Chittagong
  const [selectedRoute, setSelectedRoute] = useState(shippingRoutes[0]);
  const [hoveredEntity, setHoveredEntity] = useState(null);

  return (
    <section id="routes" className="py-20 bg-[#070B18] relative overflow-hidden border-t border-slate-800">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-agro-gold-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agro-gold-500/10 border border-agro-gold-500/30 text-agro-gold-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Global Supply Lines</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Interactive Global <span className="text-agro-gold-400">Trade Route Map</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
              Pulsating ocean corridors directly linking North American, Australasian, and South Asian farmgate origins to Chittagong Port Authority (CPA) and Mongla Port.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-slate-300 bg-agro-navy-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping-slow"></span>
              <span>4 Active Sea Lanes</span>
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-300 bg-agro-navy-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Ship className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real-Time Ocean Telemetry</span>
            </span>
          </div>
        </div>

        {/* Map & Detail Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main: The Interactive SVG Radar Map */}
          <div className="lg:col-span-8 bg-gradient-to-b from-[#0B132B]/90 to-[#070B18]/90 rounded-3xl border border-agro-gold-500/25 p-4 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            
            {/* Map Top Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-agro-gold-400 font-bold">ROUTE MONITOR:</span>
                <span className="text-slate-300 font-medium">Click any port node or animated corridor</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-agro-gold-400 inline-block" /> Origin Ports
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Destination Terminals (BD)
                </span>
              </div>
            </div>

            {/* SVG Interactive Canvas */}
            <div className="relative w-full aspect-[16/9] bg-[#050811] rounded-2xl border border-slate-800/80 overflow-hidden shadow-inner flex items-center justify-center">
              
              {/* Subtle World Map Silhouette Vector Background */}
              <svg 
                viewBox="0 0 800 450" 
                className="w-full h-full select-none"
              >
                <defs>
                  {/* Glowing line filters */}
                  <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Gradient definitions for sea corridors */}
                  <linearGradient id="grad-canada" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E0A96D" />
                    <stop offset="100%" stopColor="#52B788" />
                  </linearGradient>
                  <linearGradient id="grad-aus" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#52B788" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>

                {/* Ocean Grid Lines */}
                <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
                  <line x1="0" y1="90" x2="800" y2="90" />
                  <line x1="0" y1="180" x2="800" y2="180" />
                  <line x1="0" y1="270" x2="800" y2="270" />
                  <line x1="0" y1="360" x2="800" y2="360" />
                  <line x1="200" y1="0" x2="200" y2="450" />
                  <line x1="400" y1="0" x2="400" y2="450" />
                  <line x1="600" y1="0" x2="600" y2="450" />
                </g>

                {/* Stylized Continents Outlines */}
                {/* North America */}
                <path 
                  d="M 120 70 Q 180 80, 240 100 Q 220 180, 160 210 Q 120 160, 100 110 Z" 
                  fill="rgba(30, 41, 59, 0.4)" 
                  stroke="rgba(71, 85, 105, 0.4)" 
                  strokeWidth="1"
                />
                {/* South Asia & India */}
                <path 
                  d="M 500 170 Q 560 170, 600 200 Q 580 260, 540 260 Q 510 210, 500 170 Z" 
                  fill="rgba(30, 41, 59, 0.5)" 
                  stroke="rgba(71, 85, 105, 0.4)" 
                  strokeWidth="1"
                />
                {/* Australia */}
                <path 
                  d="M 660 300 Q 750 310, 760 380 Q 690 410, 650 360 Z" 
                  fill="rgba(30, 41, 59, 0.4)" 
                  stroke="rgba(71, 85, 105, 0.4)" 
                  strokeWidth="1"
                />
                {/* Europe & Middle East */}
                <path 
                  d="M 400 110 Q 480 120, 480 180 Q 430 200, 390 160 Z" 
                  fill="rgba(30, 41, 59, 0.3)" 
                  stroke="rgba(71, 85, 105, 0.3)" 
                  strokeWidth="1"
                />

                {/* 1. SHIPPING ROUTES (Dashed Pulsating Paths) */}
                {shippingRoutes.map((route) => {
                  const isSelected = selectedRoute.id === route.id;
                  return (
                    <g key={route.id} className="cursor-pointer" onClick={() => setSelectedRoute(route)}>
                      {/* Underlying Glow path */}
                      <path
                        d={route.pathD}
                        fill="none"
                        stroke={route.color}
                        strokeWidth={isSelected ? 4 : 2}
                        strokeOpacity={isSelected ? 0.8 : 0.3}
                        filter="url(#glow-gold)"
                      />
                      {/* Animated dashed sea lane */}
                      <path
                        d={route.pathD}
                        fill="none"
                        stroke={route.color}
                        strokeWidth={isSelected ? 3 : 2}
                        className="animate-route-dash"
                      />
                    </g>
                  );
                })}

                {/* Moving Vessel Simulators along Route Paths */}
                {/* Vessel 1 on Canada -> CTG */}
                <circle cx="370" cy="115" r="4.5" fill="#E0A96D" filter="url(#glow-gold)">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="382" y="112" fill="#E0A96D" fontSize="10" fontWeight="bold" fontFamily="monospace">
                  🚢 54k MT Canadian Peas
                </text>

                {/* Vessel 2 on Australia -> CTG */}
                <circle cx="640" cy="275" r="4.5" fill="#52B788" filter="url(#glow-emerald)">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="652" y="278" fill="#52B788" fontSize="10" fontWeight="bold" fontFamily="monospace">
                  🚢 42k MT Desi Chickpeas
                </text>

                {/* 2. ORIGIN HUBS NODES */}
                {tradeHubs.origins.map((hub) => {
                  const isHovered = hoveredEntity === hub.id;
                  return (
                    <g 
                      key={hub.id} 
                      className="cursor-pointer group"
                      onClick={() => setActiveHub(hub)}
                      onMouseEnter={() => setHoveredEntity(hub.id)}
                      onMouseLeave={() => setHoveredEntity(null)}
                    >
                      {/* Pulse ring */}
                      <circle 
                        cx={hub.coords.x} 
                        cy={hub.coords.y} 
                        r="14" 
                        fill="rgba(224, 169, 109, 0.15)"
                        className="animate-ping-slow"
                      />
                      {/* Outer border */}
                      <circle 
                        cx={hub.coords.x} 
                        cy={hub.coords.y} 
                        r="7" 
                        fill="#0B132B"
                        stroke="#E0A96D" 
                        strokeWidth="2.5" 
                      />
                      {/* Inner gold core */}
                      <circle 
                        cx={hub.coords.x} 
                        cy={hub.coords.y} 
                        r="3.5" 
                        fill="#E0A96D" 
                      />
                      {/* Hub Label */}
                      <text 
                        x={hub.coords.x} 
                        y={hub.coords.y - 12} 
                        fill="#F3EBDD" 
                        fontSize="11" 
                        fontWeight="bold" 
                        textAnchor="middle"
                        className="pointer-events-none drop-shadow-md"
                      >
                        {hub.name}
                      </text>
                    </g>
                  );
                })}

                {/* 3. DESTINATION HUBS (Chittagong & Mongla) */}
                {tradeHubs.destinations.map((dest) => {
                  const isActive = activeHub.id === dest.id;
                  return (
                    <g 
                      key={dest.id} 
                      className="cursor-pointer"
                      onClick={() => setActiveHub(dest)}
                      onMouseEnter={() => setHoveredEntity(dest.id)}
                      onMouseLeave={() => setHoveredEntity(null)}
                    >
                      {/* Large beacon pulse */}
                      <circle 
                        cx={dest.coords.x} 
                        cy={dest.coords.y} 
                        r={isActive ? 22 : 16} 
                        fill="rgba(45, 106, 79, 0.25)"
                        className="animate-ping"
                      />
                      {/* Outer boundary */}
                      <circle 
                        cx={dest.coords.x} 
                        cy={dest.coords.y} 
                        r="9" 
                        fill="#0B132B"
                        stroke="#2D6A4F" 
                        strokeWidth="3" 
                      />
                      {/* Core beacon */}
                      <circle 
                        cx={dest.coords.x} 
                        cy={dest.coords.y} 
                        r="4.5" 
                        fill="#4ADE80" 
                      />
                      {/* Destination Label */}
                      <text 
                        x={dest.coords.x + 14} 
                        y={dest.coords.y + 4} 
                        fill="#4ADE80" 
                        fontSize="12" 
                        fontWeight="900"
                        className="pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                      >
                        ⚓ {dest.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}

              </svg>

              {/* Bottom Quick Hub Switcher Bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-agro-navy-950/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Activity className="w-3.5 h-3.5 text-agro-gold-400" />
                  <span>Click hub for terminal draft & port facilities:</span>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto">
                  {tradeHubs.destinations.map(d => (
                    <button
                      key={d.id}
                      onClick={() => setActiveHub(d)}
                      className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                        activeHub.id === d.id 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                          : 'bg-slate-900/80 text-slate-400 hover:text-white'
                      }`}
                    >
                      {d.name.split('(')[0]}
                    </button>
                  ))}
                  {tradeHubs.origins.map(o => (
                    <button
                      key={o.id}
                      onClick={() => setActiveHub(o)}
                      className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                        activeHub.id === o.id 
                          ? 'bg-agro-gold-500/20 text-agro-gold-300 border border-agro-gold-500/40' 
                          : 'bg-slate-900/80 text-slate-400 hover:text-white'
                      }`}
                    >
                      {o.country}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right: Selected Hub / Sea Lane Detailed Dossier */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Active Port or Hub Card */}
            <div className="p-6 rounded-3xl bg-agro-navy-900/80 border border-agro-gold-500/30 backdrop-blur-xl shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-xl ${
                    activeHub.type.includes('Primary') || activeHub.type.includes('Secondary')
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-agro-gold-500/20 text-agro-gold-400'
                  }`}>
                    <Anchor className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {activeHub.type}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white">
                      {activeHub.name}
                    </h3>
                  </div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {activeHub.country}
                </span>
              </div>

              {/* Data Table */}
              <div className="space-y-3 text-xs">
                
                {activeHub.primaryCargo && (
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <p className="text-slate-400 text-[11px] mb-0.5">Primary Cargo Dispatched:</p>
                    <p className="font-semibold text-agro-gold-300">{activeHub.primaryCargo}</p>
                  </div>
                )}

                {activeHub.facilities && (
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <p className="text-slate-400 text-[11px] mb-0.5">Port Facilities & Unloading:</p>
                    <p className="font-medium text-slate-200">{activeHub.facilities}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <p className="text-slate-400 text-[10px]">Max Berth Draft</p>
                    <p className="font-bold text-cyan-300 font-mono">{activeHub.berthDraft || 'Deep Sea Transmit'}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <p className="text-slate-400 text-[10px]">Clearance Time</p>
                    <p className="font-bold text-emerald-400 font-mono">{activeHub.clearanceTime || activeHub.transitDaysToBD}</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-[10px]">Inspection Authority</p>
                    <p className="font-semibold text-slate-200">{activeHub.inspectionDesk || 'SGS & Chittagong Port Health'}</p>
                  </div>
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectRouteForQuote && onSelectRouteForQuote(activeHub.name)}
                    className="w-full py-2.5 rounded-xl bg-agro-gold-500 hover:bg-agro-gold-400 text-agro-navy-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Inquire Capacity for This Port</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

            {/* Selected Route Quick Card */}
            <div className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800 text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-agro-gold-400 uppercase tracking-wider text-[10px]">
                  Active Shipping Corridor
                </span>
                <span className="font-mono text-cyan-400 font-semibold">{selectedRoute.transitTime}</span>
              </div>
              <p className="font-bold text-sm text-white mb-1">
                {selectedRoute.origin} → {selectedRoute.destination}
              </p>
              <p className="text-slate-400 mb-3">
                Bulk Cargo: {selectedRoute.commodity} ({selectedRoute.vesselCount})
              </p>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-agro-gold-500 to-emerald-400 h-full w-3/4 rounded-full" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
