import React from 'react';
import { User, CheckCircle2, Sparkles, ArrowRight, Linkedin, Instagram } from 'lucide-react';
import { PageId } from '../types';
import { ABOUT_EXPERTISE, PLACEHOLDERS, CONTACT_DETAILS } from '../data/seoData';
import { CtaBand } from '../components/CtaBand';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="pt-28 sm:pt-36 min-h-screen">
      
      {/* Page Heading & Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#D4AF37] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Professional SEO Practitioner</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-6">
          About Jewels
        </h1>

        <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          Strategic Search Engine Optimization & Website Consultation
        </p>
      </section>

      {/* Main About Layout: Profile Photo & Strict Text Content */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-2xl bg-neutral-950/70 border border-neutral-800">
          
          {/* PROFILE PHOTO WITH THIN GOLD BORDER (#C9A227) AND OFFSET */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative max-w-[420px] w-full mx-auto group">
              {/* Subtle offset gold accent border behind */}
              <div 
                className="absolute -inset-1.5 sm:-inset-2 rounded-2xl border border-[#C9A227]/50 translate-x-2 translate-y-2 pointer-events-none transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5"
                aria-hidden="true"
              />

              {/* Main image container (4:5 portrait ratio, thin #C9A227 border, centered, no awkward crop) */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#C9A227] bg-black shadow-2xl flex items-center justify-center">
                {imgError ? (
                  /* Fallback to dark card with gold 'J' monogram */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-black text-center p-6">
                    <div className="w-20 h-20 rounded-full border-2 border-[#C9A227] flex items-center justify-center mb-3">
                      <span className="font-serif text-4xl font-bold text-[#D4AF37]">J</span>
                    </div>
                    <span className="text-sm font-serif text-neutral-300">Jewels Founder</span>
                    <span className="text-xs font-mono text-neutral-500 mt-1">SEO Specialist</span>
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

            <p className="text-[11px] font-mono text-neutral-500 mt-4 text-center">
              Founder & SEO Specialist · Jewels
            </p>
          </div>

          {/* Strict About Text & Areas of Expertise */}
          <div className="md:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block mb-2">
                Purpose & Philosophy
              </span>

              {/* Exact mandated copy from Section 5: */}
              <p className="text-lg sm:text-xl text-neutral-100 font-serif leading-relaxed italic border-l-2 border-[#D4AF37] pl-5 py-2">
                “Jewels is focused on helping businesses improve their online visibility, strengthen their search engine presence, and reach potential customers through strategic SEO and website optimization. The portfolio showcases SEO projects, website improvements, Google Business Profile work, and case studies showing project progress and outcomes.”
              </p>
            </div>

            {/* Areas of Expertise List */}
            <div className="pt-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-300 mb-4">
                Areas of Expertise:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_EXPERTISE.map((area, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80 text-sm text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="capitalize">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Profile Links (LinkedIn and Instagram) */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                Connect Directly
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT_DETAILS.LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#D4AF37]/50 text-neutral-200 hover:text-white text-xs font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#D4AF37]" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={CONTACT_DETAILS.INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#D4AF37]/50 text-neutral-200 hover:text-white text-xs font-medium transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#D4AF37]" />
                  <span>Instagram @jewelsteamgrowth_seo_solution</span>
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                <span>Request an SEO Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-medium border border-neutral-800 transition-colors cursor-pointer"
              >
                <span>View Portfolio Projects</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Final CTA Band */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
