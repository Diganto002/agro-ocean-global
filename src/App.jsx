import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MarketTicker from './components/MarketTicker';
import Hero from './components/Hero';
import CommodityShowcase from './components/CommodityShowcase';
import BulkQuoteCalculator from './components/BulkQuoteCalculator';
import TradeRouteMap from './components/TradeRouteMap';
import ShipmentTracker from './components/ShipmentTracker';
import QualityAssurance from './components/QualityAssurance';
import RFQModal from './components/RFQModal';
import CatalogModal from './components/CatalogModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { commoditiesData } from './data/commoditiesData';

export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [activeLanguage, setActiveLanguage] = useState('EN');
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [activeQuotePayload, setActiveQuotePayload] = useState(null);
  const [calcSelectedCommodity, setCalcSelectedCommodity] = useState(null);

  // When user clicks "Calculate CIF Quote" or selects commodity from ticker
  const handleSelectCommodityForQuote = (commodity) => {
    let target = commodity;
    if (typeof commodity === 'string') {
      target = commoditiesData.find(c => 
        c.name.toLowerCase().includes(commodity.toLowerCase().split(' ')[0])
      ) || commoditiesData[0];
    }
    setCalcSelectedCommodity(target);
    const calcSection = document.getElementById('calculator');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user clicks "Inquire Capacity for This Port" on the map
  const handleSelectRouteForQuote = (portName) => {
    const calcSection = document.getElementById('calculator');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user locks in rate from the Calculator
  const handleLockInQuote = (quotePayload) => {
    setActiveQuotePayload(quotePayload);
    setIsRFQOpen(true);
  };

  // Open Vessel Tracker
  const handleOpenTracker = () => {
    const trackerSection = document.getElementById('tracking');
    if (trackerSection) {
      trackerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070B18] text-slate-100 flex flex-col font-sans selection:bg-agro-gold-500/30 selection:text-agro-gold-200">
      
      {/* 1. Global Frosted Glass Header */}
      <Navbar
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
        onOpenRFQ={() => {
          setActiveQuotePayload(null);
          setIsRFQOpen(true);
        }}
        onOpenTracker={handleOpenTracker}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        
        {/* 2. Hero Section with 3D Canvas Seeds & Bulk Cargo Presentation */}
        <Hero
          onOpenRFQ={() => setIsRFQOpen(true)}
          onOpenTracker={handleOpenTracker}
          onOpenCatalog={() => setIsCatalogOpen(true)}
        />

        {/* 3. Live Marquee Market FOB/CIF Ticker */}
        <MarketTicker
          selectedCurrency={selectedCurrency}
          onSelectCommodityForQuote={handleSelectCommodityForQuote}
        />

        {/* 4. Core Commodity Showcase (Focus on Yellow Split Peas & Chickpeas) */}
        <CommodityShowcase
          selectedCurrency={selectedCurrency}
          onSelectCommodityForQuote={handleSelectCommodityForQuote}
          onOpenSpecModal={() => setIsCatalogOpen(true)}
        />

        {/* 5. Interactive Bulk Quote & Landed CIF/FOB Calculator */}
        <BulkQuoteCalculator
          selectedCurrency={selectedCurrency}
          preSelectedCommodity={calcSelectedCommodity}
          onLockInQuote={handleLockInQuote}
        />

        {/* 6. Interactive Global Trade Route Map */}
        <TradeRouteMap
          onSelectRouteForQuote={handleSelectRouteForQuote}
        />

        {/* 7. Live Bulk Shipment & Ocean Vessel Radar */}
        <ShipmentTracker />

        {/* 8. Supply Chain Journey & SGS / Quality Assurance */}
        <QualityAssurance />

      </main>

      {/* 9. Global Corporate Footer */}
      <Footer
        onOpenRFQ={() => setIsRFQOpen(true)}
        onOpenCatalog={() => setIsCatalogOpen(true)}
      />

      {/* 10. Multi-Step RFQ & Formal Proforma Modal */}
      <RFQModal
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
        initialQuoteData={activeQuotePayload}
        selectedCurrency={selectedCurrency}
      />

      {/* 11. Technical Specifications & 2026 Crop Catalog Modal */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />

      {/* 12. Floating WhatsApp Trade Desk Quick Action */}
      <FloatingWhatsApp
        onOpenRFQ={() => setIsRFQOpen(true)}
      />

    </div>
  );
}
