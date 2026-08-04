import React from 'react';
import { PROCESS_STEPS } from '../data/mockData';
import { Sparkles, ArrowRight, MessageSquare, PhoneCall, FileText, Receipt, ShieldCheck, Cpu, CheckCircle2, Download } from 'lucide-react';

export const WorkingProcess: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare': return MessageSquare;
      case 'PhoneCall': return PhoneCall;
      case 'FileText': return FileText;
      case 'Receipt': return Receipt;
      case 'ShieldCheck': return ShieldCheck;
      case 'Cpu': return Cpu;
      case 'CheckCircle2': return CheckCircle2;
      case 'Download': return Download;
      default: return Sparkles;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#0B1F2A] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B3A] border border-[#D4AF37]/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Structured Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Our 9-Step <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-yellow-400">Working Process</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From initial inquiry to 4K master delivery and post-launch support, we ensure a seamless, transparent experience.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => {
            const Icon = getIcon(step.iconName);
            return (
              <div
                key={step.step}
                className="rounded-3xl p-6 bg-[#102B3A]/80 border border-[#D4AF37]/20 hover:border-amber-400/60 transition-all duration-300 group flex flex-col justify-between shadow-lg relative backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-amber-400 text-[#0B1F2A] font-mono font-bold text-xs flex items-center justify-center shadow-md">
                      0{step.step}
                    </span>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      ⏱ {step.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#16384A] flex items-center gap-2 text-amber-400 text-xs font-semibold">
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>Phase 0{step.step} Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
