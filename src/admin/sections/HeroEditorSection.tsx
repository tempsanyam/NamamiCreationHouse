import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { HeroConfig } from '../../types';
import { Save, Sparkles, Check, Play, Image as ImageIcon } from 'lucide-react';

export const HeroEditorSection: React.FC = () => {
  const { heroConfig, updateHero } = useCms();
  const [formData, setFormData] = useState<HeroConfig>(heroConfig);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateHero(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            Home Hero Section Editor
          </h2>
          <p className="text-xs text-slate-400">
            Edit the main title, headline, background media, and CTA buttons on the public home page.
          </p>
        </div>

        {savedSuccess && (
          <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4" /> Live Website Updated!
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono">1. Typography & Headlines</h3>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Small Subtitle Eyebrow</label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Main Heading (Line 1)</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Main Heading (Line 2 Gradient)</label>
              <input
                type="text"
                value={formData.titleGradient}
                onChange={(e) => setFormData({ ...formData, titleGradient: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Hero Description Paragraph</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono">2. CTA Buttons</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Button Label</label>
              <input
                type="text"
                value={formData.primaryCtaText}
                onChange={(e) => setFormData({ ...formData, primaryCtaText: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Button Target URL / Anchor</label>
              <input
                type="text"
                value={formData.primaryCtaUrl}
                onChange={(e) => setFormData({ ...formData, primaryCtaUrl: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Secondary Button Label</label>
              <input
                type="text"
                value={formData.secondaryCtaText}
                onChange={(e) => setFormData({ ...formData, secondaryCtaText: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Secondary Button Target URL / Anchor</label>
              <input
                type="text"
                value={formData.secondaryCtaUrl}
                onChange={(e) => setFormData({ ...formData, secondaryCtaUrl: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono">3. Media & Background</h3>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-cyan-400" /> Background Canvas Image URL
            </label>
            <input
              type="text"
              value={formData.bgImage}
              onChange={(e) => setFormData({ ...formData, bgImage: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none font-mono"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-2">
                <Play className="w-4 h-4 text-emerald-400" /> Embedded Video Modal URL (YouTube Embed)
              </label>
              <input
                type="text"
                value={formData.videoUrl}
                onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Showreel Video Link</label>
              <input
                type="text"
                value={formData.showreelUrl}
                onChange={(e) => setFormData({ ...formData, showreelUrl: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none font-mono"
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={formData.motionEnabled}
                onChange={(e) => setFormData({ ...formData, motionEnabled: e.target.checked })}
                className="w-4 h-4 rounded bg-[#07151E] border-slate-700 text-amber-500 focus:ring-amber-400"
              />
              <span>Enable Framer Motion particle ambient background animation</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm flex items-center gap-2 shadow-lg cursor-pointer transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes to Live Website</span>
        </button>
      </form>
    </div>
  );
};
