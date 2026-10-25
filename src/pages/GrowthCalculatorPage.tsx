import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, Pause, RotateCcw, Sparkles, CheckCircle2, 
  Layers, ArrowRight, MessageCircle, HelpCircle, ShieldAlert
} from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_DETAILS } from '../data/seoData';
import { BrandIcon } from '../components/BrandIcon';

interface GrowthCalculatorPageProps {
  onNavigate: (page: PageId, extraId?: string) => void;
}

export type TargetRank = 1 | 3 | 10;
export type CompetitionLevel = 'low' | 'medium' | 'high';
export type WebsiteHealth = 'needs-work' | 'average' | 'strong';

export interface FocusArea {
  id: string;
  name: string;
  primaryStage: number; // Stage where this provides maximum lift
  description: string;
}

const FOCUS_AREAS: FocusArea[] = [
  { id: 'on-page', name: 'On-page SEO', primaryStage: 1, description: 'Content structure, metadata, keyword targeting' },
  { id: 'technical', name: 'Technical SEO', primaryStage: 1, description: 'Crawlability, Core Web Vitals, clean architecture' },
  { id: 'local', name: 'Local SEO', primaryStage: 2, description: 'Local citations, geo-relevance, localized pages' },
  { id: 'gbp', name: 'Google Business Profile', primaryStage: 3, description: 'Profile verification, map pack visibility, local categories' },
  { id: 'content', name: 'Content & Topic Authority', primaryStage: 4, description: 'In-depth articles, internal links, search intent match' },
  { id: 'reputation', name: 'Reputation & Reviews', primaryStage: 5, description: 'Review velocity, trust signals, brand sentiment' },
];

interface StageInfo {
  stageNumber: number;
  name: string;
  subtitle: string;
  description: string;
  keyActions: string[];
}

const STAGES: StageInfo[] = [
  {
    stageNumber: 1,
    name: 'Foundation (audit and setup)',
    subtitle: 'Technical health & architecture',
    description: 'Diagnosing technical crawl errors, configuring search console, fixing broken links, and establishing on-page baselines.',
    keyActions: ['Technical SEO audit', 'Site architecture review', 'Search Console verification', 'Baseline crawl correction']
  },
  {
    stageNumber: 2,
    name: 'Indexing and visibility',
    subtitle: 'Search engines discover core assets',
    description: 'Search engines index updated URLs, sitemaps are processed, and initial impressions begin appearing in search console queries.',
    keyActions: ['XML sitemap submission', 'Local schema markup', 'URL indexation audit', 'Keyword impression tracking']
  },
  {
    stageNumber: 3,
    name: 'Page two climb',
    subtitle: 'Breaking out of the deep index',
    description: 'Target pages steadily move past position 30 into pages 2 and 3 as topic relevance and local signals gather weight.',
    keyActions: ['Google Business Profile optimization', 'Targeted internal linking', 'Local citations', 'Snippet click-through refinement']
  },
  {
    stageNumber: 4,
    name: 'Page one entry',
    subtitle: 'Arriving on page one (positions 4–10)',
    description: 'Your primary pages penetrate page one of search results, entering the top 10 search results where organic visitor traffic begins accelerating.',
    keyActions: ['Comprehensive topical content', 'Search intent alignment', 'Mobile speed improvements', 'User engagement signals']
  },
  {
    stageNumber: 5,
    name: 'Top 3 push',
    subtitle: 'Challenging market leaders',
    description: 'Refining page authority, user trust signals, and competitive differentials to challenge incumbent top-three positions.',
    keyActions: ['Review generation cadence', 'Topical depth expansion', 'Entity connection reinforcement', 'Competitor gap closure']
  },
  {
    stageNumber: 6,
    name: 'Holding the top',
    subtitle: 'Defending high visibility',
    description: 'Monitoring algorithm updates, maintaining content freshness, tracking competitor movements, and defending earned ranking positions.',
    keyActions: ['Algorithm update adaptation', 'Continuous content refreshing', 'Search intent monitoring', 'Profile defense']
  }
];

export const GrowthCalculatorPage: React.FC<GrowthCalculatorPageProps> = ({ onNavigate }) => {
  // Inputs state with sensible defaults
  const [isUnranked, setIsUnranked] = useState<boolean>(true);
  const [startRankSlider, setStartRankSlider] = useState<number>(85);
  const [targetRank, setTargetRank] = useState<TargetRank>(3);
  const [competition, setCompetition] = useState<CompetitionLevel>('medium');
  const [health, setHealth] = useState<WebsiteHealth>('average');
  const [selectedFocus, setSelectedFocus] = useState<string[]>([
    'on-page', 'technical', 'gbp'
  ]);

  // Animation playback state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0); // 0 to 1
  const [speed, setSpeed] = useState<number>(1); // 0.5x, 1x, 2x

  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setProgress(1); // Show final state instantly
    }

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setProgress(1);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Compute start rank value (100 for unranked, or slider value)
  const actualStartRank = isUnranked ? 100 : startRankSlider;

  // Calculate illustrative positions across the 6 stages based on parameters
  const calculatedPositions = useMemo(() => {
    const healthBonus = health === 'strong' ? 0.88 : health === 'needs-work' ? 1.15 : 1.0;
    const compFactor = competition === 'high' ? 1.18 : competition === 'low' ? 0.85 : 1.0;
    const focusBonus = Math.max(0.82, 1.0 - (selectedFocus.length * 0.035));

    const target = targetRank;
    const start = actualStartRank;

    const computeStageRank = (fraction: number) => {
      let effectiveFraction = fraction * (1 / compFactor) * (1 / healthBonus) * (1 / focusBonus);
      effectiveFraction = Math.min(0.95, Math.max(0.05, effectiveFraction));

      // Ease in-out interpolation
      const eased = effectiveFraction < 0.5 
        ? 2 * effectiveFraction * effectiveFraction 
        : -1 + (4 - 2 * effectiveFraction) * effectiveFraction;

      const rank = Math.round(start - (start - target) * Math.min(1, Math.max(0, eased)));
      return Math.max(target, Math.min(100, rank));
    };

    const s1 = Math.round(Math.max(target + 12, start > 30 ? start - (start - 35) * 0.15 * (1/compFactor) : start));
    const s2 = computeStageRank(0.32);
    const s3 = computeStageRank(0.58);
    const s4 = computeStageRank(0.82);
    const s5 = target;
    const s6 = target;

    // Enforce monotonic progression: each stage is <= previous stage
    const r1 = Math.min(start, Math.max(target, s1));
    const r2 = Math.min(r1, Math.max(target, s2));
    const r3 = Math.min(r2, Math.max(target, Math.min(22, s3)));
    const r4 = Math.min(r3, Math.max(target, Math.min(10, s4)));
    const r5 = target;
    const r6 = target;

    return [start, r1, r2, r3, r4, r5, r6];
  }, [actualStartRank, targetRank, competition, health, selectedFocus]);

  // Current interpolated position along progress (0 to 1)
  const currentAnimatedRank = useMemo(() => {
    if (progress <= 0) return actualStartRank;
    if (progress >= 1) return targetRank;

    // 5 stage transitions
    const totalSegments = 5;
    const segmentProgress = progress * totalSegments;
    const currentSegmentIndex = Math.min(totalSegments - 1, Math.floor(segmentProgress));
    const segmentFraction = segmentProgress - currentSegmentIndex;

    const pStart = calculatedPositions[currentSegmentIndex];
    const pEnd = calculatedPositions[currentSegmentIndex + 1];

    // Smooth step easing
    const easedFraction = segmentFraction * segmentFraction * (3 - 2 * segmentFraction);
    const rank = Math.round(pStart - (pStart - pEnd) * easedFraction);
    return Math.max(targetRank, Math.min(actualStartRank, rank));
  }, [progress, calculatedPositions, actualStartRank, targetRank]);

  // Active stage determination (0 to 5)
  const currentActiveStageIndex = useMemo(() => {
    if (progress >= 0.98) return 5;
    return Math.min(5, Math.floor(progress * 6));
  }, [progress]);

  // Animation Loop using requestAnimationFrame
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      lastTimeRef.current = null;
      return;
    }

    const baseDurationMs = 13500; // ~13.5s standard duration
    const effectiveDuration = baseDurationMs / speed;

    const step = (timestamp: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      setProgress((prev) => {
        const next = prev + delta / effectiveDuration;
        if (next >= 1) {
          setIsPlaying(false);
          return 1;
        }
        return next;
      });

      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, speed]);

  const handlePlayToggle = () => {
    if (progress >= 1) {
      setProgress(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setIsUnranked(true);
    setStartRankSlider(85);
    setTargetRank(3);
    setCompetition('medium');
    setHealth('average');
    setSelectedFocus(['on-page', 'technical', 'gbp']);
    setSpeed(1);
  };

  const handleFocusToggle = (id: string) => {
    setSelectedFocus((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // SVG Chart Layout Geometry
  const chartWidth = 600;
  const chartHeight = 320;
  const paddingLeft = 65;
  const paddingRight = 45;
  const paddingTop = 40;
  const paddingBottom = 45;

  const getRankY = (rank: number) => {
    const usableH = chartHeight - paddingTop - paddingBottom;
    if (rank <= 1) return paddingTop;
    if (rank <= 10) {
      return paddingTop + ((rank - 1) / 9) * (usableH * 0.35);
    }
    if (rank <= 30) {
      return paddingTop + usableH * 0.35 + ((rank - 10) / 20) * (usableH * 0.30);
    }
    return paddingTop + usableH * 0.65 + ((rank - 30) / 70) * (usableH * 0.35);
  };

  const getStageX = (stageIndex: number) => {
    const usableW = chartWidth - paddingLeft - paddingRight;
    return paddingLeft + (stageIndex / 5) * usableW;
  };

  // Points for SVG path
  const stagePoints = calculatedPositions.slice(0, 6).map((pos, idx) => ({
    x: getStageX(idx),
    y: getRankY(pos)
  }));

  // Create smooth curved SVG path
  const curvePathD = useMemo(() => {
    if (stagePoints.length === 0) return '';
    let d = `M ${stagePoints[0].x} ${stagePoints[0].y}`;
    for (let i = 0; i < stagePoints.length - 1; i++) {
      const p0 = stagePoints[i];
      const p1 = stagePoints[i + 1];
      const mx = (p0.x + p1.x) / 2;
      d += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
    }
    return d;
  }, [stagePoints]);

  // Current dot position along progress
  const currentDotPos = useMemo(() => {
    const totalSegments = 5;
    const progressSeg = progress * totalSegments;
    const segIdx = Math.min(totalSegments - 1, Math.floor(progressSeg));
    const t = progressSeg - segIdx;

    const p0 = stagePoints[segIdx];
    const p1 = stagePoints[segIdx + 1];

    const mx = (p0.x + p1.x) / 2;
    const cx0 = mx;
    const cy0 = p0.y;
    const cx1 = mx;
    const cy1 = p1.y;

    const u = 1 - t;
    const x = u*u*u*p0.x + 3*u*u*t*cx0 + 3*u*t*t*cx1 + t*t*t*p1.x;
    const y = u*u*u*p0.y + 3*u*u*t*cy0 + 3*u*t*t*cy1 + t*t*t*p1.y;

    return { x, y };
  }, [progress, stagePoints]);

  // Milestone zone highlights
  const isPage2Reached = currentAnimatedRank <= 20;
  const isPage1Reached = currentAnimatedRank <= 10;
  const isTop3Reached = currentAnimatedRank <= 3;
  const isRank1Reached = currentAnimatedRank === 1;

  return (
    <div className="pt-28 sm:pt-36 min-h-screen bg-[var(--ink)] text-[var(--white)] selection:bg-[var(--gold)] selection:text-[var(--ink)]">
      
      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--gold)] mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
          <span className="tracking-wide uppercase font-medium text-[11px]">
            Interactive Visibility Model
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[var(--white)] mb-5">
          SEO Growth Calculator
        </h1>

        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed font-light">
          See how search visibility can grow, step by step, from unranked to the top of page one.
        </p>

        {/* TOP MANDATORY DISCLAIMER BOX */}
        <div className="mt-8 p-4 rounded-xl bg-[var(--card)] border border-[var(--gold)]/30 text-xs sm:text-sm text-[var(--muted)] max-w-3xl mx-auto flex items-start gap-3 text-left">
          <ShieldAlert className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-semibold text-[var(--gold)]">Notice: </span>
            This is an illustration to help you visualise SEO progress. Real results depend on your industry, competition, website, and search engine changes. No rankings or timelines are guaranteed.
          </p>
        </div>
      </section>

      {/* 2. MAIN INTERACTIVE SECTION: INPUTS & ANIMATED VISUAL */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CALCULATOR PANEL (Left on desktop: 5 cols) */}
          <div className="lg:col-span-5 bg-[var(--card)] border border-[var(--line)] rounded-2xl p-6 sm:p-7 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]">
              <div>
                <h2 className="text-base font-semibold text-[var(--white)] font-serif">
                  Simulation Inputs
                </h2>
                <p className="text-xs text-[var(--muted)]">Adjust parameters to model your website's trajectory</p>
              </div>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-[var(--muted)] hover:text-[var(--white)] bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--gold)] transition-colors cursor-pointer"
                title="Reset simulation to defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Input 1: Starting Position */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                  Starting Position
                </label>
                <span className="text-xs font-mono font-semibold text-[var(--gold)]">
                  {isUnranked ? 'Not ranking yet (0)' : `Position #${startRankSlider}`}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsUnranked(true)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    isUnranked 
                      ? 'bg-[var(--gold)]/10 border-[var(--gold)] text-[var(--gold)] font-semibold' 
                      : 'bg-[var(--ink)] border-[var(--line)] text-[var(--muted)] hover:text-[var(--white)]'
                  }`}
                >
                  Not ranking yet (0)
                </button>
                <button
                  type="button"
                  onClick={() => setIsUnranked(false)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    !isUnranked 
                      ? 'bg-[var(--gold)]/10 border-[var(--gold)] text-[var(--gold)] font-semibold' 
                      : 'bg-[var(--ink)] border-[var(--line)] text-[var(--muted)] hover:text-[var(--white)]'
                  }`}
                >
                  Specific Position
                </button>
              </div>

              {!isUnranked && (
                <div className="pt-2">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={startRankSlider}
                    onChange={(e) => setStartRankSlider(parseInt(e.target.value, 10))}
                    className="w-full accent-[var(--gold)] cursor-pointer"
                    aria-label="Starting ranking position from 1 to 100"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[var(--muted)] mt-1">
                    <span>#1 (Top)</span>
                    <span>#50</span>
                    <span>#100 (Deep)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input 2: Target Position */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                Target Position
              </label>
              <div className="grid grid-cols-3 gap-2">
                {([1, 3, 10] as TargetRank[]).map((tr) => (
                  <button
                    key={tr}
                    type="button"
                    onClick={() => setTargetRank(tr)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-mono font-medium border transition-all cursor-pointer ${
                      targetRank === tr
                        ? 'bg-[var(--gold)] text-[var(--ink)] font-bold border-[var(--gold)] shadow-md shadow-[var(--gold)]/20'
                        : 'bg-[var(--ink)] border-[var(--line)] text-[var(--muted)] hover:text-[var(--white)] hover:border-[var(--gold)]/50'
                    }`}
                  >
                    {tr === 1 ? 'Top 1 (#1)' : tr === 3 ? 'Top 3' : 'Top 10 (Page 1)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Competition Level */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                Competition Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['low', 'medium', 'high'] as CompetitionLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setCompetition(lvl)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium capitalize border transition-all cursor-pointer ${
                      competition === lvl
                        ? 'bg-[var(--gold)]/10 border-[var(--gold)] text-[var(--gold)] font-semibold'
                        : 'bg-[var(--ink)] border-[var(--line)] text-[var(--muted)] hover:text-[var(--white)]'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 4: Website Health */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                Current Website Health
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['needs-work', 'average', 'strong'] as WebsiteHealth[]).map((wh) => (
                  <button
                    key={wh}
                    type="button"
                    onClick={() => setHealth(wh)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                      health === wh
                        ? 'bg-[var(--gold)]/10 border-[var(--gold)] text-[var(--gold)] font-semibold'
                        : 'bg-[var(--ink)] border-[var(--line)] text-[var(--muted)] hover:text-[var(--white)]'
                    }`}
                  >
                    {wh === 'needs-work' ? 'Needs work' : wh === 'average' ? 'Average' : 'Strong'}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 5: Focus Areas (Checkboxes) */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                  Focus Areas ({selectedFocus.length} selected)
                </label>
                <span className="text-[11px] text-[var(--gold)] font-mono">
                  Multi-discipline strategy
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {FOCUS_AREAS.map((fa) => {
                  const isChecked = selectedFocus.includes(fa.id);
                  return (
                    <label
                      key={fa.id}
                      className={`flex items-center gap-2.5 p-2 rounded-lg border transition-all cursor-pointer ${
                        isChecked 
                          ? 'bg-[var(--ink)] border-[var(--gold)]/60 text-[var(--white)]' 
                          : 'bg-[var(--ink)]/50 border-[var(--line)] text-[var(--muted)] hover:text-[var(--white)]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleFocusToggle(fa.id)}
                        className="rounded border-[var(--line)] text-[var(--gold)] focus:ring-[var(--gold)] cursor-pointer"
                      />
                      <span className="truncate">{fa.name}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Playback Controls & Action Buttons */}
            <div className="pt-3 border-t border-[var(--line)] space-y-3">
              <button
                type="button"
                onClick={handlePlayToggle}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-xs uppercase tracking-wider shadow-lg shadow-[var(--gold)]/20 hover:shadow-[var(--gold)]/35 transition-all cursor-pointer active:scale-95"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause Animation</span>
                  </>
                ) : progress >= 1 ? (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    <span>Replay Growth Journey</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Play Growth Animation</span>
                  </>
                )}
              </button>

              {/* Speed Controls */}
              <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                <span className="font-mono text-[11px]">Animation Speed:</span>
                <div className="flex items-center gap-1">
                  {([0.5, 1, 2] as number[]).map((sp) => (
                    <button
                      key={sp}
                      type="button"
                      onClick={() => setSpeed(sp)}
                      className={`px-2 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                        speed === sp
                          ? 'bg-[var(--ink)] text-[var(--gold)] border border-[var(--gold)] font-bold'
                          : 'hover:text-[var(--white)] text-[var(--muted)]'
                      }`}
                    >
                      {sp}x
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ANIMATED GROWTH VISUAL (Right on desktop: 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Interactive Screen with Chart and Mock SERP */}
            <div className="bg-[var(--card)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
              
              {/* Header inside screen */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[var(--line)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--google-blue)] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--white)]">
                    Search Visibility Trajectory
                  </span>
                </div>

                {/* Live Counter Badge */}
                <div className="flex items-center gap-2 bg-[var(--ink)] px-3 py-1.5 rounded-lg border border-[var(--line)]">
                  <span className="text-[11px] font-mono text-[var(--muted)]">Simulated Rank:</span>
                  <span className={`text-xs font-mono font-bold ${
                    currentAnimatedRank <= 3 ? 'text-[var(--gold)]' : 
                    currentAnimatedRank <= 10 ? 'text-[var(--success)]' : 
                    'text-[var(--google-blue)]'
                  }`}>
                    {currentAnimatedRank >= 100 && isUnranked ? 'Unranked' : `#${currentAnimatedRank}`}
                  </span>
                  <span className="text-[10px] text-[var(--muted)] font-mono">(Illustrative)</span>
                </div>
              </div>

              {/* Target Reached Banner when at 100% */}
              {progress >= 0.99 && (
                <div className="mb-4 p-3 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/40 flex items-center justify-between text-xs text-[var(--gold)] animate-in fade-in duration-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--gold)]" />
                    <span className="font-semibold">Target position #{targetRank} reached</span>
                    <span className="text-[11px] text-[var(--muted)]">(Illustrative simulation)</span>
                  </div>
                  <span className="font-mono text-[11px] text-[var(--gold)]">
                    Stage 6 Complete
                  </span>
                </div>
              )}

              {/* SVG Line Chart */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] bg-[var(--ink)] rounded-xl border border-[var(--line)] p-2 select-none overflow-hidden">
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="w-full h-full overflow-visible"
                  aria-hidden="true"
                >
                  {/* Background Zone Fills */}
                  {/* Top 3 Zone */}
                  <rect
                    x={paddingLeft}
                    y={paddingTop}
                    width={chartWidth - paddingLeft - paddingRight}
                    height={getRankY(3) - paddingTop}
                    fill={isTop3Reached ? 'rgba(52, 168, 83, 0.12)' : 'rgba(201, 162, 39, 0.05)'}
                    className="transition-colors duration-500"
                  />
                  {/* Page 1 (Top 10) Zone */}
                  <rect
                    x={paddingLeft}
                    y={getRankY(3)}
                    width={chartWidth - paddingLeft - paddingRight}
                    height={getRankY(10) - getRankY(3)}
                    fill={isPage1Reached ? 'rgba(52, 168, 83, 0.07)' : 'rgba(66, 133, 244, 0.03)'}
                    className="transition-colors duration-500"
                  />
                  {/* Page 2 (11-20) Zone */}
                  <rect
                    x={paddingLeft}
                    y={getRankY(10)}
                    width={chartWidth - paddingLeft - paddingRight}
                    height={getRankY(20) - getRankY(10)}
                    fill={isPage2Reached ? 'rgba(52, 168, 83, 0.04)' : 'transparent'}
                    className="transition-colors duration-500"
                  />

                  {/* Horizontal Grid Lines & Milestone Zone Labels */}
                  {/* #1 Top */}
                  <line
                    x1={paddingLeft}
                    y1={getRankY(1)}
                    x2={chartWidth - paddingRight}
                    y2={getRankY(1)}
                    stroke="rgba(201, 162, 39, 0.35)"
                    strokeDasharray="3 3"
                  />
                  <text
                    x={paddingLeft - 8}
                    y={getRankY(1) + 4}
                    fill={isRank1Reached ? '#34A853' : '#C9A227'}
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    #1
                  </text>

                  {/* Top 3 */}
                  <line
                    x1={paddingLeft}
                    y1={getRankY(3)}
                    x2={chartWidth - paddingRight}
                    y2={getRankY(3)}
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeDasharray="3 3"
                  />
                  <text
                    x={paddingLeft - 8}
                    y={getRankY(3) + 4}
                    fill={isTop3Reached ? '#34A853' : '#A0A0A0'}
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    Top 3
                  </text>

                  {/* Page 1 (#10) */}
                  <line
                    x1={paddingLeft}
                    y1={getRankY(10)}
                    x2={chartWidth - paddingRight}
                    y2={getRankY(10)}
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeDasharray="3 3"
                  />
                  <text
                    x={paddingLeft - 8}
                    y={getRankY(10) + 4}
                    fill={isPage1Reached ? '#34A853' : '#A0A0A0'}
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    Page 1
                  </text>

                  {/* Page 2 (#20) */}
                  <line
                    x1={paddingLeft}
                    y1={getRankY(20)}
                    x2={chartWidth - paddingRight}
                    y2={getRankY(20)}
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeDasharray="2 4"
                  />
                  <text
                    x={paddingLeft - 8}
                    y={getRankY(20) + 4}
                    fill={isPage2Reached ? '#34A853' : '#737373'}
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    Page 2
                  </text>

                  {/* Page 3 (#30) */}
                  <line
                    x1={paddingLeft}
                    y1={getRankY(30)}
                    x2={chartWidth - paddingRight}
                    y2={getRankY(30)}
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeDasharray="2 4"
                  />
                  <text
                    x={paddingLeft - 8}
                    y={getRankY(30) + 4}
                    fill="#737373"
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    Page 3
                  </text>

                  {/* Unranked Baseline */}
                  <line
                    x1={paddingLeft}
                    y1={getRankY(100)}
                    x2={chartWidth - paddingRight}
                    y2={getRankY(100)}
                    stroke="rgba(234, 67, 53, 0.3)"
                    strokeWidth="1.5"
                  />
                  <text
                    x={paddingLeft - 8}
                    y={getRankY(100) + 4}
                    fill="#EA4335"
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    Unranked
                  </text>

                  {/* Vertical Stage Markers & Labels along X axis */}
                  {STAGES.map((stg, idx) => {
                    const sx = getStageX(idx);
                    const isPassed = currentActiveStageIndex >= idx;
                    return (
                      <g key={idx}>
                        <line
                          x1={sx}
                          y1={paddingTop}
                          x2={sx}
                          y2={chartHeight - paddingBottom}
                          stroke={isPassed ? 'rgba(201, 162, 39, 0.2)' : 'rgba(255, 255, 255, 0.04)'}
                          strokeDasharray="2 2"
                        />
                        <text
                          x={sx}
                          y={chartHeight - paddingBottom + 16}
                          fill={isPassed ? '#C9A227' : '#737373'}
                          fontSize="9"
                          fontFamily="monospace"
                          textAnchor="middle"
                        >
                          S{stg.stageNumber}
                        </text>
                        <text
                          x={sx}
                          y={chartHeight - paddingBottom + 27}
                          fill={isPassed ? '#EDEDED' : '#555555'}
                          fontSize="8"
                          textAnchor="middle"
                        >
                          {stg.name.split(' ')[0]}
                        </text>
                      </g>
                    );
                  })}

                  {/* The Trajectory Curve Path */}
                  {/* Background trajectory track */}
                  <path
                    d={curvePathD}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />

                  {/* Active gold progress curve */}
                  <path
                    d={curvePathD}
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    pathLength="1000"
                    strokeDasharray="1000"
                    strokeDashoffset={1000 * (1 - progress)}
                    className="transition-all duration-75"
                  />

                  {/* Glowing Leading Dot */}
                  <circle
                    cx={currentDotPos.x}
                    cy={currentDotPos.y}
                    r="8"
                    fill="#C9A227"
                    filter="url(#glowFilter)"
                  />
                  <circle
                    cx={currentDotPos.x}
                    cy={currentDotPos.y}
                    r="4"
                    fill="#FFFFFF"
                  />

                  {/* SVG Definitions */}
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EA4335" />
                      <stop offset="25%" stopColor="#4285F4" />
                      <stop offset="60%" stopColor="#C9A227" />
                      <stop offset="100%" stopColor="#34A853" />
                    </linearGradient>
                    <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* MOCK GOOGLE SERP PANEL (Climbing snippet card) */}
              <div className="mt-5 p-4 rounded-xl bg-[var(--ink)] border border-[var(--line)]">
                <div className="flex items-center justify-between mb-3 text-xs text-[var(--muted)] pb-2 border-b border-[var(--line)]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[var(--gold)]">SERP Simulation</span>
                    <span>· Google Search Result Hierarchy</span>
                  </div>
                  <span className="font-mono text-[11px] text-[var(--muted)]">
                    Target: #{targetRank}
                  </span>
                </div>

                <div className="space-y-2">
                  {/* Competitor 1 (Simulated Apex) */}
                  <div className={`p-2.5 rounded-lg border text-xs transition-opacity duration-300 ${
                    currentAnimatedRank === 1 
                      ? 'bg-[var(--card)]/40 border-[var(--line)] opacity-60' 
                      : 'bg-[var(--card)] border-[var(--line)]'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-[11px] text-[var(--muted)]">
                        <span className="w-4 h-4 rounded-full bg-neutral-800 text-center font-mono text-[10px] leading-4 text-neutral-400">1</span>
                        <span>https://apex-leader.example.com</span>
                      </div>
                      <span className="text-[10px] text-neutral-500 font-mono">Competitor A</span>
                    </div>
                    <div className="text-[var(--white)] font-medium text-xs">
                      Industry Leader — Premium Solutions & Consultation
                    </div>
                  </div>

                  {/* YOUR WEBSITE SNIPPET (Climbing smoothly based on current rank) */}
                  <div className={`p-3 rounded-lg border transition-all duration-300 ${
                    currentAnimatedRank <= 3 
                      ? 'bg-[var(--gold)]/10 border-[var(--gold)] shadow-md shadow-[var(--gold)]/10' 
                      : currentAnimatedRank <= 10 
                      ? 'bg-[var(--google-blue)]/10 border-[var(--google-blue)]' 
                      : 'bg-[var(--card)] border-[var(--line)]'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[11px] font-bold ${
                          currentAnimatedRank <= 3 ? 'bg-[var(--gold)] text-[var(--ink)]' : 'bg-[var(--google-blue)] text-white'
                        }`}>
                          {currentAnimatedRank >= 100 && isUnranked ? '—' : currentAnimatedRank}
                        </span>
                        <span className="text-[var(--gold)] font-mono font-medium">https://yourbusiness.com</span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[var(--ink)] text-[var(--gold)] border border-[var(--gold)]/40">
                        Your Website
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-[var(--white)] hover:underline cursor-pointer">
                      Your Business Name — High-Visibility Local & Organic SEO
                    </div>
                    <p className="text-xs text-[var(--muted)] mt-1 line-clamp-2">
                      Optimized metadata, strong technical architecture, and verified local relevance helping search engines connect your services to ready customers.
                    </p>
                  </div>

                  {/* Competitor 2 */}
                  <div className="p-2.5 rounded-lg bg-[var(--card)] border border-[var(--line)] text-xs opacity-60">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-[11px] text-[var(--muted)]">
                        <span className="w-4 h-4 rounded-full bg-neutral-800 text-center font-mono text-[10px] leading-4 text-neutral-400">
                          {currentAnimatedRank <= 2 ? '3' : '2'}
                        </span>
                        <span>https://benchmark-directory.example.org</span>
                      </div>
                      <span className="text-[10px] text-neutral-500 font-mono">Competitor B</span>
                    </div>
                    <div className="text-[var(--white)] font-medium text-xs">
                      Regional Directory & Listings Service Provider
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. MILESTONE TIMELINE (STAGES SHOWN AS STEPS, NO DATES OR MONTH COUNTS) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--gold)] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span className="font-mono uppercase text-[11px]">Structured Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[var(--white)]">
            Milestone Timeline: The 6 Stages of Organic Ascent
          </h2>
          <p className="text-sm text-[var(--muted)] mt-2">
            Every website progresses through distinct architectural and visibility milestones, regardless of exact duration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAGES.map((stage, idx) => {
            const isCompleted = currentActiveStageIndex > idx;
            const isCurrent = currentActiveStageIndex === idx;
            const stageRank = calculatedPositions[idx + 1] || calculatedPositions[idx];

            return (
              <div
                key={stage.stageNumber}
                className={`p-6 rounded-2xl border transition-all duration-300 relative ${
                  isCurrent 
                    ? 'bg-[var(--card)] border-[var(--gold)] shadow-lg shadow-[var(--gold)]/10 ring-1 ring-[var(--gold)]/50' 
                    : isCompleted 
                    ? 'bg-[var(--card)]/80 border-[var(--line)] opacity-90' 
                    : 'bg-[var(--card)]/40 border-[var(--line)]/50 opacity-60'
                }`}
              >
                {/* Stage Number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    isCurrent
                      ? 'bg-[var(--gold)] text-[var(--ink)]'
                      : isCompleted
                      ? 'bg-[var(--success)]/20 text-[var(--success)] border border-[var(--success)]/40'
                      : 'bg-[var(--ink)] text-[var(--muted)] border border-[var(--line)]'
                  }`}>
                    0{stage.stageNumber}
                  </span>

                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--ink)] border border-[var(--line)] text-[var(--gold)]">
                    Illustrative Rank: ~#{stageRank}
                  </span>
                </div>

                <h3 className="text-base font-serif font-semibold text-[var(--white)] mb-1">
                  {stage.name}
                </h3>
                <p className="text-xs text-[var(--gold)] font-mono mb-3">
                  {stage.subtitle}
                </p>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                  {stage.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 pt-3 border-t border-[var(--line)]/70">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] block mb-1">
                    Core Focus in This Stage:
                  </span>
                  {stage.keyActions.map((act, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. RESULTS SUMMARY & TRANSPARENT FORMULA NOTE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="bg-[var(--card)] border border-[var(--line)] rounded-2xl p-6 sm:p-9 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[var(--line)]">
            <div>
              <h2 className="text-2xl font-serif font-medium text-[var(--white)]">
                Illustrative Results Summary
              </h2>
              <p className="text-xs text-[var(--muted)] mt-1">
                Synthesized projection based on your custom input parameters
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--ink)] border border-[var(--line)] text-xs font-mono text-[var(--gold)]">
              <span>Model Target: Top {targetRank}</span>
              <span>·</span>
              <span className="text-[var(--white)]">Illustrative</span>
            </div>
          </div>

          {/* Grid of Results per Stage */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {STAGES.map((stg, sIdx) => {
              const pos = calculatedPositions[sIdx + 1];
              return (
                <div key={stg.stageNumber} className="p-3.5 rounded-xl bg-[var(--ink)] border border-[var(--line)] text-center">
                  <span className="text-[10px] font-mono uppercase text-[var(--muted)] block">
                    Stage {stg.stageNumber}
                  </span>
                  <span className="text-lg font-mono font-bold text-[var(--gold)] block my-1">
                    #{pos}
                  </span>
                  <span className="text-[10px] text-neutral-400 block font-mono">
                    (Illustrative)
                  </span>
                </div>
              );
            })}
          </div>

          {/* Focus Area Impact Mapping */}
          <div className="p-5 rounded-xl bg-[var(--ink)] border border-[var(--line)] mb-6 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--gold)]">
              Active Focus Areas & Stage Lift Contribution:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              {FOCUS_AREAS.filter((f) => selectedFocus.includes(f.id)).map((f) => (
                <div key={f.id} className="p-3 rounded-lg bg-[var(--card)] border border-[var(--line)]">
                  <div className="font-semibold text-[var(--white)] mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                    <span>{f.name}</span>
                  </div>
                  <p className="text-[11px] text-[var(--muted)] leading-relaxed">
                    {f.description} (Primary velocity impact: Stage {f.primaryStage}+)
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Formula Note */}
          <div className="p-4 rounded-xl bg-[var(--ink)] border border-[var(--line)] text-xs text-[var(--muted)] space-y-2">
            <div className="flex items-center gap-2 text-[var(--white)] font-mono">
              <HelpCircle className="w-4 h-4 text-[var(--gold)]" />
              <span>How this illustration calculates progression:</span>
            </div>
            <p className="leading-relaxed">
              The illustrative trajectory calculates an S-curve ranking progression from your starting position toward your chosen target. Competition level adjusts the resistance (High competition requires deeper authority), website health establishes the baseline indexing velocity (Strong health speeds initial traction), and each active focus area accelerates specific milestone stages with diminishing returns. All figures are strictly illustrative models.
            </p>
            <p className="text-[11px] text-[var(--gold)] font-mono pt-1">
              Pricing Note: All Jewels engagements are custom quoted following an individualized technical audit. No pre-set packages or automated guarantees.
            </p>
          </div>

        </div>
      </section>

      {/* 5. BOTTOM MANDATORY DISCLAIMER BLOCK */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
        <div className="p-5 rounded-xl bg-[var(--card)] border border-[var(--line)] text-xs sm:text-sm text-[var(--muted)] text-center space-y-2">
          <p className="text-[var(--white)] font-semibold">
            Important Compliance Notice
          </p>
          <p className="leading-relaxed">
            This is an illustration to help you visualise SEO progress. Real results depend on your industry, competition, website, and search engine changes. No rankings or timelines are guaranteed.
          </p>
        </div>
      </section>

      {/* 6. CTA BAND */}
      <section className="bg-gradient-to-b from-[var(--ink)] via-[var(--card)] to-[var(--ink)] border-t border-[var(--line)] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[var(--white)] tracking-tight">
            Want a real plan for your website?
          </h2>
          <p className="text-base text-[var(--muted)] max-w-xl mx-auto font-light leading-relaxed">
            Discuss your market competition, technical obstacles, and organic search opportunities directly with Jewels.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-xs tracking-wider uppercase transition-all shadow-xl shadow-[var(--gold)]/20 hover:shadow-[var(--gold)]/35 cursor-pointer active:scale-95"
            >
              <span>Request an SEO Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={CONTACT_DETAILS.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Jewels on WhatsApp (opens in a new tab)"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[#25D366] text-[var(--white)] hover:text-[#25D366] font-medium text-xs tracking-wide uppercase transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              <BrandIcon brand="whatsapp" size={16} variant="gold-hover" className="shrink-0" />
              <span>WhatsApp Jewels</span>
            </a>
          </div>

          <p className="text-xs text-[var(--muted)] font-mono pt-4">
            Custom quote provided after discovery · Direct response from Jewels
          </p>
        </div>
      </section>

    </div>
  );
};
