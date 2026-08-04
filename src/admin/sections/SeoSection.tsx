import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { SeoConfig } from '../../types';
import { Globe, Save, Check, Sparkles, Search, Code, ShieldCheck } from 'lucide-react';

export const SeoSection: React.FC = () => {
  const { seoConfig, updateSeoConfig } = useCms();
  const [formData, setFormData] = useState<SeoConfig>(seoConfig);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSeoConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <Globe className="w-5 h-5 text-amber-400" />
            SEO & Search Engine Optimization
          </h2>
          <p className="text-xs text-slate-400">
            Configure Meta Titles, Descriptions, Keywords, Open Graph tags, Schema.org JSON-LD, and Robots.txt.
          </p>
        </div>

        {savedSuccess && (
          <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4" /> SEO Settings Saved!
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono flex items-center gap-2">
            <Search className="w-4 h-4" /> 1. Meta Tags & Google Search Snippet
          </h3>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Global Meta Title</label>
            <input
              type="text"
              required
              value={formData.metaTitle}
              onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Global Meta Description</label>
            <textarea
              rows={3}
              required
              value={formData.metaDescription}
              onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Focus Keywords (Comma Separated)</label>
            <input
              type="text"
              value={formData.keywords}
              onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono flex items-center gap-2">
            <Globe className="w-4 h-4" /> 2. Social Media Open Graph (OG) Tags
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Open Graph Share Image URL</label>
              <input
                type="text"
                value={formData.ogImage}
                onChange={(e) => setFormData({ ...formData, ogImage: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Twitter Handle</label>
              <input
                type="text"
                value={formData.twitterHandle}
                onChange={(e) => setFormData({ ...formData, twitterHandle: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-mono flex items-center gap-2">
            <Code className="w-4 h-4" /> 3. Schema.org Structured Data & Robots.txt
          </h3>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Schema.org Organization JSON-LD</label>
            <textarea
              rows={4}
              value={formData.schemaJson}
              onChange={(e) => setFormData({ ...formData, schemaJson: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-amber-200 font-mono focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Google Analytics ID</label>
              <input
                type="text"
                value={formData.googleAnalyticsId}
                onChange={(e) => setFormData({ ...formData, googleAnalyticsId: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Google Search Console Meta Verification</label>
              <input
                type="text"
                value={formData.searchConsoleTag}
                onChange={(e) => setFormData({ ...formData, searchConsoleTag: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none font-mono"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm flex items-center gap-2 shadow-lg cursor-pointer transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save SEO Configurations</span>
        </button>
      </form>
    </div>
  );
};
