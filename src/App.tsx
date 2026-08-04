import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { InstagramYoutubeSection } from './components/InstagramYoutubeSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WorkingProcess } from './components/WorkingProcess';
import { BlogCareerSection } from './components/BlogCareerSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Modals } from './components/Modals';
import { SEOHead } from './components/SEOHead';
import { AdminLayout } from './admin/AdminLayout';

import { ServiceItem, PortfolioItem, BlogPost, Language } from './types';

export default function App() {
  const [isAdminRoute, setIsAdminRoute] = useState<boolean>(() => {
    return window.location.pathname === '/admin' || window.location.hash === '#admin';
  });

  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals state
  const [isQuickQuoteOpen, setIsQuickQuoteOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [videoModalData, setVideoModalData] = useState<{ isOpen: boolean; url: string; title: string } | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [legalModalData, setLegalModalData] = useState<{ isOpen: boolean; title: string; content: string } | null>(null);

  // Listen to path or hash changes for admin routing
  useEffect(() => {
    const handleLocationChange = () => {
      setIsAdminRoute(window.location.pathname === '/admin' || window.location.hash === '#admin');
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Active section scroll spy
  useEffect(() => {
    if (isAdminRoute) return;
    const handleScroll = () => {
      const sections = [
        'home', 'about', 'why-choose-us', 'services', 'industries', 
        'portfolio', 'social-feeds', 'testimonials', 
        'process', 'blog', 'faq', 'contact'
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAdminRoute]);

  if (isAdminRoute) {
    return <AdminLayout />;
  }

  return (
    <div className="min-h-screen font-sans antialiased bg-[#0B1F2A] text-slate-100 selection:bg-amber-400 selection:text-[#0B1F2A]">
      {/* Dynamic SEO Meta Management */}
      <SEOHead
        activeSection={activeSection}
        currentLang={currentLang}
        selectedService={selectedService}
        selectedPortfolioItem={selectedPortfolioItem}
        selectedBlogPost={selectedBlogPost}
      />
      
      {/* Sticky Glassmorphic Navbar (No Admin buttons exist) */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        onOpenQuickQuote={() => setIsQuickQuoteOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenQuickQuote={() => setIsQuickQuoteOpen(true)}
          onOpenShowreel={() => setVideoModalData({
            isOpen: true,
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            title: "Namami Creation House — Showreel 2026"
          })}
        />

        {/* About Section */}
        <AboutSection />

        {/* Why Choose Us */}
        <WhyChooseUs onOpenQuickQuote={() => setIsQuickQuoteOpen(true)} />

        {/* Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuickQuote={() => setIsQuickQuoteOpen(true)}
        />

        {/* Industries Section */}
        <IndustriesSection onOpenQuickQuote={() => setIsQuickQuoteOpen(true)} />

        {/* Portfolio Showcase */}
        <PortfolioSection
          onOpenItemModal={(item) => setSelectedPortfolioItem(item)}
          onOpenQuickQuote={() => setIsQuickQuoteOpen(true)}
        />

        {/* Instagram & YouTube Section */}
        <InstagramYoutubeSection
          onOpenVideoModal={(url, title) => setVideoModalData({ isOpen: true, url, title })}
        />

        {/* Client Testimonials */}
        <TestimonialsSection
          onOpenVideoModal={(url, title) => setVideoModalData({ isOpen: true, url, title })}
        />

        {/* Working Process */}
        <WorkingProcess />

        {/* Blog & Career */}
        <BlogCareerSection
          onOpenBlogModal={(post) => setSelectedBlogPost(post)}
          onOpenQuickQuote={() => setIsQuickQuoteOpen(true)}
        />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegalModal={(title, content) => setLegalModalData({ isOpen: true, title, content })}
        onOpenQuickQuote={() => setIsQuickQuoteOpen(true)}
      />

      {/* Floating Controls Bar */}
      <FloatingControls
        onOpenQuickQuote={() => setIsQuickQuoteOpen(true)}
        onToggleAiAssistant={() => setIsAiOpen(!isAiOpen)}
        isAiOpen={isAiOpen}
      />

      {/* AI Assistant Chat Drawer */}
      <AiAssistantModal
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
      />

      {/* Popups and Modals Handler */}
      <Modals
        videoModalData={videoModalData}
        onCloseVideoModal={() => setVideoModalData(null)}
        portfolioItem={selectedPortfolioItem}
        onClosePortfolioModal={() => setSelectedPortfolioItem(null)}
        serviceItem={selectedService}
        onCloseServiceModal={() => setSelectedService(null)}
        isQuickQuoteOpen={isQuickQuoteOpen}
        onCloseQuickQuote={() => setIsQuickQuoteOpen(false)}
        blogPost={selectedBlogPost}
        onCloseBlogModal={() => setSelectedBlogPost(null)}
        legalModalData={legalModalData}
        onCloseLegalModal={() => setLegalModalData(null)}
      />

    </div>
  );
}

