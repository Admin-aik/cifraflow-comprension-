import { CifraChallenge } from '../types';

export const MODULE_2_CHALLENGES: CifraChallenge[] = [
  {
    id: 16,
    challengeIndexInModule: 1,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Regla de Tres Inversa: Rendimiento y Tiempo',
    category: 'Proporcionalidad Inversa',
    source_text: 'Caso Operativo: Un equipo de 6 desarrolladores de software tarda exactamente 12 días en programar un módulo de procesamiento de datos, trabajando todos al mismo ritmo constante.',
    question: 'Si se incorporan 3 desarrolladores con la misma capacidad (total 9 desarrolladores), ¿cuántos días tardarán en completar el mismo trabajo?',
    options: [
      {
        id: 1,
        text: '8 días (a más trabajadores corresponde menos tiempo: 6 × 12 = 9 × Días  →  72 / 9 = 8 días).',
        feedback_immediate: '¡Cálculo de proporcionalidad inversa exacto! Como el producto de obreros por días es constante (6 × 12 = 72 jornadas-persona), 72 / 9 = 8 días. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '18 días (aplicando regla de tres directa: 12 × 9 / 6 = 18 días).',
        feedback_immediate: 'Error clásico: aplicaste regla de tres directa. ¡Más personas no tardan más tiempo, tardan menos! Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '9 días exactos por promedio simple.',
        feedback_immediate: 'Incorrecto. No responde a la relación matemática de magnitudes inversas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '4 días, porque 9 es el triple de 3.',
        feedback_immediate: 'Falso. Error aritmético en el cálculo. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En magnitudes inversamente proporcionales, el producto entre las dos variables permanece constante (A × B = constante).',
    gridCoordinates: [2, 0, -9]
  },
  {
    id: 17,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Porcentajes Sucesivos: El Mito del Retorno a Cero',
    category: 'Aritmética Porcentual',
    source_text: 'Caso de Precios: Un dispositivo tecnológico tiene un precio inicial de $100. Debido a la alta demanda su precio aumenta un 20%. Posteriormente, en una temporada de liquidación, la tienda aplica un 20% de descuento sobre el nuevo precio ya incrementado.',
    question: '¿Cuál es el precio final del dispositivo y por qué no volvió a los $100 iniciales?',
    options: [
      {
        id: 1,
        text: 'El precio final es $96. El 20% de descuento se calculó sobre la base de $120 ($24 de rebaja), resultando en $120 - $24 = $96.',
        feedback_immediate: '¡Excelente razonamiento porcentual! Demostraste que los porcentajes sucesivos no se anulan algebraicamente porque la base de cálculo cambia. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'El precio final es exactamente $100, porque +20% y -20% se cancelan mutuamente (20 - 20 = 0).',
        feedback_immediate: 'La trampa más común en porcentajes. El descuento del 20% no se aplicó sobre $100, sino sobre $120. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'El precio final es $104 debido al margen de ganancia comercial.',
        feedback_immediate: 'Falso. Un descuento reduce el precio, no lo eleva por encima de los $100 iniciales. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'El precio final es $80.',
        feedback_immediate: 'Incorrecto. Ese sería el precio si se hubiera restado el 20% directamente de los $100 sin el aumento previo. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Un aumento del r% seguido de un descuento del r% siempre produce un valor menor al original: P_final = P_ini × (1 + r)(1 - r) = P_ini × (1 - r²).',
    gridCoordinates: [7, 3, -7]
  },
  {
    id: 18,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Tasas de Trabajo Conjunto (Grifos y Bombas)',
    category: 'Fracciones y Tasas',
    source_text: 'Problema de Llenado: La bomba "A" llena un tanque de agua en 3 horas por sí sola. La bomba "B" es más pequeña y tarda 6 horas en llenar el mismo tanque.',
    question: 'Si se encienden ambas bombas simultáneamente, ¿cuántas horas tardarán en llenar el tanque por completo?',
    options: [
      {
        id: 1,
        text: '2 horas exactas (Bomba A aporta 1/3 del tanque por hora y Bomba B aporta 1/6; juntas rinden 1/3 + 1/6 = 3/6 = 1/2 tanque por hora).',
        feedback_immediate: '¡Brillante aplicación de suma de tasas de trabajo! Tasa combinada = 1/3 + 1/6 = 1/2 tanque/hora. El tiempo total es el inverso: 2 horas. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '4.5 horas (calculando el promedio entre 3 horas y 6 horas: (3 + 6) / 2 = 4.5).',
        feedback_immediate: 'Error conceptual grave. ¡Dos bombas trabajando juntas nunca tardarán más tiempo que la bomba rápida sola (3 horas)! Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '9 horas (sumando los tiempos individuales: 3 + 6 = 9).',
        feedback_immediate: 'Absurdo. Sumar tiempos implicaría que se obstaculizan en lugar de colaborar. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '1.5 horas, porque se divide el tiempo de la rápida entre dos.',
        feedback_immediate: 'Incorrecto. Solo sería 1.5 horas si la segunda bomba fuera tan veloz como la primera (3 horas). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 En trabajo conjunto se suman las tasas de rendimiento por unidad de tiempo (1/T_total = 1/T_A + 1/T_B), nunca los tiempos brutos.',
    gridCoordinates: [11, 0, -4]
  },
  {
    id: 19,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Concentración y Proporciones en Mezclas',
    category: 'Razones y Proporciones',
    source_text: 'Laboratorio de Química: Se tiene un recipiente con 800 mililitros de una solución salina que contiene un 25% de sal pura disuelta. Se decide agregar 200 mililitros de agua destilada pura (sin sal).',
    question: '¿Cuál es la nueva concentración porcentual de sal en la mezcla final resultante de 1000 ml?',
    options: [
      {
        id: 1,
        text: '20% de sal (la cantidad de sal pura se mantiene constante en 200 ml; 200 ml / 1000 ml = 0.20 = 20%).',
        feedback_immediate: '¡Perfecta deducción de conservación de masa y proporción! Sal original = 25% de 800 = 200 ml. Volumen final = 800 + 200 = 1000 ml. Concentración = 200/1000 = 20%. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '15% de sal, porque se restaron los 200 ml de diluyente del porcentaje.',
        feedback_immediate: 'Falso. No se restan porcentajes directamente de volúmenes en mililitros. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '25% de sal, porque la cantidad de sal no varió en absoluto.',
        feedback_immediate: 'Error. La masa de sal no cambió, pero el volumen total aumentó a 1000 ml, reduciendo la concentración. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '12.5% de sal, asumiendo que la concentración se dividió por la mitad.',
        feedback_immediate: 'Incorrecto. Para que se reduzca a la mitad hubiera sido necesario duplicar el volumen a 1600 ml. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La concentración C es el cociente entre el soluto puro y el volumen total de la solución (C = Soluto / Volumen_Total).',
    gridCoordinates: [11, -3, 1]
  },
  {
    id: 20,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Sincronización Cíclica: Mínimo Común Múltiplo (MCM)',
    category: 'Teoría de Números',
    source_text: 'Balizas de Navegación: Dos faros marítimos automatizados emiten destellos luminosos periódicos. El faro "Norte" emite un destello cada 12 segundos y el faro "Sur" emite un destello cada 18 segundos. A las 20:00:00 ambos emitieron un destello al unísono.',
    question: '¿Cuántos segundos después y a qué hora exacta volverán a emitir un destello simultáneo por primera vez?',
    options: [
      {
        id: 1,
        text: '36 segundos después, a las 20:00:36 (MCM de 12 y 18: 12 = 2² × 3; 18 = 2 × 3²; MCM = 2² × 3² = 36).',
        feedback_immediate: '¡Cálculo de MCM impecable! Los múltiplos de 12 son 12, 24, 36... y los de 18 son 18, 36... El menor común es 36 segundos. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '30 segundos después (sumando 12 + 18 = 30).',
        feedback_immediate: 'Error. La suma simple no garantiza coincidencia cíclica de intervalos. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '216 segundos después, multiplicando 12 × 18.',
        feedback_immediate: 'Inexacto. 216 es un múltiplo común pero no el MÍNIMO. Coinciden mucho antes, a los 36 segundos. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '6 segundos después (calculando el Máximo Común Divisor).',
        feedback_immediate: 'Confundiste el MCM con el MCD. El MCD es un divisor menor, no un momento futuro de coincidencia. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Los eventos cíclicos repetitivos que parten del mismo instante coinciden en los múltiplos del MCM de sus periodos.',
    gridCoordinates: [9, -6, 5]
  },
  {
    id: 21,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Descomposición Aritmética y Multiplicación Mental',
    category: 'Cálculo Mental Estratégico',
    source_text: 'Desafío Mental: Un comerciante debe calcular mentalmente el costo de 35 cajas de insumos a $42 cada una sin usar calculadora de bolsillo.',
    question: '¿Cuál es la estrategia de descomposición distributiva más veloz y cuál es el resultado exacto?',
    options: [
      {
        id: 1,
        text: '1,470 (descomponiendo: 35 × 40 + 35 × 2 = 1,400 + 70 = 1,470, o usando (70/2) × 42 = 70 × 21 = 1,470).',
        feedback_immediate: '¡Agilidad mental y uso maestro de la propiedad distributiva! Descomponer números en decenas y unidades permite cálculos inmediatos y exactos. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '1,520 (estimando 30 × 40 + 5 × 2).',
        feedback_immediate: 'Error de álgebra mental. Olvidaste los productos cruzados (30×2 y 5×40). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '1,350 por redondeo descendente.',
        feedback_immediate: 'Incorrecto. El cálculo debe ser exacto. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '1,680 (multiplicando 40 × 42).',
        feedback_immediate: 'Error. Calculaste 40 cajas en lugar de las 35 indicadas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Para multiplicar por 35: multiplica por 70 (duplicar) y divide entre 2. O descompón: a × (b + c) = ab + ac.',
    gridCoordinates: [5, -8, 8]
  },
  {
    id: 22,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Velocidad Media en Viaje de Ida y Vuelta (Media Armónica)',
    category: 'Promedios Especiales',
    source_text: 'Trayecto de Transporte: Un camión viaja de la ciudad A a la ciudad B a una velocidad constante de 60 km/h. En el viaje de regreso por la misma ruta exacta y con mayor carga, viaja a 40 km/h.',
    question: '¿Cuál es la velocidad media de todo el viaje completo de ida y vuelta?',
    options: [
      {
        id: 1,
        text: '48 km/h (la velocidad media es la media armónica: V_media = 2 × V1 × V2 / (V1 + V2) = 2 × 2400 / 100 = 48 km/h).',
        feedback_immediate: '¡Magistral resolución de la clásica trampa de velocidad media! Como el camión pasa más tiempo viajando al ritmo lento (40 km/h), el promedio ponderado por tiempo resulta menor que 50 km/h. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '50 km/h (calculando la media aritmética simple: (60 + 40) / 2 = 50 km/h).',
        feedback_immediate: 'Error muy extendido: la media aritmética simple solo aplica si los tiempos de viaje fueran iguales, no si las distancias son iguales. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '52 km/h por inercia cinética.',
        feedback_immediate: 'Falso. No tiene fundamento físico ni matemático. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '40 km/h porque la velocidad mínima determina el límite del viaje.',
        feedback_immediate: 'Incorrecto. La velocidad media es un promedio armónico estricto entre ambas. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Cuando se recorren distancias iguales a diferentes velocidades, la velocidad promedio es la media armónica, no la aritmética.',
    gridCoordinates: [0, -9, 9]
  },
  {
    id: 23,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Comparación Rápida de Fracciones: Producto Cruzado',
    category: 'Comparación de Razones',
    source_text: 'Comparación de Eficiencia: El motor "Alfa" consume 7/12 de su tanque por hora de prueba, mientras que el motor "Beta" consume 5/9 de su tanque bajo las mismas condiciones.',
    question: '¿Cuál motor consume mayor fracción de combustible y cuál es el método aritmético de comparación más veloz?',
    options: [
      {
        id: 1,
        text: 'El motor Alfa consume más (7/12 > 5/9), demostrado mediante producto cruzado: 7 × 9 = 63 frente a 12 × 5 = 60; como 63 > 60, 7/12 es mayor.',
        feedback_immediate: '¡Método del producto cruzado ejecutado a la perfección! Multiplicar numerador por denominador opuesto evita buscar denominadores comunes largos. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'El motor Beta consume más porque 9 es menor que 12 y divide menos.',
        feedback_immediate: 'Análisis superficial. No consideraste el numerador (7 frente a 5). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Ambos motores consumen exactamente la misma cantidad.',
        feedback_immediate: 'Falso. 7/12 ≈ 0.5833 y 5/9 ≈ 0.5555; no son iguales. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'No se pueden comparar porque los denominadores no son números primos.',
        feedback_immediate: 'Totalmente erróneo. Cualquier par de fracciones racionales puede compararse siempre. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Para comparar a/b con c/d (con b, d > 0): si a × d > b × c, entonces a/b > c/d.',
    gridCoordinates: [-5, -8, 8]
  },
  {
    id: 24,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Problema Clásico de Edades con Relaciones Variables',
    category: 'Ecuaciones y Razonamiento',
    source_text: 'Planteamiento: Actualmente, la edad de Juan es exactamente el triple de la edad de su hermana Ana. Dentro de 10 años, la edad de Juan será solo el doble de la edad de Ana.',
    question: '¿Qué edades tienen Juan y Ana en la actualidad?',
    options: [
      {
        id: 1,
        text: 'Juan tiene 30 años y Ana tiene 10 años (Actualmente: 30 = 3 × 10; en 10 años: Juan tendrá 40 y Ana 20, donde 40 = 2 × 20).',
        feedback_immediate: '¡Resolución impecable! Planteaste: J = 3A y J + 10 = 2(A + 10). Sustituyendo: 3A + 10 = 2A + 20  →  A = 10, J = 30. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Juan tiene 24 años y Ana tiene 8 años.',
        feedback_immediate: 'Verificación fallida: dentro de 10 años Juan tendría 34 y Ana 18. 34 no es el doble de 18 (18×2=36). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Juan tiene 15 años y Ana tiene 5 años.',
        feedback_immediate: 'Verificación fallida: en 10 años tendrían 25 y 15. 25 no es el doble de 15. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Juan tiene 45 años y Ana tiene 15 años.',
        feedback_immediate: 'Verificación fallida: en 10 años tendrían 55 y 25. 55 no es el doble de 25. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La diferencia de edades entre dos personas se mantiene inmutable a lo largo del tiempo; úsalo como invariante para verificar.',
    gridCoordinates: [-9, -6, 5]
  },
  {
    id: 25,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Reparto Inversamente Proporcional',
    category: 'Reparto Proporcional',
    source_text: 'Estímulo de Eficiencia: Una empresa distribuye un incentivo de $900 entre dos operadores de planta de forma inversamente proporcional a las fallas técnicas cometidas durante el mes: el Operador A cometió 2 fallas y el Operador B cometió 4 fallas.',
    question: '¿Cuánto dinero le corresponde a cada operador?',
    options: [
      {
        id: 1,
        text: 'Operador A: $600 | Operador B: $300 (Las razones inversas son 1/2 y 1/4; homogeneizando a cuartos es 2/4 y 1/4, relación 2 a 1; $900 se divide en 3 partes de $300).',
        feedback_immediate: '¡Excelente manejo de la proporcionalidad inversa! Quien cometió la mitad de errores recibe el doble de estímulo ($600 vs $300). +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'Operador A: $300 | Operador B: $600 (calculando directo al número de fallas).',
        feedback_immediate: 'Error grave: ¡premiaste a quien cometió más fallas! El reparto era inversamente proporcional. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Operador A: $450 | Operador B: $450 (reparto equitativo simple).',
        feedback_immediate: 'Incorrecto. El reparto ignora la diferencia de rendimiento entre ambos. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Operador A: $700 | Operador B: $200.',
        feedback_immediate: 'Falso. No respeta la proporción matemática 2 a 1 derivada de 1/2 y 1/4. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Repartir inversamente proporcional a {a, b} equivale a repartir directamente proporcional a {1/a, 1/b}.',
    gridCoordinates: [-11, -3, 1]
  },
  {
    id: 26,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Estimación Rápida de Presupuesto y Acotamiento',
    category: 'Estimación y Redondeo',
    source_text: 'Compra Escolar: Una escuela compra 19 cajas de lápices a $4.95 cada una y 8 resmas de papel a $1.98 cada una. El presupuesto asignado disponible es de $120.',
    question: 'Mediante una estimación superior rápida por redondeo, ¿alcanza el presupuesto y aproximadamente cuánto sobrará?',
    options: [
      {
        id: 1,
        text: 'Sí alcanza; redondeando hacia arriba a $5.00 y $2.00 se tiene 19 × 5 = $95 y 8 × 2 = $16, total estimado seguro de $111; sobra alrededor de $9-$10.',
        feedback_immediate: '¡Estrategia de acotamiento superior excelente! Redondear al alza garantiza que si el estimado entra en presupuesto ($111 < $120), el costo real (exacto $109.89) entrará con holgura. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'No alcanza porque el impuesto agrega un 50% al costo estimado.',
        feedback_immediate: 'Falso. No se mencionó ningún impuesto atípico en el enunciado. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Faltan $25 para cubrir la compra.',
        feedback_immediate: 'Error de cálculo. La compra ronda los $110, muy por debajo de los $120 disponibles. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'Alcanza justo sin que sobre ni un centavo ($120 exactos).',
        feedback_immediate: 'Incorrecto. 19 × 5 + 8 × 2 = 111 < 120. Sí hay remanente. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 El redondeo al alza crea una cota superior segura para comprobar si un presupuesto es suficiente antes del cálculo exacto.',
    gridCoordinates: [-11, 0, -4]
  },
  {
    id: 27,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Dinámica de Entrada y Desagüe Simultáneos',
    category: 'Razones de Flujo',
    source_text: 'Tanque con Fuga: Un grifo de alimentación llena un depósito en 4 horas cuando el desagüe está cerrado. Por su parte, el desagüe de fondo vacía el tanque lleno en 6 horas cuando el grifo está cerrado.',
    question: 'Si el depósito está vacío y se abren simultáneamente el grifo y el desagüe, ¿en cuántas horas se llenará por completo el depósito?',
    options: [
      {
        id: 1,
        text: '12 horas (Tasa neta = 1/4 - 1/6 = 3/12 - 2/12 = 1/12 del tanque por hora; se requieren 12 horas para llenarlo).',
        feedback_immediate: '¡Cálculo de flujo neto brillante! La entrada neta es positiva (1/12 tanque/hora), por lo que el tanque sí se llenará en exactamente 12 horas. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'El tanque jamás se llenará porque el desagüe está abierto continuamente.',
        feedback_immediate: 'Falso. El grifo llena más rápido (en 4h) de lo que el desagüe vacía (en 6h), por lo que la ganancia de agua es neta positiva. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '5 horas (calculando el promedio entre 4 y 6).',
        feedback_immediate: 'Error de concepto. No se promedian los tiempos de flujo antagónicos. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '24 horas.',
        feedback_immediate: 'Error de cálculo en la resta de fracciones (1/4 - 1/6 = 1/12, no 1/24). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 Cuando dos flujos operan en direcciones opuestas (llenado vs vaciado), la tasa neta es la resta de las tasas individuales: T_neta = T_in - T_out.',
    gridCoordinates: [-7, 3, -7]
  },
  {
    id: 28,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Promedio Ponderado vs Media Aritmética Simple',
    category: 'Estadística y Ponderaciones',
    source_text: 'Evaluación Académica: Un estudiante tiene las siguientes notas en la escala de 0 a 20: Parcial 1 (valor 30%): 16 puntos; Parcial 2 (valor 30%): 14 puntos; Proyecto Integrador (valor 40%): 18 puntos.',
    question: '¿Cuál es la nota final definitiva calculada mediante promedio ponderado?',
    options: [
      {
        id: 1,
        text: '16.2 puntos (Cálculo: 16 × 0.30 + 14 × 0.30 + 18 × 0.40 = 4.8 + 4.2 + 7.2 = 16.2).',
        feedback_immediate: '¡Cálculo ponderado impecable! Multiplicaste cada nota por su peso relativo porcentual y sumaste los aportes parciales. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: '16.0 puntos (calculando el promedio aritmético simple: (16 + 14 + 18) / 3 = 48 / 3 = 16.0).',
        feedback_immediate: 'Error: omitiste las ponderaciones. El Proyecto pesa 40% (más que los parciales), elevando la nota a 16.2. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: '17.1 puntos.',
        feedback_immediate: 'Falso. Error en la suma de los productos parciales. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: '15.5 puntos.',
        feedback_immediate: 'Incorrecto. La calificación más alta (18) tiene el mayor peso (40%), lo que eleva el promedio por encima de 16. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 El promedio ponderado refleja la importancia relativa de cada elemento multiplicando el valor por su peso porcentual.',
    gridCoordinates: [-2, 0, -9]
  },
  {
    id: 29,
    challengeIndexInModule: 2,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Aritmética Modular y Ciclos del Calendario',
    category: 'Aritmética Modular',
    source_text: 'Problema del Calendario: Hoy es día MARTES y un equipo espacial inicia una misión de pruebas de navegación satelital que durará exactamente 100 días continuos.',
    question: '¿Qué día de la semana finalizará la misión exactamente?',
    options: [
      {
        id: 1,
        text: 'JUEVES (porque 100 mod 7 = 2; 100 dividido entre 7 da 14 semanas completas (98 días) con un residuo de 2 días: Martes + 2 días = Jueves).',
        feedback_immediate: '¡Razonamiento modular impecable! Los días de la semana son un sistema de base 7 (congruencias módulo 7). Martes + 2 = Jueves. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'MARTES, porque 100 es una cifra redonda que preserva el día inicial.',
        feedback_immediate: 'Falso. Para volver a ser martes la cantidad de días debe ser múltiplo exacto de 7 (como 70 o 98, no 100). Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'VIERNES (sumando 3 días de residuo).',
        feedback_immediate: 'Error de división: 100 - 98 = 2, no 3. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 4,
        text: 'DOMINGO.',
        feedback_immediate: 'Incorrecto. No corresponde al residuo modular. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 La aritmética modular analiza el residuo de una división entera para predecir el estado de sistemas periódicos cíclicos.',
    gridCoordinates: [0, 4, -8]
  },
  {
    id: 30,
    challengeIndexInModule: 30,
    moduleId: 'pensamiento_aritmetico',
    moduleTitle: 'Pensamiento Aritmético',
    moduleBadgeColor: '#38bdf8',
    title: 'Desafío Aritmético Maestro: Optimización de Compra con Flete Fijo',
    category: 'Optimización y Costo Unitario',
    source_text: 'Caso Logístico: El distribuidor "A" vende paquetes de resmas a $12 cada uno más un costo de envío fijo de $60 por pedido (sin importar la cantidad). El distribuidor "B" vende el mismo paquete a $15 cada uno con envío completamente GRATIS.',
    question: '¿A partir de qué número de paquetes resulta más económico comprarle al distribuidor "A"?',
    options: [
      {
        id: 1,
        text: 'A partir de 21 paquetes (en 20 paquetes ambos cuestan exactamente igual: 20 × 12 + 60 = $300 frente a 20 × 15 = $300; para 21 o más paquetes, A es más barato).',
        feedback_immediate: '¡Brillante resolución del punto de indiferencia aritmética! Planteaste 12x + 60 < 15x  →  60 < 3x  →  x > 20. A partir de 21 unidades, el ahorro unitario supera el flete fijo. +100 pts.',
        points_delta: 100,
        is_correct: true
      },
      {
        id: 2,
        text: 'A partir de 10 paquetes.',
        feedback_immediate: 'Verificación fallida: Para 10 paquetes, A cuesta 120 + 60 = $180; B cuesta 10 × 15 = $150. ¡B es más barato en 10 paquetes! Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      },
      {
        id: 3,
        text: 'Siempre es más barato B porque el envío gratis nunca puede ser superado.',
        feedback_immediate: 'Falacia comercial: el costo del envío de B ya está inflado dentro del precio unitario ($15 vs $12). Penalización: -50 pts.',
        points_delta: -50,
        is_correct: false
      },
      {
        id: 4,
        text: 'A partir de 50 paquetes.',
        feedback_immediate: 'Inexacto. La ventaja para A empieza mucho antes, en 21 paquetes. Penalización: -25 pts.',
        points_delta: -25,
        is_correct: false
      }
    ],
    logicLesson: '💡 El punto de equilibrio entre dos estructuras de costos ocurre donde el ahorro marginal unitario iguala al costo fijo adicional.',
    gridCoordinates: [0, -6, -7]
  }
];
