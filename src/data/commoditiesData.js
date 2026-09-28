export const commoditiesData = [
  {
    id: "yellow-split-peas",
    name: "Yellow Split Peas (মটর ও বুটের ডাল)",
    localName: "আমদানিকৃত বাছাইকৃত বুটের ডাল / মটর ডাল (But / Booter Dal)",
    category: "peas",
    origin: "চীন (Qingdao/Dalian) ও কানাডা",
    grade: "Grade 1 ডাবল সর্টেক্স পলিশড এক্সপোর্ট গ্রেড",
    image: "/images/yellow_split_peas.jpg",
    badge: "৮০% চীন ও কানাডা ইমপোর্ট",
    featured: true,
    basePriceFOB: 365,
    basePriceCIF: 415, // USD per MT
    specs: {
      purity: "৯৯.৫% মিনিমাম",
      moisture: "১২.০% ম্যাক্সিমাম",
      foreignMatter: "০.২% ম্যাক্সিমাম",
      splitsOrDamage: "২.৫% ম্যাক্স",
      protein: "২৪.২% ক্রুড প্রোটিন",
      cropYear: "২০২৫-২০২৬ ফ্রেশ ক্রপ",
      colorSortex: "ডাবল অপটিক্যাল সর্টেক্স পলিশড গোল্ডেন",
    },
    packaging: [
      "৫০ কেজি হাই-ডেনসিটি পলিপ্রপিলিন (PP) ব্যাগ",
      "২৫ কেজি রিটেইল রেডি প্রিন্টেড বস্তা",
      "বাল্ক কনটেইনার লাইনার (২৪-২৬ মেট্রিক টন/২০ ফুট FCL)",
      "১,০০০ কেজি জাম্বো বিগ ব্যাগ (মিলের সুবিধার্থে)"
    ],
    incotermsSupported: ["CIF চট্টগ্রাম বন্দর (CPA)", "CIF মোংলা", "বেনাপোল ডেলিভারি", "FOB গুয়াংজু / কিংদাও"],
    minOrderQuantity: 25,
    description: "খাতুনগঞ্জ ও সারাদেশের ডাল মিল এবং পাইকারি আড়তদারদের প্রধান পছন্দ। চীন ও কানাডার আধুনিক প্রযুক্তিতে পরিশোধিত ও ডাবল সর্টেক্স পলিশকৃত উজ্জ্বল হলুদ বুটের ডাল। দ্রুত সিদ্ধ হওয়া ও সেরা ক্রিমের টেক্সচারের জন্য সুপরিচিত।",
    testCertificates: ["SGS ল্যাব টেস্ট ও পিউরিটি সার্টিফিকেট", "জাতীয় উদ্ভিদ সংগনিরোধ (NPPO) ছাড়পত্র", "নন-জিএমও (Non-GMO) ভেরিফিকেশন", "রেডিয়েশন-মুক্ত প্রত্যয়নপত্র"]
  },
  {
    id: "chickpeas-garbanzo-desi",
    name: "Australian & Desi Chickpeas (ছোলা বুট)",
    localName: "অস্ট্রেলিয়ান ও দেশি লালচে-বাদামী ছোলা (Chola / Sola)",
    category: "chickpeas",
    origin: "অস্ট্রেলিয়া, ভারত ও আঞ্চলিক হাব",
    grade: "মেশিন ক্লিনড ৯৯% পিউরিটি (Farmer Dressed)",
    image: "/images/chickpeas.jpg",
    badge: "রমজান ও সারা বছরের ফাস্ট-সেলার",
    featured: true,
    basePriceFOB: 680,
    basePriceCIF: 745,
    specs: {
      purity: "৯৯.০% মিনিমাম",
      moisture: "১০.৫% ম্যাক্সিমাম",
      foreignMatter: "০.৩% ম্যাক্স",
      caliber: "৫ মিমি - ৮ মিমি ইউনিফর্ম ক্যালিবার",
      protein: "২২.৫%",
      cropYear: "২০২৫-২০২৬ নতুন ফসল",
      colorSortex: "ট্রিপল এয়ার-স্ক্রিনড ও গ্র্যাভিটি ক্লিনড",
    },
    packaging: [
      "৫০ কেজি জুট ও হেভি-ডিউটি পিপি ব্যাগ",
      "২০ ফুট ড্রাই কনটেইনার বাল্ক লোড (~২৫ MT)",
      "খাতুনগঞ্জ ডেলিভারি উপযোগী কাস্টম প্রিন্টেড ব্যাগ"
    ],
    incotermsSupported: ["CIF চট্টগ্রাম বন্দর", "CIF মোংলা", "বেনাপোল বর্ডার", "FOB"],
    minOrderQuantity: 50,
    description: "রমজানের সর্বোচ্চ চাহিদাসম্পন্ন প্রিমিয়াম কোয়ালিটি ছোলা। উচ্চ পানি শোষণ ক্ষমতা, সুস্বাদু স্বাদ এবং চমৎকার অঙ্কুরোদগম হার। খাতুনগঞ্জ আড়ত ও ঢাকার মৌলভীবাজার পাইকারি বাজারের প্রধান ভলিউম আইটেম।",
    testCertificates: ["SGS প্রাক-জাহাজীকরণ পরিদর্শন সনদ", "DAFF / NPPO ফাইটোস্যানিটারি ক্লিয়ারেন্স", "সার্টিফিকেট অব অরিজিন", "মিথাইল ব্রোমাইড ফিউমিগেশন সনদ"]
  },
  {
    id: "chinese-white-kidney-beans",
    name: "Chinese White Kidney Beans (চীনা সাদা শিম বিচি)",
    localName: "আমদানিকৃত চীনা হোয়াইট কিডনি বিনস ও ফ্রেঞ্চ বিনস",
    category: "beans",
    origin: "চীন (Heilongjiang & Dalian)",
    grade: "সুপার হ্যান্ড-পিকড (HPS) এক্সপোর্ট স্ট্যান্ডার্ড",
    image: "/images/yellow_split_peas.jpg",
    badge: "সরাসরি চীন থেকে আমদানি",
    featured: true,
    basePriceFOB: 820,
    basePriceCIF: 890,
    specs: {
      purity: "৯৯.৮% মিনিমাম",
      moisture: "১৩.০% ম্যাক্সিমাম",
      foreignMatter: "০.১% ম্যাক্স",
      caliber: "১৮০-২০০ দানা/১০০ গ্রাম (বড় দানা)",
      protein: "২৩.৫%",
      cropYear: "২০২৫-২০২৬ চীনা ফ্রেশ হার্ভেস্ট",
      colorSortex: "ঝকঝকে দুধ-সাদা রঙ ও নিখুঁত আকৃতি",
    },
    packaging: [
      "২৫ কেজি ও ৫০ কেজি পিভিসি লাইনারসহ পিপি ব্যাগ",
      "প্যালেটসহ কনটেইনারাইজড লোডিং"
    ],
    incotermsSupported: ["CIF চট্টগ্রাম", "CIF মোংলা", "FOB দালিয়ান / কিংদাও"],
    minOrderQuantity: 25,
    description: "সরাসরি চীনের হেইলংজিয়াং প্রদেশ থেকে বাল্ক আমদানি। হোটেল-রেস্তোরাঁ সাপ্লাই, প্রক্রিয়াজাত খাদ্য শিল্প এবং প্রিমিয়াম খাদ্য পণ্যের জন্য উচ্চ চাহিদাসম্পন্ন সাদা বিনস।",
    testCertificates: ["CCIC / CIQ চায়না সরকারি পরিদর্শন", "SGS কোয়ালিটি সার্টিফিকেট", "বাংলাদেশ প্ল্যান্ট কোয়ারেন্টাইন সার্টিফিকেট"]
  },
  {
    id: "crimson-red-split-lentils",
    name: "Crimson Red Split Lentils (মসুর ডাল)",
    localName: "বাছাইকৃত লাল মসুর ডাল (ফুটবল ও স্প্লিট মসুর ডাল)",
    category: "lentils",
    origin: "কানাডা, ভারত ও অস্ট্রেলিয়া",
    grade: "Grade 1 সর্টেক্স ০.৫% ম্যাক্স ডিফেক্ট",
    image: "/images/red_lentils.jpg",
    badge: "দৈনন্দিন ভলিউম লিডার",
    featured: true,
    basePriceFOB: 620,
    basePriceCIF: 690,
    specs: {
      purity: "৯৯.৮% মিনিমাম",
      moisture: "১২.০% ম্যাক্সিমাম",
      foreignMatter: "০.২% ম্যাক্স",
      splitsOrDamage: "২.০% ম্যাক্সিমাম",
      protein: "২৫.৮% হাই প্রোটিন",
      cropYear: "২০২৫-২০২৬ নতুন মওসুম",
      colorSortex: "উজ্জ্বল রুবী লালচে-কমলা ডাবল সর্টেক্স",
    },
    packaging: [
      "৫০ কেজি হেভি-ডিউটি পিপি বস্তা",
      "২৫ কেজি ব্র্যান্ডেড রিটেইল মাস্টার প্যাক",
      "বাল্ক কনটেইনার লাইনার লোড"
    ],
    incotermsSupported: ["CIF চট্টগ্রাম", "CIF মোংলা", "বেনাপোল বর্ডার রেল ট্রানজিট"],
    minOrderQuantity: 25,
    description: "বাংলাদেশের ভোক্তাদের ১ নম্বর নিত্যপ্রয়োজনীয় মসুর ডাল। গাঢ় লালচে-কমলা বর্ণ, কোনো প্রকার রাসায়নিক রঙমুক্ত এবং দ্রুততম সময়ে রন্ধনযোগ্য। সরাসরি মিলারদের ফ্যাক্টরি ইয়ার্ডে পৌঁছে দেওয়ার নিশ্চয়তা।",
    testCertificates: ["SGS পিউরিটি সার্টিফিকেট", "CFIA অফিশিয়াল ইন্সপেকশন", "নন-জিএমও প্রত্যয়নপত্র"]
  },
  {
    id: "green-mung-beans",
    name: "Green Mung Beans (গোটা সবুজ মুগ ডাল)",
    localName: "উন্নত সবুজ মুগ ডাল (আঞ্চলিক ও চীন আমদানি)",
    category: "beans",
    origin: "মিয়ানমার (ইয়াঙ্গুন), চীন ও ভারত",
    grade: "স্পেশাল মেশিন ক্লিনড ৩.৫ মিমি+",
    image: "/images/mung_beans.jpg",
    badge: "৯৫%+ অঙ্কুরোদগম হার",
    featured: false,
    basePriceFOB: 780,
    basePriceCIF: 840,
    specs: {
      purity: "৯৯.০% মিনিমাম",
      moisture: "১১.০% ম্যাক্সিমাম",
      foreignMatter: "০.৫% ম্যাক্স",
      caliber: "৩.৫ মিমি - ৪.০ মিমি গ্যারান্টিড ডায়ামিটার",
      protein: "২৩.৮%",
      cropYear: "২০২৫-২০২৬ ক্রপ",
      colorSortex: "উজ্জ্বল পান্না সবুজ প্রাকৃতিক পলিশ",
    },
    packaging: [
      "৫০ কেজি ডাবল স্টিচড পলিপ্রপিলিন ব্যাগ",
      "বাল্ক লোড ২২ মেট্রিক টন প্রতি ২০ ফুট কনটেইনার"
    ],
    incotermsSupported: ["CIF চট্টগ্রাম", "CIF মোংলা", "টেকনাফ স্থলবন্দর ডেলিভারি"],
    minOrderQuantity: 25,
    description: "মিয়ানমার ও চীন থেকে আমদানিকৃত উন্নত জাতের সবুজ মুগ ডাল। মিষ্টি ও মসৃণ স্বাদ, উচ্চ প্রোটিন সমৃদ্ধ। সরাসরি মিষ্টি তৈরি, ডাল রান্না ও স্প্রাউট তৈরির জন্য বিশেষ উপযোগী।",
    testCertificates: ["প্ল্যান্ট কোয়ারেন্টাইন ছাড়পত্র", "SGS মাইক্রোবায়োলজিক্যাল টেস্ট", "সার্টিফিকেট অব অরিজিন"]
  },
  {
    id: "bd-sesame-seeds-export",
    name: "Bangladeshi Sesame Seeds (রপ্তানিযোগ্য দেশি তিল - চীন এক্সপোর্ট)",
    localName: "চীন ও আঞ্চলিক দেশে রপ্তানিযোগ্য প্রাকৃতিক কালো ও সাদা তিল",
    category: "export",
    origin: "বাংলাদেশ (যশোর, কুষ্টিয়া ও ফরিদপুর বেল্ট)",
    grade: "এক্সপোর্ট গ্রেড ৯৯.৫% পিউরিটি (চীন স্পেসিফিকেশন)",
    image: "/images/chickpeas.jpg",
    badge: "চীনে বড় ভলিউম এক্সপোর্ট",
    featured: false,
    basePriceFOB: 1150,
    basePriceCIF: 1240, // CIF Guangzhou / Qingdao
    specs: {
      purity: "৯৯.৫% মিনিমাম",
      moisture: "৮.০% ম্যাক্সিমাম",
      foreignMatter: "০.৫% ম্যাক্স",
      oilContent: "৪৮% - ৫২% উচ্চ তেল উপাদান",
      protein: "১৯.৫%",
      cropYear: "২০২৫-২০২৬ মওসুম",
      colorSortex: "ন্যাচারাল ব্ল্যাক ও ব্রাউন সর্টেড",
    },
    packaging: [
      "৫০ কেজি এক্সপোর্ট কোয়ালিটি নতুন পিপি ব্যাগ",
      "কনটেইনারাইজড শিপমেন্ট সরাসরি কিংদাও ও গুয়াংজু পোর্টে"
    ],
    incotermsSupported: ["FOB চট্টগ্রাম বন্দর", "CIF কিংদাও (Qingdao)", "CIF গুয়াংজু (China)"],
    minOrderQuantity: 20,
    description: "চীন ও আন্তর্জাতিক বাজারে বাংলাদেশের অন্যতম প্রধান কৃষি রপ্তানি পণ্য। চীনের তিল তেল ও খাদ্য প্রক্রিয়াজাতকরণ ফ্যাক্টরির জন্য নির্ধারিত স্পেসিফিকেশনে শতভাগ সর্টেক্স ক্লিনড তিল সরবরাহ।",
    testCertificates: ["EPB বাংলাদেশ রপ্তানি উন্নয়ন ব্যুরো অনুমোদন", "SGS প্রাক-রপ্তানি কোয়ালিটি সার্টিফিকেট", "চীন শুল্ক ও কোয়ারেন্টাইন কমপ্লায়েন্স"]
  }
];

export const originCountries = [
  { id: "all", name: "সব উৎস (All Origins)" },
  { id: "চীন", name: "চীন (China - ৮০%+)" },
  { id: "ভারত", name: "ভারত (India)" },
  { id: "মিয়ানমার", name: "মিয়ানমার (Myanmar)" },
  { id: "কানাডা", name: "কানাডা ও অস্ট্রেলিয়া" }
];

export const commodityCategories = [
  { id: "all", name: "সকল খাদ্যপণ্য" },
  { id: "peas", name: "বুটের ডাল ও মটর (Yellow Peas)" },
  { id: "chickpeas", name: "ছোলা বুট (Chickpeas)" },
  { id: "beans", name: "চীনা বিনস ও মুগ (Beans)" },
  { id: "lentils", name: "মসুর ডাল (Red Lentils)" },
  { id: "export", name: "চীন এক্সপোর্ট আইটেম (Export)" }
];
