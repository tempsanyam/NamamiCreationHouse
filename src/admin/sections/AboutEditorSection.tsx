import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { AboutConfig } from '../../types';
import { Save, Sparkles, Check, Image as ImageIcon } from 'lucide-react';

export const AboutEditorSection: React.FC = () => {
  const { aboutConfig, updateAbout } = useCms();
  const [formData, setFormData] = useState<AboutConfig>(aboutConfig);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateAbout(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            About Page & Story Editor
          </h2>
          <p className="text-xs text-slate-400">
            Edit the company story, mission statement, vision, and feature image.
          </p>
        </div>

        {savedSuccess && (
          <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4" /> Story Updated Live!
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono">1. Title & Headlines</h3>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Badge Tagline</label>
            <input
              type="text"
              value={formData.badge}
              onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Section Main Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Section Subtitle / Motto</label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono">2. Company Story Paragraphs</h3>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Paragraph 1 (Introduction & Expertise)</label>
            <textarea
              rows={3}
              value={formData.storyParagraph1}
              onChange={(e) => setFormData({ ...formData, storyParagraph1: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Paragraph 2 (Continuity & Delivery)</label>
            <textarea
              rows={3}
              value={formData.storyParagraph2}
              onChange={(e) => setFormData({ ...formData, storyParagraph2: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono">3. Mission, Vision & Media</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Mission Statement</label>
              <textarea
                rows={3}
                value={formData.mission}
                onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Vision Statement</label>
              <textarea
                rows={3}
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-cyan-400" /> About Section Feature Image URL
            </label>
            <input
              type="text"
              value={formData.mainImage}
              onChange={(e) => setFormData({ ...formData, mainImage: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:border-amber-400 focus:outline-none font-mono"
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm flex items-center gap-2 shadow-lg cursor-pointer transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save About Section</span>
        </button>
      </form>
    </div>
  );
};
