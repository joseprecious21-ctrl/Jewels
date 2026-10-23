import React, { useState, useRef, useEffect } from 'react';
import { 
  Star, Maximize2, Image as ImageIcon, ArrowRight, Sparkles, 
  RotateCcw, CheckCircle2, TrendingUp, MessageSquare, 
  Eye, FileCheck, Layers, Award
} from 'lucide-react';
import { PageId } from '../types';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'animated' | 'screenshot'>('animated');
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [animKey, setAnimKey] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [imageFailed, setImageFailed] = useState(false);

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

  const cardRef = useRef<HTMLDivElement | null>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  // Review data faithfully matching the verified review screenshot
  const reviewData = {
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

  // Replay animation by bumping key
  const handleReplayAnimation = () => {
    setAnimKey((prev) => prev + 1);
  };

  // 3D card tilt handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };

  const handleOpenLightbox = (trigger: HTMLElement | null) => {
    setLightboxState({
      isOpen: true,
      imageUrl: reviewData.imageUrl,
      imageAlt: reviewData.imageAlt,
      title: `Client Review: ${reviewData.reviewerName}`,
      triggerElement: trigger,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  // Auto rotate through questions every 6 seconds if user is not actively hovering
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveQuestion((prev) => (prev + 1) % reviewData.questions.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isHovered, reviewData.questions.length]);

  // Dynamic 3D tilt calculation
  const rotateX = isHovered ? (mousePos.y - 0.5) * -7 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 7 : 0;

  return (
    <div className="pt-28 sm:pt-36 min-h-screen bg-[#0A0A0A] text-[#FFFFFF]">
      
      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs text-[#C9A227] mb-6">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Client Experience</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#FFFFFF] mb-6">
          Client Reviews
        </h1>

        <p className="text-base sm:text-lg text-[#A8A8A8] max-w-2xl mx-auto leading-relaxed font-light mb-8">
          Feedback from clients Jewels has worked with.
        </p>

        {/* View Switcher: Animated Interactive Form vs Original Screenshot */}
        <div className="inline-flex items-center p-1.5 rounded-xl bg-[#141414] border border-[#2A2A2A] shadow-lg text-xs font-mono">
          <button
            type="button"
            onClick={() => setViewMode('animated')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all cursor-pointer ${
              viewMode === 'animated'
                ? 'bg-[#C9A227] text-[#0A0A0A] font-semibold shadow-md'
                : 'text-[#A8A8A8] hover:text-[#FFFFFF]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Animated Form</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('screenshot')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all cursor-pointer ${
              viewMode === 'screenshot'
                ? 'bg-[#C9A227] text-[#0A0A0A] font-semibold shadow-md'
                : 'text-[#A8A8A8] hover:text-[#FFFFFF]'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Original Screenshot</span>
          </button>
        </div>
      </section>

      {/* 2. MAIN REVIEW SHOWCASE (ANIMATED FORM & INTERACTIVE EXPERIENCE) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-24">
        
        {viewMode === 'animated' ? (
          <div
            key={animKey}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.5s ease-out',
            }}
            className="relative rounded-3xl bg-[#141414] border border-[#C9A227]/40 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden motion-reduce:transform-none motion-reduce:transition-none group"
          >
            {/* Ambient Gold Radial Glow Behind Card */}
            <div 
              className="absolute -top-32 -right-32 w-80 h-80 bg-[#C9A227]/15 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100" 
              aria-hidden="true" 
            />
            <div 
              className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-[100px] pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Top Row: Reviewer Avatar, Credentials, Overall Score, Replay Controls */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#2A2A2A]">
              
              {/* Reviewer Identity with animated border badge */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-[#D6EAD7] to-[#A3D1A7] text-[#1B4324] font-bold font-serif text-2xl flex items-center justify-center shadow-lg shadow-emerald-950/30 shrink-0 select-none">
                    TN
                  </div>
                  {/* Subtle pulsing live indicator */}
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#34A853] border-2 border-[#141414] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping opacity-75" />
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#FFFFFF] tracking-tight">
                      {reviewData.reviewerName}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#C9A227] font-medium mb-2 font-mono">
                    {reviewData.role}
                  </p>
                  
                  {/* Metadata Tags */}
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#A8A8A8]">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0A0A0A] border border-[#2A2A2A]">
                      Service: <span className="text-[#FFFFFF]">{reviewData.service}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0A0A0A] border border-[#2A2A2A]">
                      Sector: <span className="text-[#FFFFFF]">{reviewData.sector}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0A0A0A] border border-[#2A2A2A]">
                      Team: <span className="text-[#FFFFFF]">{reviewData.teamSize}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating Showcase Badge & Animation Replayer */}
              <div className="flex items-center justify-between md:flex-col md:items-end gap-3 shrink-0">
                
                {/* 5.0 Star Block */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0A0A0A] border border-[#C9A227]/50 shadow-inner flex flex-col items-center sm:items-end">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#FFFFFF]">5.0</span>
                    <span className="text-sm font-mono text-[#A8A8A8]">/ 5.0</span>
                  </div>

                  {/* 5 Gold Stars with staggered shine animation */}
                  <div 
                    className="flex items-center gap-1"
                    aria-label="Rated 5 out of 5 stars"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C9A227] text-[#C9A227] animate-in zoom-in duration-300"
                        style={{ animationDelay: `${i * 120}ms` }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                {/* Quick actions: Replay Animation & Inspect Screenshot */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleReplayAnimation}
                    title="Replay star and metric animations"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0A] hover:bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#C9A227] text-[11px] font-mono text-[#A8A8A8] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3 text-[#C9A227]" />
                    <span>Replay</span>
                  </button>

                  <button
                    ref={triggerButtonRef}
                    type="button"
                    onClick={() => handleOpenLightbox(triggerButtonRef.current)}
                    title="Inspect original proof screenshot in full resolution"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0A] hover:bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#C9A227] text-[11px] font-mono text-[#A8A8A8] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                  >
                    <Eye className="w-3 h-3 text-[#C9A227]" />
                    <span>Proof</span>
                  </button>
                </div>

              </div>

            </div>

            {/* Middle Section: Animated Metric Meters Breakdown */}
            <div className="relative z-10 py-8 border-b border-[#2A2A2A]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C9A227] flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Performance Breakdown</span>
                </span>
                <span className="text-xs font-mono text-[#A8A8A8]">100% Top Rating</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {reviewData.metrics.map((metric, idx) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#C9A227]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-[#A8A8A8]">{metric.label}</span>
                      <span className="text-[#FFFFFF] font-semibold">5.0</span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-1.5 bg-[#1F1F1F] rounded-full overflow-hidden mb-2.5">
                      <div
                        className="h-full bg-gradient-to-r from-[#C9A227] to-[#E2C25A] rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: '100%',
                          transitionDelay: `${idx * 150}ms`,
                        }}
                      />
                    </div>

                    <div className="flex items-center gap-0.5">
                      {[...Array(metric.stars)].map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="w-3 h-3 fill-[#C9A227] text-[#C9A227]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section: Interactive Q&A Presentation */}
            <div className="relative z-10 pt-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C9A227] flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Verified Client Feedback Q&A</span>
                </span>
                <span className="text-xs font-mono text-[#A8A8A8]">
                  Step {activeQuestion + 1} of {reviewData.questions.length}
                </span>
              </div>

              {/* Question Navigation Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                {reviewData.questions.map((q, idx) => {
                  const Icon = q.icon;
                  const isActive = activeQuestion === idx;

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setActiveQuestion(idx)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                        isActive
                          ? 'bg-[#0A0A0A] border-[#C9A227] text-[#FFFFFF] shadow-md shadow-[#C9A227]/10'
                          : 'bg-[#0A0A0A]/50 border-[#2A2A2A] text-[#A8A8A8] hover:border-[#C9A227]/40 hover:text-[#FFFFFF]'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-[#C9A227] text-[#0A0A0A]' : 'bg-[#141414] text-[#C9A227]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-medium truncate">{q.title}</div>
                        <div className="text-[10px] font-mono text-[#C9A227] truncate">
                          {q.tag}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Question & Answer Content Panel with smooth fade animation */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A] min-h-[170px] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A227] mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853]" />
                    <span>{reviewData.questions[activeQuestion].question}</span>
                  </div>

                  <p className="text-base sm:text-lg text-[#FFFFFF] font-serif italic leading-relaxed pl-4 border-l-2 border-[#C9A227] py-1 my-3">
                    “{reviewData.questions[activeQuestion].answer}”
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1F1F1F] flex items-center justify-between text-xs font-mono text-[#A8A8A8]">
                  <span>Review by Treasure Nobel · Verified Engagement</span>
                  <div className="flex items-center gap-1.5 text-[#C9A227]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Jewels SEO Collaboration</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar: Quick Switcher to Screenshot */}
            <div className="relative z-10 pt-6 mt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A8A8A8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#34A853]" />
                <span>Faithfully rendered from verified review screenshot</span>
              </div>

              <button
                type="button"
                onClick={() => setViewMode('screenshot')}
                className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#E2C25A] transition-colors cursor-pointer"
              >
                <span>View original review image frame</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ) : (
          /* STATIC SCREENSHOT VIEW (Preserves the exact image frame, gold border, object-contain, and lightbox) */
          <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-[#C9A227] shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#2A2A2A]">
              <div>
                <h3 className="text-xl font-serif font-medium text-[#FFFFFF]">
                  Treasure Nobel
                </h3>
                <p className="text-xs font-mono text-[#C9A227]">
                  Original Verified Review Screenshot
                </p>
              </div>

              <div className="flex items-center gap-1" aria-label="Rated 5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Gold-Bordered Screenshot Frame */}
            {imageFailed ? (
              <div className="w-full aspect-[16/7] rounded-xl bg-[#0A0A0A] border border-[#C9A227]/40 flex flex-col items-center justify-center p-8 text-center">
                <ImageIcon className="w-10 h-10 text-[#C9A227]/70 mb-3" />
                <span className="font-mono text-sm text-[#C9A227] font-medium tracking-wide">
                  Review image coming soon
                </span>
              </div>
            ) : (
              <button
                type="button"
                onClick={(e) => handleOpenLightbox(e.currentTarget)}
                aria-label="Enlarge 5-star review from Treasure Nobel for Jewels"
                className="relative w-full aspect-[16/7] rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#C9A227] p-2 flex items-center justify-center cursor-pointer group/img focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] shadow-xl"
              >
                <img
                  src={reviewData.imageUrl}
                  alt={reviewData.imageAlt}
                  width={995}
                  height={383}
                  loading="lazy"
                  onError={() => {
                    // Try fallback url once, if both fail mark failed
                    const currentSrc = (event?.target as HTMLImageElement)?.src;
                    if (currentSrc && !currentSrc.includes('postimg')) {
                      (event?.target as HTMLImageElement).src = reviewData.fallbackImageUrl;
                    } else {
                      setImageFailed(true);
                    }
                  }}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover/img:scale-[1.01] motion-reduce:transform-none select-none"
                />

                <div className="absolute bottom-3 right-3 opacity-90 group-hover/img:opacity-100 transition-opacity bg-black/80 text-[#C9A227] text-xs font-mono px-3 py-1.5 rounded-lg border border-[#C9A227]/50 flex items-center gap-1.5 backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to Enlarge</span>
                </div>
              </button>
            )}

            <div className="mt-4 pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#A8A8A8]">
              <span>Resolution: 995 x 383 px · Uncropped object-contain</span>
              <button
                type="button"
                onClick={() => setViewMode('animated')}
                className="text-[#C9A227] hover:text-[#E2C25A] transition-colors cursor-pointer inline-flex items-center gap-1.5 font-medium"
              >
                <span>Switch back to Animated Form</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </section>

      {/* 3. CTA BAND AT BOTTOM */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2A2A2A] bg-gradient-to-b from-[#141414] to-[#0A0A0A] overflow-hidden text-center">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#C9A227]/10 blur-[130px] pointer-events-none rounded-full" 
          aria-hidden="true" 
        />
        
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FFFFFF] mb-4 text-balance">
            Want results like these?
          </h2>

          <p className="text-sm sm:text-base text-[#A8A8A8] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Discuss your website goals, review organic search visibility opportunities, and receive a tailored quote for your business.
          </p>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#C9A227] hover:bg-[#E2C25A] text-[#0A0A0A] font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[#C9A227]/15 hover:shadow-[#C9A227]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] cursor-pointer active:scale-[0.98]"
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
