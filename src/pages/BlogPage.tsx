import React, { useState } from 'react';
import { Sparkles, BookOpen, Clock, Calendar, ArrowRight, Eye, ShieldAlert } from 'lucide-react';
import { PageId } from '../types';
import { CtaBand } from '../components/CtaBand';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  // Empty state is default because prompt strictly requires:
  // "Show a clean “Articles coming soon” empty state until real posts are provided. Do not write fake articles."
  const [showWireframeTemplate, setShowWireframeTemplate] = useState(false);

  return (
    <div className="pt-28 sm:pt-36 min-h-screen">
      
      {/* Page Heading & Intro */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#D4AF37] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Insights & Strategic Analysis</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-6">
          SEO Insights & Blog
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
          Articles and practical perspectives on search engine presence, WordPress optimization, Google Business Profile management, and modern search algorithm shifts.
        </p>
      </section>

      {/* Main Blog Container */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        
        {/* CLEAN "ARTICLES COMING SOON" EMPTY STATE */}
        <div className="p-12 sm:p-16 rounded-2xl bg-neutral-950/70 border border-neutral-800 text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#D4AF37] mx-auto mb-6 shadow-inner">
            <BookOpen className="w-8 h-8 stroke-[1.5]" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-3">
            Articles Coming Soon
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-md mx-auto leading-relaxed mb-6">
            In compliance with content accuracy guidelines, no placeholder or artificial articles are published. Original case analyses and SEO breakdowns are currently in editorial preparation.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              <span>Ask an SEO Question</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setShowWireframeTemplate(!showWireframeTemplate)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 text-xs font-mono transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{showWireframeTemplate ? 'Hide Post Layout Schema' : 'Preview Article Card Layout'}</span>
            </button>
          </div>
        </div>

        {/* READY-TO-POPULATE ARTICLE CARD GRID LAYOUT (Optional Inspection View) */}
        {showWireframeTemplate && (
          <div className="mt-16 pt-12 border-t border-neutral-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
                  Wireframe Architecture
                </span>
                <h3 className="text-xl font-serif font-medium text-white">
                  Post Card Grid Format (Image · Title · Date · Excerpt · Read More)
                </h3>
              </div>
              <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-3 py-1 rounded border border-neutral-800">
                [TEMPLATES READY FOR REAL COPY]
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item}
                  className="rounded-xl border border-dashed border-neutral-800 bg-neutral-900/40 p-6 flex flex-col justify-between"
                >
                  <div>
                    {/* Image slot */}
                    <div className="aspect-video w-full rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-xs font-mono text-neutral-500 mb-5">
                      [ARTICLE IMAGE PLACEHOLDER #{item}]
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-2.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>[PUBLICATION DATE]</span>
                      <span>·</span>
                      <Clock className="w-3.5 h-3.5" />
                      <span>[READ TIME]</span>
                    </div>

                    <h4 className="text-lg font-serif font-medium text-neutral-300 mb-2">
                      [ARTICLE TITLE #{item} PLACEHOLDER]
                    </h4>

                    <p className="text-xs text-neutral-500 leading-relaxed font-light mb-4">
                      [Short excerpt summarizing key search findings, actionable strategy notes, or algorithmic guidance.]
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-900 flex items-center text-xs font-semibold text-[#D4AF37]/80">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

      {/* CTA Band */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
