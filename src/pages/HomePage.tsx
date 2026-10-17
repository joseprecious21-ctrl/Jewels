import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, LayoutTemplate, FileText, Cpu, MapPin, Store, ShieldCheck, Search, Settings, Building2, Award } from 'lucide-react';
import { PageId } from '../types';
import { SERVICES, PORTFOLIO_PROJECTS, CORE_AREAS } from '../data/seoData';
import { PlaceholderFrame } from '../components/PlaceholderFrame';
import { FaqAccordion } from '../components/FaqAccordion';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CtaBand } from '../components/CtaBand';

interface HomePageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // 6 preview services for the home page teaser
  const previewServices = SERVICES.slice(0, 6);
  // Featured portfolio projects
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);

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
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background ambient lighting */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/7 blur-[140px] pointer-events-none rounded-full" 
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto text-center">
          
          {/* Subtle kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#D4AF37] mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-wide uppercase font-medium text-[11px]">
              Professional SEO Portfolio & Optimization
            </span>
          </div>

          {/* Bold headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white mb-6 text-balance leading-[1.1]">
            Strategic Search Engine Optimization & Website Presence
          </h1>

          {/* Supporting line based ONLY on Section 1 */}
          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Jewels helps businesses improve their online visibility, strengthen their search engine presence, and reach potential customers through strategic SEO and website optimization.
          </p>

          {/* Two Buttons: Request an SEO Consultation (primary, gold) and View SEO Portfolio (secondary) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold text-sm tracking-wide transition-all duration-200 shadow-xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/30 focus-visible:ring-2 focus-visible:ring-[#D4AF37] whitespace-nowrap cursor-pointer active:scale-95"
            >
              <span>Request an SEO Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 hover:text-white font-medium text-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>View SEO Portfolio</span>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-500 font-mono">
            <span>Client Engagements</span>
            <span aria-hidden="true">·</span>
            <span>All Services Quoted Individually</span>
            <span aria-hidden="true">·</span>
            <span>No Artificial Tiers</span>
          </div>

        </div>
      </section>

      {/* 2. EXPERTISE STRIP */}
      <section className="border-y border-neutral-800/80 bg-neutral-950/70 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-4 gap-x-8 text-xs sm:text-sm font-medium text-neutral-300">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
              Core Areas:
            </span>
            {CORE_AREAS.map((area, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="whitespace-nowrap">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
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
            <span>View All 12 Services</span>
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
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-semibold text-[#D4AF37] hover:text-[#FFF3D0] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request a Custom Quote</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-neutral-500">
            All services are quoted individually based on website scale and project requirements.
          </p>
        </div>
      </section>

      {/* 4. FEATURED PORTFOLIO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
                Demonstrated Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Featured SEO Engagements
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
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl border border-neutral-800 bg-neutral-950/80 overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-colors"
              >
                <div className="p-4 bg-neutral-900/30 border-b border-neutral-800">
                  <PlaceholderFrame 
                    label={`Screenshot: ${project.title}`}
                    hint={project.placeholderNote}
                    aspectRatio="video"
                    tag={project.category}
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-[#D4AF37] mb-1">
                      {project.subtitle}
                    </div>
                    <h3 className="text-xl font-serif font-medium text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-900">
                    <button
                      onClick={() => onNavigate('case-studies')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDY TEASER (BEFORE & AFTER) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-neutral-900/60 to-neutral-950 border border-neutral-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
              Case Study Teaser
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white mt-2 mb-3">
              Culture Perfumes: Google Search Console & Rank Math SEO
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
              Demonstrating search optimization progress for South African perfume brand Culture Perfumes. Side-by-side performance documentation captures crawl status, sitemap health, and keyword targeting.
            </p>
          </div>

          {/* Side-by-side Before & After screenshot teaser slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
                <span>Before Optimization</span>
                <span className="text-[#D4AF37] text-[11px]">Initial State</span>
              </div>
              <PlaceholderFrame 
                label="Before: Initial Setup Screenshot"
                hint="Add initial Search Console / Rank Math setup screenshot here once verified."
                aspectRatio="video"
              />
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
                <span>After Optimization</span>
                <span className="text-emerald-400 text-[11px]">Optimized State</span>
              </div>
              <PlaceholderFrame 
                label="After: Verified Outcome Screenshot"
                hint="Add optimized Search Console performance screenshot here once verified."
                aspectRatio="video"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800/80">
            <div className="text-xs text-neutral-500 font-mono">
              [Note: Strict adherence to verified metrics — no fabricated statistics or mock figures.]
            </div>
            <button
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-medium text-white transition-colors cursor-pointer"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION (READY-TO-ENABLE COMPONENT) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <TestimonialsSection />
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-neutral-950/30">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2 block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">
            Clear information about services, consultation workflows, and custom quoting.
          </p>
        </div>

        <FaqAccordion showOwnerNotice={true} />
      </section>

      {/* 8. FINAL CTA BAND */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
