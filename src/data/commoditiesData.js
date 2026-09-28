export const commoditiesData = [
  {
    id: "yellow-split-peas",
    name: "Canadian Yellow Split Peas",
    localName: "বাছাইকৃত বুটের ডাল / মটর ডাল (But / Booter Dal)",
    category: "peas",
    origin: "Canada (Saskatchewan / Alberta)",
    grade: "Canada No. 1 / No. 2 Export Grade",
    image: "/images/yellow_split_peas.jpg",
    badge: "High Demand Import",
    featured: true,
    basePriceFOB: 365, // USD per MT
    basePriceCIF: 415, // USD per MT (Chittagong)
    specs: {
      purity: "99.5% Min",
      moisture: "12.0% Max",
      foreignMatter: "0.2% Max",
      splitsOrDamage: "3.0% Max",
      protein: "24.2%",
      cropYear: "2025 / 2026 Fresh Harvest",
      colorSortex: "Double Sortex Polished Optical Clean",
    },
    packaging: [
      "50 kg Woven PP Bags with Inner Liner",
      "25 kg Export Heavy-Duty Bags",
      "Bulk Container Liners (24-26 MT per 20ft FCL)",
      "1,000 kg Jumbo Big Bags"
    ],
    incotermsSupported: ["CIF Chittagong", "CIF Mongla", "CFR", "FOB Vancouver / Montreal"],
    minOrderQuantity: 25, // MT
    description: "Premium Canadian yellow split peas processed from top-grade Pisum sativum. Exceptionally uniform yellow cotyledon color, quick cooking time, rich creamy texture, ideal for commercial Dal mills, wholesale trading, and institutional food processing.",
    testCertificates: ["SGS Quality & Weight Certificate", "CFIA Phytosanitary Certificate", "Non-GMO Verification", "Radiation Free"]
  },
  {
    id: "chickpeas-garbanzo-desi",
    name: "Australian Desi Chickpeas",
    localName: "অস্ট্রেলিয়ান ছোট ছোলা (Desi Chola / Sola)",
    category: "chickpeas",
    origin: "Australia (Queensland / NSW)",
    grade: "Farmer Dressed & Machine Cleaned 99%",
    image: "/images/chickpeas.jpg",
    badge: "Ramadan Fast-Mover",
    featured: true,
    basePriceFOB: 680,
    basePriceCIF: 745,
    specs: {
      purity: "99.0% Min",
      moisture: "10.5% Max",
      foreignMatter: "0.3% Max",
      caliber: "5mm - 7mm Medium Caliber",
      protein: "22.5%",
      cropYear: "2025 / 2026 Crop",
      colorSortex: "Triple Air-Screened & Gravity Cleaned",
    },
    packaging: [
      "50 kg High-Tensile Polypropylene Bags",
      "Bulk in 20ft Containers (~25 MT)",
      "Custom Branded Bags Available for 500+ MT"
    ],
    incotermsSupported: ["CIF Chittagong", "CIF Mongla", "FOB Brisbane", "CFR"],
    minOrderQuantity: 50,
    description: "High-density Australian Desi chickpeas celebrated across South Asia for superior taste, dark golden brown skin, high water-absorption capacity, and exceptional sprouting rate. Ideal for wholesale Ramadan provisioning and bulk dry-food distribution.",
    testCertificates: ["SGS Pre-Shipment Inspection", "DAFF Phytosanitary Certificate", "Certificate of Origin", "Fumigation Certificate"]
  },
  {
    id: "chickpeas-kabuli-jumbo",
    name: "Kabuli Chickpeas (Garbanzo Jumbo 9mm)",
    localName: "বড় সাইজের কাবুলী ছোলা (Kabuli Chola - 9mm/10mm)",
    category: "chickpeas",
    origin: "Canada / India / Australia",
    grade: "Grade 1 Sortex Clean (42-44 Count/Oz)",
    image: "/images/chickpeas.jpg",
    badge: "Premium Gourmet",
    featured: true,
    basePriceFOB: 1080,
    basePriceCIF: 1175,
    specs: {
      purity: "99.8% Min",
      moisture: "10.0% Max",
      foreignMatter: "0.1% Max",
      caliber: "8mm, 9mm, 10mm Jumbo Screened",
      protein: "21.0%",
      cropYear: "2025 / 2026 Current Crop",
      colorSortex: "Cream White / Light Beige Flawless",
    },
    packaging: [
      "25 kg & 50 kg BOPP Laminated Multi-Color Bags",
      "1,000 kg FIBC Bulk Totes",
      "20ft Dry Van Containers"
    ],
    incotermsSupported: ["CIF Chittagong", "CIF Mongla", "FOB Montreal / Mundra"],
    minOrderQuantity: 25,
    description: "Exceptional large-caliber Kabuli chickpeas offering majestic seed size, thin skins, and buttery softness when boiled. Specially sorted for luxury hotel supply, premium canning, and gourmet wholesale packaging.",
    testCertificates: ["SGS Laboratory Report", "ISO 22000 Food Safety", "Phytosanitary Health Certificate"]
  },
  {
    id: "crimson-red-split-lentils",
    name: "Crimson Red Split Lentils",
    localName: "লাল মসুর ডাল (Masoor Dal / Football & Split)",
    category: "lentils",
    origin: "Canada / Australia",
    grade: "Grade 1 Sortex 0.5% Max Defect",
    image: "/images/red_lentils.jpg",
    badge: "Daily Essential",
    featured: true,
    basePriceFOB: 620,
    basePriceCIF: 690,
    specs: {
      purity: "99.8% Min",
      moisture: "12.0% Max",
      foreignMatter: "0.2% Max",
      splitsOrDamage: "2.0% Max",
      protein: "25.8%",
      cropYear: "2025 / 2026 Harvest",
      colorSortex: "Bright Ruby Orange / Polished",
    },
    packaging: [
      "50 kg Strong Polypropylene Bags",
      "25 kg Retail Ready Master Cartons",
      "Bulk Container Liners"
    ],
    incotermsSupported: ["CIF Chittagong", "CIF Mongla", "FOB Vancouver", "CFR"],
    minOrderQuantity: 25,
    description: "Vibrant scarlet split red lentils with supreme color uniformity. High protein content and rapid cooking yield make this the #1 consumer volume staple across Bangladesh and Southeast Asia.",
    testCertificates: ["SGS Purity Certificate", "CFIA Official Grain Inspection", "Non-GMO Statement"]
  },
  {
    id: "green-mung-beans",
    name: "Whole Green Mung Beans",
    localName: "সবুজ গোটা মুগ ডাল (Green Moong Beans)",
    category: "beans",
    origin: "Myanmar / India / Australia",
    grade: "Special Machine Cleaned 3.5mm+",
    image: "/images/mung_beans.jpg",
    badge: "High Sprout Ratio",
    featured: false,
    basePriceFOB: 780,
    basePriceCIF: 840,
    specs: {
      purity: "99.0% Min",
      moisture: "11.0% Max",
      foreignMatter: "0.5% Max",
      caliber: "3.5mm - 4.0mm Diameter",
      protein: "23.8%",
      cropYear: "2025 / 2026",
      colorSortex: "Lustrous Deep Emerald Green",
    },
    packaging: [
      "50 kg Double-Stitched PP Bags",
      "Bulk container loads (22 MT/20ft)"
    ],
    incotermsSupported: ["CIF Chittagong", "CIF Mongla", "FOB Yangon"],
    minOrderQuantity: 25,
    description: "Lustrous emerald green mung beans selected for both direct cooking and industrial microgreen/bean sprout cultivation. 96%+ sprouting germination rate verified by pre-export testing.",
    testCertificates: ["Plant Quarantine Certificate", "SGS Microbiological Assay", "Certificate of Origin"]
  },
  {
    id: "green-field-peas-whole",
    name: "Canadian Whole Green Peas",
    localName: "গোটা সবুজ মটর ডাল (Whole Green Field Peas)",
    category: "peas",
    origin: "Canada / Russia",
    grade: "Grade 2 or Better Export Standard",
    image: "/images/yellow_split_peas.jpg",
    badge: "Snack & Food Prep",
    featured: false,
    basePriceFOB: 410,
    basePriceCIF: 465,
    specs: {
      purity: "99.2% Min",
      moisture: "12.5% Max",
      foreignMatter: "0.4% Max",
      caliber: "6mm - 7.5mm Uniform",
      protein: "23.5%",
      cropYear: "2025 / 2026",
      colorSortex: "Natural Jade Green",
    },
    packaging: [
      "50 kg PP Bags with Custom Liner",
      "Bulk 20ft Container Liner Loads"
    ],
    incotermsSupported: ["CIF Chittagong", "CIF Mongla", "FOB"],
    minOrderQuantity: 50,
    description: "Uniform round green field peas widely utilized for fried snack processing (Chanachur / Wasabi peas), canning, and flour milling.",
    testCertificates: ["SGS Weight & Quality", "CFIA Phyto Certificate"]
  }
];

export const originCountries = [
  { id: "all", name: "All Origins" },
  { id: "canada", name: "Canada" },
  { id: "australia", name: "Australia" },
  { id: "india", name: "India" },
  { id: "myanmar", name: "Myanmar" }
];

export const commodityCategories = [
  { id: "all", name: "All Commodities" },
  { id: "peas", name: "Split & Field Peas (বুটের ডাল)" },
  { id: "chickpeas", name: "Chickpeas / Garbanzo (ছোলা)" },
  { id: "lentils", name: "Red Lentils (মসুর ডাল)" },
  { id: "beans", name: "Mung & Beans (মুগ ডাল)" }
];
