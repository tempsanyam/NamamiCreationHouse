import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showTagline = false, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
    xl: 'h-24'
  };

  return (
    <div className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}>
      {/* 3D Metallic Gold SVG Icon Mark matching poster */}
      <div className={`relative ${sizeClasses[size]} aspect-square flex items-center justify-center shrink-0`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-yellow-400/40 to-amber-200/20 rounded-full blur-md group-hover:scale-125 transition-transform duration-500" />
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(234,179,8,0.4)]"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A1" />
              <stop offset="35%" stopColor="#EAB308" />
              <stop offset="70%" stopColor="#CA8A04" />
              <stop offset="100%" stopColor="#854D0E" />
            </linearGradient>
            <linearGradient id="goldLight" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#A16207" />
            </linearGradient>
          </defs>

          {/* Background circle outline */}
          <circle cx="50" cy="50" r="46" stroke="url(#goldGradient)" strokeWidth="1.5" opacity="0.4" />
          <circle cx="50" cy="50" r="41" stroke="url(#goldGradient)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

          {/* Interwoven Arch Lines forming X with Arrow on top right */}
          {/* Arch 1: Left bottom to top right with arrow */}
          <path
            d="M 22 75 C 28 45, 52 35, 72 24"
            stroke="url(#goldGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 28 77 C 34 50, 56 41, 72 30"
            stroke="url(#goldLight)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Arrow Head on top right */}
          <path
            d="M 64 22 L 78 20 L 74 34"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Arch 2: Right bottom to top left */}
          <path
            d="M 78 75 C 72 45, 48 35, 28 24"
            stroke="url(#goldGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 72 77 C 66 50, 44 41, 28 30"
            stroke="url(#goldLight)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Center Diamond accent */}
          <polygon points="50,45 54,50 50,55 46,50" fill="url(#goldGradient)" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1">
          <span className="font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-500 font-bold uppercase leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] text-base sm:text-lg">
            Namami
          </span>
          <span className="text-amber-400 font-sans text-xs tracking-widest font-semibold uppercase">
            Creation
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-amber-200/80 uppercase font-medium">
            House
          </span>
          <span className="inline-block w-1 h-1 rounded-full bg-amber-400/80 animate-ping" />
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-3 bg-gradient-to-r from-transparent to-amber-400/80" />
            <span className="text-[9px] font-sans text-amber-300/70 tracking-wider italic">
              From Spiritual To Cinematic
            </span>
            <span className="h-[1px] w-3 bg-gradient-to-l from-transparent to-amber-400/80" />
          </div>
        )}
      </div>
    </div>
  );
};
