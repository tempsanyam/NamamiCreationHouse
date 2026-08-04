import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  ServiceItem, PortfolioItem, BlogPost, Testimonial, 
  Inquiry, HeroConfig, AboutConfig, BrandConfig, 
  SeoConfig, MediaItem, AdminUser, MenuItem 
} from '../types';
import { 
  SERVICES_LIST, PORTFOLIO_ITEMS, BLOG_POSTS, 
  TESTIMONIALS_LIST, OFFICIAL_BRAND 
} from '../data/mockData';

const DEFAULT_HERO: HeroConfig = {
  title: "From Spiritual To Cinematic",
  titleGradient: "We Create Everything",
  subtitle: "NAMAMI CREATION HOUSE — CINEMATIC FILM STUDIO & AI CONTENT HOUSE",
  description: "End-to-end film production, AI synthetic video avatars, 4K color grading, luxury branding, and high retention digital media for brands, creators, & spiritual tirths.",
  primaryCtaText: "Explore Services",
  primaryCtaUrl: "#services",
  secondaryCtaText: "Quick Quote",
  secondaryCtaUrl: "#contact",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  showreelUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  bgImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1920&q=80",
  motionEnabled: true
};

const DEFAULT_ABOUT: AboutConfig = {
  badge: "Pioneering Creative House",
  title: "Bridging Eternal Culture With Next-Gen Cinema & AI",
  subtitle: "Ideas that inspire, creations that last.",
  storyParagraph1: "Namami Creation House is a premier full-service creative agency. We specialize in transforming bold ideas into high-impact digital experiences — combining traditional film direction, DaVinci Resolve color grading, and hyper-realistic AI video generation.",
  storyParagraph2: "We provide a seamless 360° creative service without the complexity of managing multiple vendors, ensuring complete brand continuity across video, design, and digital platforms.",
  mission: "To empower brands and spiritual heritage institutions with cinematic storytelling, groundbreaking AI avatar technology, and high-CTR visual media.",
  vision: "To be the premier global creative house where sacred heritage meets modern Hollywood-grade cinema and artificial intelligence.",
  mainImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1000&q=80"
};

const DEFAULT_BRAND: BrandConfig = {
  name: OFFICIAL_BRAND.name,
  tagline: OFFICIAL_BRAND.tagline,
  motto: OFFICIAL_BRAND.motto,
  phone: OFFICIAL_BRAND.phone,
  phoneFormatted: OFFICIAL_BRAND.phoneFormatted,
  email: OFFICIAL_BRAND.email,
  instagramUrl: OFFICIAL_BRAND.instagramUrl,
  instagramHandle: OFFICIAL_BRAND.instagramHandle,
  whatsAppNumber: OFFICIAL_BRAND.whatsAppNumber,
  whatsAppUrl: OFFICIAL_BRAND.whatsAppUrl,
  facebookUrl: "https://facebook.com",
  youtubeUrl: "https://youtube.com",
  linkedinUrl: "https://linkedin.com",
  address: "India — Serving Clients Globally",
  googleMapUrl: "https://maps.google.com",
  primaryColor: "#0B1F2A",
  secondaryColor: "#123245",
  accentColor: "#D4AF37",
  logoUrl: "/logo.png",
  faviconUrl: "/favicon.ico"
};

const DEFAULT_SEO: SeoConfig = {
  metaTitle: "Namami Creation House | Spiritual & Cinematic Film Studio & AI Media",
  metaDescription: "Official website of Namami Creation House. Offering video editing, AI video avatars, 4K drone shoots, branding, graphic design, and web apps.",
  keywords: "Namami Creation House, Video Editing, AI Video Avatar, Spiritual Video Shoot, Jainism Video, Sanatan Temple Shoot, Reels Editor, Branding",
  ogImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
  twitterHandle: "@namami_creation_house",
  schemaJson: `{\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "Namami Creation House",\n  "url": "https://NamamiCreationHouse.vercel.app",\n  "logo": "https://images.unsplash.com/photo-1536240478700-b869070f9279"\n}`,
  robotsTxt: "User-agent: *\nAllow: /\nSitemap: https://NamamiCreationHouse.vercel.app/sitemap.xml",
  googleAnalyticsId: "G-NAMAMI2026",
  searchConsoleTag: "namami-google-site-verification"
};

const DEFAULT_USERS: AdminUser[] = [
 {
  id: "usr-1",
  name: "Namami Admin",
  email: "admin@namamicreationhouse.com",
  password: "sanyam88",
  role: "Super Admin",
  avatar: "...",
  lastLogin: "Just Now"
}

];

const DEFAULT_HEADER_MENU: MenuItem[] = [
  { id: "m-1", title: "Home", url: "#home", order: 1 },
  { id: "m-2", title: "Services", url: "#services", order: 2 },
  { id: "m-3", title: "Portfolio", url: "#portfolio", order: 3 },
  { id: "m-4", title: "Industries", url: "#industries", order: 4 },
  { id: "m-5", title: "About", url: "#about", order: 5 },
  { id: "m-6", title: "Contact", url: "#contact", order: 6 },
];

const DEFAULT_FOOTER_MENU: MenuItem[] = [
  { id: "fm-1", title: "Privacy Policy", url: "#privacy", order: 1 },
  { id: "fm-2", title: "Terms of Service", url: "#terms", order: 2 },
  { id: "fm-3", title: "Refund Policy", url: "#refund", order: 3 },
  { id: "fm-4", title: "Contact Support", url: "#contact", order: 4 }
];

const DEFAULT_INQUIRIES: Inquiry[] = [
  {
    id: "inq-101",
    name: "Aarav Sharma",
    phone: "+91 9876543210",
    email: "aarav.sharma@example.com",
    serviceCategory: "Cinematic Video Editing",
    budgetRange: "₹25,000 - ₹50,000",
    timeline: "3 Days",
    message: "We need a 4K drone video edit and color grading for our temple inauguration function.",
    date: "2026-08-03 14:30",
    status: "new",
    notes: "Requires DaVinci color grade"
  },
  {
    id: "inq-102",
    name: "Rohan Varma",
    phone: "+91 9123456789",
    email: "rohan@techbrand.io",
    serviceCategory: "AI Video Presenter Avatar",
    budgetRange: "₹50,000+",
    timeline: "24 Hours",
    message: "Looking for multi-lingual AI spokesperson videos in English, Hindi, and Gujarati.",
    date: "2026-08-02 11:15",
    status: "in_progress",
    notes: "Sent demo script preview via WhatsApp"
  }
];

const DEFAULT_MEDIA: MediaItem[] = [
  {
    id: "med-1",
    name: "hero-film-bg.jpg",
    url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    type: "image",
    size: "1.2 MB",
    uploadedAt: "2026-08-01",
    folder: "Hero"
  },
  {
    id: "med-2",
    name: "color-grading-davinci.jpg",
    url: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    type: "image",
    size: "2.4 MB",
    uploadedAt: "2026-08-01",
    folder: "Portfolio"
  },
  {
    id: "med-3",
    name: "ai-avatar-presenter.jpg",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    type: "image",
    size: "1.8 MB",
    uploadedAt: "2026-08-02",
    folder: "AI Studio"
  }
];

interface CmsContextType {
  heroConfig: HeroConfig;
  aboutConfig: AboutConfig;
  brandConfig: BrandConfig;
  seoConfig: SeoConfig;
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  blogs: BlogPost[];
  testimonials: Testimonial[];
  inquiries: Inquiry[];
  mediaLibrary: MediaItem[];
  users: AdminUser[];
  headerMenu: MenuItem[];
  footerMenu: MenuItem[];
  currentUser: AdminUser | null;
  unreadInquiriesCount: number;

  // Actions
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  updateHero: (config: HeroConfig) => void;
  updateAbout: (config: AboutConfig) => void;
  updateBrandConfig: (config: BrandConfig) => void;
  updateSeoConfig: (config: SeoConfig) => void;

  // Services
  addService: (item: ServiceItem) => void;
  updateService: (item: ServiceItem) => void;
  deleteService: (id: string) => void;
  togglePublishService: (id: string) => void;

  // Portfolio
  addPortfolioItem: (item: PortfolioItem) => void;
  updatePortfolioItem: (item: PortfolioItem) => void;
  deletePortfolioItem: (id: string) => void;
  togglePublishPortfolio: (id: string) => void;

  // Blog
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;

  // Testimonial
  addTestimonial: (t: Testimonial) => void;
  updateTestimonial: (t: Testimonial) => void;
  deleteTestimonial: (id: string) => void;

  // Inquiry
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: 'new' | 'in_progress' | 'completed') => void;
  deleteInquiry: (id: string) => void;

  // Media
  addMediaItem: (item: Omit<MediaItem, 'id' | 'uploadedAt'>) => void;
  deleteMediaItem: (id: string) => void;

  // User Manager
  addAdminUser: (user: Omit<AdminUser, 'id'>) => void;
  deleteAdminUser: (id: string) => void;

  // Menu Manager
  updateHeaderMenu: (menu: MenuItem[]) => void;
  updateFooterMenu: (menu: MenuItem[]) => void;

  // Backup & Restore
  backupData: () => string;
  restoreData: (jsonStr: string) => boolean;
  resetToDefault: () => void;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "namami_cms_v1";

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroConfig, setHeroConfig] = useState<HeroConfig>(DEFAULT_HERO);
  const [aboutConfig, setAboutConfig] = useState<AboutConfig>(DEFAULT_ABOUT);
  const [brandConfig, setBrandConfig] = useState<BrandConfig>(DEFAULT_BRAND);
  const [seoConfig, setSeoConfig] = useState<SeoConfig>(DEFAULT_SEO);
  
  const [services, setServices] = useState<ServiceItem[]>(() => 
    SERVICES_LIST.map(s => ({ ...s, published: true, featured: true, order: 0 }))
  );
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => 
    PORTFOLIO_ITEMS.map(p => ({ ...p, published: true, featured: true, order: 0 }))
  );
  const [blogs, setBlogs] = useState<BlogPost[]>(() => 
    BLOG_POSTS.map(b => ({ ...b, status: 'published' }))
  );
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => 
    TESTIMONIALS_LIST.map(t => ({ ...t, published: true }))
  );
  const [inquiries, setInquiries] = useState<Inquiry[]>(DEFAULT_INQUIRIES);
  const [mediaLibrary, setMediaLibrary] = useState<MediaItem[]>(DEFAULT_MEDIA);
  const [users, setUsers] = useState<AdminUser[]>(DEFAULT_USERS);
  const [headerMenu, setHeaderMenu] = useState<MenuItem[]>(DEFAULT_HEADER_MENU);
  const [footerMenu, setFooterMenu] = useState<MenuItem[]>(DEFAULT_FOOTER_MENU);
  
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(() => {
    const savedToken = localStorage.getItem("namami_admin_user");
    return savedToken ? JSON.parse(savedToken) : null;
  });

  // Load state from local storage on initial mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.heroConfig) setHeroConfig(parsed.heroConfig);
        if (parsed.aboutConfig) setAboutConfig(parsed.aboutConfig);
        if (parsed.brandConfig) setBrandConfig(parsed.brandConfig);
        if (parsed.seoConfig) setSeoConfig(parsed.seoConfig);
        if (parsed.services) setServices(parsed.services);
        if (parsed.portfolio) setPortfolio(parsed.portfolio);
        if (parsed.blogs) setBlogs(parsed.blogs);
        if (parsed.testimonials) setTestimonials(parsed.testimonials);
        if (parsed.inquiries) setInquiries(parsed.inquiries);
        if (parsed.mediaLibrary) setMediaLibrary(parsed.mediaLibrary);
        if (parsed.users) setUsers(parsed.users);
        if (parsed.headerMenu) setHeaderMenu(parsed.headerMenu);
        if (parsed.footerMenu) setFooterMenu(parsed.footerMenu);
      }
    } catch (e) {
      console.error("Failed to load CMS state from localStorage", e);
    }
  }, []);

  // Sync to local storage on change
  const saveStateToStorage = (newState: Record<string, unknown>) => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      const existing = stored ? JSON.parse(stored) : {};
      const updated = { ...existing, ...newState };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save CMS state", e);
    }
  };

  const login = (email: string, password: string) => {
  const foundUser = users.find(
    user =>
      user.email.toLowerCase().trim() === email.toLowerCase().trim() &&
      user.password === password
  );

  if (!foundUser) {
    return false;
  }

  const userObj = {
    ...foundUser,
    lastLogin: new Date().toLocaleString()
  };

  setCurrentUser(userObj);
  localStorage.setItem("namami_admin_user", JSON.stringify(userObj));

  return true;
};
      }
    }
    const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (foundUser && pass === "admin123") {
      const userObj = { ...foundUser, lastLogin: new Date().toLocaleString() };
      setCurrentUser(userObj);
      localStorage.setItem("namami_admin_user", JSON.stringify(userObj));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("namami_admin_user");
  };

  const updateHero = (cfg: HeroConfig) => {
    setHeroConfig(cfg);
    saveStateToStorage({ heroConfig: cfg });
  };

  const updateAbout = (cfg: AboutConfig) => {
    setAboutConfig(cfg);
    saveStateToStorage({ aboutConfig: cfg });
  };

  const updateBrandConfig = (cfg: BrandConfig) => {
    setBrandConfig(cfg);
    saveStateToStorage({ brandConfig: cfg });
  };

  const updateSeoConfig = (cfg: SeoConfig) => {
    setSeoConfig(cfg);
    saveStateToStorage({ seoConfig: cfg });
  };

  // Services CRUD
  const addService = (item: ServiceItem) => {
    const updated = [item, ...services];
    setServices(updated);
    saveStateToStorage({ services: updated });
  };

  const updateService = (item: ServiceItem) => {
    const updated = services.map(s => s.id === item.id ? item : s);
    setServices(updated);
    saveStateToStorage({ services: updated });
  };

  const deleteService = (id: string) => {
    const updated = services.filter(s => s.id !== id);
    setServices(updated);
    saveStateToStorage({ services: updated });
  };

  const togglePublishService = (id: string) => {
    const updated = services.map(s => s.id === id ? { ...s, published: !s.published } : s);
    setServices(updated);
    saveStateToStorage({ services: updated });
  };

  // Portfolio CRUD
  const addPortfolioItem = (item: PortfolioItem) => {
    const updated = [item, ...portfolio];
    setPortfolio(updated);
    saveStateToStorage({ portfolio: updated });
  };

  const updatePortfolioItem = (item: PortfolioItem) => {
    const updated = portfolio.map(p => p.id === item.id ? item : p);
    setPortfolio(updated);
    saveStateToStorage({ portfolio: updated });
  };

  const deletePortfolioItem = (id: string) => {
    const updated = portfolio.filter(p => p.id !== id);
    setPortfolio(updated);
    saveStateToStorage({ portfolio: updated });
  };

  const togglePublishPortfolio = (id: string) => {
    const updated = portfolio.map(p => p.id === id ? { ...p, published: !p.published } : p);
    setPortfolio(updated);
    saveStateToStorage({ portfolio: updated });
  };

  // Blog CRUD
  const addBlogPost = (post: BlogPost) => {
    const updated = [post, ...blogs];
    setBlogs(updated);
    saveStateToStorage({ blogs: updated });
  };

  const updateBlogPost = (post: BlogPost) => {
    const updated = blogs.map(b => b.id === post.id ? post : b);
    setBlogs(updated);
    saveStateToStorage({ blogs: updated });
  };

  const deleteBlogPost = (id: string) => {
    const updated = blogs.filter(b => b.id !== id);
    setBlogs(updated);
    saveStateToStorage({ blogs: updated });
  };

  // Testimonials CRUD
  const addTestimonial = (t: Testimonial) => {
    const updated = [t, ...testimonials];
    setTestimonials(updated);
    saveStateToStorage({ testimonials: updated });
  };

  const updateTestimonial = (t: Testimonial) => {
    const updated = testimonials.map(item => item.id === t.id ? t : item);
    setTestimonials(updated);
    saveStateToStorage({ testimonials: updated });
  };

  const deleteTestimonial = (id: string) => {
    const updated = testimonials.filter(item => item.id !== id);
    setTestimonials(updated);
    saveStateToStorage({ testimonials: updated });
  };

  // Inquiry CRUD
  const addInquiry = (inquiryData: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const newInquiry: Inquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      date: new Date().toLocaleString(),
      status: 'new'
    };
    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    saveStateToStorage({ inquiries: updated });
  };

  const updateInquiryStatus = (id: string, status: 'new' | 'in_progress' | 'completed') => {
    const updated = inquiries.map(i => i.id === id ? { ...i, status } : i);
    setInquiries(updated);
    saveStateToStorage({ inquiries: updated });
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter(i => i.id !== id);
    setInquiries(updated);
    saveStateToStorage({ inquiries: updated });
  };

  // Media Library
  const addMediaItem = (item: Omit<MediaItem, 'id' | 'uploadedAt'>) => {
    const newMedia: MediaItem = {
      ...item,
      id: `med-${Date.now()}`,
      uploadedAt: new Date().toISOString().split('T')[0]
    };
    const updated = [newMedia, ...mediaLibrary];
    setMediaLibrary(updated);
    saveStateToStorage({ mediaLibrary: updated });
  };

  const deleteMediaItem = (id: string) => {
    const updated = mediaLibrary.filter(m => m.id !== id);
    setMediaLibrary(updated);
    saveStateToStorage({ mediaLibrary: updated });
  };

  // User Manager
  const addAdminUser = (user: Omit<AdminUser, 'id'>) => {
    const newUser: AdminUser = { ...user, id: `usr-${Date.now()}` };
    const updated = [...users, newUser];
    setUsers(updated);
    saveStateToStorage({ users: updated });
  };

  const deleteAdminUser = (id: string) => {
    const updated = users.filter(u => u.id !== id);
    setUsers(updated);
    saveStateToStorage({ users: updated });
  };

  const updateHeaderMenu = (menu: MenuItem[]) => {
    setHeaderMenu(menu);
    saveStateToStorage({ headerMenu: menu });
  };

  const updateFooterMenu = (menu: MenuItem[]) => {
    setFooterMenu(menu);
    saveStateToStorage({ footerMenu: menu });
  };

  // Backup & Restore
  const backupData = () => {
    const data = {
      heroConfig, aboutConfig, brandConfig, seoConfig,
      services, portfolio, blogs, testimonials, inquiries,
      mediaLibrary, users, headerMenu, footerMenu,
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  };

  const restoreData = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.heroConfig) setHeroConfig(parsed.heroConfig);
      if (parsed.aboutConfig) setAboutConfig(parsed.aboutConfig);
      if (parsed.brandConfig) setBrandConfig(parsed.brandConfig);
      if (parsed.seoConfig) setSeoConfig(parsed.seoConfig);
      if (parsed.services) setServices(parsed.services);
      if (parsed.portfolio) setPortfolio(parsed.portfolio);
      if (parsed.blogs) setBlogs(parsed.blogs);
      if (parsed.testimonials) setTestimonials(parsed.testimonials);
      if (parsed.inquiries) setInquiries(parsed.inquiries);
      if (parsed.mediaLibrary) setMediaLibrary(parsed.mediaLibrary);
      if (parsed.users) setUsers(parsed.users);
      if (parsed.headerMenu) setHeaderMenu(parsed.headerMenu);
      if (parsed.footerMenu) setFooterMenu(parsed.footerMenu);

      localStorage.setItem(LOCAL_STORAGE_KEY, jsonStr);
      return true;
    } catch (e) {
      console.error("Invalid JSON backup format", e);
      return false;
    }
  };

  const resetToDefault = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setHeroConfig(DEFAULT_HERO);
    setAboutConfig(DEFAULT_ABOUT);
    setBrandConfig(DEFAULT_BRAND);
    setSeoConfig(DEFAULT_SEO);
    setServices(SERVICES_LIST.map(s => ({ ...s, published: true, featured: true, order: 0 })));
    setPortfolio(PORTFOLIO_ITEMS.map(p => ({ ...p, published: true, featured: true, order: 0 })));
    setBlogs(BLOG_POSTS.map(b => ({ ...b, status: 'published' })));
    setTestimonials(TESTIMONIALS_LIST.map(t => ({ ...t, published: true })));
    setInquiries(DEFAULT_INQUIRIES);
    setMediaLibrary(DEFAULT_MEDIA);
    setUsers(DEFAULT_USERS);
    setHeaderMenu(DEFAULT_HEADER_MENU);
    setFooterMenu(DEFAULT_FOOTER_MENU);
  };

  const unreadInquiriesCount = inquiries.filter(i => i.status === 'new').length;

  return (
    <CmsContext.Provider value={{
      heroConfig, aboutConfig, brandConfig, seoConfig,
      services, portfolio, blogs, testimonials, inquiries,
      mediaLibrary, users, headerMenu, footerMenu, currentUser,
      unreadInquiriesCount,
      login, logout, updateHero, updateAbout, updateBrandConfig, updateSeoConfig,
      addService, updateService, deleteService, togglePublishService,
      addPortfolioItem, updatePortfolioItem, deletePortfolioItem, togglePublishPortfolio,
      addBlogPost, updateBlogPost, deleteBlogPost,
      addTestimonial, updateTestimonial, deleteTestimonial,
      addInquiry, updateInquiryStatus, deleteInquiry,
      addMediaItem, deleteMediaItem,
      addAdminUser, deleteAdminUser,
      updateHeaderMenu, updateFooterMenu,
      backupData, restoreData, resetToDefault
    }}>
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error("useCms must be used within a CmsProvider");
  }
  return context;
};
