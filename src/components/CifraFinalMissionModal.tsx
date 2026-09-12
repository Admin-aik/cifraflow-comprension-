import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Award, Sparkles, CheckCircle, RotateCcw, Printer, Share2, Shield, Star } from 'lucide-react';
import { StudentProfile } from '../types';
import { cyberAudio } from '../utils/audio';
import { CifraFlowLogo } from './CifraFlowLogo';

interface CifraFinalMissionModalProps {
  student: StudentProfile;
  avatarName: string;
  avatarImage: string;
  totalScore: number;
  totalCompletedChallenges: number;
  onRestartAll: () => void;
  onClose: () => void;
}

export const CifraFinalMissionModal: React.FC<CifraFinalMissionModalProps> = ({
  student,
  avatarName,
  avatarImage,
  totalScore,
  totalCompletedChallenges,
  onRestartAll,
  onClose
}) => {
  useEffect(() => {
    cyberAudio.narrateMissionAccomplished(totalScore);
    try {
      const duration = 3.5 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    } catch {
      // Confetti fallback
    }
  }, [totalScore]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cifra-final-mission-modal"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/95 backdrop-blur-2xl p-4 sm:p-6"
    >
      {/* Background Radiance */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fbbf2415_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      <div className="pointer-events-none absolute top-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative w-full max-w-3xl rounded-3xl border-2 border-amber-400/60 bg-slate-900/95 p-6 sm:p-10 shadow-[0_0_70px_rgba(251,191,36,0.3)] ring-1 ring-cyan-400/40 text-center font-sans"
      >
        {/* Top Trophy Banner and Official Logo */}
        <div className="flex flex-col items-center mb-4">
          <CifraFlowLogo size="md" variant="horizontal" className="mb-3" />
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-1 flex items-center justify-center shadow-[0_0_35px_rgba(251,191,36,0.5)]">
            <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center">
              <Award className="w-8 h-8 text-amber-400 animate-bounce" />
            </div>
          </div>
        </div>

        <span className="px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-mono uppercase tracking-widest font-bold inline-block mb-2">
          FASE 5: MATRIZ DE 75 RETOS COMPLETADA AL 100%
        </span>

        <h1 className="text-xl sm:text-3xl font-black font-mono uppercase tracking-wider text-white mb-2">
          GAME OVER • FIN DE ESTE RETO
        </h1>
        <h2 className="text-lg sm:text-2xl font-black font-mono uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-cyan-300 mb-2">
          ¡TODOS LOS RETOS SUMADOS COMPLETOS!
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
          Has superado con éxito la totalidad de los 75 desafíos de <strong>CifraFlow Lógico-Matemático</strong> con tu avatar adolescente. A continuación se presenta la suma total acumulada y tu certificación oficial.
        </p>

        {/* Certificate Card Content */}
        <div className="rounded-2xl border border-amber-500/40 bg-slate-950/80 p-5 sm:p-6 mb-6 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-slate-800 pb-4 mb-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400/80 shrink-0">
              <img
                src={avatarImage}
                alt={avatarName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                TITULAR CERTIFICADO:
              </span>
              <h3 className="text-xl font-black text-slate-100">{student.fullName}</h3>
              <p className="text-xs text-slate-300 font-mono">
                Cédula: <strong className="text-cyan-300">{student.nationalId}</strong> | Plantel: <strong className="text-slate-200">{student.schoolName}</strong>
              </p>
            </div>
            <div className="text-center sm:text-right">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">RÉCORD FINAL:</span>
              <span className="text-2xl font-black font-mono text-amber-400">{totalScore.toLocaleString()} pts</span>
            </div>
          </div>

          {/* Module Competencies Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>1. Comprensión Lectora & Inferencia Crítica</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
              <span>2. Pensamiento Aritmético & Proporciones</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-300 font-bold">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>3. Lógica Deductiva & Silogismos</span>
            </div>
            <div className="flex items-center gap-2 text-amber-300">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>4. Patrones Numéricos & Combinatoria</span>
            </div>
            <div className="flex items-center gap-2 text-fuchsia-300 sm:col-span-2">
              <CheckCircle className="w-4 h-4 text-fuchsia-400 shrink-0" />
              <span>5. Problemas Lógicos Complejos & Dirichlet</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            id="print-certificate-btn"
            type="button"
            onClick={handlePrint}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-cyan-300" />
            <span>Imprimir Diploma</span>
          </button>

          <button
            id="restart-cycle-btn"
            type="button"
            onClick={onRestartAll}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 font-black font-mono text-xs uppercase tracking-wider hover:opacity-95 shadow-[0_0_20px_rgba(251,191,36,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>INICIAR NUEVO CICLO CIFRAFLOW</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
