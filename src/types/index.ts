export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'portfolio' 
  | 'case-studies' 
  | 'blog' 
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  category: 'core' | 'technical' | 'local' | 'modern';
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: 'local-seo' | 'technical-seo' | 'google-business-profile' | 'on-page-seo';
  description: string;
  workPerformed: string[];
  placeholderNote: string;
  beforePlaceholder: string;
  afterPlaceholder: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  ownerNote?: string;
}
