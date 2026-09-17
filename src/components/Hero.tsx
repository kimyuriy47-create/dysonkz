import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageCircle,
  Award,
  ChevronRight,
} from 'lucide-react';
import { PRODUCT_DETAILS, PRODUCT_COLORS, WHATSAPP_PHONE } from '../data/productData';
import { ProductColor } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppSafely } from '../utils/safari';

interface HeroProps {
  selectedColor: ProductColor;
  onSelectColor: (color: ProductColor) => void;
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedColor,
  onSelectColor,
  onOpenOrderModal,
}) => {
  const { language, t } = useLanguage();

  const activeColorName = language === 'kz' ? selectedColor.nameKz : selectedColor.nameRu;
  const activeColorBadge = language === 'kz' ? selectedColor.badgeKz : selectedColor.badge;
  const activeColorDescription = language === 'kz' ? selectedColor.descriptionKz : selectedColor.description;

  const handleQuickWhatsApp = () => {
    const text = `${t.modal.waGreeting}\n${t.modal.waColor} ${activeColorName} (${selectedColor.name}).\n${t.modal.waConfirm}`;
    openWhatsAppSafely(WHATSAPP_PHONE, text);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F6F2] via-[#FBFBF9] to-white pt-6 pb-14 sm:py-16 border-b border-[#EAE9E4]">
      {/* Subtle Background Glow/Gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EBE3D5]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E0D7C6]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Top label */}
        <div className="flex items-center gap-2 text-xs text-[#71717A] mb-6">
          <span>{t.hero.breadcrumbHome}</span>
          <ChevronRight className="w-3 h-3 text-[#A1A1AA]" />
          <span>{t.hero.breadcrumbCategory}</span>
          <ChevronRight className="w-3 h-3 text-[#A1A1AA]" />
          <span className="text-[#18181B] font-medium">Dyson Airwrap HS08</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Product Showcase Visual */}
          <div className="lg:col-span-6 relative">
            {/* Main Interactive Showcase Card */}
            <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#E9E8E2] overflow-hidden group">
              {/* Top Floating Badges */}
              <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E11D48] text-white shadow-sm">
                  {t.hero.discountBadge}
                </span>
                {activeColorBadge && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#1D1D1F] text-[#F5F5F7] shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    {activeColorBadge}
                  </span>
                )}
              </div>

              {/* Verified Serial Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-sm text-[#18181B] border border-[#E4E4E7] shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                  {t.hero.snCheck}
                </span>
              </div>

              {/* Main Image with smooth presentation */}
              <div className="relative aspect-[4/3] sm:aspect-square w-full flex items-center justify-center rounded-2xl overflow-hidden bg-[#FAF9F5]">
                <img
                  key={selectedColor.id}
                  src={selectedColor.image}
                  alt={`Dyson Airwrap HS08 - ${activeColorName}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating overlay with active color label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/60 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full border border-black/10 shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${selectedColor.hexPrimary} 50%, ${selectedColor.hexSecondary} 50%)`,
                      }}
                    />
                    <div className="text-left">
                      <p className="text-xs font-semibold text-[#18181B]">
                        {activeColorName}
                      </p>
                      <p className="text-[10px] text-[#71717A] hidden sm:block">
                        {selectedColor.name}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                    {t.hero.inStockRk}
                  </span>
                </div>
              </div>

              {/* Bottom Mini Preview Highlights */}
              <div className="mt-4 grid grid-cols-3 gap-2.5 text-center text-xs">
                <div className="bg-[#F8F7F3] p-2.5 rounded-xl border border-[#EFECE6]">
                  <p className="font-bold text-[#18181B]">{t.hero.highlights.attachments}</p>
                  <p className="text-[11px] text-[#71717A]">{t.hero.highlights.attachmentsDesc}</p>
                </div>
                <div className="bg-[#F8F7F3] p-2.5 rounded-xl border border-[#EFECE6]">
                  <p className="font-bold text-[#18181B]">{t.hero.highlights.case}</p>
                  <p className="text-[11px] text-[#71717A]">{t.hero.highlights.caseDesc}</p>
                </div>
                <div className="bg-[#F8F7F3] p-2.5 rounded-xl border border-[#EFECE6]">
                  <p className="font-bold text-[#18181B]">{t.hero.highlights.noBurns}</p>
                  <p className="text-[11px] text-[#71717A]">{t.hero.highlights.noBurnsDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Sales Proposition & Fast Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#854D0E] bg-[#FEF9C3] border border-[#FEF08A] mb-3">
                <Clock className="w-3.5 h-3.5 text-[#CA8A04] animate-pulse" />
                {t.hero.inStockSale}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-[1.15]">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg text-[#52525B] mt-2 font-normal leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Price Showcase Block */}
            <div className="bg-[#F6F5F0] rounded-2xl p-5 border border-[#EAE7DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#71717A] font-semibold">
                  {t.hero.promoPriceLabel}
                </span>
                <div className="flex items-baseline gap-3 mt-0.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                    {PRODUCT_DETAILS.currentPrice.toLocaleString('ru-RU')} ₸
                  </span>
                  <span className="text-lg sm:text-xl text-[#A1A1AA] line-through font-normal">
                    {PRODUCT_DETAILS.oldPrice.toLocaleString('ru-RU')} ₸
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center sm:flex-col sm:items-end justify-between bg-white px-3.5 py-2 rounded-xl border border-[#E4E2D8] shadow-2xs">
                <span className="text-xs text-[#15803D] font-bold">
                  {t.hero.savingsLabel}
                </span>
                <span className="text-[11px] text-[#71717A]">
                  {t.hero.payAfterCheck}
                </span>
              </div>
            </div>

            {/* Interactive Color Selector Palette in Hero */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-sm font-semibold text-[#18181B] flex items-center gap-2">
                  <span>{t.hero.colorLabel}</span>
                  <span className="font-bold text-[#B45309]">
                    {activeColorName}
                  </span>
                </label>
                <a
                  href="#colors"
                  className="text-xs text-[#71717A] hover:text-black underline underline-offset-2"
                >
                  {t.hero.viewAllColors}
                </a>
              </div>

              {/* Color Swatch Buttons */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {PRODUCT_COLORS.map((color) => {
                  const isSelected = selectedColor.id === color.id;
                  const cName = language === 'kz' ? color.nameKz : color.nameRu;
                  return (
                    <button
                      key={color.id}
                      onClick={() => onSelectColor(color)}
                      type="button"
                      className={`relative flex flex-col items-center p-2.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#18181B] bg-white ring-2 ring-[#18181B] ring-offset-1 shadow-sm'
                          : 'border-[#E4E4E7] bg-white/70 hover:bg-white hover:border-[#A1A1AA]'
                      }`}
                    >
                      <div
                        className="w-7 h-7 rounded-full shadow-inner border border-black/15"
                        style={{
                          background: `linear-gradient(135deg, ${color.hexPrimary} 50%, ${color.hexSecondary} 50%)`,
                        }}
                      />
                      <span className="text-[11px] font-medium text-[#27272A] mt-1.5 text-center line-clamp-1">
                        {cName.split('/')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-[#71717A] mt-2 italic">
                {activeColorDescription}
              </p>
            </div>

            {/* Main CTA Actions */}
            <div className="space-y-3 pt-2">
              <button
                onClick={onOpenOrderModal}
                className="w-full py-4 px-6 rounded-2xl bg-[#1D1D1F] hover:bg-[#2F2F32] active:scale-[0.99] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <span>{t.hero.btnBuyDiscount}</span>
                <ArrowRight className="w-5 h-5 text-[#E5D4C0] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleQuickWhatsApp}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#128C7E] font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-[#25D366] text-transparent" />
                <span>{t.hero.btnFastWhatsApp}</span>
              </button>
            </div>

            {/* Key Trust Guarantees Checklist */}
            <div className="pt-2 border-t border-[#EBEAE5] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#52525B]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <span>
                  <strong>{t.hero.guarantees.noPrepay}</strong> {t.hero.guarantees.noPrepayDesc}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <span>
                  <strong>{t.hero.guarantees.fastDelivery}</strong> {t.hero.guarantees.fastDeliveryDesc}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <span>
                  <strong>{t.hero.guarantees.warranty}</strong> {t.hero.guarantees.warrantyDesc}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <span>
                  <strong>{t.hero.guarantees.bundle}</strong> {t.hero.guarantees.bundleDesc}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
