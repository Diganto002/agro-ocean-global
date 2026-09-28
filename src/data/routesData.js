export const tradeHubs = {
  origins: [
    {
      id: "guangzhou",
      name: "Guangzhou / Shenzhen Port",
      country: "চীন (China - প্রধান হাব)",
      coords: { x: 645, y: 195 }, // SVG coordinate map (800x450)
      type: "প্রধান আমদানি-রপ্তানি হাব (৮০%+ ভলিউম)",
      primaryCargo: "বুটের ডাল, হোয়াইট কিডনি বিনস, কৃষি প্রক্রিয়াজাতকরণ পণ্য",
      annualVolume: "৮৫০,০০০ মেট্রিক টন",
      transitDaysToBD: "১০ - ১২ দিন (এক্সপ্রেস রুট)",
      inspectionDesk: "CCIC চায়না ও SGS গুয়াংজু ব্যুরো",
      status: "দৈনিক নিয়মিত বাল্ক ও কনটেইনার শিপমেন্ট"
    },
    {
      id: "qingdao",
      name: "Qingdao & Dalian Port",
      country: "চীন (North China Agro Belt)",
      coords: { x: 675, y: 145 },
      type: "প্রধান বাল্ক গ্রেইন ও পালস টার্মিনাল",
      primaryCargo: "মটর ডাল, বিনস, রসুন ও প্রক্রিয়াজাত খাদ্য সামগ্রী",
      annualVolume: "৪২০,০০০ মেট্রিক টন",
      transitDaysToBD: "১৪ - ১৬ দিন",
      inspectionDesk: "CIQ চায়না সরকারি ফাইটোস্যানিটারি ও SGS",
      status: "সরাসরি বাল্ক ভ্যাসেল লোডিং"
    },
    {
      id: "kolkata",
      name: "কলকাতা ও পেট্রাপোল-বেনাপোল",
      country: "ভারত (প্রতিবেশী আঞ্চলিক রুট)",
      coords: { x: 555, y: 205 },
      type: "আঞ্চলিক স্থল ও কোস্টাল ফিডার হাব",
      primaryCargo: "ছোলা, মসুর ডাল ও মশলাজাতীয় খাদ্যশস্য",
      annualVolume: "১২০,০০০ মেট্রিক টন",
      transitDaysToBD: "২ - ৩ দিন (সীমান্ত রেল ও নদীপথ)",
      inspectionDesk: "বাংলাদেশ কাস্টমস ও ভারতীয় প্ল্যান্ট কোয়ারেন্টাইন",
      status: "বেনাপোল বর্ডার ক্লিয়ারেন্স চালু"
    },
    {
      id: "yangon",
      name: "ইয়াঙ্গুন ও টেকনাফ বর্ডার",
      country: "মিয়ানমার (আঞ্চলিক প্রতিবেশী)",
      coords: { x: 595, y: 228 },
      type: "আঞ্চলিক উপকূলীয় বাণিজ্যিক হাব",
      primaryCargo: "সবুজ মুগ ডাল, কালো মাষকলাই ও ডালশস্য",
      annualVolume: "৭৫,০০০ মেট্রিক টন",
      transitDaysToBD: "৩ - ৫ দিন (কোস্টাল ফিডার)",
      inspectionDesk: "মিয়ানমার সরকারি কোয়ারেন্টাইন ও SGS",
      status: "কোস্টাল ভ্যাসেল ট্রানজিট"
    }
  ],
  destinations: [
    {
      id: "chittagong",
      name: "চট্টগ্রাম বন্দর (Chittagong Port - CPA)",
      country: "বাংলাদেশ (প্রধান সামুদ্রিক প্রবেশদ্বার)",
      coords: { x: 580, y: 215 },
      type: "প্রধান আন্তর্জাতিক সমুদ্র বন্দর",
      annualCapacity: "১৫,০০,০০০ মেট্রিক টন কৃষি বাল্ক খাদ্যশস্য",
      facilities: "খাতুনগঞ্জ আড়তের সরাসরি সংযোগ, সাইলো টার্মিনাল, দ্রুত কাস্টমস রিলিজ",
      berthDraft: "৯.৫ মিমি - ১০.২ মিমি ড্রাফট",
      clearanceTime: "২৪ - ৩৬ ঘণ্টা (প্রাক-আগমন এন্ট্রি সুবিধা)",
      status: "বহির্নোঙ্গর ও জেটিতে প্রতিদিন জাহাজ খালাস"
    },
    {
      id: "mongla",
      name: "মোংলা বন্দর (Mongla Port)",
      country: "বাংলাদেশ (দক্ষিণ-পশ্চিমাঞ্চলীয় গেটওয়ে)",
      coords: { x: 568, y: 218 },
      type: "দ্বিতীয় বৃহত্তম সমুদ্র বন্দর",
      annualCapacity: "৫৫০,০০০ মেট্রিক টন",
      facilities: "পদ্মা সেতু হয়ে ঢাকা ও উত্তরবঙ্গে সরাসরি লাইটারেজ ও ট্রাক কার্গো পৌঁছানোর সুবিধা",
      berthDraft: "৮.৫ মিমি ড্রাফট",
      clearanceTime: "২৪ ঘণ্টা (কনজেশন-মুক্ত)",
      status: "লাইটারেজ খালাস অত্যন্ত দ্রুত"
    },
    {
      id: "benapole",
      name: "বেনাপোল স্থলবন্দর (Benapole Land Port)",
      country: "বাংলাদেশ (ভারত সীমান্তবর্তী প্রধান হাব)",
      coords: { x: 562, y: 212 },
      type: "প্রধান স্থল বন্দর",
      annualCapacity: "৩০০,০০০ মেট্রিক টন রেল ও রোড কার্গো",
      facilities: "রেল কার্গো ইয়ার্ড ও দ্রুত ট্রান্সশিপমেন্ট সুবিধা",
      berthDraft: "স্থল কার্গো / রেল ওয়াগন",
      clearanceTime: "১২ - ১৮ ঘণ্টা",
      status: "২৪/৭ সীমান্ত কার্গো ক্লিয়ারেন্স"
    }
  ]
};

export const activeVessels = [
  {
    id: "VSL-CHINA-901",
    vesselName: "MV China-Bengal Express",
    flag: "Bangladesh / China Ocean Line",
    imoNumber: "9518042",
    cargo: "৪৮,৫০০ MT চীনা বুটের ডাল ও সাদা কিডনি বিনস",
    originPort: "Guangzhou (চীন)",
    destinationPort: "চট্টগ্রাম বন্দর (CPA, বাংলাদেশ)",
    currentPosition: "বঙ্গোপসাগর চট্টগ্রাম বহির্নোঙ্গর (21.90° N, 91.60° E)",
    status: "বহির্নোঙ্গরে নোঙ্গরকৃত / পাইলট বার্থিং প্রস্তুত",
    speedKnots: "০.২ নট",
    eta: "আজ সন্ধ্যা ৬:০০ টা",
    progressPercent: 96,
    telemetry: {
      holdTemp: "২১.২°C",
      holdHumidity: "৫৫% RH",
      inertGasPressure: "১০২ kPa",
      fumigationCert: "CIQ-CN-90412 (কীটমুক্ত সনদ)",
      sgsSealNumber: "SGS-BD-GZ-8812"
    }
  },
  {
    id: "VSL-QINGDAO-782",
    vesselName: "MV Silk Road Agro",
    flag: "Panama",
    imoNumber: "9402914",
    cargo: "৩৬,২০০ MT কিংদাও কৃষি কমোডিটি ও মটর",
    originPort: "Qingdao (চীন)",
    destinationPort: "মোংলা বন্দর (বাংলাদেশ)",
    currentPosition: "মালাক্কা প্রণালী অতিক্রম করে বঙ্গোপসাগরের পথে",
    status: "ট্রানজিট চলমান - অনুকূল আবহাওয়া",
    speedKnots: "১৪.৬ নট",
    eta: "আগামী পরশু দুপুর ১২:০০ টা",
    progressPercent: 78,
    telemetry: {
      holdTemp: "২২.০°C",
      holdHumidity: "৫৩% RH",
      inertGasPressure: "১০১ kPa",
      fumigationCert: "CCIC-SH-5510",
      sgsSealNumber: "BV-CN-3391"
    }
  },
  {
    id: "VSL-KOLKATA-441",
    vesselName: "MV Padma Pioneer",
    flag: "Bangladesh",
    imoNumber: "9671182",
    cargo: "১৪,০০০ MT মসুর ডাল ও ছোলা (আঞ্চলিক কোস্টাল ফিডার)",
    originPort: "Kolkata (ভারত)",
    destinationPort: "মোংলা ও চট্টগ্রাম বন্দর",
    currentPosition: "সুন্দরবন কোস্টাল চ্যানেল",
    status: "নদী চ্যানেলে অগ্রসরমান",
    speedKnots: "৯.৪ নট",
    eta: "আগামীকাল সকাল ৮:০০ টা",
    progressPercent: 88,
    telemetry: {
      holdTemp: "২৩.১°C",
      holdHumidity: "৫৬% RH",
      inertGasPressure: "১০২ kPa",
      fumigationCert: "PPQ-IN-88910",
      sgsSealNumber: "SGS-KOL-1102"
    }
  }
];

export const shippingRoutes = [
  {
    id: "route-china-ctg",
    origin: "Guangzhou / Shenzhen (চীন - প্রধান হাব)",
    destination: "চট্টগ্রাম বন্দর (CPA)",
    commodity: "বুটের ডাল, কিডনি বিনস ও কৃষি খাদ্যপণ্য (৮০%+ ভলিউম)",
    transitTime: "১০ - ১২ দিন",
    vesselCount: "৫টি বাল্ক ও কনটেইনার ক্যারিয়ার",
    pathD: "M 645 195 Q 610 210, 580 215",
    color: "#E0A96D"
  },
  {
    id: "route-qingdao-mongla",
    origin: "Qingdao / Dalian (চীন)",
    destination: "মোংলা বন্দর",
    commodity: "বাল্ক মটর, শস্যদানা ও প্রক্রিয়াজাত সামগ্রী",
    transitTime: "১৪ দিন",
    vesselCount: "৩টি বাল্ক ভ্যাসেল",
    pathD: "M 675 145 Q 620 180, 568 218",
    color: "#F59E0B"
  },
  {
    id: "route-india-benapole",
    origin: "Kolkata / Petrapole (ভারত)",
    destination: "বেনাপোল ও মোংলা বন্দর",
    commodity: "ছোলা ও মসুর ডাল (আঞ্চলিক সরবরাহ)",
    transitTime: "২ - ৩ দিন",
    vesselCount: "দৈনিক রেল ওয়াগন ও কোস্টাল বার্জ",
    pathD: "M 555 205 Q 560 210, 562 212",
    color: "#52B788"
  },
  {
    id: "route-myanmar-ctg",
    origin: "Yangon Port (মিয়ানমার)",
    destination: "চট্টগ্রাম বন্দর ও টেকনাফ",
    commodity: "সবুজ মুগ ডাল ও মাষকলাই",
    transitTime: "৩ - ৫ দিন",
    vesselCount: "২টি কোস্টাল ফিডার",
    pathD: "M 595 228 Q 588 220, 580 215",
    color: "#38BDF8"
  }
];
