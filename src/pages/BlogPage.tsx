import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Clock, ArrowRight, BookOpen, ChevronRight, User } from 'lucide-react';
import { PageId } from '../types';
import { BLOG_POSTS } from '../data/seoData';
import { BlogArticlePage } from './BlogArticlePage';
import { CtaBand } from '../components/CtaBand';

interface BlogPageProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  initialPostSlug?: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, initialPostSlug }) => {
  const [activeSlug, setActiveSlug] = useState<string | null>(initialPostSlug || null);

  // Check URL on load and on popstate / hashchange
  useEffect(() => {
    const checkSlugFromUrl = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash;

      if (pathname === '/blog/optimize-google-business-profile' || hash.includes('optimize-google-business-profile')) {
        setActiveSlug('optimize-google-business-profile');
      } else if (initialPostSlug) {
        setActiveSlug(initialPostSlug);
      } else if (pathname === '/blog' || hash === '#blog') {
        setActiveSlug(null);
      }
    };

    checkSlugFromUrl();
    window.addEventListener('popstate', checkSlugFromUrl);
    window.addEventListener('hashchange', checkSlugFromUrl);

    return () => {
      window.removeEventListener('popstate', checkSlugFromUrl);
      window.removeEventListener('hashchange', checkSlugFromUrl);
    };
  }, [initialPostSlug]);

  const activePost = BLOG_POSTS.find((p) => p.slug === activeSlug);

  // If a post is active, render the full article page
  if (activePost) {
    return (
      <BlogArticlePage
        post={activePost}
        onNavigate={onNavigate}
        onBackToBlog={() => {
          setActiveSlug(null);
          window.history.pushState(null, '', '/blog');
          window.location.hash = 'blog';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  // Otherwise, render the Blog Card Grid
  return (
    <div className="pt-28 sm:pt-36 min-h-screen bg-[var(--ink)]">
      
      {/* Blog Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--gold)] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Insights & Strategic Analysis</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-[var(--white)] mb-6">
          SEO Insights & Practical Guides
        </h1>

        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed font-light">
          Practical perspectives on Google Business Profile management, local search presence, WordPress optimization, and modern search algorithm shifts.
        </p>
      </section>

      {/* Main Blog Post Grid (Empty state removed as real post now exists) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => {
                setActiveSlug(post.slug);
                window.history.pushState(null, '', `/blog/${post.slug}`);
                window.location.hash = `blog/${post.slug}`;
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="rounded-2xl bg-[var(--card)] border border-[var(--line)] hover:border-[var(--gold)]/60 transition-all p-6 sm:p-7 flex flex-col justify-between group cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden"
            >
              <div>
                {/* Visual Thumbnail Placeholder with Gold Accent */}
                <div className="aspect-video w-full rounded-xl bg-[var(--ink)] border border-[var(--line)] group-hover:border-[var(--gold)]/40 transition-colors flex flex-col items-center justify-center p-4 text-center mb-6 relative overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-[var(--card)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)] mb-2 shadow-inner">
                    <BookOpen className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <span className="text-[11px] font-mono text-[var(--gold)] uppercase tracking-wider font-medium">
                    Google Business Profile Guide
                  </span>
                  <span className="text-[10px] text-[var(--muted)] font-mono mt-0.5">
                    Local Search Framework
                  </span>
                </div>

                {/* Categories & Meta */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {post.categories.map((cat, idx) => {
                    const isGoogle = cat.toLowerCase().includes('google');
                    return (
                      <span
                        key={idx}
                        className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
                          isGoogle
                            ? 'bg-[var(--google-blue)]/10 text-[var(--google-blue)] border-[var(--google-blue)]/30'
                            : 'bg-[var(--ink)] text-[var(--gold)] border-[var(--line)]'
                        }`}
                      >
                        {cat}
                      </span>
                    );
                  })}
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-heading font-medium text-[var(--white)] group-hover:text-[var(--gold)] transition-colors leading-snug mb-3">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer: Metadata and "Read more" link */}
              <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)]">
                  <span>{post.publishDate}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--gold)] group-hover:text-[var(--gold-hover)] uppercase tracking-wider transition-colors">
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
