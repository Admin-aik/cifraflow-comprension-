import React, { useState } from 'react';
import { Sparkles, TrendingUp, DollarSign, Award, Volume2, VolumeX, BookOpen, Layers, User, Calculator, ArrowRightLeft } from 'lucide-react';
import { CIFRA_AVATARS } from '../data/avatars';
import { StudentProfile } from '../types';
import { cyberAudio } from '../utils/audio';
import { CifraFlowLogo } from './CifraFlowLogo';

interface FinancialHUDProps {
  student: StudentProfile | null;
  selectedAvatarId: string;
  totalBalance: number;
  completedChallengesCount: number;
  activeModuleTitle: string;
  activeChallengeIndex: number;
  totalModuleChallenges: number;
  bcvRate?: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenLedger: () => void;
  onOpenGlossary: () => void;
  onOpenModules: () => void;
  onChangeAvatar: () => void;
}

export const FinancialHUD: React.FC<FinancialHUDProps> = ({
  student,
  selectedAvatarId,
  totalBalance,
  completedChallengesCount,
  activeModuleTitle,
  activeChallengeIndex,
  totalModuleChallenges,
  soundEnabled,
  onToggleSound,
  onOpenLedger,
  onOpenGlossary,
  onOpenModules,
  onChangeAvatar
}) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcInput, setCalcInput] = useState('24 * 5 + 10');
  const [calcResult, setCalcResult] = useState<string>('130');

  const currentAvatar = CIFRA_AVATARS.find((a) => a.id === selectedAvatarId) || CIFRA_AVATARS[0];

  const evaluateMath = (expr: string) => {
    setCalcInput(expr);
    try {
      // Safe sanitized arithmetic evaluation
      const sanitized = expr.replace(/[^0-9+\-*/(). ]/g, '');
      if (!sanitized) {
        setCalcResult('-');
        return;
      }
      // eslint-disable-next-line no-new-func
      const res = Function(`'use strict'; return (${sanitized})`)();
      if (typeof res === 'number' && !isNaN(res)) {
        setCalcResult(Number(res.toFixed(4)).toString());
      } else {
        setCalcResult('Error');
      }
    } catch {
      setCalcResult('...');
    }
  };

  return (
    <div
      id="cifra-financial-hud-container"
      className="absolute top-4 left-4 z-30 w-[350px] max-w-[calc(100vw-2rem)] font-sans"
    >
      {/* Main Glassmorphic Container with Electric Cyan & Fuchsia Border Glow */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-950/85 backdrop-blur-xl border border-cyan-500/40 p-4 shadow-[0_0_30px_rgba(0,243,255,0.25)] ring-1 ring-fuchsia-500/30">
        {/* Subtle Cyber Grid Texture Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#00f3ff18_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

        {/* Top Header: Avatar, Student Info, Logo, Sound & Actions */}
        <div className="relative flex items-center justify-between gap-2 border-b border-cyan-500/20 pb-3">
          <div className="flex items-center gap-2.5">
            <div
              onClick={onChangeAvatar}
              title="Cambiar Avatar Adolescente"
              className="relative h-12 w-12 shrink-0 rounded-2xl border-2 border-cyan-400/70 p-0.5 shadow-[0_0_15px_rgba(0,243,255,0.4)] overflow-hidden bg-black/60 cursor-pointer hover:border-fuchsia-400 transition-colors"
            >
              <img
                src={currentAvatar.imageSrc}
                alt={currentAvatar.name}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-black" />
            </div>

            <div>
              <CifraFlowLogo size="sm" variant="horizontal" showSubtitle={false} />
              <p className="text-[10px] font-mono text-cyan-400/90 flex items-center gap-1 mt-0.5">
                <span>Avatar: <strong className="text-fuchsia-300">{currentAvatar.name}</strong></span>
                <span className="text-slate-400 font-normal">(15-16 años)</span>
              </p>
              {student && (
                <p className="text-[10px] font-mono text-slate-300 truncate max-w-[150px]">
                  {student.fullName}
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              id="hud-modules-btn"
              onClick={onOpenModules}
              title="Seleccionar Módulo"
              className="p-1.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:text-cyan-100 hover:border-cyan-400 hover:bg-cyan-500/20 transition-colors cursor-pointer"
            >
              <Layers className="w-4 h-4" />
            </button>

            <button
              id="hud-glossary-btn"
              onClick={onOpenGlossary}
              title="Compendio de Lógica"
              className="p-1.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:text-cyan-100 hover:border-cyan-400 hover:bg-cyan-500/20 transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
            </button>

            <button
              id="hud-sound-toggle-btn"
              onClick={onToggleSound}
              title={soundEnabled ? 'Silenciar Narración' : 'Activar Narración'}
              className="p-1.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:text-cyan-100 hover:border-cyan-400 hover:bg-cyan-500/20 transition-colors cursor-pointer"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>
          </div>
        </div>

        {/* Quick Calculator & Arithmetic Scratchpad */}
        <div className="mt-3 p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase text-cyan-300 block">
                CALCULADORA DE APOYO RÁPIDO
              </span>
              <span className="text-xs font-black font-mono text-cyan-100">
                Scratchpad Aritmético & Lógico
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowCalculator(!showCalculator)}
            className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-[10px] font-mono text-cyan-300 flex items-center gap-1 border border-cyan-500/40 transition-colors cursor-pointer"
          >
            <ArrowRightLeft className="w-3 h-3" />
            <span>{showCalculator ? 'Ocultar' : 'Abrir'}</span>
          </button>
        </div>

        {/* Scratchpad Dropdown */}
        {showCalculator && (
          <div className="mt-2 p-2.5 rounded-xl bg-slate-900/95 border border-cyan-500/40 text-xs font-mono space-y-2">
            <div className="flex items-center justify-between text-slate-300 text-[11px]">
              <span>Expresión de Cálculo:</span>
              <span className="text-cyan-300 font-bold">= {calcResult}</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={calcInput}
                onChange={(e) => evaluateMath(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded bg-slate-950 border border-slate-700 text-slate-100 text-xs font-mono"
                placeholder="Ej. 120 * 0.15 + 40"
              />
            </div>
            <div className="flex gap-1.5 flex-wrap text-[10px] text-slate-400">
              <span className="text-slate-500">Atajos:</span>
              <button
                type="button"
                onClick={() => evaluateMath('120 * 0.20')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300"
              >
                20% de 120
              </button>
              <button
                type="button"
                onClick={() => evaluateMath('48 / 4')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300"
              >
                48/4
              </button>
              <button
                type="button"
                onClick={() => evaluateMath('15 * 14 / 2')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300"
              >
                C(15,2)
              </button>
            </div>
          </div>
        )}

        {/* Cognitive Balance Score */}
        <div className="mt-3 p-3 rounded-2xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-400 block">
              Puntuación Cognitiva
            </span>
            <div
              id="hud-balance-display"
              className={`text-2xl font-black font-mono tracking-tight flex items-baseline gap-1 ${
                totalBalance >= 0
                  ? 'text-cyan-300 drop-shadow-[0_0_10px_rgba(0,243,255,0.4)]'
                  : 'text-rose-400 drop-shadow-[0_0_12px_rgba(239,68,68,0.6)] animate-pulse'
              }`}
            >
              <span>{totalBalance.toLocaleString()}</span>
              <span className="text-xs font-normal text-slate-400">pts</span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">
              Retos Resueltos
            </span>
            <span className="text-sm font-bold font-mono text-emerald-400">
              {completedChallengesCount} / 75
            </span>
          </div>
        </div>

        {/* Active Module & Challenge Indicator */}
        <div className="mt-3 pt-2.5 border-t border-cyan-500/20">
          <div className="flex items-center justify-between text-[11px] font-mono mb-1">
            <span className="font-bold truncate max-w-[200px] text-cyan-300">
              {activeModuleTitle}
            </span>
            <span className="text-slate-400 font-bold shrink-0">
              Reto {activeChallengeIndex} de {totalModuleChallenges}
            </span>
          </div>

          {/* Module Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
            <div
              className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-cyan-400 to-emerald-400"
              style={{
                width: `${Math.min(100, (activeChallengeIndex / totalModuleChallenges) * 100)}%`
              }}
            />
          </div>
        </div>

        {/* Bottom Ledger trigger */}
        <button
          id="hud-open-ledger-btn"
          onClick={onOpenLedger}
          className="mt-3 w-full py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Abrir Bitácora de Desempeño Lógico</span>
        </button>
      </div>
    </div>
  );
};
