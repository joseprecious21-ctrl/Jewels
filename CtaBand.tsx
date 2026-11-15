import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_DETAILS } from '../data/seoData';
import { BrandIcon } from './BrandIcon';

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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--graphite)] bg-[var(--black)] overflow-hidden">
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--charcoal)] border border-[var(--graphite)] text-sm text-[var(--gold)] mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="tracking-wide uppercase font-medium text-sm">Direct Collaboration · Custom Scoped</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-[var(--white)] mb-5 text-balance">
          {headline}
        </h2>

        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          {subline}
        </p>

        {/* Small circular profile photo with gold ring */}
        {showFounderBadge && (
          <div className="inline-flex items-center justify-center gap-3.5 mb-8 px-4 py-2 rounded-full bg-[var(--charcoal)] border border-[var(--graphite)]">
            <div className="relative w-14 h-14 rounded-full p-[2px] bg-[var(--gold)] shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--black)] border border-[var(--graphite)] flex items-center justify-center">
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
                  <span className="font-heading text-[var(--gold)] font-bold text-lg">J</span>
                )}
              </div>
            </div>
            <div className="text-left pr-2">
              <span className="block text-sm font-medium text-[var(--white)]">Direct SEO Consultation with Jewels</span>
              <span className="block text-sm text-[var(--gold)] font-sans">Let's discuss your organic search strategy</span>
            </div>
          </div>
        )}

        {/* Action Buttons: Consultation Button + Freelance Platforms + WhatsApp */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[var(--gold)]/15 hover:shadow-[var(--gold)]/30 focus-visible:ring-2 focus-visible:ring-[var(--gold)] whitespace-nowrap cursor-pointer active:scale-[0.98]"
          >
            <span>Request an SEO Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('freelance-profiles')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] text-[var(--white)] hover:text-[var(--gold)] font-medium text-sm transition-all whitespace-nowrap cursor-pointer"
          >
            <span>Hire on Freelance Platforms</span>
            <ArrowRight className="w-4 h-4 text-[var(--gold)]" />
          </button>

          <a
            href={CONTACT_DETAILS.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Jewels on WhatsApp (opens in a new tab)"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-[var(--success)]/60 text-[var(--success)] hover:text-[var(--white)] font-medium text-sm transition-all duration-200 shadow-lg shadow-emerald-950/20 whitespace-nowrap cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
          >
            <BrandIcon brand="whatsapp" size={18} variant="brand" className="text-[#25D366] group-hover:text-white shrink-0 transition-colors" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="inline-flex items-center justify-center gap-1.5 text-sm text-[var(--muted)] mt-6 tracking-wide font-sans">
          <BrandIcon brand="email" size={14} variant="currentColor" className="text-[var(--gold)] shrink-0" />
          <span>{CONTACT_DETAILS.EMAIL} · All services quoted individually</span>
        </p>
      </div>
    </section>
  );
};
