import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, ShieldCheck, Menu, X, Sparkles, Globe } from 'lucide-react';
import { PRODUCT_DETAILS, WHATSAPP_PHONE } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppSafely } from '../utils/safari';

interface HeaderProps {
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleFastWhatsApp = () => {
    const greetingText =
      language === 'kz'
        ? `Сәлеметсіз бе! Dyson Airwrap HS08 стайлерінің ${PRODUCT_DETAILS.currentPrice.toLocaleString(
            'ru-RU'
          )} ₸ акциялық бағасы бойынша қоймада бар-жоғын білгім келеді.`
        : `Здравствуйте! Хочу уточнить наличие стайлера Dyson Airwrap HS08 со скидкой за ${PRODUCT_DETAILS.currentPrice.toLocaleString(
            'ru-RU'
          )} ₸.`;

    openWhatsAppSafely(WHATSAPP_PHONE, greetingText);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#EBEAE5] transition-all">
      {/* Top Urgency & Guarantee Announcement Bar */}
      <div className="bg-[#1D1D1F] text-[#F5F5F7] text-xs py-2 px-4 text-center font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-6 flex-wrap">
          <span className="flex items-center gap-1.5 text-[#E5D4C0]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            {t.header.announcementSale}
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4ade80]" />
            {t.header.announcementPay}
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden md:inline text-white/80">
            {t.header.announcementDelivery}
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex flex-col group">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] uppercase font-sans">
              dyson
            </span>
            <span className="text-[10px] sm:text-xs text-[#86868B] tracking-wider uppercase -mt-1 font-medium">
              Airwrap™ HS08
            </span>
          </a>
          <span className="hidden lg:inline-flex items-center text-[11px] font-semibold text-[#8B6E4E] bg-[#F7F2EC] px-2.5 py-0.5 rounded-full border border-[#E9DDCF]">
            {t.header.officialStock}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#4B4B4F]">
          <a href="#colors" className="hover:text-black transition-colors">
            {t.header.navColors}
          </a>
          <a href="#advantages" className="hover:text-black transition-colors">
            {t.header.navAdvantages}
          </a>
          <a href="#attachments" className="hover:text-black transition-colors">
            {t.header.navAttachments}
          </a>
          <a href="#reviews" className="hover:text-black transition-colors">
            {t.header.navReviews}
          </a>
          <a href="#guarantees" className="hover:text-black transition-colors">
            {t.header.navGuarantees}
          </a>
          <a href="#faq" className="hover:text-black transition-colors">
            {t.header.navFaq}
          </a>
        </nav>

        {/* Right CTA Actions & Language Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher */}
          <div className="inline-flex items-center bg-[#F4F4F5] p-1 rounded-full border border-[#E4E4E7]">
            <button
              onClick={() => setLanguage('kz')}
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                language === 'kz'
                  ? 'bg-[#18181B] text-white shadow-2xs'
                  : 'text-[#71717A] hover:text-[#18181B]'
              }`}
              title="Қазақ тілі"
            >
              ҚАЗ
            </button>
            <button
              onClick={() => setLanguage('ru')}
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                language === 'ru'
                  ? 'bg-[#18181B] text-white shadow-2xs'
                  : 'text-[#71717A] hover:text-[#18181B]'
              }`}
              title="Русский язык"
            >
              РУС
            </button>
          </div>

          <button
            onClick={handleFastWhatsApp}
            title={t.header.btnWhatsApp}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs sm:text-sm font-medium text-[#1E5631] bg-[#E8F5E9] hover:bg-[#C8E6C9] border border-[#A5D6A7] transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-[#2E7D32] text-transparent" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>

          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#1D1D1F] hover:bg-[#2D2D30] shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#E5D4C0]" />
            <span>{t.header.btnBuy}</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4B4B4F] hover:text-black cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EBEAE5] bg-white px-5 py-4 space-y-3 shadow-lg">
          {/* Mobile Language Switcher bar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#F0EFEA]">
            <span className="text-xs font-semibold text-[#71717A] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              {language === 'kz' ? 'Тілді таңдау:' : 'Язык сайта:'}
            </span>
            <div className="inline-flex items-center bg-[#F4F4F5] p-1 rounded-full border border-[#E4E4E7]">
              <button
                onClick={() => setLanguage('kz')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  language === 'kz'
                    ? 'bg-[#18181B] text-white'
                    : 'text-[#71717A]'
                }`}
              >
                Қазақша
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  language === 'ru'
                    ? 'bg-[#18181B] text-white'
                    : 'text-[#71717A]'
                }`}
              >
                Русский
              </button>
            </div>
          </div>

          <a
            href="#colors"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#333] border-b border-[#F0EFEA]"
          >
            {t.header.navColors}
          </a>
          <a
            href="#advantages"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#333] border-b border-[#F0EFEA]"
          >
            {t.header.navAdvantages}
          </a>
          <a
            href="#attachments"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#333] border-b border-[#F0EFEA]"
          >
            {t.header.navAttachments}
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#333] border-b border-[#F0EFEA]"
          >
            {t.header.navReviews}
          </a>
          <a
            href="#guarantees"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#333] border-b border-[#F0EFEA]"
          >
            {t.header.navGuarantees}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#333]"
          >
            {t.header.navFaq}
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3 rounded-xl font-semibold text-center text-white bg-[#1D1D1F] flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              {t.header.btnBuy}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleFastWhatsApp();
              }}
              className="w-full py-2.5 rounded-xl font-medium text-center text-[#1E5631] bg-[#E8F5E9] border border-[#A5D6A7] flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
