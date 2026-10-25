import React, { useState, useRef } from 'react';
import { Sparkles, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';
import { PageId, ProjectCategorySlug, PortfolioProject } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/seoData';
import { CtaBand } from '../components/CtaBand';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

interface PortfolioPageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategorySlug>('all');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  
  // Lightbox modal state
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

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Category filter buttons: All, Rankings, Reporting, Technical SEO, Google Business Profile, Local SEO
  const filterTabs: { id: ProjectCategorySlug; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'rankings', label: 'Rankings' },
    { id: 'reporting', label: 'Reporting' },
    { id: 'technical-seo', label: 'Technical SEO' },
    { id: 'google-business-profile', label: 'Google Business Profile' },
    { id: 'local-seo', label: 'Local SEO' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === selectedFilter);

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
      
      {/* Page Heading and Intro Line (DARK SECTION: #0A0A0A) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--gold)] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Demonstrated Deliverables</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-[var(--white)] mb-6">
          SEO Portfolio
        </h1>

        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed font-light">
          A showcase of verified SEO projects, website improvements, Google Business Profile implementations, and technical search optimizations.
        </p>

        {/* Category Filter Buttons with smooth transition */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[var(--card)] border border-[var(--line)] rounded-xl max-w-fit mx-auto">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            const isGbpTab = tab.id === 'google-business-profile';

            let activeClass = 'bg-[var(--gold)] text-[var(--ink)] shadow-md shadow-[var(--gold)]/20 font-semibold';
            if (isActive && isGbpTab) {
              activeClass = 'bg-[var(--google-blue)] text-white shadow-md shadow-[#4285F4]/30 font-semibold';
            }

            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] ${
                  isActive
                    ? activeClass
                    : 'text-[var(--muted)] hover:text-[var(--white)] hover:bg-[#1E1E1E]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Visual Grid of Project Cards */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isGbp = project.category === 'Google Business Profile';
            const isRankings = project.category === 'Rankings' || project.categorySlug === 'rankings';
            const hasError = failedImages[project.id];
            const hasImage = Boolean(project.imageUrl) && !hasError;

            // Dimensions for avoiding layout shift
            const imgWidth = project.id === 'seo-ranking-results' ? 901 : 800;
            const imgHeight = project.id === 'seo-ranking-results' ? 352 : 600;

            return (
              <div
                key={project.id}
                ref={(el) => { cardRefs.current[project.id] = el; }}
                tabIndex={0}
                role="region"
                aria-label={project.title}
                onClick={(e) => {
                  // Clicking the card opens the full image in a lightbox
                  if (hasImage) {
                    handleOpenLightbox(project, e.currentTarget);
                  }
                }}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && hasImage) {
                    e.preventDefault();
                    handleOpenLightbox(project, e.currentTarget);
                  }
                }}
                className="rounded-2xl border border-[var(--line)] bg-[var(--card)] overflow-hidden flex flex-col justify-between group hover:border-[var(--gold)]/60 transition-all duration-300 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] select-none motion-reduce:transition-none"
              >
                {/* Visual Project Thumbnail (4:3 ratio, object-fit: cover, object-position: top) */}
                <div className="relative aspect-[4/3] bg-[var(--ink)] overflow-hidden border-b border-[var(--line)]">
                  {hasImage ? (
                    <img
                      src={project.imageUrl}
                      alt={project.imageAlt || project.title}
                      width={imgWidth}
                      height={imgHeight}
                      loading="lazy"
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                    />
                  ) : (
                    // Dark card with gold placeholder if image missing or failed to load
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--card)] border border-[var(--gold)]/30 text-[var(--gold)] p-4 text-center">
                      <ImageIcon className="w-8 h-8 mb-2 opacity-80" />
                      <span className="font-mono text-xs font-semibold">Add screenshot here</span>
                    </div>
                  )}
                  
                  {/* Category Tag */}
                  <div className={`absolute top-3 left-3 text-[11px] font-mono tracking-wider px-2.5 py-1 rounded backdrop-blur-sm ${
                    isRankings
                      ? 'bg-black/90 border border-[var(--gold)] text-[var(--gold)] font-medium shadow-sm'
                      : isGbp
                      ? 'bg-[#4285F4]/20 border border-[#4285F4]/50 text-[var(--google-blue)] font-medium'
                      : 'bg-black/80 border border-[var(--line)] text-[var(--gold)]'
                  }`}>
                    {project.category}
                  </div>

                  {/* Thumbnail hover indicator */}
                  {hasImage && (
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-[var(--gold)] text-[10px] font-mono px-2 py-1 rounded border border-[var(--gold)]/40 flex items-center gap-1 backdrop-blur-sm pointer-events-none">
                      <Maximize2 className="w-3 h-3" />
                      <span>Click to enlarge</span>
                    </div>
                  )}
                </div>

                {/* Card Meta & Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-[var(--muted)] mb-1.5 flex items-center justify-between">
                      <span>{project.subtitle}</span>
                      {isRankings && (
                        <span className="text-[10px] font-mono text-[var(--google-blue)]">GSC Verified</span>
                      )}
                    </div>

                    <h3 className="text-xl font-heading font-medium text-[var(--white)] mb-2.5 group-hover:text-[var(--gold-hover)] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[var(--muted)] font-light leading-relaxed mb-4">
                      {project.caption}
                    </p>
                  </div>

                  {/* Action Links: "View full image" (lightbox) & "View case study" */}
                  <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between gap-3">
                    {hasImage ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLightbox(project, e.currentTarget);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--gold)] hover:text-[var(--gold-hover)] transition-colors cursor-pointer group/link underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] rounded py-1"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View full image</span>
                      </button>
                    ) : (
                      <span className="text-[11px] font-mono text-[var(--gold)]">Add screenshot here</span>
                    )}
                    
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('case-studies', project.id);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[var(--muted)] hover:text-[var(--white)] transition-colors cursor-pointer group/link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] rounded py-1"
                    >
                      <span>View case study</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 motion-reduce:transform-none" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Images */}
        <div className="mt-12 text-center p-4 rounded-xl bg-[var(--card)]/60 border border-[var(--line)] max-w-2xl mx-auto">
          <p className="text-xs text-[var(--muted)] font-mono">
            Note: All SEO screenshots and performance graphs reflect verified project work.
          </p>
        </div>
      </section>

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
