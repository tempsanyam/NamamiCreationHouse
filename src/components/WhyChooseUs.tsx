import React from 'react';
import { OFFICIAL_BRAND } from '../data/mockData';
import { 
  Zap, Sparkles, ShieldCheck, Clock, Headphones, 
  Bot, Globe2, UserCheck, Layers, FileText, ArrowUpRight 
} from 'lucide-react';

export const WhyChooseUs: React.FC<{ onOpenQuickQuote: () => void }> = ({ onOpenQuickQuote }) => {
  const features = [
    {
      icon: Layers,
      title: "One Stop Creative House",
      desc: "From spiritual documentaries and video editing to AI avatars, branding, and web development."
    },
    {
      icon: Clock,
      title: "Fast 24-48h Delivery",
      desc: "Tight deadline? We deliver high retention reels, thumbnails, and graphics within 24 to 48 hours."
    },
    {
      icon: Sparkles,
      title: "Premium Cinematic Quality",
      desc: "Hollywood & Bollywood grade DaVinci color grading, 4K resolution, and custom spatial sound scoring."
    },
    {
      icon: Bot,
      title: "AI Powered Innovation",
      desc: "Cutting edge AI video models, voice cloning, text-to-video, and synthetic avatars."
    },
    {
      icon: FileText,
      title: "Custom Quote & Clear Scope",
      desc: "Zero hidden charges. Transparent tailored quotes with milestone-based delivery."
    },
    {
      icon: Headphones,
      title: "24x7 Dedicated Support",
      desc: "Direct access to creative project managers via WhatsApp and phone anytime."
    },
    {
      icon: UserCheck,
      title: "Dedicated Creative Director",
      desc: "One point of contact orchestrating designers, editors, and AI creators for seamless flow."
    },
    {
      icon: Globe2,
      title: "Global Client Reach",
      desc: "Proudly serving clients worldwide with seamless digital collaboration and fast delivery."
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment & Rights",
      desc: "Full intellectual property ownership transferred to you upon project delivery."
    },
    {
      icon: Zap,
      title: "Dedicated Revisions",
      desc: "We fine-tune every frame, title, and color until you are 100% delighted with the final masterpiece."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#0B1F2A] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Unmatched Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-yellow-400">Namami Creation House</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            We bridge the gap between creative artistry and business execution, ensuring every project yields real audience growth and prestige.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#102B3A]/80 border border-[#D4AF37]/20 hover:border-amber-400/60 transition-all duration-300 group flex flex-col justify-between shadow-lg hover:-translate-y-1 backdrop-blur-md"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call To Action Banner */}
        <div className="relative rounded-3xl p-8 bg-[#102B3A] border border-[#D4AF37]/40 text-center overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
            Ready To Scale Your Brand To The Next Level?
          </h3>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-6">
            Get an instant custom quote or chat directly with our project leads on WhatsApp right now.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuickQuote}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-[#0B1F2A] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg flex items-center gap-2"
            >
              <span>Get Free Consultation & Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={OFFICIAL_BRAND.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 transition-all shadow-lg flex items-center gap-2"
            >
              <span>Chat on WhatsApp ({OFFICIAL_BRAND.phoneFormatted})</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
