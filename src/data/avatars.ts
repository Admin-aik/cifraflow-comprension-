import { AvatarProfile, EducationalModule } from '../types';

export const CIFRAFLOW_BANNER_IMAGE = '/src/assets/images/portada_cifraflow_team_1789241833603.jpg';
export const CIFRAFLOW_LOGO_IMAGE = '/src/assets/images/cifraflow_logo_1789241437287.jpg';

export const CIFRA_AVATARS: AvatarProfile[] = [
  {
    id: 'ircar_cloud',
    name: 'Ircar',
    role: 'Estudiante Adolescente • Especialista en Comprensión Lectora',
    specialty: 'Decodificación Textual, Premisas Esenciales & Detección de Distractores',
    motto: 'Comprender a fondo el texto es la clave para resolver cualquier desafío.',
    perk: 'Escáner Textual Anti-Distractores (+15% Precisión en Comprensión)',
    themeColor: '#00f3ff',
    colorTheme: '#00f3ff',
    imageSrc: '/src/assets/images/teen_avatar_ircar_1789241366458.jpg',
    audio_quote: 'Hola, soy Ircar. Analicemos juntos cada palabra del enunciado para encontrar la verdad lógica.',
    bonusMultiplier: 1.15,
    stats: [
      { label: 'Comprensión Lectora', value: 98 },
      { label: 'Detección Distractores', value: 96 },
      { label: 'Inferencia de Premisas', value: 94 }
    ]
  },
  {
    id: 'jorge_access',
    name: 'Jorge',
    role: 'Estudiante Adolescente • Operador de Cálculo Mental & Aritmética',
    specialty: 'Aritmética Estratégica, Proporciones & Estimación Rápida',
    motto: 'Los números revelan relaciones exactas cuando descompones su estructura.',
    perk: 'Acelerador de Proporciones & Descomposición Numérica (+15% Agilidad Aritmética)',
    themeColor: '#38bdf8',
    colorTheme: '#38bdf8',
    imageSrc: '/src/assets/images/teen_avatar_jorge_1789241382250.jpg',
    audio_quote: '¡Qué tal! Soy Jorge. Descompongamos las operaciones complejas paso a paso con exactitud.',
    bonusMultiplier: 1.15,
    stats: [
      { label: 'Cálculo Mental', value: 97 },
      { label: 'Proporciones & Tasas', value: 95 },
      { label: 'Estimación Rápida', value: 92 }
    ]
  },
  {
    id: 'ivan_auditor',
    name: 'Iván',
    role: 'Estudiante Adolescente • Estratega de Lógica Deductiva & Silogismos',
    specialty: 'Modus Ponens/Tollens, Tablas de Verdad & Validación de Premisas',
    motto: 'Si las premisas son verdaderas y la regla es válida, la conclusión es infalible.',
    perk: 'Radar de Falacias Lógicas & Silogismos (Doble Puntaje Deductivo)',
    themeColor: '#34d399',
    colorTheme: '#34d399',
    imageSrc: '/src/assets/images/teen_avatar_ivan_1789241399236.jpg',
    audio_quote: 'Saludos, soy Iván. Verificando la validez lógica de cada premisa. ¡Ninguna falacia nos engañará!',
    bonusMultiplier: 1.2,
    stats: [
      { label: 'Lógica Deductiva', value: 99 },
      { label: 'Detección de Falacias', value: 96 },
      { label: 'Silogismos Formales', value: 95 }
    ]
  },
  {
    id: 'carlos_budget',
    name: 'Carlos',
    role: 'Estudiante Adolescente • Arquitecto de Patrones & Enigmas Abstractos',
    specialty: 'Patrones Secuenciales, Principio del Palomar & Modelado Matemático',
    motto: 'Todo enigma complejo posee un patrón matemático esperando ser descubierto.',
    perk: 'Compás de Patrones & Reducción al Absurdo (+15% Perspicacia)',
    themeColor: '#fbbf24',
    colorTheme: '#fbbf24',
    imageSrc: '/src/assets/images/teen_avatar_carlos_1789241422738.jpg',
    audio_quote: 'Hola a todos, soy Carlos. Descubramos juntos el patrón oculto y resolvamos el enigma.',
    bonusMultiplier: 1.15,
    stats: [
      { label: 'Patrones & Series', value: 97 },
      { label: 'Pensamiento Lateral', value: 95 },
      { label: 'Modelado Abstracto', value: 94 }
    ]
  }
];

export const EDUCATIONAL_MODULES: EducationalModule[] = [
  {
    id: 'comprension_lectora',
    order: 1,
    title: 'Comprensión Lectora',
    subtitle: 'Decodificación de Enunciados & Premisas',
    accentColor: '#00f3ff',
    badgeColor: '#00f3ff',
    glowColor: 'rgba(0, 243, 255, 0.4)',
    badge: 'MÓDULO 1',
    description: 'Decodificación profunda de enunciados problemáticos, identificación de trampas verbales, discriminación de datos superfluos vs esenciales e inferencias lógicas.',
    challengesCount: 15,
    totalChallenges: 15,
    iconName: 'BookOpen',
    icon: 'BookOpen',
    highlights: [
      'Identificación de la incógnita real frente a distractores',
      'Cuantificadores restrictivos: "al menos uno", "exactamente", "ninguno"',
      'Extracción de premisas implícitas y relaciones contextuales'
    ]
  },
  {
    id: 'pensamiento_aritmetico',
    order: 2,
    title: 'Pensamiento Aritmético',
    subtitle: 'Cálculo Estratégico, Proporciones & Tasas',
    accentColor: '#38bdf8',
    badgeColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    badge: 'MÓDULO 2',
    description: 'Operaciones numéricas con sentido práctico: proporciones directas e inversas, porcentajes encadenados, trabajo conjunto, divisibilidad y atajos de cálculo mental.',
    challengesCount: 15,
    totalChallenges: 15,
    iconName: 'CreditCard',
    icon: 'CreditCard',
    highlights: [
      'Regla de tres directa e inversa y proporciones de rendimiento',
      'Porcentajes sucesivos y desmitificación de sumas porcentuales',
      'Tasas de trabajo conjunto y velocidad media armónica'
    ]
  },
  {
    id: 'logica_deductiva',
    order: 3,
    title: 'Lógica Deductiva & Silogismos',
    subtitle: 'Modus Ponens/Tollens, Conectores & Falacias',
    accentColor: '#34d399',
    badgeColor: '#34d399',
    glowColor: 'rgba(52, 211, 153, 0.4)',
    badge: 'MÓDULO 3',
    description: 'Estructuras formales del pensamiento: implicación condicional, leyes de De Morgan, detección de falacias formales (afirmación del consecuente) y silogismos irrefutables.',
    challengesCount: 15,
    totalChallenges: 15,
    iconName: 'Rocket',
    icon: 'Rocket',
    isEmprendimiento: true, // Used for emerald styling
    isDestacado: true,
    highlights: [
      '★ Destacado en Verde Esmeralda: Núcleo de la Razón Lógica',
      'Modus Ponens vs Falacia de Afirmación del Consecuente',
      'Leyes de De Morgan y negación lógica de cuantificadores'
    ]
  },
  {
    id: 'patrones_secuencias',
    order: 4,
    title: 'Patrones & Combinatoria',
    subtitle: 'Series Alfanuméricas & Conteo Sistemático',
    accentColor: '#fbbf24',
    badgeColor: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.4)',
    badge: 'MÓDULO 4',
    description: 'Reconocimiento de reglas de formación en sucesiones aritméticas y cuadráticas, series intercaladas, principio multiplicativo de conteo, permutaciones y combinaciones.',
    challengesCount: 15,
    totalChallenges: 15,
    iconName: 'TrendingUp',
    icon: 'TrendingUp',
    highlights: [
      'Sucesiones de diferencias de segundo nivel y series de Fibonacci',
      'Principio multiplicativo y permutaciones con restricciones',
      'Conteo de subconjuntos sin repetición (combinatoria básica)'
    ]
  },
  {
    id: 'problemas_complejos',
    order: 5,
    title: 'Problemas Lógicos Complejos',
    subtitle: 'Palomar, Diagramas de Venn & Reducción al Absurdo',
    accentColor: '#ff007f',
    badgeColor: '#ff007f',
    glowColor: 'rgba(255, 0, 127, 0.4)',
    badge: 'MÓDULO 5',
    description: 'Resolución de problemas de alta demanda cognitiva: principio del palomar (Dirichlet), teoría de conjuntos de Venn, problemas de ordenamiento espacial y reducción al absurdo.',
    challengesCount: 15,
    totalChallenges: 15,
    iconName: 'ShieldCheck',
    icon: 'ShieldCheck',
    highlights: [
      'Principio del Palomar: certezas mínimas sin azar',
      'Diagramas de Venn e inclusión/exclusión de elementos',
      'Demostración deductiva por reducción al absurdo'
    ]
  }
];

export const CIFRA_MODULES = EDUCATIONAL_MODULES;
