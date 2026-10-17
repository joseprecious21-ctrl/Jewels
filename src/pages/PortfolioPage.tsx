import React, { useState } from 'react';
import { Sparkles, ArrowRight, ChevronRight, Filter } from 'lucide-react';
import { PageId } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/seoData';
import { PlaceholderFrame } from '../components/PlaceholderFrame';
import { CtaBand } from '../components/CtaBand';

interface PortfolioPageProps {
  onNavigate: (page: PageId, projectId?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'technical-seo', label: 'Technical SEO' },
    { id: 'local-seo', label: 'Local SEO' },
    { id: 'google-business-profile', label: 'Google Business Profile' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === selectedFilter || p.category.toLowerCase().includes(selectedFilter.replace('-', ' ')));

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

        {/* Clean Filter Control (Interactive filter tabs) */}
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

      {/* Visual Portfolio Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-950/70 overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-all duration-300"
            >
              {/* Visual Project Thumbnail (Screenshot placeholder until real one is provided) */}
              <div className="p-5 bg-neutral-900/30 border-b border-neutral-800">
                <PlaceholderFrame 
                  label={`Screenshot: ${project.title}`}
                  hint={project.placeholderNote}
                  aspectRatio="video"
                  tag={project.category}
                />
              </div>

              {/* Card Meta & Info */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
                    <span className="text-[#D4AF37]">{project.subtitle}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-medium text-white mb-3 group-hover:text-[#FFF3D0] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 mb-6 text-xs text-neutral-400">
                    <span className="font-mono text-neutral-500 block text-[11px] uppercase tracking-wider mb-2">
                      Confirmed Deliverables:
                    </span>
                    {project.workPerformed.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Case Study Link */}
                <div className="pt-5 border-t border-neutral-900 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500">Documented Outcomes</span>
                  
                  <button
                    onClick={() => onNavigate('case-studies', project.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-white transition-colors cursor-pointer group/link"
                  >
                    <span>View Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-500 font-mono">
            [Zero fake rankings or vanity figures: all case studies rely on authentic verification reports.]
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
