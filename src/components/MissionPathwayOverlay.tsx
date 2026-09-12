import React, { useEffect, useRef, useState } from 'react';
import { Eye, Sparkles, CheckCircle2, User, ChevronRight, Layers, ShieldCheck, Rocket, BookOpen, CreditCard, TrendingUp } from 'lucide-react';
import { ALL_CHALLENGES } from '../data/allChallenges';
import { CIFRA_AVATARS } from '../data/avatars';
import { CifraChallenge } from '../types';
import { cyberAudio } from '../utils/audio';

interface MissionPathwayOverlayProps {
  currentChallengeIndex: number;
  completedChallengeIds: number[];
  selectedAvatarId: string;
  cameraMode: 'orbital' | 'portal_focus' | 'cinematic';
  onSelectChallenge: (idx: number) => void;
  onOpenChallengeModal: () => void;
  onToggleAvatar: () => void;
  onToggleCameraMode: () => void;
  onOpenModuleSelect: () => void;
}

export const MissionPathwayOverlay: React.FC<MissionPathwayOverlayProps> = ({
  currentChallengeIndex,
  completedChallengeIds,
  selectedAvatarId,
  cameraMode,
  onSelectChallenge,
  onOpenChallengeModal,
  onToggleAvatar,
  onToggleCameraMode,
  onOpenModuleSelect
}) => {
  const currentAvatar = CIFRA_AVATARS.find((a) => a.id === selectedAvatarId) || CIFRA_AVATARS[0];
  const trackRef = useRef<HTMLDivElement>(null);

  const modulesNav = [
    { label: 'M1: Lectura (1-15)', startIdx: 0, color: 'cyan' },
    { label: 'M2: Aritmética (16-30)', startIdx: 15, color: 'sky' },
    { label: 'M3: Deducción (31-45)', startIdx: 30, color: 'emerald', isEmprendimiento: true },
    { label: 'M4: Patrones (46-60)', startIdx: 45, color: 'amber' },
    { label: 'M5: Retos Complejos (61-75)', startIdx: 60, color: 'fuchsia' }
  ];

  // Active module base index
  const activeModuleStartIdx = Math.floor(currentChallengeIndex / 15) * 15;
  const currentChallenge = ALL_CHALLENGES[currentChallengeIndex] || ALL_CHALLENGES[0];
  const activeComplexity = currentChallenge.complexity || 'Principiante';

  // Auto-scroll active station node into view
  useEffect(() => {
    const activeEl = document.getElementById(`pathway-station-node-${currentChallengeIndex + 1}`);
    if (activeEl && trackRef.current) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [currentChallengeIndex]);

  const handleModuleJump = (startIdx: number, label: string) => {
    cyberAudio.playClick(850);
    cyberAudio.speak(`Saltando a ${label}`);
    onSelectChallenge(startIdx);
  };

  const handleComplexityJump = (tierOffset: number, tierName: string) => {
    const targetIdx = activeModuleStartIdx + tierOffset;
    cyberAudio.playClick(900);
    cyberAudio.speak(`Nivel ${tierName}, reto número ${targetIdx + 1}`);
    onSelectChallenge(targetIdx);
  };

  const activeChallenge: CifraChallenge = ALL_CHALLENGES[currentChallengeIndex] || ALL_CHALLENGES[0];

  return (
    <div
      id="cifra-mission-pathway-dock"
      className="absolute bottom-3 left-0 right-0 px-3 z-30 flex flex-col items-center pointer-events-none font-sans"
    >
      <div className="w-full max-w-6xl flex flex-col gap-2">
        {/* Top micro-bar: 5 Module Shortcuts and Complexity Levels */}
        <div className="flex items-center justify-between pointer-events-auto px-1 gap-2 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar py-0.5">
            {modulesNav.map((mNav, idx) => {
              const isModuleActive =
                currentChallengeIndex >= mNav.startIdx && currentChallengeIndex < mNav.startIdx + 15;

              return (
                <button
                  key={idx}
                  id={`module-jump-btn-${idx}`}
                  onClick={() => handleModuleJump(mNav.startIdx, mNav.label)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold transition-all shrink-0 border cursor-pointer ${
                    mNav.isEmprendimiento
                      ? isModuleActive
                        ? 'bg-emerald-400 text-slate-950 border-emerald-300 shadow-[0_0_15px_#34d399]'
                        : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-900/60'
                      : isModuleActive
                      ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-[0_0_10px_#00f3ff]'
                      : 'bg-slate-950/80 text-cyan-300 border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-900'
                  }`}
                >
                  {mNav.label}
                </button>
              );
            })}
          </div>

          {/* Active Module 3-Tier Quick Filters */}
          <div className="flex items-center gap-1 bg-slate-950/85 backdrop-blur-md px-2 py-0.5 rounded-xl border border-slate-800 shrink-0">
            <button
              type="button"
              id="tier-jump-btn-principiante"
              onClick={() => handleComplexityJump(0, 'Principiante')}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all border cursor-pointer ${
                activeComplexity === 'Principiante'
                  ? 'bg-emerald-400 text-slate-950 border-emerald-300 shadow-[0_0_10px_#34d399]'
                  : 'bg-emerald-950/50 text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/60'
              }`}
              title="Ir a Nivel Principiante (Retos 1 a 5 de este módulo)"
            >
              🟢 Principiante (1-5)
            </button>
            <button
              type="button"
              id="tier-jump-btn-intermedio"
              onClick={() => handleComplexityJump(5, 'Intermedio')}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all border cursor-pointer ${
                activeComplexity === 'Intermedio'
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-[0_0_10px_#fbbf24]'
                  : 'bg-amber-950/50 text-amber-300 border-amber-500/30 hover:bg-amber-900/60'
              }`}
              title="Ir a Nivel Intermedio (Retos 6 a 10 de este módulo)"
            >
              🟡 Intermedio (6-10)
            </button>
            <button
              type="button"
              id="tier-jump-btn-experto"
              onClick={() => handleComplexityJump(10, 'Experto')}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold transition-all border cursor-pointer ${
                activeComplexity === 'Experto'
                  ? 'bg-fuchsia-400 text-slate-950 border-fuchsia-300 shadow-[0_0_10px_#e879f9]'
                  : 'bg-fuchsia-950/50 text-fuchsia-300 border-fuchsia-500/30 hover:bg-fuchsia-900/60'
              }`}
              title="Ir a Nivel Experto (Retos 11 a 15 de este módulo)"
            >
              🟣 Experto (11-15)
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded-xl border border-cyan-500/30 shrink-0">
            <span>RETO: <strong className="text-white">{currentChallengeIndex + 1}</strong> / 75</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">Completados: {completedChallengeIds.length}</span>
          </div>
        </div>

        {/* Main Bottom Controls & 75-Nodes Track */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
          {/* Left: Modules, Camera & Avatar Switcher */}
          <div className="pointer-events-auto flex items-center gap-2 bg-slate-950/90 backdrop-blur-xl border border-cyan-500/40 px-3 py-1.5 rounded-2xl shadow-[0_0_20px_rgba(0,243,255,0.2)] shrink-0">
            <button
              id="dock-modules-btn"
              onClick={onOpenModuleSelect}
              className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-all cursor-pointer"
              title="Selector de los 5 Módulos Educativos"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-bold hidden sm:inline">Módulos</span>
            </button>

            <button
              id="camera-mode-toggle-btn"
              onClick={() => {
                const nextMode =
                  cameraMode === 'orbital'
                    ? 'portal_focus'
                    : cameraMode === 'portal_focus'
                    ? 'cinematic'
                    : 'orbital';
                cyberAudio.narrateCameraToggle(nextMode);
                onToggleCameraMode();
              }}
              className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-all cursor-pointer"
              title="Cambiar perspectiva de cámara 3D"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span className="capitalize hidden sm:inline">{cameraMode.replace('_', ' ')}</span>
            </button>

            <button
              id="avatar-switch-btn"
              onClick={onToggleAvatar}
              className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-xl bg-slate-900 border border-fuchsia-500/40 text-fuchsia-300 hover:text-white hover:bg-fuchsia-500/20 transition-all cursor-pointer"
              title="Cambiar Avatar Cyber"
            >
              <User className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>{currentAvatar.name}</span>
            </button>
          </div>

          {/* Center/Right: Pathway Stations Track (75 Nodes) */}
          <div
            ref={trackRef}
            className="pointer-events-auto flex items-center gap-1.5 overflow-x-auto w-full bg-slate-950/90 backdrop-blur-xl border border-cyan-500/40 p-1.5 rounded-2xl shadow-[0_0_25px_rgba(0,243,255,0.25)] custom-scrollbar"
          >
            {ALL_CHALLENGES.map((challenge, idx) => {
              const isCurrent = idx === currentChallengeIndex;
              const isDone = completedChallengeIds.includes(challenge.id);
              const isDeduccion = challenge.moduleId === 'logica_deductiva';
              const complexity = challenge.complexity || (challenge.challengeIndexInModule <= 5 ? 'Principiante' : challenge.challengeIndexInModule <= 10 ? 'Intermedio' : 'Experto');

              const tierBorder =
                complexity === 'Principiante'
                  ? 'border-emerald-500/50'
                  : complexity === 'Intermedio'
                  ? 'border-amber-500/50'
                  : 'border-fuchsia-500/50';

              const tierText =
                complexity === 'Principiante'
                  ? 'text-emerald-300'
                  : complexity === 'Intermedio'
                  ? 'text-amber-300'
                  : 'text-fuchsia-300';

              return (
                <button
                  key={challenge.id}
                  id={`pathway-station-node-${challenge.id}`}
                  onClick={() => {
                    cyberAudio.narrateChallengeStart(
                      challenge.id,
                      challenge.title,
                      challenge.moduleTitle,
                      complexity
                    );
                    onSelectChallenge(idx);
                    onOpenChallengeModal();
                  }}
                  title={`Reto ${challenge.id} / 75 • Nivel ${complexity} (${challenge.indexInComplexity || ((challenge.challengeIndexInModule - 1) % 5 + 1)}/5): ${challenge.title}`}
                  className={`relative flex items-center justify-center min-w-8 w-8 h-8 rounded-xl font-mono text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isCurrent
                      ? isDeduccion
                        ? 'bg-emerald-400 text-slate-950 border-2 border-white shadow-[0_0_15px_#34d399] scale-110'
                        : 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 border-2 border-white shadow-[0_0_15px_#00f3ff] scale-110'
                      : isDone
                      ? 'bg-emerald-950/80 border border-emerald-400/60 text-emerald-300 hover:bg-emerald-900'
                      : `bg-slate-900/80 border ${tierBorder} ${tierText} hover:border-white hover:bg-slate-800`
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  ) : (
                    <span>{challenge.id}</span>
                  )}

                  {/* Tiny tier dot indicator on non-current nodes */}
                  {!isCurrent && !isDone && (
                    <span
                      className={`absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full ${
                        complexity === 'Principiante'
                          ? 'bg-emerald-400'
                          : complexity === 'Intermedio'
                          ? 'bg-amber-400'
                          : 'bg-fuchsia-400'
                      }`}
                    />
                  )}

                  {/* Active Indicator Pulse */}
                  {isCurrent && (
                    <span
                      className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-ping ${
                        isDeduccion ? 'bg-emerald-300' : 'bg-cyan-300'
                      }`}
                    />
                  )}
                </button>
              );
            })}

            {/* Action Button: Open Active Challenge */}
            <button
              id="dock-open-challenge-btn"
              onClick={onOpenChallengeModal}
              className={`ml-1 px-3 py-1.5 rounded-xl text-slate-950 text-xs font-mono font-bold flex items-center gap-1 shadow-md transition-all shrink-0 cursor-pointer ${
                activeChallenge.moduleId === 'logica_deductiva'
                  ? 'bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.5)]'
                  : 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-300 hover:to-fuchsia-300 shadow-[0_0_12px_rgba(0,243,255,0.4)]'
              }`}
            >
              <span>Reto #{activeChallenge.id}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
