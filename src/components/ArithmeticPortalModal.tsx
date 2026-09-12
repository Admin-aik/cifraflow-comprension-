import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, CheckCircle2, AlertCircle, HelpCircle, ArrowRight, ArrowLeft, RefreshCw, Calculator, Lightbulb, X } from 'lucide-react';
import { FinancialMission, AvatarProfile } from '../types';
import { AVATARS } from '../data/missions';
import { cyberAudio } from '../utils/audio';

interface ArithmeticPortalModalProps {
  mission: FinancialMission;
  avatarId: string;
  isCompleted: boolean;
  onSolveCorrect: (mission: FinancialMission, userAns: number) => void;
  onSolveWrong?: (mission: FinancialMission, userAns: number) => void;
  onNextMission: () => void;
  onPrevMission: () => void;
  onClose: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const ArithmeticPortalModal: React.FC<ArithmeticPortalModalProps> = ({
  mission,
  avatarId,
  isCompleted,
  onSolveCorrect,
  onSolveWrong,
  onNextMission,
  onPrevMission,
  onClose,
  hasNext,
  hasPrev
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [customInput, setCustomInput] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'wrong' | null; message: string }>({
    type: null,
    message: ''
  });
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showKeypad, setShowKeypad] = useState<boolean>(false);

  const currentAvatar: AvatarProfile = AVATARS.find((a) => a.id === avatarId) || AVATARS[0];

  // Reset local state when mission changes
  useEffect(() => {
    setSelectedOption(null);
    setCustomInput('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
  }, [mission.id]);

  const handleSelectOption = (num: number) => {
    cyberAudio.narrateOptionClick(num);
    setSelectedOption(num);
    setCustomInput(num.toString());
    setFeedback({ type: null, message: '' });
  };

  const handleKeypadPress = (val: string) => {
    cyberAudio.playClick(850);
    if (val === 'C') {
      cyberAudio.speak('Borrado');
      setCustomInput('');
      setSelectedOption(null);
    } else if (val === 'DEL') {
      setCustomInput((prev) => prev.slice(0, -1));
    } else {
      if (customInput.length < 7) {
        const nextVal = customInput + val;
        setCustomInput(nextVal);
        setSelectedOption(parseInt(nextVal, 10) || null);
        cyberAudio.speak(val);
      }
    }
  };

  const handleSolve = () => {
    const numericAnswer = parseInt(customInput, 10);
    if (isNaN(numericAnswer)) {
      cyberAudio.playError();
      cyberAudio.speak('¡Epa chamo! Coloca un número primero para poder resolver.');
      setFeedback({
        type: 'wrong',
        message: '¡Ingresa o selecciona un valor numérico antes de resolver!'
      });
      return;
    }

    if (numericAnswer === mission.correctAnswer) {
      cyberAudio.narrateCorrectAnswer(mission.category === 'Gastos' ? mission.expenseImpact : mission.incomeImpact, mission.category);

      // Trigger colorful neon confetti
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f3ff', '#ff007f', '#ffffff', '#38bdf8', '#fbbf24']
      });

      setFeedback({
        type: 'correct',
        message: `¡Qué nota chamo! ${mission.problem.replace(' = ?', ` = ${mission.correctAnswer}`)}. ${
          mission.category === 'Gastos'
            ? `Se descontaron $${mission.expenseImpact} de tus costos operativos al pelo.`
            : `¡Sumaste +$${mission.incomeImpact} a tus ingresos galácticos!`
        }`
      });

      onSolveCorrect(mission, numericAnswer);
    } else {
      cyberAudio.narrateWrongAnswer(numericAnswer);
      setFeedback({
        type: 'wrong',
        message: `¡Epa mi pana, te pelaste por ahí! (${numericAnswer}). Revisa la cuenta con calma y métele coco.`
      });
      onSolveWrong?.(mission, numericAnswer);
    }
  };

  return (
    <div
      id="portal-aritmetico-modal-overlay"
      className="fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
    >
      {/* 3D Floating Modal Outer Frame with Glow & Cyan Border */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-950/85 backdrop-blur-2xl border-2 border-cyan-400/70 p-5 sm:p-7 shadow-[0_0_50px_rgba(0,243,255,0.35)] ring-1 ring-fuchsia-500/40">
        
        {/* Holographic Header Bar */}
        <div className="flex items-center justify-between border-b border-cyan-500/30 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-400 shadow-[0_0_15px_#00f3ff]">
              <Calculator className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                  Reto {mission.id} / 100
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    mission.category === 'Gastos'
                      ? 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40'
                      : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                  }`}
                >
                  {mission.category}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                  {mission.difficulty}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white tracking-wide">
                {mission.title}
              </h2>
            </div>
          </div>

          {/* Close & Navigation controls */}
          <div className="flex items-center gap-2">
            <button
              id="portal-prev-btn"
              disabled={!hasPrev}
              onClick={() => {
                cyberAudio.playClick(600);
                onPrevMission();
              }}
              className="p-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              title="Misión Anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              id="portal-next-btn"
              disabled={!hasNext}
              onClick={() => {
                cyberAudio.playClick(600);
                onNextMission();
              }}
              className="p-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              title="Misión Siguiente"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="portal-close-btn"
              onClick={() => {
                cyberAudio.playClick(500);
                onClose();
              }}
              className="p-2 rounded-xl bg-slate-900/80 border border-fuchsia-500/30 text-fuchsia-300 hover:text-white hover:bg-fuchsia-500/20 transition-colors"
              title="Cerrar Portal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body: Avatar Greeting + Math Problem */}
        <div className="mt-5 space-y-5">
          
          {/* Avatar Interaction & Story Box */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-cyan-500/30 p-3.5">
            <div className="relative shrink-0 flex items-center gap-3">
              <div className="relative h-14 w-14 rounded-2xl border-2 border-cyan-400 overflow-hidden shadow-[0_0_15px_rgba(0,243,255,0.4)]">
                <img
                  src={currentAvatar.imageSrc}
                  alt={currentAvatar.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="sm:hidden">
                <p className="text-xs font-bold text-cyan-300">{currentAvatar.name}</p>
                <p className="text-[10px] text-fuchsia-400">{currentAvatar.title}</p>
              </div>
            </div>
            <div className="flex-1 text-sm text-slate-200 leading-relaxed font-sans">
              <p className="hidden sm:block text-[11px] font-mono font-bold text-cyan-400 mb-0.5">
                {currentAvatar.name} ({currentAvatar.title}):
              </p>
              <p>{mission.story}</p>
            </div>
          </div>

          {/* Primary Math Challenge Billboard Screen */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-950 border-2 border-cyan-400/80 p-5 text-center shadow-[inset_0_0_25px_rgba(0,243,255,0.25)]">
            
            {/* Cyber scanline overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]" />

            <span className="text-xs font-mono uppercase tracking-widest text-fuchsia-400">
              Desafío de Cálculo Financiero
            </span>

            {/* Prompt's literal challenge text e.g. "Ventas del Puesto de Limonada: 100 + 45 = ?" */}
            <div className="mt-2 text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-300 font-mono tracking-wide drop-shadow-[0_0_12px_#00f3ff]">
              {mission.problem}
            </div>

            {/* Visual Big Equation Component */}
            <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4 font-mono text-2xl sm:text-3xl font-black text-white">
              <div className="px-3 sm:px-4 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                ${mission.equationDisplay.num1}
              </div>
              <div className="text-fuchsia-400 text-3xl font-bold">
                {mission.equationDisplay.operator}
              </div>
              <div className="px-3 sm:px-4 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                ${mission.equationDisplay.num2}
              </div>
              <div className="text-cyan-400 text-3xl font-bold">=</div>
              <div className="relative">
                <input
                  id="portal-math-input"
                  type="text"
                  placeholder="?"
                  value={customInput}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, '');
                    setCustomInput(val);
                    setSelectedOption(parseInt(val, 10) || null);
                  }}
                  className="w-24 sm:w-28 text-center py-2 rounded-xl bg-slate-900 border-2 border-fuchsia-500 text-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 shadow-[0_0_15px_rgba(255,0,127,0.4)]"
                />
              </div>
            </div>

            {/* Quick Multiple Choice Options */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {mission.options.map((option) => (
                <button
                  key={option}
                  id={`portal-option-${option}`}
                  onClick={() => handleSelectOption(option)}
                  className={`py-2 px-3 rounded-xl font-mono text-sm font-bold transition-all border ${
                    selectedOption === option
                      ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white border-white shadow-[0_0_15px_#00f3ff] scale-105'
                      : 'bg-slate-900/80 text-cyan-200 border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800'
                  }`}
                >
                  ${option}
                </button>
              ))}
            </div>

            {/* Keypad Toggle */}
            <div className="mt-3 flex items-center justify-center gap-3">
              <button
                id="portal-toggle-keypad-btn"
                onClick={() => {
                  cyberAudio.playClick(650);
                  setShowKeypad(!showKeypad);
                }}
                className="text-xs font-mono text-cyan-400/80 hover:text-cyan-200 flex items-center gap-1 transition-colors"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>{showKeypad ? 'Ocultar Teclado Digital' : 'Mostrar Teclado Digital'}</span>
              </button>
              <button
                id="portal-toggle-hint-btn"
                onClick={() => {
                  cyberAudio.playClick(650);
                  setShowHint(!showHint);
                }}
                className="text-xs font-mono text-fuchsia-400/80 hover:text-fuchsia-200 flex items-center gap-1 transition-colors"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{showHint ? 'Ocultar Pista Financiera' : 'Pista Financiera'}</span>
              </button>
            </div>

            {/* Optional Cyber Keypad Drawer */}
            {showKeypad && (
              <div className="mt-3 p-3 bg-slate-900/90 rounded-2xl border border-cyan-500/30 max-w-xs mx-auto animate-in slide-in-from-top duration-200">
                <div className="grid grid-cols-3 gap-1.5 font-mono text-sm font-bold">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', 'DEL'].map((k) => (
                    <button
                      key={k}
                      onClick={() => handleKeypadPress(k)}
                      className={`p-2 rounded-lg transition-all ${
                        k === 'C'
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                          : k === 'DEL'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                          : 'bg-slate-800 text-cyan-200 border border-cyan-500/20 hover:bg-cyan-500/20'
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Financial Lesson / Concept Hint */}
            {showHint && (
              <div className="mt-3 p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-left text-xs text-cyan-200 font-sans leading-relaxed animate-in fade-in">
                {mission.financialLesson}
              </div>
            )}
          </div>

          {/* Feedback Status Box */}
          {feedback.type && (
            <div
              className={`p-3.5 rounded-xl text-xs font-mono flex items-start gap-2.5 animate-in slide-in-from-bottom duration-200 ${
                feedback.type === 'correct'
                  ? 'bg-emerald-950/80 border border-emerald-400 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-rose-950/80 border border-rose-400 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
              }`}
            >
              {feedback.type === 'correct' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              )}
              <div className="flex-1">{feedback.message}</div>
            </div>
          )}

          {/* Primary Action Button from prompt: "¡Resolver Operación!" */}
          <div className="pt-2">
            <button
              id="resolver-operacion-btn"
              onClick={handleSolve}
              className="w-full relative group overflow-hidden py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-400 text-white font-black font-mono text-base tracking-wider uppercase shadow-[0_0_30px_rgba(0,243,255,0.6)] hover:shadow-[0_0_45px_rgba(255,0,127,0.8)] transition-all duration-300 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-200 animate-spin" />
                ¡Resolver Operación!
                <Sparkles className="w-5 h-5 text-fuchsia-200" />
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* If already completed, show quick jump to next */}
          {isCompleted && (
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Misión Registrada en el Balance
              </span>
              {hasNext && (
                <button
                  id="portal-go-next-mission-btn"
                  onClick={() => {
                    cyberAudio.playClick(800);
                    onNextMission();
                  }}
                  className="text-xs font-mono text-cyan-300 hover:text-cyan-100 underline flex items-center gap-1"
                >
                  <span>Siguiente Misión</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
