import React from 'react';
import { Check, Sparkles, ShoppingBag, Palette } from 'lucide-react';
import { PRODUCT_COLORS, PRODUCT_DETAILS } from '../data/productData';
import { ProductColor } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ColorSelectorProps {
  selectedColor: ProductColor;
  onSelectColor: (color: ProductColor) => void;
  onOpenOrderModal: () => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({
  selectedColor,
  onSelectColor,
  onOpenOrderModal,
}) => {
  const { language, t } = useLanguage();

  return (
    <section id="colors" className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8B6E4E] bg-[#F3ECE1] border border-[#E7DAC7]">
            <Palette className="w-3.5 h-3.5 text-[#B45309]" />
            {t.colors.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3 tracking-tight">
            {t.colors.title}
          </h2>
          <p className="text-base text-[#52525B] mt-3 max-w-2xl mx-auto">
            {t.colors.subtitle}
          </p>
        </div>

        {/* Color Palette Grid: Strictly NO photos of hair dryers, purely color swatches and palettes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCT_COLORS.map((color) => {
            const isSelected = selectedColor.id === color.id;
            const colorName = language === 'kz' ? color.nameKz : color.nameRu;
            const badgeText = language === 'kz' ? color.badgeKz : color.badge;
            const colorDesc = language === 'kz' ? color.descriptionKz : color.description;

            return (
              <div
                key={color.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isSelected
                    ? 'bg-white shadow-xl ring-2 ring-[#18181B] border-transparent'
                    : 'bg-white/80 hover:bg-white hover:shadow-md border border-[#E9E6DD]'
                }`}
              >
                <div>
                  {/* Top Status & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#15803D] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                      {t.colors.inStock} • {t.colors.leftCount}
                    </span>

                    {badgeText && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#854D0E] bg-[#FEF9C3] px-2.5 py-0.5 rounded-full border border-[#FEF08A]">
                        <Sparkles className="w-3 h-3 text-[#CA8A04]" />
                        {badgeText}
                      </span>
                    )}
                  </div>

                  {/* Dual Chromatic Color Orb Swatch Display (No hairdryer photos!) */}
                  <div className="flex flex-col items-center justify-center py-6 sm:py-8 my-2 rounded-2xl bg-[#F8F7F2] border border-[#EFECE5]">
                    {/* Metallic Dual-Tone Swatch Wheel */}
                    <div className="relative group/swatch">
                      <div
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.12)] border-4 border-white transition-transform duration-500 group-hover/swatch:scale-105"
                        style={{
                          background: `conic-gradient(from 180deg, ${color.hexPrimary} 0deg 180deg, ${color.hexSecondary} 180deg 360deg)`,
                        }}
                      />
                      {/* Center Accent Core */}
                      <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs shadow-inner flex items-center justify-center border border-black/10">
                        {isSelected ? (
                          <Check className="w-5 h-5 text-[#18181B] stroke-[3]" />
                        ) : (
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{
                              background: `linear-gradient(45deg, ${color.hexPrimary}, ${color.hexSecondary})`,
                            }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Dual Tone HEX Pill Indicators */}
                    <div className="mt-5 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#52525B] bg-white px-2.5 py-1 rounded-lg border border-[#E4E4E7] shadow-2xs">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block border border-black/15"
                          style={{ backgroundColor: color.hexPrimary }}
                        />
                        {color.hexPrimary}
                      </span>
                      <span className="text-[#A1A1AA] text-xs">+</span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#52525B] bg-white px-2.5 py-1 rounded-lg border border-[#E4E4E7] shadow-2xs">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block border border-black/15"
                          style={{ backgroundColor: color.hexSecondary }}
                        />
                        {color.hexSecondary}
                      </span>
                    </div>
                  </div>

                  {/* Color Information */}
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-[#111111] leading-snug">
                      {colorName}
                    </h3>
                    <p className="text-xs text-[#71717A] font-medium tracking-wide mt-0.5">
                      {color.name}
                    </p>
                    <p className="text-xs text-[#52525B] mt-2.5 leading-relaxed">
                      {colorDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom Pricing & Action Buttons */}
                <div className="mt-6 pt-5 border-t border-[#EAE7DF]">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-2xl font-extrabold text-[#111111]">
                        {PRODUCT_DETAILS.currentPrice.toLocaleString('ru-RU')} ₸
                      </span>
                      <span className="text-xs text-[#A1A1AA] line-through ml-2">
                        {PRODUCT_DETAILS.oldPrice.toLocaleString('ru-RU')} ₸
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#E11D48] bg-[#FFE4E6] px-2 py-0.5 rounded-md">
                      -{PRODUCT_DETAILS.discountPercent}%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => onSelectColor(color)}
                      type="button"
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#18181B] text-white shadow-xs'
                          : 'bg-[#F4F4F5] text-[#27272A] hover:bg-[#E4E4E7]'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{t.colors.selectedBtn}</span>
                        </>
                      ) : (
                        <span>{t.colors.selectBtn}</span>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        onSelectColor(color);
                        onOpenOrderModal();
                      }}
                      type="button"
                      className="py-2.5 px-3 rounded-xl text-xs font-bold bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-white" />
                      <span>{t.colors.buyBtn}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
