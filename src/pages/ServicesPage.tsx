import React from 'react';
import { 
  LayoutTemplate, FileText, Cpu, MapPin, Store, ShieldCheck, 
  Search, Settings, Building2, Award, Sparkles, HelpCircle, 
  ArrowRight, ChevronRight, Check
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES } from '../data/seoData';
import { CtaBand } from '../components/CtaBand';
import { FaqAccordion } from '../components/FaqAccordion';

interface ServicesPageProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutTemplate': return <LayoutTemplate className="w-6 h-6 text-[#D4AF37]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#D4AF37]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#D4AF37]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#D4AF37]" />;
      case 'Store': return <Store className="w-6 h-6 text-[#D4AF37]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Search': return <Search className="w-6 h-6 text-[#D4AF37]" />;
      case 'Settings': return <Settings className="w-6 h-6 text-[#D4AF37]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#D4AF37]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'HelpCircle': return <HelpCircle className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Search className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="pt-28 sm:pt-36 min-h-screen">
      
      {/* Page Heading & Intro Line */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#D4AF37] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Comprehensive SEO Solutions</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-6">
          SEO & Optimization Services
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
          Tailored search engine optimization, website enhancements, and Google presence management designed to improve visibility and attract qualified client inquiries.
        </p>

        {/* Mandatory Note: “All services are quoted individually. Request a Custom Quote.” */}
        <div className="mt-8 inline-block p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs sm:text-sm text-neutral-300">
          <span className="font-semibold text-[#D4AF37]">Pricing Note: </span>
          All services are quoted individually. Request a Custom Quote.
        </div>
      </section>

      {/* Exactly 12 Service Cards Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="p-8 rounded-xl bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-[#D4AF37]/50 group-hover:bg-neutral-900/80 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs text-neutral-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-medium text-white mb-3 group-hover:text-[#FFF3D0] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-900 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">Custom Scoped</span>
                
                {/* “Request a Custom Quote” link to Contact page */}
                <button
                  onClick={() => onNavigate('contact', service.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-white transition-colors cursor-pointer group-hover:underline"
                >
                  <span>Request a Custom Quote</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 rounded-xl bg-neutral-950 border border-neutral-900 max-w-3xl mx-auto">
          <p className="text-xs text-neutral-400 leading-relaxed">
            Need multiple services integrated into a cohesive search strategy? We review your full web presence and present a single customized project proposal.
          </p>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-neutral-950/30">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2 block">
            Service FAQ
          </span>
          <h2 className="text-3xl font-serif font-medium text-white">
            Questions on Services & Quoting
          </h2>
        </div>
        <FaqAccordion showOwnerNotice={false} />
      </section>

      {/* CTA Band */}
      <CtaBand onNavigate={onNavigate} />

    </div>
  );
};
