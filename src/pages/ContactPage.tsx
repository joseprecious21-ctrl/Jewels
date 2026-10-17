import React, { useState, useEffect } from 'react';
import { 
  Mail, MessageCircle, Linkedin, Instagram, Send, CheckCircle2, 
  AlertCircle, Sparkles, ExternalLink, Globe, ArrowRight 
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES, CONTACT_DETAILS } from '../data/seoData';

interface ContactPageProps {
  initialServiceId?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialServiceId, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
    serviceOfInterest: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      const match = SERVICES.find((s) => s.id === initialServiceId);
      if (match) {
        setFormData((prev) => ({ ...prev, serviceOfInterest: match.title }));
      }
    }
  }, [initialServiceId]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.serviceOfInterest) {
      newErrors.serviceOfInterest = 'Please select a service of interest.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your website or objectives.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulated reliable submit with endpoint dispatch hook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      websiteUrl: '',
      serviceOfInterest: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="pt-28 sm:pt-36 min-h-screen">
      
      {/* Page Heading & Invite Line */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#D4AF37] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Direct SEO Inquiry</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-6">
          Contact Jewels
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
          We invite you to discuss your SEO needs, review your current search visibility, and explore strategic optimization opportunities for your website.
        </p>
      </section>

      {/* Main Grid: Form on Left/Center, Direct Contact Channels on Right */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* PROJECT ENQUIRY FORM */}
          <div className="lg:col-span-7 bg-neutral-950/80 border border-neutral-800 rounded-2xl p-8 sm:p-10 shadow-xl">
            
            {/* Clear Heading above form: "Request an SEO Consultation" */}
            <div className="mb-8 pb-6 border-b border-neutral-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block mb-1">
                Consultation Proposal
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white">
                Request an SEO Consultation
              </h2>
              <p className="text-xs text-neutral-400 mt-1 font-light">
                All consultations and quotes are tailored to your domain scale and competition.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 px-6 text-center bg-neutral-900/50 rounded-xl border border-neutral-800 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif font-medium text-white mb-2">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed mb-6 font-light">
                  Thank you for reaching out. We will review your website details and reply promptly to discuss your search goals and customized proposal.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-300 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Your Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-lg bg-neutral-900 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors ${
                      errors.name ? 'border-red-500/80 bg-red-950/10' : 'border-neutral-800'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Email Address <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@yourcompany.com"
                    className={`w-full px-4 py-3 rounded-lg bg-neutral-900 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors ${
                      errors.email ? 'border-red-500/80 bg-red-950/10' : 'border-neutral-800'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Website URL */}
                <div>
                  <label htmlFor="websiteUrl" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Website URL <span className="text-neutral-500 text-[11px] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                {/* Service of Interest (Dropdown with all 12 services) */}
                <div>
                  <label htmlFor="serviceOfInterest" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Service of Interest <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="serviceOfInterest"
                      value={formData.serviceOfInterest}
                      onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg bg-neutral-900 border text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer ${
                        errors.serviceOfInterest ? 'border-red-500/80 bg-red-950/10' : 'border-neutral-800'
                      }`}
                    >
                      <option value="" disabled className="bg-neutral-900 text-neutral-500">
                        Select a specialized service...
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-neutral-900 text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Multiple Integrated Services" className="bg-neutral-900 text-white">
                        Multiple Integrated Services / Custom Scope
                      </option>
                    </select>
                  </div>
                  {errors.serviceOfInterest && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.serviceOfInterest}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Project Details & Objectives <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current search status, key objectives, or specific challenges..."
                    className={`w-full px-4 py-3 rounded-lg bg-neutral-900 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none ${
                      errors.message ? 'border-red-500/80 bg-red-950/10' : 'border-neutral-800'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Form endpoint placeholder notice for owner */}
                <div className="p-3 bg-neutral-900/60 rounded-lg border border-neutral-800/80 text-[11px] font-mono text-neutral-400">
                  <span className="text-[#D4AF37]">Form Endpoint Placeholder: </span>
                  Connect to your preferred service (e.g., Formspree, Web3Forms) at 
                  <code className="text-neutral-300 ml-1">action="{CONTACT_DETAILS.FORM_ENDPOINT}"</code>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-black font-semibold text-sm tracking-wide uppercase transition-all duration-200 shadow-xl shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/25 focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* DIRECT CONTACT CHANNELS & SOCIAL PROFILES */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct contact card */}
            <div className="bg-neutral-950/80 border border-neutral-800 rounded-2xl p-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block mb-2">
                Fast Response Channels
              </span>
              <h3 className="text-xl font-serif font-medium text-white mb-6">
                Direct Communication
              </h3>

              <div className="space-y-4">
                {/* WhatsApp Button */}
                <a
                  href={CONTACT_DETAILS.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-400">WhatsApp Instant Chat</div>
                      <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                        Direct Chat Link
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* Email Link */}
                <a
                  href={`mailto:${CONTACT_DETAILS.EMAIL}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-[#D4AF37]/50 hover:bg-neutral-900 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-neutral-400">Email Address</div>
                      <div className="text-sm font-medium text-white group-hover:text-[#D4AF37] transition-colors truncate">
                        {CONTACT_DETAILS.EMAIL}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
                </a>
              </div>

              {/* Social Profile Links: LinkedIn & Instagram */}
              <div className="mt-8 pt-6 border-t border-neutral-900">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                  Verified Profiles
                </span>
                
                <div className="flex flex-col gap-2.5">
                  <a
                    href={CONTACT_DETAILS.LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-[#D4AF37]/50 hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-xs font-medium">LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href={CONTACT_DETAILS.INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-[#D4AF37]/50 hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Instagram className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-xs font-medium">Instagram Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

            </div>

            {/* Privacy & Custom Scoping Guarantee */}
            <div className="p-6 rounded-2xl bg-neutral-950/40 border border-neutral-900 text-xs text-neutral-400 space-y-2">
              <div className="text-neutral-300 font-medium">Consultation Protocol:</div>
              <p className="leading-relaxed">
                All client submissions and site audits are handled with complete confidentiality. Jewels provides clear, actionable feedback with custom scope-of-work documentation.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
