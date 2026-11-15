export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'portfolio' 
  | 'case-studies' 
  | 'reviews'
  | 'blog' 
  | 'contact'
  | 'calculator'
  | 'freelance-profiles';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  category: 'core' | 'technical' | 'local' | 'modern';
}

export type ProjectCategorySlug = 
  | 'all' 
  | 'rankings'
  | 'reporting' 
  | 'technical-seo' 
  | 'google-business-profile' 
  | 'local-seo';

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: ProjectCategorySlug;
  caption: string;
  imageUrl?: string;
  imageAlt?: string;
  description: string;
  workPerformed: string[];
  placeholderNote?: string;
  beforePlaceholder?: string;
  afterPlaceholder?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  ownerNote?: string;
}

export interface BlogPostSection {
  heading: string;
  sectionNumber?: string;
  paragraphs: string[];
  keyTakeaways?: string[];
  proTip?: string;
  warningNotice?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  categories: string[];
  excerpt: string;
  publishDate: string;
  datePublishedIso?: string;
  readTime: string;
  author: string;
  intro?: string;
  profileImageUrl?: string;
  profileImageAlt?: string;
  fallbackInitial?: string;
  featuredImagePlaceholderNote: string;
  featuredImageAlt: string;
  sections: BlogPostSection[];
}

