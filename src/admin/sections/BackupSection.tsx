import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { Download, Upload, RotateCcw, Check, AlertTriangle, ShieldCheck, Database } from 'lucide-react';

export const BackupSection: React.FC = () => {
  const { backupData, restoreData, resetToDefault } = useCms();
  const [restoreJson, setRestoreJson] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleDownloadBackup = () => {
    const jsonStr = backupData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `namami_cms_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setStatusMessage({ text: 'CMS Backup file downloaded successfully!', type: 'success' });
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const handleRestore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!restoreJson.trim()) return;

    const ok = restoreData(restoreJson);
    if (ok) {
      setStatusMessage({ text: 'CMS Database restored successfully from backup!', type: 'success' });
      setRestoreJson('');
    } else {
      setStatusMessage({ text: 'Failed to restore. Invalid JSON structure.', type: 'error' });
    }
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const text = evt.target?.result as string;
        setRestoreJson(text);
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all CMS content to factory defaults? This cannot be undone.')) {
      resetToDefault();
      setStatusMessage({ text: 'CMS Content reset to factory defaults.', type: 'success' });
      setTimeout(() => setStatusMessage(null), 3000);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <Database className="w-5 h-5 text-amber-400" />
            Backup, Restore & Data Migration
          </h2>
          <p className="text-xs text-slate-400">
            Export a full snapshot of your website database or restore from a previous JSON backup.
          </p>
        </div>

        {statusMessage && (
          <div className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 ${
            statusMessage.type === 'success' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
          }`}>
            <Check className="w-4 h-4" /> {statusMessage.text}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Export Backup Card */}
        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">One-Click Backup Export</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Downloads a complete JSON snapshot containing all Hero settings, Services, Portfolio projects, Blogs, Testimonials, Inquiries, SEO, and Brand configurations.
            </p>
          </div>

          <button
            onClick={handleDownloadBackup}
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Complete JSON Backup</span>
          </button>
        </div>

        {/* Factory Reset Card */}
        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Factory Reset Content</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Resets all live CMS database items back to official initial production content.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-3 rounded-xl bg-rose-950/60 hover:bg-rose-900 border border-rose-500/30 text-rose-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Reset to Factory Defaults</span>
          </button>
        </div>
      </div>

      {/* Restore from Backup JSON */}
      <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Upload className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Restore Snapshot from JSON File</h3>
            <p className="text-xs text-slate-400">Upload a `.json` backup file or paste the JSON raw string below.</p>
          </div>
        </div>

        <form onSubmit={handleRestore} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Select Backup File</label>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="block w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-amber-300 hover:file:bg-slate-700 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Raw JSON Content</label>
            <textarea
              rows={5}
              value={restoreJson}
              onChange={(e) => setRestoreJson(e.target.value)}
              placeholder="Paste JSON backup string here..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-amber-200 font-mono focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={!restoreJson.trim()}
            className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg disabled:opacity-50 transition-colors cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            <span>Restore CMS Database</span>
          </button>
        </form>
      </div>
    </div>
  );
};
