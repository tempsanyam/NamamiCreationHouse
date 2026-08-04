import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { ShieldCheck, Lock, Mail, ArrowRight, Sparkles, KeyRound } from 'lucide-react';
import { motion } from 'motion/react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const { login } = useCms();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [resetMessage, setResetMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        onLoginSuccess();
      } else {
        setError('Invalid admin credentials. Please check email or password.');
        setIsLoading(false);
      }
    }, 600);
  };

  const handleForgotPass = (e: React.FormEvent) => {
    e.preventDefault();
    setResetMessage(`Password reset link sent to ${email}. Check your inbox!`);
    setTimeout(() => {
      setForgotModalOpen(false);
      setResetMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full bg-[#050E14] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#0B1F2A]/90 border border-[#D4AF37]/30 rounded-3xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl relative z-10"
      >
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#123245] border border-[#D4AF37]/40 shadow-inner mb-4">
            <ShieldCheck className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-serif">
            Namami CMS Admin
          </h1>
          <p className="text-xs text-amber-300 font-mono tracking-wider uppercase mt-1">
            Secure Studio Portal
          </p>
        </div>

        {/* Form Error */}
        {error && (
          <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center font-medium">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#07151E] border border-slate-700/60 focus:border-amber-400 text-sm text-white focus:outline-none transition-colors"
                placeholder="admin@namamicreationhouse.com"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Password
              </label>
              <button
                type="button"
                onClick={() => setForgotModalOpen(true)}
                className="text-xs text-amber-400 hover:underline"
              >
                Forgot?
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#07151E] border border-slate-700/60 focus:border-amber-400 text-sm text-white focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded bg-[#07151E] border-slate-700 text-amber-500 focus:ring-amber-400 focus:ring-offset-0"
              />
              <span>Remember session</span>
            </label>
            <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
              <Sparkles className="w-3 h-3" /> 256-bit JWT
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#07151E] font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {isLoading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Enter Admin Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Default Credential Notice */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-[11px] text-slate-400 font-mono">
            Default Credentials: <span className="text-amber-300 font-semibold">admin@namamicreationhouse.com</span> / <span className="text-amber-300 font-semibold">admin123</span>
          </p>
        </div>
      </motion.div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-sm bg-[#0B1F2A] border border-[#D4AF37]/40 rounded-2xl p-6 relative">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-amber-400" />
              Reset Password
            </h3>
            <p className="text-xs text-slate-300 mb-4">
              Enter your admin email address to receive password recovery instructions.
            </p>
            {resetMessage ? (
              <div className="p-3 bg-emerald-500/20 text-emerald-300 text-xs rounded-xl mb-4 text-center">
                {resetMessage}
              </div>
            ) : (
              <form onSubmit={handleForgotPass} className="space-y-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07151E] border border-slate-700 text-sm text-white focus:outline-none"
                  placeholder="admin@namamicreationhouse.com"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setForgotModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
