import React from 'react';
import { X, CheckCircle2, AlertTriangle, ArrowRight, ExternalLink } from 'lucide-react';
import { PLACEHOLDERS } from '../data/seoData';
import { PageId } from '../types';

interface PreLaunchChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const PreLaunchChecklistModal: React.FC<PreLaunchChecklistModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const checklistItems = [
    {
      title: 'Brand Crest Logo',
      placeholder: 'PGT-Global Crest Logo (Active)',
      file: 'src/components/Navbar.tsx & Footer.tsx & index.html',
      status: 'Configured with official logo asset',
      actionPage: 'home' as PageId,
      detail: 'Official athletic crest logo and browser favicon are active on the website.',
    },
    {
      title: 'Profile Photo',
      placeholder: '[PROFILE PHOTO PLACEHOLDER]',
      file: 'src/pages/AboutPage.tsx',
      status: 'Placeholder in use',
      actionPage: 'about' as PageId,
      detail: 'Upload your professional headshot into the designated about photo slot.',
    },
    {
      title: 'Contact Email',
      placeholder: 'joseprecious21@gmail.com',
      file: 'src/data/seoData.ts',
      status: 'Verified & active',
      actionPage: 'contact' as PageId,
      detail: 'Official email configured across contact page, footer, and schema.',
    },
    {
      title: 'WhatsApp Direct Chat',
      placeholder: 'https://wa.me/qr/ALZSABNAHJVZC1',
      file: 'src/data/seoData.ts',
      status: 'Verified & active',
      actionPage: 'contact' as PageId,
      detail: 'Direct WhatsApp link active on Contact, Footer, CTA bands, and floating button.',
    },
    {
      title: 'Instagram Profile',
      placeholder: '@jewelsteamgrowth_seo_solution',
      file: 'src/data/seoData.ts',
      status: 'Verified & active',
      actionPage: 'contact' as PageId,
      detail: 'Official Instagram link configured in About, Contact, Footer, and Schema.',
    },
    {
      title: 'LinkedIn Profile',
      placeholder: 'precious-ayofe-b252a5428',
      file: 'src/data/seoData.ts',
      status: 'Verified & active',
      actionPage: 'contact' as PageId,
      detail: 'Official LinkedIn profile configured in About, Contact, Footer, and Schema.',
    },
    {
      title: 'Contact Form Endpoint',
      placeholder: '[FORM ENDPOINT]',
      file: 'src/pages/ContactPage.tsx',
      status: 'Placeholder in use',
      actionPage: 'contact' as PageId,
      detail: 'Add your free Formspree, Web3Forms, or custom submission URL.',
    },
    {
      title: 'Confirm Images 3 to 6 Details',
      placeholder: 'Project screenshots 1 to 4',
      file: 'src/data/seoData.ts',
      status: 'Awaiting owner confirmation',
      actionPage: 'portfolio' as PageId,
      detail: 'Confirm what images 3 to 6 show, then update their titles, category tags, and captions.',
    },
    {
      title: 'Culture Perfumes Screenshots & Data',
      placeholder: '[BEFORE / AFTER SCREENSHOT PLACEHOLDER]',
      file: 'src/pages/CaseStudiesPage.tsx',
      status: 'Placeholder in use',
      actionPage: 'case-studies' as PageId,
      detail: 'Replace placeholder frames with real Google Search Console & Rank Math screenshots and verified results.',
    },
    {
      title: 'Revive Wellness Verification Proof',
      placeholder: '[BEFORE / AFTER SCREENSHOT PLACEHOLDER]',
      file: 'src/pages/CaseStudiesPage.tsx',
      status: 'Placeholder in use',
      actionPage: 'case-studies' as PageId,
      detail: 'Insert verified Google Business Profile live map listing screenshots and verified results.',
    },
    {
      title: 'GBP & SEO Audit Project Screenshots',
      placeholder: '[SCREENSHOT PLACEHOLDER]',
      file: 'src/pages/PortfolioPage.tsx',
      status: 'Placeholder in use',
      actionPage: 'portfolio' as PageId,
      detail: 'Provide verified audit and ranking reports for showcase cards.',
    },
    {
      title: 'Client Testimonials',
      placeholder: 'Ready-to-enable component',
      file: 'src/components/TestimonialsSection.tsx',
      status: 'Hidden until feedback provided',
      actionPage: 'home' as PageId,
      detail: 'Activate the testimonials module once authentic written client reviews are collected.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#0F0F0F] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checklist-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800 bg-neutral-900/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                Site Launch Checklist
              </span>
              <span className="text-xs text-neutral-400">Section 11 Specification</span>
            </div>
            <h3 id="checklist-modal-title" className="text-xl font-serif font-semibold text-white mt-1">
              Owner Pre-Launch Checklist
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Info banner */}
        <div className="p-4 bg-neutral-950/80 border-b border-neutral-800 text-xs text-neutral-400 flex items-center gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>
            Every item below corresponds to a strict no-invented-content rule. Update them prior to your public release.
          </span>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3 divide-y divide-neutral-900">
          {checklistItems.map((item, index) => (
            <div key={index} className="pt-3 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium text-white">{item.title}</h4>
                  <span className="text-[11px] font-mono text-[#D4AF37] bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800">
                    {item.placeholder}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">{item.detail}</p>
                <p className="text-[11px] font-mono text-neutral-500 mt-0.5">Location: {item.file}</p>
              </div>

              <button
                onClick={() => {
                  onNavigate(item.actionPage);
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 hover:bg-[#D4AF37] hover:text-black text-neutral-300 border border-neutral-800 transition-colors shrink-0 cursor-pointer"
              >
                <span>Inspect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-900/40 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            <span>Clean architecture ready for rapid asset drop-in</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
