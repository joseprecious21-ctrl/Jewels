import React, { useState, useRef, useEffect } from 'react';
import { 
  Star, Maximize2, Image as ImageIcon, ArrowRight, Sparkles, 
  RotateCcw, CheckCircle2, TrendingUp, MessageSquare, 
  Eye, FileCheck, Layers, Award, Calendar, ChevronDown, ChevronUp, ExternalLink
} from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_DETAILS } from '../data/seoData';
import { BrandBadge } from '../components/BrandIcon';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  // Treasure Nobel card state
  const [treasureViewMode, setTreasureViewMode] = useState<'animated' | 'screenshot'>('animated');
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [animKey, setAnimKey] = useState<number>(0);
  const [isTreasureHovered, setIsTreasureHovered] = useState(false);
  const [treasureMousePos, setTreasureMousePos] = useState({ x: 0.5, y: 0.5 });
  const [treasureImageFailed, setTreasureImageFailed] = useState(false);

  // Luton card state
  const [lutonImageFailed, setLutonImageFailed] = useState(false);
  const [isLutonReviewOpen, setIsLutonReviewOpen] = useState(true);

  // Shared Lightbox state
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

  const treasureCardRef = useRef<HTMLDivElement | null>(null);
  const treasureTriggerRef = useRef<HTMLButtonElement | null>(null);
  const lutonTriggerRef = useRef<HTMLButtonElement | null>(null);

  // Exact Luton review details per specification
  const lutonReview = {
    name: 'Luton',
    business: 'Clinic',
    service: 'AEO and GEO optimization for their website',
    serviceTag: 'AEO and GEO optimization',
    rating: 4.5,
    date: '17 August 2026',
    dateIso: '2026-08-17',
    imageUrl: '/luton-review.png',
    fallbackImageUrl: 'https://i.postimg.cc/XjPbWbCq/luton-review.png',
    imageAlt: '4.5-star review from Luton for Jewels AEO and GEO optimization',
    width: 1200,
    height: 864,
    reviewText:
      'jewels team really help my website firstly i doubted them when i saw them on linkedin but when i and precious which is their team member start talking and getting along he explain some things to me and i was shocked, things that actually make my website rank on google and also we talk about geo and how it can help my clinic website. i saw fantastic result after some few weeks. they are highly recommended',
  };

  // Treasure Nobel review data
  const treasureReview = {
    reviewerName: 'Treasure Nobel',
    role: 'Owner at treasurenoble beauty',
    company: 'treasurenoble beauty',
    service: 'SEO',
    sector: 'Beauty',
    teamSize: '11 - 50',
    overallRating: 5.0,
    imageUrl: '/review.png',
    fallbackImageUrl: 'https://i.postimg.cc/fTjb3psr/review.png',
    imageAlt: '5-star review from Treasure Nobel for Jewels',
    metrics: [
      { label: 'Budget', score: 5.0, stars: 5 },
      { label: 'Quality', score: 5.0, stars: 5 },
      { label: 'Schedule', score: 5.0, stars: 5 },
      { label: 'Collaboration', score: 5.0, stars: 5 },
    ],
    questions: [
      {
        id: 'objective',
        title: 'Collaboration Objective',
        question: 'What was the objective behind your collaboration?',
        answer: "The objective was to improve our website's search engine visibility, increase organic traffic, and optimize the site to achieve better rankings on Google.",
        icon: TrendingUp,
        tag: 'Search Visibility & Rankings',
      },
      {
        id: 'highlights',
        title: 'Collaboration Highlights',
        question: 'What did you enjoy the most during your collaboration?',
        answer: 'I enjoyed their clear communication, attention to detail, and the way they tailored the SEO strategy to our website. They kept us informed throughout the project and focused on delivering measurable improvements.',
        icon: MessageSquare,
        tag: 'Tailored Strategy & Communication',
      },
      {
        id: 'improvements',
        title: 'Room for Improvement',
        question: 'Are there any areas for improvements?',
        answer: "For me i don't think there is any area of improvement they are good for now",
        icon: Award,
        tag: 'Complete Client Satisfaction',
      },
    ],
  };

  // Add JSON-LD Review schema markup for Luton review (no aggregateRating)
  useEffect(() => {
    const scriptId = 'luton-review-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: lutonReview.name,
        },
        datePublished: lutonReview.dateIso,
        reviewBody: lutonReview.reviewText,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: lutonReview.rating,
          bestRating: 5,
          worstRating: 1,
        },
        itemReviewed: {
          '@type': 'ProfessionalService',
          name: 'Jewels SEO',
          image: 'https://i.postimg.cc/6qsCDSsj/photo-5927181862533009600-w-%282%29.jpg',
          email: 'joseprecious21@gmail.com',
          priceRange: 'Request a Custom Quote',
        },
      };
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [lutonReview]);

  // Replay animation for Treasure card
  const handleReplayAnimation = () => {
    setAnimKey((prev) => prev + 1);
  };

  // 3D card tilt handler for Treasure card
  const handleTreasureMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!treasureCardRef.current) return;
    const rect = treasureCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTreasureMousePos({ x, y });
  };

  const handleOpenLightbox = (
    imageUrl: string,
    imageAlt: string,
    title: string,
    trigger: HTMLElement | null
  ) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      imageAlt,
      title,
      triggerElement: trigger,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  // Auto rotate through questions every 6.5s if not hovering
  useEffect(() => {
    if (isTreasureHovered) return;
    const timer = setInterval(() => {
      setActiveQuestion((prev) => (prev + 1) % treasureReview.questions.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isTreasureHovered, treasureReview.questions.length]);

  const treasureRotateX = isTreasureHovered ? (treasureMousePos.y - 0.5) * -6 : 0;
  const treasureRotateY = isTreasureHovered ? (treasureMousePos.x - 0.5) * 6 : 0;

  return (
    <div className="pt-28 sm:pt-36 min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--charcoal)] border border-[var(--graphite)] text-xs text-[var(--gold)] mb-6">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Client Experience</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-[var(--white)] mb-6">
          Client Reviews
        </h1>

        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed font-light">
          Feedback from clients Jewels has worked with.
        </p>
      </section>

      {/* 2. REVIEW CARDS GRID (Responsive, 1 col mobile, designed to hold multiple reviews) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* ============================================================ */}
          {/* CARD 1: TREASURE NOBEL (Existing review card with animated/screenshot toggle) */}
          {/* ============================================================ */}
          <article className="p-6 sm:p-8 rounded-3xl bg-[var(--charcoal)] border border-[var(--graphite)] hover:border-[var(--gold)]/60 hover:-translate-y-1 transition-all duration-300 shadow-2xl flex flex-col justify-between motion-reduce:transform-none motion-reduce:transition-none group">
            
            {/* Header: Name, Service Tag, 5.0 Star Rating */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-[var(--graphite)]">
              <div>
                <h2 className="text-2xl font-heading font-medium text-[var(--white)] tracking-tight">
                  {treasureReview.reviewerName}
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-mono">
                  <span className="text-[var(--gold)]">
                    {treasureReview.role}
                  </span>
                  <span className="text-[var(--graphite)]">·</span>
                  <span className="text-[var(--muted)]">
                    Sector: {treasureReview.sector}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <div 
                  className="flex items-center gap-1"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" 
                      aria-hidden="true" 
                    />
                  ))}
                </div>
                <span className="text-xs font-mono text-[var(--muted)]">
                  <strong className="text-[var(--white)]">5.0</strong> / 5.0
                </span>
              </div>
            </div>

            {/* View Toggle on Treasure Card (Animated Form vs Screenshot Frame) */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Review Details</span>
              </span>

              <div className="inline-flex items-center p-1 rounded-lg bg-[var(--black)] border border-[var(--graphite)] text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setTreasureViewMode('animated')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    treasureViewMode === 'animated'
                      ? 'bg-[var(--gold)] text-[var(--black)] font-semibold'
                      : 'text-[var(--muted)] hover:text-[var(--white)]'
                  }`}
                >
                  Interactive
                </button>
                <button
                  type="button"
                  onClick={() => setTreasureViewMode('screenshot')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    treasureViewMode === 'screenshot'
                      ? 'bg-[var(--gold)] text-[var(--black)] font-semibold'
                      : 'text-[var(--muted)] hover:text-[var(--white)]'
                  }`}
                >
                  Screenshot
                </button>
              </div>
            </div>

            {/* Content Area: Animated Interactive View OR Screenshot Frame */}
            {treasureViewMode === 'animated' ? (
              <div
                key={animKey}
                ref={treasureCardRef}
                onMouseMove={handleTreasureMouseMove}
                onMouseEnter={() => setIsTreasureHovered(true)}
                onMouseLeave={() => {
                  setIsTreasureHovered(false);
                  setTreasureMousePos({ x: 0.5, y: 0.5 });
                }}
                style={{
                  transform: `perspective(1000px) rotateX(${treasureRotateX}deg) rotateY(${treasureRotateY}deg)`,
                  transition: isTreasureHovered ? 'transform 0.12s ease-out' : 'transform 0.4s ease-out',
                }}
                className="relative rounded-2xl bg-[var(--black)] border border-[var(--gold)]/40 p-5 sm:p-6 overflow-hidden motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* Metrics Breakdown Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {treasureReview.metrics.map((m, idx) => (
                    <div key={m.label} className="p-2.5 rounded-lg bg-[var(--charcoal)] border border-[var(--graphite)]">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[var(--muted)] mb-1">
                        <span>{m.label}</span>
                        <span className="text-[var(--white)] font-semibold">5.0</span>
                      </div>
                      <div className="w-full h-1 bg-[#1F1F1F] rounded-full overflow-hidden mb-1">
                        <div
                          className="h-full bg-[var(--gold)] rounded-full transition-all duration-700"
                          style={{ width: '100%', transitionDelay: `${idx * 100}ms` }}
                        />
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} className="w-2.5 h-2.5 fill-[var(--gold)] text-[var(--gold)]" aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Q&A Navigation Tabs */}
                <div className="grid grid-cols-3 gap-1.5 mb-4">
                  {treasureReview.questions.map((q, idx) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setActiveQuestion(idx)}
                      className={`p-2 rounded-lg text-left text-[11px] font-mono transition-colors cursor-pointer ${
                        activeQuestion === idx
                          ? 'bg-[var(--charcoal)] border border-[var(--gold)] text-[var(--white)]'
                          : 'bg-[var(--charcoal)]/50 border border-[var(--graphite)] text-[var(--muted)] hover:text-[var(--white)]'
                      }`}
                    >
                      <span className="truncate block font-medium">{q.title}</span>
                    </button>
                  ))}
                </div>

                {/* Active Q&A Text */}
                <div className="p-4 rounded-xl bg-[var(--charcoal)] border border-[var(--graphite)] min-h-[140px] flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[var(--gold)] block mb-1.5">
                      {treasureReview.questions[activeQuestion].question}
                    </span>
                    <blockquote className="text-sm font-heading italic text-[var(--white)] leading-relaxed pl-3 border-l-2 border-[var(--gold)]">
                      “{treasureReview.questions[activeQuestion].answer}”
                    </blockquote>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#1F1F1F] flex items-center justify-between text-[10px] font-mono text-[var(--muted)]">
                    <span>Verified Client Feedback</span>
                    <button
                      type="button"
                      onClick={handleReplayAnimation}
                      className="text-[var(--gold)] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-2.5 h-2.5" />
                      <span>Replay</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Screenshot Frame */
              <div className="mb-4">
                {treasureImageFailed ? (
                  <div className="w-full aspect-[16/7] rounded-xl bg-[var(--black)] border border-[var(--gold)]/40 flex flex-col items-center justify-center p-6 text-center">
                    <ImageIcon className="w-8 h-8 text-[var(--gold)]/70 mb-2" />
                    <span className="font-mono text-xs text-[var(--gold)] font-medium tracking-wide">
                      Review image coming soon
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    ref={treasureTriggerRef}
                    onClick={() =>
                      handleOpenLightbox(
                        treasureReview.imageUrl,
                        treasureReview.imageAlt,
                        `Review by ${treasureReview.reviewerName}`,
                        treasureTriggerRef.current
                      )
                    }
                    aria-label={`Enlarge 5-star review from ${treasureReview.reviewerName} for Jewels`}
                    className="relative w-full aspect-[16/7] rounded-xl overflow-hidden bg-[var(--black)] border border-[var(--gold)] p-2 flex items-center justify-center cursor-pointer group/img focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] shadow-lg"
                  >
                    <img
                      src={treasureReview.imageUrl}
                      alt={treasureReview.imageAlt}
                      width={995}
                      height={383}
                      loading="lazy"
                      onError={(e) => {
                        const currentSrc = (e.currentTarget as HTMLImageElement).src;
                        if (!currentSrc.includes('postimg')) {
                          (e.currentTarget as HTMLImageElement).src = treasureReview.fallbackImageUrl;
                        } else {
                          setTreasureImageFailed(true);
                        }
                      }}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover/img:scale-[1.01] motion-reduce:transform-none select-none"
                    />
                    <div className="absolute bottom-2 right-2 opacity-90 group-hover/img:opacity-100 transition-opacity bg-black/80 text-[var(--gold)] text-[10px] font-mono px-2 py-1 rounded border border-[var(--gold)]/40 flex items-center gap-1 backdrop-blur-sm">
                      <Maximize2 className="w-3 h-3" />
                      <span>Enlarge</span>
                    </div>
                  </button>
                )}
              </div>
            )}

            {/* Card Footer */}
            <div className="pt-4 mt-4 border-t border-[var(--graphite)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
              <span>Review: Treasure Nobel</span>
              <button
                type="button"
                onClick={() =>
                  handleOpenLightbox(
                    treasureReview.imageUrl,
                    treasureReview.imageAlt,
                    `Review by ${treasureReview.reviewerName}`,
                    treasureTriggerRef.current
                  )
                }
                className="text-[var(--gold)] hover:text-[var(--gold-hover)] transition-colors cursor-pointer inline-flex items-center gap-1"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Full view</span>
              </button>
            </div>

          </article>


          {/* ============================================================ */}
          {/* CARD 2: LUTON (New review card matching exact layout specifications) */}
          {/* ============================================================ */}
          <article className="p-6 sm:p-8 rounded-3xl bg-[var(--charcoal)] border border-[var(--graphite)] hover:border-[var(--gold)]/60 hover:-translate-y-1 transition-all duration-300 shadow-2xl flex flex-col justify-between motion-reduce:transform-none motion-reduce:transition-none group">
            
            <div>
              {/* 1. Review Image in Gold-Bordered (var(--gold)) Frame with object-fit: contain */}
              <div className="mb-6">
                {lutonImageFailed ? (
                  <div className="w-full aspect-[1200/864] rounded-xl bg-[var(--black)] border border-[var(--gold)]/40 flex flex-col items-center justify-center p-8 text-center">
                    <ImageIcon className="w-10 h-10 text-[var(--gold)]/70 mb-3" />
                    <span className="font-mono text-sm text-[var(--gold)] font-medium tracking-wide">
                      Review image coming soon
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    ref={lutonTriggerRef}
                    onClick={() =>
                      handleOpenLightbox(
                        lutonReview.imageUrl,
                        lutonReview.imageAlt,
                        'Review from Luton · Clinic',
                        lutonTriggerRef.current
                      )
                    }
                    aria-label="Enlarge 4.5-star review from Luton for Jewels AEO and GEO optimization"
                    className="relative w-full aspect-[1200/864] rounded-xl overflow-hidden bg-[var(--black)] border border-[var(--gold)] p-2 flex items-center justify-center cursor-pointer group/img focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] shadow-xl"
                  >
                    <img
                      src={lutonReview.imageUrl}
                      alt={lutonReview.imageAlt}
                      width={lutonReview.width}
                      height={lutonReview.height}
                      loading="lazy"
                      onError={(e) => {
                        const currentSrc = (e.currentTarget as HTMLImageElement).src;
                        if (!currentSrc.includes('postimg')) {
                          (e.currentTarget as HTMLImageElement).src = lutonReview.fallbackImageUrl;
                        } else {
                          setLutonImageFailed(true);
                        }
                      }}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover/img:scale-[1.01] motion-reduce:transform-none select-none"
                    />

                    {/* Enlarge Overlay Indicator */}
                    <div className="absolute bottom-3 right-3 opacity-90 group-hover/img:opacity-100 transition-opacity bg-black/80 text-[var(--gold)] text-xs font-mono px-3 py-1.5 rounded-lg border border-[var(--gold)]/50 flex items-center gap-1.5 backdrop-blur-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to Enlarge</span>
                    </div>
                  </button>
                )}
              </div>

              {/* 3. Under the Image: Name, Tags, 4.5 Stars SVG, and Date */}
              <div className="space-y-4">
                
                {/* Reviewer Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--graphite)]">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[var(--white)] tracking-tight">
                      {lutonReview.name}
                    </h2>
                    
                    {/* Tags: Clinic & AEO and GEO optimization */}
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--black)] border border-[var(--graphite)] text-[var(--muted)]">
                        {lutonReview.business}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--black)] border border-[var(--gold)]/40 text-[var(--gold)]">
                        {lutonReview.serviceTag}
                      </span>
                    </div>
                  </div>

                  {/* 4.5 Gold Stars (four full stars and one half star) & Review Date */}
                  <div className="flex flex-col items-end gap-1.5">
                    <div
                      className="flex items-center gap-1"
                      aria-label="Rated 4.5 out of 5 stars"
                    >
                      {/* Four Full Gold Stars */}
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={`luton-full-${i}`}
                          viewBox="0 0 24 24"
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-[var(--gold)] text-[var(--gold)]"
                          aria-hidden="true"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}

                      {/* One Half Gold Star drawn as SVG */}
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)]"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient id="luton-half-star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="50%" stopColor="var(--gold)" />
                            <stop offset="50%" stopColor="var(--graphite)" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          fill="url(#luton-half-star-gradient)"
                          stroke="var(--gold)"
                          strokeWidth="1"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--muted)]">
                      <span className="text-[var(--white)] font-semibold">4.5</span>
                      <span>/ 5</span>
                      <span>·</span>
                      <Calendar className="w-3.5 h-3.5 text-[var(--gold)]" />
                      <span>{lutonReview.date}</span>
                    </div>
                  </div>
                </div>

                {/* 4. Real, Readable HTML Review Text (Collapsible & Search-Engine Readable) */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsLutonReviewOpen(!isLutonReviewOpen)}
                    className="w-full flex items-center justify-between py-2 px-3.5 rounded-lg bg-[var(--black)] border border-[var(--graphite)] hover:border-[var(--gold)]/50 text-xs font-mono text-[var(--muted)] hover:text-[var(--white)] transition-colors cursor-pointer"
                    aria-expanded={isLutonReviewOpen}
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-[var(--gold)]" />
                      <span className="text-[var(--white)] font-medium">
                        {isLutonReviewOpen ? 'Hide written review' : 'Read review text'}
                      </span>
                    </span>
                    <span className="text-[11px] text-[var(--gold)] flex items-center gap-1">
                      <span>{isLutonReviewOpen ? 'Collapse' : 'Expand'}</span>
                      {isLutonReviewOpen ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  {/* Rendered HTML Text (exactly as client wrote it) */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isLutonReviewOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 sm:p-5 rounded-2xl bg-[var(--black)] border border-[var(--graphite)]">
                      <blockquote className="text-sm font-heading italic text-[var(--white)] leading-relaxed pl-3.5 border-l-2 border-[var(--gold)]">
                        “{lutonReview.reviewText}”
                      </blockquote>
                      
                      <div className="mt-3.5 pt-2.5 border-t border-[#1F1F1F] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[var(--muted)]">
                        <span>Reviewer: Luton · {lutonReview.business}</span>
                        <span>Service: {lutonReview.serviceTag}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card Footer: Details & Full view trigger */}
            <div className="pt-4 mt-6 border-t border-[var(--graphite)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
              <span>Review date: {lutonReview.date}</span>
              <button
                type="button"
                onClick={() =>
                  handleOpenLightbox(
                    lutonReview.imageUrl,
                    lutonReview.imageAlt,
                    'Review from Luton · Clinic',
                    lutonTriggerRef.current
                  )
                }
                className="text-[var(--gold)] hover:text-[var(--gold-hover)] transition-colors cursor-pointer inline-flex items-center gap-1"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Full view</span>
              </button>
            </div>

          </article>

        </div>
      </section>

      {/* 3. LEAVE US A REVIEW SECTION */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--graphite)] bg-[var(--black)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] mb-2 block">
              Client Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium text-[var(--white)] mb-3 text-balance">
              Worked with Jewels? Leave us a review
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto font-light leading-relaxed">
              Your feedback helps other businesses find the right SEO partner. You can review Jewels on these platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
            {/* Clutch Review Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[var(--charcoal)] border border-[var(--graphite)] hover:border-[var(--gold)]/50 transition-all flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-6">
                <BrandBadge brand="clutch" badgeSize="lg" />
                <div>
                  <h3 className="text-lg font-heading font-semibold text-[var(--white)]">
                    Clutch
                  </h3>
                  <p className="text-xs font-mono text-[var(--muted)]">
                    B2B Platform
                  </p>
                </div>
              </div>
              <a
                href={CONTACT_DETAILS.CLUTCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Review Jewels on Clutch (opens in a new tab)"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--black)] font-semibold text-xs tracking-wider uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] cursor-pointer active:scale-95"
              >
                <span>Review us on Clutch</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Sortlist Review Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[var(--charcoal)] border border-[var(--graphite)] hover:border-[var(--gold)]/50 transition-all flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-6">
                <BrandBadge brand="sortlist" badgeSize="lg" />
                <div>
                  <h3 className="text-lg font-heading font-semibold text-[var(--white)]">
                    Sortlist
                  </h3>
                  <p className="text-xs font-mono text-[var(--muted)]">
                    Service Platform
                  </p>
                </div>
              </div>
              <a
                href={CONTACT_DETAILS.SORTLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Review Jewels on Sortlist (opens in a new tab)"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--black)] font-semibold text-xs tracking-wider uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] cursor-pointer active:scale-95"
              >
                <span>Review us on Sortlist</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Platform note under buttons */}
          <p className="text-xs text-center text-[var(--muted)] font-light leading-relaxed max-w-xl mx-auto">
            You will be taken to the platform&apos;s own website. Each platform has its own review process.
          </p>
        </div>
      </section>

      {/* 4. CTA BAND AT BOTTOM */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--graphite)] bg-[var(--black)] overflow-hidden text-center">
        
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-[var(--white)] mb-4 text-balance">
            Want results like these?
          </h2>

          <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Discuss your website goals, review organic search visibility opportunities, and receive a tailored quote for your business.
          </p>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--black)] font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[var(--gold)]/15 hover:shadow-[var(--gold)]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] cursor-pointer active:scale-[0.98]"
          >
            <span>Request an SEO Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightboxState.imageUrl}
        imageAlt={lightboxState.imageAlt}
        title={lightboxState.title}
        triggerElement={lightboxState.triggerElement}
      />

    </div>
  );
};
