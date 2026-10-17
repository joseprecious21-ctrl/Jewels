import React from 'react';
import { Mail, MessageCircle, Linkedin, Twitter, ArrowUp, Sparkles, ClipboardCheck } from 'lucide-react';
import { PageId } from '../types';
import { PLACEHOLDERS } from '../data/seoData';

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
    { id: 'portfolio', label: 'SEO Portfolio' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#080808] border-t border-neutral-900 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-2 space-y-4">
            {/* [LOGO PLACEHOLDER]: Replace with SVG/Image logo asset when available */}
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-semibold tracking-tight text-[#D4AF37]">
                Jewels
              </span>
              <span className="text-xs uppercase tracking-widest font-mono text-neutral-500">
                SEO & Optimization
              </span>
            </div>
            {/* <!-- [LOGO PLACEHOLDER] END --> */}

            <p className="text-neutral-400 text-sm leading-relaxed max-w-md font-light">
              Jewels helps businesses improve their online visibility, strengthen their search engine presence, and reach potential customers through strategic SEO and website optimization.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenChecklist}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-neutral-400 hover:text-[#D4AF37] bg-neutral-900 border border-neutral-800 transition-colors cursor-pointer"
              >
                <ClipboardCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Pre-Launch Checklist (10 Items)</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-300">
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
                    className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries & Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-300">
              Direct Contact
            </h4>
            
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${PLACEHOLDERS.EMAIL}`}
                  className="flex items-center gap-2.5 hover:text-[#D4AF37] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="truncate">{PLACEHOLDERS.EMAIL}</span>
                </a>
              </li>

              <li>
                <a
                  href={`https://wa.me/${PLACEHOLDERS.WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#D4AF37] transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>WhatsApp: {PLACEHOLDERS.WHATSAPP_NUMBER}</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs font-mono text-neutral-500 mb-2">Professional Profiles</p>
              <div className="flex items-center gap-3">
                <a
                  href={PLACEHOLDERS.LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PLACEHOLDERS.TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter profile"
                  className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Jewels. All rights reserved. All services are custom quoted.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-neutral-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
