import React from 'react';
import { BookOpen, X, Sparkles, Lightbulb } from 'lucide-react';
import { cyberAudio } from '../utils/audio';
import { CifraFlowLogo, CifraFlowSpace } from './CifraFlowLogo';

interface FinancialGlossaryModalProps {
  onClose: () => void;
  onLogoClick?: () => void;
  onNavigateToSpace?: (space: CifraFlowSpace) => void;
}

interface GlossaryEntry {
  moduleBadge: string;
  badgeColor: string;
  title: string;
  concept: string;
  formula: string;
}

const CIFRA_GLOSSARY: GlossaryEntry[] = [
  {
    moduleBadge: 'Módulo 1: Lectura',
    badgeColor: '#00f3ff',
    title: 'Inferencia Textual vs Lectura Literal',
    concept: 'La inferencia deduce conclusiones necesarias implícitas a partir de hechos probados en el texto, sin añadir especulaciones ajenas a las premisas.',
    formula: 'Regla de Oro: Conclusión válida = Evidencia textual directa + deducción sin contradicciones'
  },
  {
    moduleBadge: 'Módulo 1: Lectura',
    badgeColor: '#00f3ff',
    title: 'Estructura Argumentativa: Premisas y Conclusión',
    concept: 'Un argumento sólido se compone de enunciados iniciales (premisas) que sustentan lógicamente una afirmación final obligatoria (conclusión).',
    formula: 'Silogismo Básico: Premisa Mayor + Premisa Menor ⟹ Conclusión Ineludible'
  },
  {
    moduleBadge: 'Módulo 2: Aritmética',
    badgeColor: '#38bdf8',
    title: 'Jerarquía de Operaciones (Regla PEMDAS)',
    concept: 'Orden estricto de resolución en expresiones numéricas para evitar ambigüedades de cálculo.',
    formula: 'Orden: 1° Paréntesis () | 2° Exponentes x² | 3° Multiplicación y División | 4° Suma y Resta'
  },
  {
    moduleBadge: 'Módulo 2: Aritmética',
    badgeColor: '#38bdf8',
    title: 'Proporcionalidad Directa vs Inversa',
    concept: 'En proporción directa el cociente es constante (y/x = k). En proporción inversa el producto de las magnitudes permanece constante (x · y = k).',
    formula: 'Directa: A₁/B₁ = A₂/B₂ | Inversa: A₁ · B₁ = A₂ · B₂'
  },
  {
    moduleBadge: 'Módulo 3: Lógica Deductiva',
    badgeColor: '#34d399',
    title: 'Leyes de Inferencia: Modus Ponens & Modus Tollens',
    concept: 'Si p implica q: Afirmar p obliga a concluir q (Ponens). Negar q obliga formalmente a negar p (Tollens).',
    formula: 'Modus Ponens: [(p ⟹ q) ∧ p] ⟹ q  |  Modus Tollens: [(p ⟹ q) ∧ ¬q] ⟹ ¬p'
  },
  {
    moduleBadge: 'Módulo 3: Lógica Deductiva',
    badgeColor: '#34d399',
    title: 'Falacia de Afirmación del Consecuente',
    concept: 'Asumir erróneamente que porque el resultado q es verdadero, el antecedente p tuvo que ser la causa exclusiva. Múltiples causas pueden generar el mismo efecto.',
    formula: 'Falaz: (p ⟹ q) ∧ q ⇏ p  (Nunca asumas la causa a partir del efecto)'
  },
  {
    moduleBadge: 'Módulo 4: Patrones',
    badgeColor: '#fbbf24',
    title: 'Progresiones Aritméticas vs Geométricas',
    concept: 'En progresión aritmética se suma una diferencia fija d. En progresión geométrica se multiplica por una razón constante r.',
    formula: 'Aritmética: aₙ = a₁ + (n - 1)·d  |  Geométrica: aₙ = a₁ · r^(n - 1)'
  },
  {
    moduleBadge: 'Módulo 4: Patrones',
    badgeColor: '#fbbf24',
    title: 'Combinatoria: Permutaciones vs Combinaciones',
    concept: 'Las permutaciones cuentan arreglos donde el orden de los elementos importa (podios, claves). Las combinaciones cuentan grupos donde el orden no importa.',
    formula: 'Permutación: P(n,k) = n! / (n - k)!  |  Combinación: C(n,k) = n! / [k! · (n - k)!]'
  },
  {
    moduleBadge: 'Módulo 5: Problemas Complejos',
    badgeColor: '#ff007f',
    title: 'Principio del Palomar (Teorema de Dirichlet)',
    concept: 'Si se distribuyen n elementos en m casillas y n > m, al menos una casilla debe contener necesariamente 2 o más elementos.',
    formula: 'Garantía Mínima: Con m casillas, se requieren (m + 1) extracciones para garantizar un duplicado'
  },
  {
    moduleBadge: 'Módulo 5: Problemas Complejos',
    badgeColor: '#ff007f',
    title: 'Principio de Inclusión-Exclusión (Conjuntos)',
    concept: 'Para calcular la unión de conjuntos sin duplicar las intersecciones comunes, se suman los tamaños individuales y se resta la intersección compartida.',
    formula: '|A ∪ B| = |A| + |B| - |A ∩ B|'
  }
];

export const FinancialGlossaryModal: React.FC<FinancialGlossaryModalProps> = ({
  onClose,
  onLogoClick,
  onNavigateToSpace
}) => {
  return (
    <div
      id="financial-glossary-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 font-sans"
    >
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-slate-950/95 backdrop-blur-2xl border-2 border-cyan-400/80 p-5 sm:p-7 shadow-[0_0_50px_rgba(0,243,255,0.35)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-cyan-500/30 pb-4 gap-3">
          <div className="flex items-center gap-3">
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
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-400 shadow-[0_0_15px_#00f3ff] shrink-0">
                <BookOpen className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                  Compendio Táctico CifraFlow
                </span>
                <h2 className="text-lg sm:text-xl font-black text-white">
                  Glosario de Lógica, Inferencia & Matemáticas
                </h2>
              </div>
            </div>
          </div>
          <button
            id="glossary-close-btn"
            onClick={() => {
              cyberAudio.playClick(500);
              cyberAudio.speak('Cerrando compendio de lógica.');
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cards */}
        <div className="mt-5 space-y-3.5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {CIFRA_GLOSSARY.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                cyberAudio.playClick(750);
                cyberAudio.speak(`${item.title}. ${item.formula}`);
              }}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/60 transition-all space-y-2 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                </div>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                  style={{
                    color: item.badgeColor,
                    borderColor: `${item.badgeColor}50`,
                    backgroundColor: `${item.badgeColor}15`
                  }}
                >
                  {item.moduleBadge}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">{item.concept}</p>
              <div className="px-3 py-2 rounded-xl bg-black/70 border border-cyan-500/20 text-cyan-300 font-mono text-xs font-bold">
                {item.formula}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-cyan-500/20 text-center">
          <p className="text-xs font-mono text-cyan-400/80 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
            Haz clic en cualquier concepto para escuchar el principio narrado en voz alta.
          </p>
        </div>
      </div>
    </div>
  );
};
