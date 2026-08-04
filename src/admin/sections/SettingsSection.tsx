import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { BrandConfig } from '../../types';
import { Settings, Save, Check, Phone, Mail, Instagram, MessageSquare, MapPin, Palette } from 'lucide-react';

export const SettingsSection: React.FC = () => {
  const { brandConfig, updateBrandConfig } = useCms();
  const [formData, setFormData] = useState<BrandConfig>(brandConfig);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateBrandConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <Settings className="w-5 h-5 text-amber-400" />
            Site Settings & Contact Info
          </h2>
          <p className="text-xs text-slate-400">
            Edit company contact details, WhatsApp number, Instagram links, and global brand theme colors.
          </p>
        </div>

        {savedSuccess && (
          <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4" /> Brand Settings Live Updated!
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono">1. Official Brand Identity</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Company Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400 font-serif font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Brand Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Company Motto / Philosophy</label>
            <input
              type="text"
              value={formData.motto}
              onChange={(e) => setFormData({ ...formData, motto: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono">2. Direct Contact Channels</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> Phone Number (Raw)
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> Official WhatsApp Number
              </label>
              <input
                type="text"
                value={formData.whatsAppNumber}
                onChange={(e) => setFormData({ ...formData, whatsAppNumber: e.target.value, whatsAppUrl: `https://wa.me/${e.target.value.replace(/[^0-9]/g, '')}` })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> Official Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-pink-400" /> Instagram Handle
              </label>
              <input
                type="text"
                value={formData.instagramHandle}
                onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value, instagramUrl: `https://instagram.com/${e.target.value.replace('@', '')}` })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-rose-400" /> Studio Office Address
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono flex items-center gap-2">
            <Palette className="w-4 h-4" /> 3. Luxury Theme Colors
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Background</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={formData.primaryColor}
                  onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                  className="w-9 h-9 rounded-lg bg-transparent border border-slate-700 cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.primaryColor}
                  onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Secondary Dark Blue</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={formData.secondaryColor}
                  onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
                  className="w-9 h-9 rounded-lg bg-transparent border border-slate-700 cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.secondaryColor}
                  onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Gold Accent Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={formData.accentColor}
                  onChange={(e) => setFormData({ ...formData, accentColor: e.target.value })}
                  className="w-9 h-9 rounded-lg bg-transparent border border-slate-700 cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.accentColor}
                  onChange={(e) => setFormData({ ...formData, accentColor: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm flex items-center gap-2 shadow-lg cursor-pointer transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save Brand Settings</span>
        </button>
      </form>
    </div>
  );
};
