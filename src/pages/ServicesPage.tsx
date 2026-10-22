import React from 'react';
import { 
  LayoutTemplate, FileText, Cpu, MapPin, Store, ShieldCheck, 
  Search, Settings, Building2, Award, Sparkles, HelpCircle, 
  ChevronRight
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES } from '../data/seoData';
import { CtaBand } from '../components/CtaBand';
import { FaqAccordion } from '../components/FaqAccordion';

interface ServicesPageProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  // Google Blue #4285F4 for Google Business Profile & Search Console
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutTemplate': return <LayoutTemplate className="w-6 h-6 text-[var(--gold)]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[var(--gold)]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[var(--gold)]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[var(--gold)]" />;
      case 'Store': return <Store className="w-6 h-6 text-[var(--google-blue)]" />; // GBP Optimization
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[var(--google-blue)]" />; // GBP Verification
      case 'Search': return <Search className="w-6 h-6 text-[var(--google-blue)]" />; // Google Search Console
      case 'Settings': return <Settings className="w-6 h-6 text-[var(--gold)]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[var(--gold)]" />;
      case 'Award': return <Award className="w-6 h-6 text-[var(--gold)]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[var(--gold)]" />;
      case 'HelpCircle': return <HelpCircle className="w-6 h-6 text-[var(--gold)]" />;
      default: return <Search className="w-6 h-6 text-[var(--gold)]" />;
    }
  };

  return (
    <div className="pt-28 sm:pt-36 min-h-screen bg-[var(--ink)]">
      
      {/* 1. Page Heading & Intro Line (DARK SECTION: #0A0A0A) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--gold)] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Comprehensive SEO Solutions</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[var(--white)] mb-6">
          SEO & Optimization Services
        </h1>

        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed font-light">
          Tailored search engine optimization, website enhancements, and Google presence management designed to improve visibility and attract qualified client inquiries.
        </p>

        {/* Mandatory Note: “All services are quoted individually. Request a Custom Quote.” */}
        <div className="mt-8 inline-block p-4 rounded-xl bg-[var(--card)] border border-[var(--line)] text-xs sm:text-sm text-[var(--white)]">
          <span className="font-semibold text-[var(--gold)]">Pricing Note: </span>
          All services are quoted individually. Request a Custom Quote.
        </div>
      </section>

      {/* 2. Exactly 12 Service Cards Grid (WHITE SECTION: #FFFFFF for rhythm, #FAFAFA cards with #E4E4E4 borders) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--white)] text-[var(--ink)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const isGoogle = service.id === 'gbp-optimization' || service.id === 'gbp-verification' || service.id === 'gsc-setup';
              const isSuspension = service.id === 'gbp-verification';

              return (
                <div
                  key={service.id}
                  className="p-8 rounded-xl bg-[#FAFAFA] border border-[#E4E4E4] hover:border-[var(--gold)] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-white border flex items-center justify-center transition-colors ${
                        isGoogle ? 'border-[#E4E4E4] group-hover:border-[var(--google-blue)]' : 'border-[#E4E4E4] group-hover:border-[var(--gold)]'
                      }`}>
                        {getIcon(service.iconName)}
                      </div>
                      <div className="flex items-center gap-2">
                        {isGoogle && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#4285F4]/10 text-[var(--google-blue)] border border-[#4285F4]/30">
                            Google Integration
                          </span>
                        )}
                        {isSuspension && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--alert)]/10 text-[var(--alert)] border border-[var(--alert)]/30">
                            Suspension Support
                          </span>
                        )}
                        <span className="font-mono text-xs text-[#999999]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-serif font-medium text-[var(--ink)] mb-3 group-hover:text-[var(--gold)] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#555555] font-light leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#E4E4E4] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#888888]">Custom Scoped</span>
                    
                    {/* “Request a Custom Quote” link to Contact page */}
                    <button
                      onClick={() => onNavigate('contact', service.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--gold)] hover:text-[#0A0A0A] transition-colors cursor-pointer group-hover:underline"
                    >
                      <span>Request a Custom Quote</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-6 rounded-xl bg-[#FAFAFA] border border-[#E4E4E4] max-w-3xl mx-auto">
            <p className="text-xs text-[#666666] leading-relaxed">
              Need multiple services integrated into a cohesive search strategy? We review your full web presence and present a single customized project proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Modeling Tool Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--ink)] border-t border-[var(--line)]">
        <div className="max-w-5xl mx-auto p-7 sm:p-9 rounded-2xl bg-[var(--card)] border border-[var(--gold)]/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--gold)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Growth Tool</span>
            </div>
            <h3 className="text-2xl font-serif font-medium text-[var(--white)]">
              See How SEO Services Drive Search Visibility
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] max-w-xl font-light leading-relaxed">
              Explore how combining technical audits, on-page optimization, and Google Business Profile management can lift a site from unranked to page one.
            </p>
          </div>
          <button
            onClick={() => onNavigate('calculator')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-xs tracking-wider uppercase transition-colors shrink-0 whitespace-nowrap cursor-pointer shadow-lg shadow-[var(--gold)]/20 active:scale-95"
          >
            <span>Launch Growth Calculator</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. Services FAQ (DARK SECTION: #0A0A0A) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[var(--line)] bg-[var(--ink)] text-[var(--white)]">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] mb-2 block">
            Service FAQ
          </span>
          <h2 className="text-3xl font-serif font-medium text-[var(--white)]">
            Questions on Services & Quoting
          </h2>
        </div>
        <FaqAccordion showOwnerNotice={false} theme="dark" />
      </section>

      {/* 4. Final CTA Band (DARK SECTION) */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
