import React from 'react';
import { 
  ExternalLink, ArrowRight, MessageSquare, CreditCard, CheckSquare, Sparkles 
} from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_DETAILS, FREELANCE_PROFILES } from '../data/seoData';
import { BrandBadge } from '../components/BrandIcon';

interface FreelanceProfilesPageProps {
  onNavigate: (page: PageId) => void;
}

export const FreelanceProfilesPage: React.FC<FreelanceProfilesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 sm:pt-36 min-h-screen bg-[var(--ink)] text-[var(--white)]">
      
      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--gold)] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Official Freelance Profiles</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-[var(--white)] mb-6 text-balance">
          Hire Jewels on Your Preferred Platform
        </h1>

        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed font-light">
          Prefer to hire through a freelance marketplace? Find and contact the Jewels team on these platforms, or contact us directly.
        </p>
      </section>

      {/* 2. PROFILE CARDS (3-card responsive grid, stacked on mobile) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {FREELANCE_PROFILES.map((profile) => (
            <div
              key={profile.id}
              className="bg-[var(--card)] border border-[var(--line)] hover:border-[var(--gold)]/60 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Platform Logo on white rounded badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center bg-white rounded-xl px-4 py-3 shadow-md border border-neutral-200 h-14 min-w-[140px]">
                    <img
                      src={profile.logo}
                      alt={profile.logoAlt}
                      className="h-8 max-w-[120px] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Platform Name Heading */}
                <h2 className="text-2xl font-heading font-medium text-[var(--white)] mb-3">
                  {profile.name}
                </h2>

                {/* Neutral Line */}
                <p className="text-sm text-[var(--muted)] font-light leading-relaxed mb-6">
                  {profile.tagline}
                </p>
              </div>

              {/* Action Button & Note */}
              <div className="pt-4 border-t border-[var(--line)]">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={profile.ariaLabel}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-sm tracking-wide transition-all duration-200 shadow-md shadow-[var(--gold)]/10 hover:shadow-[var(--gold)]/25 focus-visible:ring-2 focus-visible:ring-[var(--gold)] cursor-pointer active:scale-[0.98]"
                >
                  <span>View profile on {profile.name}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
                <span className="block text-center text-[11px] font-mono text-[var(--muted)] mt-2.5">
                  Opens in a new tab
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PREFER TO CONTACT US DIRECTLY? BAND */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--line)] bg-[var(--card)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] mb-2 block">
              Direct Communication
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[var(--white)] mb-4">
              Prefer to contact us directly?
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] font-light leading-relaxed">
              You can also reach Jewels directly via email, WhatsApp, or through our verified social profiles without a third-party marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Email */}
            <a
              href={`mailto:${CONTACT_DETAILS.EMAIL}`}
              aria-label={`Email Jewels directly at ${CONTACT_DETAILS.EMAIL}`}
              className="flex flex-col justify-between p-5 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--gold)] hover:bg-[#1A1A1A] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <BrandBadge brand="email" badgeSize="sm" />
                <div>
                  <div className="text-[11px] font-mono text-[var(--muted)]">Email</div>
                  <div className="text-sm font-medium text-[var(--white)] group-hover:text-[var(--gold)] transition-colors">
                    Direct Inquiry
                  </div>
                </div>
              </div>
              <div className="text-xs text-[var(--muted)] truncate font-mono pt-2 border-t border-[var(--line)]/50">
                {CONTACT_DETAILS.EMAIL}
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={CONTACT_DETAILS.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Jewels on WhatsApp (opens in a new tab)"
              className="flex flex-col justify-between p-5 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[#25D366] hover:bg-[#1A1A1A] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <BrandBadge brand="whatsapp" badgeSize="sm" />
                  <div>
                    <div className="text-[11px] font-mono text-[var(--muted)]">WhatsApp</div>
                    <div className="text-sm font-medium text-[var(--white)] group-hover:text-[#25D366] transition-colors">
                      Direct Chat
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-[#25D366] transition-colors" />
              </div>
              <div className="text-xs text-[var(--muted)] truncate font-mono pt-2 border-t border-[var(--line)]/50">
                Chat with Jewels
              </div>
            </a>

            {/* TikTok */}
            <a
              href={CONTACT_DETAILS.TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jewels on TikTok (opens in a new tab)"
              className="flex flex-col justify-between p-5 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--gold)] hover:bg-[#1A1A1A] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <BrandBadge brand="tiktok" badgeSize="sm" />
                  <div>
                    <div className="text-[11px] font-mono text-[var(--muted)]">TikTok</div>
                    <div className="text-sm font-medium text-[var(--white)] group-hover:text-[var(--gold)] transition-colors">
                      @jewelsteam_1
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-[var(--white)] transition-colors" />
              </div>
              <div className="text-xs text-[var(--muted)] truncate font-mono pt-2 border-t border-[var(--line)]/50">
                Official profile
              </div>
            </a>

            {/* Instagram */}
            <a
              href={CONTACT_DETAILS.INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jewels on Instagram (opens in a new tab)"
              className="flex flex-col justify-between p-5 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[#E4405F] hover:bg-[#1A1A1A] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <BrandBadge brand="instagram" badgeSize="sm" />
                  <div>
                    <div className="text-[11px] font-mono text-[var(--muted)]">Instagram</div>
                    <div className="text-sm font-medium text-[var(--white)] group-hover:text-[#E4405F] transition-colors">
                      Instagram
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-[var(--white)] transition-colors" />
              </div>
              <div className="text-xs text-[var(--muted)] truncate font-mono pt-2 border-t border-[var(--line)]/50">
                @jewelsteamgrowth
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={CONTACT_DETAILS.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jewels on LinkedIn (opens in a new tab)"
              className="flex flex-col justify-between p-5 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[#0A66C2] hover:bg-[#1A1A1A] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <BrandBadge brand="linkedin" badgeSize="sm" />
                  <div>
                    <div className="text-[11px] font-mono text-[var(--muted)]">LinkedIn</div>
                    <div className="text-sm font-medium text-[var(--white)] group-hover:text-[#0A66C2] transition-colors">
                      Precious Ayofe
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-[var(--white)] transition-colors" />
              </div>
              <div className="text-xs text-[var(--muted)] truncate font-mono pt-2 border-t border-[var(--line)]/50">
                Professional network
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 4. SHORT "WHY HIRE THROUGH A PLATFORM?" SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--line)] bg-[var(--ink)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] mb-2 block">
              Marketplace Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[var(--white)] mb-4">
              Why hire through a platform?
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] font-light leading-relaxed">
              Freelance platforms provide built-in tools for clients who prefer managing freelance engagements within their existing marketplace accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--card)] border border-[var(--line)] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--ink)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)] mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-medium text-[var(--white)] mb-2">
                Marketplace Messaging
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed">
                Use the platform's native chat, file attachments, and notification systems to communicate with the team.
              </p>
            </div>

            <div className="bg-[var(--card)] border border-[var(--line)] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--ink)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)] mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-medium text-[var(--white)] mb-2">
                Payment Tools
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed">
                Pay using the marketplace's supported payment methods, invoicing records, and standard currency handling.
              </p>
            </div>

            <div className="bg-[var(--card)] border border-[var(--line)] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--ink)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)] mb-4">
                <CheckSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-medium text-[var(--white)] mb-2">
                Order Management
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed">
                Track deliverables, scope submissions, and project milestones directly through your platform account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BAND: "REQUEST AN SEO CONSULTATION" LINKING TO CONTACT PAGE */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--line)] bg-[var(--black)] overflow-hidden text-center">
        <div className="relative max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] mb-3 block">
            Direct Consultation
          </span>

          <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[var(--white)] mb-4 text-balance">
            Ready to review your search visibility?
          </h2>

          <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Whether you choose to work through a freelance marketplace or collaborate directly, we look forward to reviewing your website opportunities.
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[var(--gold)]/15 hover:shadow-[var(--gold)]/30 focus-visible:ring-2 focus-visible:ring-[var(--gold)] cursor-pointer active:scale-[0.98]"
          >
            <span>Request an SEO Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
