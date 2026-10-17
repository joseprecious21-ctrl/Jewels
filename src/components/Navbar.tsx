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
  const [logoError, setLogoError] = useState(false);

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
    { id: 'portfolio', label: 'SEO Portfolio' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-xl shadow-black/40 py-3.5'
          : 'bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-neutral-900 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-zone Top Bar Contract: Brand — Links — CTA */}
        <div className="flex items-center justify-between gap-8">
          
          {/* ZONE 1: BRAND LOGO & WORDMARK */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className="group flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer focus-visible:outline-none"
              aria-label="Jewels SEO Homepage"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-[#C9A227] via-[#F4E07B] to-[#C9A227] shadow-[0_0_12px_rgba(201,162,39,0.25)] shrink-0 transition-transform group-hover:scale-105">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-950 flex items-center justify-center">
                  {!logoError ? (
                    <img
                      src="/logo-source.jpg"
                      alt="Jewels logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover object-center"
                      onError={() => setLogoError(true)}
                    />
                  ) : (
                    <span className="font-serif font-bold text-sm text-[#D4AF37]">J</span>
                  )}
                </div>
              </div>
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#D4AF37] group-hover:text-[#FFF3D0] transition-colors whitespace-nowrap">
                Jewels
              </span>
            </button>
          </div>

          {/* ZONE 2: 7 PRIMARY NAV LINKS (Single-line, unboxed text links) */}
          <nav 
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300"
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
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"
                      aria-hidden="true" 
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ZONE 3: 1 PRIMARY ACTION (Gold button) + Owner checklist trigger */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenChecklist}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono text-neutral-400 hover:text-[#D4AF37] bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 transition-colors cursor-pointer"
              title="Open Pre-Launch Checklist"
            >
              <ClipboardCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden xl:inline">Checklist</span>
            </button>

            {/* Founder Avatar Quick Link */}
            <button
              onClick={() => handleLinkClick('about')}
              title="Founder & SEO Specialist · Jewels"
              className="hidden xl:flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-[#D4AF37]/50 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full p-[1px] bg-gradient-to-tr from-[#C9A227] to-[#D4AF37] shrink-0 overflow-hidden">
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
              className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/25 focus-visible:ring-2 focus-visible:ring-[#D4AF37] whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
            >
              <span>Request an SEO Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MOBILE CONTROLS (Hamburger & Quick Call-To-Action) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex sm:hidden items-center justify-center px-3 py-1.5 rounded-md bg-[#D4AF37] text-black font-semibold text-xs tracking-tight whitespace-nowrap cursor-pointer"
            >
              Consultation
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE COLLAPSIBLE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F0F] border-b border-neutral-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          {/* Founder Identity Card in Mobile Drawer */}
          <div 
            onClick={() => handleLinkClick('about')}
            className="flex items-center gap-3 p-3 mb-3 rounded-xl bg-neutral-900/80 border border-neutral-800 cursor-pointer hover:border-[#D4AF37]/40 transition-colors"
          >
            <div className="relative w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-[#C9A227] to-[#D4AF37] shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
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
              <div className="text-sm font-medium text-white truncate">Jewels</div>
              <div className="text-xs text-[#D4AF37] font-mono">SEO Specialist · Direct Inquiry</div>
            </div>
          </div>

          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer text-left ${
                    isActive
                      ? 'bg-neutral-900 text-[#D4AF37]'
                      : 'text-neutral-300 hover:bg-neutral-900/60 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-neutral-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              <span>Request an SEO Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenChecklist();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 text-neutral-400 text-xs font-mono border border-neutral-800 cursor-pointer"
            >
              <ClipboardCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Owner Pre-Launch Checklist</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
