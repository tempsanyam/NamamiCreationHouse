import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { AdminLogin } from './AdminLogin';

import { OverviewSection } from './sections/OverviewSection';
import { HeroEditorSection } from './sections/HeroEditorSection';
import { AboutEditorSection } from './sections/AboutEditorSection';
import { ServicesManagerSection } from './sections/ServicesManagerSection';
import { PortfolioManagerSection } from './sections/PortfolioManagerSection';
import { BlogCmsSection } from './sections/BlogCmsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { InquiriesSection } from './sections/InquiriesSection';
import { MediaLibrarySection } from './sections/MediaLibrarySection';
import { SeoSection } from './sections/SeoSection';
import { SettingsSection } from './sections/SettingsSection';
import { UsersSection } from './sections/UsersSection';
import { BackupSection } from './sections/BackupSection';

import { 
  LayoutDashboard, Sparkles, BookOpen, Clapperboard, Film, 
  FileText, MessageSquare, Image as ImageIcon, Globe, Settings, 
  Users, Database, LogOut, ExternalLink, Bell, Menu, X, ShieldCheck 
} from 'lucide-react';

export const AdminLayout: React.FC = () => {
  const { currentUser, logout, unreadInquiriesCount, brandConfig } = useCms();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  if (!currentUser) {
    return <AdminLogin onLoginSuccess={() => setActiveTab('overview')} />;
  }

  const navItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'hero_editor', label: 'Hero Section', icon: Sparkles },
    { id: 'about_editor', label: 'About Story', icon: BookOpen },
    { id: 'services', label: 'Services Manager', icon: Clapperboard },
    { id: 'portfolio', label: 'Portfolio Manager', icon: Film },
    { id: 'blog', label: 'Blog CMS', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'inquiries', label: 'Inquiries & Leads', icon: Bell, badge: unreadInquiriesCount },
    { id: 'media', label: 'Media Library', icon: ImageIcon },
    { id: 'seo', label: 'SEO Manager', icon: Globe },
    { id: 'settings', label: 'Site Settings', icon: Settings },
    { id: 'users', label: 'User Roles', icon: Users },
    { id: 'backup', label: 'Backup & Restore', icon: Database },
  ];

  const handleOpenSite = () => {
    window.open('/', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050E14] text-slate-100 font-sans flex flex-col md:flex-row antialiased">
      {/* Mobile Top Navigation Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#0B1F2A] border-b border-slate-800 z-40 sticky top-0">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-amber-400" />
          <span className="font-bold font-serif text-white text-sm">Namami CMS</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('inquiries')}
            className="p-2 rounded-xl bg-slate-800 text-amber-400 relative"
          >
            <Bell className="w-4 h-4" />
            {unreadInquiriesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-black text-[9px] font-bold flex items-center justify-center">
                {unreadInquiriesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-xl bg-slate-800 text-slate-300"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:sticky top-0 left-0 z-30 h-screen w-64 bg-[#0B1F2A] border-r border-slate-800/80 p-5 flex flex-col justify-between transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="space-y-6">
          {/* Brand Header */}
          <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-white text-sm font-serif leading-tight">Namami Studio</h1>
              <p className="text-[10px] text-amber-400 font-mono tracking-wider uppercase">CMS Panel</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer
                    ${isActive 
                      ? 'bg-gradient-to-r from-amber-500/20 to-amber-500/5 text-amber-300 border border-amber-500/30' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && item.badge > 0 ? (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500 text-black font-bold text-[10px]">
                      {item.badge}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Footer */}
        <div className="pt-4 border-t border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img src={currentUser.avatar} alt={currentUser.name} className="w-8 h-8 rounded-full object-cover border border-amber-500/40" />
              <div>
                <div className="text-xs font-bold text-white leading-tight">{currentUser.name}</div>
                <div className="text-[10px] text-slate-400 font-mono">{currentUser.role}</div>
              </div>
            </div>

            <button
              onClick={logout}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between pb-6 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white font-serif capitalize">
              {navItems.find(n => n.id === activeTab)?.label || 'Dashboard'}
            </h2>
            <p className="text-xs text-slate-400">
              Editing live content for <span className="text-amber-300 font-semibold">{brandConfig.name}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications Dropdown Toggle */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2.5 rounded-xl bg-[#0B1F2A] border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 transition-colors relative cursor-pointer"
              >
                <Bell className="w-4 h-4" />
                {unreadInquiriesCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-black text-[9px] font-bold flex items-center justify-center">
                    {unreadInquiriesCount}
                  </span>
                )}
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-[#0B1F2A] border border-[#D4AF37]/30 rounded-2xl shadow-2xl p-4 z-50 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                    <span className="font-bold text-white">Notifications</span>
                    <span className="text-amber-400 font-mono text-[10px]">{unreadInquiriesCount} New Leads</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {unreadInquiriesCount > 0 
                      ? `You have ${unreadInquiriesCount} unread client form inquiries waiting in your leads tab.`
                      : "No new unread inquiries at the moment."
                    }
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab('inquiries');
                      setNotificationsOpen(false);
                    }}
                    className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs"
                  >
                    View Inquiries
                  </button>
                </div>
              )}
            </div>

            {/* View Live Website Button */}
            <button
              onClick={handleOpenSite}
              className="px-4 py-2.5 rounded-xl bg-[#123245] border border-[#D4AF37]/40 hover:bg-[#102B3A] text-amber-300 font-semibold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-lg"
            >
              <span>View Public Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* Dynamic Section Content Switcher */}
        {activeTab === 'overview' && <OverviewSection onNavigate={(tab) => setActiveTab(tab)} />}
        {activeTab === 'hero_editor' && <HeroEditorSection />}
        {activeTab === 'about_editor' && <AboutEditorSection />}
        {activeTab === 'services' && <ServicesManagerSection />}
        {activeTab === 'portfolio' && <PortfolioManagerSection />}
        {activeTab === 'blog' && <BlogCmsSection />}
        {activeTab === 'testimonials' && <TestimonialsSection />}
        {activeTab === 'inquiries' && <InquiriesSection />}
        {activeTab === 'media' && <MediaLibrarySection />}
        {activeTab === 'seo' && <SeoSection />}
        {activeTab === 'settings' && <SettingsSection />}
        {activeTab === 'users' && <UsersSection />}
        {activeTab === 'backup' && <BackupSection />}
      </main>
    </div>
  );
};
