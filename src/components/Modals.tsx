import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { ServiceItem, PortfolioItem, BlogPost } from '../types';
import { 
  X, Play, MessageSquare, Instagram, ShieldCheck, 
  Send, CheckCircle2, Clock, Sparkles 
} from 'lucide-react';

interface ModalsProps {
  // Showreel / Video Modal
  videoModalData: { isOpen: boolean; url: string; title: string } | null;
  onCloseVideoModal: () => void;

  // Portfolio Item Modal
  portfolioItem: PortfolioItem | null;
  onClosePortfolioModal: () => void;

  // Service Detail Modal
  serviceItem: ServiceItem | null;
  onCloseServiceModal: () => void;

  // Quick Quote Modal
  isQuickQuoteOpen: boolean;
  onCloseQuickQuote: () => void;

  // Article Reader Modal
  blogPost: BlogPost | null;
  onCloseBlogModal: () => void;

  // Legal Modal
  legalModalData: { isOpen: boolean; title: string; content: string } | null;
  onCloseLegalModal: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  videoModalData,
  onCloseVideoModal,
  portfolioItem,
  onClosePortfolioModal,
  serviceItem,
  onCloseServiceModal,
  isQuickQuoteOpen,
  onCloseQuickQuote,
  blogPost,
  onCloseBlogModal,
  legalModalData,
  onCloseLegalModal
}) => {
  const { addInquiry, brandConfig } = useCms();
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Cinematic Video Editing',
    projectScale: 'Medium Campaign / Regular Content',
    details: ''
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addInquiry({
      name: quoteForm.name,
      phone: quoteForm.phone,
      email: quoteForm.email,
      serviceCategory: quoteForm.service,
      message: quoteForm.details || `Project Scale: ${quoteForm.projectScale}`,
      budgetRange: quoteForm.projectScale,
      timeline: 'Quick Quote Request',
      status: 'new'
    });

    const text = `Hello ${brandConfig.name}, I am submitting a Quick Quote request:
Name: ${quoteForm.name}
Phone: ${quoteForm.phone}
Email: ${quoteForm.email}
Service: ${quoteForm.service}
Project Scale: ${quoteForm.projectScale}
Details: ${quoteForm.details}`;

    const waUrl = `https://wa.me/${brandConfig.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    onCloseQuickQuote();
  };

  return (
    <>
      {/* 1. Video Showreel Modal */}
      {videoModalData?.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#0B1F2A] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#102B3A] border-b border-[#D4AF37]/20 flex items-center justify-between">
              <h4 className="text-sm font-serif font-bold text-white">{videoModalData.title}</h4>
              <button onClick={onCloseVideoModal} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video">
              <iframe
                src={`${videoModalData.url}?autoplay=1`}
                title={videoModalData.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. Portfolio Item Detail Modal */}
      {portfolioItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0B1F2A] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase">{portfolioItem.client}</span>
                <h3 className="text-2xl font-serif font-bold text-white">{portfolioItem.title}</h3>
              </div>
              <button onClick={onClosePortfolioModal} className="text-slate-400 hover:text-white p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            {portfolioItem.videoUrl ? (
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-[#D4AF37]/20">
                <iframe
                  src={portfolioItem.videoUrl}
                  title={portfolioItem.title}
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={portfolioItem.thumbnail}
                alt={portfolioItem.title}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-6 border border-[#D4AF37]/20"
                referrerPolicy="no-referrer"
              />
            )}

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">{portfolioItem.description}</p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#16384A]">
              <div className="flex flex-wrap gap-1.5">
                {portfolioItem.tags.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full bg-[#102B3A] border border-[#D4AF37]/20 text-[10px] text-amber-300 font-mono">
                    #{t}
                  </span>
                ))}
              </div>

              <a
                href={`https://wa.me/${brandConfig.whatsAppNumber}?text=${encodeURIComponent(`Hello ${brandConfig.name}, I saw your "${portfolioItem.title}" portfolio item and want similar work.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire Similar Project</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. Service Item Detail Modal */}
      {serviceItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0B1F2A] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-serif font-bold text-white">{serviceItem.title}</h3>
              <button onClick={onCloseServiceModal} className="text-slate-400 hover:text-white p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <img
              src={serviceItem.image}
              alt={serviceItem.title}
              className="w-full h-48 object-cover rounded-2xl mb-6 border border-[#D4AF37]/20"
              referrerPolicy="no-referrer"
            />

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">{serviceItem.fullDesc}</p>

            <div className="p-4 rounded-2xl bg-[#102B3A] border border-[#D4AF37]/20 mb-6">
              <h4 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest mb-3">Key Features & Deliverables</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {serviceItem.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#16384A] text-xs mb-6">
              <span className="font-mono text-amber-300 font-bold">Quote: Custom Estimate</span>
              <span className="text-slate-300 font-mono">Turnaround: {serviceItem.deliveryTime}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${brandConfig.whatsAppNumber}?text=${encodeURIComponent(`Hello ${brandConfig.name}, I want to request a quote for the "${serviceItem.title}" service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get Quote On WhatsApp</span>
              </a>

              <a
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl bg-[#102B3A] border border-pink-500/30 text-pink-300 font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram Showcase</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 4. Quick Quote Modal */}
      {isQuickQuoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0B1F2A] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase">Instant Consultation</span>
                <h3 className="text-2xl font-serif font-bold text-white">Get Custom Quote</h3>
              </div>
              <button onClick={onCloseQuickQuote} className="text-slate-400 hover:text-white p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleQuoteSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-amber-300 font-mono uppercase mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={quoteForm.name}
                  onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                  placeholder="e.g. Rahul Jain"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#102B3A] border border-[#D4AF37]/30 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-amber-300 font-mono uppercase mb-1">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    required
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    placeholder="+91 8815954802"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#102B3A] border border-[#D4AF37]/30 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-amber-300 font-mono uppercase mb-1">Project Scale</label>
                  <select
                    value={quoteForm.projectScale}
                    onChange={(e) => setQuoteForm({ ...quoteForm, projectScale: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#102B3A] border border-[#D4AF37]/30 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Single Reel / Graphic Artwork">Single Reel / Graphic Artwork</option>
                    <option value="Medium Campaign / Regular Content">Medium Campaign / Regular Content</option>
                    <option value="Full Cinematic Documentary / Film">Full Cinematic Documentary / Film</option>
                    <option value="Enterprise Brand Identity & Web App">Enterprise Brand Identity & Web App</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-amber-300 font-mono uppercase mb-1">Select Service</label>
                <select
                  value={quoteForm.service}
                  onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#102B3A] border border-[#D4AF37]/30 text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Cinematic Video Editing">Cinematic Video Editing</option>
                  <option value="Spiritual & Temple Content">Spiritual & Temple Content</option>
                  <option value="AI Video & Avatar Studio">AI Video & Avatar Studio</option>
                  <option value="Graphic Design & Thumbnails">Graphic Design & Thumbnails</option>
                  <option value="Brand Identity & Logo">Brand Identity & Logo</option>
                  <option value="Social Media Retainer">Social Media Retainer</option>
                  <option value="Web & App Development">Web & App Development</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-300 font-mono uppercase mb-1">Project Details</label>
                <textarea
                  rows={3}
                  value={quoteForm.details}
                  onChange={(e) => setQuoteForm({ ...quoteForm, details: e.target.value })}
                  placeholder="Number of videos, deadline, style references..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#102B3A] border border-[#D4AF37]/30 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-[#0B1F2A] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Get Instant WhatsApp Quote</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 5. Article Reader Modal */}
      {blogPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0B1F2A] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-[#0B1F2A] text-[10px] font-bold uppercase">{blogPost.category}</span>
              <button onClick={onCloseBlogModal} className="text-slate-400 hover:text-white p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <h3 className="text-2xl font-serif font-bold text-white mb-2">{blogPost.title}</h3>
            <p className="text-xs font-mono text-slate-300 mb-6">{blogPost.date} • By {blogPost.author} • {blogPost.readTime}</p>

            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-56 object-cover rounded-2xl mb-6 border border-[#D4AF37]/20"
              referrerPolicy="no-referrer"
            />

            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4">
              <p>{blogPost.content}</p>
            </div>
          </div>
        </div>
      )}

      {/* 6. Legal Policy Modal */}
      {legalModalData?.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0B1F2A] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-serif font-bold text-white">{legalModalData.title}</h3>
              <button onClick={onCloseLegalModal} className="text-slate-400 hover:text-white p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{legalModalData.content}</p>
          </div>
        </div>
      )}
    </>
  );
};
