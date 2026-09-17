import React from 'react';
import { MessageCircle, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { PRODUCT_DETAILS, WHATSAPP_PHONE } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppSafely } from '../utils/safari';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const handleWhatsAppClick = () => {
    const text =
      language === 'kz'
        ? 'Сәлеметсіз бе! Dyson HS08 стайлері бойынша кеңес алғым келеді'
        : 'Здравствуйте! Консультация по стайлеру Dyson HS08';
    openWhatsAppSafely(WHATSAPP_PHONE, text);
  };

  return (
    <footer
      className="bg-[#111111] text-[#A1A1AA] pt-14 sm:pb-14 border-t border-[#27272A]"
      style={{
        paddingBottom: 'calc(6rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#27272A]">
          {/* Col 1: Brand & Promise */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold tracking-tight text-white uppercase font-sans">
                dyson
              </span>
              <span className="text-xs bg-[#27272A] text-[#E5D4C0] px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                Airwrap™ HS08
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#88888E] max-w-md leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#E5D4C0]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#15803D]" />
                {t.footer.payAfterCheck}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                {t.footer.warranty}
              </span>
            </div>
          </div>

          {/* Col 2: Kazakhstan Delivery & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.footer.deliveryTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A1A1AA]" />
                <span>{t.footer.deliveryAlmaty}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A1A1AA]" />
                <span>{t.footer.deliveryRegions}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A1A1AA]" />
                <span>{t.footer.deliveryAll}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.footer.supportTitle}
            </h4>
            <p className="text-xs text-[#88888E]">
              {t.footer.supportHours}
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#4ADE80] text-xs font-semibold border border-[#25D366]/30 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-[#4ADE80] text-transparent" />
              WhatsApp: +7 (778) 912-34-56
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#71717A]">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-center sm:text-right">
            {t.footer.priceNotice}
          </p>
        </div>
      </div>
    </footer>
  );
};
