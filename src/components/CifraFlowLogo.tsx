import React, { useState, useRef, useEffect } from 'react';
import { LogIn, Users, BookOpen, Rocket, ChevronDown } from 'lucide-react';
import { CIFRAFLOW_LOGO_IMAGE } from '../data/avatars';
import { cyberAudio } from '../utils/audio';

export type CifraFlowSpace = 'FASE_0_LOGIN' | 'FASE_1_AVATAR' | 'FASE_2_MODULE_SELECT' | 'FASE_3_SIMULATION';

export interface CifraFlowLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'vertical' | 'icon-only';
  theme?: 'dark' | 'light';
  subtitle?: string;
  showSubtitle?: boolean;
  // Interactive navigation
  onClick?: () => void;
  interactive?: boolean;
  tooltipText?: string;
  currentSpace?: CifraFlowSpace;
  onNavigateToSpace?: (space: CifraFlowSpace) => void;
  showSpaceMenu?: boolean;
}

export const CifraFlowLogo: React.FC<CifraFlowLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  theme = 'dark',
  subtitle = 'PENSAMIENTO LÓGICO & MATEMÁTICO',
  showSubtitle = true,
  onClick,
  interactive = true,
  tooltipText,
  currentSpace,
  onNavigateToSpace,
  showSpaceMenu = true
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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

  const handleLogoClick = (e: React.MouseEvent) => {
    if (!interactive && !onClick) return;
    e.stopPropagation();
    cyberAudio.playClick(800);

    if (onClick) {
      onClick();
    } else if (onNavigateToSpace) {
      // Default: if in avatar -> login, otherwise -> avatar
      if (currentSpace === 'FASE_1_AVATAR') {
        onNavigateToSpace('FASE_0_LOGIN');
      } else {
        onNavigateToSpace('FASE_1_AVATAR');
      }
    }
  };

  const handleSelectSpace = (space: CifraFlowSpace, label: string) => {
    cyberAudio.playClick(900);
    cyberAudio.speak(`Navegando a ${label}`);
    setIsMenuOpen(false);
    if (onNavigateToSpace) {
      onNavigateToSpace(space);
    }
  };

  // Determine appropriate default tooltip based on current space
  const derivedTooltip = tooltipText || (
    currentSpace === 'FASE_1_AVATAR'
      ? 'Clic para regresar al Inicio de Sesión (Logeo)'
      : 'Clic para regresar a la Portada de Avatares'
  );

  const spacesList: { id: CifraFlowSpace; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'FASE_0_LOGIN',
      label: 'Inicio de Sesión / Registro',
      desc: 'Pantalla de acceso y credenciales estudiantiles',
      icon: <LogIn className="w-4 h-4 text-cyan-400" />
    },
    {
      id: 'FASE_1_AVATAR',
      label: 'Portada de Avatares',
      desc: 'Selección de avatar (Ircar, Jorge, Iván, Carlos)',
      icon: <Users className="w-4 h-4 text-fuchsia-400" />
    },
    {
      id: 'FASE_2_MODULE_SELECT',
      label: 'Módulos de Entrenamiento',
      desc: '75 retos en 5 módulos y 3 niveles progresivos',
      icon: <BookOpen className="w-4 h-4 text-emerald-400" />
    },
    {
      id: 'FASE_3_SIMULATION',
      label: 'Cyber-Space 3D',
      desc: 'Estación orbital y simulación interactiva',
      icon: <Rocket className="w-4 h-4 text-amber-400" />
    }
  ];

  // Visual logo core
  const renderLogoCore = () => {
    if (variant === 'icon-only') {
      return (
        <div className={`relative flex items-center justify-center ${iconSizes[size]} transition-transform duration-200 group-hover:scale-105`}>
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
        <div className="flex flex-col items-center text-center">
          <div className={`relative mb-2 ${iconSizes[size]} transition-transform duration-200 group-hover:scale-105`}>
            <img
              src={CIFRAFLOW_LOGO_IMAGE}
              alt="CifraFlow Infinito"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]"
            />
          </div>

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

    // Default Horizontal
    return (
      <div className="flex items-center gap-2.5">
        <div className={`relative shrink-0 ${iconSizes[size]} transition-transform duration-200 group-hover:scale-105`}>
          <img
            src={CIFRAFLOW_LOGO_IMAGE}
            alt="CifraFlow Logo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]"
          />
        </div>

        <div className="flex flex-col text-left">
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

  const isClickable = interactive && (Boolean(onClick) || Boolean(onNavigateToSpace));

  return (
    <div ref={menuRef} className={`relative inline-flex items-center gap-1.5 ${className}`}>
      {/* Main Clickable Logo Button */}
      <button
        type="button"
        onClick={handleLogoClick}
        disabled={!isClickable}
        title={isClickable ? derivedTooltip : undefined}
        className={`group relative text-left rounded-xl transition-all duration-200 ${
          isClickable
            ? 'cursor-pointer hover:opacity-95 p-1 -m-1 rounded-2xl hover:bg-slate-800/40 hover:ring-1 hover:ring-cyan-400/40'
            : 'cursor-default'
        }`}
      >
        {renderLogoCore()}

        {/* Hover return indicator badge */}
        {isClickable && (
          <span className="sr-only">{derivedTooltip}</span>
        )}
      </button>

      {/* Optional Space Menu Trigger Button */}
      {showSpaceMenu && onNavigateToSpace && (
        <div className="relative inline-block">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              cyberAudio.playClick(600);
              setIsMenuOpen((prev) => !prev);
            }}
            title="Abrir menú de navegación rápida de espacios"
            className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-400 transition-all cursor-pointer shadow-sm"
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Quick Space Navigation Popover */}
          {isMenuOpen && (
            <div
              className="absolute left-0 top-full mt-2 w-72 rounded-2xl bg-slate-950/95 border border-cyan-500/40 p-2 shadow-[0_0_40px_rgba(0,243,255,0.3)] z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 font-sans"
            >
              <div className="px-3 py-2 border-b border-cyan-500/20 mb-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block">
                  Navegación Rápida CifraFlow
                </span>
                <span className="text-[11px] text-slate-300">
                  Regresa o cambia a cualquiera de los espacios:
                </span>
              </div>

              <div className="space-y-1">
                {spacesList.map((space) => {
                  const isActive = currentSpace === space.id;
                  return (
                    <button
                      key={space.id}
                      type="button"
                      onClick={() => handleSelectSpace(space.id, space.label)}
                      className={`w-full flex items-start gap-2.5 p-2 rounded-xl text-left transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-cyan-950/70 border border-cyan-400/50 text-white'
                          : 'hover:bg-slate-900 text-slate-300 hover:text-white border border-transparent'
                      }`}
                    >
                      <div className="mt-0.5 p-1 rounded-lg bg-slate-900 border border-slate-700 shrink-0">
                        {space.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold truncate">
                            {space.label}
                          </span>
                          {isActive && (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                              Actual
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400 truncate font-sans">
                          {space.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
