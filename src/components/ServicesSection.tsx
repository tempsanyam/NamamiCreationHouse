import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { ServiceItem } from '../types';
import { 
  Clapperboard, Film, Sparkles, Palette, Layers, Share2, 
  TrendingUp, Globe, Flame, Box, Camera, Video, ArrowRight, 
  CheckCircle2, Clock, MessageSquare, Instagram
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuickQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuickQuote
}) => {
  const { services, brandConfig } = useCms();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'spiritual', label: 'Spiritual & Sacred' },
    { id: 'cinematic', label: 'Cinematic & Video' },
    { id: 'ai_studio', label: 'AI Studio & Avatars' },
    { id: 'design', label: 'Design & Branding' },
    { id: 'digital', label: 'Digital & Growth' },
    { id: 'production', label: 'Web, App & Shoots' }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clapperboard': return Clapperboard;
      case 'Film': return Film;
      case 'Sparkles': return Sparkles;
      case 'Palette': return Palette;
      case 'Layers': return Layers;
      case 'Share2': return Share2;
      case 'TrendingUp': return TrendingUp;
      case 'Globe': return Globe;
      case 'Flame': return Flame;
      case 'Box': return Box;
      case 'Camera': return Camera;
      case 'Video': return Video;
      default: return Sparkles;
    }
  };

  const filteredServices = services.filter((s) => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-[#0B1F2A] relative border-t border-[#D4AF37]/20">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>End-To-End Creative Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-yellow-400">Creative Services</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From Jainism & Sanatan spiritual documentaries to AI video avatars, 4K film editing, branding, and custom web applications.
          </p>
        </div>

        {/* Category Tabs + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0B1F2A] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                    : 'bg-[#102B3A] border border-[#D4AF37]/20 text-slate-300 hover:border-amber-400 hover:text-amber-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-xs text-amber-200 placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
          </div>

        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-[#102B3A]/80 border border-[#D4AF37]/25 overflow-hidden hover:border-amber-400/60 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-xl backdrop-blur-md"
              >
                
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-[#0B1F2A]/40 to-transparent" />

                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-500 text-[#0B1F2A] text-[10px] font-black uppercase tracking-wider shadow-lg">
                      {service.badge}
                    </span>
                  )}

                  {/* Icon Floating */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-[#0B1F2A]/90 border border-[#D4AF37]/40 backdrop-blur-md flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-amber-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-1.5 mb-6">
                      {service.features.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Delivery Time Info */}
                  <div className="pt-4 border-t border-[#16384A] flex items-center justify-between text-xs mb-4">
                    <div className="flex items-center gap-1.5 text-slate-300 font-mono">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Delivery: {service.deliveryTime}</span>
                    </div>
                    <span className="text-amber-300 font-semibold font-mono text-[11px] uppercase">Tailored Execution</span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="py-2.5 rounded-xl bg-[#0B1F2A] border border-[#D4AF37]/30 text-amber-300 hover:bg-[#16384A] text-xs font-bold transition-all text-center"
                    >
                      View Details
                    </button>

                    <a
                      href={`https://wa.me/918815954802?text=${encodeURIComponent(`Hello Namami Creation House, I would like to get a quote for "${service.title}".`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1 hover:bg-emerald-500 transition-all shadow-md"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Get Quote</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Global CTA Banner */}
        <div className="p-8 rounded-3xl bg-[#102B3A]/90 border border-[#D4AF37]/30 text-center backdrop-blur-xl shadow-2xl">
          <h3 className="text-xl font-serif font-bold text-white mb-2">
            Need Custom Work or Project Consultation?
          </h3>
          <p className="text-xs text-slate-300 mb-6">
            We provide tailored quotes for individual projects, recurring content retainers, and specialized temple trusts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold">
            <button
              onClick={onOpenQuickQuote}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0B1F2A] uppercase tracking-wider shadow-lg"
            >
              Get Custom Quote
            </button>

            <a
              href={brandConfig.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 text-white flex items-center gap-1.5 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp ({brandConfig.phoneFormatted})</span>
            </a>

            <a
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#0B1F2A] border border-pink-500/30 text-pink-300 flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram ({brandConfig.instagramHandle})</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
