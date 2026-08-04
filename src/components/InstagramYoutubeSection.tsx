import React from 'react';
import { INSTAGRAM_POSTS, YOUTUBE_VIDEOS, OFFICIAL_BRAND } from '../data/mockData';
import { 
  Instagram, Youtube, Heart, MessageCircle, Play, 
  Sparkles, ArrowUpRight, Eye 
} from 'lucide-react';

export const InstagramYoutubeSection: React.FC<{ onOpenVideoModal: (url: string, title: string) => void }> = ({
  onOpenVideoModal
}) => {
  return (
    <section id="social-feeds" className="py-24 bg-[#0B1F2A] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono tracking-widest uppercase mb-2">
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Official Instagram Grid</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Follow <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 to-yellow-500">{OFFICIAL_BRAND.instagramHandle}</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={OFFICIAL_BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-amber-500 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow On Instagram</span>
            </a>
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl bg-[#102B3A]/80 border border-[#D4AF37]/20 overflow-hidden hover:border-pink-500/50 transition-all duration-300 group flex flex-col justify-between shadow-lg backdrop-blur-md"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-[#0B1F2A]/20 to-transparent" />

                {/* Reel Badge */}
                {post.type === 'reel' && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-pink-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    REEL
                  </span>
                )}

                {/* Like / Comment Overlay */}
                <div className="absolute inset-0 bg-[#0B1F2A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold text-sm">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-pink-500 text-pink-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                  {post.caption}
                </p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <span>View Post On Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pt-8 border-t border-[#16384A]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Youtube className="w-3.5 h-3.5 text-red-500" />
              <span>YouTube Official Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-500">Latest Masterpieces</span>
            </h2>
          </div>
        </div>

        {/* YouTube Videos Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {YOUTUBE_VIDEOS.map((yt) => (
            <div
              key={yt.id}
              className="rounded-3xl bg-[#102B3A]/80 border border-[#D4AF37]/20 overflow-hidden hover:border-red-500/50 transition-all duration-300 group flex flex-col justify-between shadow-xl backdrop-blur-md"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={yt.thumbnail}
                  alt={yt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0B1F2A]/40 group-hover:bg-[#0B1F2A]/20 transition-colors" />

                {/* Play Button Overlay */}
                <button
                  onClick={() => onOpenVideoModal(yt.videoUrl, yt.title)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_25px_rgba(220,38,38,0.8)]">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                </button>

                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] text-white font-mono">
                  {yt.duration}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-base font-serif font-bold text-white mb-4 line-clamp-2">
                  {yt.title}
                </h3>

                <button
                  onClick={() => onOpenVideoModal(yt.videoUrl, yt.title)}
                  className="w-full py-2.5 rounded-xl bg-[#0B1F2A] border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
