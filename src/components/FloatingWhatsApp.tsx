import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/seoData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-5 right-5 z-40">
      <a
        href={CONTACT_DETAILS.WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Jewels SEO"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[var(--success)] hover:bg-emerald-500 text-white font-medium text-xs shadow-2xl shadow-black/60 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--success)]"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-4 h-4 fill-white/20" />
        <span className="hidden sm:inline font-semibold tracking-wide">WhatsApp Jewels</span>
        <span className="sm:hidden font-semibold tracking-wide">WhatsApp</span>
      </a>
    </aside>
  );
};
