export type Language = 'en' | 'hi' | 'gu';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'spiritual' | 'cinematic' | 'ai_studio' | 'design' | 'digital' | 'production';
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  startingPrice: string;
  deliveryTime: string;
  image: string;
  badge?: string;
  published?: boolean;
  featured?: boolean;
  order?: number;
}

export interface IndustryItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
  description: string;
  image: string;
  featuredWork: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'videos' | 'ai_videos' | 'graphics' | 'branding' | 'logos' | 'websites' | 'apps' | 'reels' | 'social_media';
  thumbnail: string;
  videoUrl?: string;
  description: string;
  tags: string[];
  beforeImage?: string;
  afterImage?: string;
  gallery?: string[];
  published?: boolean;
  featured?: boolean;
  order?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  videoUrl?: string;
  rating: number;
  comment: string;
  type: 'video' | 'google' | 'verified';
  category: string;
  published?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'AI' | 'Business' | 'Branding' | 'Marketing' | 'Editing' | 'SEO';
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  status?: 'published' | 'draft';
  tags?: string[];
  slug?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface InstagramPost {
  id: string;
  type: 'reel' | 'post';
  image: string;
  likes: string;
  comments: string;
  caption: string;
  url: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
}

export interface QuickQuoteData {
  name: string;
  email: string;
  phone: string;
  serviceCategory: string;
  industry: string;
  budgetRange: string;
  timeline: string;
  details: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceCategory: string;
  budgetRange?: string;
  timeline?: string;
  message: string;
  date: string;
  status: 'new' | 'in_progress' | 'completed';
  notes?: string;
}

export interface HeroConfig {
  title: string;
  titleGradient: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  videoUrl: string;
  showreelUrl: string;
  bgImage: string;
  motionEnabled: boolean;
}

export interface AboutConfig {
  badge: string;
  title: string;
  subtitle: string;
  storyParagraph1: string;
  storyParagraph2: string;
  mission: string;
  vision: string;
  mainImage: string;
}

export interface BrandConfig {
  name: string;
  tagline: string;
  motto: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  instagramUrl: string;
  instagramHandle: string;
  whatsAppNumber: string;
  whatsAppUrl: string;
  facebookUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  address: string;
  googleMapUrl: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  logoUrl?: string;
  faviconUrl?: string;
}

export interface SeoConfig {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogImage: string;
  twitterHandle: string;
  schemaJson: string;
  robotsTxt: string;
  googleAnalyticsId: string;
  searchConsoleTag: string;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video' | 'pdf';
  size: string;
  uploadedAt: string;
  folder?: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Editor' | 'Content Manager';
  avatar: string;
  lastLogin?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  url: string;
  openInNewTab?: boolean;
  children?: MenuItem[];
  order: number;
}
