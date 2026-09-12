export type SystemPhase =
  | 'FASE_0_LOGEO'
  | 'FASE_1_AVATARES'
  | 'FASE_2_MODULOS'
  | 'FASE_3_GAMEPLAY'
  | 'FASE_4_GAME_OVER_NIVEL'
  | 'FASE_5_FIN_DE_LA_MISION';

export type DifficultyLevel = 'Básico' | 'Intermedio' | 'Avanzado';

export interface FinancialMission {
  id: number;
  title: string;
  category: 'Ingresos' | 'Gastos' | 'Inversión' | 'Reparto' | 'Presupuesto';
  operationType: 'sum' | 'subtract' | 'multiply' | 'divide';
  story?: string;
  problem?: string;
  equationDisplay: {
    num1: number;
    operator: '+' | '-' | '×' | '÷';
    num2: number;
  };
  correctAnswer: number;
  options: number[];
  financialLesson: string;
  incomeImpact?: number;
  expenseImpact?: number;
  difficulty: DifficultyLevel;
  gridCoordinates: [number, number, number];
  color?: string;
  planetName?: string;
  storyContext?: string;
  financialTip?: string;
  coordinates?: [number, number, number];
}

export interface StudentData {
  nombre: string;
  cedula: string;
  institucion: string;
  fullName?: string;
  nationalId?: string;
  schoolName?: string;
  registrationTimestamp?: number;
}

export type StudentProfile = StudentData;

export interface BCVLiveRate {
  rate_text: string;
  rate_numeric: number;
  updated_at: string;
  is_live: boolean;
}

export interface ChallengeOption {
  id: number;
  text: string;
  feedback_immediate: string;
  points_delta: number;
  is_correct: boolean;
}

export type CifraOption = ChallengeOption;

export type ChallengeComplexity = 'Principiante' | 'Intermedio' | 'Experto';

export type CifraModuleId =
  | 'comprension_lectora'
  | 'pensamiento_aritmetico'
  | 'logica_deductiva'
  | 'patrones_secuencias'
  | 'problemas_complejos';

export interface CifraChallenge {
  id: number;
  challengeIndexInModule: number; // 1 to 15
  complexity?: ChallengeComplexity; // 'Principiante' (1-5), 'Intermedio' (6-10), 'Experto' (11-15)
  indexInComplexity?: number; // 1 to 5 within that complexity tier
  moduleId: CifraModuleId | string;
  moduleTitle: string;
  moduleBadgeColor: string;
  title: string;
  category: string;
  source_text: string;
  question: string;
  options: ChallengeOption[];
  financialLesson?: string;
  logicLesson?: string;
  bcvContext?: string;
  gridCoordinates: [number, number, number];
}

export interface AvatarProfile {
  id: string;
  name: string;
  role?: string;
  title?: string;
  perk?: string;
  themeColor?: string;
  primaryColor?: string;
  accentColor?: string;
  imageSrc: string;
  audio_quote?: string;
  quote?: string;
  bonusMultiplier?: number;
  specialty?: string;
  motto?: string;
  colorTheme?: string;
  stats?: Array<{ label: string; value: number }>;
}

export type CifraAvatarProfile = AvatarProfile;

export interface EducationalModule {
  id: CifraModuleId | string;
  title: string;
  subtitle: string;
  accentColor: string;
  glowColor: string;
  badge: string;
  description: string;
  challengesCount: number;
  iconName: string;
  order?: number;
  isEmprendimiento?: boolean;
  isDestacado?: boolean;
  badgeColor?: string;
  totalChallenges?: number;
  icon?: string;
  highlights?: string[];
}

export interface RightHUDState {
  visible: boolean;
  student_data: StudentData;
  active_avatar: string;
  puntos_nivel_actual: number;
  puntos_totales_acumulados: number;
  racha_aciertos: number;
  desafio_actual_index: number;
  total_desafios_modulo: number;
}

export type TextScaleLevel = 'sm' | 'base' | 'lg' | 'xl';

export interface LedgerEntry {
  id: string;
  timestamp: string;
  concept: string;
  type: 'ingreso' | 'gasto' | 'inversion' | 'balance_inicial';
  amount: number;
  runningBalance: number;
  operationText: string;
}
