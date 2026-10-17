import { ServiceItem, PortfolioProject, FaqItem } from '../types';

/**
 * VERIFIED CONTACT DETAILS & PROFILE LINKS
 * Section 2 Specification: Real verified channels for Jewels.
 */
export const CONTACT_DETAILS = {
  EMAIL: 'joseprecious21@gmail.com',
  WHATSAPP_URL: 'https://wa.me/qr/ALZSABNAHJVZC1',
  INSTAGRAM_URL: 'https://www.instagram.com/jewelsteamgrowth_seo_solution/',
  LINKEDIN_URL: 'https://www.linkedin.com/in/precious-ayofe-b252a5428/',
  FORM_ENDPOINT: 'https://api.web3forms.com/submit',
  WEB3FORMS_ACCESS_KEY: '328096a4-bc44-47c1-967b-7db736f64d3a',
  LOGO: 'https://i.ibb.co/7NjxXKX7/PGT-Global-athletic-crest-logo.png',
  PROFILE_PHOTO: 'https://i.postimg.cc/6qsCDSsj/photo-5927181862533009600-w-%282%29.jpg',
};

export const PLACEHOLDERS = CONTACT_DETAILS;

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
 * EXACT 6 PORTFOLIO IMAGES
 * As defined in Section 3 of the specification.
 * Images 3 to 6 are labeled with neutral titles until confirmed by owner.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'enterprise-dashboard',
    title: 'Enterprise SEO Growth Dashboard',
    subtitle: 'Search Analytics & Performance',
    category: 'Reporting',
    categorySlug: 'reporting',
    caption: 'Comprehensive enterprise search visibility, organic keyword progression, and performance analytics dashboard.',
    imageUrl: 'https://i.postimg.cc/6Q8hGCtm/Enterprise-SEO-Growth-Dashboard.png',
    imageAlt: 'Enterprise SEO Growth Dashboard showing organic performance analytics and search metrics',
    description: 'Centralized enterprise search reporting and data tracking displaying aggregate impressions, keyword expansion trends, and search engine visibility index.',
    workPerformed: [
      'Enterprise organic visibility tracking architecture',
      'Unified Google Search Console and analytics data synthesis',
      'Keyword ranking trajectory and click-through rate monitoring',
      'Executive performance reporting and milestone verification'
    ],
  },
  {
    id: 'results-before-after',
    title: 'SEO Results: Before and After',
    subtitle: 'Comparative Growth Analysis',
    category: 'Reporting',
    categorySlug: 'reporting',
    caption: 'Comparative search performance documentation showing pre-optimization baseline against verified growth outcomes.',
    imageUrl: 'https://i.postimg.cc/hGX07Vc6/SEO-Results-Before-and-After.png',
    imageAlt: 'SEO Results Before and After comparative performance analytics screenshot',
    description: 'Direct before-and-after search evaluation documenting metric improvements from initial audit through systematic implementation and indexation maturation.',
    workPerformed: [
      'Pre-engagement search visibility and baseline measurement',
      'Implementation of core technical and on-page improvements',
      'Post-optimization crawl reconciliation and index re-evaluation',
      'Ongoing comparative ranking and query capture analysis'
    ],
  },
  {
    id: 'project-screenshot-1',
    title: 'Project screenshot 1',
    subtitle: 'Google Business Profile Work',
    category: 'Google Business Profile',
    categorySlug: 'google-business-profile',
    caption: 'Local search and Google Business Profile engagement documentation [Awaiting owner confirmation].',
    imageUrl: 'https://i.postimg.cc/g2SDJgFj/IMG-20260302-WA0024%281%29.jpg',
    imageAlt: 'Project screenshot 1: Google Business Profile verification and management engagement',
    description: 'Google Business Profile management, local visibility verification, and listing configuration documentation.',
    workPerformed: [
      'Profile setup, verification, and NAP consistency review',
      'Local search keyword alignment and service classification',
      'Maps presence and discovery optimization',
      'Awaiting owner confirmation of specific client details'
    ],
    placeholderNote: 'Update title, category tag, and caption once project background is confirmed.',
  },
  {
    id: 'project-screenshot-2',
    title: 'Project screenshot 2',
    subtitle: 'Technical SEO Optimization',
    category: 'Technical SEO',
    categorySlug: 'technical-seo',
    caption: 'Technical search optimization and indexing performance audit [Awaiting owner confirmation].',
    imageUrl: 'https://i.postimg.cc/YCqRMJVr/photo-5886440996764061246-x.jpg',
    imageAlt: 'Project screenshot 2: Technical SEO audit and site performance evaluation',
    description: 'Technical site architecture review, crawl optimization, and structured search data implementation.',
    workPerformed: [
      'Technical health audit and crawlability inspection',
      'Sitemap, robots.txt, and indexation evaluation',
      'Site performance and schema integration review',
      'Awaiting owner confirmation of specific client details'
    ],
    placeholderNote: 'Update title, category tag, and caption once project background is confirmed.',
  },
  {
    id: 'project-screenshot-3',
    title: 'Project screenshot 3',
    subtitle: 'Local SEO Strategy',
    category: 'Local SEO',
    categorySlug: 'local-seo',
    caption: 'Localized search visibility and citation structure implementation [Awaiting owner confirmation].',
    imageUrl: 'https://i.postimg.cc/y8QPdL41/photo-6043965119982669898-y.jpg',
    imageAlt: 'Project screenshot 3: Local SEO and citation consistency project',
    description: 'Targeted local search optimization, citation alignment, and geo-targeted ranking enhancement.',
    workPerformed: [
      'Local citation building and directory audit',
      'Localized content structuring and geographic relevance',
      'Review profile tracking and reputation management support',
      'Awaiting owner confirmation of specific client details'
    ],
    placeholderNote: 'Update title, category tag, and caption once project background is confirmed.',
  },
  {
    id: 'project-screenshot-4',
    title: 'Project screenshot 4',
    subtitle: 'Search Analytics & Reporting',
    category: 'Reporting',
    categorySlug: 'reporting',
    caption: 'Search analytics review and strategic optimization tracking [Awaiting owner confirmation].',
    imageUrl: 'https://i.postimg.cc/kgXsqkZ7/Untitled-design-%2810%29.png',
    imageAlt: 'Project screenshot 4: Search console and ranking trajectory dashboard',
    description: 'Search performance analytics tracking, ranking progress reporting, and strategic optimization review.',
    workPerformed: [
      'Search query impression and click tracking',
      'Target page ranking progression analysis',
      'Ongoing quarterly optimization roadmap formulation',
      'Awaiting owner confirmation of specific client details'
    ],
    placeholderNote: 'Update title, category tag, and caption once project background is confirmed.',
  },
];

/**
 * CLIENT ENGAGEMENTS (Requiring Verified Screenshots from Owner)
 */
export const VERIFIED_CASE_STUDIES = [
  {
    id: 'culture-perfumes',
    title: 'Culture Perfumes',
    subtitle: 'South African perfume brand',
    category: 'Technical & On-Page SEO',
    description: 'Search engine optimization project for South African perfume brand Culture Perfumes, centered on Google Search Console setup and Rank Math SEO configuration.',
    workPerformed: [
      'Google Search Console setup and verification',
      'Rank Math SEO plugin configuration and optimization',
      'XML sitemap submission and indexation monitoring',
      'E-commerce product on-page metadata optimization'
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
    answer: 'You can request an SEO consultation by completing the enquiry form on our Contact page, sending an email directly to joseprecious21@gmail.com, or messaging via WhatsApp at https://wa.me/qr/ALZSABNAHJVZC1. We will review your website details and schedule a discussion.',
    ownerNote: 'Direct inquiry channels: contact form, direct email (joseprecious21@gmail.com), or direct WhatsApp chat.',
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
 * ABOUT TEXT - EXACT COPY FROM SECTION 5
 */
export const ABOUT_TEXT = 
  "Jewels is focused on helping businesses improve their online visibility, strengthen their search engine presence, and reach potential customers through strategic SEO and website optimization. The portfolio showcases SEO projects, website improvements, Google Business Profile work, and case studies showing project progress and outcomes.";

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
