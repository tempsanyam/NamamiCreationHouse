import React, { useState, useEffect } from 'react';
import { OFFICIAL_BRAND } from '../data/mockData';
import { 
  MessageSquare, Instagram, PhoneCall, Bot, 
  ArrowUp, Sparkles, FileText 
} from 'lucide-react';

interface FloatingControlsProps {
  onOpenQuickQuote: () => void;
  onToggleAiAssistant: () => void;
  isAiOpen: boolean;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  onOpenQuickQuote,
  onToggleAiAssistant,
  isAiOpen
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(Math.round((currentScroll / totalScroll) * 100) || 0);
      setShowBackToTop(currentScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      <div className="flex flex-col items-end gap-2.5 pointer-events-auto">
        
        {/* Back To Top Button with Progress ring */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="w-11 h-11 rounded-full bg-[#102B3A] border border-[#D4AF37]/40 text-amber-300 flex items-center justify-center shadow-xl hover:bg-amber-400 hover:text-[#0B1F2A] transition-all duration-300 group relative"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            <span className="absolute -top-7 text-[9px] font-mono text-amber-300 bg-[#0B1F2A] px-1.5 py-0.5 rounded border border-[#D4AF37]/30 opacity-0 group-hover:opacity-100 transition-opacity">
              {scrollProgress}%
            </span>
          </button>
        )}

        {/* Quick Quote Floating Button */}
        <button
          onClick={onOpenQuickQuote}
          title="Get Quick Quote"
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-[#0B1F2A] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105 transition-all"
        >
          <FileText className="w-4 h-4" />
          <span className="hidden sm:inline">Get Quote</span>
        </button>

        {/* Namami AI Creative Assistant Toggle Button */}
        <button
          onClick={onToggleAiAssistant}
          title="Namami AI Assistant"
          className={`px-4 py-2.5 rounded-full border text-xs font-bold flex items-center gap-2 shadow-xl transition-all ${
            isAiOpen
              ? 'bg-amber-400 text-[#0B1F2A] border-amber-300'
              : 'bg-[#102B3A]/90 border-[#D4AF37]/40 text-amber-300 hover:border-amber-400 hover:bg-[#16384A]'
          }`}
        >
          <Bot className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="hidden sm:inline">Ask Namami AI</span>
        </button>

        {/* Official Instagram Floating Button */}
        <a
          href={OFFICIAL_BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Follow on Instagram"
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(219,39,119,0.5)] hover:scale-110 transition-transform"
        >
          <Instagram className="w-6 h-6" />
        </a>

        {/* Call Now Floating Button */}
        <a
          href={`tel:${OFFICIAL_BRAND.phone}`}
          title="Call Now (+91 8815954802)"
          className="w-12 h-12 rounded-full bg-[#102B3A] border border-[#D4AF37]/40 text-amber-300 flex items-center justify-center shadow-xl hover:bg-amber-400 hover:text-[#0B1F2A] transition-transform"
        >
          <PhoneCall className="w-5 h-5" />
        </a>

        {/* Official WhatsApp Chat Floating Button */}
        <a
          href={OFFICIAL_BRAND.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp (+91 8815954802)"
          className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:scale-110 transition-transform relative group"
        >
          <MessageSquare className="w-7 h-7 fill-white/20" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-[#0B1F2A] animate-ping" />
        </a>

      </div>
    </div>
  );
};
