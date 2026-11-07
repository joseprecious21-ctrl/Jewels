import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, 
  CheckCircle2, AlertTriangle, Lightbulb, Image as ImageIcon, 
  ChevronRight, Sparkles, ExternalLink, BookOpen 
} from 'lucide-react';
import { PageId, BlogPost, BlogPostSection } from '../types';
import { CONTACT_DETAILS, BLOG_POSTS } from '../data/seoData';
import { BrandIcon } from '../components/BrandIcon';
import { BlogProfileImage } from '../components/BlogProfileImage';

interface BlogArticlePageProps {
  post: BlogPost;
  onNavigate: (page: PageId, extraId?: string) => void;
  onBackToBlog: () => void;
  onSelectPost?: (slug: string) => void;
}

/**
 * Individual H2 Section with IntersectionObserver typewriter reveal
 * Ensures full text exists in HTML / DOM from start for SEO & screen readers.
 */
interface SectionRowProps {
  section: BlogPostSection;
  index: number;
}

const SectionRow: React.FC<SectionRowProps> = ({ section, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [typedLength, setTypedLength] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const headingText = section.heading;

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTypedLength(headingText.length);
      setIsFinished(true);
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, headingText.length]);

  // Typing effect for H2 heading at ~35-40ms per character
  useEffect(() => {
    if (!hasStarted || isFinished) return;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setTypedLength(current);
      if (current >= headingText.length) {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [hasStarted, isFinished, headingText.length]);

  return (
    <section 
      ref={containerRef} 
      className="mb-14 scroll-mt-28" 
      aria-labelledby={`heading-section-${index}`}
    >
      {/* Accessible H2 heading: full text in DOM for search engines and screen readers */}
      <h2
        id={`heading-section-${index}`}
        aria-label={headingText}
        className="text-2xl sm:text-3xl font-heading font-medium text-[var(--white)] tracking-tight mb-5 flex items-baseline gap-2.5 flex-wrap"
      >
        {section.sectionNumber && (
          <span className="text-sm text-[var(--gold)] font-medium tracking-wider px-2.5 py-0.5 rounded bg-[var(--card)] border border-[var(--line)] self-center">
            {section.sectionNumber}
          </span>
        )}
        {/* Full text visible to screen readers & search engines from start */}
        <span className="sr-only">{headingText}</span>
        {/* Visual typewriter reveal */}
        <span aria-hidden="true">
          {hasStarted ? headingText.slice(0, typedLength) : ''}
        </span>
        {hasStarted && !isFinished && (
          <span
            aria-hidden="true"
            className="inline-block text-[var(--gold)] font-light ml-0.5 animate-pulse"
          >
            |
          </span>
        )}
      </h2>

      {/* Paragraphs and list content: fades in with slight upward slide after H2 finishes */}
      <div
        className={`transition-all duration-700 ease-out space-y-4 ${
          isFinished
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {section.paragraphs.map((p, pIdx) => (
          <p 
            key={pIdx} 
            className="text-base sm:text-lg text-[var(--muted)] font-light leading-relaxed"
          >
            {p}
          </p>
        ))}

        {/* Optional Key Takeaways List */}
        {section.keyTakeaways && section.keyTakeaways.length > 0 && (
          <div className="mt-5 p-5 rounded-xl bg-[var(--card)] border border-[var(--line)]">
            <h3 className="text-sm uppercase tracking-wider text-[var(--gold)] font-semibold mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[var(--success)]" />
              <span>Key Optimization Checklist</span>
            </h3>
            <ul className="space-y-2.5">
              {section.keyTakeaways.map((item, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2.5 text-sm text-[var(--white)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                  <span className="leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Optional Pro Tip Callout */}
        {section.proTip && (
          <div className="mt-5 p-5 rounded-xl bg-[var(--card)] border-l-4 border-l-[var(--gold)] border-y border-r border-[var(--line)] flex items-start gap-3.5">
            <Lightbulb className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)] block mb-1">
                Strategic Pro Tip from Jewels
              </span>
              <p className="text-sm text-[var(--white)] font-light leading-relaxed">
                {section.proTip}
              </p>
            </div>
          </div>
        )}

        {/* Optional Warning Notice Callout */}
        {section.warningNotice && (
          <div className="mt-5 p-5 rounded-xl bg-[var(--alert)]/10 border-l-4 border-l-[var(--alert)] border-y border-r border-[var(--alert)]/30 flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-[var(--alert)] shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[var(--alert)] block mb-1">
                Suspension Warning
              </span>
              <p className="text-sm text-[var(--white)] font-light leading-relaxed">
                {section.warningNotice}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({
  post,
  onNavigate,
  onBackToBlog,
  onSelectPost,
}) => {
  // Title H1 Typewriter State
  const [h1Length, setH1Length] = useState(0);
  const [isH1Finished, setIsH1Finished] = useState(false);
  const [copied, setCopied] = useState(false);

  // Check prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // H1 typing effect at 45ms per character
  useEffect(() => {
    if (prefersReducedMotion) {
      setH1Length(post.title.length);
      setIsH1Finished(true);
      return;
    }

    let charIdx = 0;
    const interval = setInterval(() => {
      charIdx += 1;
      setH1Length(charIdx);
      if (charIdx >= post.title.length) {
        clearInterval(interval);
        setIsH1Finished(true);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [post.title, prefersReducedMotion]);

  // Handle URL updates and SEO metadata dynamically
  useEffect(() => {
   const targetPath = `/blog/${post.slug}`;

if (window.location.pathname !== targetPath) {
  window.history.pushState(null, '', targetPath);
}

    // Unique title tag
    const previousTitle = document.title;
    document.title = `${post.title} — Jewels`;

    // Unique meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDesc = metaDescription?.getAttribute('content') || '';
    if (metaDescription) {
      metaDescription.setAttribute('content', post.metaDescription);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogType = document.querySelector('meta[property="og:type"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    const previousOgImage = ogImage?.getAttribute('content') || '';
    const previousTwitterImage = twitterImage?.getAttribute('content') || '';
    const articleImage = post.profileImageUrl || 'https://ais-dev-xzibcz4icre3mlfp543zid-404684149747.europe-west2.run.app/logo-source.jpg';

    if (ogTitle) ogTitle.setAttribute('content', `${post.title} — Jewels`);
    if (ogDesc) ogDesc.setAttribute('content', post.metaDescription);
    if (ogType) ogType.setAttribute('content', 'article');
    if (ogImage) ogImage.setAttribute('content', articleImage);
    if (twitterImage) twitterImage.setAttribute('content', articleImage);

    // Article Schema (JSON-LD)
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'article-structured-data';
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.metaDescription,
      image: articleImage,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Jewels SEO',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ais-dev-xzibcz4icre3mlfp543zid-404684149747.europe-west2.run.app/logo-source.jpg',
        },
      },
      datePublished: post.datePublishedIso || '2026-10-29',
      dateModified: post.datePublishedIso || '2026-10-29',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://ais-dev-xzibcz4icre3mlfp543zid-404684149747.europe-west2.run.app/blog/${post.slug}`,
      },
    };
    schemaScript.textContent = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);

    return () => {
      document.title = previousTitle;
      if (metaDescription) metaDescription.setAttribute('content', previousDesc);
      if (ogImage && previousOgImage) ogImage.setAttribute('content', previousOgImage);
      if (twitterImage && previousTwitterImage) twitterImage.setAttribute('content', previousTwitterImage);
      const existingScript = document.getElementById('article-structured-data');
      if (existingScript) existingScript.remove();
    };
  }, [post]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Related reading logic: linking between technical SEO and on-page SEO, or other guides
  const relatedPosts = post.slug === 'technical-seo-guide'
    ? BLOG_POSTS.filter((p) => p.slug === 'on-page-seo-guide')
    : post.slug === 'on-page-seo-guide'
    ? BLOG_POSTS.filter((p) => p.slug === 'technical-seo-guide')
    : BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Adaptable CTA copy tailored to the topic
  const ctaData = (() => {
    if (post.slug === 'technical-seo-guide') {
      return {
        badge: 'Technical SEO & Crawl Audits',
        heading: 'Need Help With Your Technical SEO & Website Architecture?',
        paragraph: 'Schedule a technical SEO consultation with Jewels to audit crawlability, fix indexation blockers, and improve site performance.',
      };
    }
    if (post.slug === 'on-page-seo-guide') {
      return {
        badge: 'On-Page SEO Optimization',
        heading: 'Ready to Optimize Your Content & Headings for Search?',
        paragraph: 'Schedule an on-page SEO consultation with Jewels to refine your content architecture, heading hierarchies, and internal links.',
      };
    }
    return {
      badge: 'Take Your Local Rankings to #1',
      heading: 'Ready to Optimize Your Google Business Profile?',
      paragraph: 'Schedule a thorough local SEO and Google Business Profile audit with Jewels to identify ranking opportunities, eliminate compliance risks, and convert nearby searchers into loyal clients.',
    };
  })();

  return (
    <article className="pt-28 sm:pt-36 min-h-screen bg-[var(--ink)] text-[var(--white)] pb-24">
      
      {/* Top Breadcrumb & Back Link */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-8">
        <nav 
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-[var(--muted)] mb-6 flex-wrap font-normal"
        >
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[var(--gold)] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[var(--line)]" />
          <button
            onClick={onBackToBlog}
            className="hover:text-[var(--gold)] transition-colors cursor-pointer"
          >
            Blog
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[var(--line)]" />
          <span className="text-[var(--gold)] truncate max-w-[220px] sm:max-w-none font-medium">
            {post.title}
          </span>
        </nav>

        <button
          onClick={onBackToBlog}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)] hover:text-[var(--gold)] transition-colors cursor-pointer mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[var(--gold)]" />
          <span>Back to all articles</span>
        </button>

        {/* ARTICLE H1 (TYPES OUT AT 45ms PER CHAR WITH GOLD BLINKING CURSOR) */}
        <h1
          aria-label={post.title}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-[var(--white)] tracking-tight leading-[1.2] mb-6"
        >
          {/* Accessible element with complete text from start */}
          <span className="sr-only">{post.title}</span>
          {/* Visual reveal letter by letter */}
          <span aria-hidden="true">{post.title.slice(0, h1Length)}</span>
          {!isH1Finished && !prefersReducedMotion && (
            <span
              aria-hidden="true"
              className="inline-block text-[var(--gold)] font-light ml-1 animate-pulse"
            >
              |
            </span>
          )}
        </h1>

        {/* CATEGORY TAGS & META LINE: FADES IN AFTER H1 FINISHES */}
        <div
          className={`transition-all duration-700 ease-out flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-[var(--line)] mb-10 ${
            isH1Finished || prefersReducedMotion
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
            {post.profileImageUrl && (
              <BlogProfileImage
                src={post.profileImageUrl}
                alt={post.profileImageAlt || post.title}
                fallbackInitial={post.fallbackInitial || 'J'}
                size="article"
                lazy={false}
              />
            )}

            <div className="flex flex-wrap items-center gap-2.5 text-sm">
              {post.categories.map((cat, idx) => {
                const isGoogle = cat.toLowerCase().includes('google');
                return (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${
                      isGoogle
                        ? 'bg-[var(--google-blue)]/10 text-[var(--google-blue)] border-[var(--google-blue)]/30'
                        : 'bg-[var(--card)] text-[var(--gold)] border-[var(--line)]'
                    }`}
                  >
                    {cat}
                  </span>
                );
              })}

              <span className="text-[var(--line)] hidden sm:inline">|</span>

              <div className="flex items-center gap-1.5 text-[var(--muted)]">
                <User className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span className="text-[var(--white)] font-medium">{post.author}</span>
              </div>

              <span className="text-[var(--line)] hidden sm:inline">·</span>

              <div className="flex items-center gap-1.5 text-[var(--muted)] text-sm font-normal">
                <Calendar className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span>{post.publishDate}</span>
              </div>

              <span className="text-[var(--line)] hidden sm:inline">·</span>

              <div className="flex items-center gap-1.5 text-[var(--muted)] text-sm font-normal">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] text-sm text-[var(--muted)] hover:text-[var(--white)] transition-all cursor-pointer font-medium"
            title="Copy article URL"
          >
            <Share2 className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>{copied ? 'Copied link!' : 'Share'}</span>
          </button>
        </div>

        {/* GOLD-BORDERED FEATURED IMAGE PLACEHOLDER (Only for posts without a profile image) */}
        {!post.profileImageUrl && (
          <div className="relative rounded-2xl border border-[var(--gold)]/40 hover:border-[var(--gold)] transition-colors bg-[var(--card)] p-8 sm:p-12 text-center mb-14 overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-radial from-[var(--gold)]/5 via-transparent to-transparent opacity-70 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[var(--ink)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)] mb-4 shadow-inner">
                <ImageIcon className="w-8 h-8 stroke-[1.5]" />
              </div>

              <p className="text-sm uppercase tracking-wider text-[var(--gold)] font-semibold mb-2">
                {post.featuredImagePlaceholderNote}
              </p>

              <p className="text-sm text-[var(--muted)] font-light max-w-lg mb-3">
                {post.slug === 'technical-seo-guide'
                  ? 'Recommended diagram: Technical crawl architecture, XML sitemap validation, page speed metrics, and schema markup.'
                  : post.slug === 'on-page-seo-guide'
                  ? 'Recommended diagram: On-page content hierarchy, heading structure, search intent alignment, and internal linking flow.'
                  : 'Recommended illustration: Google Business Profile local 3-pack search layout, map pin ranking metrics, and mobile engagement dashboard.'}
              </p>

              <span className="sr-only">{post.featuredImageAlt}</span>

              <span className="text-sm text-[var(--muted)]/70 bg-[var(--ink)]/80 px-3 py-1 rounded border border-[var(--line)] font-normal">
                Descriptive Alt: {post.featuredImageAlt} · 1200 × 630px
              </span>
            </div>
          </div>
        )}

        {/* OPTIONAL ARTICLE INTRO LEAD PARAGRAPH */}
        {post.intro && (
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--line)]">
            <p className="text-lg sm:text-xl text-[var(--white)] font-light leading-relaxed">
              {post.intro}
            </p>
          </div>
        )}

        {/* ARTICLE BODY SECTIONS WITH SCROLL-INTO-VIEW H2 TYPEWRITER & SLIDE-UP TEXT */}
        <div className="prose-invert max-w-none">
          {post.sections.map((section, idx) => (
            <SectionRow key={idx} section={section} index={idx} />
          ))}
        </div>

        {/* RELATED READING SECTION (Links between posts and to Services) */}
        <div className="mt-14 mb-14 p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--line)]">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-[var(--gold)]" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
              Related Reading
            </h3>
          </div>
          <p className="text-sm text-[var(--muted)] font-light mb-6">
            Continue learning with practical guides from Jewels and explore our professional optimization services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedPosts.map((related) => (
              <div
                key={related.id}
                onClick={() => {
                  if (onSelectPost) {
                    onSelectPost(related.slug);
                  } else {
                    onNavigate('blog');
                  }
                }}
                className="p-5 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--gold)]/60 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs uppercase tracking-wider text-[var(--gold)] font-medium block mb-1.5">
                    {related.categories[0]}
                  </span>
                  <h4 className="text-base font-heading font-medium text-[var(--white)] group-hover:text-[var(--gold)] transition-colors leading-snug mb-2">
                    {related.title}
                  </h4>
                  <p className="text-xs text-[var(--muted)] font-light line-clamp-2 leading-relaxed">
                    {related.excerpt}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--gold)] group-hover:text-[var(--gold-hover)]">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}

            <div
              onClick={() => onNavigate('services')}
              className="p-5 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--gold)]/60 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-wider text-[var(--gold)] font-medium block mb-1.5">
                  SEO Services
                </span>
                <h4 className="text-base font-heading font-medium text-[var(--white)] group-hover:text-[var(--gold)] transition-colors leading-snug mb-2">
                  Explore Professional SEO & Optimization Services
                </h4>
                <p className="text-xs text-[var(--muted)] font-light line-clamp-2 leading-relaxed">
                  Discover how Jewels helps businesses improve crawlability, content architecture, local visibility, and search performance.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--gold)] group-hover:text-[var(--gold-hover)]">
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* AUTHOR BIO CARD */}
        <div className="mt-12 p-8 rounded-2xl bg-[var(--card)] border border-[var(--line)] flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl">
          <div className="relative shrink-0">
            <img
              src={CONTACT_DETAILS.PROFILE_PHOTO}
              alt="Jewels profile portrait"
              className="w-20 h-20 rounded-full object-cover border-2 border-[var(--gold)] ring-4 ring-[var(--gold)]/20 shadow-lg"
              onError={(e) => {
                // Fallback to local image if external link is blocked
                (e.currentTarget as HTMLImageElement).src = '/logo-source.jpg';
              }}
            />
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <h3 className="text-lg font-heading font-medium text-[var(--white)]">
                About the Author: Jewels
              </h3>
              <span className="text-sm uppercase tracking-wider px-2.5 py-0.5 rounded bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/30 font-medium">
                SEO Specialist
              </span>
            </div>

            <p className="text-sm text-[var(--muted)] font-light leading-relaxed mb-4">
              Jewels helps ambitious businesses, service professionals, and retailers build authoritative search presence, optimize WordPress platforms, and secure top placement in local Google Maps rankings.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm">
              <button
                onClick={() => onNavigate('contact')}
                className="text-[var(--gold)] hover:text-[var(--gold-hover)] font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Request Consultation with Jewels</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[var(--line)]">·</span>
              <a
                href={CONTACT_DETAILS.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jewels on LinkedIn (opens in a new tab)"
                className="text-[var(--muted)] hover:text-[#0A66C2] transition-colors inline-flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] rounded"
              >
                <BrandIcon brand="linkedin" size={15} variant="gold-hover" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[var(--gold)]" />
              </a>
              <span className="text-[var(--line)]">·</span>
              <a
                href={CONTACT_DETAILS.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Jewels on WhatsApp (opens in a new tab)"
                className="text-[var(--muted)] hover:text-[#25D366] transition-colors inline-flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] rounded"
              >
                <BrandIcon brand="whatsapp" size={15} variant="gold-hover" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* PRIMARY CTA AT END OF ARTICLE: "Request an SEO Consultation" */}
        <div className="mt-12 p-8 sm:p-12 rounded-2xl bg-[var(--card)] border border-[var(--line)] text-center relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--ink)] border border-[var(--line)] text-sm text-[var(--gold)] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span className="tracking-wide uppercase font-medium text-sm">
              {ctaData.badge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium text-[var(--white)] mb-4">
            {ctaData.heading}
          </h3>

          <p className="text-sm sm:text-base text-[var(--muted)] font-light max-w-xl mx-auto mb-8 leading-relaxed">
            {ctaData.paragraph}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-sm tracking-wide uppercase transition-colors shadow-lg shadow-black/40 cursor-pointer"
            >
              <span>Request an SEO Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onBackToBlog}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--ink)] hover:bg-[#1A1A1A] text-[var(--white)] border border-[var(--line)] hover:border-[var(--gold)] font-medium text-sm tracking-wide uppercase transition-all cursor-pointer"
            >
              <span>Browse All Articles</span>
            </button>
          </div>
        </div>

      </div>

    </article>
  );
};
