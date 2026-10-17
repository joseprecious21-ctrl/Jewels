import React from 'react';
import { User, CheckCircle2, Sparkles, ArrowRight, Linkedin, Instagram } from 'lucide-react';
import { PageId } from '../types';
import { ABOUT_EXPERTISE, PLACEHOLDERS, CONTACT_DETAILS } from '../data/seoData';
import { CtaBand } from '../components/CtaBand';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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

      {/* Main About Layout: Profile Photo Placeholder & Strict Text Content */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-2xl bg-neutral-950/70 border border-neutral-800">
          
          {/* PROFILE PHOTO PLACEHOLDER SLOT */}
          <div className="md:col-span-5 flex flex-col items-center">
            {/* [PROFILE PHOTO PLACEHOLDER]: Replace with owner headshot image asset */}
            <div 
              className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl border-2 border-dashed border-neutral-800 bg-neutral-900/60 p-6 flex flex-col items-center justify-center text-center group hover:border-[#D4AF37]/50 transition-colors overflow-hidden"
              role="region"
              aria-label="Profile photo placeholder"
            >
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{
                  backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}
              />

              <div className="w-16 h-16 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-105 transition-transform">
                <User className="w-8 h-8 stroke-[1.5]" />
              </div>

              <span className="text-sm font-medium text-neutral-300">
                Profile Photo Placeholder
              </span>
              <p className="text-xs text-neutral-500 mt-1 max-w-[200px] leading-relaxed">
                Add your professional portrait or studio headshot here.
              </p>

              <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-mono text-[#D4AF37] bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                {PLACEHOLDERS.PROFILE_PHOTO}
              </div>
            </div>
            {/* <!-- [PROFILE PHOTO PLACEHOLDER] END --> */}

            <p className="text-[11px] font-mono text-neutral-500 mt-3 text-center">
              [Spot reserved for Jewels profile photo]
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
