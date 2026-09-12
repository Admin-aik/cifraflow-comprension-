import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, CheckCircle, AlertTriangle, ArrowRight, BookOpen, RotateCcw, HelpCircle } from 'lucide-react';
import { CifraChallenge, CifraOption } from '../types';
import { cyberAudio } from '../utils/audio';
import { CifraFlowLogo } from './CifraFlowLogo';

interface CifraChallengeModalProps {
  challenge: CifraChallenge;
  currentBalance: number;
  onAnswerResolved: (pointsDelta: number, isCorrect: boolean) => void;
  onNextChallenge: () => void;
  onClose: () => void;
  onOpenGlossary: () => void;
}

export const CifraChallengeModal: React.FC<CifraChallengeModalProps> = ({
  challenge,
  currentBalance,
  onAnswerResolved,
  onNextChallenge,
  onClose,
  onOpenGlossary
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [lastFeedback, setLastFeedback] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [lastPointsDelta, setLastPointsDelta] = useState<number>(0);
  const [accumulatedSum, setAccumulatedSum] = useState<number>(currentBalance);
  const [autoAdvanceSeconds, setAutoAdvanceSeconds] = useState<number>(4);

  const isDeduccion = challenge.moduleId === 'logica_deductiva';
  const isLastChallenge = challenge.id >= 75;

  const complexity = challenge.complexity || (challenge.challengeIndexInModule <= 5 ? 'Principiante' : challenge.challengeIndexInModule <= 10 ? 'Intermedio' : 'Experto');
  const indexInTier = challenge.indexInComplexity || ((challenge.challengeIndexInModule - 1) % 5 + 1); // 1 to 5
  const isTierLast = indexInTier === 5;

  const tierMeta = {
    Principiante: {
      badge: 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.3)]',
      dotActive: 'bg-emerald-400 text-slate-950 ring-2 ring-white',
      dotPast: 'bg-emerald-950 border border-emerald-400/80 text-emerald-300',
      dotInactive: 'bg-slate-800 text-slate-500 border border-slate-700',
      label: 'PRINCIPIANTE',
      range: 'Retos 1 al 5'
    },
    Intermedio: {
      badge: 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.3)]',
      dotActive: 'bg-amber-400 text-slate-950 ring-2 ring-white',
      dotPast: 'bg-amber-950 border border-amber-400/80 text-amber-300',
      dotInactive: 'bg-slate-800 text-slate-500 border border-slate-700',
      label: 'INTERMEDIO',
      range: 'Retos 6 al 10'
    },
    Experto: {
      badge: 'bg-fuchsia-500/20 border-fuchsia-400 text-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.3)]',
      dotActive: 'bg-fuchsia-400 text-slate-950 ring-2 ring-white',
      dotPast: 'bg-fuchsia-950 border border-fuchsia-400/80 text-fuchsia-300',
      dotInactive: 'bg-slate-800 text-slate-500 border border-slate-700',
      label: 'EXPERTO',
      range: 'Retos 11 al 15'
    }
  }[complexity];

  // Reset selection and feedback whenever the challenge changes
  useEffect(() => {
    setSelectedOptionId(null);
    setHasSubmitted(false);
    setLastFeedback('');
    setIsSuccess(false);
    setLastPointsDelta(0);
    setAutoAdvanceSeconds(4);
  }, [challenge.id]);

  // Options are pre-alternated across challenges so the correct answer rotates across A, B, C, D.
  // We keep displayOptions memoized per challenge so positions remain stable during retries.
  const displayOptions = useMemo(() => {
    return [...challenge.options];
  }, [challenge.id, challenge.options]);

  const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

  // Auto-advance countdown when challenge is successfully completed
  useEffect(() => {
    if (!isSuccess) return;

    const interval = setInterval(() => {
      setAutoAdvanceSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onNextChallenge();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSuccess, onNextChallenge]);

  const handleSelectOption = (option: CifraOption) => {
    setSelectedOptionId(option.id);
    cyberAudio.playClick(820);
  };

  const handleValidate = () => {
    if (selectedOptionId === null) return;
    const chosen = displayOptions.find((o) => o.id === selectedOptionId);
    if (!chosen) return;

    setHasSubmitted(true);
    setLastFeedback(chosen.feedback_immediate);
    setLastPointsDelta(chosen.points_delta);

    if (chosen.is_correct) {
      setIsSuccess(true);
      const newTotal = currentBalance + chosen.points_delta;
      setAccumulatedSum(newTotal);

      // Trigger user requested narration: "game over fin de este reto vamos al siguiente"
      cyberAudio.narrateChallengeCompleted(challenge.id, isLastChallenge, chosen.points_delta, newTotal);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }

      onAnswerResolved(chosen.points_delta, true);
    } else {
      setIsSuccess(false);
      // Negative points penalty - strictly DO NOT reveal the correct answer!
      cyberAudio.narrateCifraFlowWrong(chosen.points_delta);
      onAnswerResolved(chosen.points_delta, false);
    }
  };

  const handleRetryAfterError = () => {
    // Reset selection so the user can re-read and try another option
    setSelectedOptionId(null);
    setHasSubmitted(false);
    cyberAudio.playClick(750);
  };

  return (
    <div
      id="cifra-challenge-modal-backdrop"
      className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto bg-slate-950/85 backdrop-blur-md p-4 sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl rounded-3xl border border-cyan-500/40 bg-slate-900/95 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,243,255,0.25)] ring-1 ring-fuchsia-500/30 font-sans"
      >
        {/* Top Badges & Logo Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-cyan-500/20 pb-3.5 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <CifraFlowLogo size="sm" variant="horizontal" showSubtitle={false} />
            <span
              className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
                isDeduccion
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                  : 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
              }`}
            >
              {challenge.moduleTitle}
            </span>

            {/* 3 Complexity Tiers Badge */}
            <span
              className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 uppercase ${tierMeta.badge}`}
            >
              <span className="w-2 h-2 rounded-full animate-pulse bg-current" />
              <span>Nivel {tierMeta.label} ({indexInTier}/5)</span>
            </span>

            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              Reto {challenge.challengeIndexInModule} de 15 (# {challenge.id}/75)
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* 5-Step Complexity Level Indicator */}
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase mr-1">Progreso Nivel:</span>
              {[1, 2, 3, 4, 5].map((step) => {
                const isCurrent = step === indexInTier;
                const isPast = step < indexInTier;
                return (
                  <div
                    key={step}
                    className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                      isCurrent
                        ? `${tierMeta.dotActive} shadow-sm scale-110`
                        : isPast
                        ? tierMeta.dotPast
                        : tierMeta.dotInactive
                    }`}
                    title={`Reto ${step} de 5 del Nivel ${tierMeta.label}`}
                  >
                    {isPast ? '✓' : step}
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={onOpenGlossary}
              className="flex items-center gap-1 text-xs font-mono text-cyan-300 hover:text-cyan-100 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Guía</span>
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-black text-slate-100 tracking-wide mb-3">
          {challenge.title}
        </h2>

        {/* Source Text / Case Study (Glassmorphic Box) */}
        <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 mb-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1.5">
            CASO TÁCTICO & TEXTO FUENTE:
          </span>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
            {challenge.source_text}
          </p>
        </div>

        {/* Question */}
        <div className="mb-4">
          <p className="text-sm sm:text-base font-bold text-cyan-300 flex items-start gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <span>{challenge.question}</span>
          </p>
        </div>

        {/* 4 Multiple Choice Options */}
        <div className="space-y-2.5 mb-5">
          {challenge.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                id={`challenge-option-${opt.id}`}
                disabled={hasSubmitted && isSuccess}
                onClick={() => handleSelectOption(opt)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start justify-between gap-3 font-sans cursor-pointer ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/60 shadow-[0_0_15px_rgba(0,243,255,0.3)] ring-1 ring-cyan-400'
                    : 'border-slate-800 bg-slate-950/50 hover:border-slate-600 hover:bg-slate-900/50 text-slate-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-cyan-400 text-slate-950'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {String.fromCharCode(65 + opt.id)}
                  </span>
                  <span className="text-xs sm:text-sm leading-snug">{opt.text}</span>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0">
                  {opt.is_correct ? `+${opt.points_delta} pts` : `${opt.points_delta} pts`}
                </span>
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        <AnimatePresence>
          {hasSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className={`rounded-2xl border p-4 mb-5 ${
                isSuccess
                  ? 'border-emerald-400/80 bg-gradient-to-r from-emerald-950/90 via-slate-900/90 to-cyan-950/90 text-emerald-200 shadow-[0_0_30px_rgba(52,211,153,0.25)]'
                  : 'border-rose-500/60 bg-rose-950/40 text-rose-200'
              }`}
            >
              <div className="flex items-start gap-3">
                {isSuccess ? (
                  <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  {/* User Requested Completion Header */}
                  {isSuccess ? (
                    <div>
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                        <span className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-400">
                          {isLastChallenge ? '¡RETO FINAL COMPLETADO!' : '¡RETO SUPERADO CON ÉXITO!'}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                          Avanzando al siguiente en {autoAdvanceSeconds}s...
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black font-mono text-white mb-2 tracking-wide">
                        {isLastChallenge
                          ? 'GAME OVER • FIN DE ESTE RETO • ¡TODOS LOS RETOS SUMADOS COMPLETOS!'
                          : 'GAME OVER • FIN DE ESTE RETO, VAMOS AL SIGUIENTE'}
                      </h3>

                      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-950/80 rounded-xl p-2.5 border border-emerald-500/30 text-xs font-mono mb-2">
                        <span className="text-emerald-300 font-bold">
                          Sumado en este reto: +{lastPointsDelta} pts
                        </span>
                        <span className="text-cyan-300 font-bold">
                          Suma total acumulada: {accumulatedSum.toLocaleString()} pts
                        </span>
                      </div>

                      {/* Auto advance progress bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 4, ease: 'linear' }}
                          className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                        />
                      </div>

                      {/* Tier completion celebration */}
                      {isTierLast && !isLastChallenge && (
                        <div className="mt-2.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-cyan-500/20 border border-emerald-400/50 text-emerald-200 text-xs font-mono font-bold flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                          <span>¡NIVEL {tierMeta.label} CONQUISTADO (5/5)! Desbloqueando siguiente nivel de complejidad...</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <h4 className="text-sm font-bold font-mono uppercase tracking-wider mb-1 text-rose-300">
                      RESPUESTA INCORRECTA (PENALIZACIÓN APLICADA)
                    </h4>
                  )}

                  <p className="text-xs sm:text-sm leading-relaxed">
                    {lastFeedback}
                  </p>

                  {/* Logic principle shown upon success */}
                  {isSuccess && (challenge.logicLesson || challenge.financialLesson) && (
                    <div className="mt-2.5 pt-2.5 border-t border-emerald-500/30 text-xs font-mono text-emerald-300">
                      💡 <strong>Principio Lógico-Matemático:</strong> {challenge.logicLesson || challenge.financialLesson}
                    </div>
                  )}

                  {/* Instructions if error: re-read, DO NOT reveal correct option */}
                  {!isSuccess && (
                    <div className="mt-2.5 pt-2 border-t border-rose-500/30 text-xs font-mono text-rose-300">
                      ⚠️ Deducción de {lastPointsDelta} pts aplicada a tu balance. Lee con atención las premisas del caso y presiona "Reintentar" para seleccionar otra opción.
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-cyan-500/20 pt-4">
          <div className="text-xs font-mono text-slate-400">
            Puntuación Acumulada:{' '}
            <strong
              className={currentBalance >= 0 ? 'text-cyan-300' : 'text-rose-400 font-bold'}
            >
              {(isSuccess ? accumulatedSum : currentBalance).toLocaleString()} pts
            </strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* If failed, show Retry button */}
            {hasSubmitted && !isSuccess && (
              <button
                id="retry-challenge-btn"
                type="button"
                onClick={handleRetryAfterError}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reintentar Reto</span>
              </button>
            )}

            {/* If not submitted yet or selecting: Validate button */}
            {!isSuccess && (
              <button
                id="validate-challenge-btn"
                type="button"
                disabled={selectedOptionId === null}
                onClick={handleValidate}
                className={`w-full sm:w-auto px-8 py-3 rounded-xl font-black font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  selectedOptionId !== null
                    ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:opacity-95'
                    : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                }`}
              >
                <span>VALIDAR RESPUESTA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {/* If success: Advance to Next Challenge button */}
            {isSuccess && (
              <button
                id="next-challenge-btn"
                type="button"
                onClick={onNextChallenge}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-emerald-400 text-slate-950 font-black font-mono text-xs uppercase tracking-wider hover:bg-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>VAMOS AL SIGUIENTE RETO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
