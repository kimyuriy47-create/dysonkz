import React from 'react';
import { Sparkles, Check, X } from 'lucide-react';
import { ADVANTAGES } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';

export const Advantages: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="advantages" className="py-16 sm:py-24 bg-white border-b border-[#EAE9E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8B6E4E] bg-[#F7F2EC] border border-[#E9DDCF]">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A7A]" />
            {t.advantages.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] mt-3 tracking-tight">
            {t.advantages.title}
          </h2>
          <p className="text-base sm:text-lg text-[#52525B] mt-4 leading-relaxed">
            {t.advantages.subtitle}
          </p>
        </div>

        {/* 4 Core Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ADVANTAGES.map((adv, idx) => {
            const title = language === 'kz' ? adv.titleKz : adv.titleRu;
            const subtitle = language === 'kz' ? adv.subtitleKz : adv.subtitleRu;
            const desc = language === 'kz' ? adv.descriptionKz : adv.descriptionRu;
            const metricLabel = language === 'kz' ? adv.metricLabelKz : adv.metricLabelRu;
            const techNumber = language === 'kz' ? `Технология 0${idx + 1}` : `Технология 0${idx + 1}`;

            return (
              <div
                key={adv.id}
                className="relative rounded-3xl bg-[#FAF9F5] p-8 sm:p-10 border border-[#ECE9E1] hover:border-[#D6D2C4] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#A1A1AA] uppercase">
                      {techNumber}
                    </span>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight block">
                        {adv.metric}
                      </span>
                      <span className="text-[11px] text-[#71717A] uppercase tracking-wide font-medium">
                        {metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm font-semibold text-[#8B6E4E] mt-1">
                    {subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-[#52525B] mt-4 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#ECE8DE] flex items-center gap-2 text-xs font-semibold text-[#18181B]">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t.advantages.salonResult}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Comparison Table: Dyson vs Standard Hot Tools */}
        <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-[#E9E6DD]">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold text-[#111111]">
              {t.advantages.compareTitle}
            </h3>
            <p className="text-sm text-[#71717A] mt-2">
              {t.advantages.compareSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Standard Tools (Negative) */}
            <div className="bg-white rounded-2xl p-6 border border-[#F4E3E3]">
              <div className="flex items-center gap-2.5 text-[#E11D48] font-bold text-base mb-4">
                <div className="w-6 h-6 rounded-full bg-[#FFE4E6] flex items-center justify-center">
                  <X className="w-4 h-4 text-[#E11D48]" />
                </div>
                <span>{t.advantages.standardTitle}</span>
              </div>
              <ul className="space-y-3 text-sm text-[#52525B]">
                {t.advantages.standardPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#E11D48] font-bold mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dyson Airwrap HS08 (Positive) */}
            <div className="bg-white rounded-2xl p-6 border border-[#D5EEDB] shadow-xs">
              <div className="flex items-center gap-2.5 text-[#15803D] font-bold text-base mb-4">
                <div className="w-6 h-6 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#15803D]" />
                </div>
                <span>{t.advantages.dysonTitle}</span>
              </div>
              <ul className="space-y-3 text-sm text-[#18181B]">
                {t.advantages.dysonPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
