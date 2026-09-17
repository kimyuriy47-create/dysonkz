import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, WHATSAPP_PHONE } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppSafely } from '../utils/safari';

export const Faq: React.FC = () => {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskWhatsApp = () => {
    const text =
      language === 'kz'
        ? 'Сәлеметсіз бе! Dyson HS08 стайлері бойынша сұрағым бар еді.'
        : 'Здравствуйте! У меня есть вопрос по стайлеру Dyson HS08.';
    openWhatsAppSafely(WHATSAPP_PHONE, text);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-[#EAE9E4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8B6E4E] bg-[#F7F2EC] border border-[#E9DDCF]">
            <HelpCircle className="w-3.5 h-3.5 text-[#C59A7A]" />
            {t.faq.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-base text-[#52525B] mt-3">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const question = language === 'kz' ? faq.qKz : faq.qRu;
            const answer = language === 'kz' ? faq.aKz : faq.aRu;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-[#18181B] bg-[#FAF9F6] shadow-xs'
                    : 'border-[#EAE8E2] bg-white hover:border-[#D4D4D8]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base font-bold text-[#18181B]">
                    {question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#71717A] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-black' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#52525B] leading-relaxed border-t border-[#EAE7DF]/60">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unresolved Questions Help Card */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FBFBF9] border border-[#E9E6DD] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#18181B]">
              {t.faq.stillQuestions}
            </h4>
            <p className="text-xs sm:text-sm text-[#71717A] mt-0.5">
              {language === 'kz'
                ? 'Біздің WhatsApp маманы кез келген сұраққа 2 минут ішінде жауап береді.'
                : 'Наш специалист в WhatsApp ответит на любой вопрос за 2 минуты.'}
            </p>
          </div>
          <button
            onClick={handleAskWhatsApp}
            className="px-5 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-semibold text-xs sm:text-sm flex items-center gap-2 border border-[#25D366]/30 transition-all cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-[#25D366] text-transparent" />
            {t.faq.contactManager}
          </button>
        </div>
      </div>
    </section>
  );
};
