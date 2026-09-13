import React from 'react';
import { motion } from 'motion/react';
import { AlertOctagon, RotateCcw, BookOpen, Layers, ShieldAlert } from 'lucide-react';
import { cyberAudio } from '../utils/audio';
import { CifraFlowLogo, CifraFlowSpace } from './CifraFlowLogo';

interface CifraGameOverModalProps {
  finalBalance: number;
  onRestartWithSeedCapital: () => void;
  onReturnToModules: () => void;
  onOpenGlossary: () => void;
  onLogoClick?: () => void;
  onNavigateToSpace?: (space: CifraFlowSpace) => void;
}

export const CifraGameOverModal: React.FC<CifraGameOverModalProps> = ({
  finalBalance,
  onRestartWithSeedCapital,
  onReturnToModules,
  onOpenGlossary,
  onLogoClick,
  onNavigateToSpace
}) => {
  return (
    <div
      id="cifra-game-over-modal"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/95 backdrop-blur-2xl p-4 sm:p-6"
    >
      {/* Red Alert Cyber Grids */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ef444415_1px,transparent_1px)] [background-size:20px_20px] opacity-70" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-lg rounded-3xl border-2 border-rose-500/70 bg-slate-900/95 p-6 sm:p-8 shadow-[0_0_60px_rgba(239,68,68,0.35)] ring-1 ring-rose-500/40 text-center font-sans"
      >
        {/* Top Logo Navigation */}
        <div className="flex justify-center mb-4">
          <CifraFlowLogo
            size="sm"
            variant="horizontal"
            showSubtitle={false}
            currentSpace="FASE_3_SIMULATION"
            onClick={onLogoClick}
            tooltipText="Clic para regresar a la Portada de Avatares"
            onNavigateToSpace={onNavigateToSpace}
            showSpaceMenu={true}
          />
        </div>

        {/* Top Warning Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-rose-500/20 border-2 border-rose-400 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(239,68,68,0.5)]">
          <AlertOctagon className="w-8 h-8 text-rose-400" />
        </div>

        <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/50 text-rose-300 text-xs font-mono uppercase tracking-widest font-bold inline-block mb-2">
          FASE 4: ALERTA ROJA — ENERGÍA COGNITIVA AGOTADA
        </span>

        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-rose-400 mb-2">
          ¡DÉFICIT LÓGICO ACUMULADO!
        </h2>

        <div className="my-3 p-3 rounded-xl bg-slate-950/80 border border-rose-500/40 inline-block font-mono">
          <span className="text-xs text-slate-400 uppercase block">Puntos al momento del colapso:</span>
          <span className="text-2xl font-black text-rose-400">{finalBalance.toLocaleString()} pts</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Las penalizaciones por deducciones erróneas consecutivas han agotado tu reserva de razonamiento táctico. En las ciencias, el cálculo aritmético y la argumentación formal, los errores de inferencia, las premisas falsas y las falacias invalidan el rigor del proceso.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            id="gameover-restart-btn"
            type="button"
            onClick={() => {
              cyberAudio.playPortalOpen();
              onRestartWithSeedCapital();
            }}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 font-black font-mono text-xs uppercase tracking-wider hover:opacity-95 shadow-[0_0_25px_rgba(52,211,153,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>REINICIAR CON ENERGÍA COGNITIVA (500 PTS)</span>
          </button>

          <button
            id="gameover-modules-btn"
            type="button"
            onClick={onReturnToModules}
            className="w-full py-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Layers className="w-4 h-4 text-cyan-300" />
            <span>SELECCIONAR OTRO MÓDULO</span>
          </button>

          <button
            id="gameover-glossary-btn"
            type="button"
            onClick={onOpenGlossary}
            className="w-full py-2.5 rounded-xl text-slate-400 hover:text-cyan-300 font-mono text-xs underline underline-offset-4 cursor-pointer transition-colors"
          >
            Repasar Compendio de Lógica & Matemáticas
          </button>
        </div>
      </motion.div>
    </div>
  );
};
