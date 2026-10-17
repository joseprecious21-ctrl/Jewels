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

export type ProjectCategorySlug = 
  | 'all' 
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
