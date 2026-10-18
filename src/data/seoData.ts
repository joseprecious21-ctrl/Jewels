import { ServiceItem, PortfolioProject, FaqItem, BlogPost } from '../types';

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
  LOGO: '/logo-source.jpg',
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
  {
    id: 'seo-ranking-results',
    title: 'SEO Ranking Results',
    subtitle: 'Search Ranking & Performance',
    category: 'Rankings',
    categorySlug: 'rankings',
    caption: 'Search ranking progress from SEO project work.',
    imageUrl: '/seo-ranking-results.png',
    imageAlt: 'SEO ranking results screenshot from a Jewels project',
    description: 'Search ranking progress from SEO project work.',
    workPerformed: [
      'Search ranking progress and query capture analysis',
      'Google Search Console search metrics documentation',
      'Impression progression and click trajectory tracking',
      'Add project name, keywords, and verified results here.'
    ],
    placeholderNote: 'Add project name, keywords, and verified results here.',
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

/**
 * PUBLISHED BLOG POSTS
 * Verified practical local SEO and Google Business Profile guides written by Jewels.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'optimize-google-business-profile',
    slug: 'optimize-google-business-profile',
    title: 'How to Optimize Your Google Business Profile to Get Found Locally',
    metaDescription: 'Learn practical steps to optimize your Google Business Profile so nearby customers can find your business. Tips from Jewels on local SEO.',
    categories: ['Google Business Profile', 'Local SEO'],
    excerpt: 'Learn practical steps to optimize your Google Business Profile so nearby customers can find your business. Tips from Jewels on local SEO.',
    publishDate: 'October 18, 2026',
    readTime: '7 min read',
    author: 'Jewels',
    featuredImagePlaceholderNote: 'Add featured image here',
    featuredImageAlt: 'Google Business Profile local SEO optimization guide showing map ranking factors and business verification',
    sections: [
      {
        heading: 'Why Google Business Profile Is the Foundation of Local Visibility',
        sectionNumber: '01',
        paragraphs: [
          'When potential clients in your geographic area search for your services—whether "SEO consultant near me", "specialist medical clinic", or "boutique retailer"—Google prioritizes the Local 3-Pack and Maps results above traditional organic rankings. For local businesses, this three-pack captures between 44% and 68% of total search click volume.',
          'Google decides which businesses to show based on three primary algorithmic pillars: Relevance (how well your listing matches what the user is looking for), Distance (how close your location or service boundary is to the searcher), and Prominence (how authoritative, well-reviewed, and active your business appears across the web).',
          'Neglecting your Google Business Profile leaves the most lucrative, high-intent local inquiries to direct competitors. The following steps outline how to build an active, prominent, and suspension-resistant listing.'
        ],
        keyTakeaways: [
          'The Google Local 3-Pack captures the majority of local high-intent conversions.',
          'Local ranking relies on the tri-factor of Relevance, Distance, and Prominence.',
          'An optimized profile generates inbound phone calls, directions, and website bookings without paid ads.'
        ]
      },
      {
        heading: 'Step 1: Choose Your Primary and Secondary Business Categories Wisely',
        sectionNumber: '02',
        paragraphs: [
          'Your Primary Category carries the single heaviest weight in Google’s local ranking algorithm. If your business provides multiple complementary services, resist the temptation to pick a vague overarching category. Choose the exact specific discipline that generates your highest margin or most qualified inquiries.',
          'For example, choosing "Internet Marketing Service" or "Marketing Agency" provides far weaker signals for local discovery than "Website Designer" or specific niche descriptors where applicable. Always audit the top 3 ranking listings in your metropolitan target area using Search to see which primary category dominates their profile.',
          'After establishing your primary classification, assign up to 9 secondary categories. Secondary categories should reflect distinct, verified services you provide without category stuffing.'
        ],
        proTip: 'Never select categories that you cannot verify with on-site service pages. Google cross-references your listing categories against the headings and text of your linked website.'
      },
      {
        heading: 'Step 2: Enforce Strict NAP Consistency and Exact Business Details',
        sectionNumber: '03',
        paragraphs: [
          'NAP stands for Name, Address, and Phone number. Absolute parity between your Google Business Profile, your official website footer, and external directory citations (Yelp, Apple Maps, Yellow Pages, industry registries) is mandatory.',
          'A frequent mistake made by ambitious business owners is stuffing secondary keywords into their official business name (e.g., "Jewels - Best SEO Agency & Local Web Design Firm"). Google’s automated compliance algorithms actively scan for name discrepancies against company registration records and state filings. Artificial keyword additions can trigger immediate unannounced suspensions.',
          'If you serve clients at their location rather than hosting them at a physical storefront, designate your profile as a Service Area Business (SAB) and hide your residential street address. Always append campaign UTM parameters to your website button (e.g., ?utm_source=google&utm_medium=gbp&utm_campaign=local_listing) to isolate profile traffic in Google Analytics and Google Search Console.'
        ],
        keyTakeaways: [
          'Match business name letter-for-letter with official business registration.',
          'Never add unbranded promotional keywords to your profile title.',
          'Utilize campaign UTM tags on your website URL to measure profile conversions accurately.'
        ]
      },
      {
        heading: 'Step 3: Write a High-Conversion Business Description and Itemized Services',
        sectionNumber: '04',
        paragraphs: [
          'Google grants you 750 characters for your business description. While the keywords inside this field do not directly dictate algorithmic placement, they profoundly influence conversion rates when prospects view your profile card.',
          'Front-load the first 250 characters with your core specialty, years of experience, unique value proposition, and the principal regions you serve. The remaining copy should outline your working process, client outcomes, and a clear invitation to schedule a consultation.',
          'Under the "Services" tab, do not settle for default generic lists. Populate each service with an itemized title, realistic price indicators or consultation tier markers, and a descriptive paragraph detailing deliverables. When searchers query specific service phrases, Google displays bold "Provides: [Service Name]" justifications directly on your map listing.'
        ]
      },
      {
        heading: 'Step 4: Develop a Consistent Review Velocity and Response Strategy',
        sectionNumber: '05',
        paragraphs: [
          'Review volume alone does not guarantee high rankings. Google’s Prominence algorithms heavily reward review velocity—the steady, consistent arrival of authentic customer testimonials over time—and review sentiment.',
          'Never purchase fake reviews or run mass review blasts that trigger spam filters. Instead, build a systematic post-project routine: generate your custom Google Review shortlink (accessible in your GBP dashboard) and send it to satisfied clients immediately upon milestone completion.',
          'Equally vital is your response protocol. Reply to every review within 24 to 48 hours. When answering positive reviews, naturally mention the specific service performed (e.g., "Thank you for trusting Jewels with your WordPress SEO and technical audit"). If an unfavorable review occurs, acknowledge the client’s feedback professionally without defensive debate, and offer an offline resolution channel via email or phone.'
        ],
        keyTakeaways: [
          'Steady review velocity outranks sporadic bursts of historical reviews.',
          'Include natural service keywords in your owner replies without keyword stuffing.',
          'Respond to 100% of reviews to signal active business ownership to Google.'
        ]
      },
      {
        heading: 'Step 5: High-Quality Geotagged Visuals and Weekly Google Posts',
        sectionNumber: '06',
        paragraphs: [
          'Profiles containing genuine, regularly updated photography receive significantly higher engagement than those relying on stock imagery. Upload high-resolution photos of your workspace, team in action, branded collateral, and before-and-after project milestones.',
          'Ensure all images are taken in crisp lighting, formatted as clean JPEGs or PNGs, and reflect actual premises and deliverables. Avoid heavy promotional overlays or massive phone numbers stamped across images, as Google’s Cloud Vision API flags low-quality promotional banners.',
          'Utilize Google Posts as your local broadcast channel. Publish at least one weekly update sharing practical advice, recent client case study achievements, or seasonal announcements. Always attach a primary action button—such as "Learn more", "Call now", or "Book"—linking directly to your relevant website page or contact form.'
        ],
        proTip: 'Google Posts expire from primary view after several months, but continuous posting signals to the algorithm that the entity is actively operating in real-time.'
      },
      {
        heading: 'Avoiding the Red Flag Suspension Triggers That Derail Local Rankings',
        sectionNumber: '07',
        paragraphs: [
          'Google Business Profile suspensions have surged as Google tightens anti-spam measures. The most frequent causes include using virtual offices, co-working spaces with no permanent physical signage, sudden unverified address changes, or multiple business listings sharing identical phone numbers.',
          'If your listing is suspended or flagged for deceptive content, avoid panicking and creating a new profile. Duplicate profiles compound violations. Instead, compile authoritative documentation: business utility bills (electricity or water), government business registration certificates, commercial lease agreements, and photographs of permanent outdoor and suite signage.',
          'Jewels provides dedicated Google Business Profile verification and suspension support, guiding business owners through evidence preparation and direct reinstatement appeals.'
        ],
        warningNotice: 'Never attempt to bypass address verification using residential PO Boxes or virtual forwarding addresses. Google will permanently disable non-compliant local entities.'
      },
      {
        heading: 'The Ongoing Routine: Weekly Maintenance and Performance Tracking',
        sectionNumber: '08',
        paragraphs: [
          'Local SEO is not a one-time configuration. Establish a monthly governance routine: check your Google Business Profile Performance tab to monitor Discovery searches versus Direct searches, track customer calls, review directional requests, and observe search queries.',
          'Cross-reference these metrics with your Google Search Console performance and website analytics. Ensure that location landing pages on your WordPress site maintain schema markup (LocalBusiness and ProfessionalService) that mirrors your GBP attributes.',
          'By combining an optimized Google Business Profile with sound technical website SEO, structured internal linking, and consistent citation maintenance, your business builds an enduring competitive moat in your local market.'
        ],
        keyTakeaways: [
          'Audit Google Business Profile Performance data monthly to discover emerging search queries.',
          'Align on-page website schema (LocalBusiness) with Google Business Profile data points.',
          'Sustained maintenance protects rankings through seasonal shifts and core algorithm updates.'
        ]
      }
    ]
  }
];

