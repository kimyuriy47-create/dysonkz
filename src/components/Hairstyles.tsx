import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { HAIRSTYLES } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';

interface HairstylesProps {
  onOpenOrderModal: () => void;
}

export const Hairstyles: React.FC<HairstylesProps> = ({ onOpenOrderModal }) => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#EAE9E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8B6E4E] bg-[#F7F2EC] border border-[#E9DDCF]">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A7A]" />
            {t.hairstyles.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3 tracking-tight">
            {t.hairstyles.title}
          </h2>
          <p className="text-base text-[#52525B] mt-3">
            {t.hairstyles.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HAIRSTYLES.map((style) => {
            const title = language === 'kz' ? style.titleKz : style.titleRu;
            const subtitle = language === 'kz' ? style.subtitleKz : style.subtitleRu;
            const time = language === 'kz' ? style.timeKz : style.timeRu;
            const description = language === 'kz' ? style.descriptionKz : style.descriptionRu;

            return (
              <div
                key={style.id}
                className="bg-[#FAF9F5] rounded-3xl overflow-hidden border border-[#ECE8DF] flex flex-col group hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#EAE7DF] relative">
                  <img
                    src={style.image}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#18181B] shadow-xs">
                    {time}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#8B6E4E] block">
                      {subtitle}
                    </span>
                    <h3 className="text-base font-bold text-[#111111] mt-1">
                      {title}
                    </h3>
                    <p className="text-xs text-[#52525B] mt-2 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#EFECE5]">
                    <button
                      onClick={onOpenOrderModal}
                      className="text-xs font-bold text-[#18181B] group-hover:text-[#B45309] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{t.hairstyles.wantStyleBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
