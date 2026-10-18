import React, { useState, useEffect } from 'react';
import { 
  Mail, MessageCircle, Linkedin, Instagram, Send, CheckCircle2, 
  AlertCircle, Sparkles, ExternalLink, ArrowRight, Loader2 
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES, CONTACT_DETAILS } from '../data/seoData';

interface ContactPageProps {
  initialServiceId?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialServiceId }) => {
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
  const [submitError, setSubmitError] = useState<string | null>(null);

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
      newErrors.message = 'Please describe your search objectives or project scope.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formElement = e.currentTarget;
      const formDataPayload = new FormData(formElement);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formDataPayload,
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setIsSubmitted(true);
        resetForm();
      } else {
        setSubmitError(
          'Could not send your enquiry. Please email joseprecious21@gmail.com or use WhatsApp instead.'
        );
      }
    } catch {
      setSubmitError(
        'Could not send your enquiry. Please email joseprecious21@gmail.com or use WhatsApp instead.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
  };

  const handleSendAnother = () => {
    resetForm();
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return (
    <div className="pt-28 sm:pt-36 min-h-screen bg-[var(--ink)]">
      
      {/* Page Heading & Invite Line (DARK SECTION: #0A0A0A) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--gold)] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase font-medium text-[11px]">Direct SEO Inquiry</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[var(--white)] mb-6">
          Contact Jewels
        </h1>

        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed font-light">
          We invite you to discuss your SEO needs, review your current search visibility, and explore strategic optimization opportunities for your website.
        </p>
      </section>

      {/* Main Grid: Form on Left/Center, Direct Contact Channels on Right */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* PROJECT ENQUIRY FORM CONTAINER (Charcoal #141414, Graphite #2A2A2A border) */}
          <div className="lg:col-span-7 bg-[var(--card)] border border-[var(--line)] rounded-2xl p-8 sm:p-10 shadow-2xl">
            
            {/* Clear Heading above form: "Request an SEO Consultation" */}
            <div className="mb-8 pb-6 border-b border-[var(--line)]">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] block mb-1">
                Consultation Proposal
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--white)]">
                Request an SEO Consultation
              </h2>
              <p className="text-xs text-[var(--muted)] mt-1 font-light">
                All consultations and quotes are tailored to your domain scale and competition.
              </p>
            </div>

            {/* Submission Failure Alert (Red #EA4335) */}
            {submitError && (
              <div 
                role="alert"
                className="mb-6 p-4 rounded-xl bg-red-950/40 border border-[var(--alert)]/50 flex items-start gap-3 text-sm text-red-200 animate-in fade-in"
              >
                <AlertCircle className="w-5 h-5 text-[var(--alert)] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium text-[var(--white)]">{submitError}</p>
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                    <a 
                      href={`mailto:${CONTACT_DETAILS.EMAIL}`} 
                      className="text-[var(--gold)] underline hover:text-[var(--white)]"
                    >
                      Email directly ({CONTACT_DETAILS.EMAIL})
                    </a>
                    <span>·</span>
                    <a 
                      href={CONTACT_DETAILS.WHATSAPP_URL} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[var(--success)] underline hover:text-[var(--white)]"
                    >
                      Open WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            )}

            {isSubmitted ? (
              <div className="py-12 px-6 text-center bg-[var(--ink)]/60 rounded-xl border border-[var(--line)] animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[var(--success)]/10 border border-[var(--success)]/40 flex items-center justify-center text-[var(--success)] mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif font-medium text-[var(--white)] mb-2">
                  Thanks, your enquiry has been sent.
                </h3>
                <p className="text-sm text-[var(--muted)] max-w-md mx-auto leading-relaxed mb-6 font-light">
                  Jewels will get back to you soon to review your website details and discuss your search goals.
                </p>
                <button
                  type="button"
                  onClick={handleSendAnother}
                  className="px-5 py-2.5 rounded-lg bg-[var(--card)] hover:bg-[#1E1E1E] border border-[var(--line)] hover:border-[var(--gold)] text-xs font-mono text-[var(--white)] transition-all cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST" 
                onSubmit={handleSubmit} 
                noValidate 
                className="space-y-6"
              >
                
                {/* 2. Web3Forms Hidden Access Key */}
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="328096a4-bc44-47c1-967b-7db736f64d3a" 
                />

                {/* 3. Hidden inputs: Subject and From Name */}
                <input 
                  type="hidden" 
                  name="subject" 
                  value="New SEO enquiry from the Jewels website" 
                />
                <input 
                  type="hidden" 
                  name="from_name" 
                  value="Jewels Website" 
                />

                {/* 4. Honeypot anti-spam check (hidden from users) */}
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  style={{ display: 'none' }} 
                  className="hidden" 
                />
                
                {/* Field 1: Name (required) */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                    Your Name <span className="text-[var(--gold)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-lg bg-[var(--card)] border text-sm text-[var(--white)] placeholder-[var(--muted)] transition-all focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] ${
                      errors.name ? 'border-[var(--alert)] bg-red-950/20' : 'border-[var(--line)]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-[var(--alert)] mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field 2: Email (required, valid email) */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                    Email Address <span className="text-[var(--gold)]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@yourcompany.com"
                    className={`w-full px-4 py-3 rounded-lg bg-[var(--card)] border text-sm text-[var(--white)] placeholder-[var(--muted)] transition-all focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] ${
                      errors.email ? 'border-[var(--alert)] bg-red-950/20' : 'border-[var(--line)]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-[var(--alert)] mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Field 3: Website URL (optional) */}
                <div>
                  <label htmlFor="website" className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                    Website URL <span className="text-[var(--muted)] text-[11px] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--card)] border border-[var(--line)] text-sm text-[var(--white)] placeholder-[var(--muted)] transition-all focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"
                  />
                </div>

                {/* Field 4: Service of Interest (Dropdown with all 12 services) */}
                <div>
                  <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                    Service of Interest <span className="text-[var(--gold)]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.serviceOfInterest}
                      onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg bg-[var(--card)] border text-sm text-[var(--white)] transition-all focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] appearance-none cursor-pointer ${
                        errors.serviceOfInterest ? 'border-[var(--alert)] bg-red-950/20' : 'border-[var(--line)]'
                      }`}
                    >
                      <option value="" disabled className="bg-[var(--card)] text-[var(--muted)]">
                        Select a specialized service...
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-[var(--card)] text-[var(--white)]">
                          {s.title}
                        </option>
                      ))}
                      <option value="Multiple Integrated Services" className="bg-[var(--card)] text-[var(--white)]">
                        Multiple Integrated Services / Custom Scope
                      </option>
                    </select>
                  </div>
                  {errors.serviceOfInterest && (
                    <p className="text-xs text-[var(--alert)] mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.serviceOfInterest}</span>
                    </p>
                  )}
                </div>

                {/* Field 5: Message (required) */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                    Project Details & Objectives <span className="text-[var(--gold)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current search status, key objectives, or specific challenges..."
                    className={`w-full px-4 py-3 rounded-lg bg-[var(--card)] border text-sm text-[var(--white)] placeholder-[var(--muted)] transition-all focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] resize-none ${
                      errors.message ? 'border-[var(--alert)] bg-red-950/20' : 'border-[var(--line)]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-[var(--alert)] mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button with sending state (Gold button with visible hover to #E2C25A) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--ink)] font-semibold text-sm tracking-wide uppercase transition-all duration-200 shadow-xl shadow-[var(--gold)]/15 hover:shadow-[var(--gold)]/30 focus-visible:ring-2 focus-visible:ring-[var(--gold)] cursor-pointer active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[var(--ink)]" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* DIRECT CONTACT CHANNELS & SOCIAL PROFILES */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Founder Profile Card */}
            <div className="bg-[var(--card)] border border-[var(--line)] rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-4 mb-5">
                {/* Profile Photo with Gold Ring */}
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl p-[2px] bg-gradient-to-br from-[var(--gold)] via-[var(--gold-hover)] to-[var(--line)] shrink-0 shadow-lg shadow-[var(--gold)]/10">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-[var(--ink)] flex items-center justify-center">
                    <img
                      src={CONTACT_DETAILS.PROFILE_PHOTO}
                      alt="Profile photo of the founder of Jewels, SEO specialist"
                      width={72}
                      height={72}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--success)]/10 border border-[var(--success)]/40 text-[10px] font-mono text-[var(--success)] mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
                    <span>Accepting New Inquiries</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-medium text-[var(--white)] truncate">
                    Jewels
                  </h3>
                  <p className="text-xs font-mono text-[var(--gold)]">
                    Founder & SEO Specialist
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--muted)] font-light leading-relaxed mb-4 pb-4 border-b border-[var(--line)]">
                Direct, one-on-one collaboration. You discuss your website goals directly with Jewels to review organic search visibility, <span className="text-[var(--google-blue)] font-medium">Google Business Profile</span> performance, and technical architecture.
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[var(--muted)]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold)] shrink-0" />
                  <span>Custom Scoped</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold)] shrink-0" />
                  <span>No Junior Handoffs</span>
                </div>
              </div>
            </div>

            {/* Direct contact card */}
            <div className="bg-[var(--card)] border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] block mb-2">
                Fast Response & Verified Profiles
              </span>
              <h3 className="text-xl font-serif font-medium text-[var(--white)] mb-6">
                Direct Communication
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                {/* WhatsApp Button (Success / Green #34A853) */}
                <a
                  href={CONTACT_DETAILS.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jewels on WhatsApp (opens in a new tab)"
                  className="flex items-center justify-between p-4 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--success)] hover:bg-[#1E1E1E] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-[var(--success)]/60 flex items-center justify-center text-[var(--success)] group-hover:scale-105 transition-transform shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-[var(--muted)]">WhatsApp</div>
                      <div className="text-sm font-medium text-[var(--white)] group-hover:text-[var(--success)] transition-colors truncate">
                        Direct Chat Link
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--success)] transition-colors shrink-0 ml-2" />
                </a>

                {/* Email Link (Dark button lightening with gold border) */}
                <a
                  href={`mailto:${CONTACT_DETAILS.EMAIL}`}
                  aria-label={`Email Jewels directly at ${CONTACT_DETAILS.EMAIL}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--gold)] hover:bg-[#1E1E1E] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[var(--card)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)] group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-[var(--muted)]">Email</div>
                      <div className="text-sm font-medium text-[var(--white)] group-hover:text-[var(--gold)] transition-colors truncate">
                        {CONTACT_DETAILS.EMAIL}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--white)] transition-colors shrink-0 ml-2" />
                </a>

                {/* TikTok Contact Card */}
                <a
                  href={CONTACT_DETAILS.TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jewels on TikTok (opens in a new tab)"
                  className="flex items-center justify-between p-4 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--gold)] hover:bg-[#1E1E1E] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[var(--card)] border border-[var(--line)] flex items-center justify-center text-[#C9A227] group-hover:text-[#E2C25A] group-hover:scale-105 transition-all shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-[#C9A227] group-hover:text-[#E2C25A] transition-colors"
                        aria-hidden="true"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-[var(--muted)]">TikTok</div>
                      <div className="text-sm font-medium text-[var(--white)] group-hover:text-[var(--gold)] transition-colors truncate">
                        @jewelsteam_1
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--white)] transition-colors shrink-0 ml-2" />
                </a>

                {/* Instagram Contact Card */}
                <a
                  href={CONTACT_DETAILS.INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jewels on Instagram (opens in a new tab)"
                  className="flex items-center justify-between p-4 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--gold)] hover:bg-[#1E1E1E] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[var(--card)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)] group-hover:text-[var(--gold-hover)] group-hover:scale-105 transition-all shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-[var(--muted)]">Instagram</div>
                      <div className="text-sm font-medium text-[var(--white)] group-hover:text-[var(--gold)] transition-colors truncate">
                        @jewelsteamgrowth_seo_solution
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--white)] transition-colors shrink-0 ml-2" />
                </a>

                {/* LinkedIn Contact Card */}
                <a
                  href={CONTACT_DETAILS.LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jewels on LinkedIn (opens in a new tab)"
                  className="flex items-center justify-between p-4 rounded-xl bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--gold)] hover:bg-[#1E1E1E] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[var(--card)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)] group-hover:text-[var(--gold-hover)] group-hover:scale-105 transition-all shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-[var(--muted)]">LinkedIn</div>
                      <div className="text-sm font-medium text-[var(--white)] group-hover:text-[var(--gold)] transition-colors truncate">
                        Precious Ayofe
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--white)] transition-colors shrink-0 ml-2" />
                </a>
              </div>
            </div>

            {/* Privacy & Custom Scoping Guarantee */}
            <div className="p-6 rounded-2xl bg-[var(--card)]/60 border border-[var(--line)] text-xs text-[var(--muted)] space-y-2">
              <div className="text-[var(--white)] font-medium">Consultation Protocol:</div>
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
