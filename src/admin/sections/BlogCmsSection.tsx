import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { BlogPost } from '../../types';
import { Plus, Edit2, Trash2, FileText, Search, Sparkles, X, Eye, Clock, Calendar } from 'lucide-react';

export const BlogCmsSection: React.FC = () => {
  const { blogs, addBlogPost, updateBlogPost, deleteBlogPost } = useCms();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const initialFormState: BlogPost = {
    id: '',
    title: '',
    category: 'AI',
    excerpt: '',
    content: '',
    readTime: '4 min read',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    author: 'Namami Editorial Team',
    status: 'published'
  };

  const [formData, setFormData] = useState<BlogPost>(initialFormState);

  const handleOpenAdd = () => {
    setEditingPost(null);
    const newPost = { ...initialFormState, id: `blog-${Date.now()}` };
    setFormData(newPost);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData(post);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      updateBlogPost(formData);
    } else {
      addBlogPost(formData);
    }
    setIsModalOpen(false);
  };

  const filteredBlogs = blogs.filter(b => 
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            Blog & Articles CMS ({blogs.length})
          </h2>
          <p className="text-xs text-slate-400">
            Publish articles, video production guides, and AI marketing case studies.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-lg self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Write New Article</span>
        </button>
      </div>

      {/* Search Toolbar */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0B1F2A] border border-slate-800">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search article titles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Blog Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((post) => (
          <div key={post.id} className="rounded-3xl bg-[#0B1F2A] border border-slate-800 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-amber-500/50 transition-all">
            <div>
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 text-amber-300 text-[10px] font-mono font-bold uppercase">
                  {post.category}
                </span>
                <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold font-mono uppercase ${
                  post.status === 'draft' ? 'bg-amber-500/80 text-black' : 'bg-emerald-500/80 text-white'
                }`}>
                  {post.status || 'published'}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h3 className="font-bold text-white text-base font-serif leading-snug">{post.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2">{post.excerpt}</p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-800/80 flex items-center justify-between bg-[#07151E]">
              <div className="text-[10px] text-slate-400 font-mono">By {post.author}</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(post)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete article "${post.title}"?`)) {
                      deleteBlogPost(post.id);
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
                {editingPost ? 'Edit Blog Article' : 'Write New Article'}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Article Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="AI">AI & Tech</option>
                    <option value="Editing">Video Editing</option>
                    <option value="Branding">Branding & Logo</option>
                    <option value="Marketing">Digital Marketing</option>
                    <option value="Business">Business Growth</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Publish Status</label>
                  <select
                    value={formData.status || 'published'}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Short Excerpt</label>
                <input
                  type="text"
                  required
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Article Content</label>
                <textarea
                  rows={6}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Cover Image URL</label>
                  <input
                    type="text"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Read Time Estimate</label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none"
                  />
                </div>
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
                  Save Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
