import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ClipboardCheck } from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_DETAILS } from '../data/seoData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenChecklist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenChecklist,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'calculator', label: 'Growth Calculator' },
    { id: 'portfolio', label: 'SEO Portfolio' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'blog', label: 'Blog' },
    { id: 'freelance-profiles', label: 'Freelance Profiles' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-[72px] flex items-center transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--ink)]/95 backdrop-blur-md border-b border-[var(--line)] shadow-xl shadow-black/50'
          : 'bg-[var(--ink)]/85 backdrop-blur-sm border-b border-[var(--line)]/60'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 min-[700px]:px-6 lg:px-8">
        {/* Strict 3-zone Top Bar Contract: Brand — Links — CTA */}
        <div className="flex items-center justify-between gap-4 min-[1200px]:gap-6">
          
          {/* ZONE 1: BRAND LOGO */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className="group flex items-center text-left cursor-pointer focus-visible:outline-none"
              aria-label="Jewels Team SEO Homepage"
            >
              <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-lg overflow-hidden border border-[var(--gold)]/40 bg-black flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-md shadow-black/40">
                <img
                  src="/logo-source.jpg"
                  alt="Jewels Team logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </button>
          </div>

          {/* ZONE 2: PRIMARY NAV LINKS (Gaps: 18px, font size: 0.88rem, collapses below 1200px) */}
          <nav 
            className="hidden min-[1200px]:flex items-center gap-[18px] text-[0.88rem] font-medium text-[var(--muted)]"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1.5 tracking-wide transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[var(--gold)] font-semibold'
                      : 'text-[var(--muted)] hover:text-[var(--white)]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--gold)] rounded-full"
                      aria-hidden="true" 
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ZONE 3: PRIMARY ACTION (Desktop >= 1200px) */}
          <div className="hidden min-[1200px]:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenChecklist}
              className="hidden min-[1420px]:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-sans font-medium text-[var(--muted)] hover:text-[var(--gold)] bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] transition-all cursor-pointer"
              title="Open Pre-Launch Checklist"
            >
              <ClipboardCheck className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>Checklist</span>
            </button>

            {/* Founder Avatar Quick Link */}
            <button
              onClick={() => handleLinkClick('about')}
              title="Founder & SEO Specialist · Jewels"
              className="hidden min-[1420px]:flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] text-xs font-sans font-medium text-[var(--muted)] hover:text-[var(--white)] transition-all cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full p-[1px] bg-[var(--gold)] shrink-0 overflow-hidden">
                <img
                  src={CONTACT_DETAILS.PROFILE_PHOTO}
                  alt="Jewels founder profile"
                  width={20}
                  height={20}
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              <span>Jewels</span>
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-xs min-[1340px]:text-sm tracking-wide uppercase transition-all duration-200 shadow-md shadow-[var(--gold)]/15 hover:shadow-[var(--gold)]/30 focus-visible:ring-2 focus-visible:ring-[var(--gold)] whitespace-nowrap shrink-0 cursor-pointer active:scale-95 min-h-[44px]"
            >
              <span className="hidden min-[1340px]:inline">Request an SEO Consultation</span>
              <span className="inline min-[1340px]:hidden">Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* CONTROLS BELOW 1200px (Button + Hamburger toggle) */}
          <div className="flex min-[1200px]:hidden items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-xs sm:text-sm tracking-tight sm:tracking-wide whitespace-nowrap cursor-pointer transition-colors active:scale-95 min-h-[40px]"
            >
              <span className="hidden sm:inline">Request an SEO Consultation</span>
              <span className="inline sm:hidden">Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-lg bg-[var(--card)] text-[var(--muted)] hover:text-[var(--white)] border border-[var(--line)] hover:border-[var(--gold)] focus-visible:ring-2 focus-visible:ring-[var(--gold)] cursor-pointer transition-colors"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* COLLAPSED MENU BELOW 1200px */}
      {isMobileMenuOpen && (
        <div className="min-[1200px]:hidden fixed top-[72px] left-0 right-0 max-h-[calc(100vh-72px)] overflow-y-auto bg-[var(--card)] border-b border-[var(--line)] px-4 sm:px-6 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Founder Identity Card in Collapsed Menu */}
          <div 
            onClick={() => handleLinkClick('about')}
            className="flex items-center gap-3 p-3 mb-3 rounded-xl bg-[var(--ink)] border border-[var(--line)] cursor-pointer hover:border-[var(--gold)]/50 transition-colors"
          >
            <div className="relative w-11 h-11 rounded-full p-[1.5px] bg-[var(--gold)] shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--ink)]">
                <img
                  src={CONTACT_DETAILS.PROFILE_PHOTO}
                  alt="Jewels founder profile photo"
                  width={44}
                  height={44}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-[var(--white)] truncate">Jewels</div>
              <div className="text-sm text-[var(--gold)] font-sans">SEO Specialist · Direct Inquiry</div>
            </div>
          </div>

          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer text-left min-h-[48px] ${
                    isActive
                      ? 'bg-[var(--ink)] text-[var(--gold)] font-semibold border border-[var(--gold)]/30'
                      : 'text-[var(--muted)] hover:bg-[var(--ink)] hover:text-[var(--white)]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[var(--line)] flex flex-col gap-2.5">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-sm tracking-wider uppercase transition-colors cursor-pointer min-h-[48px]"
            >
              <span>Request an SEO Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenChecklist();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[var(--ink)] hover:bg-[#1A1A1A] text-[var(--muted)] hover:text-[var(--gold)] text-sm font-sans border border-[var(--line)] hover:border-[var(--gold)] transition-colors cursor-pointer min-h-[44px]"
            >
              <ClipboardCheck className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>Owner Pre-Launch Checklist</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
