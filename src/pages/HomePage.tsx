import React from 'react';
import { 
  ArrowRight, ChevronRight, Sparkles, LayoutTemplate, 
  FileText, Cpu, MapPin, Store, ShieldCheck, Search, ArrowLeftRight 
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES, PORTFOLIO_PROJECTS, CORE_AREAS } from '../data/seoData';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBand } from '../components/CtaBand';

interface HomePageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Six service cards preview
  const previewServices = SERVICES.slice(0, 6);
  // Three portfolio cards from the table (Images 1, 2, and 3)
  const selectedWork = PORTFOLIO_PROJECTS.slice(0, 3);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutTemplate': return <LayoutTemplate className="w-5 h-5 text-[#D4AF37]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#D4AF37]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#D4AF37]" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-[#D4AF37]" />;
      case 'Store': return <Store className="w-5 h-5 text-[#D4AF37]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Search className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="min-h-screen">
      
      {/* 1. HERO SECTION (With Image 1 framed in gold beside the text) */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background ambient lighting */}
        <div 
          className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-[#D4AF37]/8 blur-[150px] pointer-events-none rounded-full" 
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Bold Headline & Copy */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#D4AF37] mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="tracking-wide uppercase font-medium text-[11px]">
                  Professional SEO Portfolio & Optimization
                </span>
              </div>

              {/* Bold headline introducing Jewels and its SEO expertise */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-6 leading-[1.15]">
                Strategic SEO & Website Optimization for High-Growth Brands
              </h1>

              {/* Supporting line from Section 1 only */}
              <p className="text-base sm:text-lg text-neutral-300 mb-8 leading-relaxed font-light max-w-2xl">
                Jewels helps businesses improve their online visibility, strengthen their search engine presence, and reach potential customers through strategic SEO and website optimization.
              </p>

              {/* Two Buttons: Request an SEO Consultation (gold) and View SEO Portfolio (outline) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold text-sm tracking-wide transition-all duration-200 shadow-xl shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/25 focus-visible:ring-2 focus-visible:ring-[#D4AF37] whitespace-nowrap cursor-pointer active:scale-95"
                >
                  <span>Request an SEO Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-transparent hover:bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white font-medium text-sm transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>View SEO Portfolio</span>
                </button>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs text-neutral-500 font-mono">
                <span>Enterprise & Local SEO</span>
                <span aria-hidden="true">·</span>
                <span>All Services Quoted Individually</span>
                <span aria-hidden="true">·</span>
                <span>Verified Outcomes</span>
              </div>
            </div>

            {/* Right Column: Hero Visual Image 1 Framed in Gold */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Gold glowing border frame */}
                <div className="rounded-2xl border-2 border-[#D4AF37]/70 p-2 bg-gradient-to-b from-[#D4AF37]/20 via-neutral-900/60 to-black shadow-2xl shadow-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300">
                  <div className="relative rounded-xl overflow-hidden bg-neutral-950 aspect-video sm:aspect-4/3 flex items-center justify-center">
                    <img
                      src="https://i.postimg.cc/6Q8hGCtm/Enterprise-SEO-Growth-Dashboard.png"
                      alt="Enterprise SEO Growth Dashboard visual showcasing search performance analytics"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-2.5 px-3 py-2 bg-neutral-950/90 rounded-lg border border-neutral-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      <span className="text-xs font-mono text-neutral-300">
                        Enterprise SEO Growth Dashboard
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#D4AF37]">
                      Live Visual
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EXPERTISE STRIP (Continuous right-to-left animation movement) */}
      <section className="relative border-y border-neutral-800/80 bg-neutral-950/80 py-5 overflow-hidden">
        {/* Edge fade gradients for polished visual entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="w-full overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-12 text-xs sm:text-sm font-medium text-neutral-300">
            {/* Loop Segment A */}
            <div className="flex items-center gap-10 shrink-0">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
                Core Expertise
              </span>
              {CORE_AREAS.map((area, idx) => (
                <div key={`segA-${idx}`} className="flex items-center gap-2.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="whitespace-nowrap tracking-wide">{area}</span>
                </div>
              ))}
            </div>

            {/* Loop Segment B (Identical for seamless infinite scroll) */}
            <div className="flex items-center gap-10 shrink-0" aria-hidden="true">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
                Core Expertise
              </span>
              {CORE_AREAS.map((area, idx) => (
                <div key={`segB-${idx}`} className="flex items-center gap-2.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="whitespace-nowrap tracking-wide">{area}</span>
                </div>
              ))}
            </div>

            {/* Loop Segment C */}
            <div className="flex items-center gap-10 shrink-0" aria-hidden="true">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
                Core Expertise
              </span>
              {CORE_AREAS.map((area, idx) => (
                <div key={`segC-${idx}`} className="flex items-center gap-2.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="whitespace-nowrap tracking-wide">{area}</span>
                </div>
              ))}
            </div>

            {/* Loop Segment D */}
            <div className="flex items-center gap-10 shrink-0" aria-hidden="true">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
                Core Expertise
              </span>
              {CORE_AREAS.map((area, idx) => (
                <div key={`segD-${idx}`} className="flex items-center gap-2.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="whitespace-nowrap tracking-wide">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW (Six service cards with 'View all services' link) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
              Capabilities & Optimization
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
              Specialized SEO Services
            </h2>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:text-[#FFF3D0] transition-colors cursor-pointer group"
          >
            <span>View all services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 group-hover:border-[#D4AF37]/40 transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>
                <h3 className="text-lg font-serif font-medium text-white mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {service.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-900">
                <button
                  onClick={() => onNavigate('contact', service.id)}
                  className="text-xs font-semibold text-[#D4AF37] hover:text-[#FFF3D0] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request a custom quote</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-neutral-500">
            All services are quoted individually. Request a Custom Quote.
          </p>
        </div>
      </section>

      {/* 4. SELECTED WORK (Three portfolio cards from the portfolio table) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
                Demonstrated Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Selected Work
              </h2>
            </div>

            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:text-[#FFF3D0] transition-colors cursor-pointer group"
            >
              <span>Explore Complete Portfolio</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedWork.map((project) => (
              <div
                key={project.id}
                className="rounded-xl border border-neutral-800 bg-neutral-950/80 overflow-hidden flex flex-col justify-between group hover:border-[#D4AF37]/50 transition-colors"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-video bg-neutral-900 overflow-hidden border-b border-neutral-800">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.imageAlt || project.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-600 text-xs font-mono">
                      [Screenshot]
                    </div>
                  )}
                  <div className="absolute top-3 left-3 text-[11px] font-mono tracking-wider px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-neutral-800 text-[#D4AF37]">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-medium text-white mb-2 group-hover:text-[#FFF3D0] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed mb-4 font-light">
                      {project.caption}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-900">
                    <button
                      onClick={() => onNavigate('case-studies', project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>View case study</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEFORE AND AFTER SECTION (Image 2 with a link to Case Studies) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-neutral-900/60 to-neutral-950 border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>Performance Documentation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Before and After SEO Results
              </h2>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Documenting direct comparative search progression. Systematic optimization of technical crawlability, structured keywords, and localized visibility generates measurable search trajectory over time.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('case-studies', 'results-before-after')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-2 shadow-2xl overflow-hidden group">
                <img
                  src="https://i.postimg.cc/hGX07Vc6/SEO-Results-Before-and-After.png"
                  alt="SEO Results Before and After comparative performance screenshot"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="p-3 bg-neutral-950/80 rounded-b-lg border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>Image 2: SEO Results Before & After</span>
                  <span className="text-[#D4AF37]">Comparative Evidence</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-neutral-950/30">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2 block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">
            Clear information about services, custom quotes, and getting started.
          </p>
        </div>

        <FaqAccordion showOwnerNotice={false} />
      </section>

      {/* 7. FINAL CTA BAND */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
