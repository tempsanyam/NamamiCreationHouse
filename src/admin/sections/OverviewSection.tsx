import React from 'react';
import { useCms } from '../../context/CmsContext';
import { 
  Users, Film, Clapperboard, FileText, MessageSquare, 
  TrendingUp, Sparkles, Eye, ArrowUpRight, CheckCircle2 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface OverviewSectionProps {
  onNavigate: (tab: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onNavigate }) => {
  const { services, portfolio, blogs, inquiries, testimonials } = useCms();

  const trafficData = [
    { day: 'Mon', visitors: 1240, views: 3400 },
    { day: 'Tue', visitors: 1850, views: 4200 },
    { day: 'Wed', visitors: 2100, views: 5600 },
    { day: 'Thu', visitors: 1980, views: 5100 },
    { day: 'Fri', visitors: 2650, views: 6800 },
    { day: 'Sat', visitors: 3100, views: 8200 },
    { day: 'Sun', visitors: 2900, views: 7600 },
  ];

  const categoryBreakdown = [
    { name: 'Cinematic', count: services.filter(s => s.category === 'cinematic').length + portfolio.filter(p => p.category === 'videos').length },
    { name: 'AI Studio', count: services.filter(s => s.category === 'ai_studio').length + portfolio.filter(p => p.category === 'ai_videos').length },
    { name: 'Spiritual', count: services.filter(s => s.category === 'spiritual').length },
    { name: 'Design', count: services.filter(s => s.category === 'design').length + portfolio.filter(p => p.category === 'graphics').length },
    { name: 'Production', count: services.filter(s => s.category === 'production').length }
  ];

  const recentInquiries = inquiries.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#102B3A] via-[#123245] to-[#0B1F2A] border border-[#D4AF37]/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider">
            Live System Status
          </span>
          <h2 className="text-2xl font-bold text-white font-serif mt-2">
            Welcome to Namami Creation House CMS
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            All updates saved here instantly sync to your live public website without touching any code.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('inquiries')}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Manage Inquiries ({inquiries.filter(i => i.status === 'new').length} New)</span>
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div 
          onClick={() => onNavigate('services')} 
          className="p-5 rounded-2xl bg-[#0B1F2A] border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Services</span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Clapperboard className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{services.length}</div>
          <p className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1 font-mono">
            <TrendingUp className="w-3 h-3" /> All published to live site
          </p>
        </div>

        <div 
          onClick={() => onNavigate('portfolio')} 
          className="p-5 rounded-2xl bg-[#0B1F2A] border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Portfolio Items</span>
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Film className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{portfolio.length}</div>
          <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1 font-mono">
            <Sparkles className="w-3 h-3 text-amber-400" /> Videos, AI, Graphic & Web
          </p>
        </div>

        <div 
          onClick={() => onNavigate('inquiries')} 
          className="p-5 rounded-2xl bg-[#0B1F2A] border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Inquiries</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{inquiries.length}</div>
          <p className="text-[11px] text-amber-300 mt-2 flex items-center gap-1 font-mono">
            <CheckCircle2 className="w-3 h-3" /> {inquiries.filter(i => i.status === 'new').length} Unread Leads
          </p>
        </div>

        <div 
          onClick={() => onNavigate('blog')} 
          className="p-5 rounded-2xl bg-[#0B1F2A] border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Blog Articles</span>
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{blogs.length}</div>
          <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1 font-mono">
            <Eye className="w-3 h-3 text-cyan-400" /> SEO Optimized Articles
          </p>
        </div>
      </div>

      {/* Analytics Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visitor Traffic Area Chart */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                Live Traffic Analytics
              </h3>
              <p className="text-xs text-slate-400">Weekly website visitors and page impressions</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              +28% Growth
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#07151E', borderColor: '#D4AF37', borderRadius: '12px', fontSize: '12px', color: '#fff' }} 
                />
                <Area type="monotone" dataKey="visitors" stroke="#D4AF37" strokeWidth={2} fillOpacity={1} fill="url(#colorVisitors)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Breakdown Bar Chart */}
        <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-1">Content Distribution</h3>
            <p className="text-xs text-slate-400 mb-4">Total projects and services by category</p>
            
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryBreakdown}>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={10} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#07151E', borderColor: '#38bdf8', borderRadius: '12px', fontSize: '12px' }} />
                  <Bar dataKey="count" fill="#38bdf8" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Testimonials: <strong className="text-white">{testimonials.length}</strong></span>
            <button 
              onClick={() => onNavigate('testimonials')}
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              View <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Recent Inquiries Quick Table */}
      <div className="p-6 rounded-3xl bg-[#0B1F2A] border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-white">Recent Client Inquiries</h3>
            <p className="text-xs text-slate-400">Direct contact form submissions from live visitors</p>
          </div>
          <button
            onClick={() => onNavigate('inquiries')}
            className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold"
          >
            View All ({inquiries.length}) <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4">Client Name</th>
                <th className="py-3 px-4">Phone / Email</th>
                <th className="py-3 px-4">Requested Service</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {recentInquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-white">{inq.name}</td>
                  <td className="py-3 px-4 text-slate-300 font-mono">
                    <div>{inq.phone}</div>
                    <div className="text-[10px] text-slate-400">{inq.email}</div>
                  </td>
                  <td className="py-3 px-4 text-amber-300">{inq.serviceCategory}</td>
                  <td className="py-3 px-4 text-slate-400 font-mono">{inq.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold font-mono uppercase ${
                      inq.status === 'new' 
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                        : inq.status === 'in_progress'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {inq.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => onNavigate('inquiries')}
                      className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] transition-colors"
                    >
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
