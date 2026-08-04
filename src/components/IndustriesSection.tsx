import React, { useState } from 'react';
import { INDUSTRIES_LIST, OFFICIAL_BRAND } from '../data/mockData';
import { 
  Building2, Sparkles, Flame, Sun, Film, Rocket, Home, Utensils, 
  Youtube, GraduationCap, ArrowUpRight, MessageSquare 
} from 'lucide-react';

export const IndustriesSection: React.FC<{ onOpenQuickQuote: () => void }> = ({ onOpenQuickQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const industryCategories = ['All', 'Spiritual', 'Commercial', 'Lifestyle', 'Entertainment', 'Digital'];

  const filteredIndustries = INDUSTRIES_LIST.filter(
    (ind) => selectedCategory === 'All' || ind.category === selectedCategory
  );

  return (
    <section id="industries" className="py-24 bg-[#0B1F2A] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Domain Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-yellow-400">We Empower</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Tailored creative solutions designed to resonate specifically with audiences across spiritual, corporate, cinema, and digital creator sectors.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {industryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-[#0B1F2A] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-[#102B3A] border border-[#D4AF37]/20 text-slate-300 hover:border-amber-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredIndustries.map((ind) => (
            <div
              key={ind.id}
              className="rounded-3xl bg-[#102B3A]/80 border border-[#D4AF37]/20 overflow-hidden hover:border-amber-400/60 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-lg backdrop-blur-md"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-[#0B1F2A]/50 to-transparent" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0B1F2A]/90 border border-[#D4AF37]/30 text-amber-300 text-[10px] font-mono font-bold">
                  {ind.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#16384A]">
                  <p className="text-[11px] text-amber-400 font-semibold mb-3">
                    Featured: <span className="text-slate-300 font-normal">{ind.featuredWork}</span>
                  </p>

                  <a
                    href={`https://wa.me/918815954802?text=${encodeURIComponent(`Hello Namami Creation House, I want to discuss creative solutions for the ${ind.name} industry.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl bg-[#0B1F2A] border border-[#D4AF37]/30 text-amber-300 hover:bg-amber-400 hover:text-[#0B1F2A] text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Inquire For {ind.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
