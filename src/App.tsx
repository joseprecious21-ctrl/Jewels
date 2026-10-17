import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PreLaunchChecklistModal } from './components/PreLaunchChecklistModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>(undefined);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  // Sync hash with current page
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'services', 'portfolio', 'case-studies', 'blog', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update dynamic document title and meta description based on current page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Jewels — Professional SEO & Website Optimization',
      about: 'About Jewels — SEO Specialist & Website Visibility',
      services: 'SEO Services & Optimization — Jewels',
      portfolio: 'SEO Portfolio & Client Engagements — Jewels',
      'case-studies': 'SEO Case Studies & Verified Results — Jewels',
      blog: 'SEO Insights & Articles — Jewels',
      contact: 'Request an SEO Consultation — Jewels',
    };

    const descriptions: Record<PageId, string> = {
      home: 'Jewels helps businesses improve online visibility, strengthen search presence, and reach potential customers through strategic SEO and website optimization.',
      about: 'Jewels is focused on helping businesses improve their online visibility, strengthen their search engine presence, and reach potential customers.',
      services: 'Explore 12 specialized SEO services from WordPress optimization and technical audits to Google Business Profile verification.',
      portfolio: 'Review verified SEO and website optimization projects including Culture Perfumes, Revive Wellness, and Google Business Profile management.',
      'case-studies': 'In-depth case studies with before-and-after search performance documentation and verified technical implementations.',
      blog: 'Strategic search engine insights, algorithm updates, and website optimization perspectives.',
      contact: 'Request an SEO consultation with Jewels to review your website visibility and receive a tailored quote.',
    };

    document.title = titles[currentPage] || titles.home;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[currentPage] || descriptions.home);
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId, extraId?: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;

    if (page === 'contact' && extraId) {
      setSelectedServiceId(extraId);
    }
    if (page === 'case-studies' && extraId) {
      setSelectedProjectId(extraId);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-neutral-100 selection:bg-[#D4AF37] selection:text-black font-sans">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1" id="main-content">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'portfolio' && <PortfolioPage onNavigate={handleNavigate} />}
        {currentPage === 'case-studies' && (
          <CaseStudiesPage onNavigate={handleNavigate} activeProjectId={selectedProjectId} />
        )}
        {currentPage === 'blog' && <BlogPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && (
          <ContactPage initialServiceId={selectedServiceId} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Professional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* Sticky/Floating WhatsApp Button on Mobile & Desktop */}
      <FloatingWhatsApp />

      {/* Owner Pre-Launch Checklist Modal */}
      <PreLaunchChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
