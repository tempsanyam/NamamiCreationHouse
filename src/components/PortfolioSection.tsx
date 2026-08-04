import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { PortfolioItem } from '../types';
import { 
  Play, Eye, Sparkles, ExternalLink, SlidersHorizontal, 
  MessageSquare, Film, ArrowRight 
} from 'lucide-react';

interface PortfolioProps {
  onOpenItemModal: (item: PortfolioItem) => void;
  onOpenQuickQuote: () => void;
}

export const PortfolioSection: React.FC<PortfolioProps> = ({
  onOpenItemModal,
  onOpenQuickQuote
}) => {
  const { portfolio, brandConfig } = useCms();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'videos', label: 'Videos & Films' },
    { id: 'ai_videos', label: 'AI Videos' },
    { id: 'reels', label: 'Reels & Shorts' },
    { id: 'branding', label: 'Branding' },
    { id: 'logos', label: 'Logos & 3D' },
    { id: 'graphics', label: 'Graphics' },
    { id: 'websites', label: 'Websites & Apps' }
  ];

  const filteredItems = portfolio.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-24 bg-[#0B1F2A] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Excellence Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-yellow-400">Masterpieces</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Explore our featured works across spiritual documentaries, synthetic AI commercials, 4K color grading, luxury branding, and React applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0B1F2A] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-[#102B3A] border border-[#D4AF37]/20 text-slate-300 hover:border-amber-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Before/After Color Grading Feature Highlight */}
        <div className="mb-16 p-8 rounded-3xl bg-[#102B3A]/80 border border-[#D4AF37]/30 relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                Interactive Showcase
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-2">
                DaVinci Resolve Before & After Color Grading
              </h3>
              <p className="text-xs text-slate-300">
                Drag the interactive slider below to inspect raw camera LOG footage vs. Namami Gold Color Grading.
              </p>
            </div>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden select-none border border-[#D4AF37]/30 shadow-2xl">
            
            {/* After Image (Graded) */}
            <img
              src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80"
              alt="After Color Grading"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-[#0B1F2A] text-xs font-bold shadow-md">
              AFTER (Namami Gold Grade)
            </span>

            {/* Before Image (Raw LOG) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80"
                alt="Before Color Grading"
                className="absolute inset-0 w-full h-full object-cover max-w-none grayscale opacity-60 contrast-75"
                style={{ width: '100%', height: '100%' }}
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B1F2A]/90 border border-slate-700 text-slate-300 text-xs font-bold">
                BEFORE (RAW Camera LOG)
              </span>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-amber-400 cursor-ew-resize shadow-[0_0_15px_rgba(212,175,55,1)] flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-amber-400 text-[#0B1F2A] flex items-center justify-center shadow-lg font-bold text-xs">
                ↔
              </div>
            </div>

            {/* Range Input Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            />
          </div>
        </div>

        {/* Portfolio Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenItemModal(item)}
              className="rounded-2xl bg-[#102B3A]/80 border border-[#D4AF37]/20 overflow-hidden hover:border-amber-400/60 transition-all duration-300 group cursor-pointer hover:-translate-y-1 shadow-lg flex flex-col justify-between backdrop-blur-md"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-[#0B1F2A]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Video Play Overlay if video */}
                {item.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-500/90 text-[#0B1F2A] flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.8)]">
                      <Play className="w-6 h-6 fill-[#0B1F2A] ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  {item.client}
                </span>
                <h3 className="text-base font-serif font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#0B1F2A] text-[9px] text-slate-300 border border-[#16384A]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center">
          <a
            href={brandConfig.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-[#0B1F2A] font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-110 transition-all"
          >
            <span>Discuss Your Project With Our Lead Editor ({brandConfig.phoneFormatted})</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
