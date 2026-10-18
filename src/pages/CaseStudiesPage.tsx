import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, Shield, ArrowLeftRight, 
  LayoutDashboard, Maximize2, Image as ImageIcon 
} from 'lucide-react';
import { PageId, PortfolioProject } from '../types';
import { VERIFIED_CASE_STUDIES, PORTFOLIO_PROJECTS } from '../data/seoData';
import { PlaceholderFrame } from '../components/PlaceholderFrame';
import { CtaBand } from '../components/CtaBand';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

interface CaseStudiesPageProps {
  onNavigate: (page: PageId) => void;
  activeProjectId?: string;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate, activeProjectId }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    imageAlt: string;
    title: string;
    triggerElement: HTMLElement | null;
  }>({
    isOpen: false,
    imageUrl: '',
    imageAlt: '',
    title: '',
    triggerElement: null,
  });

  const handleOpenLightbox = (project: PortfolioProject, trigger: HTMLElement | null) => {
    if (!project.imageUrl) return;
    setLightboxState({
      isOpen: true,
      imageUrl: project.imageUrl,
      imageAlt: project.imageAlt || project.title,
      title: project.title,
      triggerElement: trigger,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleImageError = (projectId: string) => {
    setFailedImages((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <div className="pt-28 sm:pt-36 min-h-screen bg-[var(--ink)]">
      
      {/* Page Heading & Intro Line (DARK SECTION: #0A0A0A) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--gold)] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Real Deliverables & Verification</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[var(--white)] mb-6">
          SEO Case Studies
        </h1>

        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed font-light">
          Detailed project breakdowns demonstrating optimization progress, verified technical implementations, and before-and-after search outcomes.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[var(--card)] border border-[var(--line)] text-xs font-mono text-[var(--muted)]">
          <Shield className="w-3.5 h-3.5 text-[var(--gold)]" />
          <span>Strict Policy: No invented numbers or fabricated metrics</span>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20 space-y-16">
        
        {/* CASE STUDY 1: BEFORE AND AFTER (DARK SECTION: Charcoal #141414 card with Red Before & Green After) */}
        <article 
          id="results-before-after"
          className="p-8 sm:p-12 rounded-2xl bg-[var(--card)] border border-[var(--line)] hover:border-[var(--gold)]/50 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[var(--line)]">
            <div>
              <span className="text-xs font-mono text-[var(--gold)] block mb-1">
                Featured Case Study · Comparative Growth Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--white)]">
                SEO Results: Before and After
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-[var(--ink)] border border-[var(--line)] text-[var(--muted)] w-fit">
              Reporting & Analytics
            </span>
          </div>

          <div className="py-6 border-b border-[var(--line)]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
              Project Overview
            </h3>
            <p className="text-base text-[var(--white)] font-light leading-relaxed max-w-4xl">
              Comparative search performance evaluation documenting metric improvements from initial technical audit through structured implementation, indexation stabilization, and organic ranking maturation.
            </p>
          </div>

          <div className="py-6 border-b border-[var(--line)]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-4">
              Work Performed
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { text: 'Baseline search engine audit & crawl error cataloging', isGbp: false },
                { text: 'Comprehensive on-page tag and keyword hierarchy realignment', isGbp: false },
                { text: 'Google Search Console indexing cleanup and coverage monitoring', isGbp: true },
                { text: 'Ongoing comparative ranking and query capture tracking', isGbp: false }
              ].map((work, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--ink)] border border-[var(--line)] text-sm text-[var(--white)] font-light">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${work.isGbp ? 'text-[var(--google-blue)]' : 'text-[var(--gold)]'}`} />
                  <span>
                    {work.isGbp ? (
                      <>
                        <span className="text-[var(--google-blue)] font-medium">Google Search Console</span> indexing cleanup and coverage monitoring
                      </>
                    ) : (
                      work.text
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase: Image 2 with "Before" (Red #EA4335) and "After" (Green #34A853) */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ArrowLeftRight className="w-4 h-4 text-[var(--gold)]" />
                <h3 className="text-sm font-serif font-medium text-[var(--white)] tracking-wide uppercase">
                  Before-and-After Performance Documentation
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded bg-[var(--alert)]/10 border border-[var(--alert)]/40 text-[var(--alert)] font-semibold">
                  Before
                </span>
                <span className="text-[var(--gold)]">→</span>
                <span className="px-2.5 py-0.5 rounded bg-[var(--success)]/10 border border-[var(--success)]/40 text-[var(--success)] font-semibold">
                  After
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--line)] bg-[var(--ink)] p-2 overflow-hidden shadow-2xl">
              <img
                src="https://i.postimg.cc/hGX07Vc6/SEO-Results-Before-and-After.png"
                alt="SEO Results Before and After comparative growth analytics documentation"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg object-contain"
              />
              <div className="mt-2 p-3 bg-[var(--card)] rounded-b-lg border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                <span className="text-[var(--muted)]">Visual 2: Verified Before and After Comparison</span>
                <span className="text-[var(--success)] font-medium">[Documented search outcome]</span>
              </div>
            </div>
          </div>
        </article>

        {/* CASE STUDY 2: ENTERPRISE SEO GROWTH DASHBOARD (WHITE SECTION RHYTHM: #FAFAFA card with #E4E4E4 border) */}
        <article 
          id="enterprise-dashboard"
          className="p-8 sm:p-12 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E4] text-[var(--ink)] shadow-md transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#E4E4E4]">
            <div>
              <span className="text-xs font-mono text-[var(--gold)] block mb-1">
                Enterprise Case Study · Visibility Analytics
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--ink)]">
                Enterprise SEO Growth Dashboard
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-white border border-[#E4E4E4] text-[#666666] w-fit">
              Reporting & Dashboard
            </span>
          </div>

          <div className="py-6 border-b border-[#E4E4E4]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#777777] mb-2">
              Project Overview
            </h3>
            <p className="text-base text-[var(--ink)] font-light leading-relaxed max-w-4xl">
              Centralized enterprise search reporting and data tracking architecture displaying aggregate impressions, keyword expansion trends, and search engine visibility indexing across target commercial categories.
            </p>
          </div>

          <div className="py-6 border-b border-[#E4E4E4]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#777777] mb-4">
              Work Performed
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { text: 'Enterprise organic visibility tracking architecture', isGsc: false },
                { text: 'Unified Google Search Console and analytics data synthesis', isGsc: true },
                { text: 'Keyword ranking trajectory and click-through rate monitoring', isGsc: false },
                { text: 'Executive performance reporting and milestone verification', isGsc: false }
              ].map((work, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E4E4E4] text-sm text-[var(--ink)] font-light">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${work.isGsc ? 'text-[var(--google-blue)]' : 'text-[var(--gold)]'}`} />
                  <span>
                    {work.isGsc ? (
                      <>
                        Unified <span className="text-[var(--google-blue)] font-medium">Google Search Console</span> and analytics data synthesis
                      </>
                    ) : (
                      work.text
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase: Image 1 */}
          <div className="pt-8">
            <div className="flex items-center gap-2 mb-4">
              <LayoutDashboard className="w-4 h-4 text-[var(--gold)]" />
              <h3 className="text-sm font-serif font-medium text-[var(--ink)] tracking-wide uppercase">
                Enterprise Dashboard Visual Documentation
              </h3>
            </div>

            <div className="rounded-xl border border-[#E4E4E4] bg-white p-2 overflow-hidden shadow-xl">
              <img
                src="https://i.postimg.cc/6Q8hGCtm/Enterprise-SEO-Growth-Dashboard.png"
                alt="Enterprise SEO Growth Dashboard tracking organic keyword progression"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg object-contain"
              />
              <div className="mt-2 p-3 bg-[#F5F5F5] rounded-b-lg border-t border-[#E4E4E4] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                <span className="text-[#666666]">Visual 1: Enterprise SEO Growth Dashboard</span>
                <span className="text-[var(--success)] font-medium">Aggregate Organic Analytics</span>
              </div>
            </div>
          </div>
        </article>

        {/* CASE STUDY 3 & 4: CULTURE PERFUMES & REVIVE WELLNESS */}
        {VERIFIED_CASE_STUDIES.map((study, idx) => {
          const isWhiteCard = idx % 2 === 1; // alternating rhythm
          const isGbp = study.category === 'Google Business Profile' || study.title.includes('Google Business Profile');

          return (
            <article 
              key={study.id}
              id={study.id}
              className={`p-8 sm:p-12 rounded-2xl transition-all duration-300 ${
                isWhiteCard 
                  ? 'bg-[#FAFAFA] border border-[#E4E4E4] text-[var(--ink)] shadow-md' 
                  : 'bg-[var(--card)] border border-[var(--line)] text-[var(--white)] hover:border-[var(--gold)]/50'
              }`}
            >
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b ${
                isWhiteCard ? 'border-[#E4E4E4]' : 'border-[var(--line)]'
              }`}>
                <div>
                  <span className="text-xs font-mono text-[var(--gold)] block mb-1">
                    Client Project · {study.subtitle}
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-medium ${isWhiteCard ? 'text-[var(--ink)]' : 'text-[var(--white)]'}`}>
                    {study.title}
                  </h2>
                </div>
                <span className={`text-xs font-mono px-3 py-1 rounded w-fit ${
                  isGbp 
                    ? 'bg-[#4285F4]/15 border border-[#4285F4]/40 text-[var(--google-blue)] font-medium'
                    : isWhiteCard ? 'bg-white border border-[#E4E4E4] text-[#666666]' : 'bg-[var(--ink)] border border-[var(--line)] text-[var(--muted)]'
                }`}>
                  {study.category}
                </span>
              </div>

              <div className={`py-6 border-b ${isWhiteCard ? 'border-[#E4E4E4]' : 'border-[var(--line)]'}`}>
                <h3 className={`text-xs font-mono uppercase tracking-wider mb-2 ${isWhiteCard ? 'text-[#777777]' : 'text-[var(--muted)]'}`}>
                  Project Overview
                </h3>
                <p className={`text-base font-light leading-relaxed max-w-4xl ${isWhiteCard ? 'text-[var(--ink)]' : 'text-[var(--white)]'}`}>
                  {study.description}
                </p>
              </div>

              <div className={`py-6 border-b ${isWhiteCard ? 'border-[#E4E4E4]' : 'border-[var(--line)]'}`}>
                <h3 className={`text-xs font-mono uppercase tracking-wider mb-4 ${isWhiteCard ? 'text-[#777777]' : 'text-[var(--muted)]'}`}>
                  Work Performed (Confirmed)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {study.workPerformed.map((work, workIdx) => {
                    const isGoogleItem = work.includes('Google Search Console') || work.includes('Google Business Profile');
                    return (
                      <div 
                        key={workIdx} 
                        className={`flex items-start gap-2.5 p-3 rounded-lg text-sm font-light ${
                          isWhiteCard 
                            ? 'bg-white border border-[#E4E4E4] text-[var(--ink)]' 
                            : 'bg-[var(--ink)] border border-[var(--line)] text-[var(--white)]'
                        }`}
                      >
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isGoogleItem ? 'text-[var(--google-blue)]' : 'text-[var(--gold)]'}`} />
                        <span>{work}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Placeholder for screenshots and verified results */}
              <div className="pt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono uppercase tracking-wider ${isWhiteCard ? 'text-[#777777]' : 'text-[var(--muted)]'}`}>
                    Screenshots & Verified Results
                  </span>
                  <span className="text-[11px] font-mono text-[var(--gold)] bg-[var(--ink)] px-2.5 py-0.5 rounded border border-[var(--line)]">
                    [Awaiting Owner Submission]
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PlaceholderFrame 
                    label={`Before: ${study.title}`}
                    hint={study.beforePlaceholder}
                    aspectRatio="video"
                    tag="Before"
                  />
                  <PlaceholderFrame 
                    label={`After: ${study.title}`}
                    hint={study.afterPlaceholder}
                    aspectRatio="video"
                    tag="After"
                  />
                </div>

                <p className="mt-4 text-xs text-[var(--muted)] font-mono text-right">
                  [{study.placeholderNote}]
                </p>
              </div>
            </article>
          );
        })}

        {/* ADDITIONAL DOCUMENTED PROJECTS (IMAGES 3 TO 6 WITH NEUTRAL TITLES) */}
        <div className="pt-6">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] block mb-1">
              Documented Deliverables
            </span>
            <h3 className="text-2xl font-serif font-medium text-[var(--white)]">
              Project Deliverables & Visual Verification
            </h3>
            <p className="text-xs text-[var(--muted)] mt-1">
              Project screenshots 1 to 4 are labeled with neutral titles until confirmed by the owner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.slice(2).map((project) => {
              const isRankingResults = project.id === 'seo-ranking-results';
              const isGoldFramed = isRankingResults;
              const isGbp = project.category === 'Google Business Profile';
              const isRankings = project.category === 'Rankings';
              const isActive = project.id === activeProjectId;
              const hasError = failedImages[project.id];
              const hasImage = Boolean(project.imageUrl) && !hasError;

              const imgWidth = isRankingResults ? 901 : 800;
              const imgHeight = isRankingResults ? 352 : 600;

              return (
                <div
                  key={project.id}
                  id={project.id}
                  className={`p-6 rounded-2xl bg-[var(--card)] border transition-all duration-300 flex flex-col justify-between motion-reduce:transition-none ${
                    isActive
                      ? 'border-[var(--gold)] ring-1 ring-[var(--gold)]/40 shadow-lg shadow-[var(--gold)]/10'
                      : 'border-[var(--line)] hover:border-[var(--gold)]/50'
                  }`}
                >
                  <div>
                    {/* Visual Screenshot Thumbnail - Gold-bordered frame (#C9A227) */}
                    <div 
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--ink)] mb-5 group cursor-pointer ${
                        isGoldFramed
                          ? 'border border-[var(--gold)] shadow-md shadow-[var(--gold)]/20 ring-1 ring-[var(--gold)]/40'
                          : 'border border-[var(--line)]'
                      }`}
                      onClick={(e) => {
                        if (hasImage) {
                          handleOpenLightbox(project, e.currentTarget);
                        }
                      }}
                    >
                      {hasImage ? (
                        <img
                          src={project.imageUrl}
                          alt={project.imageAlt || project.title}
                          width={imgWidth}
                          height={imgHeight}
                          loading="lazy"
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none select-none"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--card)] border border-[var(--gold)]/30 text-[var(--gold)] p-4 text-center">
                          <ImageIcon className="w-8 h-8 mb-2 opacity-80" />
                          <span className="font-mono text-xs font-semibold">Add screenshot here</span>
                        </div>
                      )}
                      
                      {/* Category Tag */}
                      <div className={`absolute top-3 left-3 text-[11px] font-mono tracking-wider px-2 py-0.5 rounded backdrop-blur-sm ${
                        isRankings
                          ? 'bg-black/90 border border-[var(--gold)] text-[var(--gold)] font-medium shadow-sm'
                          : isGbp
                          ? 'bg-[#4285F4]/20 border border-[#4285F4]/50 text-[var(--google-blue)]'
                          : 'bg-black/80 border border-[var(--line)] text-[var(--gold)]'
                      }`}>
                        {project.category}
                      </div>

                      {/* Click to enlarge overlay indicator */}
                      {hasImage && (
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-[var(--gold)] text-[10px] font-mono px-2 py-1 rounded border border-[var(--gold)]/40 flex items-center gap-1 backdrop-blur-sm">
                          <Maximize2 className="w-3 h-3" />
                          <span>Enlarge</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                        <span>{project.subtitle}</span>
                        {isRankingResults ? (
                          <span className="text-[var(--success)] font-medium">[Verified Results]</span>
                        ) : (
                          <span className="text-[var(--gold)]">[Pending Confirmation]</span>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-serif font-medium text-[var(--white)]">
                        {project.title}
                      </h4>
                      
                      {isRankingResults ? (
                        <p className="text-xs text-[var(--white)] leading-relaxed font-mono">
                          Add project name, keywords, and verified results here.
                        </p>
                      ) : (
                        <p className="text-xs text-[var(--muted)] leading-relaxed font-light">
                          {project.caption}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Optional View Full Image Trigger */}
                  {hasImage && (
                    <div className="pt-4 mt-4 border-t border-[var(--line)] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => handleOpenLightbox(project, e.currentTarget)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--gold)] hover:text-[var(--gold-hover)] transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View full image</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightboxState.imageUrl}
        imageAlt={lightboxState.imageAlt}
        title={lightboxState.title}
        triggerElement={lightboxState.triggerElement}
      />

      {/* CTA Band */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
