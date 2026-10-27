import React, { useState } from 'react';
import { ArrowUp, ClipboardCheck } from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_DETAILS } from '../data/seoData';
import { BrandIcon } from './BrandIcon';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenChecklist }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="bg-[var(--ink)] border-t border-[var(--line)] text-[var(--muted)] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-2 space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center text-left cursor-pointer focus-visible:outline-none"
              aria-label="Jewels Team SEO Homepage"
            >
              <div className="relative h-12 w-12 rounded-lg overflow-hidden border border-[var(--gold)]/40 bg-black flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-md shadow-black/40">
                <img
                  src="/logo-source.jpg"
                  alt="Jewels Team logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </button>

            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-md font-light">
              Jewels helps businesses improve their online visibility, strengthen their search engine presence, and reach potential customers through strategic SEO and website optimization.
            </p>

            {/* Founder Sign-off Badge */}
            <div 
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 p-2.5 pr-4 rounded-xl bg-[var(--card)] border border-[var(--line)] hover:border-[var(--gold)]/50 transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full p-[1.5px] bg-[var(--gold)] shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-[var(--ink)]">
                  <img
                    src={CONTACT_DETAILS.PROFILE_PHOTO}
                    alt="Jewels founder profile"
                    width={40}
                    height={40}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <span className="block text-sm font-medium text-[var(--white)] group-hover:text-[var(--gold)] transition-colors">
                  Jewels
                </span>
                <span className="block text-sm text-[var(--muted)] font-sans">
                  Founder & SEO Specialist
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenChecklist}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-sans font-medium text-[var(--muted)] hover:text-[var(--gold)] bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] transition-all cursor-pointer"
              >
                <ClipboardCheck className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span>Pre-Launch Checklist</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider text-[var(--white)]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider text-[var(--white)]">
              Direct Contact
            </h4>
            
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_DETAILS.EMAIL}`}
                  className="flex items-center gap-2.5 text-[var(--muted)] hover:text-[var(--gold)] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded"
                >
                  <BrandIcon brand="email" size={20} variant="gold-hover" className="shrink-0" />
                  <span className="truncate">{CONTACT_DETAILS.EMAIL}</span>
                </a>
              </li>

              <li>
                <a
                  href={CONTACT_DETAILS.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Jewels on WhatsApp (opens in a new tab)"
                  className="flex items-center gap-2.5 text-[var(--muted)] hover:text-[#25D366] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded"
                >
                  <BrandIcon brand="whatsapp" size={20} variant="gold-hover" className="shrink-0" />
                  <span>WhatsApp Jewels</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-sm font-sans text-[var(--muted)] mb-2">Verified Profiles</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT_DETAILS.LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jewels on LinkedIn (opens in a new tab)"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] flex items-center justify-center transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                >
                  <BrandIcon brand="linkedin" size={24} variant="gold-hover" />
                </a>

                <a
                  href={CONTACT_DETAILS.INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jewels on Instagram (opens in a new tab)"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] flex items-center justify-center transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                >
                  <BrandIcon brand="instagram" size={24} variant="gold-hover" />
                </a>

                <a
                  href={CONTACT_DETAILS.TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jewels on TikTok (opens in a new tab)"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] flex items-center justify-center transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                >
                  <BrandIcon brand="tiktok" size={24} variant="gold-hover" />
                </a>

                <a
                  href={CONTACT_DETAILS.CLUTCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Jewels on Clutch (opens in a new tab)"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] flex items-center justify-center transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                >
                  <BrandIcon brand="clutch" size={24} variant="gold-hover" />
                </a>

                <a
                  href={CONTACT_DETAILS.SORTLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Jewels on Sortlist (opens in a new tab)"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] flex items-center justify-center transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                >
                  <BrandIcon brand="sortlist" size={24} variant="gold-hover" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <div>
            © {new Date().getFullYear()} Jewels. All rights reserved. All services are custom quoted.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--white)] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--gold)]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
