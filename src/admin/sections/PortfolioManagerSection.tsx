import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { PortfolioItem } from '../../types';
import { Plus, Edit2, Trash2, Eye, EyeOff, Search, Sparkles, X, Film, Video, Image as ImageIcon } from 'lucide-react';

export const PortfolioManagerSection: React.FC = () => {
  const { portfolio, addPortfolioItem, updatePortfolioItem, deletePortfolioItem, togglePublishPortfolio } = useCms();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);

  const initialFormState: PortfolioItem = {
    id: '',
    title: '',
    client: '',
    category: 'videos',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
    videoUrl: '',
    description: '',
    tags: ['4K', 'Cinematic', 'DaVinci Resolve'],
    beforeImage: '',
    afterImage: '',
    published: true,
    featured: true
  };

  const [formData, setFormData] = useState<PortfolioItem>(initialFormState);
  const [tagsText, setTagsText] = useState(initialFormState.tags.join(', '));

  const handleOpenAdd = () => {
    setEditingItem(null);
    const newItem = { ...initialFormState, id: `port-${Date.now()}` };
    setFormData(newItem);
    setTagsText(newItem.tags.join(', '));
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: PortfolioItem) => {
    setEditingItem(item);
    setFormData(item);
    setTagsText(item.tags ? item.tags.join(', ') : '');
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedTags = tagsText
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const finalItem: PortfolioItem = {
      ...formData,
      tags: parsedTags
    };

    if (editingItem) {
      updatePortfolioItem(finalItem);
    } else {
      addPortfolioItem(finalItem);
    }

    setIsModalOpen(false);
  };

  const filteredItems = portfolio.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'all' || p.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <Film className="w-5 h-5 text-amber-400" />
            Portfolio Showcase Manager ({portfolio.length})
          </h2>
          <p className="text-xs text-slate-400">
            Manage video showreels, AI commercial samples, Before/After color grading, and graphics.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-lg self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Portfolio Project</span>
        </button>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B1F2A] border border-slate-800">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search project title or client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {['all', 'videos', 'ai_videos', 'graphics', 'branding', 'logos', 'websites', 'reels'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-colors cursor-pointer ${
                categoryFilter === cat 
                  ? 'bg-amber-500 text-black' 
                  : 'bg-[#07151E] text-slate-300 hover:bg-slate-800'
              }`}
            >
              {cat.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="rounded-3xl bg-[#0B1F2A] border border-slate-800 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-amber-500/50 transition-all">
            <div>
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 text-amber-300 text-[10px] font-mono font-bold uppercase">
                  {item.category.replace('_', ' ')}
                </span>
                
                <button
                  onClick={() => togglePublishPortfolio(item.id)}
                  className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold font-mono uppercase flex items-center gap-1 ${
                    item.published !== false 
                      ? 'bg-emerald-500/80 text-white' 
                      : 'bg-rose-500/80 text-white'
                  }`}
                >
                  {item.published !== false ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                  <span>{item.published !== false ? 'Live' : 'Hidden'}</span>
                </button>
              </div>

              <div className="p-5 space-y-2">
                <div className="text-[11px] text-slate-400 font-mono">Client: <span className="text-slate-200">{item.client}</span></div>
                <h3 className="font-bold text-white text-base font-serif leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2">{item.description}</p>
                
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-amber-300 font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-800/80 flex items-center justify-between bg-[#07151E]">
              <div className="text-[10px] text-slate-400">
                {item.videoUrl ? <span className="text-cyan-400 flex items-center gap-1"><Video className="w-3 h-3" /> Video Reel</span> : <span className="flex items-center gap-1"><ImageIcon className="w-3 h-3" /> Image Showcase</span>}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete project "${item.title}"?`)) {
                      deletePortfolioItem(item.id);
                    }
                  }}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/60 text-rose-400 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-[#0B1F2A] border border-[#D4AF37]/40 rounded-3xl p-6 relative my-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                {editingItem ? 'Edit Project' : 'Add New Portfolio Project'}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Project Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Client Name</label>
                  <input
                    type="text"
                    required
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="videos">Cinematic Video</option>
                    <option value="ai_videos">AI Video & Avatar</option>
                    <option value="reels">Reels & Shorts</option>
                    <option value="branding">Branding & Logo</option>
                    <option value="graphics">Graphic Design</option>
                    <option value="websites">Web App / Portal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tags (Comma Separated)</label>
                  <input
                    type="text"
                    value={tagsText}
                    onChange={(e) => setTagsText(e.target.value)}
                    placeholder="4K, Drone, AI Avatar"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Project Summary / Case Study</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Cover Thumbnail Image URL</label>
                <input
                  type="text"
                  required
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Embedded Video URL (YouTube Embed Link)</label>
                <input
                  type="text"
                  value={formData.videoUrl || ''}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  placeholder="https://www.youtube.com/embed/..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Before Color Grade Image (Optional)</label>
                  <input
                    type="text"
                    value={formData.beforeImage || ''}
                    onChange={(e) => setFormData({ ...formData, beforeImage: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">After Color Grade Image (Optional)</label>
                  <input
                    type="text"
                    value={formData.afterImage || ''}
                    onChange={(e) => setFormData({ ...formData, afterImage: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.published !== false}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="w-4 h-4 rounded text-amber-500"
                  />
                  <span>Publish to Portfolio Grid</span>
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-500 text-black font-bold text-xs shadow-lg"
                >
                  Save Portfolio Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
