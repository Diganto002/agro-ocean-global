export const tradeHubs = {
  origins: [
    {
      id: "vancouver",
      name: "Vancouver / Montreal",
      country: "Canada",
      coords: { x: 175, y: 155 }, // Normalized SVG coordinate space (800x450)
      type: "Origin Hub",
      primaryCargo: "Yellow Split Peas, Green Peas, Lentils",
      annualVolume: "480,000 MT",
      transitDaysToBD: "26 - 30 Days",
      inspectionDesk: "SGS / CFIA Vancouver Bureau",
      status: "Active Dispatches"
    },
    {
      id: "brisbane",
      name: "Brisbane / Melbourne",
      country: "Australia",
      coords: { x: 710, y: 350 },
      type: "Origin Hub",
      primaryCargo: "Desi Chickpeas, Kabuli Chickpeas, Crimson Lentils",
      annualVolume: "320,000 MT",
      transitDaysToBD: "18 - 22 Days",
      inspectionDesk: "Bureau Veritas / DAFF Marine Desk",
      status: "Peak Harvest Loading"
    },
    {
      id: "mumbai",
      name: "Nhava Sheva / Mundra",
      country: "India",
      coords: { x: 535, y: 225 },
      type: "Origin Hub",
      primaryCargo: "Kabuli Chickpeas, Spices, Moong Beans",
      annualVolume: "140,000 MT",
      transitDaysToBD: "7 - 10 Days",
      inspectionDesk: "SGS India Agricultural Wing",
      status: "Express Coastal Transit"
    },
    {
      id: "yangon",
      name: "Yangon Port",
      country: "Myanmar",
      coords: { x: 595, y: 228 },
      type: "Origin Hub",
      primaryCargo: "Green Mung Beans, Black Matpe, Pigeon Peas",
      annualVolume: "95,000 MT",
      transitDaysToBD: "4 - 6 Days",
      inspectionDesk: "Myanmar Plant Protection Dept & SGS",
      status: "Active Feeder Transit"
    }
  ],
  destinations: [
    {
      id: "chittagong",
      name: "Chittagong Port Authority (CPA)",
      country: "Bangladesh (Primary Gateway)",
      coords: { x: 580, y: 215 },
      type: "Primary Deepwater Port",
      annualCapacity: "1,200,000 MT Agro Bulk",
      facilities: "Customs Fast-Track, Direct Berth Pneumatic Grain Unloaders, 12 Silo Terminals",
      berthDraft: "9.5m - 10.2m High Tide",
      clearanceTime: "36 - 48 Hours with Pre-Arrival Customs Entry",
      status: "Receiving Vessels Daily"
    },
    {
      id: "mongla",
      name: "Mongla Port",
      country: "Bangladesh (Secondary Gateway)",
      coords: { x: 570, y: 218 },
      type: "Secondary Bulk Terminal",
      annualCapacity: "450,000 MT Agro Bulk",
      facilities: "Direct River Barge Feeder Access to Northern Agro Belts, Fast Lighterage",
      berthDraft: "8.5m Mean Sea Level",
      clearanceTime: "24 - 36 Hours",
      status: "Berthing Congestion: Low"
    },
    {
      id: "singapore",
      name: "Port of Singapore (PSA)",
      country: "Singapore",
      coords: { x: 620, y: 268 },
      type: "Regional Transshipment Hub",
      annualCapacity: "Transshipment Consolidation",
      facilities: "Automated Container Terminals, Feeder Vessel Relays",
      berthDraft: "16.0m Ultra Deepwater",
      clearanceTime: "12 Hours Transshipment",
      status: "24/7 Operations"
    }
  ]
};

export const activeVessels = [
  {
    id: "VSL-8910",
    vesselName: "MV Golden Harvest",
    flag: "Panama",
    imoNumber: "9482103",
    cargo: "54,200 MT Canadian Yellow Split Peas",
    originPort: "Vancouver, Canada",
    destinationPort: "Chittagong Port (CPA), Bangladesh",
    currentPosition: "Chittagong Outer Anchorage (22.25° N, 91.75° E)",
    status: "Anchored / Awaiting Pilot Berth",
    speedKnots: "0.2 kn",
    eta: "Today, 18:30 BST",
    progressPercent: 96,
    telemetry: {
      holdTemp: "21.4°C",
      holdHumidity: "56% RH",
      inertGasPressure: "102 kPa",
      fumigationCert: "NPPO-CA-8921B (Certified Insect-Free)",
      sgsSealNumber: "SGS-BD-90412-A"
    }
  },
  {
    id: "VSL-7422",
    vesselName: "MV Pacific Grain",
    flag: "Liberia",
    imoNumber: "9312845",
    cargo: "41,800 MT Australian Desi Chickpeas",
    originPort: "Brisbane, Australia",
    destinationPort: "Chittagong Port (CPA), Bangladesh",
    currentPosition: "Bay of Bengal (16.42° N, 88.19° E)",
    status: "In Transit - Normal Sailing",
    speedKnots: "14.4 kn",
    eta: "Tomorrow, 21:00 BST",
    progressPercent: 88,
    telemetry: {
      holdTemp: "22.1°C",
      holdHumidity: "54% RH",
      inertGasPressure: "101 kPa",
      fumigationCert: "DAFF-AU-5521",
      sgsSealNumber: "SGS-AU-6610-K"
    }
  },
  {
    id: "VSL-6619",
    vesselName: "MV Indus Pioneer",
    flag: "Singapore",
    imoNumber: "9677119",
    cargo: "28,500 MT Crimson Red Lentils & Split Peas",
    originPort: "Nhava Sheva, India",
    destinationPort: "Mongla Port, Bangladesh",
    currentPosition: "Andaman Sea Approaches (11.80° N, 92.40° E)",
    status: "In Transit - Optimal Route",
    speedKnots: "13.8 kn",
    eta: "In 3 Days",
    progressPercent: 65,
    telemetry: {
      holdTemp: "23.0°C",
      holdHumidity: "57% RH",
      inertGasPressure: "102 kPa",
      fumigationCert: "PPQ-IN-99120",
      sgsSealNumber: "BV-IN-4402"
    }
  }
];

export const shippingRoutes = [
  {
    id: "route-canada-ctg",
    origin: "Vancouver / Montreal, Canada",
    destination: "Chittagong Port (CPA)",
    commodity: "Yellow Split Peas & Lentils",
    transitTime: "28 Days",
    vesselCount: "3 Bulk Carriers",
    pathD: "M 175 155 Q 380 90, 580 215",
    color: "#E0A96D"
  },
  {
    id: "route-australia-ctg",
    origin: "Brisbane, Australia",
    destination: "Chittagong Port (CPA)",
    commodity: "Desi & Kabuli Chickpeas",
    transitTime: "19 Days",
    vesselCount: "2 Bulk Carriers",
    pathD: "M 710 350 Q 660 270, 580 215",
    color: "#52B788"
  },
  {
    id: "route-india-mongla",
    origin: "Mundra / Mumbai, India",
    destination: "Mongla Port",
    commodity: "Chickpeas & Grains",
    transitTime: "8 Days",
    vesselCount: "2 Cargo Feeders",
    pathD: "M 535 225 Q 550 220, 570 218",
    color: "#F59E0B"
  },
  {
    id: "route-myanmar-ctg",
    origin: "Yangon, Myanmar",
    destination: "Chittagong Port (CPA)",
    commodity: "Mung Beans & Matpe",
    transitTime: "5 Days",
    vesselCount: "1 Feeder Carrier",
    pathD: "M 595 228 Q 588 220, 580 215",
    color: "#38BDF8"
  }
];
