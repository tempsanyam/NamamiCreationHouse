import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { Inquiry } from '../../types';
import { MessageSquare, Download, Trash2, CheckCircle2, Clock, AlertCircle, Phone, Mail, ExternalLink, Search } from 'lucide-react';

export const InquiriesSection: React.FC = () => {
  const { inquiries, updateInquiryStatus, deleteInquiry, brandConfig } = useCms();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const filtered = inquiries.filter(i => {
    const matchesSearch = i.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          i.phone.includes(searchTerm) || 
                          i.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          i.serviceCategory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || i.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Phone', 'Email', 'Service', 'Budget', 'Timeline', 'Date', 'Status', 'Message'];
    const rows = inquiries.map(i => [
      i.id,
      `"${i.name}"`,
      `"${i.phone}"`,
      `"${i.email}"`,
      `"${i.serviceCategory}"`,
      `"${i.budgetRange || ''}"`,
      `"${i.timeline || ''}"`,
      `"${i.date}"`,
      i.status,
      `"${i.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `namami_inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getWhatsAppReplyLink = (inquiry: Inquiry) => {
    const cleanedPhone = inquiry.phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`Hello ${inquiry.name}! Thank you for reaching out to Namami Creation House regarding "${inquiry.serviceCategory}". We reviewed your inquiry and would love to discuss the details with you!`);
    return `https://wa.me/${cleanedPhone}?text=${message}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-amber-400" />
            Inquiries & Client Leads ({inquiries.length})
          </h2>
          <p className="text-xs text-slate-400">
            Real contact submissions from website visitors with direct WhatsApp quick response links.
          </p>
        </div>

        <button
          onClick={exportToCSV}
          className="px-4 py-2.5 rounded-xl bg-[#123245] border border-[#D4AF37]/30 hover:bg-[#102B3A] text-amber-300 font-semibold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-lg self-start sm:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B1F2A] border border-slate-800">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search name, phone, or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
          />
        </div>

        <div className="flex items-center gap-2">
          {['all', 'new', 'in_progress', 'completed'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-colors cursor-pointer ${
                statusFilter === st 
                  ? 'bg-amber-500 text-black' 
                  : 'bg-[#07151E] text-slate-300 hover:bg-slate-800'
              }`}
            >
              {st.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Table & Details Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inquiries Table */}
        <div className="lg:col-span-2 p-4 rounded-3xl bg-[#0B1F2A] border border-slate-800 overflow-x-auto shadow-xl">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
                <th className="py-3 px-3">Lead Info</th>
                <th className="py-3 px-3">Service</th>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filtered.map((item) => (
                <tr 
                  key={item.id} 
                  onClick={() => setSelectedInquiry(item)}
                  className={`hover:bg-slate-800/60 transition-colors cursor-pointer ${
                    selectedInquiry?.id === item.id ? 'bg-amber-500/10 border-l-2 border-amber-400' : ''
                  }`}
                >
                  <td className="py-3 px-3">
                    <div className="font-bold text-white text-sm">{item.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{item.phone}</div>
                  </td>
                  <td className="py-3 px-3 font-semibold text-amber-300">{item.serviceCategory}</td>
                  <td className="py-3 px-3 text-slate-400 font-mono">{item.date}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono uppercase ${
                      item.status === 'new' 
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                        : item.status === 'in_progress'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {item.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Delete inquiry from "${item.name}"?`)) {
                          deleteInquiry(item.id);
                          if (selectedInquiry?.id === item.id) setSelectedInquiry(null);
                        }
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 text-rose-400"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selected Lead Inspector */}
        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 shadow-xl space-y-4">
          {selectedInquiry ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="font-bold text-white text-base font-serif">{selectedInquiry.name}</h3>
                <span className="text-xs text-slate-400 font-mono">{selectedInquiry.date}</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono font-bold text-amber-300">{selectedInquiry.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{selectedInquiry.email}</span>
                </div>
              </div>

              <div className="p-3 bg-[#07151E] rounded-2xl border border-slate-800 space-y-1 text-xs">
                <div className="text-slate-400 uppercase font-mono text-[10px]">Requested Service</div>
                <div className="font-bold text-white">{selectedInquiry.serviceCategory}</div>
                {selectedInquiry.budgetRange && (
                  <div className="text-amber-300 font-mono text-[11px] mt-1">Budget: {selectedInquiry.budgetRange}</div>
                )}
              </div>

              <div>
                <div className="text-slate-400 uppercase font-mono text-[10px] mb-1">Inquiry Message</div>
                <p className="text-xs text-slate-200 bg-[#07151E] p-3 rounded-2xl border border-slate-800 leading-relaxed">
                  "{selectedInquiry.message}"
                </p>
              </div>

              {/* Status Selector */}
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Update Lead Status</label>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) => updateInquiryStatus(selectedInquiry.id, e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-[#07151E] border border-slate-700 text-xs text-white focus:outline-none"
                >
                  <option value="new">New Lead</option>
                  <option value="in_progress">In Progress / Contacted</option>
                  <option value="completed">Completed / Closed</option>
                </select>
              </div>

              {/* Direct Reply Button */}
              <a
                href={getWhatsAppReplyLink(selectedInquiry)}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <span>Reply via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-center text-slate-500">
              <MessageSquare className="w-10 h-10 mb-2 opacity-30" />
              <p className="text-xs font-mono">Select an inquiry from the left table to inspect details & reply directly via WhatsApp.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
