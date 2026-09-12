import { CifraChallenge } from '../types';

export const MODULE_1_CHALLENGES: CifraChallenge[] = [
  {
    id: 1,
    challengeIndexInModule: 1,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Filtrado de Datos Esenciales vs Superfluos',
    category: 'Decodificación de Enunciados',
    source_text: 'Enunciado: "Un autobús sale a las 06:00 de la mañana con 34 pasajeros uniformados de azul. En la primera parada descienden 12 pasajeros y suben 5. En la segunda parada, tras recorrer 18 kilómetros con lluvia, descienden 9 personas y suben 14. El conductor tiene 42 años de edad."',
    question: '¿Cuál es la pregunta matemática relevante que puede responderse con certeza con los datos numéricos y qué dato es totalmente superfluo?',
    options: [
      {
        id: 1,
        text: 'La cantidad final de pasajeros es 32; el color del uniforme, la lluvia, la hora y la edad del conductor son datos distractores irrelevantes.',
        feedback_immediate: '¡Excelente deducción analítica! Calculaste: 34 - 12 + 5 - 9 + 14 = 32 pasajeros. Supiste aislar los datos necesarios de los distractores contextuales. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'La cantidad final de pasajeros es 42, porque coincide exactamente con la edad del conductor.',
        feedback_immediate: 'Error de comprensión. Confundiste la edad del chofer (dato distractor) con la variable de pasajeros en tránsito. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'El autobús llegó con 28 pasajeros porque los 18 kilómetros recorridos reducen la capacidad útil.',
        feedback_immediate: 'Incorrecto. Los kilómetros recorridos corresponden a distancia física, no alteran el número de personas a bordo. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'No es posible calcular los pasajeros porque falta saber cuántos asientos azules tenía el autobús.',
        feedback_immediate: 'Falso. El enunciado indica el número de pasajeros que suben y bajan, lo cual es suficiente para determinar la cantidad final. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 El primer paso en resolución de problemas es separar la incógnita de los detalles narrativos decorativos.',
    financialLesson: '💡 El primer paso en resolución de problemas es separar la incógnita de los detalles narrativos decorativos.',
    gridCoordinates: [0, 0, -10]
  },
  {
    id: 2,
    challengeIndexInModule: 2,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Interpretación de "Al Menos Uno" vs "Exactamente Uno"',
    category: 'Cuantificadores Lógicos',
    source_text: 'Reglamento de Premiación: "Para obtener la mención honorífica en la feria científica, un equipo debe presentar al menos un proyecto de robótica y exactamente un prototipo ecológico sustentable."',
    question: 'Si el equipo "Alfa" presenta 2 proyectos de robótica y 2 prototipos ecológicos, ¿cumple con la condición de la mención?',
    options: [
      {
        id: 1,
        text: 'Sí, porque 2 es mayor que 1 en ambas categorías y superar el mínimo siempre es premiado.',
        feedback_immediate: 'Error de lectura lógica. La condición ecológica exigía "exactamente uno". Al presentar 2, violaron la restricción de igualdad estricta. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 2,
        text: 'No cumple, porque aunque satisface "al menos un proyecto de robótica" (2 ≥ 1), incumple "exactamente un prototipo ecológico" (presentó 2 en vez de 1).',
        feedback_immediate: '¡Precisión lectora impecable! Comprendiste la diferencia lógica estricta entre una cota mínima (≥1) y una igualdad exacta (=1). +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 3,
        text: 'Cumple parcialmente, por lo que el jurado debe promediar ambos proyectos sin descalificarlos.',
        feedback_immediate: 'Incorrecto. En lógica de condiciones conjuntas ("Y"), si una falla, toda la proposición es falsa. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'No cumple porque en robótica debía presentar estrictamente 1 solo proyecto.',
        feedback_immediate: 'Falso. "Al menos uno" significa 1 o más. En robótica sí cumplió; falló en la condición ecológica. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 "Al menos uno" establece un límite inferior (≥1); "Exactamente uno" fija una igualdad unívoca (=1).',
    gridCoordinates: [6, 2, -8]
  },
  {
    id: 3,
    challengeIndexInModule: 3,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Conjunción (Y) frente a Disyunción Inclusiva (O)',
    category: 'Conectores en Enunciados',
    source_text: 'Convocatoria de Beca: "Serán admitidos los postulantes que tengan promedio superior a 18 puntos O que hayan obtenido medalla en olimpiadas de matemáticas Y no posean sanciones disciplinarias."',
    question: 'Carlos tiene promedio 17 (no superior a 18), ganó medalla de oro en olimpiadas y no tiene sanciones. ¿Debe ser admitido?',
    options: [
      {
        id: 1,
        text: 'Sí, porque el conector "O" permite que clasifique por la segunda vía (medalla Y sin sanciones), a pesar de no tener promedio > 18.',
        feedback_immediate: '¡Lectura analítica brillante! Desglosaste la jerarquía de conectores: (Promedio > 18) O (Medalla Y Sin Sanciones). La segunda rama es Verdadera. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'No, porque tener promedio mayor a 18 es un requisito obligatorio e innegociable para todos.',
        feedback_immediate: 'Error. La regla usa la disyunción "O", lo que establece alternativas independientes de elegibilidad. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'No, porque el conector "Y" obliga a cumplir todas las condiciones mencionadas en el texto.',
        feedback_immediate: 'Incorrecto. El "Y" solo vincula la medalla con la ausencia de sanciones, no con el promedio. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Queda en lista de espera hasta que suba su promedio a 19 puntos.',
        feedback_immediate: 'Falso. Las normas no establecen listas de espera condicionales; el criterio lógico determina admisión directa. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La disyunción "P o Q" es verdadera si al menos una de las alternativas es verdadera.',
    gridCoordinates: [10, -1, -5]
  },
  {
    id: 4,
    challengeIndexInModule: 4,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Condición Necesaria ("Solo si") vs Suficiente ("Si")',
    category: 'Lógica Condicional',
    source_text: 'Manual de Laboratorio: "El reactor químico se activará SOLO SI la válvula de nitrógeno está abierta. Además, SI la temperatura supera los 90°C, la alarma sonará de inmediato."',
    question: 'Si observamos que la válvula de nitrógeno está abierta, ¿podemos asegurar al 100% que el reactor está activado?',
    options: [
      {
        id: 1,
        text: 'No podemos asegurarlo; abrir la válvula es una condición necesaria pero no suficiente para que el reactor se active.',
        feedback_immediate: '¡Extraordinaria agudeza lógica! "A solo si B" significa que sin B no hay A, pero tener B no garantiza automáticamente que A ocurra. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Sí, podemos asegurarlo porque la válvula abierta activa automáticamente todos los componentes.',
        feedback_immediate: 'Error común: confundir condición necesaria con suficiente. Que sea requisito obligatorio no significa que sea el único detonante. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Solo si la temperatura es menor a 90°C al mismo tiempo.',
        feedback_immediate: 'Falso. La temperatura condiciona la alarma, no la activación del reactor. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Depende de si la alarma sonó previamente en el laboratorio.',
        feedback_immediate: 'Incorrecto. La alarma es independiente de la condición de activación del reactor. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 "Solo si B" = B es condición necesaria (sin B no hay A). "Si B" = B es condición suficiente (con B basta para A).',
    gridCoordinates: [12, -4, 0]
  },
  {
    id: 5,
    challengeIndexInModule: 5,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Extracción de Variables en Problema de Reparto',
    category: 'Modelado Textual',
    source_text: 'Texto del Problema: "Tres brigadas de auxilio reciben un cargamento de raciones. La brigada Norte recibe el doble que la brigada Sur. La brigada Este recibe 15 raciones más que la brigada Sur. Si entre las tres recibieron 135 raciones en total..."',
    question: 'Si definimos a "x" como la cantidad de raciones de la brigada Sur, ¿cuál es la ecuación algebraica correcta que traduce el texto?',
    options: [
      {
        id: 1,
        text: '2x + (x + 15) + x = 135  →  (4x + 15 = 135)',
        feedback_immediate: '¡Traducción algebraica perfecta! Norte = 2x, Este = x + 15, Sur = x. Suma: 2x + x + 15 + x = 4x + 15 = 135. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '2x + 15x + x = 135  →  (18x = 135)',
        feedback_immediate: 'Error de comprensión. "15 más que Sur" significa suma (x + 15), no multiplicación (15x). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'x/2 + (x - 15) + x = 135',
        feedback_immediate: 'Incorrecto. Norte tiene el doble (2x), no la mitad (x/2). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '3x + 15 = 135',
        feedback_immediate: 'Incorrecto. Omitiste sumar el componente 2x de la brigada Norte (olvidaste una variable). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Traducir texto a álgebra requiere asignar una variable base y expresar las demás en función de ella con suma o producto exacto.',
    gridCoordinates: [10, -7, 4]
  },
  {
    id: 6,
    challengeIndexInModule: 6,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Detección de Ambigüedad en Promociones Comerciales',
    category: 'Análisis Crítico del Lenguaje',
    source_text: 'Letrero de Tienda: "Lleva 3 cuadernos por el precio de 2, y en la compra de tu segundo paquete de lápices obtén un 50% de descuento en ese segundo paquete."',
    question: 'Si un cliente compra exactamente 3 cuadernos de $4 cada uno y 2 paquetes de lápices de $6 cada uno, ¿cuánto debe pagar exactamente?',
    options: [
      {
        id: 1,
        text: 'Debe pagar $17 en total: $8 por los 3 cuadernos (paga 2 a $4 c/u) más $9 por los lápices ($6 el primero + $3 el segundo al 50%).',
        feedback_immediate: '¡Cálculo y comprensión sobresalientes! Decodificaste la oferta de cuadernos ($8) y la oferta específica al 2do paquete de lápices ($6 + $3 = $9). Total: $17. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Debe pagar $12, porque el 50% aplica sobre todo el total de la compra.',
        feedback_immediate: 'Lectura errónea. La cláusula especifica "en ese segundo paquete", no sobre toda la cuenta. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Debe pagar $20, porque la promoción solo era válida pagando en efectivo.',
        feedback_immediate: 'Incorrecto. Estás inventando una restricción que el texto original jamás mencionó. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Debe pagar $14, asumiendo que los lápices también eran 3 por 2.',
        feedback_immediate: 'Falso. Los lápices tenían una regla distinta (50% en el segundo paquete). Lee cada cláusula por separado. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Cada cláusula de una oferta o problema tiene un alcance delimitado; no generalices una regla a productos distintos.',
    gridCoordinates: [6, -9, 8]
  },
  {
    id: 7,
    challengeIndexInModule: 7,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Cuantificador Universal ("Todos") vs Existencial ("Algunos")',
    category: 'Lógica de Proposiciones',
    source_text: 'Informe de Calidad: "Premisa 1: Todos los microchips de la serie Z son de silicio. Premisa 2: Algunos componentes de la placa madre no son de silicio."',
    question: 'A partir de estas dos premisas verdaderas, ¿cuál conclusión es necesariamente CIERTA?',
    options: [
      {
        id: 1,
        text: 'Algunos componentes de la placa madre no son microchips de la serie Z.',
        feedback_immediate: '¡Deducción formal impecable! Si todos los chips Z son de silicio, cualquier componente que no sea de silicio es imposible que sea un chip Z. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Ningún componente de la placa madre es un microchip de la serie Z.',
        feedback_immediate: 'Generalización indebida. Solo "algunos" componentes no son de silicio; otros componentes sí podrían ser chips Z. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Todos los microchips de la serie Z están defectuosos.',
        feedback_immediate: 'Sin fundamento. El texto jamás habla de defectos ni fallas, solo de materiales. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'El silicio es el único material conductor de la placa.',
        feedback_immediate: 'Incorrecto. No se deduce de las premisas dadas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 De "Todo A es B" y "Existe C que no es B", se deduce necesariamente que "Ese C no es A".',
    gridCoordinates: [0, -10, 10]
  },
  {
    id: 8,
    challengeIndexInModule: 8,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Decodificación de Negaciones Múltiples',
    category: 'Comprensión Semántica',
    source_text: 'Declaración Jurada: "El testigo afirmó enfáticamente: \'No es verdad que ninguno de los tres sospechosos no haya estado presente en el lugar de los hechos.\'"',
    question: '¿Qué significa lógicamente la declaración del testigo en lenguaje directo y positivo?',
    options: [
      {
        id: 1,
        text: 'Al menos uno de los tres sospechosos sí estuvo presente en el lugar de los hechos.',
        feedback_immediate: '¡Maestría en decodificación de dobles negaciones! Negar que "ninguno no haya estado" afirma que al menos uno sí estuvo. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Los tres sospechosos son totalmente inocentes y estaban en otra ciudad.',
        feedback_immediate: 'Falso. Interpretaste la doble negación al revés. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Exactamente dos sospechosos estaban ausentes y uno dormía.',
        feedback_immediate: 'Incorrecto. La afirmación no especifica cantidades exactas más allá de la presencia mínima de al menos uno. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Ninguno de los sospechosos pisó el lugar de los hechos.',
        feedback_immediate: 'Incorrecto. El testigo negó expresamente esa posibilidad ("No es verdad que ninguno..."). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La negación de "ninguno no hizo X" equivale a "al menos uno sí hizo X". Las dobles negaciones se cancelan.',
    gridCoordinates: [-6, -9, 8]
  },
  {
    id: 9,
    challengeIndexInModule: 9,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Lectura Analítica de Tablas de Exclusión Mutua',
    category: 'Tablas Lógicas',
    source_text: 'Registro de Guardias: "Hay tres turnos (Mañana, Tarde, Noche) y tres guardias (Luis, Ana, Beto). Luis nunca trabaja de noche. Ana trabaja en el turno inmediatamente anterior al de Beto."',
    question: '¿Quién trabaja en el turno de la Noche?',
    options: [
      {
        id: 1,
        text: 'Beto trabaja en la Noche (y Ana en la Tarde, Luis en la Mañana).',
        feedback_immediate: '¡Deducción relacional perfecta! Como Ana va antes que Beto, las únicas parejas contiguas son (Mañana-Tarde) o (Tarde-Noche). Si Ana-Beto fuera Mañana-Tarde, Luis iría de Noche, pero Luis no puede. Así que Ana=Tarde, Beto=Noche, Luis=Mañana. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Luis trabaja en la Noche porque es el más experimentado.',
        feedback_immediate: 'Error gravísimo de lectura. El texto dice explícitamente: "Luis nunca trabaja de noche". Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Ana trabaja en la Noche.',
        feedback_immediate: 'Imposible. Si Ana estuviera de noche, Beto no podría trabajar "inmediatamente después" en los 3 turnos del día. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'El turno de la noche queda desierto según las pistas dadas.',
        feedback_immediate: 'Falso. Cada guardia cubre un turno distinto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En problemas de asignación con exclusión, prueba las combinaciones contiguas y descarta las que violen restricciones explícitas.',
    gridCoordinates: [-10, -7, 4]
  },
  {
    id: 10,
    challengeIndexInModule: 10,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Jerarquía Temporal y Ordenamiento Secuencial',
    category: 'Secuencias Temporales',
    source_text: 'Crónica del Evento: "El examen de Física se realizó antes que el de Química, pero después que el de Biología. El examen de Historia se realizó inmediatamente después que el de Química, y el de Matemáticas fue el primero de todos."',
    question: '¿Cuál fue el orden cronológico exacto de los cinco exámenes, del primero al último?',
    options: [
      {
        id: 1,
        text: '1° Matemáticas, 2° Biología, 3° Física, 4° Química, 5° Historia.',
        feedback_immediate: '¡Secuencia reconstruida con total maestría! Matemáticas fue primero. Biología antes que Física, Física antes que Química, e Historia tras Química. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '1° Biología, 2° Matemáticas, 3° Física, 4° Química, 5° Historia.',
        feedback_immediate: 'Incorrecto. El texto indica que Matemáticas fue el primero de todos, no Biología. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '1° Matemáticas, 2° Química, 3° Física, 4° Biología, 5° Historia.',
        feedback_immediate: 'Error de orden. Física fue antes que Química, no después. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '1° Historia, 2° Química, 3° Física, 4° Biología, 5° Matemáticas.',
        feedback_immediate: 'Invertiste el orden temporal completo. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Construye una línea temporal de izquierda a derecha ubicando primero los extremos conocidos y luego los eslabones intermedios.',
    gridCoordinates: [-12, -4, 0]
  },
  {
    id: 11,
    challengeIndexInModule: 11,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Inferencia de Premisas Implícitas',
    category: 'Inferencia Lógica',
    source_text: 'Informe Técnico: "Todos los servidores que alojan bases de datos cifradas cuentan con respaldo en disco óptico. Ningún servidor ubicado en la sala 4 cuenta con respaldo en disco óptico."',
    question: '¿Qué se puede afirmar legítimamente sobre los servidores de la sala 4?',
    options: [
      {
        id: 1,
        text: 'Ningún servidor de la sala 4 aloja bases de datos cifradas.',
        feedback_immediate: '¡Inferencia lógica perfecta! Si para tener datos cifrados es obligatorio tener disco óptico, y en la sala 4 nadie tiene disco óptico, es imposible que tengan datos cifrados. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Todos los servidores de la sala 4 están apagados o dañados.',
        feedback_immediate: 'Premisa no sustentada. El texto habla de respaldos y cifrado, no de estado de energía. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'La sala 4 aloja las bases de datos más importantes de la empresa.',
        feedback_immediate: 'Especulación infundada. No se deduce de las premisas lógicas dadas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Algunos servidores de la sala 4 tienen datos cifrados en memorias USB.',
        feedback_immediate: 'Incorrecto. La condición para datos cifrados exige disco óptico. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Si P implica Q, y no hay Q, entonces no puede haber P (Modus Tollens aplicado a categorías).',
    gridCoordinates: [-10, -1, -5]
  },
  {
    id: 12,
    challengeIndexInModule: 12,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Correlación Estadística vs Causalidad Lógica',
    category: 'Pensamiento Crítico',
    source_text: 'Estudio Escolar: "Se observó que en los meses de mayor consumo de helados en la cafetería escolar se registra también el mayor número de alumnos que usan protector solar en el recreo."',
    question: '¿Cuál es la interpretación lógica rigurosa de este hallazgo?',
    options: [
      {
        id: 1,
        text: 'Ambas variables están correlacionadas debido a una tercera variable común: el calor y la radiación solar del verano; comer helado no causa usar protector.',
        feedback_immediate: '¡Pensamiento científico de alto nivel! Supiste distinguir correlación de causalidad identificando la variable confusora climática. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Comer helado produce quemaduras solares que obligan a los alumnos a comprar protector.',
        feedback_immediate: 'Falacia causal absurda. Comer helado no genera daño solar en la piel. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'El protector solar contiene ingredientes que aumentan el apetito por productos dulces.',
        feedback_immediate: 'Falso. Atribuyes una relación causa-efecto biológicamente ilógica sin evidencia. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'La cafetería debería prohibir los helados para que los estudiantes no se expongan al sol.',
        feedback_immediate: 'Conclusión falaz y no relacionada con el rigor lógico del análisis. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Correlación no implica causalidad: que dos eventos ocurran juntos suele deberse a un factor subyacente común.',
    gridCoordinates: [-6, 2, -8]
  },
  {
    id: 13,
    challengeIndexInModule: 13,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Interpretación de Proposiciones con "A Menos Que"',
    category: 'Condicionales Complejos',
    source_text: 'Instrucción de Vuelo: "El dron de reconocimiento despegará a las 08:00 a menos que la velocidad del viento supere los 35 km/h o la visibilidad sea inferior a 500 metros."',
    question: 'A las 08:00, el viento sopla a 28 km/h y la visibilidad es de 800 metros. ¿Qué debe ocurrir según la instrucción?',
    options: [
      {
        id: 1,
        text: 'El dron debe despegar, porque ninguna de las dos condiciones de cancelación se cumplió (28 ≤ 35 y 800 ≥ 500).',
        feedback_immediate: '¡Excelente interpretación de "a menos que"! Esta expresión introduce excepciones que impiden el evento principal; al no haber excepción, el despegue procede. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'El dron debe quedarse en tierra porque 28 km/h es una velocidad muy peligrosa para cualquier dron.',
        feedback_immediate: 'Error. La regla fijó el límite en 35 km/h, no en 28 km/h. Atente estrictamente al texto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'El despegue debe aplazarse hasta que el viento sea exactamente 0 km/h.',
        feedback_immediate: 'Incorrecto. Estás inventando una exigencia que la norma jamás estipuló. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Solo puede despegar si la visibilidad supera los 1000 metros.',
        feedback_immediate: 'Falso. El umbral mínimo requerido era 500 metros (y hay 800 metros). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 "Hacer X a menos que Y" significa: si ocurre Y no se hace X; si no ocurre Y, X debe realizarse obligatoriamente.',
    gridCoordinates: [-3, 5, -9]
  },
  {
    id: 14,
    challengeIndexInModule: 14,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Extracción de la Conclusión Necesaria en Argumentos',
    category: 'Argumentación Lógica',
    source_text: 'Discurso: "Todo número entero divisible por 6 es necesariamente divisible por 2 y por 3. El número N no es divisible por 3."',
    question: '¿Cuál de las siguientes afirmaciones es forzosamente VERDADERA respecto a N?',
    options: [
      {
        id: 1,
        text: 'N no es divisible por 6.',
        feedback_immediate: '¡Conclusión deductiva ineludible! Si ser divisible por 6 exige ser divisible por 3, y N no es divisible por 3, N jamás podrá ser divisible por 6. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'N es un número impar en todos los casos.',
        feedback_immediate: 'Falso contraejemplo: el número 4 o 8 no son divisibles por 3 y sin embargo son pares. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'N es un número negativo menor que cero.',
        feedback_immediate: 'Sin sentido lógico. La divisibilidad por 3 aplica tanto a positivos como negativos. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'N es un número primo.',
        feedback_immediate: 'Falso. N podría ser 10, que no es divisible por 3 ni tampoco es primo (es compuesto). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Si la condición necesaria falla, la propiedad principal queda descartada por completo.',
    gridCoordinates: [3, 5, -9]
  },
  {
    id: 15,
    challengeIndexInModule: 15,
    moduleId: 'comprension_lectora',
    moduleTitle: 'Comprensión Lectora',
    moduleBadgeColor: '#00f3ff',
    title: 'Desafío Maestro: Protocolo de Seguridad con Restricciones Triples',
    category: 'Síntesis y Decodificación Compleja',
    source_text: 'Protocolo de Bóveda: "Para abrir la compuerta se requieren tres llaves (Roja, Verde, Azul) en tres cerraduras (1, 2, 3). Restricciones: 1) La llave Verde no puede ir en la cerradura 2. 2) La llave Roja debe estar en una cerradura de número mayor que la llave Azul. 3) La cerradura 1 no puede contener la llave Azul."',
    question: '¿En qué cerradura (1, 2, 3) debe insertarse cada llave para abrir la compuerta respetando todas las reglas?',
    options: [
      {
        id: 1,
        text: 'Cerradura 1: Verde | Cerradura 2: Azul | Cerradura 3: Roja.',
        feedback_immediate: '¡Brillante resolución del desafío maestro de comprensión! Verificamos: 1) Verde en 1 (no en 2) ✓; 2) Roja en 3 > Azul en 2 ✓; 3) Azul en 2 (no en 1) ✓. Todas las restricciones se cumplen a la perfección. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Cerradura 1: Azul | Cerradura 2: Verde | Cerradura 3: Roja.',
        feedback_immediate: 'Viola dos restricciones: la regla 1 (Verde no puede ir en 2) y la regla 3 (Cerradura 1 no puede tener Azul). Penalización: -50 pts.',
        points_delta: -50,
        is_correct: false
      },
      {
        id: 3,
        text: 'Cerradura 1: Roja | Cerradura 2: Azul | Cerradura 3: Verde.',
        feedback_immediate: 'Viola la regla 2: Roja (en 1) no tendría número mayor que Azul (en 2). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Cerradura 1: Verde | Cerradura 2: Roja | Cerradura 3: Azul.',
        feedback_immediate: 'Viola la regla 2: Roja está en 2 y Azul en 3, por lo que Roja no tiene número mayor que Azul. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La resolución de sistemas de restricciones múltiples se logra evaluando una a una las condiciones hasta que una sola permutación sea consistente.',
    gridCoordinates: [0, 6, -8]
  }
];
