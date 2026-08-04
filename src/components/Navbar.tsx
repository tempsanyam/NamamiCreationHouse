import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { OFFICIAL_BRAND, TRANSLATIONS } from '../data/mockData';
import { Language } from '../types';
import { 
  Menu, X, MessageSquare, PhoneCall, Instagram, Sun, Moon, Globe, ArrowUpRight, Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onOpenQuickQuote: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  isDarkMode,
  onThemeToggle,
  onOpenQuickQuote,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-amber-500/20 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Left */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
            <Logo size="md" showTagline={!isScrolled} />
          </a>

          {/* Menu Center (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-amber-500/20 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1 rounded-full text-xs font-medium tracking-wider transition-all duration-300 relative ${
                    isActive
                      ? 'text-amber-300 font-semibold bg-gradient-to-r from-amber-500/20 to-amber-700/20 border border-amber-500/40 shadow-[0_0_12px_rgba(234,179,8,0.3)]'
                      : 'text-neutral-300 hover:text-amber-200 hover:bg-neutral-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Official Instagram Icon Button */}
            <a
              href={OFFICIAL_BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Follow Namami Creation House on Instagram"
              className="p-2 rounded-full bg-neutral-900/80 border border-pink-500/30 text-pink-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 transition-all duration-300 shadow-md group relative"
            >
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/90 text-[10px] text-amber-200 border border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {OFFICIAL_BRAND.instagramHandle}
              </span>
            </a>

            {/* WhatsApp Direct Chat Button */}
            <a
              href={OFFICIAL_BRAND.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-600 transition-all duration-300 text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              <span>WhatsApp</span>
            </a>

            {/* Get Quote CTA */}
            <button
              onClick={onOpenQuickQuote}
              className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 animate-gradient" />
              <span className="relative block px-4 py-1.5 rounded-full bg-neutral-950 group-hover:bg-transparent text-amber-300 group-hover:text-black font-bold tracking-wider uppercase transition-colors duration-300 flex items-center gap-1">
                <span>Get Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuickQuote}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 text-xs font-bold uppercase tracking-wider"
            >
              Quote
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-amber-500/30 text-amber-300 hover:bg-neutral-800"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-neutral-950/95 border-b border-amber-500/30 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
              
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-neutral-800">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2 rounded-lg text-sm text-neutral-200 hover:text-amber-300 hover:bg-neutral-900 border border-transparent hover:border-amber-500/20 transition-all font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={OFFICIAL_BRAND.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 8815954802)</span>
                </a>

                <a
                  href={OFFICIAL_BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600 text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow on Instagram (@namami_creation_house)</span>
                </a>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuickQuote();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-neutral-950 font-bold text-center text-sm uppercase tracking-wider"
                >
                  Get Custom Quote
                </button>
              </div>

              {/* Language + Theme Row */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-xs text-neutral-400">
                <span>Select Language:</span>
                <div className="flex items-center gap-2">
                  {(['en', 'hi', 'gu'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => onLanguageChange(lang)}
                      className={`px-2.5 py-1 rounded font-mono uppercase ${
                        currentLang === lang ? 'bg-amber-500 text-black font-bold' : 'bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
