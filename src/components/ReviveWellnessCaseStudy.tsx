import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Sparkles, CheckCircle2, ArrowLeftRight, Maximize2, 
  Image as ImageIcon, SlidersHorizontal, Columns2, ArrowRight
} from 'lucide-react';
import { PageId } from '../types';

interface ReviveWellnessCaseStudyProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenLightbox: (imageUrl: string, imageAlt: string, title: string, trigger: HTMLElement | null) => void;
  isActive?: boolean;
}

const BEFORE_IMAGE_URL = 'https://i.postimg.cc/jqkG1SRB/IMG-20251111-WA0002-Copy.jpg';
const AFTER_IMAGE_URL = 'https://i.postimg.cc/hvJ3nVKN/Screenshot-2026-03-02-08-31-55-437-com-android-chrome-%281%29.jpg';

const BEFORE_ALT = 'Revive Wellness Google Business Profile before verification';
const AFTER_ALT = 'Revive Wellness Google Business Profile after verification';

export const ReviveWellnessCaseStudy: React.FC<ReviveWellnessCaseStudyProps> = ({
  onNavigate,
  onOpenLightbox,
  isActive = false,
}) => {
  // View mode toggle: 'side-by-side' (default) or 'slider'
  const [viewMode, setViewMode] = useState<'side-by-side' | 'slider'>('side-by-side');

  // Image load error fallbacks
  const [beforeError, setBeforeError] = useState(false);
  const [afterError, setAfterError] = useState(false);

  // Comparison slider position (percentage 0 to 100, default 50)
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(800);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const beforeTriggerRef = useRef<HTMLDivElement | null>(null);
  const afterTriggerRef = useRef<HTMLDivElement | null>(null);

  // Track container width for 1:1 image alignment inside clipped before-layer
  useEffect(() => {
    if (!sliderRef.current) return;
    const updateWidth = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.clientWidth);
      }
    };
    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });
    resizeObserver.observe(sliderRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [viewMode]);

  // Pointer position updater
  const updatePositionFromClientX = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  // Pointer down on slider
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore if pointer capture already lost
    }
  };

  // Keyboard navigation for slider (arrow keys, home, end)
  const handleSliderKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <article
      id="revive-wellness"
      tabIndex={-1}
      className={`p-6 sm:p-10 lg:p-12 rounded-2xl bg-[var(--card)] border transition-all duration-300 motion-reduce:transition-none ${
        isActive
          ? 'border-[var(--gold)] ring-2 ring-[var(--gold)]/40 shadow-xl shadow-[var(--gold)]/10'
          : 'border-[var(--line)] hover:border-[var(--gold)]/50'
      }`}
    >
      {/* 1. HEADING: "Revive Wellness" with a gold tag "Google Business Profile" */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[var(--line)]">
        <div>
          <span className="text-xs font-mono text-[var(--gold)] block mb-1">
            Verified Project Showcase · Local Search Verification
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--white)]">
            Revive Wellness
          </h2>
        </div>
        <span className="px-3 py-1 rounded text-xs font-mono font-medium bg-[var(--gold)]/10 border border-[var(--gold)] text-[var(--gold)] w-fit">
          Google Business Profile
        </span>
      </div>

      {/* 2. SHORT OVERVIEW LINE */}
      <div className="py-6 border-b border-[var(--line)]">
        <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
          Project Overview
        </h3>
        <p className="text-base text-[var(--white)] font-light leading-relaxed max-w-4xl">
          Google Business Profile verification for Revive Wellness, shown before and after.
        </p>
      </div>

      {/* 3. BEFORE-AND-AFTER BLOCK */}
      <div className="pt-8 pb-4">
        {/* Toggle between "Side by side" and "Slider" */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--gold)]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--white)] font-medium">
              Profile Verification Comparison
            </span>
          </div>

          <div 
            role="tablist" 
            aria-label="Comparison display options"
            className="inline-flex items-center p-1 rounded-xl bg-[var(--ink)] border border-[var(--line)] self-start sm:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'side-by-side'}
              onClick={() => setViewMode('side-by-side')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                viewMode === 'side-by-side'
                  ? 'bg-[var(--gold)] text-[var(--ink)] shadow-md shadow-[var(--gold)]/20 font-semibold'
                  : 'text-[var(--muted)] hover:text-[var(--white)]'
              }`}
            >
              <Columns2 className="w-3.5 h-3.5" />
              <span>Side by side</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'slider'}
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-[var(--gold)] text-[var(--ink)] shadow-md shadow-[var(--gold)]/20 font-semibold'
                  : 'text-[var(--muted)] hover:text-[var(--white)]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Slider</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: SIDE BY SIDE (Desktop: 2 cols side-by-side, Mobile: stacked) */}
        {viewMode === 'side-by-side' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Image: Before verification (Red #EA4335 label) */}
            <div className="rounded-xl border border-[#C9A227] bg-[#141414] p-4 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--line)]">
                  <span className="px-2.5 py-1 rounded bg-[#EA4335]/15 border border-[#EA4335] text-[#EA4335] text-xs font-mono font-semibold">
                    Before verification
                  </span>
                  <span className="text-[11px] font-mono text-[var(--muted)]">Initial Status</span>
                </div>

                {/* Frame: object-fit: contain so no detail is cropped */}
                <div
                  tabIndex={0}
                  role="button"
                  ref={beforeTriggerRef}
                  aria-label="View full image of Revive Wellness before verification in lightbox"
                  onClick={(e) => {
                    if (!beforeError) {
                      onOpenLightbox(BEFORE_IMAGE_URL, BEFORE_ALT, 'Revive Wellness — Before verification', e.currentTarget as HTMLElement);
                    }
                  }}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !beforeError) {
                      e.preventDefault();
                      onOpenLightbox(BEFORE_IMAGE_URL, BEFORE_ALT, 'Revive Wellness — Before verification', e.currentTarget as HTMLElement);
                    }
                  }}
                  className="relative h-[360px] sm:h-[460px] md:h-[520px] rounded-lg bg-[#0A0A0A] overflow-hidden flex items-center justify-center group cursor-pointer border border-[var(--line)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
                >
                  {!beforeError ? (
                    <img
                      src={BEFORE_IMAGE_URL}
                      alt={BEFORE_ALT}
                      width={800}
                      height={1200}
                      loading="lazy"
                      onError={() => setBeforeError(true)}
                      className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none select-none"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#141414] text-[#C9A227] p-6 text-center border border-[#C9A227]/30">
                      <ImageIcon className="w-10 h-10 mb-2 opacity-80" />
                      <span className="font-mono text-xs font-semibold">Add screenshot here</span>
                    </div>
                  )}

                  {!beforeError && (
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/85 text-[var(--gold)] text-[10px] font-mono px-2 py-1 rounded border border-[#C9A227]/40 flex items-center gap-1 backdrop-blur-sm pointer-events-none">
                      <Maximize2 className="w-3 h-3" />
                      <span>Click to enlarge</span>
                    </div>
                  )}
                </div>
              </div>

              {/* View full image link */}
              {!beforeError && (
                <div className="pt-3 mt-3 border-t border-[var(--line)] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => onOpenLightbox(BEFORE_IMAGE_URL, BEFORE_ALT, 'Revive Wellness — Before verification', e.currentTarget)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--gold)] hover:text-[var(--gold-hover)] transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View full image</span>
                  </button>
                  <span className="text-[11px] font-mono text-[var(--muted)]">100% uncropped</span>
                </div>
              )}
            </div>

            {/* Right Image: After verification (Green #34A853 label) */}
            <div className="rounded-xl border border-[#C9A227] bg-[#141414] p-4 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--line)]">
                  <span className="px-2.5 py-1 rounded bg-[#34A853]/15 border border-[#34A853] text-[#34A853] text-xs font-mono font-semibold">
                    After verification
                  </span>
                  <span className="text-[11px] font-mono text-[#34A853] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Listing
                  </span>
                </div>

                {/* Frame: object-fit: contain so no detail is cropped */}
                <div
                  tabIndex={0}
                  role="button"
                  ref={afterTriggerRef}
                  aria-label="View full image of Revive Wellness after verification in lightbox"
                  onClick={(e) => {
                    if (!afterError) {
                      onOpenLightbox(AFTER_IMAGE_URL, AFTER_ALT, 'Revive Wellness — After verification', e.currentTarget as HTMLElement);
                    }
                  }}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !afterError) {
                      e.preventDefault();
                      onOpenLightbox(AFTER_IMAGE_URL, AFTER_ALT, 'Revive Wellness — After verification', e.currentTarget as HTMLElement);
                    }
                  }}
                  className="relative h-[360px] sm:h-[460px] md:h-[520px] rounded-lg bg-[#0A0A0A] overflow-hidden flex items-center justify-center group cursor-pointer border border-[var(--line)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
                >
                  {!afterError ? (
                    <img
                      src={AFTER_IMAGE_URL}
                      alt={AFTER_ALT}
                      width={800}
                      height={1200}
                      loading="lazy"
                      onError={() => setAfterError(true)}
                      className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none select-none"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#141414] text-[#C9A227] p-6 text-center border border-[#C9A227]/30">
                      <ImageIcon className="w-10 h-10 mb-2 opacity-80" />
                      <span className="font-mono text-xs font-semibold">Add screenshot here</span>
                    </div>
                  )}

                  {!afterError && (
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/85 text-[var(--gold)] text-[10px] font-mono px-2 py-1 rounded border border-[#C9A227]/40 flex items-center gap-1 backdrop-blur-sm pointer-events-none">
                      <Maximize2 className="w-3 h-3" />
                      <span>Click to enlarge</span>
                    </div>
                  )}
                </div>
              </div>

              {/* View full image link */}
              {!afterError && (
                <div className="pt-3 mt-3 border-t border-[var(--line)] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => onOpenLightbox(AFTER_IMAGE_URL, AFTER_ALT, 'Revive Wellness — After verification', e.currentTarget)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--gold)] hover:text-[var(--gold-hover)] transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View full image</span>
                  </button>
                  <span className="text-[11px] font-mono text-[#34A853]">Live on Google</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIEW 2: DRAGGABLE COMPARISON SLIDER */}
        {viewMode === 'slider' && (
          <div className="space-y-3">
            <div
              ref={sliderRef}
              tabIndex={0}
              role="slider"
              aria-label="Comparison slider: Left is Before verification, Right is After verification. Use arrow keys to slide."
              aria-valuenow={Math.round(sliderPos)}
              aria-valuemin={0}
              aria-valuemax={100}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onKeyDown={handleSliderKeyDown}
              className="relative w-full h-[400px] sm:h-[500px] md:h-[580px] rounded-xl border border-[#C9A227] bg-[#141414] overflow-hidden select-none cursor-ew-resize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] shadow-xl touch-none"
            >
              {/* After Image Layer (Underneath / Right side) */}
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-5 bg-[#141414]">
                {!afterError ? (
                  <img
                    src={AFTER_IMAGE_URL}
                    alt={AFTER_ALT}
                    width={800}
                    height={1200}
                    loading="lazy"
                    onError={() => setAfterError(true)}
                    className="max-h-full max-w-full w-auto h-auto object-contain pointer-events-none select-none"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-[#C9A227]">
                    <ImageIcon className="w-8 h-8 mb-2" />
                    <span className="font-mono text-xs">Add screenshot here</span>
                  </div>
                )}
              </div>

              {/* Before Image Layer (Clipped to sliderPos width / Left side) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden bg-[#141414] pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <div
                  className="absolute inset-y-0 left-0 flex items-center justify-center p-3 sm:p-5"
                  style={{ width: `${containerWidth}px`, height: '100%' }}
                >
                  {!beforeError ? (
                    <img
                      src={BEFORE_IMAGE_URL}
                      alt={BEFORE_ALT}
                      width={800}
                      height={1200}
                      loading="lazy"
                      onError={() => setBeforeError(true)}
                      className="max-h-full max-w-full w-auto h-auto object-contain pointer-events-none select-none"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-[#C9A227]">
                      <ImageIcon className="w-8 h-8 mb-2" />
                      <span className="font-mono text-xs">Add screenshot here</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Divider Line & Interactive Handle */}
              <div
                className="absolute inset-y-0 pointer-events-none z-20 flex items-center justify-center"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-0.5 h-full bg-[#C9A227] shadow-[0_0_12px_rgba(201,162,39,0.9)]" />
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0A0A0A] border-2 border-[#C9A227] text-[#C9A227] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 motion-reduce:transform-none"
                  title="Drag left/right or use keyboard arrow keys"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Badges on the slider corners */}
              <span className="absolute top-3 left-3 z-30 px-2.5 py-1 rounded bg-[#EA4335]/90 border border-[#EA4335] text-white text-xs font-mono font-semibold shadow-md backdrop-blur-sm pointer-events-none">
                Before verification
              </span>
              <span className="absolute top-3 right-3 z-30 px-2.5 py-1 rounded bg-[#34A853]/90 border border-[#34A853] text-white text-xs font-mono font-semibold shadow-md backdrop-blur-sm pointer-events-none">
                After verification
              </span>
            </div>

            {/* Slider Controls / Lightbox helpers */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-1 pt-1 text-xs font-mono">
              <button
                type="button"
                onClick={(e) => onOpenLightbox(BEFORE_IMAGE_URL, BEFORE_ALT, 'Revive Wellness — Before verification', e.currentTarget)}
                className="inline-flex items-center gap-1.5 text-[#EA4335] hover:underline cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View full Before image</span>
              </button>

              <span className="text-[var(--muted)] text-[11px] text-center hidden sm:inline">
                Drag divider or use ← → arrow keys to compare
              </span>

              <button
                type="button"
                onClick={(e) => onOpenLightbox(AFTER_IMAGE_URL, AFTER_ALT, 'Revive Wellness — After verification', e.currentTarget)}
                className="inline-flex items-center gap-1.5 text-[#34A853] hover:underline cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View full After image</span>
              </button>
            </div>
          </div>
        )}

        {/* 5. CAPTION UNDER THE IMAGES */}
        <p className="mt-5 text-xs font-mono text-[var(--muted)] leading-relaxed">
          Google Business Profile status before and after verification.
        </p>
      </div>

      {/* 6. WHAT WAS DONE */}
      <div className="py-6 border-t border-[var(--line)]">
        <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-3">
          What was done
        </h3>
        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[var(--ink)] border border-[var(--line)] text-sm text-[var(--white)] font-light">
          <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0" />
          <span>Google Business Profile verification.</span>
        </div>
      </div>

      {/* 7. CTA AT THE END OF THE CASE STUDY */}
      <div className="mt-6 pt-6 border-t border-[var(--line)]">
        <div className="p-6 sm:p-8 rounded-xl bg-[var(--ink)] border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h4 className="text-lg font-serif font-medium text-[var(--white)] mb-1">
              Need help verifying your Google Business Profile?
            </h4>
            <p className="text-xs text-[var(--muted)] font-light">
              Get direct assistance with ownership verification, reinstatement support, and Google Maps listing setup.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact', 'google-business-profile')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--gold)] text-[var(--ink)] font-semibold text-xs tracking-wider uppercase hover:bg-[var(--gold-hover)] transition-all duration-200 shadow-md shadow-[var(--gold)]/20 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] shrink-0"
          >
            <span>Request an SEO Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};
