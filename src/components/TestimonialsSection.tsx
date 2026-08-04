import React from 'react';
import { useCms } from '../context/CmsContext';
import { Star, Play, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC<{ onOpenVideoModal: (url: string, title: string) => void }> = ({
  onOpenVideoModal
}) => {
  const { testimonials } = useCms();
  const partners = [
    "Shri Mahavir Sansthan",
    "Swarna Jewellers",
    "Singhania Luxury Real Estate",
    "Priya Vlogs",
    "Pavitra Tirth Trust",
    "Nexus AI Tech"
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0B1F2A] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Trusted By Leaders</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-yellow-400">Testimonials</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Read what temple trustees, CEOs, content creators, and luxury brands say about our creative house.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl p-8 bg-[#102B3A]/80 border border-[#D4AF37]/20 backdrop-blur-md hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-500/10" />

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-amber-300 font-mono font-bold ml-2">5.0 / 5.0</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div>
                {t.videoUrl && (
                  <button
                    onClick={() => onOpenVideoModal(t.videoUrl!, `${t.name} Video Review`)}
                    className="w-full py-2 mb-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center gap-2 hover:bg-amber-400 hover:text-[#0B1F2A] transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Video Review</span>
                  </button>
                )}

                <div className="flex items-center gap-3 pt-4 border-t border-[#16384A]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                    </h4>
                    <p className="text-[11px] text-amber-400 font-mono">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Partner Trust Banner */}
        <div className="p-8 rounded-3xl bg-[#102B3A]/60 border border-[#D4AF37]/15 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Trusted By Organizations & Brands Worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-300 font-serif font-bold text-sm">
            {partners.map((partner, idx) => (
              <span key={idx} className="hover:text-amber-300 transition-colors cursor-default">
                ★ {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
