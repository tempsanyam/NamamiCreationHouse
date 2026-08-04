import React, { useState } from 'react';
import { FAQ_LIST, OFFICIAL_BRAND } from '../data/mockData';
import { Sparkles, ChevronDown, HelpCircle, Search, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = FAQ_LIST.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#0B1F2A] relative border-t border-[#D4AF37]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-yellow-400">Questions</span>
          </h2>
          <p className="text-slate-300 text-sm">
            Everything you need to know about our services, custom quotes, revisions, and delivery workflows.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-xs text-amber-200 placeholder-slate-400 pl-11 focus:outline-none focus:border-amber-400 shadow-inner"
          />
          <Search className="w-4 h-4 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#102B3A]/80 border border-[#D4AF37]/20 overflow-hidden transition-all duration-300 backdrop-blur-md"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-white hover:text-amber-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#16384A]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="p-6 rounded-2xl bg-[#102B3A] border border-[#D4AF37]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Still have questions?</h4>
            <p className="text-xs text-slate-300">Chat directly with our project leads on WhatsApp anytime.</p>
          </div>

          <a
            href={OFFICIAL_BRAND.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 8815954802)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
