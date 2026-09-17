import React from 'react';
import { Wind, Sparkles, LayoutGrid, Feather, CircleDot, Zap, CheckCircle2, Box } from 'lucide-react';
import { ATTACHMENTS, PRODUCT_DETAILS } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';

interface AttachmentsProps {
  onOpenOrderModal: () => void;
}

export const Attachments: React.FC<AttachmentsProps> = ({ onOpenOrderModal }) => {
  const { language, t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-5 h-5 text-[#8B6E4E]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#8B6E4E]" />;
      case 'Grid':
        return <LayoutGrid className="w-5 h-5 text-[#8B6E4E]" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#8B6E4E]" />;
      case 'CircleDot':
        return <CircleDot className="w-5 h-5 text-[#8B6E4E]" />;
      case 'Zap':
      default:
        return <Zap className="w-5 h-5 text-[#8B6E4E]" />;
    }
  };

  return (
    <section id="attachments" className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-[#EAE9E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8B6E4E] bg-[#F4EDE4] border border-[#E7DCCE]">
            <Box className="w-3.5 h-3.5 text-[#C59A7A]" />
            {t.attachments.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3 tracking-tight">
            {t.attachments.title}
          </h2>
          <p className="text-base text-[#52525B] mt-3">
            {t.attachments.subtitle}
          </p>
        </div>

        {/* 6 Attachments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ATTACHMENTS.map((item, index) => {
            const name = language === 'kz' ? item.nameKz : item.name;
            const purpose = language === 'kz' ? item.purposeKz : item.purpose;
            const desc = language === 'kz' ? item.descriptionKz : item.description;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-[#E9E7E0] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#F7F2EC] flex items-center justify-center border border-[#ECE2D5]">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-xs font-mono text-[#A1A1AA]">
                      0{index + 1} / 06
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B6E4E] block mb-1">
                    {purpose}
                  </span>
                  <h3 className="text-lg font-bold text-[#111111] leading-snug">
                    {name}
                  </h3>
                  <p className="text-sm text-[#52525B] mt-2.5 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F2EFE9] flex items-center gap-2 text-xs text-[#15803D] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>{t.attachments.oneClick}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Included Storage Box Highlight */}
        <div className="bg-gradient-to-r from-[#F4EDE4] via-[#F8F5EE] to-[#F4EDE4] rounded-3xl p-6 sm:p-10 border border-[#E5DACD] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B6E4E] bg-white/80 px-3 py-1 rounded-full border border-[#DFD1C1]">
              {t.attachments.caseBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-3">
              {t.attachments.caseTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#52525B] mt-2 leading-relaxed">
              {t.attachments.caseDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-[#18181B]">
              {t.attachments.caseFeatures.map((feat, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  {feat}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0 text-center lg:text-right">
            <p className="text-xs text-[#71717A] mb-1">
              {t.attachments.fullBundleDiscount}
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              {PRODUCT_DETAILS.currentPrice.toLocaleString('ru-RU')} ₸
            </p>
            <button
              onClick={onOpenOrderModal}
              className="mt-3 px-6 py-3 rounded-full bg-[#18181B] hover:bg-[#2E2E32] text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
            >
              {t.attachments.orderBundleBtn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
