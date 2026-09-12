import React from 'react';
import { CIFRAFLOW_LOGO_IMAGE } from '../data/avatars';

interface CifraFlowLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'vertical' | 'icon-only';
  theme?: 'dark' | 'light';
  subtitle?: string;
  showSubtitle?: boolean;
}

export const CifraFlowLogo: React.FC<CifraFlowLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  theme = 'dark',
  subtitle = 'PENSAMIENTO LÓGICO & MATEMÁTICO',
  showSubtitle = true
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl'
  };

  const subSizes = {
    sm: 'text-[8px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]',
    xl: 'text-sm tracking-[0.35em]'
  };

  if (variant === 'icon-only') {
    return (
      <div className={`relative flex items-center justify-center ${iconSizes[size]} ${className}`}>
        <img
          src={CIFRAFLOW_LOGO_IMAGE}
          alt="CifraFlow Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,243,255,0.4)]"
        />
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Infinity Circuit Graphic */}
        <div className={`relative mb-2 ${iconSizes[size]}`}>
          <img
            src={CIFRAFLOW_LOGO_IMAGE}
            alt="CifraFlow Infinito"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center">
          <div className={`font-black font-mono leading-none tracking-tight flex items-center gap-1.5 ${textSizes[size]}`}>
            <span className={theme === 'dark' ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : 'text-slate-900'}>
              CIFRA
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,243,255,0.6)]">
              FLOW
            </span>
          </div>

          {showSubtitle && (
            <span className={`font-mono font-bold mt-1 uppercase ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            } ${subSizes[size]}`}>
              {subtitle}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Horizontal layout (standard for navbar / headers)
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Infinity Icon */}
      <div className={`relative shrink-0 ${iconSizes[size]}`}>
        <img
          src={CIFRAFLOW_LOGO_IMAGE}
          alt="CifraFlow Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]"
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className={`font-black font-mono leading-none tracking-tight flex items-center gap-1 ${textSizes[size]}`}>
          <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
            CIFRA
          </span>
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]">
            FLOW
          </span>
        </div>

        {showSubtitle && (
          <span className={`font-mono font-semibold uppercase ${
            theme === 'dark' ? 'text-cyan-300/80' : 'text-slate-500'
          } ${subSizes[size]}`}>
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
