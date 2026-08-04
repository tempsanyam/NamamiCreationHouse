import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { Testimonial } from '../../types';
import { Plus, Edit2, Trash2, MessageSquare, Star, Sparkles, X, Eye, EyeOff } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useCms();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Testimonial | null>(null);

  const initialFormState: Testimonial = {
    id: '',
    name: '',
    role: '',
    company: '',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    videoUrl: '',
    rating: 5,
    comment: '',
    type: 'verified',
    category: 'Spiritual',
    published: true
  };

  const [formData, setFormData] = useState<Testimonial>(initialFormState);

  const handleOpenAdd = () => {
    setEditingItem(null);
    const newItem = { ...initialFormState, id: `test-${Date.now()}` };
    setFormData(newItem);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: Testimonial) => {
    setEditingItem(item);
    setFormData(item);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      updateTestimonial(formData);
    } else {
      addTestimonial(formData);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-amber-400" />
            Client Reviews & Testimonials ({testimonials.length})
          </h2>
          <p className="text-xs text-slate-400">
            Manage genuine client reviews, video testimonials, and Google reviews.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-lg self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Testimonial</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div key={item.id} className="p-5 rounded-3xl bg-[#0B1F2A] border border-slate-800 shadow-xl flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover border border-amber-500/40" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                    <p className="text-[11px] text-slate-400">{item.role}, {item.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-300 italic leading-relaxed bg-[#07151E] p-3 rounded-2xl border border-slate-800">
                "{item.comment}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px]">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 font-mono">
                {item.category}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete testimonial from "${item.name}"?`)) {
                      deleteTestimonial(item.id);
                    }
                  }}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/60 text-rose-400"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
          <div className="w-full max-w-lg bg-[#0B1F2A] border border-[#D4AF37]/40 rounded-3xl p-6 relative shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                {editingItem ? 'Edit Testimonial' : 'Add Testimonial'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1.5 rounded-xl bg-slate-800 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Client Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Role / Designation</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Star Rating (1-5)</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Review Comment</label>
                <textarea
                  rows={3}
                  required
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Avatar Photo URL</label>
                <input
                  type="text"
                  value={formData.avatar}
                  onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white font-mono"
                />
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
                  Save Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
