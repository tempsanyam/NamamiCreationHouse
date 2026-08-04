import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { Image as ImageIcon, Video, Folder, Plus, Trash2, Copy, Check, Search, Sparkles, X } from 'lucide-react';

export const MediaLibrarySection: React.FC = () => {
  const { mediaLibrary, addMediaItem, deleteMediaItem } = useCms();
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newMedia, setNewMedia] = useState({
    name: '',
    url: '',
    type: 'image' as 'image' | 'video' | 'pdf',
    size: '1.5 MB',
    folder: 'General'
  });

  const handleCopyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddMedia = (e: React.FormEvent) => {
    e.preventDefault();
    addMediaItem(newMedia);
    setIsModalOpen(false);
    setNewMedia({ name: '', url: '', type: 'image', size: '1.5 MB', folder: 'General' });
  };

  const filteredMedia = mediaLibrary.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.folder?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-amber-400" />
            Media Library Manager ({mediaLibrary.length})
          </h2>
          <p className="text-xs text-slate-400">
            WordPress-style asset manager. Store images, videos, and portfolio media assets.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-lg self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Upload / Add Media URL</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0B1F2A] border border-slate-800">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search asset name or folder..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredMedia.map((item) => (
          <div key={item.id} className="rounded-2xl bg-[#0B1F2A] border border-slate-800 overflow-hidden shadow-lg group hover:border-amber-500/50 transition-all flex flex-col justify-between">
            <div className="relative aspect-square bg-slate-900 overflow-hidden">
              <img src={item.url} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[9px] text-amber-300 font-mono">
                {item.folder || 'General'}
              </span>
            </div>

            <div className="p-3 bg-[#07151E] space-y-2">
              <div className="text-[11px] font-bold text-white truncate font-mono">{item.name}</div>
              <div className="text-[10px] text-slate-400 flex items-center justify-between">
                <span>{item.size}</span>
                <span>{item.uploadedAt}</span>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                <button
                  onClick={() => handleCopyUrl(item.id, item.url)}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-amber-300 flex items-center gap-1"
                  title="Copy URL"
                >
                  {copiedId === item.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedId === item.id ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={() => deleteMediaItem(item.id)}
                  className="p-1 rounded bg-slate-800 hover:bg-rose-950 text-rose-400"
                  title="Delete"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Media Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-md bg-[#0B1F2A] border border-[#D4AF37]/40 rounded-3xl p-6 relative shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" /> Add Asset to Library
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 rounded-lg bg-slate-800 text-slate-400">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddMedia} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Asset File Name</label>
                <input
                  type="text"
                  required
                  value={newMedia.name}
                  onChange={(e) => setNewMedia({ ...newMedia, name: e.target.value })}
                  placeholder="temple-shoot-cover.jpg"
                  className="w-full px-3 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Direct Image / Video Asset URL</label>
                <input
                  type="text"
                  required
                  value={newMedia.url}
                  onChange={(e) => setNewMedia({ ...newMedia, url: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Folder Category</label>
                  <input
                    type="text"
                    value={newMedia.folder}
                    onChange={(e) => setNewMedia({ ...newMedia, folder: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">File Size</label>
                  <input
                    type="text"
                    value={newMedia.size}
                    onChange={(e) => setNewMedia({ ...newMedia, size: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-500 text-black font-bold text-xs"
                >
                  Save Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
