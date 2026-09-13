import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Check, ArrowRight, UserCheck, Zap, Award } from 'lucide-react';
import { CIFRA_AVATARS } from '../data/avatars';
import { CifraAvatarProfile, StudentProfile } from '../types';
import { cyberAudio } from '../utils/audio';
import { CifraFlowLogo, CifraFlowSpace } from './CifraFlowLogo';

interface CifraAvatarSelectionProps {
  student: StudentProfile;
  selectedAvatarId: string;
  onSelectAvatar: (avatarId: string) => void;
  onConfirmAvatar: () => void;
  onBackToLogin: () => void;
  onNavigateToSpace?: (space: CifraFlowSpace) => void;
}

export const CifraAvatarSelection: React.FC<CifraAvatarSelectionProps> = ({
  student,
  selectedAvatarId,
  onSelectAvatar,
  onConfirmAvatar,
  onBackToLogin,
  onNavigateToSpace
}) => {
  const currentAvatar = CIFRA_AVATARS.find((a) => a.id === selectedAvatarId) || CIFRA_AVATARS[0];

  const handleCardClick = (avatar: CifraAvatarProfile) => {
    onSelectAvatar(avatar.id);
    cyberAudio.narrateAvatarSelect(avatar.name);
  };

  return (
    <div
      id="cifra-avatar-selection-screen"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/90 backdrop-blur-2xl p-4 sm:p-6"
    >
      {/* Background Cyber Lights */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#00f3ff12_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      <div className="pointer-events-none absolute top-10 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-5xl rounded-3xl border border-cyan-500/40 bg-slate-900/90 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,243,255,0.25)] ring-1 ring-fuchsia-500/30"
      >
        {/* Header Bar with Student Identity and Logo */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-cyan-500/20 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <CifraFlowLogo
              size="md"
              variant="horizontal"
              showSubtitle={false}
              currentSpace="FASE_1_AVATAR"
              onClick={onBackToLogin}
              tooltipText="Clic para regresar a Inicio de Sesión (Logeo)"
              onNavigateToSpace={onNavigateToSpace}
              showSpaceMenu={true}
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-[10px] font-mono uppercase tracking-widest font-bold">
                  FASE 1: AVATARES ADOLESCENTES
                </span>
                <span className="text-xs text-slate-400 font-mono">| Estudiante: <strong className="text-slate-200">{student.fullName}</strong></span>
              </div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400">
                Selecciona tu Avatar Adolescente CifraFlow
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onBackToLogin}
            className="text-xs font-mono text-slate-400 hover:text-cyan-300 underline underline-offset-4 transition-colors cursor-pointer"
          >
            ← Cambiar Datos del Estudiante
          </button>
        </div>

        {/* 4 Avatars Grid (Ircar, Jorge, Iván, Carlos - No gender labels!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {CIFRA_AVATARS.map((avatar) => {
            const isSelected = avatar.id === selectedAvatarId;

            return (
              <motion.div
                key={avatar.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => handleCardClick(avatar)}
                id={`avatar-card-${avatar.id}`}
                className={`relative cursor-pointer rounded-2xl border p-4 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_25px_rgba(0,243,255,0.4)] ring-2 ring-cyan-400/50'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-600 hover:bg-slate-900/60'
                }`}
              >
                {/* Top Badge: Role */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider"
                    style={{
                      borderColor: `${avatar.colorTheme}60`,
                      backgroundColor: `${avatar.colorTheme}15`,
                      color: avatar.colorTheme
                    }}
                  >
                    {avatar.role}
                  </span>
                  {isSelected && (
                    <div className="flex items-center gap-1 text-[11px] font-bold text-cyan-300 bg-cyan-500/30 px-2 py-0.5 rounded-full border border-cyan-400">
                      <Check className="w-3 h-3" />
                      <span>ACTIVO</span>
                    </div>
                  )}
                </div>

                {/* Avatar Portrait */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 border border-slate-700/60 group">
                  <img
                    src={avatar.imageSrc}
                    alt={avatar.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2.5 right-2.5">
                    <h3 className="text-lg font-black text-white tracking-wide">{avatar.name}</h3>
                    <p className="text-[11px] text-slate-300 line-clamp-1">{avatar.specialty}</p>
                  </div>
                </div>

                {/* Stats & Motto */}
                <div className="space-y-2 mt-1">
                  <p className="text-[11px] text-slate-300 italic line-clamp-2">
                    "{avatar.motto}"
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1">
                    {avatar.stats.map((st, i) => (
                      <div key={i} className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400">{st.label}</span>
                        <div className="flex items-center gap-1">
                          <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${st.value}%`, backgroundColor: avatar.colorTheme }}
                            />
                          </div>
                          <span className="text-slate-200 font-bold">{st.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Confirmation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cyan-500/20 pt-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-cyan-400/60 shrink-0">
              <img
                src={currentAvatar.imageSrc}
                alt={currentAvatar.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-mono">Avatar Seleccionado:</p>
              <h4 className="text-sm font-bold text-cyan-300">{currentAvatar.name} — <span className="text-slate-200">{currentAvatar.specialty}</span></h4>
            </div>
          </div>

          <button
            id="confirm-avatar-btn"
            type="button"
            onClick={onConfirmAvatar}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-emerald-400 to-amber-400 text-slate-950 font-black uppercase tracking-wider text-sm hover:opacity-95 shadow-[0_0_25px_rgba(0,243,255,0.4)] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>CONFIRMAR AVATAR Y CONTINUAR A MÓDULOS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
