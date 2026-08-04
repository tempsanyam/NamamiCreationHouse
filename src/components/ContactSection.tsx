import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { 
  Phone, Mail, MapPin, MessageSquare, Instagram, 
  Youtube, Send, Sparkles, CheckCircle2 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { addInquiry, brandConfig } = useCms();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Cinematic Video Editing',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Save inquiry to CMS state
    addInquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      serviceCategory: formData.service,
      message: formData.message,
      budgetRange: 'Standard',
      timeline: 'Standard',
      status: 'new'
    });

    // Build direct WhatsApp link with prefilled text
    const text = `Hello ${brandConfig.name}, my name is ${formData.name}.
Email: ${formData.email}
Phone: ${formData.phone}
Interested Service: ${formData.service}
Message: ${formData.message}`;

    const waUrl = `https://wa.me/${brandConfig.whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1F2A] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Instant Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-yellow-400">Namami Creation House</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Reach out via WhatsApp, phone, email, or fill out the project form below for an immediate response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#102B3A]/80 border border-[#D4AF37]/30 backdrop-blur-xl space-y-6 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Direct Contact Hub</h3>

              {/* WhatsApp Card */}
              <a
                href={brandConfig.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 flex items-center gap-4 hover:bg-emerald-900/80 transition-all group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Official WhatsApp</span>
                  <h4 className="text-lg font-bold text-white">{brandConfig.phoneFormatted}</h4>
                  <p className="text-xs text-emerald-300/80">Click to chat instantly with our project lead</p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0B1F2A] border border-pink-500/40 text-pink-300 flex items-center gap-4 hover:bg-pink-950/80 transition-all group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-pink-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-pink-400 uppercase tracking-widest">Official Instagram</span>
                  <h4 className="text-lg font-bold text-white">{brandConfig.instagramHandle}</h4>
                  <p className="text-xs text-pink-300/80">Follow for Latest Reels & Project Showcases</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${brandConfig.email}`}
                className="p-4 rounded-2xl bg-[#0B1F2A] border border-[#D4AF37]/20 text-slate-300 flex items-center gap-4 hover:border-amber-400 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">Email Address</span>
                  <h4 className="text-base font-bold text-white break-all">{brandConfig.email}</h4>
                </div>
              </a>

              {/* Social Channels List */}
              <div className="pt-4 border-t border-[#16384A]">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-3">Official Social Links</span>
                <div className="flex items-center gap-3">
                  <a
                    href={brandConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0B1F2A] border border-pink-500/30 text-pink-400 hover:bg-pink-600 hover:text-white transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>

                  <a
                    href={brandConfig.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0B1F2A] border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0B1F2A] border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white transition-all"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Form + Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Form */}
            <div className="p-8 rounded-3xl bg-[#102B3A]/80 border border-[#D4AF37]/30 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Send Project Message</h3>
              <p className="text-xs text-slate-300 mb-6">Filling this form automatically opens a prefilled WhatsApp chat with our project leads.</p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-center text-emerald-300 space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Opening WhatsApp Chat...</h4>
                  <p className="text-xs">Thank you! If WhatsApp didn't open automatically, please click below:</p>
                  <a
                    href={brandConfig.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs"
                  >
                    Open WhatsApp Chat Now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-amber-300 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Jain"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B1F2A] border border-[#D4AF37]/20 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-amber-300 uppercase mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 8815954802"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B1F2A] border border-[#D4AF37]/20 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-amber-300 uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B1F2A] border border-[#D4AF37]/20 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-amber-300 uppercase mb-1">Select Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B1F2A] border border-[#D4AF37]/20 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Cinematic Video Editing">Cinematic Video Editing</option>
                        <option value="Spiritual & Temple Content">Spiritual & Temple Content</option>
                        <option value="AI Video & Avatar Studio">AI Video & Avatar Studio</option>
                        <option value="Brand Identity & Graphic Design">Brand Identity & Graphic Design</option>
                        <option value="Social Media Management">Social Media Management</option>
                        <option value="Web & App Development">Web & App Development</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-amber-300 uppercase mb-1">Project Details / Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your video length, style preferences, or deadlines..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B1F2A] border border-[#D4AF37]/20 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-[#0B1F2A] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Chat On WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Studio Location Map Frame */}
            <div className="rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-xl h-64 relative bg-[#102B3A]">
              <iframe
                title="Namami Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456789!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-80 contrast-125"
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-[#0B1F2A]/90 p-3 rounded-2xl border border-[#D4AF37]/30 text-xs">
                <p className="font-bold text-amber-300">Namami Creation House Studio</p>
                <p className="text-[10px] text-slate-300">Global Remote Studio & On-Site Production Crews</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
