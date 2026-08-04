import React, { useState } from 'react';
import { Logo } from './Logo';
import { OFFICIAL_BRAND } from '../data/mockData';
import { 
  Instagram, MessageSquare, ShieldCheck, Heart, 
  ArrowUpRight, Mail, Phone, MapPin 
} from 'lucide-react';

interface FooterProps {
  onOpenLegalModal: (title: string, content: string) => void;
  onOpenQuickQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal, onOpenQuickQuote }) => {
  const privacyContent = `At Namami Creation House, we respect your privacy. All raw video assets, brand assets, script documents, and client communications provided to us are held strictly confidential. We never share or sell client media to third parties without prior written consent. Full IP rights are transferred upon final payment.`;

  const termsContent = `All creative services rendered by Namami Creation House are governed by agreed project briefs and custom quotations. Standard turnarounds apply after complete brief receipt. Revisions are honored as per project scope. Source file handovers are available upon request.`;

  const refundContent = `We strive for 100% satisfaction. If a project cannot be delivered due to creative misalignment prior to final execution, milestone adjustments are handled transparently. Advance payments cover initial scripting and setup costs.`;

  return (
    <footer className="bg-[#0B1F2A] text-slate-400 border-t border-[#D4AF37]/30 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top CTA Banner */}
        <div className="mb-16 p-8 rounded-3xl bg-[#102B3A] border border-[#D4AF37]/40 text-center relative overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
            Stay Connected With Namami Creation House
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-6">
            Connect directly with our creative directors for instant project consultations and custom quotes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={OFFICIAL_BRAND.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat On WhatsApp ({OFFICIAL_BRAND.phoneFormatted})</span>
            </a>

            <a
              href={OFFICIAL_BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#0B1F2A] border border-pink-500/30 text-pink-300 font-bold text-xs flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram (@namami_creation_house)</span>
            </a>

            <button
              onClick={onOpenQuickQuote}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-[#0B1F2A] font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Get Custom Quote
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 pb-12 border-b border-[#16384A]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" showTagline={true} />
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Namami Creation House is an international creative house specializing in Jainism & Sanatan spiritual media, AI video avatar commercials, 4K film editing, branding, and web development.
            </p>

            <div className="space-y-1 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>WhatsApp: {OFFICIAL_BRAND.phoneFormatted}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Email: {OFFICIAL_BRAND.email}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-amber-200 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-amber-200 transition-colors">Portfolio Showcase</a></li>
              <li><a href="#process" className="hover:text-amber-200 transition-colors">Working Process</a></li>
              <li><a href="#testimonials" className="hover:text-amber-200 transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-amber-200 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300 mb-4">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Spiritual Content</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">4K Video Editing</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">AI Studio & Avatars</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Graphic Design</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Brand Identity</a></li>
              <li><a href="#services" className="hover:text-amber-200 transition-colors">Web & App Dev</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300 mb-4">Policies & Social</h4>
            <ul className="space-y-2 text-xs mb-4">
              <li>
                <button
                  onClick={() => onOpenLegalModal("Privacy Policy", privacyContent)}
                  className="hover:text-amber-200 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal("Terms of Service", termsContent)}
                  className="hover:text-amber-200 transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal("Refund Policy", refundContent)}
                  className="hover:text-amber-200 transition-colors text-left"
                >
                  Refund Policy
                </button>
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={OFFICIAL_BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0B1F2A] text-pink-400 hover:bg-pink-600 hover:text-white transition-all border border-[#16384A]"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={OFFICIAL_BRAND.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0B1F2A] text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all border border-[#16384A]"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Namami Creation House. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>From Spiritual To Cinematic</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
