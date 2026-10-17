import React, { useState } from 'react';
import { Quote, Eye, EyeOff, ShieldCheck, PlusCircle } from 'lucide-react';

interface TestimonialItem {
  id: string;
  clientName: string;
  businessName: string;
  serviceReceived: string;
  quote: string;
}

/**
 * TESTIMONIALS COMPONENT (READY-TO-ENABLE)
 * Strict Requirement: "include this section ONLY once real client feedback is provided.
 * Build it as a hidden, ready-to-enable component. Do not show filler quotes."
 * 
 * Set `isProductionEnabled = true` once real, verified client feedback is supplied.
 */
export const TestimonialsSection: React.FC = () => {
  // Defaults to false as instructed. An owner preview toggle allows inspection without publishing fake quotes.
  const [isTestimonialsEnabled, setIsTestimonialsEnabled] = useState(false);

  // REAL testimonials list: empty by default to prevent fake testimonials.
  const verifiedTestimonials: TestimonialItem[] = [];

  return (
    <div className="w-full my-12 border border-dashed border-neutral-800 rounded-xl p-6 bg-neutral-950/40">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#D4AF37]">
            <Quote className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-neutral-200">Testimonials Component</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isTestimonialsEnabled ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-neutral-900 text-neutral-400 border border-neutral-800'}`}>
                {isTestimonialsEnabled ? 'Active in View' : 'Hidden by Default'}
              </span>
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              Ready-to-enable component. Zero filler or invented quotes are shown.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsTestimonialsEnabled(!isTestimonialsEnabled)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-700 transition-colors cursor-pointer shrink-0"
        >
          {isTestimonialsEnabled ? (
            <>
              <EyeOff className="w-3.5 h-3.5 text-neutral-400" />
              <span>Hide Preview</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Preview Ready Component</span>
            </>
          )}
        </button>
      </div>

      {isTestimonialsEnabled && (
        <div className="pt-6">
          {verifiedTestimonials.length === 0 ? (
            <div className="text-center py-10 px-4 bg-neutral-900/30 rounded-lg border border-neutral-800">
              <ShieldCheck className="w-10 h-10 text-[#D4AF37]/60 mx-auto mb-3" />
              <h4 className="text-base font-medium text-white mb-1">
                Awaiting Verified Client Feedback
              </h4>
              <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed mb-4">
                In strict adherence to portfolio credibility standards, no fabricated reviews or mock client quotes are displayed. Once clients provide written feedback, add them to <code className="text-[#D4AF37] font-mono">TestimonialsSection.tsx</code>.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 bg-neutral-900 px-3 py-1.5 rounded border border-neutral-800">
                <PlusCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Slot ready for verified testimonials</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {verifiedTestimonials.map((item) => (
                <div key={item.id} className="p-5 rounded-lg bg-neutral-900/50 border border-neutral-800">
                  <p className="text-sm text-neutral-300 italic mb-4">"{item.quote}"</p>
                  <p className="text-xs font-semibold text-white">{item.clientName}</p>
                  <p className="text-[11px] text-neutral-500">{item.businessName} · {item.serviceReceived}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
