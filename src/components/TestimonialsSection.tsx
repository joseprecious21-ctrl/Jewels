import React, { useState } from 'react';
import { Quote, Eye, EyeOff, ShieldCheck, PlusCircle } from 'lucide-react';

interface TestimonialItem {
  id: string;
  clientName: string;
  businessName: string;
  serviceReceived: string;
  quote: string;
}

export const TestimonialsSection: React.FC = () => {
  const [isTestimonialsEnabled, setIsTestimonialsEnabled] = useState(false);
  const verifiedTestimonials: TestimonialItem[] = [];

  return (
    <div className="w-full my-12 border border-dashed border-[var(--line)] rounded-xl p-6 bg-[var(--card)]/40">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--line)]/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[var(--ink)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)]">
            <Quote className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[var(--white)]">Testimonials Component</span>
              <span className={`text-sm font-sans px-2 py-0.5 rounded ${isTestimonialsEnabled ? 'bg-emerald-950 text-[var(--success)] border border-[var(--success)]/40' : 'bg-[var(--ink)] text-[var(--muted)] border border-[var(--line)]'}`}>
                {isTestimonialsEnabled ? 'Active in View' : 'Hidden by Default'}
              </span>
            </div>
            <p className="text-sm text-[var(--muted)] mt-0.5">
              Ready-to-enable component. Zero filler or invented quotes are shown.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsTestimonialsEnabled(!isTestimonialsEnabled)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-[var(--ink)] hover:bg-[#1E1E1E] text-[var(--muted)] hover:text-[var(--white)] border border-[var(--line)] hover:border-[var(--gold)] transition-all cursor-pointer shrink-0"
        >
          {isTestimonialsEnabled ? (
            <>
              <EyeOff className="w-3.5 h-3.5 text-[var(--muted)]" />
              <span>Hide Preview</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>Preview Ready Component</span>
            </>
          )}
        </button>
      </div>

      {isTestimonialsEnabled && (
        <div className="pt-6">
          {verifiedTestimonials.length === 0 ? (
            <div className="text-center py-10 px-4 bg-[var(--ink)]/40 rounded-lg border border-[var(--line)]">
              <ShieldCheck className="w-10 h-10 text-[var(--gold)] mx-auto mb-3" />
              <h4 className="text-base font-medium text-[var(--white)] mb-1">
                Awaiting Verified Client Feedback
              </h4>
              <p className="text-sm text-[var(--muted)] max-w-md mx-auto leading-relaxed mb-4">
                In strict adherence to portfolio credibility standards, no fabricated reviews or mock client quotes are displayed. Once clients provide written feedback, add them to <code className="text-[var(--gold)] font-sans">TestimonialsSection.tsx</code>.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-sans text-[var(--muted)] bg-[var(--ink)] px-3 py-1.5 rounded border border-[var(--line)]">
                <PlusCircle className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span>Slot ready for verified testimonials</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {verifiedTestimonials.map((item) => (
                <div key={item.id} className="p-5 rounded-lg bg-[var(--ink)]/60 border border-[var(--line)]">
                  <p className="text-sm text-[var(--muted)] italic mb-4">"{item.quote}"</p>
                  <p className="text-sm font-semibold text-[var(--white)]">{item.clientName}</p>
                  <p className="text-sm text-[var(--muted)]">{item.businessName} · {item.serviceReceived}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
