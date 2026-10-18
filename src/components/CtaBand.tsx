import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_DETAILS } from '../data/seoData';

interface CtaBandProps {
  headline?: string;
  subline?: string;
  onNavigate: (page: PageId) => void;
  showFounderBadge?: boolean;
}

export const CtaBand: React.FC<CtaBandProps> = ({
  headline = 'Strengthen your search presence and reach potential customers.',
  subline = 'Discuss your search goals, review your website opportunities, and receive a tailored quote.',
  onNavigate,
  showFounderBadge = false,
}) => {
  const [avatarError, setAvatarError] = React.useState(false);
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--line)] bg-gradient-to-b from-[var(--card)] to-[var(--ink)] overflow-hidden">
      {/* Subtle gold ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[var(--gold)]/10 blur-[130px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--gold)] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Direct Collaboration · Custom Scoped</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[var(--white)] mb-5 text-balance">
          {headline}
        </h2>

        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          {subline}
        </p>

        {/* Small circular profile photo with gold ring */}
        {showFounderBadge && (
          <div className="inline-flex items-center justify-center gap-3.5 mb-8 px-4 py-2 rounded-full bg-[var(--card)]/80 border border-[var(--line)]">
            <div className="relative w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-[var(--gold)] to-[var(--gold-hover)] shadow-md shadow-[var(--gold)]/15 shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--ink)] border border-[var(--line)] flex items-center justify-center">
                {!avatarError ? (
                  <img
                    src={CONTACT_DETAILS.PROFILE_PHOTO}
                    alt="Profile photo of the founder of Jewels, SEO specialist"
                    width={56}
                    height={56}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setAvatarError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <span className="font-serif text-[var(--gold)] font-bold text-lg">J</span>
                )}
              </div>
            </div>
            <div className="text-left pr-2">
              <span className="block text-xs sm:text-sm font-medium text-[var(--white)]">Direct SEO Consultation with Jewels</span>
              <span className="block text-[11px] text-[var(--gold)] font-mono">Let's discuss your organic search strategy</span>
            </div>
          </div>
        )}

        {/* Action Buttons: Consultation Button + WhatsApp Button + Portfolio link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[var(--gold)]/15 hover:shadow-[var(--gold)]/30 focus-visible:ring-2 focus-visible:ring-[var(--gold)] whitespace-nowrap cursor-pointer active:scale-[0.98]"
          >
            <span>Request an SEO Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={CONTACT_DETAILS.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-[var(--success)]/60 text-[var(--success)] hover:text-[var(--white)] font-medium text-sm transition-all duration-200 shadow-lg shadow-emerald-950/20 whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[var(--success)]" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={() => onNavigate('portfolio')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] text-[var(--white)] font-medium text-sm transition-all whitespace-nowrap cursor-pointer"
          >
            <span>View Portfolio</span>
          </button>
        </div>

        <p className="text-xs text-[var(--muted)] mt-6 tracking-wide font-mono">
          joseprecious21@gmail.com · All services quoted individually
        </p>
      </div>
    </section>
  );
};
