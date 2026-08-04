import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { BlogPost } from '../types';
import { Sparkles, Clock, BookOpen, ArrowUpRight, Briefcase, MessageSquare, Send } from 'lucide-react';

interface BlogCareerProps {
  onOpenBlogModal: (post: BlogPost) => void;
  onOpenQuickQuote: () => void;
}

export const BlogCareerSection: React.FC<BlogCareerProps> = ({
  onOpenBlogModal,
  onOpenQuickQuote
}) => {
  const { blogs, brandConfig } = useCms();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI', 'Editing', 'Branding', 'Marketing', 'SEO'];

  const filteredPosts = blogs.filter((post) => {
    if (activeCategory === 'All') return true;
    return post.category === activeCategory;
  });

  const openPositions = [
    { title: "Senior DaVinci Resolve Colorist", type: "Full-Time / Remote", exp: "3+ Years", desc: "Expert in raw film color grading, skin tone isolation, and LUT creation." },
    { title: "AI Prompt Engineer & Video Specialist", type: "Full-Time / Hybrid", exp: "2+ Years", desc: "Proficient in Midjourney, Runway Gen-2, ElevenLabs, and AI voice cloning." },
    { title: "React & Tailwind Web Developer", type: "Contract / Project", exp: "2+ Years", desc: "Building ultra-fast modern websites, animated landing pages, and UI/UX." }
  ];

  return (
    <section id="blog" className="py-24 bg-[#0B1F2A] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Blog Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Creative Insights & Trends</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Namami <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-yellow-400">Knowledge Hub</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Master the secrets of AI video creation, viral Instagram reels editing, color grading, and brand growth.
          </p>
        </div>

        {/* Blog Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-amber-400 text-[#0B1F2A] shadow-md'
                  : 'bg-[#102B3A] border border-[#D4AF37]/20 text-slate-300 hover:border-amber-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onOpenBlogModal(post)}
              className="rounded-3xl bg-[#102B3A]/80 border border-[#D4AF37]/20 overflow-hidden hover:border-amber-400/60 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-lg backdrop-blur-md"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-400 text-[#0B1F2A] text-[10px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-300 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-amber-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#16384A] flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Section */}
        <div id="career" className="p-8 sm:p-12 rounded-3xl bg-[#102B3A]/80 border border-[#D4AF37]/30 backdrop-blur-xl shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Briefcase className="w-10 h-10 text-amber-400 mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">Join Our Creative Team</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Are you passionate about cinematic video editing, AI video creation, or web development? Apply now and craft magic with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {openPositions.map((pos, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0B1F2A]/90 border border-[#D4AF37]/20 flex flex-col justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[10px] font-mono border border-amber-500/20">
                    {pos.type}
                  </span>
                  <h4 className="text-base font-bold text-white mt-2 mb-1">{pos.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{pos.desc}</p>
                </div>

                <a
                  href={`https://wa.me/918815954802?text=${encodeURIComponent(`Hello Namami Creation House, I want to apply for the position: ${pos.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-500 transition-all shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Apply Via WhatsApp</span>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-300">
              Or email your portfolio directly to <strong className="text-amber-300">{brandConfig.email}</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
