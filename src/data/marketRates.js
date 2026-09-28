export const currencies = {
  BDT: { code: "BDT", symbol: "৳", rate: 122.5, label: "বাংলাদেশি টাকা (BDT ৳)" },
  USD: { code: "USD", symbol: "$", rate: 1.0, label: "USD ($) Global Trade" },
  EUR: { code: "EUR", symbol: "€", rate: 0.92, label: "ইউরো (EUR €)" },
  AED: { code: "AED", symbol: "AED ", rate: 3.67, label: "দিরহাম (AED د.إ)" }
};

export const liveMarketTickerData = [
  { commodity: "বুটের ডাল / মটর (Yellow Split Peas)", price: 415, change: "+৳১.৫০/কেজি", changeType: "up", term: "খাতুনগঞ্জ স্পট / CIF চট্টগ্রাম", volume: "২৪,০০০ MT চীন-কানাডা কার্গো" },
  { commodity: "অস্ট্রেলিয়ান ও দেশি ছোলা (Desi Chola)", price: 745, change: "+৳২.২০/কেজি", changeType: "up", term: "খাতুনগঞ্জ পাইকারি রেট", volume: "১৮,৫০০ MT চট্টগ্রাম স্টক" },
  { commodity: "চীন হোয়াইট কিডনি বিনস (China White Beans)", price: 890, change: "-$১০/MT", changeType: "down", term: "CIF চট্টগ্রাম (Guangzhou)", volume: "৮,২০০ MT শিপমেন্ট" },
  { commodity: "লাল মসুর ডাল (Crimson Red Lentils)", price: 690, change: "+৳০.৮০/কেজি", changeType: "up", term: "মৌলভীবাজার / মোংলা ডেলিভারি", volume: "১৫,০০০ MT" },
  { commodity: "সবুজ মুগ ডাল (Green Mung Beans)", price: 840, change: "+$১২/MT", changeType: "up", term: "ইয়াঙ্গুন-টেকনাফ ও চীন কার্গো", volume: "৬,৪০০ MT" },
  { commodity: "চীন-চট্টগ্রাম কনটেইনার ফ্রেইট (Guangzhou-CTG)", price: 1450, change: "-$৫০/FEU", changeType: "down", term: "সরাসরি ফিডার ভ্যাসেল", volume: "স্বাভাবিক ট্রানজিট" },
  { commodity: "বেনাপোল স্থলবন্দর ক্লিয়ারেন্স (Petrapole-Benapole)", price: "২৪ ঘণ্টা", change: "দ্রুত ক্লিয়ারেন্স", changeType: "up", term: "ভারত-বাংলাদেশ বর্ডার", volume: "রেল ও ট্রাক লোডিং" }
];

export function convertPrice(amountUSD, currencyCode = "BDT") {
  const curr = currencies[currencyCode] || currencies.BDT;
  const converted = amountUSD * curr.rate;
  
  if (currencyCode === "BDT") {
    return `${curr.symbol} ${converted.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
  } else if (currencyCode === "EUR") {
    return `${curr.symbol}${converted.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  } else if (currencyCode === "AED") {
    return `${curr.symbol}${converted.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `${curr.symbol}${converted.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatNumber(num) {
  return num.toLocaleString("en-IN");
}
