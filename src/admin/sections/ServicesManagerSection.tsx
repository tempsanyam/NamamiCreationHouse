import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { ServiceItem } from '../../types';
import { Plus, Edit2, Trash2, Eye, EyeOff, Search, Sparkles, Check, X, Clapperboard, Layers } from 'lucide-react';

export const ServicesManagerSection: React.FC = () => {
  const { services, addService, updateService, deleteService, togglePublishService } = useCms();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ServiceItem | null>(null);

  const initialFormState: ServiceItem = {
    id: '',
    title: '',
    category: 'cinematic',
    iconName: 'Clapperboard',
    shortDesc: '',
    fullDesc: '',
    features: ['4K Delivery', 'Fast Turnaround', 'Unlimited Revisions'],
    startingPrice: 'Get Quote',
    deliveryTime: '2 - 4 Days',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    badge: '',
    published: true,
    featured: true
  };

  const [formData, setFormData] = useState<ServiceItem>(initialFormState);
  const [featuresText, setFeaturesText] = useState(initialFormState.features.join(', '));

  const handleOpenAdd = () => {
    setEditingItem(null);
    const newService = { ...initialFormState, id: `service-${Date.now()}` };
    setFormData(newService);
    setFeaturesText(newService.features.join(', '));
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: ServiceItem) => {
    setEditingItem(item);
    setFormData(item);
    setFeaturesText(item.features ? item.features.join(', ') : '');
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedFeatures = featuresText
      .split(',')
      .map(f => f.trim())
      .filter(Boolean);

    const finalItem: ServiceItem = {
      ...formData,
      features: parsedFeatures
    };

    if (editingItem) {
      updateService(finalItem);
    } else {
      addService(finalItem);
    }

    setIsModalOpen(false);
  };

  const filteredServices = services.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'all' || s.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <Clapperboard className="w-5 h-5 text-amber-400" />
            Services Manager ({services.length})
          </h2>
          <p className="text-xs text-slate-400">
            Create, edit, hide or feature creative studio services on your live website.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-lg self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B1F2A] border border-slate-800">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search service title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {['all', 'spiritual', 'cinematic', 'ai_studio', 'design', 'digital', 'production'].map((cat) => (
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

      {/* Services Table */}
      <div className="p-4 rounded-3xl bg-[#0B1F2A] border border-slate-800 overflow-x-auto shadow-xl">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
              <th className="py-3 px-3">Service</th>
              <th className="py-3 px-3">Category</th>
              <th className="py-3 px-3">Delivery</th>
              <th className="py-3 px-3">Badge</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredServices.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="py-3 px-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-10 h-10 rounded-lg object-cover border border-slate-700" 
                    />
                    <div>
                      <div className="font-bold text-white text-sm">{item.title}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 max-w-xs">{item.shortDesc}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-amber-300 font-mono capitalize">
                    {item.category.replace('_', ' ')}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono text-slate-300">{item.deliveryTime}</td>
                <td className="py-3 px-3">
                  {item.badge ? (
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-semibold">
                      {item.badge}
                    </span>
                  ) : (
                    <span className="text-slate-600 text-[10px]">—</span>
                  )}
                </td>
                <td className="py-3 px-3">
                  <button
                    onClick={() => togglePublishService(item.id)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono uppercase flex items-center gap-1 cursor-pointer ${
                      item.published !== false 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {item.published !== false ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                    <span>{item.published !== false ? 'Live' : 'Hidden'}</span>
                  </button>
                </td>
                <td className="py-3 px-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => handleOpenEdit(item)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                      title="Edit"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete service "${item.title}"?`)) {
                          deleteService(item.id);
                        }
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/60 text-slate-200 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-[#0B1F2A] border border-[#D4AF37]/40 rounded-3xl p-6 relative my-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                {editingItem ? 'Edit Service' : 'Add New Service'}
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
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Service Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="spiritual">Spiritual & Tirth</option>
                    <option value="cinematic">Cinematic Video</option>
                    <option value="ai_studio">AI Studio</option>
                    <option value="design">Graphic & Branding</option>
                    <option value="digital">Digital & Social</option>
                    <option value="production">Production & Web</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Short Card Description</label>
                <input
                  type="text"
                  required
                  value={formData.shortDesc}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Detailed Service Description</label>
                <textarea
                  rows={3}
                  value={formData.fullDesc}
                  onChange={(e) => setFormData({ ...formData, fullDesc: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Key Deliverables (Comma Separated)</label>
                <input
                  type="text"
                  value={featuresText}
                  onChange={(e) => setFeaturesText(e.target.value)}
                  placeholder="4K Delivery, Sound Design, Color Grading"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Delivery Time Frame</label>
                  <input
                    type="text"
                    value={formData.deliveryTime}
                    onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Highlight Badge (Optional)</label>
                  <input
                    type="text"
                    placeholder="Bestseller, Core Service, AI Studio"
                    value={formData.badge || ''}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Cover Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.published !== false}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="w-4 h-4 rounded text-amber-500"
                  />
                  <span>Publish to Live Website</span>
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
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
