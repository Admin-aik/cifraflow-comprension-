import React, { useState } from 'react';
import { Sparkles, X, PlusCircle, MinusCircle, RefreshCw, CheckCircle2 } from 'lucide-react';
import { FinancialMission } from '../types';
import { cyberAudio } from '../utils/audio';

interface CustomChallengeModalProps {
  onInjectCustomMission: (mission: FinancialMission) => void;
  onClose: () => void;
}

export const CustomChallengeModal: React.FC<CustomChallengeModalProps> = ({
  onInjectCustomMission,
  onClose
}) => {
  const [title, setTitle] = useState('Venta Especial de Trajes Espaciales');
  const [category, setCategory] = useState<'Ingresos' | 'Gastos' | 'Inversión' | 'Reparto'>('Ingresos');
  const [operator, setOperator] = useState<'+' | '-' | '×' | '÷'>('+');
  const [num1, setNum1] = useState(150);
  const [num2, setNum2] = useState(75);

  const calculateAnswer = () => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '×':
        return num1 * num2;
      case '÷':
        return num2 === 0 ? 0 : Math.round((num1 / num2) * 100) / 100;
    }
  };

  const handleRandomize = () => {
    cyberAudio.playClick(800);
    cyberAudio.speak('Generando un escenario financiero aleatorio mi pana.');
    const presets = [
      { t: 'Subasta de Minerales de Neón', c: 'Ingresos' as const, op: '+' as const, n1: 200, n2: 85 },
      { t: 'Actualización del Blindaje Láser', c: 'Gastos' as const, op: '-' as const, n1: 300, n2: 65 },
      { t: 'Venta de Cristales de Plasma', c: 'Ingresos' as const, op: '×' as const, n1: 40, n2: 6 },
      { t: 'Dividendo de Minería Compartida', c: 'Reparto' as const, op: '÷' as const, n1: 500, n2: 4 }
    ];
    const picked = presets[Math.floor(Math.random() * presets.length)];
    setTitle(picked.t);
    setCategory(picked.c);
    setOperator(picked.op);
    setNum1(picked.n1);
    setNum2(picked.n2);
  };

  const handleCreate = () => {
    const ans = calculateAnswer();
    const isGasto = category === 'Gastos' || operator === '-';
    const newMission: FinancialMission = {
      id: 999,
      title,
      category,
      operationType: operator === '+' ? 'sum' : operator === '-' ? 'subtract' : operator === '×' ? 'multiply' : 'divide',
      story: `Escenario personalizado: ${title}. Calcula la operación aritmética para registrar el movimiento.`,
      problem: `${title}: ${num1} ${operator} ${num2} = ?`,
      equationDisplay: {
        num1,
        operator,
        num2
      },
      correctAnswer: ans,
      options: [
        ans,
        ans + Math.floor(Math.random() * 20) + 5,
        Math.max(1, ans - (Math.floor(Math.random() * 15) + 5)),
        ans + 10
      ].sort(() => Math.random() - 0.5),
      financialLesson: `💡 Cada movimiento financiero afecta directamente tu balance final de caja.`,
      incomeImpact: isGasto ? 0 : ans,
      expenseImpact: isGasto ? Math.abs(ans) : 0,
      difficulty: 'Intermedio',
      gridCoordinates: [0, 0, 0],
      color: isGasto ? '#ff007f' : '#00f3ff'
    };

    cyberAudio.playSuccess();
    cyberAudio.speak(`¡Reto creado fino! Cargando ${title} en el portal.`);
    onInjectCustomMission(newMission);
  };

  return (
    <div
      id="custom-challenge-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-slate-950/95 backdrop-blur-2xl border-2 border-cyan-400/80 p-5 sm:p-7 shadow-[0_0_50px_rgba(0,243,255,0.35)]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-cyan-500/30 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-400 shadow-[0_0_15px_#00f3ff]">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                Creador de Retos Financieros
              </span>
              <h2 className="text-lg sm:text-xl font-black text-white">
                Generador Aritmético
              </h2>
            </div>
          </div>
          <button
            onClick={() => {
              cyberAudio.playClick(500);
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Inputs */}
        <div className="mt-5 space-y-4 font-mono text-xs">
          <div>
            <label className="block text-slate-300 mb-1 font-sans text-xs">Título del Negocio o Actividad:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 mb-1 font-sans text-xs">Tipo de Movimiento:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <option value="Ingresos">Ingresos (+)</option>
                <option value="Gastos">Gastos (-)</option>
                <option value="Inversión">Inversión (ROI)</option>
                <option value="Reparto">Reparto (División)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-sans text-xs">Operador:</label>
              <div className="flex gap-1">
                {(['+', '-', '×', '÷'] as const).map((op) => (
                  <button
                    key={op}
                    onClick={() => {
                      cyberAudio.playClick(700);
                      cyberAudio.speak(op === '+' ? 'Suma' : op === '-' ? 'Resta' : op === '×' ? 'Multiplicación' : 'División');
                      setOperator(op);
                    }}
                    className={`flex-1 py-1.5 rounded-lg border font-bold text-sm ${
                      operator === op
                        ? 'bg-cyan-500 text-black border-cyan-300'
                        : 'bg-slate-900 text-cyan-300 border-cyan-500/30'
                    }`}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 mb-1 font-sans text-xs">Primer Monto ($):</label>
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-200"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-1 font-sans text-xs">Segundo Monto ($ o Factor):</label>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-200"
              />
            </div>
          </div>

          {/* Preview equation */}
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-fuchsia-500/40 text-center">
            <span className="text-[10px] text-fuchsia-300 uppercase tracking-wider block mb-1">Vista Previa</span>
            <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              {title}: {num1} {operator} {num2} = ?
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleRandomize}
              className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-all"
            >
              <RefreshCw className="w-4 h-4 text-cyan-400" />
              <span>Aleatorio</span>
            </button>
            <button
              onClick={handleCreate}
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-bold flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Cargar en el Portal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
