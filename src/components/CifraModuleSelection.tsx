import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calculator, Brain, Binary, Cpu, Play, CheckCircle, Award, Sparkles, ChevronRight, User } from 'lucide-react';
import { CIFRA_MODULES } from '../data/avatars';
import { EducationalModule, StudentProfile } from '../types';
import { cyberAudio } from '../utils/audio';

interface CifraModuleSelectionProps {
  student: StudentProfile;
  selectedAvatarId: string;
  avatarName: string;
  completedChallengeIds: number[];
  moduleProgress: Record<string, number>; // moduleId -> completed count
  totalBalance: number;
  onSelectModule: (moduleId: string, targetChallengeId?: number) => void;
  onStartAllChallenges: () => void;
  onChangeAvatar: () => void;
}

export const CifraModuleSelection: React.FC<CifraModuleSelectionProps> = ({
  student,
  selectedAvatarId,
  avatarName,
  completedChallengeIds,
  moduleProgress,
  totalBalance,
  onSelectModule,
  onStartAllChallenges,
  onChangeAvatar
}) => {
  const getModuleIcon = (iconName: string, isEmprendimiento: boolean) => {
    const className = `w-6 h-6 ${isEmprendimiento ? 'text-emerald-300' : 'text-cyan-300'}`;
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className={className} />;
      case 'Calculator':
      case 'CreditCard':
        return <Calculator className={className} />;
      case 'Brain':
      case 'Rocket':
        return <Brain className={className} />;
      case 'Binary':
      case 'TrendingUp':
        return <Binary className={className} />;
      case 'Cpu':
      case 'ShieldCheck':
        return <Cpu className={className} />;
      default:
        return <Award className={className} />;
    }
  };

  const handleModuleClick = (mod: EducationalModule) => {
    cyberAudio.narrateModuleSelect(mod.title);
    onSelectModule(mod.id);
  };

  const handleLevelClick = (mod: EducationalModule, levelName: string, targetChallengeId: number) => {
    cyberAudio.playClick(920);
    cyberAudio.speak(`Módulo ${mod.title}, Nivel ${levelName}. Reto número ${targetChallengeId}.`);
    onSelectModule(mod.id, targetChallengeId);
  };

  const totalCompleted = completedChallengeIds.length;
  const overallPercent = Math.min(100, Math.round((totalCompleted / 75) * 100));

  return (
    <div
      id="cifra-module-selection-screen"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/92 backdrop-blur-2xl p-4 sm:p-6"
    >
      {/* Dynamic Background Grids */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#00f3ff10_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      <div className="pointer-events-none absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-6xl rounded-3xl border border-cyan-500/40 bg-slate-900/95 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,243,255,0.25)] ring-1 ring-fuchsia-500/30"
      >
        {/* Top Header: Student Identity & Overall Balance */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-cyan-500/20 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-[10px] font-mono uppercase tracking-widest font-bold">
                FASE 2: MÓDULOS DE ENTRENAMIENTO
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Estudiante: <strong className="text-slate-200">{student.fullName}</strong> ({student.nationalId})
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Institución: <strong className="text-slate-200">{student.schoolName}</strong>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-emerald-400">
              Ecosistema CifraFlow: 75 Desafíos Tácticos
            </h2>
            <p className="text-xs text-slate-300 mt-0.5 font-sans">
              Selecciona el módulo educativo para iniciar tu entrenamiento guiado por <strong>{avatarName}</strong>.
            </p>
          </div>

          {/* Balance & Progress Box */}
          <div className="flex items-center gap-3 bg-slate-950/80 border border-cyan-500/40 rounded-2xl p-3 shrink-0">
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase text-slate-400 block">Balance Acumulado</span>
              <span
                id="module-selection-balance"
                className={`text-xl font-black font-mono ${
                  totalBalance >= 0 ? 'text-cyan-300' : 'text-rose-400'
                }`}
              >
                {totalBalance.toLocaleString()} pts
              </span>
            </div>
            <div className="h-9 w-px bg-slate-800" />
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase text-slate-400 block">Progreso Global</span>
              <span className="text-sm font-bold font-mono text-emerald-400">
                {totalCompleted} / 75 ({overallPercent}%)
              </span>
            </div>
            <button
              onClick={onChangeAvatar}
              className="ml-2 px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-[11px] font-mono text-cyan-300 transition-colors"
            >
              Cambiar Avatar
            </button>
          </div>
        </div>

        {/* 3 Complexity Tiers Header Overview */}
        <div className="mb-6 p-3.5 rounded-2xl bg-slate-950/80 border border-cyan-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Estructura por Módulo: 15 Retos divididos en 3 Niveles (5 por Nivel)
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <strong>Principiante:</strong> Retos 1-5
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <strong>Intermedio:</strong> Retos 6-10
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-fuchsia-500/15 border border-fuchsia-400/40 text-fuchsia-300 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
                <strong>Experto:</strong> Retos 11-15
              </span>
            </div>
          </div>
        </div>

        {/* 5 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6">
          {CIFRA_MODULES.map((mod) => {
            const completedCount = moduleProgress[mod.id] || 0;
            const isCompleted = completedCount >= mod.totalChallenges;
            const isEmprendimiento = mod.isEmprendimiento === true;

            // Complexity tier calculation: 5 challenges per tier
            const baseId = (mod.order - 1) * 15;
            const principianteIds = [baseId + 1, baseId + 2, baseId + 3, baseId + 4, baseId + 5];
            const intermedioIds = [baseId + 6, baseId + 7, baseId + 8, baseId + 9, baseId + 10];
            const expertoIds = [baseId + 11, baseId + 12, baseId + 13, baseId + 14, baseId + 15];

            const donePrincipiante = principianteIds.filter((id) => completedChallengeIds.includes(id)).length;
            const doneIntermedio = intermedioIds.filter((id) => completedChallengeIds.includes(id)).length;
            const doneExperto = expertoIds.filter((id) => completedChallengeIds.includes(id)).length;

            return (
              <motion.div
                key={mod.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                id={`module-card-${mod.id}`}
                className={`relative rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                  isEmprendimiento
                    ? 'border-emerald-400/70 bg-emerald-950/30 hover:border-emerald-300 hover:bg-emerald-950/45 shadow-[0_0_30px_rgba(52,211,153,0.25)] ring-1 ring-emerald-400/40'
                    : 'border-slate-800 bg-slate-950/70 hover:border-cyan-500/50 hover:bg-slate-900/80'
                }`}
              >
                {/* Emprendimiento Special Glow Banner */}
                {isEmprendimiento && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-bl-xl font-mono shadow-sm">
                    ★ DESTACADO EN ESMERALDA ★
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`p-2 rounded-xl border ${
                          isEmprendimiento
                            ? 'bg-emerald-500/20 border-emerald-400/50'
                            : 'bg-cyan-500/15 border-cyan-400/40'
                        }`}
                      >
                        {getModuleIcon(mod.icon, isEmprendimiento)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 block">
                          MÓDULO {mod.order}
                        </span>
                        <h3
                          className={`text-base font-black tracking-wide ${
                            isEmprendimiento ? 'text-emerald-300' : 'text-slate-100'
                          }`}
                        >
                          {mod.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 mb-3 leading-relaxed font-sans">
                    {mod.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1 mb-3 border-t border-slate-800/80 pt-2.5">
                    {mod.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300 font-sans">
                        <span className={`text-[10px] mt-0.5 ${isEmprendimiento ? 'text-emerald-400' : 'text-cyan-400'}`}>▸</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* 3 Complexity Tiers Selector (5 Retos cada uno) */}
                  <div className="pt-2.5 border-t border-slate-800/80 mb-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                        3 Niveles (5 Retos c/u):
                      </span>
                      <span className="text-[10px] font-mono text-cyan-300">
                        Selecciona nivel directo
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5">
                      {/* Principiante (1-5) */}
                      <button
                        type="button"
                        id={`btn-tier-principiante-${mod.id}`}
                        onClick={() => handleLevelClick(mod, 'Principiante', baseId + 1)}
                        className="p-1.5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/60 text-left transition-all cursor-pointer group/tier"
                        title={`Ir a Nivel Principiante: Retos ${baseId + 1} al ${baseId + 5}`}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[10px] font-mono font-bold text-emerald-300">
                            {donePrincipiante}/5
                          </span>
                        </div>
                        <div className="text-[10px] font-bold text-emerald-200 uppercase truncate">
                          Principiante
                        </div>
                        <div className="text-[9px] font-mono text-emerald-400/80 truncate">
                          Retos 1-5
                        </div>
                      </button>

                      {/* Intermedio (6-10) */}
                      <button
                        type="button"
                        id={`btn-tier-intermedio-${mod.id}`}
                        onClick={() => handleLevelClick(mod, 'Intermedio', baseId + 6)}
                        className="p-1.5 rounded-xl border border-amber-500/40 bg-amber-950/40 hover:bg-amber-900/60 text-left transition-all cursor-pointer group/tier"
                        title={`Ir a Nivel Intermedio: Retos ${baseId + 6} al ${baseId + 10}`}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span className="text-[10px] font-mono font-bold text-amber-300">
                            {doneIntermedio}/5
                          </span>
                        </div>
                        <div className="text-[10px] font-bold text-amber-200 uppercase truncate">
                          Intermedio
                        </div>
                        <div className="text-[9px] font-mono text-amber-400/80 truncate">
                          Retos 6-10
                        </div>
                      </button>

                      {/* Experto (11-15) */}
                      <button
                        type="button"
                        id={`btn-tier-experto-${mod.id}`}
                        onClick={() => handleLevelClick(mod, 'Experto', baseId + 11)}
                        className="p-1.5 rounded-xl border border-fuchsia-500/40 bg-fuchsia-950/40 hover:bg-fuchsia-900/60 text-left transition-all cursor-pointer group/tier"
                        title={`Ir a Nivel Experto: Retos ${baseId + 11} al ${baseId + 15}`}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                          <span className="text-[10px] font-mono font-bold text-fuchsia-300">
                            {doneExperto}/5
                          </span>
                        </div>
                        <div className="text-[10px] font-bold text-fuchsia-200 uppercase truncate">
                          Experto
                        </div>
                        <div className="text-[9px] font-mono text-fuchsia-400/80 truncate">
                          Retos 11-15
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Progress Bar and Start Button */}
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-400">Total Completado:</span>
                    <span className={`font-bold ${isEmprendimiento ? 'text-emerald-300' : 'text-cyan-300'}`}>
                      {completedCount} / {mod.totalChallenges}
                    </span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden mb-3 border border-slate-800">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min(100, (completedCount / mod.totalChallenges) * 100)}%`,
                        backgroundColor: isEmprendimiento ? '#34d399' : mod.badgeColor
                      }}
                    />
                  </div>

                  <button
                    id={`start-module-btn-${mod.id}`}
                    type="button"
                    onClick={() => handleModuleClick(mod)}
                    className={`w-full py-2.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isEmprendimiento
                        ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.4)]'
                        : 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 border border-cyan-400/40'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>MÓDULO COMPLETADO (REPASAR)</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>{completedCount > 0 ? 'CONTINUAR MÓDULO' : 'INICIAR MÓDULO COMPLETO'}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Tile: Quick Launch All Modules */}
          <div className="relative rounded-2xl border border-dashed border-cyan-500/40 bg-gradient-to-br from-cyan-950/30 via-slate-950/70 to-fuchsia-950/30 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
                <h3 className="text-base font-black text-amber-300 uppercase tracking-wide">
                  Desafío Global CifraFlow
                </h3>
              </div>
              <p className="text-xs text-slate-300 mb-3 leading-relaxed font-sans">
                ¿Listo para el reto completo? Ejecuta los 75 desafíos en secuencia continua a través del mapa cósmico 3D.
              </p>
              <div className="text-[11px] font-mono text-cyan-300 space-y-1">
                <div>✓ 75 Desafíos de Inferencia y Deducción</div>
                <div>✓ Puntuación real con penalización negativa</div>
                <div>✓ Sistema de Deducción Formal y Rigor Matemático</div>
                <div>✓ Certificación Oficial al completar</div>
              </div>
            </div>

            <button
              id="start-all-challenges-btn"
              type="button"
              onClick={onStartAllChallenges}
              className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-fuchsia-500 to-cyan-400 text-slate-950 font-black font-mono text-xs uppercase tracking-wider hover:opacity-95 shadow-[0_0_20px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>INICIAR SIMULACIÓN TOTAL (RETO 1 A 75)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
