/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ColorSelector } from './components/ColorSelector';
import { Advantages } from './components/Advantages';
import { Attachments } from './components/Attachments';
import { Hairstyles } from './components/Hairstyles';
import { Reviews } from './components/Reviews';
import { Guarantees } from './components/Guarantees';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { PRODUCT_COLORS } from './data/productData';
import { ProductColor } from './types';

function MainApp() {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(PRODUCT_COLORS[0]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOpenOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const handleSelectColor = (color: ProductColor) => {
    setSelectedColor(color);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1D1D1F] flex flex-col font-sans">
      {/* Sticky Top Header with fast WhatsApp, Language Toggle and order button */}
      <Header onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Dyson HS08, 49 990 ₸ vs 149 990 ₸, interactive color swatches */}
        <Hero
          selectedColor={selectedColor}
          onSelectColor={handleSelectColor}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* 2nd Block: All Available Colors Showcase (Strictly colors only, no hairdryer photos!) */}
        <ColorSelector
          selectedColor={selectedColor}
          onSelectColor={handleSelectColor}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* Core Advantages & Technologies (Coanda, Intelligent Heat Control, V9 Engine) */}
        <Advantages />

        {/* What's In The Box Complete Long (6 Attachments + Leather Case) */}
        <Attachments onOpenOrderModal={handleOpenOrderModal} />

        {/* Hairstyles Guide */}
        <Hairstyles onOpenOrderModal={handleOpenOrderModal} />

        {/* Reviews Block with Verified Kazakhstani Buyers and Photos */}
        <Reviews />

        {/* Guarantees & Payment on Delivery after inspection */}
        <Guarantees />

        {/* FAQ Accordion */}
        <Faq />
      </main>

      {/* Footer with contacts in Kazakhstan */}
      <Footer />

      {/* WhatsApp Order Modal with Name, City, and Phone */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        selectedColor={selectedColor}
        onSelectColor={handleSelectColor}
      />

      {/* Mobile Sticky Quick Order Bar */}
      <StickyMobileBar
        selectedColor={selectedColor}
        onOpenOrderModal={handleOpenOrderModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
