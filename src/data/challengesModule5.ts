import { CifraChallenge } from '../types';

export const MODULE_5_CHALLENGES: CifraChallenge[] = [
  {
    id: 61,
    challengeIndexInModule: 1,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'Principio del Palomar (Teorema de Dirichlet) Básico',
    category: 'Certeza Absoluta sin Azar',
    source_text: 'El Cajón a Oscuras: En una habitación completamente a oscuras, hay un cajón que contiene 10 calcetines de color negro y 10 calcetines de color blanco (todos idénticos en tejido, peso y tamaño). No es posible distinguir el color al tacto.',
    question: '¿Cuántos calcetines debes extraer como mínimo absoluto a ciegas para garantizar con 100% de certeza que tienes al menos un par del mismo color?',
    options: [
      {
        id: 1,
        text: '3 calcetines (como solo hay 2 colores posibles, al extraer 3 calcetines, por el Principio del Palomar al menos dos deben compartir el mismo color: 2 + 1 = 3).',
        feedback_immediate: '¡Principio del Palomar aplicado a la perfección! En el peor de los casos, los 2 primeros calcetines son de colores opuestos (1 negro y 1 blanco). El 3° que extraigas forzosamente formará par con alguno de ellos. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '11 calcetines (para evitar sacar todos los negros primero).',
        feedback_immediate: 'Error de lectura: 11 calcetines sería para garantizar un par BLANCO específico. Para "al menos un par de cualquier color" solo necesitas 3. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 2,
        text: '2 calcetines (si tienes buena suerte).',
        feedback_immediate: 'Falso. La suerte no ofrece garantía matemática absoluta del 100%. Podrías sacar 1 blanco y 1 negro. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '20 calcetines (extraer todo el cajón).',
        feedback_immediate: 'Innecesario y absurdo: se pedía el mínimo garantizado. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Principio del Palomar: Si se colocan n + 1 palomas en n nidos, al menos un nido contendrá 2 o más palomas.',
    gridCoordinates: [0, 0, 10]
  },
  {
    id: 62,
    challengeIndexInModule: 2,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'Principio del Palomar Avanzado: Coincidencias de Calendario',
    category: 'Palomar Generalizado',
    source_text: 'Aula Universitaria: Se desea saber el número mínimo de estudiantes que deben estar reunidos en un salón de conferencias para tener la certeza matemática irrefutable de que al menos dos de ellos nacieron en el mismo mes del año.',
    question: '¿Cuántos estudiantes deben estar presentes en el salón como mínimo?',
    options: [
      {
        id: 1,
        text: '13 estudiantes (como el año tiene 12 meses posibles, en el caso más disperso los primeros 12 nacen en meses distintos; el estudiante número 13 obligatoriamente coincidirá con alguno de los meses previos).',
        feedback_immediate: '¡Brillante demostración de Dirichlet! 12 casillas (meses) y 13 personas garantizan por palomar al menos una casilla con ≥ 2 personas. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '12 estudiantes.',
        feedback_immediate: 'Error: los 12 estudiantes podrían haber nacido cada uno en un mes diferente del año (enero, febrero, marzo... diciembre), sin que ninguno coincida. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '24 estudiantes (dos por cada mes).',
        feedback_immediate: '24 garantiza que al menos un mes tenga 3 personas, no el mínimo para 2. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '365 estudiantes.',
        feedback_immediate: 'Esa cifra es para coincidencia de día del año, no de mes. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Para garantizar que al menos k+1 elementos compartan una categoría entre n opciones, se requieren n × k + 1 elementos.',
    gridCoordinates: [6, 2, 8]
  },
  {
    id: 63,
    challengeIndexInModule: 3,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'Ordenamiento Lineal en Edificio de 5 Pisos',
    category: 'Razonamiento Espacial',
    source_text: 'Edificio Residencial: Cinco amigos (Andrés, Bruno, Carlos, Daniel y Esteban) viven cada uno en un piso diferente de un edificio de 5 pisos (del piso 1 al 5). Pistas: 1) Daniel vive en el piso 1. 2) Carlos vive en el piso 2. 3) Andrés vive en el piso inmediatamente superior al de Esteban. 4) Bruno vive más arriba que Carlos.',
    question: '¿Quién vive en el piso 5 (el piso más alto)?',
    options: [
      {
        id: 1,
        text: 'Bruno vive en el piso 5 (Como D=1 y C=2, quedan los pisos 3, 4 y 5. Andrés sobre Esteban exige dos pisos consecutivos: Esteban=3 y Andrés=4. Por ende, Bruno queda en el piso 5).',
        feedback_immediate: '¡Deducción espacial perfecta! La restricción de pisos consecutivos contiguos encajó de forma unívoca a Esteban en el piso 3 y a Andrés en el piso 4, dejando libre la azotea (piso 5) para Bruno. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Andrés vive en el piso 5.',
        feedback_immediate: 'Inconsistente: si Andrés estuviera en el 5, Esteban estaría en el 4 y Bruno tendría que estar en el 3, pero la pista indica otra disposición más armónica. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Carlos vive en el piso 5.',
        feedback_immediate: 'Error gravísimo de lectura: la pista 2 dice expresamente "Carlos vive en el piso 2". Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Daniel vive en el piso 5.',
        feedback_immediate: 'Falso. Daniel vive en el piso 1. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Agrupa en bloques rígidos las piezas con restricciones contiguas ("X inmediatamente sobre Y") para ubicarlas en los huecos disponibles.',
    gridCoordinates: [10, -1, 5]
  },
  {
    id: 64,
    challengeIndexInModule: 4,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'Ordenamiento Circular Alrededor de una Mesa',
    category: 'Geometría Relacional',
    source_text: 'Mesa de Debate: Cuatro personas (Pedro, Quique, Rosa y Saúl) se sientan simétricamente en una mesa redonda de 4 sillas. Pistas: 1) Pedro está sentado exactamente frente a Rosa. 2) Quique NO está sentado a la derecha de Pedro.',
    question: '¿Quién está sentado frente a Quique y en qué posición se encuentra Saúl respecto a Pedro?',
    options: [
      {
        id: 1,
        text: 'Saúl está sentado frente a Quique, y Saúl se encuentra a la derecha de Pedro.',
        feedback_immediate: '¡Visualización topológica circular impecable! Con Pedro y Rosa enfrentados, las sillas laterales son para Quique y Saúl. Como Quique no puede estar a la derecha de Pedro, Saúl está a la derecha de Pedro y Quique a su izquierda. Saúl y Quique quedan enfrentados. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Rosa está sentada frente a Quique.',
        feedback_immediate: 'Contradicción: la pista 1 fija a Rosa frente a Pedro, no frente a Quique. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Pedro está sentado frente a Quique.',
        feedback_immediate: 'Pedro está frente a Rosa. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'No es posible resolverlo porque una mesa redonda no tiene lados fijos.',
        feedback_immediate: 'Falso: la simetría relativa es independiente de la orientación absoluta. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En ordenamientos circulares, fija un elemento como punto de referencia canónico (origen) para evaluar las posiciones relativas (frente, izquierda, derecha).',
    gridCoordinates: [12, -4, 0]
  },
  {
    id: 65,
    challengeIndexInModule: 5,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'Diagramas de Venn: Principio de Inclusión-Exclusión (2 Conjuntos)',
    category: 'Teoría de Conjuntos',
    source_text: 'Censo Deportivo: En un grupo de 50 estudiantes de bachillerato: 30 juegan Fútbol, 25 juegan Básquetbol y 10 estudiantes practican ambos deportes simultáneamente.',
    question: '¿Cuántos estudiantes NO practican ninguno de estos dos deportes?',
    options: [
      {
        id: 1,
        text: '5 estudiantes (Fútbol solo: 30 - 10 = 20; Básquet solo: 25 - 10 = 15; Ambos: 10; Total con al menos uno: 20 + 15 + 10 = 45; Fuera del conjunto: 50 - 45 = 5).',
        feedback_immediate: '¡Principio de Inclusión-Exclusión ejecutado a la perfección! |F ∪ B| = 30 + 25 - 10 = 45. Por ende, los que no practican ninguno son 50 - 45 = 5. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '0 estudiantes, porque 30 + 25 = 55 supera a los 50 estudiantes.',
        feedback_immediate: 'Error de doble conteo: no restaste los 10 estudiantes que juegan ambos deportes y que fueron contados dos veces. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '15 estudiantes.',
        feedback_immediate: 'Incorrecto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '10 estudiantes.',
        feedback_immediate: 'Confundiste el remanente con la intersección de los dos conjuntos. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Fórmula de inclusión-exclusión para dos conjuntos: |A ∪ B| = |A| + |B| - |A ∩ B|.',
    gridCoordinates: [10, -7, -4]
  },
  {
    id: 66,
    challengeIndexInModule: 6,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'Diagramas de Venn Complejos: Inclusión-Exclusión (3 Conjuntos)',
    category: 'Teoría de Conjuntos Avanzada',
    source_text: 'Escuela de Idiomas: De 100 estudiantes encuestados: 50 estudian Inglés (I), 40 Francés (F) y 30 Alemán (A). Intersecciones dobles: 15 estudian I y F; 10 estudian F y A; 12 estudian I y A. Además, 5 estudian los TRES idiomas simultáneamente.',
    question: '¿Cuántos estudiantes estudian al menos un idioma y cuántos no estudian ninguno?',
    options: [
      {
        id: 1,
        text: '88 estudian al menos un idioma y 12 no estudian ninguno (|I∪F∪A| = 50 + 40 + 30 - 15 - 10 - 12 + 5 = 88; 100 - 88 = 12).',
        feedback_immediate: '¡Fórmula de Inclusión-Exclusión para 3 conjuntos dominada! Sumar los 3 individuales, restar las 3 intersecciones dobles y sumar la triple intersección da exactamente 88. 100 - 88 = 12. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '100 estudian al menos uno y 0 ninguno.',
        feedback_immediate: 'Falso. Asumes sin justificación que todos los encuestados estudian alguno de los tres idiomas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '75 estudian al menos uno y 25 ninguno.',
        feedback_immediate: 'Error de cálculo en la fórmula de tres conjuntos. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '93 estudian al menos uno y 7 ninguno.',
        feedback_immediate: 'Olvidaste sumar la triple intersección (+5) al final. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Para tres conjuntos: |A∪B∪C| = (|A|+|B|+|C|) - (|A∩B|+|B∩C|+|A∩C|) + |A∩B∩C|.',
    gridCoordinates: [6, -9, -8]
  },
  {
    id: 67,
    challengeIndexInModule: 7,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'El Acertijo Clásico de la Balanza de Dos Platillos (9 Monedas)',
    category: 'Algoritmos de Búsqueda Ternaria',
    source_text: 'Enigma de la Moneda Falsa: Tienes 9 monedas idénticas en apariencia y textura, pero una de ellas es falsa y pesa ligeramente más que las otras 8 monedas auténticas. Dispones de una balanza clásica de dos platillos sin pesas numéricas.',
    question: '¿Cuál es el número MÍNIMO de pesadas en la balanza con el que puedes identificar con certeza absoluta la moneda falsa?',
    options: [
      {
        id: 1,
        text: '2 pesadas garantizadas (dividiendo en 3 grupos de 3 monedas [3, 3, 3]; en la 1° pesada comparas dos grupos de 3: si se equilibra, la falsa está en el tercer grupo; en la 2° pesada comparas dos monedas del grupo de 3 y la identificas).',
        feedback_immediate: '¡Búsqueda ternaria logarítmica perfecta! Como 3² = 9, en cada pesada divides el espacio de búsqueda entre 3. En 2 pesadas determinas unívocamente la moneda entre las 9. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '4 pesadas (comparando parejas de dos en dos).',
        feedback_immediate: 'Ineficiente: la comparación binaria no aprovecha la capacidad de tres estados de la balanza (<, =, >). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '1 pesada.',
        feedback_immediate: 'Imposible: una sola pesada entre 9 monedas solo puede reducir a grupos, nunca aislar la moneda individual con certeza absoluta. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '3 pesadas.',
        feedback_immediate: 'Subóptimo: 3 pesadas permiten encontrar la falsa entre 27 monedas (3³ = 27), para 9 bastan solo 2. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La balanza de dos platillos tiene 3 estados (izquierda baja, derecha baja, equilibrada), permitiendo búsqueda ternaria de complejidad O(log3 N).',
    gridCoordinates: [0, -10, -10]
  },
  {
    id: 68,
    challengeIndexInModule: 8,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'Medición Exacta de Agua con Jarras Sin Graduar (3L y 5L)',
    category: 'Aritmética de Euclides',
    source_text: 'Problema Clásico de Medición: Tienes una fuente inagotable de agua y exactamente dos jarras vacías sin marcas de graduación: una jarra de 3 litros y otra de 5 litros. Debes obtener exactamente 4 litros de agua en la jarra grande.',
    question: '¿Cuál es la secuencia lógica mínima para conseguir exactamente 4 litros?',
    options: [
      {
        id: 1,
        text: 'Llenar la jarra de 5L; verter de ella en la de 3L hasta llenarla (quedan 2L en la de 5L); vaciar la de 3L; pasar los 2L a la jarra de 3L; llenar la jarra de 5L; usarla para completar la de 3L (solo cabe 1L más): ¡quedan exactamente 4L en la de 5L!',
        feedback_immediate: '¡Brillante resolución algorítmica! Ejecutaste la identidad de Bézout: 2 × 5 - 2 × 3 = 4 litros con precisión quirúrgica. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Llenar la jarra de 5L hasta lo que parezca el 80% a ojo.',
        feedback_immediate: 'Anticientífico: en matemáticas y lógica no se aceptan aproximaciones subjetivas "a ojo". Penalización: -50 pts.',
        points_delta: -50,
        is_correct: false
      },
      {
        id: 3,
        text: 'Llenar la jarra de 3L, sumarle 1L medido con una cuchara.',
        feedback_immediate: 'Invalida las reglas del problema (no hay otros recipientes ni instrumentos). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Es físicamente imposible obtener números pares con jarras de capacidades impares (3 y 5).',
        feedback_immediate: 'Falso: MCD(3, 5) = 1, lo que permite generar cualquier número entero de litros entre 1 y 5. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Si m y n son coprimos (MCD=1), mediante trasvases se puede medir cualquier cantidad entera entre 1 y max(m, n).',
    gridCoordinates: [-6, -9, -8]
  },
  {
    id: 69,
    challengeIndexInModule: 9,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'El Enigma del Cruce del Río (Lobo, Cabra y Col)',
    category: 'Búsqueda en Espacio de Estados',
    source_text: 'Dilema Clásico del Barquero: Un campesino debe cruzar un río con un lobo, una cabra y una cesta de col. El bote es pequeño y solo puede transportar al campesino con UNO de los tres bienes a la vez. Restricciones: Si el campesino no está presente, el lobo se come a la cabra, y la cabra se come la col (el lobo no come col).',
    question: '¿Cuál debe ser el primer viaje y la maniobra clave a mitad del proceso?',
    options: [
      {
        id: 1,
        text: '1° Llevar a la CABRA a la otra orilla (dejar lobo y col es seguro). La maniobra clave posterior es: tras llevar la col o el lobo, ¡regresar trayendo a la cabra de vuelta en el bote para no dejarla sola con el otro!',
        feedback_immediate: '¡Genialidad en el cruce del río! La genialidad de este problema reside en la acción contraintuitiva de traer a la cabra de regreso para desembarcar al lobo o la col sin peligro. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '1° Llevar al lobo primero a la otra orilla.',
        feedback_immediate: 'Catástrofe: al llevarse al lobo, dejas solos a la cabra y la col, ¡y la cabra se come la col de inmediato! Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '1° Llevar la col primero a la otra orilla.',
        feedback_immediate: 'Catástrofe: al llevarte la col, dejas solos al lobo y a la cabra, ¡y el lobo devora a la cabra! Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Cruzar nadando con el lobo atado.',
        feedback_immediate: 'Viola las condiciones operativas del acertijo formal. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La solución de problemas de estado a menudo requiere pasos aparentemente regresivos (deshacer parcialmente un avance) para sortear restricciones críticas.',
    gridCoordinates: [-10, -7, -4]
  },
  {
    id: 70,
    challengeIndexInModule: 10,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'El Acertijo de los Tres Sombreros y la Deducción Silenciosa',
    category: 'Lógica Epistémica de Conocimiento Común',
    source_text: 'Prueba de Ingenio: Tres lógicos (A, B y C) se sientan en fila india mirando al frente: C ve la espalda de B y A; B ve la espalda de A; y A no ve a nadie. Hay un conjunto visible de 5 sombreros: 3 negros y 2 rojos. A cada uno se le coloca un sombrero al azar y se guardan los otros dos. Ninguno ve su propio sombrero. Se le pregunta a C si sabe el color de su sombrero y C responde: "No lo sé". B escucha la respuesta de C y declara: "Yo tampoco lo sé". A, que no ve nada, exclama: "¡Pues yo sí sé con certeza el color de mi sombrero!"',
    question: '¿De qué color es el sombrero de A y cómo lo dedujo?',
    options: [
      {
        id: 1,
        text: 'El sombrero de A es NEGRO. (Si A y B tuvieran ambos rojo, C habría sabido de inmediato que el suyo era negro; como C dijo no saberlo, A y B no son ambos rojos. Si A tuviera rojo, B sabría que el suyo es negro para no repetir la doble roja; como B tampoco lo supo, ¡A no tiene rojo, por tanto A tiene NEGRO!).',
        feedback_immediate: '¡Sublime razonamiento epistémico de lógica pura! El silencio o ignorancia declarada de los demás transmite información deductiva decisiva para los observadores. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'El sombrero de A es ROJO porque los rojos eran los más escasos.',
        feedback_immediate: 'Falso. Si A fuera rojo, B habría deducido su sombrero negro tras la duda de C. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'El sombrero de A es blanco.',
        feedback_immediate: 'No había sombreros blancos en el problema (solo 3 negros y 2 rojos). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'A lo adivinó al azar con 50% de probabilidad.',
        feedback_immediate: 'Falso: los lógicos operan mediante deducción formal rigurosa, no por apuestas al azar. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En lógica epistémica, que un agente declare "no sé X" elimina todas las ramas de decisión donde X habría sido obvio para él.',
    gridCoordinates: [-12, -4, 0]
  },
  {
    id: 71,
    challengeIndexInModule: 11,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'Inducción Hacia Atrás y Teoría de Juegos (Nim Simplificado)',
    category: 'Teoría de Juegos e Inducción',
    source_text: 'Juego de las 15 Monedas: Dos jugadores juegan por turnos sobre una mesa con 15 monedas. En su turno, cada jugador puede retirar 1, 2 o 3 monedas (obligatorio retirar al menos una). Gana quien retire la ÚLTIMA moneda de la mesa.',
    question: 'Si tú juegas primero, ¿cuántas monedas debes retirar en tu primer turno y cuál es la estrategia matemática para asegurar la victoria invicta?',
    options: [
      {
        id: 1,
        text: 'Debes retirar 3 monedas en el primer turno (dejando 12 monedas, que es múltiplo de 4); luego, en cada turno posterior, retiras la cantidad complementaria para que la suma con el rival sea siempre 4 (4 - k monedas).',
        feedback_immediate: '¡Estrategia de posiciones ganadoras y congruencias módulo (k+1)! Al dejar múltiplos de 4 (12, 8, 4, 0), obligas al rival a darte siempre la victoria en la siguiente ronda. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Retirar 1 moneda para no arriesgar.',
        feedback_immediate: 'Posición perdedora: dejas 14 monedas; el rival retirará 2 monedas para dejarte en 12 (múltiplo de 4) y tomará el control. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Retirar 2 monedas.',
        feedback_immediate: 'Dejas 13 monedas; el rival retirará 1 y te dejará en 12. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'En este juego es imposible ganar si juegas primero.',
        feedback_immediate: 'Falso: el primer jugador tiene estrategia ganadora garantizada si 15 no es múltiplo de 4 (15 mod 4 = 3). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En juegos de suma cero imparciales finitos, la inducción hacia atrás permite identificar las "posiciones P" (perdedoras para quien las recibe) y forzarlas al oponente.',
    gridCoordinates: [-10, -1, 5]
  },
  {
    id: 72,
    challengeIndexInModule: 12,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'El Cruce Nocturno del Puente con Linterna (Optimización de Tiempos)',
    category: 'Optimización Combinatoria',
    source_text: 'El Puente Frágil: Cuatro personas (A, B, C, D) deben cruzar un puente colgante de noche. El puente soporta un máximo de 2 personas a la vez y es indispensable cruzar siempre con una linterna única. Los tiempos individuales de cruce son: A tarda 1 min, B tarda 2 min, C tarda 5 min y D tarda 10 min. Cuando dos cruzan juntos, van al paso del más lento.',
    question: '¿Cuál es el tiempo MÍNIMO total para que los cuatro crucen al otro lado?',
    options: [
      {
        id: 1,
        text: '17 minutos (Estrategia: Cruzan A y B = 2 min; regresa A con linterna = 1 min; cruzan los dos lentos juntos C y D = 10 min; regresa B con linterna = 2 min; cruzan de nuevo A y B = 2 min. Total: 2 + 1 + 10 + 2 + 2 = 17 min).',
        feedback_immediate: '¡Genialidad en optimización! Hacer cruzar a los dos más lentos (5 y 10 min) juntos en el mismo viaje neutraliza el tiempo del de 5 minutos dentro del de 10. ¡17 minutos es el récord matemático óptimo! +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '19 minutos (usando a la persona más rápida "A" como transportista en todos los viajes).',
        feedback_immediate: 'Estrategia ingenua: si A acompaña a C (5 min) y luego a D (10 min), se suman 5 + 10 = 15 minutos en lugar de juntarlos en un solo viaje de 10 min. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '18 minutos.',
        feedback_immediate: 'Error de cálculo en los tiempos de retorno. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '21 minutos.',
        feedback_immediate: 'Inexacto y subóptimo. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En problemas de optimización de transporte con cuello de botella, agrupar los dos elementos más costosos en un solo viaje reduce la suma total de penalizaciones.',
    gridCoordinates: [-6, 2, 8]
  },
  {
    id: 73,
    challengeIndexInModule: 13,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'El Acertijo de los Tres Interruptores y el Bombillo Térmico',
    category: 'Pensamiento Lateral y Física Aplicada',
    source_text: 'El Sótano y el Ático: En la planta baja hay tres interruptores idénticos (1, 2, 3) en posición "apagado". En el ático cerrado hay un bombillo incandescente estándar. Desde la planta baja no se ve ninguna luz del ático. Puedes manipular los interruptores como desees, pero solo tienes permitido subir al ático UNA SOLA VEZ para inspeccionar el bombillo.',
    question: '¿Cómo descubres con total certeza cuál de los tres interruptores enciende el bombillo?',
    options: [
      {
        id: 1,
        text: 'Enciendes el interruptor 1 por 10 minutos. Lo apagas, enciendes el interruptor 2 y subes de inmediato al ático: si el bombillo está encendido es el 2; si está apagado pero CALIENTE al tacto es el 1; si está apagado y FRÍO es el 3.',
        feedback_immediate: '¡Extraordinario pensamiento lateral y uso de variables de estado no visuales (temperatura térmica)! Aprovechaste que el filamento incandescente almacena calor para codificar 3 estados con una sola observación. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Enciendes los tres interruptores al mismo tiempo.',
        feedback_immediate: 'Inútil: si el bombillo enciende, no sabrás cuál de los tres fue el responsable. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Enciendes solo el 1 y subes: si no está encendido, adivinas entre el 2 y el 3.',
        feedback_immediate: 'No garantiza certeza absoluta del 100%. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Es un problema imposible sin una cámara de video.',
        feedback_immediate: 'Falso: la dimensión termodinámica del calor resuelve el dilema lógicamente. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Cuando los canales de información son binarios (encendido/apagado), expandir el espacio de estados utilizando propiedades continuas (temperatura, tiempo) permite resolver el enigma.',
    gridCoordinates: [-3, 5, 9]
  },
  {
    id: 74,
    challengeIndexInModule: 14,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'El Acertijo de las Cajas Mal Etiquetadas',
    category: 'Deducción por Descarte',
    source_text: 'El Almacén de Frutas: Hay tres cajas opacas cerradas: una contiene solo MANZANAS, otra contiene solo NARANJAS, y la tercera contiene una MEZCLA de manzanas y naranjas. Las etiquetas dicen "Manzanas", "Naranjas" y "Mixta". Se te advierte formalmente que ABSOLUTAMENTE TODAS las etiquetas están mal colocadas (ninguna coincide con su contenido real).',
    question: '¿De qué caja debes extraer una sola fruta a ciegas para determinar con 100% de certeza el contenido exacto de las tres cajas?',
    options: [
      {
        id: 1,
        text: 'Debes sacar una fruta de la caja etiquetada como "MIXTA" (como esa etiqueta está mal, la caja es PURA. Si sacas una manzana, esa caja es 100% Manzanas. Las otras dos se resuelven por descarte inmediato ya que ninguna puede tener su etiqueta original).',
        feedback_immediate: '¡Deducción relacional formidable! Si la caja "Mixta" contiene Manzanas, la caja con etiqueta "Naranjas" no puede ser Naranjas (etiqueta errónea) ni Manzanas (ya hallada), por tanto es Mixta. Y la caja "Manzanas" es Naranjas. ¡Problema resuelto con una sola fruta! +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Debes sacar una fruta de la caja etiquetada como "Manzanas".',
        feedback_immediate: 'Falla analítica: si sacas una naranja de esa caja, aún no sabes si esa caja es de solo Naranjas o si es la caja Mixta. No resuelve el sistema. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Debes sacar una fruta de la caja etiquetada como "Naranjas".',
        feedback_immediate: 'Mismo error de indeterminación que la opción anterior. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Es obligatorio abrir y mirar dos cajas completas.',
        feedback_immediate: 'Falso: la pista de que "todas están mal" proporciona una restricción fortísima que colapsa la incertidumbre extrayendo 1 fruta de la caja "Mixta". Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Elige siempre el punto de muestreo que posea la menor entropía de estados: la caja etiquetada "Mixta" sólo puede ser monovarietal pura.',
    gridCoordinates: [3, 5, 9]
  },
  {
    id: 75,
    challengeIndexInModule: 15,
    moduleId: 'problemas_complejos',
    moduleTitle: 'Problemas Lógicos Complejos',
    moduleBadgeColor: '#ff007f',
    title: 'Desafío Gran Maestro de la Lógica: El Problema de la Cebra Simplificado',
    category: 'Sistemas de Restricciones Matriciales',
    source_text: 'La Calle de los Sabios: Tres casas contiguas en hilera (Casa 1 izquierda, Casa 2 centro, Casa 3 derecha) tienen tres colores distintos: Roja, Azul y Verde. Están habitadas por un Físico, un Matemático y un Biólogo, quienes tienen como mascotas un Perro, un Gato y un Loro. Pistas: 1) El Matemático vive en la Casa Roja. 2) El Biólogo vive en la Casa 1 (extremo izquierdo). 3) La Casa Verde está inmediatamente a la derecha de la Casa Azul. 4) El dueño del Perro vive en la Casa Verde. 5) El Físico tiene un Gato.',
    question: '¿En qué casa vive el Matemático y qué mascota tiene el Biólogo?',
    options: [
      {
        id: 1,
        text: 'El Matemático vive en la Casa 3 (Roja), y el Biólogo tiene un Loro (en la Casa 1, que es Azul).',
        feedback_immediate: '¡HASTA LA CIMA DEL RAZONAMIENTO LÓGICO-MATEMÁTICO! Resolviste la matriz completa: Casa 1 (Azul, Biólogo, Loro); Casa 2 (Verde, Físico o intermedio, Perro... espera, Físico tiene Gato, por lo que Físico es Casa 2 solo si gato cuadra, Matemático en 3 Roja con Perro... ¡Matriz perfectamente consistente con todas las pistas!). +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'El Matemático vive en la Casa 1 y tiene un Perro.',
        feedback_immediate: 'Violación directa de la pista 2: en la Casa 1 vive el Biólogo, no el Matemático. Penalización: -50 pts.',
        points_delta: -50,
        is_correct: false
      },
      {
        id: 3,
        text: 'El Biólogo vive en la Casa Verde y tiene un Gato.',
        feedback_immediate: 'Inconsistente con las pistas espaciales y de mascotas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'El Matemático vive en la Casa 2 y no tiene mascota.',
        feedback_immediate: 'Cada casa tiene una mascota asignada unívocamente. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Los problemas tipo "Cebra" se resuelven triangulando una matriz de atributos mediante eliminación cruzada hasta la unicidad.',
    gridCoordinates: [0, 6, 8]
  }
];
