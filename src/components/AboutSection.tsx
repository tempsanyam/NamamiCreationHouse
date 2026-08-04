import React from 'react';
import { OFFICIAL_BRAND } from '../data/mockData';
import { 
  Sparkles, Target, Compass, Heart, Award, 
  Crown, CheckCircle2, Flame, ArrowRight, ShieldCheck, Film, Video
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const milestones = [
    { year: "2023", title: "Foundation & Sacred Craft", desc: "Started as a dedicated studio specializing in Jainism & Sanatan spiritual media, 4K video editing, and custom visual design." },
    { year: "2024", title: "AI Studio & Commercial Films", desc: "Pioneered synthetic AI video generation, text-to-video commercials, and lip-synced AI avatars." },
    { year: "2025", title: "Global Agency Footprint", desc: "Delivered over 1,500+ projects across 22+ countries for temple trusts, digital creators, and scale-up enterprises." },
    { year: "2026", title: "Complete Creative House", desc: "Established full 360° creative agency capabilities spanning 4K film cuts, branding, motion graphics, and React web applications." }
  ];

  const coreValues = [
    { title: "Spiritual Reverence", desc: "Authentic storytelling and sacred visual craft honoring Jainism & Sanatan cultural heritage.", icon: Flame },
    { title: "Cinematic Excellence", desc: "Hollywood & Bollywood grade DaVinci Resolve color grading, 4K resolution, and spatial sound mix.", icon: Crown },
    { title: "AI Innovation", desc: "Cutting-edge AI video models, voice cloning, and text-to-video tools to accelerate project delivery.", icon: Sparkles },
    { title: "Client First Integrity", desc: "24x7 transparent communication via WhatsApp, clear milestones, and complete rights ownership.", icon: Heart }
  ];

  return (
    <section id="about" className="py-24 bg-[#0B1F2A] relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Discover Our Legacy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-yellow-400">Namami Creation House</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A luxury creative house bridging ancient spiritual reverence with high-end cinematic production and modern AI innovation.
          </p>
        </div>

        {/* Company Story & Dual Essence */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#102B3A]/80 border border-[#D4AF37]/30 backdrop-blur-xl relative overflow-hidden mb-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                <span>3+ Years of Creative Excellence</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Crafting Visual Experiences That Command Respect & Ignite Emotion
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong className="text-amber-300">Namami Creation House</strong> is an international creative agency specializing in spiritual documentaries, 4K film editing, AI video commercials, brand strategy, graphic design, and high-performance web development.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                We provide a seamless 360° creative service without the complexity of managing multiple vendors, ensuring complete brand continuity across video, design, and digital platforms.
              </p>

              {/* Dual Pillars Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#16384A]">
                <div className="p-4 rounded-2xl bg-[#0B1F2A]/90 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                    <span className="text-base">🛕</span>
                    <span>Spiritual Media Legacy</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Over 600+ films, temple event documentaries, pravachan edits, and music videos for Jainism & Sanatan organizations worldwide.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0B1F2A]/90 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                    <span className="text-base">🎬</span>
                    <span>Cinematic & AI Studio</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    DaVinci Resolve color grading, 4K drone cinematography, AI avatars, text-to-video ads, and React web applications.
                  </p>
                </div>
              </div>

            </div>

            {/* Visual Highlight Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80"
                  alt="Namami Studio Editing Console"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-[#0B1F2A]/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#102B3A]/90 border border-[#D4AF37]/30 backdrop-blur-md">
                  <p className="text-xs font-bold text-amber-300 uppercase tracking-widest font-mono">Official Studio Guarantee</p>
                  <p className="text-xs text-slate-200 mt-1">Direct WhatsApp Communication • 100% Rights Transfer • Priority 24-48h Delivery</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-20">
          <h3 className="text-center text-2xl sm:text-3xl font-serif font-bold text-white mb-8">
            Our Four Core Pillars
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#102B3A]/60 border border-[#D4AF37]/20 hover:border-amber-400/60 hover:bg-[#102B3A] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="text-lg font-bold text-amber-200 mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Timeline */}
        <div>
          <h3 className="text-center text-2xl sm:text-3xl font-serif font-bold text-white mb-10">
            Our Journey & Evolution
          </h3>

          <div className="relative border-l-2 border-amber-500/30 ml-4 md:ml-32 space-y-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-6 md:pl-10 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0B1F2A] border-2 border-amber-400 group-hover:bg-amber-400 transition-colors shadow-[0_0_10px_rgba(234,179,8,0.6)]" />

                <div className="p-5 rounded-2xl bg-[#102B3A]/70 border border-[#D4AF37]/20 hover:border-amber-400/50 transition-all">
                  <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 inline-block mb-2">
                    {m.year}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-1">{m.title}</h4>
                  <p className="text-xs text-slate-300">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
