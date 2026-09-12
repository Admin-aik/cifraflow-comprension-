import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Shield, Zap, ChevronRight, Volume2, VolumeX, Compass, Star, Award } from 'lucide-react';
import { AVATARS } from '../data/missions';
import { AvatarProfile, DifficultyLevel } from '../types';
import { cyberAudio } from '../utils/audio';

interface WelcomeScreenProps {
  selectedAvatarId: string;
  onSelectAvatar: (avatarId: string) => void;
  selectedDifficulty: DifficultyLevel;
  onSelectDifficulty: (difficulty: DifficultyLevel) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onStartGame: () => void;
}

interface DifficultyOption {
  id: DifficultyLevel;
  name: string;
  tag: string;
  badgeColor: string;
  borderGlow: string;
  textColor: string;
  bgGrad: string;
  description: string;
  ops: string;
  icon: typeof Shield;
  targetMissions: number;
}

const DIFFICULTIES: DifficultyOption[] = [
  {
    id: 'Básico',
    name: 'Nivel Básico',
    tag: 'Novato Cyber (Retos 1 - 35)',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    borderGlow: 'hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]',
    textColor: 'text-emerald-400',
    bgGrad: 'from-emerald-950/40 via-black/60 to-emerald-950/20',
    description: 'Comienza suave mi pana: sumas y restas directas de ventas, ahorros y cobres del día a día.',
    ops: 'Sumas (+) y Restas (-) directas ($10 a $300)',
    icon: Shield,
    targetMissions: 35
  },
  {
    id: 'Intermedio',
    name: 'Nivel Medio',
    tag: 'Estratega Hacker (Retos 36 - 70)',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    borderGlow: 'hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]',
    textColor: 'text-cyan-400',
    bgGrad: 'from-cyan-950/40 via-black/60 to-cyan-950/20',
    description: 'Sube el nivel: multiplicaciones de lotes comerciales, divisiones de reparto y márgenes al pelo.',
    ops: 'Multiplicaciones (×), Reparto (÷) y Márgenes Netos',
    icon: Zap,
    targetMissions: 35
  },
  {
    id: 'Avanzado',
    name: 'Nivel Avanzado',
    tag: 'Master Imperial (Retos 71 - 100)',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40',
    borderGlow: 'hover:border-fuchsia-400 group-hover:shadow-[0_0_20px_rgba(255,0,127,0.4)]',
    textColor: 'text-fuchsia-400',
    bgGrad: 'from-fuchsia-950/40 via-black/60 to-fuchsia-950/20',
    description: 'Finanzas galácticas de alto calibre: macro presupuestos, fondos de reserva y cálculo a millón.',
    ops: 'Operaciones combinadas de alta escala ($1,000 a $50,000)',
    icon: Award,
    targetMissions: 30
  }
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  selectedAvatarId,
  onSelectAvatar,
  selectedDifficulty,
  onSelectDifficulty,
  soundEnabled,
  onToggleSound,
  onStartGame
}) => {
  const currentAvatar = AVATARS.find((a) => a.id === selectedAvatarId) || AVATARS[0];

  const handleAvatarClick = (avatar: AvatarProfile) => {
    cyberAudio.narrateAvatarSelect(avatar.name);
    onSelectAvatar(avatar.id);
  };

  const handleDiffClick = (diff: DifficultyLevel) => {
    cyberAudio.narrateDifficultySelect(diff);
    onSelectDifficulty(diff);
  };

  const handleLaunch = () => {
    cyberAudio.narrateStartGame(currentAvatar.name, selectedDifficulty);
    onStartGame();
  };

  return (
    <div
      id="welcome-screen-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#04030f]/90 backdrop-blur-xl overflow-y-auto"
    >
      {/* Background Animated Neon Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-fuchsia-600/15 blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative w-full max-w-5xl my-auto bg-[#0a0720]/95 border border-cyan-500/40 rounded-2xl md:rounded-3xl shadow-[0_0_60px_rgba(0,243,255,0.25)] overflow-hidden flex flex-col"
      >
        {/* Top Header Bar */}
        <div className="relative px-6 py-5 md:px-8 md:py-6 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-fuchsia-950/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center shadow-[0_0_15px_rgba(0,243,255,0.6)]">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                  SISTEMA EDUCATIVO FINANCIERO 3D
                </span>
                <span className="text-[10px] font-mono text-fuchsia-400 bg-fuchsia-950/60 px-2 py-0.5 rounded border border-fuchsia-500/30">
                  ARITMÉTICA & APRENDIZAJE
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300">
                CYBER FINANZAS 3D
              </h1>
            </div>
          </div>

          {/* Sound Toggle */}
          <button
            id="welcome-sound-toggle-btn"
            onClick={onToggleSound}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyan-500/30 bg-black/40 hover:bg-cyan-950/50 text-cyan-300 text-xs font-mono transition-all"
            title={soundEnabled ? 'Silenciar Efectos' : 'Activar Sonido'}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">AUDIO FX: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-zinc-500" />
                <span className="hidden sm:inline text-zinc-400">AUDIO FX: OFF</span>
              </>
            )}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
          {/* STEP 1: SELECT AVATAR */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold flex items-center justify-center">
                  1
                </span>
                <h2 className="text-sm md:text-base font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  Elige tu Avatar Cyber-Teen
                  <span className="text-xs font-normal text-cyan-400/80 font-mono">
                    (Estilo 3D Toon)
                  </span>
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                Seleccionado: <strong className="text-cyan-300">{currentAvatar.name}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {AVATARS.map((avatar) => {
                const isSelected = avatar.id === selectedAvatarId;
                return (
                  <motion.div
                    key={avatar.id}
                    id={`avatar-option-${avatar.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAvatarClick(avatar)}
                    className={`relative cursor-pointer rounded-2xl p-4 transition-all duration-200 border flex flex-col items-center text-center ${
                      isSelected
                        ? 'bg-gradient-to-b from-cyan-950/60 to-[#0d0a29] border-cyan-400 shadow-[0_0_25px_rgba(0,243,255,0.4)] ring-2 ring-cyan-400/50'
                        : 'bg-[#0a071f]/60 hover:bg-[#120e36]/70 border-zinc-800 hover:border-cyan-500/40 opacity-80 hover:opacity-100'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-cyan-400 text-black text-[10px] font-bold font-mono tracking-wider shadow-[0_0_8px_#00f3ff]">
                        ACTIVO
                      </div>
                    )}

                    {/* Avatar Portrait */}
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 mb-3 shadow-inner bg-black/40 flex-shrink-0"
                         style={{ borderColor: isSelected ? avatar.primaryColor : '#27272a' }}>
                      <img
                        src={avatar.imageSrc}
                        alt={avatar.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div
                        className="absolute bottom-1 right-1 w-3 h-3 rounded-full border-2 border-black"
                        style={{ backgroundColor: avatar.primaryColor }}
                      />
                    </div>

                    <div className="w-full">
                      <h3 className="font-bold text-base text-white tracking-wide">{avatar.name}</h3>
                      <p className="text-xs font-mono font-medium" style={{ color: avatar.primaryColor }}>
                        {avatar.title}
                      </p>
                      <p className="text-[11px] text-zinc-300/90 italic mt-2 line-clamp-2 bg-black/40 p-2 rounded-lg border border-zinc-800/80">
                        "{avatar.quote}"
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* STEP 2: SELECT COMPLEXITY / DIFFICULTY */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40 text-xs font-mono font-bold flex items-center justify-center">
                  2
                </span>
                <h2 className="text-sm md:text-base font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  Nivel de Complejidad Aritmética
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                Seleccionado: <strong className="text-fuchsia-300">{selectedDifficulty}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {DIFFICULTIES.map((diff) => {
                const isSelected = selectedDifficulty === diff.id;
                const IconComponent = diff.icon;
                return (
                  <motion.div
                    key={diff.id}
                    id={`diff-option-${diff.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDiffClick(diff.id)}
                    className={`group relative cursor-pointer rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? `bg-gradient-to-b ${diff.bgGrad} border-cyan-400 shadow-[0_0_25px_rgba(0,243,255,0.35)] ring-2 ring-cyan-400/40`
                        : 'bg-[#0a071f]/60 hover:bg-[#120e36]/70 border-zinc-800/90 hover:border-zinc-600 opacity-85 hover:opacity-100'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${diff.badgeColor}`}>
                          {diff.tag}
                        </span>
                        <IconComponent className={`w-5 h-5 ${diff.textColor}`} />
                      </div>

                      <h3 className="text-lg font-extrabold text-white tracking-wide mb-1">
                        {diff.name}
                      </h3>
                      <p className="text-xs text-zinc-300 mb-3 leading-relaxed">
                        {diff.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 space-y-1.5">
                      <div className="text-[11px] font-mono text-zinc-300 flex items-start gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{diff.ops}</span>
                      </div>
                      <div className="text-[10px] font-mono text-cyan-300/80">
                        • {diff.targetMissions} Misiones especializadas
                      </div>
                    </div>

                    {isSelected && (
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f3ff]" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Quick Summary Info Box */}
          <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Configuración de Partida
                </p>
                <p className="text-xs text-zinc-300">
                  Avatar: <span className="text-white font-bold">{currentAvatar.name}</span> • Dificultad: <span className="text-white font-bold">{selectedDifficulty}</span> • Fondo Semilla: <span className="text-emerald-400 font-bold">$1,770</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Aprende: Sumas (+ Ingresos) y Restas (- Gastos)</span>
            </div>
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="p-6 md:px-8 border-t border-cyan-500/20 bg-gradient-to-t from-black/80 to-transparent flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 font-mono text-center sm:text-left">
            Podrás cambiar de avatar o nivel en cualquier momento dentro de la aventura.
          </div>

          <motion.button
            id="start-cyber-game-btn"
            whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(0, 243, 255, 0.8)' }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLaunch}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-black font-black text-base uppercase tracking-wider shadow-[0_0_25px_rgba(0,243,255,0.5)] flex items-center justify-center gap-3 transition-all hover:brightness-110"
          >
            <span>INGRESAR AL CIBERESPACIO 3D</span>
            <ChevronRight className="w-5 h-5 text-black" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
