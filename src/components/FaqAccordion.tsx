import React, { useState } from 'react';
import { ChevronDown, HelpCircle, AlertCircle } from 'lucide-react';
import { FAQS } from '../data/seoData';

interface FaqAccordionProps {
  showOwnerNotice?: boolean;
  theme?: 'dark' | 'light';
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ 
  showOwnerNotice = true,
  theme = 'dark' 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isLight = theme === 'light';

  return (
    <div className="w-full max-w-3xl mx-auto">
      {showOwnerNotice && (
        <div className={`mb-6 p-3.5 rounded-lg flex items-start gap-3 text-xs ${
          isLight 
            ? 'bg-[#FAFAFA] border border-[#E4E4E4] text-[#555555]' 
            : 'bg-[var(--card)] border border-[var(--line)] text-[var(--muted)]'
        }`}>
          <AlertCircle className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
          <div>
            <span className={`font-semibold ${isLight ? 'text-[var(--ink)]' : 'text-[var(--white)]'}`}>
              Owner Review Note:{' '}
            </span>
            FAQ responses below are strictly factual and avoid timeline or ranking claims. Review and edit copy in{' '}
            <code className="text-[var(--gold)] font-mono text-[11px]">src/data/seoData.ts</code> to match your exact client onboarding preferences.
          </div>
        </div>
      )}

      <div className={`divide-y border-y ${
        isLight 
          ? 'divide-[#E4E4E4] border-[#E4E4E4]' 
          : 'divide-[var(--line)] border-[var(--line)]'
      }`}>
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-5 transition-colors">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex items-center justify-between text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] rounded-sm py-1 cursor-pointer"
              >
                <span className={`text-base sm:text-lg font-medium transition-colors pr-4 flex items-center gap-3 ${
                  isLight 
                    ? 'text-[var(--ink)] group-hover:text-[var(--gold)]' 
                    : 'text-[var(--white)] group-hover:text-[var(--gold-hover)]'
                }`}>
                  <HelpCircle className="w-4 h-4 text-[var(--gold)] shrink-0" />
                  {faq.question}
                </span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                  isLight 
                    ? (isOpen ? 'rotate-180 text-[var(--gold)] bg-white border-[var(--gold)]' : 'bg-white border-[#E4E4E4] text-[#666666]') 
                    : (isOpen ? 'rotate-180 text-[var(--gold)] bg-[var(--card)] border-[var(--gold)]' : 'bg-[var(--card)] border-[var(--line)] text-[var(--muted)]')
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 pt-3 pb-1' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className={`text-sm sm:text-base leading-relaxed pl-7 font-light ${
                    isLight ? 'text-[#555555]' : 'text-[var(--muted)]'
                  }`}>
                    {faq.answer}
                  </p>
                  {faq.ownerNote && (
                    <div className={`pl-7 mt-2 text-[11px] font-mono ${
                      isLight ? 'text-[#888888]' : 'text-neutral-500'
                    }`}>
                      [{faq.ownerNote}]
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
