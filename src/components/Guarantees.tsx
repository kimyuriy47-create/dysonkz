import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Guarantees: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    <Truck key="truck" className="w-6 h-6 text-[#8B6E4E]" />,
    <ShieldCheck key="shield" className="w-6 h-6 text-[#8B6E4E]" />,
    <CheckCircle2 key="check" className="w-6 h-6 text-[#8B6E4E]" />,
    <RotateCcw key="rotate" className="w-6 h-6 text-[#8B6E4E]" />,
  ];

  return (
    <section id="guarantees" className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-[#EAE9E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8B6E4E] bg-[#F4EDE4] border border-[#E7DCCE]">
            <Award className="w-3.5 h-3.5 text-[#C59A7A]" />
            {t.guarantees.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3 tracking-tight">
            {t.guarantees.title}
          </h2>
          <p className="text-base text-[#52525B] mt-3">
            {t.guarantees.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.guarantees.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#ECE8DF] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F8F5EE] border border-[#E9E1D4] flex items-center justify-center mb-5">
                  {stepIcons[idx]}
                </div>
                <h3 className="text-base font-bold text-[#18181B] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  {step.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2EFE9] flex items-center gap-1 text-[11px] text-[#15803D] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.guarantees.guaranteedByContract}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Serial Number Check Callout */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E3D8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F0EDE6] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#B87333]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#18181B]">
                {t.guarantees.snTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#52525B] mt-0.5">
                {t.guarantees.snText}
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold text-[#15803D] bg-[#DCFCE7] border border-[#BBF7D0]">
              {t.guarantees.snBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
