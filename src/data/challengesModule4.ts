import { CifraChallenge } from '../types';

export const MODULE_4_CHALLENGES: CifraChallenge[] = [
  {
    id: 46,
    challengeIndexInModule: 1,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Sucesión Aritmética Lineal y Término General',
    category: 'Progresiones Aritméticas',
    source_text: 'Secuencia Numérica: Observa los primeros términos de la serie: 7, 12, 17, 22, 27, 32...',
    question: '¿Cuál es la regla del término general a_n y cuál es el valor exacto del término ubicado en la posición 50 (a_50)?',
    options: [
      {
        id: 1,
        text: 'Regla: a_n = 5n + 2; Término 50: a_50 = 5(50) + 2 = 252 (la diferencia constante d = 5; a_1 = 7).',
        feedback_immediate: '¡Cálculo del término general impecable! Usaste la fórmula a_n = a_1 + (n - 1)d = 7 + (n - 1)5 = 5n + 2. Evaluando en n=50 da 252. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Regla: a_n = 7n; Término 50: a_50 = 350.',
        feedback_immediate: 'Error: la diferencia entre términos no es 7 sino 5 (12 - 7 = 5). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Término 50: a_50 = 247.',
        feedback_immediate: 'Error de índice: calculaste 5 × 49 + 2 en vez de evaluar correctamente n=50. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Término 50: a_50 = 500.',
        feedback_immediate: 'Sin sustento matemático en la sucesión. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En una progresión aritmética lineal, el término n-ésimo es a_n = a_1 + (n - 1)d.',
    gridCoordinates: [3, 0, 8]
  },
  {
    id: 47,
    challengeIndexInModule: 2,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Sucesión Cuadrática: Diferencias de Segundo Nivel',
    category: 'Series Cuadráticas',
    source_text: 'Secuencia Observada: 2, 5, 10, 17, 26, ¿?',
    question: 'Analizando las diferencias sucesivas, ¿qué número continúa la secuencia y qué patrón algebraico la gobierna?',
    options: [
      {
        id: 1,
        text: 'El número 37 (las primeras diferencias son impares consecutivos: +3, +5, +7, +9; la siguiente diferencia es +11; 26 + 11 = 37; responde a la regla n² + 1).',
        feedback_immediate: '¡Detección del patrón cuadrático magistral! Comprobaste: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, y 6²+1=37. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'El número 35 (sumando 9 nuevamente).',
        feedback_immediate: 'Error: las diferencias no son constantes (+9), sino crecientes (+3, +5, +7, +9, +11). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'El número 52 (duplicando 26).',
        feedback_immediate: 'Falso. No es una progresión geométrica de razón 2. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'El número 31.',
        feedback_immediate: 'Incorrecto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Cuando las primeras diferencias no son constantes pero las segundas sí lo son, la sucesión es de orden cuadrático an² + bn + c.',
    gridCoordinates: [7, 3, 6]
  },
  {
    id: 48,
    challengeIndexInModule: 3,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Progresión Geométrica y Crecimiento Exponencial',
    category: 'Progresiones Geométricas',
    source_text: 'Cultivo Biológico: En un laboratorio biológico, una población de microorganismos especiales se triplica (se multiplica por 3) cada hora de incubación. Al inicio del experimento (hora 0) se colocan 5 microorganismos.',
    question: '¿Cuántos microorganismos habrá exactamente al cumplirse 4 horas continuas de incubación?',
    options: [
      {
        id: 1,
        text: '405 microorganismos (Cálculo: N = 5 × 3⁴ = 5 × 81 = 405).',
        feedback_immediate: '¡Cálculo geométrico exponencial impecable! En t=0: 5; t=1: 15; t=2: 45; t=3: 135; t=4: 405. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '60 microorganismos (multiplicando linealmente 5 × 3 × 4).',
        feedback_immediate: 'Confundiste el crecimiento exponencial (potencia) con multiplicación lineal. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '135 microorganismos.',
        feedback_immediate: 'Esa es la cantidad en la hora 3, no en la hora 4. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '1,215 microorganismos.',
        feedback_immediate: 'Esa sería la cantidad en la hora 5. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En una progresión geométrica, cada término se multiplica por la razón: a_n = a_0 × r^n.',
    gridCoordinates: [11, 0, 3]
  },
  {
    id: 49,
    challengeIndexInModule: 4,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Serie de Fibonacci y Recursión Natural',
    category: 'Sucesiones Recursivas',
    source_text: 'Sucesión de Fibonacci: Observa los términos: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...',
    question: '¿Cuál es el siguiente término de la sucesión y cuál es la ley de formación que la rige?',
    options: [
      {
        id: 1,
        text: '89 (cada término se obtiene sumando los dos términos inmediatamente anteriores: 34 + 55 = 89; ley F_n = F_{n-1} + F_{n-2}).',
        feedback_immediate: '¡Reconocimiento perfecto de la espiral de Fibonacci! 34 + 55 = 89. Esta proporción áurea se manifiesta en espirales biológicas y conchas marinas. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '76 (sumando 21 al último término).',
        feedback_immediate: 'Falso. Se deben sumar los DOS últimos términos contiguos (34 + 55). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '110 (duplicando 55).',
        feedback_immediate: 'Error. Fibonacci no duplica términos. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '68.',
        feedback_immediate: 'Incorrecto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En la sucesión de Fibonacci cada elemento es la suma de los dos precedentes, convergiendo a la razón áurea φ ≈ 1.618.',
    gridCoordinates: [11, -4, -2]
  },
  {
    id: 50,
    challengeIndexInModule: 5,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Patrón Alfanumérico con Reglas Entrelazadas',
    category: 'Series Mixtas',
    source_text: 'Secuencia Dual: A, 2, D, 4, G, 8, J, 16, ¿?, ¿?',
    question: '¿Cuáles son los dos siguientes términos que continúan el patrón alfanumérico?',
    options: [
      {
        id: 1,
        text: 'M y 32 (las letras avanzan de 3 en 3 posiciones en el abecedario: A(+3)→D(+3)→G(+3)→J(+3)→M; los números se duplican en potencias de 2: 2, 4, 8, 16, 32).',
        feedback_immediate: '¡Desentrelazado de patrones duales perfecto! Aislar las dos secuencias independientes (alfabética y numérica) resolvió el enigma al instante. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'K y 24.',
        feedback_immediate: 'Error: de J a K solo hay 1 letra (no 3), y 16 + 8 = 24 es suma, no duplicación. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'L y 30.',
        feedback_immediate: 'Incorrecto en ambas secuencias. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'N y 64.',
        feedback_immediate: 'Falso. N está a 4 letras de distancia y 64 salta una potencia. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En secuencias mixtas o entrelazadas, separa los elementos en posiciones pares e impares para identificar sus leyes independientes.',
    gridCoordinates: [8, -7, -6]
  },
  {
    id: 51,
    challengeIndexInModule: 6,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Principio Fundamental del Conteo (Regla del Producto)',
    category: 'Combinatoria Básica',
    source_text: 'Menú Gastronómico: Un restaurante escolar ofrece en su almuerzo 4 opciones de entrada, 5 opciones de plato principal y 3 opciones de postre nutritivo.',
    question: '¿Cuántos menús completos distintos de tres tiempos (una entrada, un plato y un postre) se pueden conformar en total?',
    options: [
      {
        id: 1,
        text: '60 menús diferentes (aplicando el principio multiplicativo: 4 × 5 × 3 = 60 combinaciones posibles).',
        feedback_immediate: '¡Principio del producto aplicado a la perfección! Como cada elección es independiente, las posibilidades totales son el producto cartesiano de los conjuntos: 4 × 5 × 3 = 60. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '12 menús diferentes (sumando 4 + 5 + 3 = 12).',
        feedback_immediate: 'Error común: la suma (principio aditivo) solo aplica si fueran eventos excluyentes donde solo puedes elegir una sola cosa en total. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '120 menús.',
        feedback_immediate: 'Error de cálculo aritmético: 4 × 5 = 20, y 20 × 3 = 60, no 120. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '35 menús.',
        feedback_immediate: 'Incorrecto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Si una tarea consiste en k etapas independientes con n1, n2, ..., nk opciones, el número total de formas es n1 × n2 × ... × nk.',
    gridCoordinates: [4, -9, -9]
  },
  {
    id: 52,
    challengeIndexInModule: 7,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Permutaciones Simples: El Factorial de un Número',
    category: 'Permutaciones',
    source_text: 'Disposición de Asientos: Cinco amigos (Ana, Beto, Clara, David y Elena) van al cine y compran una fila de exactamente 5 butacas contiguas numeradas.',
    question: '¿De cuántas formas diferentes pueden ordenarse los 5 amigos en los asientos?',
    options: [
      {
        id: 1,
        text: '120 formas distintas (Permutación de 5 elementos: P_5 = 5! = 5 × 4 × 3 × 2 × 1 = 120).',
        feedback_immediate: '¡Cálculo factorial indiscutible! Para el primer asiento hay 5 opciones, para el segundo 4, luego 3, 2 y 1: 5! = 120 ordenamientos. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '25 formas (5 × 5).',
        feedback_immediate: 'Falso: una misma persona no puede sentarse en dos butacas simultáneamente (no hay repetición). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '15 formas (sumando 5 + 4 + 3 + 2 + 1).',
        feedback_immediate: 'Error: las elecciones secuenciales se multiplican, no se suman. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '720 formas (eso sería 6!).',
        feedback_immediate: 'Error: hay 5 personas, no 6. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 El número de formas de ordenar n objetos distintos en una fila es n! (factorial de n).',
    gridCoordinates: [0, -10, -10]
  },
  {
    id: 53,
    challengeIndexInModule: 8,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Variaciones con Repetición: Espacio de Contraseñas',
    category: 'Variaciones',
    source_text: 'Seguridad Digital: Un candado electrónico utiliza un código numérico de 3 dígitos (por ejemplo 047 o 888). Cada posición puede contener cualquier dígito decimal del 0 al 9, y se permite repetir dígitos.',
    question: '¿Cuántos códigos secretos posibles existen en total y cuántos tendrían todos sus dígitos distintos?',
    options: [
      {
        id: 1,
        text: 'Existen 1,000 códigos totales (10³ = 1,000, del 000 al 999), y 720 tendrían dígitos todos distintos (10 × 9 × 8 = 720).',
        feedback_immediate: '¡Doble deducción combinatoria brillante! Con repetición: 10 × 10 × 10 = 1,000. Sin repetición: 10 × 9 × 8 = 720 códigos con cifras no repetidas. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Existen solo 30 códigos posibles en total.',
        feedback_immediate: 'Error grosero: sumaste 10 + 10 + 10 en vez de multiplicar. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Existen 900 códigos totales y ninguno repite números.',
        feedback_immediate: 'Falso. El 000 cuenta como código válido, completando 1,000 posibilidades. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Existen 504 códigos en total.',
        feedback_immediate: 'Incorrecto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Variaciones con repetición de n elementos tomados de k en k: VR = n^k. Sin repetición: V = n × (n-1) × ... × (n-k+1).',
    gridCoordinates: [-4, -9, -9]
  },
  {
    id: 54,
    challengeIndexInModule: 9,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Combinaciones sin Repetición: Selección de Subconjuntos',
    category: 'Combinatoria de Subconjuntos',
    source_text: 'Comité Científico: De un grupo de 6 estudiantes destacados, se debe seleccionar una delegación de 3 estudiantes para asistir a un congreso (el orden de selección no tiene ninguna relevancia ni hay jerarquías).',
    question: '¿Cuántas delegaciones distintas de 3 estudiantes es posible formar?',
    options: [
      {
        id: 1,
        text: '20 delegaciones posibles (Combinación C(6, 3) = 6! / (3! × 3!) = (6 × 5 × 4) / (3 × 2 × 1) = 120 / 6 = 20).',
        feedback_immediate: '¡Cálculo combinatorio perfecto! Como el orden de los miembros no altera la delegación, se divide entre 3! para eliminar permutaciones duplicadas. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '120 delegaciones posibles.',
        feedback_immediate: 'Error: 120 es el resultado si el orden importara (por ejemplo Presidente, Secretario, Tesorero). Aquí es un comité sin jerarquía. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '18 delegaciones posibles (6 × 3).',
        feedback_immediate: 'Falso. No tiene sustento combinatorio. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '6 delegaciones.',
        feedback_immediate: 'Incorrecto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En las combinaciones C(n, k) = n! / [k!(n - k)!] el orden NO importa.',
    gridCoordinates: [-8, -7, -6]
  },
  {
    id: 55,
    challengeIndexInModule: 10,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Números Triangulares y la Fórmula de Gauss',
    category: 'Geometría Numérica',
    source_text: 'Patrón Geométrico: Los números triangulares corresponden al número de puntos necesarios para formar triángulos equiláteros: T_1 = 1, T_2 = 3, T_3 = 6, T_4 = 10, T_5 = 15...',
    question: '¿Cuál es el valor del décimo número triangular T_10 y qué suma representa?',
    options: [
      {
        id: 1,
        text: 'T_10 = 55 (representa la suma de los primeros 10 números enteros: 1 + 2 + 3 + ... + 10 = 10 × 11 / 2 = 55).',
        feedback_immediate: '¡Fórmula de Gauss ejecutada con excelencia! T_n = n(n + 1) / 2. Para n=10: 10 × 11 / 2 = 55 puntos. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'T_10 = 100 (10 × 10).',
        feedback_immediate: '100 es un número cuadrado (10²), no triangular. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'T_10 = 50.',
        feedback_immediate: 'Error de cálculo en la fórmula de Gauss. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'T_10 = 45.',
        feedback_immediate: '45 es T_9 (la suma de 1 a 9), no T_10. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 El n-ésimo número triangular T_n = n(n+1)/2 es la suma de los primeros n enteros positivos descubierta por Carl Friedrich Gauss.',
    gridCoordinates: [-11, -4, -2]
  },
  {
    id: 56,
    challengeIndexInModule: 11,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Secuencia con Operaciones Alternadas (Multiplicación y Resta)',
    category: 'Series Operacionales',
    source_text: 'Secuencia Dinámica: 3, 6, 4, 8, 6, 12, 10, ¿?',
    question: '¿Cuál es el siguiente número de la secuencia y qué operaciones alternadas la componen?',
    options: [
      {
        id: 1,
        text: '20 (la regla alterna multiplicar por 2 y restar 2: 3 × 2 = 6; 6 - 2 = 4; 4 × 2 = 8; 8 - 2 = 6; 6 × 2 = 12; 12 - 2 = 10; luego 10 × 2 = 20).',
        feedback_immediate: '¡Detección operacional precisa! El patrón es [×2, -2, ×2, -2, ×2, -2, ×2]. 10 × 2 = 20. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '8 (restando 2 a 10).',
        feedback_immediate: 'Error de turno: en 10 tocaba multiplicar por 2, no restar 2. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '14 (sumando 4 a 10).',
        feedback_immediate: 'Sin fundamento en el patrón alternado. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '16.',
        feedback_immediate: 'Incorrecto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Rastrea la transición paso a paso entre términos consecutivos para detectar si intervienen operadores aritméticos alternados.',
    gridCoordinates: [-11, 0, 3]
  },
  {
    id: 57,
    challengeIndexInModule: 12,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'El Problema Clásico de los Saludos de Mano',
    category: 'Grafos y Conteo de Aristas',
    source_text: 'Reunión de Delegados: Diez científicos se reúnen en una sala redonda. Al comenzar la sesión, cada persona estrecha la mano de cada una de las demás exactamente una vez.',
    question: '¿Cuántos apretones de mano se intercambiaron en total en la sala?',
    options: [
      {
        id: 1,
        text: '45 apretones de mano (equivale a elegir parejas no ordenadas entre 10 personas: C(10, 2) = 10 × 9 / 2 = 45).',
        feedback_immediate: '¡Solución combinatoria irrefutable! Cada una de las 10 personas saluda a 9 personas (10 × 9 = 90), pero como un apretón involucra a 2 personas simultáneamente, se divide entre 2: 90 / 2 = 45. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '90 apretones (10 × 9).',
        feedback_immediate: 'Error de conteo doble: contaste el saludo de Juan a Pedro y el de Pedro a Juan como dos apretones separados. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '100 apretones (10 × 10).',
        feedback_immediate: 'Absurdo: ¡nadie se estrecha la mano a sí mismo! Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '20 apretones.',
        feedback_immediate: 'Incorrecto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 El número de interacciones por pares entre n individuos es el número de aristas de un grafo completo K_n: n(n - 1) / 2.',
    gridCoordinates: [-7, 3, 6]
  },
  {
    id: 58,
    challengeIndexInModule: 13,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Patrón Cíclico en la Última Cifra de Potencias',
    category: 'Aritmética Periódica',
    source_text: 'Cálculo de Última Cifra: Se desea determinar el último dígito (cifra de las unidades) del gigantesco número 7²⁰²⁶ sin realizar la multiplicación completa.',
    question: 'Analizando el ciclo de las unidades de las potencias de 7, ¿en qué dígito termina 7²⁰²⁶?',
    options: [
      {
        id: 1,
        text: 'Termina en 9 (las últimas cifras de las potencias de 7 se repiten en un ciclo de longitud 4: 7¹=7, 7²=9, 7³=3, 7⁴=1; como 2026 mod 4 = 2, la cifra es la segunda del ciclo: 9).',
        feedback_immediate: '¡Maestría en análisis cíclico de residuos! Como 2026 = 506 × 4 + 2, el residuo 2 nos sitúa en la posición de 7² cuyo dígito final es 9. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Termina en 7.',
        feedback_immediate: 'Terminaría en 7 solo si el exponente tuviera residuo 1 (como 2025). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Termina en 1.',
        feedback_immediate: 'Terminaría en 1 solo si el exponente fuera múltiplo de 4 (como 2024 o 2028). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Termina en 3.',
        feedback_immediate: 'Terminaría en 3 si el residuo fuera 3 (como 2027). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La última cifra de cualquier potencia a^n es periódica; calcula la longitud del ciclo y toma el residuo n mod período.',
    gridCoordinates: [-3, 0, 8]
  },
  {
    id: 59,
    challengeIndexInModule: 14,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Permutaciones con Restricción de Vecindad',
    category: 'Combinatoria con Restricciones',
    source_text: 'Fila con Restricción: Cuatro amigos (A, B, C, D) se van a formar en una fila recta. Sin embargo, los amigos A y B tuvieron una discusión y NO desean quedar sentados juntos bajo ninguna circunstancia.',
    question: '¿En cuántas de las ordenaciones posibles los amigos A y B quedan separados?',
    options: [
      {
        id: 1,
        text: 'En 12 ordenaciones (Total sin restricciones: 4! = 24; ordenaciones donde A y B están juntos considerándolos un bloque: 3! × 2! = 12; restando: 24 - 12 = 12).',
        feedback_immediate: '¡Método del complemento ejecutado con genialidad! Calcular el total y restar los casos desfavorables (donde quedan juntos) es la vía más elegante y segura. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'En 6 ordenaciones.',
        feedback_immediate: 'Subestimaste las posibilidades. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'En 18 ordenaciones.',
        feedback_immediate: 'Error de cálculo en el bloque contiguo. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'En 24 ordenaciones (todas son válidas).',
        feedback_immediate: 'Falso: 24 es el total absoluto ignorando la prohibición de vecindad. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Principio del Complemento: Casos con restricción = Total de casos - Casos que violan la restricción.',
    gridCoordinates: [0, 5, 8]
  },
  {
    id: 60,
    challengeIndexInModule: 15,
    moduleId: 'patrones_secuencias',
    moduleTitle: 'Patrones & Combinatoria',
    moduleBadgeColor: '#fbbf24',
    title: 'Desafío Combinatorio Supremo: Caminos en una Cuadrícula',
    category: 'Caminatas en Retículas',
    source_text: 'Retícula de Navegación: Un robot explorador se encuentra en la coordenada (0, 0) de una cuadrícula de 3 × 3 casillas y debe llegar a la meta en (3, 3). En cada paso solo puede moverse una unidad hacia la DERECHA (D) o una unidad hacia ARRIBA (A).',
    question: '¿Cuántos caminos distintos de longitud mínima (6 pasos en total: 3 Derecha y 3 Arriba) puede elegir el robot para llegar a su destino?',
    options: [
      {
        id: 1,
        text: '20 caminos distintos (Permutación con repetición de 6 movimientos con 3D y 3A: C(6, 3) = 6! / (3! × 3!) = (6 × 5 × 4) / (3 × 2 × 1) = 20).',
        feedback_immediate: '¡Triunfo en el desafío maestro de combinatoria! Cada camino es una palabra de 6 letras con 3 D y 3 A (ej: D-D-D-A-A-A). Elegir las 3 posiciones para las D entre 6 espacios da C(6, 3) = 20 caminos. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '36 caminos distintos (6 × 6).',
        feedback_immediate: 'Falso. No corresponde a la combinatoria de retícula. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '9 caminos distintos (3 × 3).',
        feedback_immediate: 'Error conceptual: 9 es el área de la cuadrícula, no los caminos posibles. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '6 caminos (uno por cada paso).',
        feedback_immediate: 'Absurdo. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 El número de caminos en una cuadrícula de m × n es el coeficiente binomial C(m + n, m).',
    gridCoordinates: [0, -5, 8]
  }
];
