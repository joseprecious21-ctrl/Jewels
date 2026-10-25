import React from 'react';
import { CONTACT_DETAILS } from '../data/seoData';
import { BrandIcon } from './BrandIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-5 right-5 z-40">
      <a
        href={CONTACT_DETAILS.WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Jewels on WhatsApp (opens in a new tab)"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl shadow-black/60 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
      >
        <span className="sr-only">Chat with Jewels on WhatsApp (opens in a new tab)</span>
        <BrandIcon brand="whatsapp" size={30} variant="white" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]"></span>
        </span>
      </a>
    </aside>
  );
};

