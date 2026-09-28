export const currencies = {
  USD: { code: "USD", symbol: "$", rate: 1.0, label: "USD ($) Global" },
  BDT: { code: "BDT", symbol: "৳", rate: 122.5, label: "BDT (৳) Bangladesh" },
  EUR: { code: "EUR", symbol: "€", rate: 0.92, label: "EUR (€) Europe" },
  AED: { code: "AED", symbol: "AED ", rate: 3.67, label: "AED (د.إ) UAE" }
};

export const liveMarketTickerData = [
  { commodity: "Yellow Split Peas (Canada #2)", price: 415, change: "+$12.50", changeType: "up", term: "CIF Chittagong", volume: "24,000 MT Traded" },
  { commodity: "Desi Chickpeas (Australian #1)", price: 745, change: "+$18.00", changeType: "up", term: "CIF Chittagong", volume: "18,500 MT Traded" },
  { commodity: "Kabuli Chickpeas 9mm (Canada)", price: 1175, change: "-$5.00", changeType: "down", term: "CIF Chittagong", volume: "6,200 MT Traded" },
  { commodity: "Crimson Red Lentils (Canada)", price: 690, change: "+$4.20", changeType: "up", term: "CIF Mongla", volume: "15,000 MT Traded" },
  { commodity: "Green Mung Beans (Myanmar)", price: 840, change: "+$8.00", changeType: "up", term: "CIF Chittagong", volume: "8,400 MT Traded" },
  { commodity: "Baltic Dry Bulk Index (BDI)", price: 1642, change: "+34 pts", changeType: "up", term: "Supramax / Handymax", volume: "Freight Bullish" },
  { commodity: "Chittagong Port Berthing Waiting", price: "1.2 Days", change: "-0.5d", changeType: "up", term: "CPA Outer Anchorage", volume: "Congestion Normal" }
];

export function convertPrice(amountUSD, currencyCode = "USD") {
  const curr = currencies[currencyCode] || currencies.USD;
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
  return num.toLocaleString();
}
