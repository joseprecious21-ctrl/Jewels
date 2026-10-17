import React, { useState } from 'react';
import { ChevronDown, HelpCircle, AlertCircle } from 'lucide-react';
import { FAQS } from '../data/seoData';

interface FaqAccordionProps {
  showOwnerNotice?: boolean;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ showOwnerNotice = true }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {showOwnerNotice && (
        <div className="mb-6 p-3.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-start gap-3 text-xs text-neutral-400">
          <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-neutral-300">Owner Review Note: </span>
            FAQ responses below are strictly factual and avoid timeline or ranking claims. Review and edit copy in{' '}
            <code className="text-[#D4AF37] font-mono text-[11px]">src/data/seoData.ts</code> to match your exact client onboarding preferences.
          </div>
        </div>
      )}

      <div className="divide-y divide-neutral-800 border-y border-neutral-800">
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
                className="w-full flex items-center justify-between text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded-sm py-1 cursor-pointer"
              >
                <span className="text-base sm:text-lg font-medium text-neutral-200 group-hover:text-white transition-colors pr-4 flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-[#D4AF37]/70 shrink-0" />
                  {faq.question}
                </span>
                <span className={`w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 border border-neutral-800 text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#D4AF37] border-[#D4AF37]/40' : ''}`}>
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
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                  {faq.ownerNote && (
                    <div className="pl-7 mt-2 text-[11px] font-mono text-neutral-500">
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
