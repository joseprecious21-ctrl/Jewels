import React, { useState } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import { PageId, ProjectCategorySlug } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/seoData';
import { CtaBand } from '../components/CtaBand';

interface PortfolioPageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategorySlug>('all');

  // Category filter buttons specified in Section 5: All, Reporting, Technical SEO, Google Business Profile, Local SEO
  const filterTabs: { id: ProjectCategorySlug; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'reporting', label: 'Reporting' },
    { id: 'technical-seo', label: 'Technical SEO' },
    { id: 'google-business-profile', label: 'Google Business Profile' },
    { id: 'local-seo', label: 'Local SEO' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === selectedFilter);

  return (
    <div className="pt-28 sm:pt-36 min-h-screen">
      
      {/* Page Heading and Intro Line */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#D4AF37] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Demonstrated Deliverables</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-6">
          SEO Portfolio
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
          A showcase of verified SEO projects, website improvements, Google Business Profile implementations, and technical search optimizations.
        </p>

        {/* Category Filter Buttons with smooth transition */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-neutral-900/80 border border-neutral-800 rounded-xl max-w-fit mx-auto">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Visual Grid of Project Cards (Using all six images) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-950/70 overflow-hidden flex flex-col justify-between group hover:border-[#D4AF37]/60 transition-all duration-300 shadow-lg"
            >
              {/* Visual Project Thumbnail (4:3 ratio, object-fit: cover, object-position: top) */}
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden border-b border-neutral-800">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt || project.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-600 text-xs font-mono">
                    [Screenshot Placeholder]
                  </div>
                )}
                
                {/* Category Tag */}
                <div className="absolute top-3 left-3 text-[11px] font-mono tracking-wider px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm border border-neutral-800 text-[#D4AF37]">
                  {project.category}
                </div>
              </div>

              {/* Card Meta & Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-neutral-500 mb-1.5">
                    {project.subtitle}
                  </div>

                  <h3 className="text-xl font-serif font-medium text-white mb-2.5 group-hover:text-[#FFF3D0] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                    {project.caption}
                  </p>
                </div>

                {/* View Case Study Link */}
                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-500">Documented Outcomes</span>
                  
                  <button
                    onClick={() => onNavigate('case-studies', project.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-white transition-colors cursor-pointer group/link"
                  >
                    <span>View case study</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Images */}
        <div className="mt-12 text-center p-4 rounded-xl bg-neutral-950/60 border border-neutral-900 max-w-2xl mx-auto">
          <p className="text-xs text-neutral-500 font-mono">
            Note: Project screenshots 1 to 5 are labeled with neutral titles until confirmed by the owner.
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
