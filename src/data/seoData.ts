import { ServiceItem, PortfolioProject, FaqItem } from '../types';

/**
 * PLACEHOLDER CONFIGURATION
 * Replace these placeholder values with your real details prior to launching.
 */
export const PLACEHOLDERS = {
  EMAIL: '[YOUR EMAIL]',
  WHATSAPP_NUMBER: '[YOUR WHATSAPP NUMBER]',
  LINKEDIN_URL: '[YOUR LINKEDIN URL]',
  TWITTER_URL: '[YOUR TWITTER URL]',
  FORM_ENDPOINT: '[FORM ENDPOINT]', // e.g. https://formspree.io/f/your_id or https://api.web3forms.com/submit
  LOGO: '[LOGO PLACEHOLDER]',
  PROFILE_PHOTO: '[PROFILE PHOTO PLACEHOLDER]',
};

/**
 * EXACT 12 SERVICES
 * As defined in specification. No invented packages, tiers, or prices.
 * Every service links to custom quote inquiry.
 */
export const SERVICES: ServiceItem[] = [
  {
    id: 'wordpress-seo',
    title: 'WordPress Website SEO Optimization',
    shortDescription: 'Comprehensive search engine optimization tailored specifically for WordPress websites.',
    iconName: 'LayoutTemplate',
    category: 'core',
  },
  {
    id: 'on-page-seo',
    title: 'On-Page SEO',
    shortDescription: 'Strategic optimization of website content, tags, headings, and internal linking structure.',
    iconName: 'FileText',
    category: 'core',
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    shortDescription: 'Optimization of website architecture, crawlability, indexation, and technical performance.',
    iconName: 'Cpu',
    category: 'technical',
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    shortDescription: 'Search engine optimization focused on increasing visibility in localized search queries.',
    iconName: 'MapPin',
    category: 'local',
  },
  {
    id: 'gbp-optimization',
    title: 'Google Business Profile Optimization and Management',
    shortDescription: 'End-to-end setup, optimization, and ongoing management of your Google Business Profile.',
    iconName: 'Store',
    category: 'local',
  },
  {
    id: 'gbp-verification',
    title: 'Google Business Profile Verification and Suspension Support',
    shortDescription: 'Dedicated assistance with profile verification and resolving profile suspension issues.',
    iconName: 'ShieldCheck',
    category: 'local',
  },
  {
    id: 'gsc-setup',
    title: 'Google Search Console Setup, Monitoring, and Optimization',
    shortDescription: 'Configuration, performance monitoring, and indexing optimization via Google Search Console.',
    iconName: 'Search',
    category: 'technical',
  },
  {
    id: 'rank-math-seo',
    title: 'Rank Math SEO Optimization',
    shortDescription: 'Configuration and strategic on-site optimization utilizing the Rank Math SEO framework.',
    iconName: 'Settings',
    category: 'core',
  },
  {
    id: 'citation-nap',
    title: 'Local Citation Building and NAP Consistency',
    shortDescription: 'Development of verified local business citations and Name, Address, and Phone consistency.',
    iconName: 'Building2',
    category: 'local',
  },
  {
    id: 'reputation-management',
    title: 'Online Reputation Management',
    shortDescription: 'Monitoring, strengthening, and managing your business search reputation and review presence.',
    iconName: 'Award',
    category: 'modern',
  },
  {
    id: 'geo-optimization',
    title: 'Generative Engine Optimization (GEO)',
    shortDescription: 'Strategic optimization to enhance business visibility across generative AI search experiences.',
    iconName: 'Sparkles',
    category: 'modern',
  },
  {
    id: 'aeo-optimization',
    title: 'Answer Engine Optimization (AEO)',
    shortDescription: 'Optimization structured to serve direct answers in voice search and AI answer engines.',
    iconName: 'HelpCircle',
    category: 'modern',
  },
];

/**
 * PORTFOLIO PROJECTS
 * Contains only confirmed real project engagements.
 * Absolutely no invented figures, fake rankings, or fabricated traffic metrics.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'culture-perfumes',
    title: 'Culture Perfumes',
    subtitle: 'South African perfume brand',
    category: 'Technical & On-Page SEO',
    categorySlug: 'technical-seo',
    description: 'Search engine optimization project for South African perfume brand Culture Perfumes, centered on Google Search Console setup and Rank Math SEO configuration.',
    workPerformed: [
      'Google Search Console setup and configuration',
      'Rank Math SEO plugin implementation and optimization',
      'Sitemap submission and indexation monitoring',
      'On-page metadata and snippet structuring'
    ],
    placeholderNote: 'Add Culture Perfumes Search Console performance and ranking screenshots here once verified.',
    beforePlaceholder: 'Add initial Search Console / Rank Math setup screenshot here',
    afterPlaceholder: 'Add optimized Search Console performance screenshot here',
  },
  {
    id: 'revive-wellness',
    title: 'Revive Wellness',
    subtitle: 'Wellness and health practice',
    category: 'Google Business Profile',
    categorySlug: 'google-business-profile',
    description: 'Google Business Profile verification project to establish verified presence on Google Maps and localized search.',
    workPerformed: [
      'Google Business Profile ownership verification support',
      'Business category and service mapping',
      'NAP (Name, Address, Phone) consistency review',
      'Profile information completion and compliance verification'
    ],
    placeholderNote: 'Add Revive Wellness profile verification confirmation screenshot here once verified.',
    beforePlaceholder: 'Add unverified / pending profile status screenshot here',
    afterPlaceholder: 'Add verified Google Business Profile live listing screenshot here',
  },
  {
    id: 'gbp-projects',
    title: 'Google Business Profile Optimization & Verification Projects',
    subtitle: 'Local business engagements',
    category: 'Local SEO & GBP',
    categorySlug: 'local-seo',
    description: 'Targeted Google Business Profile management, local visibility optimization, and reinstatement/verification across diverse business sectors.',
    workPerformed: [
      'Google Business Profile suspension appeal and reinstatement guidance',
      'Local search keyword alignment and category optimization',
      'Attributes, business hours, and service menu configuration',
      'Photo and updates strategy structure'
    ],
    placeholderNote: 'Add Google Business Profile client performance and verification screenshots here.',
    beforePlaceholder: 'Add pre-optimization Google Business Profile audit screenshot here',
    afterPlaceholder: 'Add optimized Google Business Profile ranking screenshot here',
  },
  {
    id: 'seo-audits',
    title: 'Website SEO Audits & Optimization Projects',
    subtitle: 'WordPress and technical optimization',
    category: 'Technical & On-Page SEO',
    categorySlug: 'on-page-seo',
    description: 'Comprehensive website SEO audit engagements identifying technical crawl issues, on-page optimization gaps, and structured data improvements.',
    workPerformed: [
      'Technical site health and crawlability review',
      'On-page title, meta description, and heading hierarchy audit',
      'Internal link architecture and URL structure evaluation',
      'Actionable SEO implementation and recommendations roadmap'
    ],
    placeholderNote: 'Add site audit reports and verified performance comparison screenshots here.',
    beforePlaceholder: 'Add baseline audit findings and issues screenshot here',
    afterPlaceholder: 'Add post-optimization health score and resolved issues screenshot here',
  },
];

/**
 * SAFE FAQ ITEMS
 * Generic, safe, and factual answers without timelines, prices, or ranking guarantees.
 */
export const FAQS: FaqItem[] = [
  {
    question: 'What SEO services does Jewels provide?',
    answer: 'Jewels provides 12 specialized SEO and website optimization services, including WordPress Website SEO, On-Page SEO, Technical SEO, Local SEO, Google Business Profile Optimization and Management, GBP Verification and Suspension Support, Google Search Console Setup and Monitoring, Rank Math SEO Optimization, Local Citation Building (NAP), Online Reputation Management, Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO).',
    ownerNote: 'Flagged for owner review: Edit or adjust service highlights as your service offerings evolve.',
  },
  {
    question: 'How do custom quotes work?',
    answer: 'Because every website, market competition level, and project scope is unique, all services are quoted individually following an initial consultation. There are no rigid pre-set tiers or hidden costs. After reviewing your website and objectives, Jewels provides a tailored proposal with clear scope of work.',
    ownerNote: 'Flagged for owner review: Ensure this matches your intended quotation and onboarding workflow.',
  },
  {
    question: 'How do I request an SEO consultation?',
    answer: 'You can request an SEO consultation by completing the enquiry form on our Contact page, sending an email directly to [YOUR EMAIL], or messaging via WhatsApp at [YOUR WHATSAPP NUMBER]. We will review your website details and schedule a discussion.',
    ownerNote: 'Flagged for owner review: Update placeholder contact details prior to publishing.',
  },
  {
    question: 'Does Jewels specialize in WordPress and Google Business Profile?',
    answer: 'Yes. Jewels has dedicated expertise in WordPress search optimization (including Rank Math SEO and on-page structure) as well as Google Business Profile setup, verification, suspension resolution, and local search presence.',
    ownerNote: 'Flagged for owner review: Add any additional CMS or technical platforms you support.',
  },
];

/**
 * CORE AREAS STRIP FOR HOME
 */
export const CORE_AREAS = [
  'WordPress SEO',
  'Local SEO',
  'Technical SEO',
  'Google Business Profile',
  'Google Search Console',
];

/**
 * ABOUT EXPERTISE LIST
 */
export const ABOUT_EXPERTISE = [
  'Website optimization',
  'WordPress SEO',
  'Google Business Profile optimization',
  'Local SEO',
  'Google Search Console',
  'Technical SEO',
  'Online visibility',
];
