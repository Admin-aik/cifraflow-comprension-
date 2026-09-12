import { CifraChallenge } from '../types';

export const MODULE_3_CHALLENGES: CifraChallenge[] = [
  {
    id: 31,
    challengeIndexInModule: 1,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Regla del Modus Ponens (Modus Ponendo Ponens)',
    category: 'Reglas de Inferencia',
    source_text: 'Premisa Mayor: "Si un vehículo es propulsado por un motor 100% eléctrico, entonces no emite gases de combustión fósil." Premisa Menor: "El prototipo Solar-X es propulsado por un motor 100% eléctrico."',
    question: '¿Qué conclusión se deriva de manera deductiva e indiscutible?',
    options: [
      {
        id: 1,
        text: 'El prototipo Solar-X no emite gases de combustión fósil (Estructura: Si P entonces Q; se da P; por lo tanto se da Q).',
        feedback_immediate: '¡Inferencia impecable por Modus Ponens! Si el antecedente es verdadero, el consecuente se cumple con necesidad lógica absoluta. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'El prototipo Solar-X es el vehículo más veloz del planeta.',
        feedback_immediate: 'Falacia de non sequitur. Las premisas no hablan de velocidad ni potencia. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Todos los vehículos que no emiten gases son prototipos Solar-X.',
        feedback_immediate: 'Error de inversión lógica: confundiste el antecedente con el consecuente. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'El prototipo emite una cantidad mínima de humo invisible.',
        feedback_immediate: 'Contradice la premisa categórica: "no emite gases". Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 El Modus Ponens es la regla fundamental de deducción: [ (P → Q) ∧ P ] ⊢ Q.',
    gridCoordinates: [3, 0, -8]
  },
  {
    id: 32,
    challengeIndexInModule: 2,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Falacia Formal de Afirmación del Consecuente',
    category: 'Falacias Formales',
    source_text: 'Argumento: "Regla: Si llueve torrencialmente en la ciudad, el pavimento de la avenida central se moja. Hecho observado: El pavimento de la avenida central está completamente mojado."',
    question: '¿Por qué concluir con certeza que "Ha llovido torrencialmente" constituye una falacia formal?',
    options: [
      {
        id: 1,
        text: 'Porque el pavimento pudo mojarse por otras causas distintas a la lluvia (un camión cisterna de limpieza, la rotura de una tubería o el riego de jardines).',
        feedback_immediate: '¡Detección de falacia magistral! La lluvia es condición suficiente para mojar la calle, pero no necesaria ni única. Afirmar el consecuente no prueba el antecedente. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Porque nunca llueve en la ciudad según las previsiones meteorológicas.',
        feedback_immediate: 'Premisa fáctica externa no pertinente al análisis formal del argumento. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Porque la lluvia siempre seca el asfalto en pocos minutos.',
        feedback_immediate: 'Absurdo físico y lógico. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'No es ninguna falacia; es una deducción 100% rigurosa en todos los casos.',
        feedback_immediate: 'Falso. Es una de las falacias formales más célebres de la lógica aristotélica y proposicional. Penalización: -50 pts.',
        points_delta: -50,
        is_correct: false
      }
    ],
    logicLesson: '💡 De (P → Q) y Q, NO se deduce P. Afirmar el consecuente es una falacia formal.',
    gridCoordinates: [8, 3, -6]
  },
  {
    id: 33,
    challengeIndexInModule: 3,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Regla del Modus Tollens (Modus Tollendo Tollens)',
    category: 'Reglas de Inferencia',
    source_text: 'Premisa Condicional: "Si la alarma sísmica de la central detecta vibración tectónica, el faro giratorio emite destellos rojos continuos." Observación: "El faro giratorio NO está emitiendo destellos rojos."',
    question: '¿Qué se concluye con necesidad lógica estricta?',
    options: [
      {
        id: 1,
        text: 'La alarma sísmica de la central no ha detectado vibración tectónica (Estructura: Si P entonces Q; NO Q; por lo tanto NO P).',
        feedback_immediate: '¡Deducción perfecta por Modus Tollens! Al negarse el consecuente, el antecedente queda irrevocablemente descartado. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Un terremoto de gran magnitud está ocurriendo en este momento.',
        feedback_immediate: 'Contradicción flagrante con las premisas lógicas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'El faro giratorio se quedó sin suministro de energía eléctrica.',
        feedback_immediate: 'Especulación no contemplada en las premisas formales del sistema. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'La alarma emitió un sonido agudo sin luz.',
        feedback_immediate: 'Sin sustento lógico en el texto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Modus Tollens: [ (P → Q) ∧ ¬Q ] ⊢ ¬P. Negar el consecuente niega necesariamente el antecedente.',
    gridCoordinates: [11, 0, -3]
  },
  {
    id: 34,
    challengeIndexInModule: 4,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Falacia de Negación del Antecedente',
    category: 'Falacias Formales',
    source_text: 'Razonamiento: "Si una persona nace en Caracas, entonces es venezolana por nacimiento. Pedro NO nació en Caracas."',
    question: '¿Cuál de las siguientes conclusiones incurre en la falacia de negación del antecedente y por qué es inválida?',
    options: [
      {
        id: 1,
        text: '"Pedro no es venezolano por nacimiento" es inválida porque Pedro pudo nacer en Maracaibo, Valencia o cualquier otra ciudad de Venezuela.',
        feedback_immediate: '¡Brillante detección de la falacia! Negar el antecedente no permite negar el consecuente cuando existen múltiples vías para alcanzarlo. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '"Pedro es caraqueño honorario" es la conclusión válida.',
        feedback_immediate: 'Falso. El texto aclara que Pedro no nació en Caracas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '"Pedro necesariamente nació en el extranjero".',
        feedback_immediate: 'Incurre en el mismo error: ignora que Venezuela tiene más estados además de Caracas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'La conclusión "Pedro no es venezolano" es 100% irrefutable en lógica.',
        feedback_immediate: 'Error lógico grave: confunde condición suficiente con exclusiva. Penalización: -50 pts.',
        points_delta: -50,
        is_correct: false
      }
    ],
    logicLesson: '💡 De (P → Q) y ¬P, NO se deduce ¬Q. Negar el antecedente es una falacia formal.',
    gridCoordinates: [11, -4, 2]
  },
  {
    id: 35,
    challengeIndexInModule: 5,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Silogismo Categórico Clásico (Figura I - Modo Bárbara)',
    category: 'Silogística Aristotélica',
    source_text: 'Premisa Mayor: "Todos los polígonos regulares son figuras geométricas con lados congruentes." Premisa Menor: "Todos los hexágonos regulares son polígonos regulares."',
    question: '¿Cuál es la conclusión silogística válida que conecta el término menor con el mayor?',
    options: [
      {
        id: 1,
        text: 'Todos los hexágonos regulares son figuras geométricas con lados congruentes (Todo M es P, Todo S es M ⊢ Todo S es P).',
        feedback_immediate: '¡Silogismo Bárbara perfecto! El término medio "polígonos regulares" vincula el sujeto "hexágonos regulares" con el predicado universal. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Algunas figuras con lados congruentes no son polígonos regulares.',
        feedback_immediate: 'Premisa no deducible del silogismo. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Solo los hexágonos tienen lados congruentes.',
        feedback_immediate: 'Falso. Los triángulos equiláteros y cuadrados también son regulares. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Ningún hexágono regular tiene lados iguales.',
        feedback_immediate: 'Contradicción directa con las premisas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En el silogismo clásico Bárbara (AAA-1), la universalidad del término mayor se transfiere al término menor a través del término medio.',
    gridCoordinates: [8, -7, 6]
  },
  {
    id: 36,
    challengeIndexInModule: 6,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Leyes de De Morgan: Negación de una Conjunción',
    category: 'Álgebra de Proposiciones',
    source_text: 'Proposición Original: "El servidor de pagos está en línea Y la base de datos está sincronizada."',
    question: '¿Cuál es la negación lógica exacta de esta afirmación según las Leyes de De Morgan?',
    options: [
      {
        id: 1,
        text: 'El servidor de pagos NO está en línea O la base de datos NO está sincronizada: ¬(P ∧ Q) ≡ (¬P ∨ ¬Q).',
        feedback_immediate: '¡Leyes de De Morgan aplicadas a la perfección! Para que una afirmación con "Y" sea falsa, basta con que al menos una de sus partes falle. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'El servidor de pagos NO está en línea Y la base de datos NO está sincronizada.',
        feedback_immediate: 'Error clásico: negar una conjunción no exige que ambas partes fallen simultáneamente; basta con que una falle. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'El servidor está en línea pero la base de datos se borró.',
        feedback_immediate: 'Inexacto y arbitrario. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'El servidor funciona solo los fines de semana.',
        feedback_immediate: 'Sin fundamento lógico formal. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Primera Ley de De Morgan: ¬(P ∧ Q) ≡ (¬P ∨ ¬Q). Negar "ambos a la vez" equivale a "al menos uno de los dos no es".',
    gridCoordinates: [4, -9, 9]
  },
  {
    id: 37,
    challengeIndexInModule: 7,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Negación Lógica de Cuantificadores Universales',
    category: 'Lógica de Predicados',
    source_text: 'Enunciado a Refutar: "Todos los números primos son números impares."',
    question: '¿Cuál es la negación lógica formal y qué elemento concreto demuestra su falsedad?',
    options: [
      {
        id: 1,
        text: '"Existe al menos un número primo que NO es impar", lo cual es verdadero gracias al contraejemplo del número 2 (es primo y es par).',
        feedback_immediate: '¡Precisión lógica extraordinaria! Para derribar una afirmación universal "Todos son X" no se requiere demostrar que "Ninguno es X", basta con un solo contraejemplo (el 2). +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '"Ningún número primo es impar" es la negación exacta.',
        feedback_immediate: 'Error de cuantificación: "Ninguno" es el opuesto contrario, no la negación contradictoria. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Todos los números primos son pares.',
        feedback_immediate: 'Falso. Casi todos los primos son impares (3, 5, 7, 11...). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'No existen los números primos en la aritmética.',
        feedback_immediate: 'Absurdo. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La negación de ∀x P(x) es ∃x ¬P(x). Un solo contraejemplo refuta un enunciado universal.',
    gridCoordinates: [0, -10, 10]
  },
  {
    id: 38,
    challengeIndexInModule: 8,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'El Acertijo Clásico de los Dos Guardianes (Verdad vs Mentira)',
    category: 'Lógica de Metaconocimiento',
    source_text: 'Enigma Clásico: Llegas a una bifurcación con dos puertas (una lleva a la Libertad, otra al Abismo) custodiadas por dos guardianes. Sabes que uno de ellos SIEMPRE dice la verdad y el otro SIEMPRE miente, pero no sabes cuál es cuál. Solo puedes hacerle UNA sola pregunta a uno de los dos.',
    question: '¿Qué pregunta debes formular para identificar con total certeza cuál es la puerta de la Libertad?',
    options: [
      {
        id: 1,
        text: '"Si le preguntara al OTRO guardián cuál es la puerta de la Libertad, ¿qué puerta me señalaría?" (Y elegir la puerta contraria a la que responda).',
        feedback_immediate: '¡Magistral resolución del acertijo lógico más célebre del mundo! Si le preguntas al veraz, te dirá la mentira del otro (señala el abismo). Si le preguntas al mentiroso, mentirá sobre la verdad del otro (señala el abismo). En ambos casos señalan el abismo; por ende, tomas la otra. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '"¿Tú eres el guardián que siempre dice la verdad?"',
        feedback_immediate: 'Pregunta inútil: ambos guardianes responderán "SÍ" (el sincero porque es verdad, y el mentiroso mintiendo). No aporta información. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '"¿Cuál es la puerta de la Libertad?" formulada al azar.',
        feedback_immediate: 'Inservible: si le preguntas al mentiroso te enviará al abismo y no sabrás si te engañó. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '"¿Cuánto es 2 + 2?"',
        feedback_immediate: 'Descubrirías quién miente, pero habrías gastado tu única pregunta y te quedarías sin saber qué puerta tomar. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Componer dos funciones de verdad donde una es la negación ¬f(x) produce siempre una falsedad sistemática: V ∧ M = M; M ∧ V = M.',
    gridCoordinates: [-4, -9, 9]
  },
  {
    id: 39,
    challengeIndexInModule: 9,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Contrarrecíproca y Equivalencia Lógica',
    category: 'Equivalencias Proposicionales',
    source_text: 'Teorema Numérico: "Si un número entero N termina en la cifra 0, entonces N es divisible por 5."',
    question: '¿Cuál es la afirmación contrarrecíproca y cuál es su valor de verdad respecto a la afirmación original?',
    options: [
      {
        id: 1,
        text: '"Si N NO es divisible por 5, entonces N NO termina en 0", y es lógicamente equivalente (tienen idéntico valor de verdad).',
        feedback_immediate: '¡Equivalencia lógica indiscutible! La contrarrecíproca (¬Q → ¬P) siempre tiene el mismo valor de verdad que el condicional directo (P → Q). +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '"Si N es divisible por 5, entonces termina en 0".',
        feedback_immediate: 'Esa es la recíproca (Q → P), y de hecho es falsa (por ejemplo, el número 15 es divisible por 5 y no termina en 0). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '"Si N no termina en 0, no es divisible por 5".',
        feedback_immediate: 'Esa es la inversa (¬P → ¬Q), que no es equivalente a la proposición original. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'La contrarrecíproca es siempre falsa por definición.',
        feedback_immediate: 'Error teórico elemental. Un condicional y su contrarrecíproca son tautológicamente idénticos: (P → Q) ≡ (¬Q → ¬P). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La contrarrecíproca (¬Q → ¬P) es la única transformación condicional directamente equivalente a (P → Q).',
    gridCoordinates: [-8, -7, 6]
  },
  {
    id: 40,
    challengeIndexInModule: 10,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Detección de la Falacia del Hombre de Paja',
    category: 'Falacias Informales',
    source_text: 'Debate Científico: Investigador A propone: "Deberíamos aumentar la inversión en energías solares y eólicas para diversificar la matriz energética". Contrincante B responde: "Mi oponente quiere desmantelar de inmediato todas las hidroeléctricas del país y dejar los hospitales a oscuras sin electricidad".',
    question: '¿Por qué la respuesta del Contrincante B constituye una Falacia del Hombre de Paja?',
    options: [
      {
        id: 1,
        text: 'Porque distorsiona y exagera radicalmente la propuesta moderada del Investigador A para crear una versión ficticia y absurda que resulte fácil de atacar.',
        feedback_immediate: '¡Identificación impecable del Hombre de Paja! En lugar de debatir la diversificación energética, inventó un ataque a hospitales que A jamás sugirió. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Porque la energía solar es la única energía viable en el planeta.',
        feedback_immediate: 'Argumento irrelevante que no analiza la estructura de la falacia lógica. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Porque el Investigador A no tiene título de ingeniería.',
        feedback_immediate: 'Esa sería una falacia Ad Hominem, no el Hombre de Paja analizado. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'No hay ninguna falacia; es un resumen fiel y literal de la propuesta.',
        feedback_immediate: 'Falso. Investigador A jamás propuso apagar hospitales ni destruir centrales existentes. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La Falacia del Hombre de Paja consiste en caricaturizar el argumento del oponente para refutar la caricatura en lugar de la tesis real.',
    gridCoordinates: [-11, -4, 2]
  },
  {
    id: 41,
    challengeIndexInModule: 11,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Silogismo Disyuntivo (Modus Tollendo Ponens)',
    category: 'Reglas de Inferencia',
    source_text: 'Diagnóstico Informático: "La falla en el inicio del sistema se originó O por corrupción de archivos del sector de arranque O por daño físico en el disco duro. Los análisis de hardware confirmaron que el disco duro no tiene ningún daño físico."',
    question: '¿Qué conclusión se obtiene mediante el Silogismo Disyuntivo?',
    options: [
      {
        id: 1,
        text: 'La falla se originó por corrupción de archivos del sector de arranque: [ (P ∨ Q) ∧ ¬Q ] ⊢ P.',
        feedback_immediate: '¡Deducción disyuntiva perfecta! Si se plantea una disyunción de opciones y una se descarta con evidencia, la otra opción es necesariamente verdadera. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'El monitor y el teclado están averiados.',
        feedback_immediate: 'Sin relación con las premisas evaluadas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'No es posible saber la causa sin comprar un equipo nuevo.',
        feedback_immediate: 'Falso. Las premisas lógicas delimitaron las causas y permiten resolver el diagnóstico por descarte estricto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'El disco duro está dañado a pesar de los análisis.',
        feedback_immediate: 'Contradice la premisa fáctica dada. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En el Silogismo Disyuntivo, eliminar una rama de una disyunción afirma obligatoriamente la restante.',
    gridCoordinates: [-11, 0, -3]
  },
  {
    id: 42,
    challengeIndexInModule: 12,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Dilema Constructivo Complejo',
    category: 'Formas Lógicas Avanzadas',
    source_text: 'Premisas Estratégicas: 1) Si tomamos la ruta de la montaña (P), tendremos demoras por niebla (Q). 2) Si tomamos la ruta costera (R), pagaremos peajes elevados (S). 3) Por imperativo del destino, o tomamos la ruta de la montaña o tomamos la ruta costera (P ∨ R).',
    question: '¿Cuál es la conclusión formal válida derivada del Dilema Constructivo?',
    options: [
      {
        id: 1,
        text: 'O tendremos demoras por niebla o pagaremos peajes elevados: (Q ∨ S).',
        feedback_immediate: '¡Dilema constructivo resuelto con precisión! Al afirmar la disyunción de los antecedentes (P ∨ R), se concluye forzosamente la disyunción de sus consecuentes (Q ∨ S). +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Llegaremos a tiempo sin gastar dinero en peajes.',
        feedback_immediate: 'Falso optimismo sin sustento lógico formal. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Tendremos demoras por niebla Y además pagaremos peajes al mismo tiempo.',
        feedback_immediate: 'Error de conector: las rutas eran alternativas excluyentes ("O"), por lo que la conclusión es una disyunción, no una conjunción simultánea. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'El viaje debe suspenderse por causas de fuerza mayor.',
        feedback_immediate: 'No se deduce de la estructura lógica del argumento. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Dilema Constructivo: [ (P → Q) ∧ (R → S) ∧ (P ∨ R) ] ⊢ (Q ∨ S).',
    gridCoordinates: [-8, 3, -6]
  },
  {
    id: 43,
    challengeIndexInModule: 13,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Falacia de Falso Dilema (Falsa Dicotomía)',
    category: 'Falacias de Presunción',
    source_text: 'Declaración: "En el debate de arquitectura del software, el líder técnico afirmó: \'O adoptamos esta tecnología propietaria de inmediato, o nuestro proyecto fracasará estrepitosamente. No hay término medio.\'"',
    question: '¿Cuál es la falla de razonamiento en esta afirmación?',
    options: [
      {
        id: 1,
        text: 'Falsa Dicotomía: reduce arbitrariamente la situación a dos extremos irreconciliables, ocultando que existen múltiples alternativas viables (código abierto, soluciones híbridas o desarrollo propio).',
        feedback_immediate: '¡Excelente pensamiento crítico! Desarmaste la falsa dicotomía evidenciando el espectro de alternativas no consideradas. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'El líder técnico tiene toda la razón porque la tecnología propietaria siempre triunfa.',
        feedback_immediate: 'Dogmatismo que valida una falacia sin análisis crítico. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Es una falacia de petición de principio.',
        feedback_immediate: 'Incorrecto: no es circularidad argumentativa, sino eliminación tramposa de opciones intermedias. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'El proyecto ya fracasó antes de iniciar.',
        feedback_immediate: 'Conclusión infundada. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 El Falso Dilema fuerza al interlocutor a elegir entre dos opciones extremas cuando en realidad existe un abanico más amplio.',
    gridCoordinates: [-3, 0, -8]
  },
  {
    id: 44,
    challengeIndexInModule: 14,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Demostración por Reducción al Absurdo (Reductio ad Absurdum)',
    category: 'Métodos de Demostración',
    source_text: 'Técnica Matemática: Deseamos demostrar formalmente la proposición P: "No existe un número entero positivo mayor que todos los demás enteros". Para demostrarlo por Reducción al Absurdo, ¿cuál es el primer paso metodológico indispensable?',
    question: '¿Cómo se inicia correctamente una prueba por reducción al absurdo y qué se busca generar?',
    options: [
      {
        id: 1,
        text: 'Asumir provisionalmente lo contrario (que SÍ existe un entero máximo M), y deducir una contradicción lógica demostrando que M + 1 es un entero mayor que M, lo que refuta la suposición.',
        feedback_immediate: '¡Maestría en reducción al absurdo! Suponer la negación ¬P conduce directamente a que M+1 > M, contradiciendo que M era el máximo. Al ser imposible la contradicción, P queda probada. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Buscar todos los números enteros en una lista infinita hasta cansarse.',
        feedback_immediate: 'Imposible por infinitud del conjunto; no es un método matemático formal. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Aceptar la proposición sin pruebas porque parece intuitiva.',
        feedback_immediate: 'La intuición no reemplaza la demostración deductiva rigurosa. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Probar solo con números impares.',
        feedback_immediate: 'Incompleto y no aborda el método de reducción al absurdo. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Reducción al Absurdo: Para probar P, asume ¬P. Si de ¬P se deriva una contradicción (Q ∧ ¬Q), entonces ¬P es falsa y P es verdadera.',
    gridCoordinates: [0, 5, -8]
  },
  {
    id: 45,
    challengeIndexInModule: 15,
    moduleId: 'logica_deductiva',
    moduleTitle: 'Lógica Deductiva & Silogismos',
    moduleBadgeColor: '#34d399',
    title: 'Desafío Maestro: El Caso del Testigo Único Veraz',
    category: 'Deducción Compleja y Verosimilitud',
    source_text: 'Caso Policial: Cuatro sospechosos (Andrés, Bruno, César y Daniel) declaran sobre el robo de una joya. Se sabe con certeza absoluta que EXACTAMENTE UNO de ellos dice la verdad y los otros tres mienten. Declaraciones: Andrés: "César se robó la joya". Bruno: "Yo no me robé la joya". César: "Daniel se robó la joya". Daniel: "César está mintiendo".',
    question: '¿Quién dice la verdad y quién fue el verdadero culpable de robar la joya?',
    options: [
      {
        id: 1,
        text: 'Daniel dice la verdad y el culpable fue Bruno (César y Daniel se contradicen, por lo que uno de los dos debe decir la verdad; como solo hay un veraz, Andrés y Bruno mienten; si Bruno miente al decir "yo no fui", ¡Bruno fue el culpable!).',
        feedback_immediate: '¡Brillante resolución del desafío de lógica deductiva superior! Como César y Daniel tienen proposiciones opuestas (P y ¬P), una es forzosamente Verdadera y la otra Falsa. Eso agota el único veraz. Por tanto Bruno miente: si Bruno miente al decir "yo no fui", el ladrón es Bruno. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Andrés dice la verdad y el culpable fue César.',
        feedback_immediate: 'Contradicción: Si Andrés dijera la verdad, Bruno también diría la verdad (porque Bruno no fue), habiendo 2 veraces (imposible). Penalización: -50 pts.',
        points_delta: -50,
        is_correct: false
      },
      {
        id: 3,
        text: 'Bruno dice la verdad y el culpable fue Daniel.',
        feedback_immediate: 'Inconsistente: dejaría a César y Daniel como ambos mentirosos, pero sus afirmaciones son contradictorias entre sí. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'César dice la verdad y el culpable fue Andrés.',
        feedback_immediate: 'Inconsistencia lógica con las declaraciones cruzadas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En problemas de verdad y mentira, identifica primero las proposiciones contradictorias (P y ¬P): una de ellas contiene obligatoriamente la verdad.',
    gridCoordinates: [0, -5, -8]
  }
];
