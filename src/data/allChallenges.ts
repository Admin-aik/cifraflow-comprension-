import { CifraChallenge, ChallengeComplexity, CifraOption } from '../types';
import { MODULE_1_CHALLENGES } from './challengesModule1';
import { MODULE_2_CHALLENGES } from './challengesModule2';
import { MODULE_3_CHALLENGES } from './challengesModule3';
import { MODULE_4_CHALLENGES } from './challengesModule4';
import { MODULE_5_CHALLENGES } from './challengesModule5';

export interface ComplexityTierInfo {
  tier: ChallengeComplexity;
  label: string;
  rangeText: string;
  count: number; // 5
  minModuleIndex: number; // 1, 6, 11
  maxModuleIndex: number; // 5, 10, 15
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  dotColor: string;
  bachilleratoGrade: string;
  description: string;
}

export interface BachilleratoLevelInfo {
  yearLabel: string;
  gradeBadge: string;
  pedagogicalFocus: string;
}

export function getBachilleratoGradeInfo(complexity: ChallengeComplexity): BachilleratoLevelInfo {
  switch (complexity) {
    case 'Principiante':
      return {
        yearLabel: '1.° y 2.° Año de Bachillerato (Educación Media General)',
        gradeBadge: '1.° - 2.° Año',
        pedagogicalFocus: 'Aritmética en Z y Q, regla de los signos, proporcionalidad, regla de tres, porcentajes y ecuaciones de 1er grado.'
      };
    case 'Intermedio':
      return {
        yearLabel: '3.° y 4.° Año de Bachillerato (Educación Media General)',
        gradeBadge: '3.° - 4.° Año',
        pedagogicalFocus: 'Polinomios, productos notables, ecuaciones cuadráticas, sistemas 2x2, teorema de Pitágoras y trigonometría básica.'
      };
    case 'Experto':
      return {
        yearLabel: '5.° Año de Bachillerato (Educación Media General)',
        gradeBadge: '5.° Año',
        pedagogicalFocus: 'Matrices, determinantes (Regla de Cramer), combinatoria, identidades trigonométricas avanzadas y optimización analítica.'
      };
  }
}

export const COMPLEXITY_TIERS: ComplexityTierInfo[] = [
  {
    tier: 'Principiante',
    label: 'Nivel 1: Principiante',
    rangeText: '5 Preguntas (1 al 5)',
    count: 5,
    minModuleIndex: 1,
    maxModuleIndex: 5,
    badgeBg: 'bg-emerald-500/20',
    badgeBorder: 'border-emerald-400',
    badgeText: 'text-emerald-300',
    dotColor: '#34d399',
    bachilleratoGrade: '1.° y 2.° Año',
    description: 'Programa 1.° y 2.° Año EMG: Aritmética en Z y Q, proporciones, regla de tres simple, porcentajes y ecuaciones lineales.'
  },
  {
    tier: 'Intermedio',
    label: 'Nivel 2: Intermedio',
    rangeText: '5 Preguntas (6 al 10)',
    count: 5,
    minModuleIndex: 6,
    maxModuleIndex: 10,
    badgeBg: 'bg-amber-500/20',
    badgeBorder: 'border-amber-400',
    badgeText: 'text-amber-300',
    dotColor: '#fbbf24',
    bachilleratoGrade: '3.° y 4.° Año',
    description: 'Programa 3.° y 4.° Año EMG: Factorización de polinomios, ecuaciones de 2do grado, sistemas 2x2 y trigonometría básica.'
  },
  {
    tier: 'Experto',
    label: 'Nivel 3: Experto',
    rangeText: '5 Preguntas (11 al 15)',
    count: 5,
    minModuleIndex: 11,
    maxModuleIndex: 15,
    badgeBg: 'bg-fuchsia-500/20',
    badgeBorder: 'border-fuchsia-400',
    badgeText: 'text-fuchsia-300',
    dotColor: '#e879f9',
    bachilleratoGrade: '5.° Año',
    description: 'Programa 5.° Año EMG: Matrices, determinantes de Cramer, combinatoria, identidades trigonométricas y optimización analítica.'
  }
];

export function getChallengeComplexity(challengeIndexInModule: number): ChallengeComplexity {
  if (challengeIndexInModule <= 5) return 'Principiante';
  if (challengeIndexInModule <= 10) return 'Intermedio';
  return 'Experto';
}

export function getIndexInComplexity(challengeIndexInModule: number): number {
  if (challengeIndexInModule <= 5) return challengeIndexInModule;
  if (challengeIndexInModule <= 10) return challengeIndexInModule - 5;
  return challengeIndexInModule - 10;
}

// Balanced position alternation pattern for 4 multiple choice options:
// Ensures the correct answer alternates between positions 0 (A), 1 (B), 2 (C), and 3 (D)
// with even distribution and zero consecutive identical positions across the 75 challenges.
const ALTERNATING_POSITIONS = [1, 3, 0, 2, 3, 1, 2, 0, 2, 1, 3, 0, 1, 2, 0, 3];
const DISTRACTOR_PERMUTATIONS = [
  [0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]
];

export function alternateChallengeOptions(rawOptions: CifraOption[], challengeId: number): CifraOption[] {
  if (!rawOptions || rawOptions.length <= 1) return rawOptions;

  const correct = rawOptions.find((o) => o.is_correct) || rawOptions[0];
  const distractors = rawOptions.filter((o) => o !== correct);

  const targetPos = ALTERNATING_POSITIONS[(challengeId - 1) % ALTERNATING_POSITIONS.length] % rawOptions.length;
  const perm = DISTRACTOR_PERMUTATIONS[(challengeId * 7) % DISTRACTOR_PERMUTATIONS.length];

  const orderedDistractors = [
    distractors[perm[0] % distractors.length],
    distractors[perm[1] % distractors.length],
    distractors[perm[2] % distractors.length]
  ];

  const result: CifraOption[] = [];
  let distractorIdx = 0;
  for (let pos = 0; pos < rawOptions.length; pos++) {
    if (pos === targetPos) {
      result.push(correct);
    } else {
      result.push(orderedDistractors[distractorIdx++] || distractors[0]);
    }
  }
  return result;
}

const RAW_CHALLENGES: CifraChallenge[] = [
  ...MODULE_1_CHALLENGES,
  ...MODULE_2_CHALLENGES,
  ...MODULE_3_CHALLENGES,
  ...MODULE_4_CHALLENGES,
  ...MODULE_5_CHALLENGES,
];

// Enrich each of the 75 challenges with explicit 3-tier complexity (5 per tier)
// and dynamically alternated option positions so the correct answer is never fixed to the same position or letter
export const ALL_CHALLENGES: CifraChallenge[] = RAW_CHALLENGES.map((challenge) => {
  const complexity = getChallengeComplexity(challenge.challengeIndexInModule);
  const indexInComplexity = getIndexInComplexity(challenge.challengeIndexInModule);
  const alternatedOptions = alternateChallengeOptions(challenge.options, challenge.id);
  const bachiInfo = getBachilleratoGradeInfo(complexity);
  return {
    ...challenge,
    options: alternatedOptions,
    complexity,
    indexInComplexity,
    bachilleratoYear: bachiInfo.yearLabel,
    bachilleratoFocus: bachiInfo.pedagogicalFocus
  };
});

export function getChallengesByModule(moduleId: string): CifraChallenge[] {
  return ALL_CHALLENGES.filter(c => c.moduleId === moduleId);
}

export function getChallengesByModuleAndComplexity(moduleId: string, complexity: ChallengeComplexity): CifraChallenge[] {
  return ALL_CHALLENGES.filter(c => c.moduleId === moduleId && c.complexity === complexity);
}

export function getChallengeById(id: number): CifraChallenge | undefined {
  return ALL_CHALLENGES.find(c => c.id === id);
}

export const TOTAL_CHALLENGES_COUNT = ALL_CHALLENGES.length; // 75

