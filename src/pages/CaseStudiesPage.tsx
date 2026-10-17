import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Shield, ArrowLeftRight, HelpCircle } from 'lucide-react';
import { PageId } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/seoData';
import { PlaceholderFrame } from '../components/PlaceholderFrame';
import { CtaBand } from '../components/CtaBand';

interface CaseStudiesPageProps {
  onNavigate: (page: PageId) => void;
  activeProjectId?: string;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate, activeProjectId }) => {
  return (
    <div className="pt-28 sm:pt-36 min-h-screen">
      
      {/* Page Heading & Intro Line */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#D4AF37] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Real Deliverables & Verification</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-6">
          SEO Case Studies
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
          Detailed project breakdowns demonstrating optimization progress, verified technical implementations, and before-and-after search improvements.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-400">
          <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Strict Policy: No invented metrics or fabricated ranking graphs</span>
        </div>
      </section>

      {/* Case Study Detailed List */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20 space-y-16">
        {PORTFOLIO_PROJECTS.map((project, index) => {
          const isHighlighted = activeProjectId === project.id;
          return (
            <article 
              key={project.id}
              id={project.id}
              className={`p-8 sm:p-12 rounded-2xl bg-neutral-950/80 border transition-all duration-300 ${
                isHighlighted ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/50 shadow-2xl' : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Header meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-800/80">
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] block mb-1">
                    Case Study #{String(index + 1).padStart(2, '0')} · {project.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white">
                    {project.title}
                  </h2>
                </div>

                <div className="shrink-0">
                  <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Overview */}
              <div className="py-6 border-b border-neutral-800/60">
                <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Project Overview
                </h3>
                <p className="text-base text-neutral-300 font-light leading-relaxed max-w-4xl">
                  {project.description}
                </p>
              </div>

              {/* Work Performed (Confirmed Only) */}
              <div className="py-6 border-b border-neutral-800/60">
                <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
                  Work Performed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.workPerformed.map((work, wIdx) => (
                    <div 
                      key={wIdx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/80 text-sm text-neutral-200 font-light"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{work}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before-and-After Side-by-Side Layout */}
              <div className="pt-8">
                <div className="flex items-center gap-2 mb-6">
                  <ArrowLeftRight className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-sm font-serif font-medium text-white tracking-wide uppercase">
                    Side-by-Side Visual Documentation
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Before slot */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider">
                        Before Optimization
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                        Baseline Frame
                      </span>
                    </div>
                    <PlaceholderFrame 
                      label={`Before: ${project.title}`}
                      hint={project.beforePlaceholder}
                      aspectRatio="video"
                      tag="Before"
                    />
                  </div>

                  {/* After slot */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-medium text-[#D4AF37] uppercase tracking-wider">
                        After Optimization
                      </span>
                      <span className="text-[11px] font-mono text-[#D4AF37] bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                        Verified Outcome
                      </span>
                    </div>
                    <PlaceholderFrame 
                      label={`After: ${project.title}`}
                      hint={project.afterPlaceholder}
                      aspectRatio="video"
                      tag="After"
                    />
                  </div>
                </div>

                <div className="mt-4 text-right">
                  <span className="text-[11px] font-mono text-neutral-500">
                    [{project.placeholderNote}]
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* BEFORE-AND-AFTER SEO PERFORMANCE EXAMPLES BLOCK */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        <div className="p-8 sm:p-12 rounded-2xl bg-neutral-900/40 border border-dashed border-neutral-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
              Comparative Performance Framework
            </span>
            <h2 className="text-3xl font-serif font-medium text-white mt-1 mb-3">
              Before-and-After SEO Performance Examples
            </h2>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Standard comparative documentation structure used to record search improvements across technical audits, crawl errors, click-through performance, and Google Business Profile discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div>
              <div className="p-3 bg-neutral-950 rounded-t-xl border-x border-t border-neutral-800 text-xs font-mono text-neutral-400 flex items-center justify-between">
                <span>Example 1: Initial Crawl Diagnostics</span>
                <span className="text-neutral-500">Pre-engagement</span>
              </div>
              <PlaceholderFrame 
                label="Baseline Technical Audit Report"
                hint="Add unoptimized technical crawl error logs or index status report here."
                aspectRatio="video"
                tag="Example Before"
              />
            </div>

            <div>
              <div className="p-3 bg-neutral-950 rounded-t-xl border-x border-t border-neutral-800 text-xs font-mono text-[#D4AF37] flex items-center justify-between">
                <span>Example 2: Resolved Indexing & Health</span>
                <span className="text-[#D4AF37]">Post-engagement</span>
              </div>
              <PlaceholderFrame 
                label="Optimized Health & Coverage Report"
                hint="Add verified Search Console index resolution and valid status report here."
                aspectRatio="video"
                tag="Example After"
              />
            </div>
          </div>

          <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-400 font-mono text-center">
            Verification Protocol: Real screenshots and authenticated Google Search Console / Google Business Profile reports will be embedded upon client approval. Zero invented numbers.
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
