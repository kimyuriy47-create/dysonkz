import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { PRODUCT_DETAILS } from '../data/productData';
import { ProductColor } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface StickyMobileBarProps {
  selectedColor: ProductColor;
  onOpenOrderModal: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  selectedColor,
  onOpenOrderModal,
}) => {
  const { language, t } = useLanguage();
  const colorName = language === 'kz' ? selectedColor.nameKz : selectedColor.nameRu;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#EAE8E2] px-3 pt-3 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      style={{
        paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Product swatch & price */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="w-10 h-10 rounded-xl shadow-inner border border-black/10 shrink-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${selectedColor.hexPrimary} 50%, ${selectedColor.hexSecondary} 50%)`,
            }}
          />
          <div className="min-w-0">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-extrabold text-[#111111] leading-none">
                {PRODUCT_DETAILS.currentPrice.toLocaleString('ru-RU')} ₸
              </span>
              <span className="text-[11px] text-[#A1A1AA] line-through leading-none">
                {PRODUCT_DETAILS.oldPrice.toLocaleString('ru-RU')} ₸
              </span>
            </div>
            <p className="text-[10px] text-[#71717A] truncate mt-0.5">
              {t.stickyBar.colorLabel} {colorName.split('/')[0]}
            </p>
          </div>
        </div>

        {/* Order button */}
        <button
          onClick={onOpenOrderModal}
          className="shrink-0 px-4 py-2.5 rounded-xl bg-[#1D1D1F] active:scale-95 text-white text-xs font-bold flex items-center gap-2 shadow-md cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-[#E5D4C0]" />
          <span>{t.stickyBar.buyBtn}</span>
        </button>
      </div>
    </div>
  );
};
