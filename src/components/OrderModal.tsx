import React, { useState, useEffect } from 'react';
import {
  X,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  Check,
  Copy,
  ArrowRight,
} from 'lucide-react';
import {
  PRODUCT_DETAILS,
  PRODUCT_COLORS,
  KZ_CITIES_RU,
  KZ_CITIES_KZ,
  WHATSAPP_PHONE,
} from '../data/productData';
import { ProductColor } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppSafely, copyTextSafely } from '../utils/safari';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedColor: ProductColor;
  onSelectColor: (color: ProductColor) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedColor,
  onSelectColor,
}) => {
  const { language, t } = useLanguage();
  const citiesList = language === 'kz' ? KZ_CITIES_KZ : KZ_CITIES_RU;

  const [name, setName] = useState('');
  const [city, setCity] = useState(citiesList[0]);
  const [customCity, setCustomCity] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [copied, setCopied] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  // Sync city selection when language changes
  useEffect(() => {
    setCity(citiesList[0]);
  }, [language]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setOrderSent(false);
      setCopied(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const otherCityLabel = language === 'kz' ? 'Басқа қала' : 'Другой город';
  const resolvedCity = city === otherCityLabel ? (customCity.trim() || otherCityLabel) : city;
  const activeColorName = language === 'kz' ? selectedColor.nameKz : selectedColor.nameRu;

  // Format Kazakhstan phone number
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+7') && !val.startsWith('8')) {
      val = '+7 ' + val;
    }
    setPhone(val);
  };

  const generateWhatsAppMessage = () => {
    if (language === 'kz') {
      return (
        `${t.modal.waGreeting}\n\n` +
        `${t.modal.waOrderData}\n` +
        `• ${t.modal.waName} ${name.trim() || 'Көрсетілмеген'}\n` +
        `• ${t.modal.waCity} ${resolvedCity}\n` +
        `• ${t.modal.waPhone} ${phone.trim() || 'Көрсетілмеген'}\n` +
        `• ${t.modal.waColor} ${selectedColor.nameKz} (${selectedColor.name})\n` +
        `• ${t.modal.waBundle}\n` +
        `• ${t.modal.waPayment}\n` +
        (comment.trim() ? `• ${t.modal.waAddress} ${comment.trim()}\n\n` : `\n`) +
        `${t.modal.waConfirm}`
      );
    }

    return (
      `${t.modal.waGreeting}\n\n` +
      `${t.modal.waOrderData}\n` +
      `• ${t.modal.waName} ${name.trim() || 'Не указано'}\n` +
      `• ${t.modal.waCity} ${resolvedCity}\n` +
      `• ${t.modal.waPhone} ${phone.trim() || 'Не указан'}\n` +
      `• ${t.modal.waColor} ${selectedColor.nameRu} (${selectedColor.name})\n` +
      `• ${t.modal.waBundle}\n` +
      `• ${t.modal.waPayment}\n` +
      (comment.trim() ? `• ${t.modal.waAddress} ${comment.trim()}\n\n` : `\n`) +
      `${t.modal.waConfirm}`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = generateWhatsAppMessage();

    // Mark as sent to show confirmation screen
    setOrderSent(true);

    // Open WhatsApp in a Safari-safe manner (avoids popup blocker)
    openWhatsAppSafely(WHATSAPP_PHONE, message);
  };

  const handleCopyMessage = async () => {
    const message = generateWhatsAppMessage();
    const success = await copyTextSafely(message);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative bg-white rounded-3xl w-full max-w-xl shadow-2xl border border-[#E4E4E7] overflow-hidden my-auto">
        {/* Header Bar */}
        <div className="bg-[#FAF9F5] px-6 py-4 border-b border-[#EAE8E2] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#18181B] text-white flex items-center justify-center font-bold text-xs">
              <ShoppingBag className="w-4 h-4 text-[#E5D4C0]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#18181B]">
                {t.modal.title}
              </h3>
              <p className="text-xs text-[#71717A]">
                {t.modal.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#71717A] hover:text-black hover:bg-[#EFECE5] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderSent ? (
          /* Success Screen After WhatsApp Opening */
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mx-auto shadow-inner">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h4 className="text-2xl font-bold text-[#18181B]">
              {t.modal.successTitle}
            </h4>
            <p className="text-sm text-[#52525B] max-w-md mx-auto leading-relaxed">
              {t.modal.successDesc}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  generateWhatsAppMessage()
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                {t.modal.openWaNow}
              </a>

              <button
                type="button"
                onClick={handleCopyMessage}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#18181B] font-semibold text-sm flex items-center justify-center gap-2 border border-[#D4D4D8] cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                {copied ? t.modal.copied : t.modal.copyText}
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#FBFBF9] border border-[#ECE9E0] text-xs text-left text-[#52525B] mt-4 space-y-1">
              <p className="font-semibold text-[#18181B]">
                {t.modal.nextStepsTitle}
              </p>
              <p>{t.modal.nextStep1}</p>
              <p>{t.modal.nextStep2}</p>
              <p>{t.modal.nextStep3}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-4 text-xs font-semibold text-[#71717A] hover:text-black underline cursor-pointer"
            >
              {t.modal.backBtn}
            </button>
          </div>
        ) : (
          /* Order Checkout Form */
          <form onSubmit={handleWhatsAppSubmit} className="p-6 sm:p-7 space-y-5">
            {/* Selected Product Banner */}
            <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#ECE8DF] flex items-center gap-3.5">
              <div
                className="w-14 h-14 rounded-xl shadow-inner border border-black/10 shrink-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${selectedColor.hexPrimary} 50%, ${selectedColor.hexSecondary} 50%)`,
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#18181B] truncate">
                    Dyson Airwrap HS08
                  </span>
                  <span className="text-[10px] font-bold text-[#E11D48] bg-[#FFE4E6] px-1.5 py-0.2 rounded">
                    -67%
                  </span>
                </div>
                <p className="text-xs text-[#71717A] truncate">
                  {language === 'kz' ? 'Түсі:' : 'Цвет:'}{' '}
                  <strong className="text-[#18181B]">{activeColorName}</strong>
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-sm font-extrabold text-[#111111]">
                    {PRODUCT_DETAILS.currentPrice.toLocaleString('ru-RU')} ₸
                  </span>
                  <span className="text-xs text-[#A1A1AA] line-through">
                    {PRODUCT_DETAILS.oldPrice.toLocaleString('ru-RU')} ₸
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Color Switcher inside Modal */}
            <div>
              <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                {t.modal.selectColorLabel}
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {PRODUCT_COLORS.map((c) => {
                  const isSelected = selectedColor.id === c.id;
                  const cName = language === 'kz' ? c.nameKz : c.nameRu;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => onSelectColor(c)}
                      className={`p-1.5 rounded-lg border text-center flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#18181B] bg-white ring-1 ring-[#18181B]'
                          : 'border-[#E4E4E7] bg-[#FAFAFA] hover:bg-white'
                      }`}
                    >
                      <div
                        className="w-4 h-4 rounded-full border border-black/10"
                        style={{
                          background: `linear-gradient(135deg, ${c.hexPrimary} 50%, ${c.hexSecondary} 50%)`,
                        }}
                      />
                      <span className="text-[10px] text-[#27272A] truncate w-full">
                        {cName.split('/')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Buyer Name (Required by user) */}
            <div>
              <label className="block text-xs font-semibold text-[#18181B] mb-1">
                {t.modal.nameLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder={t.modal.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#D4D4D8] text-sm text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#18181B]"
              />
            </div>

            {/* Delivery City (Required by user) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#18181B] mb-1">
                  {t.modal.cityLabel} <span className="text-red-500">*</span>
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl border border-[#D4D4D8] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-[#18181B] bg-white"
                >
                  {citiesList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#18181B] mb-1">
                  {t.modal.phoneLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (7XX) XXX-XX-XX"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-[#D4D4D8] text-sm text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#18181B]"
                />
              </div>
            </div>

            {/* If "Другой город / Басқа қала" selected */}
            {city === otherCityLabel && (
              <div>
                <label className="block text-xs font-semibold text-[#18181B] mb-1">
                  {t.modal.customCityLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.customCityPlaceholder}
                  value={customCity}
                  onChange={(e) => setCustomCity(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D4D4D8] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-[#18181B]"
                />
              </div>
            )}

            {/* Optional Comment / Address */}
            <div>
              <label className="block text-xs font-semibold text-[#18181B] mb-1">
                {t.modal.commentLabel}
              </label>
              <input
                type="text"
                placeholder={t.modal.commentPlaceholder}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D4D4D8] text-sm text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#18181B]"
              />
            </div>

            {/* Payment Method Guarantee Pill */}
            <div className="bg-[#F0FDF4] p-3.5 rounded-2xl border border-[#BBF7D0] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#16A34A] shrink-0" />
              <div className="text-xs text-[#166534]">
                <strong className="block font-bold">{t.modal.payNoticeTitle}</strong>
                {t.modal.payNoticeDesc}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] active:scale-[0.99] text-white font-bold text-base flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>{t.modal.submitBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-[#71717A] text-center mt-2.5">
                {t.modal.submitFootnote}
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
