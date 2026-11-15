import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { ABOUT_EXPERTISE, CONTACT_DETAILS } from '../data/seoData';
import { CtaBand } from '../components/CtaBand';
import { BrandIcon } from '../components/BrandIcon';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="pt-28 sm:pt-36 min-h-screen bg-[var(--ink)]">
      
      {/* 1. Page Heading & Header (DARK SECTION: #0A0A0A) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card)] border border-[var(--line)] text-sm text-[var(--gold)] mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="tracking-wide uppercase font-medium text-sm">Professional SEO Practitioner</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-[var(--white)] mb-6">
          About Jewels
        </h1>

        <p className="text-sm font-sans uppercase tracking-wider text-[var(--muted)]">
          Strategic Search Engine Optimization & Website Consultation
        </p>
      </section>

      {/* 2. Main About Layout (WHITE SECTION: #FFFFFF rhythm with #FAFAFA card & #E4E4E4 border) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--white)] text-[var(--ink)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E4] shadow-sm">
            
            {/* PROFILE PHOTO WITH THIN GOLD BORDER (#C9A227) AND OFFSET */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative max-w-[420px] w-full mx-auto group">
                {/* Subtle offset gold accent border behind */}
                <div 
                  className="absolute -inset-1.5 sm:-inset-2 rounded-2xl border border-[var(--gold)]/50 translate-x-2 translate-y-2 pointer-events-none transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5"
                  aria-hidden="true"
                />

                {/* Main image container (4:5 portrait ratio, thin #C9A227 border, centered) */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[var(--gold)] bg-black shadow-xl flex items-center justify-center">
                  {imgError ? (
                    /* Fallback to dark card with gold 'J' monogram */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--charcoal)] text-center p-6">
                      <div className="w-20 h-20 rounded-full border-2 border-[var(--gold)] flex items-center justify-center mb-3">
                        <span className="font-heading text-4xl font-bold text-[var(--gold)]">J</span>
                      </div>
                      <span className="text-sm font-heading text-[var(--white)]">Jewels Founder</span>
                      <span className="text-sm font-sans text-[var(--muted)] mt-1">SEO Specialist</span>
                    </div>
                  ) : (
                    <img
                      src={CONTACT_DETAILS.PROFILE_PHOTO}
                      alt="Profile photo of the founder of Jewels, SEO specialist"
                      width={420}
                      height={525}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                    />
                  )}
                </div>
              </div>

              <p className="text-sm font-sans text-[#777777] mt-4 text-center">
                Founder & SEO Specialist · Jewels
              </p>
            </div>

            {/* Strict About Text & Areas of Expertise */}
            <div className="md:col-span-7 space-y-8">
              <div>
                <span className="text-sm font-sans uppercase tracking-wider text-[var(--gold)] block mb-2">
                  Purpose & Philosophy
                </span>

                {/* Mandated copy: */}
                <p className="text-lg sm:text-xl text-[var(--ink)] font-heading leading-relaxed italic border-l-2 border-[var(--gold)] pl-5 py-2">
                  “Jewels is focused on helping businesses improve their online visibility, strengthen their search engine presence, and reach potential customers through strategic SEO and website optimization. The portfolio showcases SEO projects, website improvements, Google Business Profile work, and case studies showing project progress and outcomes.”
                </p>
              </div>

              {/* Areas of Expertise List */}
              <div className="pt-2">
                <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-[var(--ink)] mb-4">
                  Areas of Expertise:
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ABOUT_EXPERTISE.map((area, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#E4E4E4] text-sm text-[var(--ink)]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0" />
                      <span className="capitalize">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Profile Links (LinkedIn and Instagram) */}
              <div className="pt-2">
                <span className="text-sm font-sans uppercase tracking-wider text-[#666666] block mb-3">
                  Connect Directly
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={CONTACT_DETAILS.LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jewels on LinkedIn (opens in a new tab)"
                    className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-white hover:bg-[#F2F2F2] border border-[#D5D5D5] hover:border-[var(--gold)] text-[var(--ink)] text-sm font-medium transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                  >
                    <BrandIcon brand="linkedin" size={24} variant="gold-hover" className="shrink-0" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={CONTACT_DETAILS.INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jewels on Instagram (opens in a new tab)"
                    className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-white hover:bg-[#F2F2F2] border border-[#D5D5D5] hover:border-[var(--gold)] text-[var(--ink)] text-sm font-medium transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                  >
                    <BrandIcon brand="instagram" size={24} variant="gold-hover" className="shrink-0" />
                    <span>Instagram @jewelsteamgrowth_seo_solution</span>
                  </a>

                  <a
                    href={CONTACT_DETAILS.TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jewels on TikTok (opens in a new tab)"
                    className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-white hover:bg-[#F2F2F2] border border-[#D5D5D5] hover:border-[var(--gold)] text-[var(--ink)] text-sm font-medium transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                  >
                    <BrandIcon brand="tiktok" size={24} variant="gold-hover" className="shrink-0" />
                    <span>TikTok @jewelsteam_1</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-sm tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <span>Request an SEO Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('portfolio')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-[#F2F2F2] text-[var(--ink)] text-sm font-medium border border-[#D0D0D0] hover:border-[var(--gold)] transition-colors cursor-pointer"
                >
                  <span>View Portfolio Projects</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Final CTA Band (DARK SECTION: #0A0A0A) */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
