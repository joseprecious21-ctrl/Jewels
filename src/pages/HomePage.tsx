import React from 'react';
import { 
  ArrowRight, ChevronRight, Sparkles, LayoutTemplate, 
  FileText, Cpu, MapPin, Store, ShieldCheck, Search, ArrowLeftRight 
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES, PORTFOLIO_PROJECTS, CORE_AREAS, CONTACT_DETAILS } from '../data/seoData';
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

  // Icon mapping with Google Blue #4285F4 for Google Business Profile & Search Console
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutTemplate': return <LayoutTemplate className="w-5 h-5 text-[var(--gold)]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[var(--gold)]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[var(--gold)]" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-[var(--gold)]" />;
      case 'Store': return <Store className="w-5 h-5 text-[var(--google-blue)]" />; // GBP
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[var(--google-blue)]" />; // GBP
      case 'Search': return <Search className="w-5 h-5 text-[var(--google-blue)]" />; // Search Console
      default: return <Search className="w-5 h-5 text-[var(--gold)]" />;
    }
  };

  return (
    <div className="min-h-screen">
      
      {/* 1. HERO SECTION (DARK: Jet Black #0A0A0A with Full-width Background Video) */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--ink)] pt-28 pb-20 sm:pt-36 sm:pb-28">
        
        {/* Native Background Video Element */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          poster="https://i.postimg.cc/6Q8hGCtm/Enterprise-SEO-Growth-Dashboard.png"
          ref={(el) => {
            if (el) {
              el.muted = true;
              el.play().catch(() => {});
            }
          }}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none motion-reduce:hidden"
        >
          <source
            src="https://www.image2url.com/r2/default/videos/1792255592411-950fb60e-3b69-4717-a25c-6c18ccc23b08.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark contrast scrim overlay (60% black with gradient to solid #0A0A0A at bottom) */}
        <div 
          className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/55 via-black/65 to-[var(--ink)] z-[1] pointer-events-none"
          aria-hidden="true"
        />

        {/* Ambient gold radial glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[var(--gold)]/10 blur-[150px] pointer-events-none rounded-full z-[1]" 
          aria-hidden="true"
        />

        {/* Hero Content (Above overlay with high contrast) */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Subtle kicker badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)]/90 border border-[var(--line)] text-xs text-[var(--gold)] mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-wide uppercase font-medium text-[11px]">
              Professional SEO Portfolio & Optimization
            </span>
          </div>

          {/* Bold headline introducing Jewels and its SEO expertise */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-[var(--white)] mb-6 leading-[1.1] text-balance">
            Strategic SEO & Website Optimization for High-Growth Brands
          </h1>

          {/* Supporting line */}
          <p className="text-base sm:text-xl text-neutral-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-sm">
            Jewels helps businesses improve their online visibility, strengthen their search engine presence, and reach potential customers through strategic SEO and website optimization.
          </p>

          {/* Two Buttons: Request an SEO Consultation (gold) and View SEO Portfolio (dark) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-sm tracking-wide transition-all duration-200 shadow-xl shadow-[var(--gold)]/25 hover:shadow-[var(--gold)]/35 focus-visible:ring-2 focus-visible:ring-[var(--gold)] whitespace-nowrap cursor-pointer active:scale-95"
            >
              <span>Request an SEO Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] text-[var(--white)] font-medium text-sm transition-all whitespace-nowrap cursor-pointer backdrop-blur-sm"
            >
              <span>View SEO Portfolio</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--muted)] font-mono">
            <span>Enterprise & Local SEO</span>
            <span aria-hidden="true">·</span>
            <span>All Services Quoted Individually</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--success)]">Verified Outcomes</span>
          </div>

        </div>
      </section>

      {/* 2. EXPERTISE STRIP (Continuous right-to-left animation movement) */}
      <section className="relative border-y border-[var(--line)] bg-[var(--card)]/90 py-5 overflow-hidden">
        {/* Edge fade gradients for polished visual entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--ink)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--ink)] to-transparent z-10 pointer-events-none" />

        <div className="w-full overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-12 text-xs sm:text-sm font-medium text-[var(--muted)]">
            {/* Loop Segment A */}
            <div className="flex items-center gap-10 shrink-0">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--gold)] px-2.5 py-1 rounded bg-[var(--ink)] border border-[var(--line)]">
                Core Expertise
              </span>
              {CORE_AREAS.map((area, idx) => (
                <div key={`segA-${idx}`} className="flex items-center gap-2.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  <span className="whitespace-nowrap tracking-wide">{area}</span>
                </div>
              ))}
            </div>

            {/* Loop Segment B (Identical for seamless infinite scroll) */}
            <div className="flex items-center gap-10 shrink-0" aria-hidden="true">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--gold)] px-2.5 py-1 rounded bg-[var(--ink)] border border-[var(--line)]">
                Core Expertise
              </span>
              {CORE_AREAS.map((area, idx) => (
                <div key={`segB-${idx}`} className="flex items-center gap-2.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  <span className="whitespace-nowrap tracking-wide">{area}</span>
                </div>
              ))}
            </div>

            {/* Loop Segment C */}
            <div className="flex items-center gap-10 shrink-0" aria-hidden="true">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--gold)] px-2.5 py-1 rounded bg-[var(--ink)] border border-[var(--line)]">
                Core Expertise
              </span>
              {CORE_AREAS.map((area, idx) => (
                <div key={`segC-${idx}`} className="flex items-center gap-2.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  <span className="whitespace-nowrap tracking-wide">{area}</span>
                </div>
              ))}
            </div>

            {/* Loop Segment D */}
            <div className="flex items-center gap-10 shrink-0" aria-hidden="true">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--gold)] px-2.5 py-1 rounded bg-[var(--ink)] border border-[var(--line)]">
                Core Expertise
              </span>
              {CORE_AREAS.map((area, idx) => (
                <div key={`segD-${idx}`} className="flex items-center gap-2.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  <span className="whitespace-nowrap tracking-wide">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW (WHITE SECTION: #FFFFFF for rhythm, #FAFAFA cards with #E4E4E4 borders) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--white)] text-[var(--ink)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] mb-2">
                Capabilities & Optimization
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[var(--ink)]">
                Specialized SEO Services
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--gold)] hover:text-[var(--gold-hover)] transition-colors cursor-pointer group"
            >
              <span>View all services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewServices.map((service) => (
              <div
                key={service.id}
                className="p-7 rounded-xl bg-[#FAFAFA] border border-[#E4E4E4] hover:border-[var(--gold)] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E4E4E4] flex items-center justify-center mb-5 group-hover:border-[var(--gold)] transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="text-lg font-serif font-medium text-[var(--ink)] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed font-light">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E4E4E4]">
                  <button
                    onClick={() => onNavigate('contact', service.id)}
                    className="text-xs font-semibold text-[var(--gold)] hover:text-[#0A0A0A] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request a custom quote</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-[#777777]">
              All services are quoted individually. Request a Custom Quote.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORK (DARK SECTION: #0A0A0A with #141414 cards & #2A2A2A borders) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--line)] bg-[var(--ink)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] mb-2">
                Demonstrated Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[var(--white)]">
                Selected Work
              </h2>
            </div>

            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--gold)] hover:text-[var(--gold-hover)] transition-colors cursor-pointer group"
            >
              <span>Explore Complete Portfolio</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedWork.map((project) => {
              const isGbp = project.category === 'Google Business Profile';
              return (
                <div
                  key={project.id}
                  className="rounded-xl border border-[var(--line)] bg-[var(--card)] overflow-hidden flex flex-col justify-between group hover:border-[var(--gold)]/60 transition-colors"
                >
                  {/* Visual Thumbnail */}
                  <div className="relative aspect-video bg-[var(--ink)] overflow-hidden border-b border-[var(--line)]">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt || project.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--muted)] text-xs font-mono">
                        [Screenshot]
                      </div>
                    )}
                    <div className={`absolute top-3 left-3 text-[11px] font-mono tracking-wider px-2 py-0.5 rounded backdrop-blur-sm ${
                      isGbp 
                        ? 'bg-[#4285F4]/20 border border-[#4285F4]/40 text-[var(--google-blue)]'
                        : 'bg-black/80 border border-[var(--line)] text-[var(--gold)]'
                    }`}>
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-medium text-[var(--white)] mb-2 group-hover:text-[var(--gold-hover)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[var(--muted)] line-clamp-3 leading-relaxed mb-4 font-light">
                        {project.caption}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[var(--line)]">
                      <button
                        onClick={() => onNavigate('case-studies', project.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--gold)] hover:text-[var(--white)] transition-colors cursor-pointer"
                      >
                        <span>View case study</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4B. FOUNDER SPOTLIGHT: MEET JEWELS (WHITE SECTION: #FFFFFF rhythm with #FAFAFA card & #E4E4E4 border) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#E4E4E4] bg-[var(--white)] text-[var(--ink)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E4]">
            
            {/* Framed Profile Photo with thin gold border (#C9A227) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative max-w-[340px] sm:max-w-[380px] w-full mx-auto group">
                <div 
                  className="absolute -inset-1.5 rounded-2xl border border-[var(--gold)]/50 translate-x-2 translate-y-2 pointer-events-none transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[var(--gold)] bg-black shadow-xl">
                  <img
                    src={CONTACT_DETAILS.PROFILE_PHOTO}
                    alt="Profile photo of the founder of Jewels, SEO specialist"
                    width={380}
                    height={475}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                  />
                </div>
              </div>
              <p className="text-[11px] font-mono text-[#777777] mt-4 text-center">
                Founder & SEO Specialist · Jewels
              </p>
            </div>

            {/* Direct Collaboration Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E4E4] text-xs text-[var(--gold)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="tracking-wide uppercase font-medium text-[11px]">Direct Practitioner Collaboration</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[var(--ink)] tracking-tight">
                Work Directly With Jewels
              </h2>

              <p className="text-lg text-[var(--ink)] font-serif italic border-l-2 border-[var(--gold)] pl-4 py-1 leading-relaxed">
                “Jewels helps businesses improve their online visibility, strengthen their search engine presence, and reach potential customers through strategic SEO and website optimization.”
              </p>

              <p className="text-sm text-[#555555] font-light leading-relaxed">
                When you engage Jewels, you work directly with a dedicated SEO practitioner rather than being handed off to account managers. Every audit, keyword strategy, and technical recommendation is crafted specifically for your domain and commercial objectives.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <span>Request an SEO Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-[#F2F2F2] border border-[#D0D0D0] hover:border-[var(--gold)] text-[var(--ink)] text-xs font-mono transition-colors cursor-pointer"
                >
                  <span>About Jewels & Expertise</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BEFORE AND AFTER SECTION (DARK SECTION: #0A0A0A with #141414 card & Red/Green Before/After labels) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--line)] bg-[var(--ink)] text-[var(--white)]">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-2xl bg-[var(--card)] border border-[var(--line)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--gold)]">
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  <span>Performance Documentation</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[var(--white)]">
                  Before and After SEO Results
                </h2>
                <p className="text-sm text-[var(--muted)] font-light leading-relaxed">
                  Documenting direct comparative search progression. Systematic optimization of technical crawlability, structured keywords, and localized visibility generates measurable search trajectory over time.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('case-studies', 'results-before-after')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    <span>Explore Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-xl border border-[var(--line)] bg-[var(--ink)] p-2 shadow-2xl overflow-hidden group">
                  <img
                    src="https://i.postimg.cc/hGX07Vc6/SEO-Results-Before-and-After.png"
                    alt="SEO Results Before and After comparative performance screenshot"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="p-3 bg-[var(--card)] rounded-b-lg border-t border-[var(--line)] flex items-center justify-between text-xs font-mono">
                    <span className="text-[var(--muted)]">Image 2: SEO Results Before & After</span>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[var(--alert)]/10 text-[var(--alert)] border border-[var(--alert)]/40 text-[10px]">
                        Before
                      </span>
                      <span className="text-[var(--muted)]">→</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/40 text-[10px]">
                        After
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION (WHITE SECTION: #FFFFFF rhythm) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#E4E4E4] bg-[var(--white)] text-[var(--ink)]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] mb-2 block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[var(--ink)] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#555555] max-w-xl mx-auto">
            Clear information about services, custom quotes, and getting started.
          </p>
        </div>

        <FaqAccordion showOwnerNotice={false} theme="light" />
      </section>

      {/* 7. FINAL CTA BAND (DARK SECTION) */}
      <CtaBand onNavigate={onNavigate} showFounderBadge={true} />

    </div>
  );
};
