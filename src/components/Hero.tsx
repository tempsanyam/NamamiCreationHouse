import React, { useState, useEffect } from 'react';
import { useCms } from '../context/CmsContext';
import { Language } from '../types';
import { 
  Play, Sparkles, ArrowRight, MessageSquare, Instagram, 
  Film, Flame, Volume2, Video
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  currentLang: Language;
  onOpenQuickQuote: () => void;
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuickQuote,
  onOpenShowreel
}) => {
  const { heroConfig, brandConfig } = useCms();
  const [typedText, setTypedText] = useState('');
  const fullText = brandConfig.motto || "Ideas That Inspire, Creations That Last.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [fullText]);

  const capabilities = [
    { label: "Cinema Quality", value: "4K Master", icon: Film },
    { label: "Spiritual Media", value: "Jain & Sanatan", icon: Flame },
    { label: "AI Production", value: "Video & Avatars", icon: Sparkles },
    { label: "Direct Support", value: "WhatsApp 24/7", icon: MessageSquare }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-[#0B1F2A]">
      
      {/* Motion Graphics & Ambient Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Deep Atmospheric Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A] via-[#102B3A] to-[#0B1F2A]" />
        
        {/* Animated Radial Light Rays */}
        {heroConfig.motionEnabled !== false && (
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-amber-500/20 via-yellow-400/10 to-cyan-500/10 rounded-full blur-[140px]" 
          />
        )}

        {/* Floating Particles Simulation */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-amber-300/40 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
              style={{
                top: `${(i * 17) % 100}%`,
                left: `${(i * 23) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.5, 0.8]
              }}
              transition={{
                duration: 4 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        {/* Decorative Motion Graphics Frame Grid */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#E8EEF2 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Camera Viewfinder Crosshairs */}
        <div className="absolute top-12 left-12 w-8 h-8 border-l-2 border-t-2 border-amber-400/30" />
        <div className="absolute top-12 right-12 w-8 h-8 border-r-2 border-t-2 border-amber-400/30" />
        <div className="absolute bottom-12 left-12 w-8 h-8 border-l-2 border-b-2 border-amber-400/30" />
        <div className="absolute bottom-12 right-12 w-8 h-8 border-r-2 border-b-2 border-amber-400/30" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtitle Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#102B3A]/90 border border-[#D4AF37]/40 backdrop-blur-xl mb-6 shadow-[0_0_25px_rgba(212,175,55,0.2)] text-center"
        >
          <span className="text-sm">🛕</span>
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-amber-300 uppercase font-mono">
            {heroConfig.subtitle}
          </span>
          <Sparkles className="w-4 h-4 text-amber-400" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-white mb-4 leading-none"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-yellow-400 drop-shadow-[0_4px_30px_rgba(212,175,55,0.5)]">
            {heroConfig.title}
          </span>
          <span className="block text-2xl sm:text-4xl md:text-5xl text-slate-200 font-sans mt-2 font-normal">
            {heroConfig.titleGradient}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-xl font-light text-[#E8EEF2]/90 mb-4 tracking-wide max-w-3xl leading-relaxed"
        >
          {heroConfig.description}
        </motion.p>

        {/* Typing Tagline */}
        <p className="text-sm sm:text-lg font-mono text-slate-300 mb-8 max-w-2xl h-8 flex items-center justify-center">
          <span className="text-amber-300">{typedText}</span>
          <span className="animate-pulse text-amber-400 ml-1">|</span>
        </p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          {/* Explore Services */}
          <a
            href={heroConfig.primaryCtaUrl || "#services"}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-[#0B1F2A] font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center gap-2 group"
          >
            <span>{heroConfig.primaryCtaText || "Explore Services"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* View Portfolio */}
          <a
            href="#portfolio"
            className="px-6 py-3.5 rounded-full bg-[#102B3A]/90 border border-[#E8EEF2]/30 text-[#E8EEF2] hover:text-white hover:border-amber-400 hover:bg-[#16384A] transition-all duration-300 font-semibold text-sm uppercase tracking-wider backdrop-blur-md"
          >
            View Portfolio
          </a>

          {/* Get Quote */}
          <button
            onClick={onOpenQuickQuote}
            className="px-6 py-3.5 rounded-full bg-[#102B3A]/90 border border-[#D4AF37]/50 text-amber-300 hover:bg-amber-500/20 transition-all duration-300 font-semibold text-sm uppercase tracking-wider backdrop-blur-md"
          >
            {heroConfig.secondaryCtaText || "Get Quote"}
          </button>

          {/* Watch Showreel */}
          <button
            onClick={onOpenShowreel}
            className="px-6 py-3.5 rounded-full bg-[#102B3A]/90 border border-[#E8EEF2]/30 text-amber-300 hover:bg-amber-500/20 transition-all duration-300 font-semibold text-sm uppercase tracking-wider backdrop-blur-md flex items-center gap-2 group"
          >
            <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-amber-400 text-amber-400 ml-0.5" />
            </div>
            <span>Watch Showreel</span>
          </button>
        </motion.div>

        {/* Quick Social & Direct Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16 text-xs text-[#E8EEF2]"
        >
          <a
            href={brandConfig.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/90 transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-emerald-400/20" />
            <span>Official WhatsApp: {brandConfig.phoneFormatted}</span>
          </a>

          <a
            href={brandConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#102B3A] border border-pink-500/40 text-pink-300 hover:bg-pink-950/80 transition-all shadow-md"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram: {brandConfig.instagramHandle}</span>
          </a>
        </motion.div>

        {/* Genuine Core Capabilities Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-[#102B3A]/80 border border-[#D4AF37]/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#0B1F2A]/80 border border-[#E8EEF2]/10 hover:border-[#D4AF37]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-lg sm:text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">
                  {cap.value}
                </span>
                <span className="text-xs text-slate-300 font-medium text-center mt-1">
                  {cap.label}
                </span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

