import { FinancialMission, AvatarProfile, LedgerEntry } from '../types';

export const AVATARS: AvatarProfile[] = [
  {
    id: 'cyber-teen-neo',
    name: 'Neo Spark',
    title: 'Analista Lógico',
    imageSrc: '/src/assets/images/cyber_teen_avatar_1787667844812.jpg',
    primaryColor: '#00f3ff',
    accentColor: '#ff007f',
    quote: '¡Épale chamo! La inferencia deductiva y el cálculo exacto son las herramientas maestras del razonamiento.'
  },
  {
    id: 'cyber-teen-lumina',
    name: 'Lumina Void',
    title: 'Estratega Matemática',
    imageSrc: '/src/assets/images/cyber_teen_avatar_female_1787667877252.jpg',
    primaryColor: '#ff007f',
    accentColor: '#00f3ff',
    quote: '¡Atento a las premisas, mi pana! Una lectura crítica minuciosa desactiva cualquier falacia.'
  },
  {
    id: 'cyber-teen-blade',
    name: 'Blade Byte',
    title: 'Maestro Algorítmico',
    imageSrc: '/src/assets/images/cyber_teen_avatar_blade_1787668613195.jpg',
    primaryColor: '#38bdf8',
    accentColor: '#fbbf24',
    quote: '¡Naguará! La combinatoria y la descomposición lógica resuelven cualquier enigma del ciberespacio.'
  }
];

export const INITIAL_LEDGER_ENTRIES: LedgerEntry[] = [
  {
    id: 'init-1',
    timestamp: 'Hoy, 09:15 AM',
    concept: 'Reserva Inicial de Energía Cognitiva',
    type: 'balance_inicial',
    amount: 1500,
    runningBalance: 1500,
    operationText: 'Puntaje Base Inicial: 1500 pts'
  },
  {
    id: 'init-2',
    timestamp: 'Hoy, 10:30 AM',
    concept: 'Acierto en Silogismo Categórico',
    type: 'ingreso',
    amount: 100,
    runningBalance: 1600,
    operationText: 'Acierto Lógico: +100 pts'
  },
  {
    id: 'init-3',
    timestamp: 'Hoy, 11:45 AM',
    concept: 'Penalización por Premisa Falaz',
    type: 'gasto',
    amount: 50,
    runningBalance: 1550,
    operationText: 'Deducción por Error: -50 pts'
  },
  {
    id: 'init-4',
    timestamp: 'Hoy, 12:20 PM',
    concept: 'Resolución de Progresión Numérica Compleja',
    type: 'ingreso',
    amount: 120,
    runningBalance: 1670,
    operationText: 'Acierto Aritmético: +120 pts'
  },
  {
    id: 'init-5',
    timestamp: 'Hoy, 01:10 PM',
    concept: 'Acierto en Problema de Inclusión-Exclusión',
    type: 'ingreso',
    amount: 150,
    runningBalance: 1820,
    operationText: 'Acierto Combinatorio: +150 pts'
  }
];

// Helper to calculate coordinates along a clean, centered straight runway track
function getMissionCoordinates(i: number): [number, number, number] {
  const x = 0;
  const y = 0;
  const z = - (i * 10);
  return [x, y, z];
}

// 100 Progressive Financial Missions
interface RawMissionDef {
  title: string;
  category: 'Ingresos' | 'Gastos' | 'Inversión' | 'Reparto' | 'Presupuesto';
  operationType: 'sum' | 'subtract' | 'multiply' | 'divide';
  story: string;
  problem: string;
  num1: number;
  operator: '+' | '-' | '×' | '÷';
  num2: number;
  financialLesson: string;
  incomeImpact?: number;
  expenseImpact?: number;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  color?: string;
}

const RAW_100_MISSIONS: RawMissionDef[] = [
  // --- TIER 1: NIVEL BÁSICO (Retos 1 a 35) - Desde lo más elemental ---
  {
    title: 'Venta de Primer Chip de Memoria',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Vendiste tu primer chip cuántico por $10 y recibiste una propina de $5.',
    problem: '¿Cuánto dinero reuniste en total? 10 + 5 = ?',
    num1: 10,
    operator: '+',
    num2: 5,
    financialLesson: '💡 Los ingresos se suman. Cada pequeño cobro inicial construye tu capital base.',
    incomeImpact: 15,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Compra de Cable de Fibra Óptica',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'De tus $15 ahorrados, compraste un cable de conexión rápida por $4.',
    problem: 'Calcula tu saldo restante: 15 - 4 = ?',
    num1: 15,
    operator: '-',
    num2: 4,
    financialLesson: '💡 Gasto = Salida de dinero. Monitorear los pequeños gastos evita fugas de capital.',
    expenseImpact: 4,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Puesto de Bebidas Energéticas Cyber',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Vendiste 2 botellas de soda neón: una por $12 y otra por $8.',
    problem: 'Ingreso total del puesto: 12 + 8 = ?',
    num1: 12,
    operator: '+',
    num2: 8,
    financialLesson: '💡 El flujo de caja diario suma todas las ventas de la jornada.',
    incomeImpact: 20,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Recarga de Energía en la Terminal',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Recargaste la batería de tu dispositivo portátil por $6 teniendo $20 en tu billetera.',
    problem: 'Saldo disponible tras recarga: 20 - 6 = ?',
    num1: 20,
    operator: '-',
    num2: 6,
    financialLesson: '💡 Los costos fijos de energía deben pagarse puntualmente para seguir operando.',
    expenseImpact: 6,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Servicio de Mensajería Rápida',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Entregaste un paquete en el sector 4 por $25 y otro en el sector 7 por $15.',
    problem: 'Total ganado en entregas: 25 + 15 = ?',
    num1: 25,
    operator: '+',
    num2: 15,
    financialLesson: '💡 Ofrecer servicios con tu propio tiempo es una excelente vía de capitalización.',
    incomeImpact: 40,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Compra de Herramientas de Soldadura',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'De tus $40 acumulados, compraste un soldador láser de bolsillo por $18.',
    problem: 'Dinero restante en caja: 40 - 18 = ?',
    num1: 40,
    operator: '-',
    num2: 18,
    financialLesson: '💡 Invertir en herramientas de trabajo te permite ofrecer mejores servicios.',
    expenseImpact: 18,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Venta de Limonada con Electrolitos',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Tu puesto recaudó $50 por la mañana y $35 por la tarde.',
    problem: 'Facturación del día: 50 + 35 = ?',
    num1: 50,
    operator: '+',
    num2: 35,
    financialLesson: '💡 Registrar ventas por turnos ayuda a identificar las horas de mayor demanda.',
    incomeImpact: 85,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Compra de Insumos y Vasos',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Para reponer inventario de limonada gastas $25 de tus $85.',
    problem: 'Ganancia neta tras insumos: 85 - 25 = ?',
    num1: 85,
    operator: '-',
    num2: 25,
    financialLesson: '💡 Ganancia Neta = Ventas Brutas - Costos de Insumos.',
    expenseImpact: 25,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Reparación de Dron Explorador',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Cobraste $60 por arreglar el motor y $30 por calibrar los sensores.',
    problem: 'Total facturado al cliente: 60 + 30 = ?',
    num1: 60,
    operator: '+',
    num2: 30,
    financialLesson: '💡 Desglosar mano de obra y repuestos genera transparencia y confianza.',
    incomeImpact: 90,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Pago de Peaje del Puente Cibernético',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Para cruzar a la zona comercial pagas una tasa de $15 de tus $90.',
    problem: 'Saldo en tránsito: 90 - 15 = ?',
    num1: 90,
    operator: '-',
    num2: 15,
    financialLesson: '💡 Los costos de transporte y peaje deben contemplarse en el presupuesto de ruta.',
    expenseImpact: 15,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Venta de Cristales de Cuarzo Neón',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Vendiste un lote de gemas por $75 y un cliente satisfecho te dio un bono de $25.',
    problem: 'Ingreso total obtenido: 75 + 25 = ?',
    num1: 75,
    operator: '+',
    num2: 25,
    financialLesson: '💡 Un excelente servicio al cliente genera recompensas e ingresos adicionales.',
    incomeImpact: 100,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Compra de Lentes Antirreflejo',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Compraste protección visual para programar por $40 teniendo $100.',
    problem: 'Dinero restante en la cuenta: 100 - 40 = ?',
    num1: 100,
    operator: '-',
    num2: 40,
    financialLesson: '💡 La salud y ergonomía laboral son gastos prioritarios de alta rentabilidad personal.',
    expenseImpact: 40,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Descarga de Música Holográfica',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Tu canción synthwave recibió $80 en descargas y $45 en donaciones.',
    problem: 'Regalías totales generadas: 80 + 45 = ?',
    num1: 80,
    operator: '+',
    num2: 45,
    financialLesson: '💡 Los ingresos pasivos por contenido digital siguen rindiendo después de creados.',
    incomeImpact: 125,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Suscripción al Servidor de Streaming',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas el hosting mensual de $35 de tus $125 acumulados.',
    problem: 'Balance tras pagar suscripción: 125 - 35 = ?',
    num1: 125,
    operator: '-',
    num2: 35,
    financialLesson: '💡 Revisa periódicamente las suscripciones mensuales para cancelar las inactivas.',
    expenseImpact: 35,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Mantenimiento de Red Local',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Optimizaste los routers de un cibercafé por $110 y configuraste un firewall por $40.',
    problem: 'Cobro total del servicio: 110 + 40 = ?',
    num1: 110,
    operator: '+',
    num2: 40,
    financialLesson: '💡 Paquetizar servicios técnicos (router + firewall) eleva el ticket promedio de venta.',
    incomeImpact: 150,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Alquiler de Espacio en el Mercado',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas el puesto de venta semanal por $50 de tus $150 disponibles.',
    problem: 'Margen disponible: 150 - 50 = ?',
    num1: 150,
    operator: '-',
    num2: 50,
    financialLesson: '💡 El alquiler de locales físicos es un costo fijo que debe cubrirse con ventas mínimas.',
    expenseImpact: 50,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Venta de Pegatinas y Stickers Holográficos',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Vendiste 10 paquetes de stickers holográficos a $6 cada uno.',
    problem: 'Total obtenido por los paquetes: 10 × 6 = ?',
    num1: 10,
    operator: '×',
    num2: 6,
    financialLesson: '💡 Multiplicación = Cantidad × Precio Unitario. Fundamental en inventarios.',
    incomeImpact: 60,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Compra de Papel Holográfico',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Para imprimir más stickers compraste papel adhesivo por $22 teniendo $60.',
    problem: 'Saldo tras compra de material: 60 - 22 = ?',
    num1: 60,
    operator: '-',
    num2: 22,
    financialLesson: '💡 Mantener un costo de materiales bajo multiplica el margen de beneficio.',
    expenseImpact: 22,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Reparto de Propina entre 2 Repartidores',
    category: 'Reparto',
    operationType: 'divide',
    story: 'Tú y tu compañero recibieron una propina conjunta de $50 y la dividen en partes iguales.',
    problem: '¿Cuánto le toca a cada uno? 50 ÷ 2 = ?',
    num1: 50,
    operator: '÷',
    num2: 2,
    financialLesson: '💡 La división equitativa fomenta el trabajo en equipo y la transparencia.',
    incomeImpact: 25,
    difficulty: 'Básico',
    color: '#10b981'
  },
  {
    title: 'Ahorro para el Fondo Semilla',
    category: 'Presupuesto',
    operationType: 'sum',
    story: 'Tenías $70 guardados en tu alcancía digital y agregaste $45 de tus ganancias.',
    problem: 'Total acumulado en el fondo: 70 + 45 = ?',
    num1: 70,
    operator: '+',
    num2: 45,
    financialLesson: '💡 Ahorrar con disciplina cada semana crea un colchón financiero para proyectos.',
    incomeImpact: 45,
    difficulty: 'Básico',
    color: '#fbbf24'
  },
  {
    title: 'Lote de 3 Tarjetas Gráficas Usadas',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Vendiste 3 tarjetas de video reacondicionadas a $40 cada una.',
    problem: 'Facturación del lote: 3 × 40 = ?',
    num1: 3,
    operator: '×',
    num2: 40,
    financialLesson: '💡 El reacondicionamiento y reciclaje tecnológico genera alta plusvalía.',
    incomeImpact: 120,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Pasta Térmica y Limpiadores',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Compras pasta térmica y alcohol isopropílico por $28 de tus $120.',
    problem: 'Ganancia neta del taller: 120 - 28 = ?',
    num1: 120,
    operator: '-',
    num2: 28,
    financialLesson: '💡 Los insumos de mantenimiento tienen bajo costo pero multiplican el valor de reventa.',
    expenseImpact: 28,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Venta de Baterías Recargadas',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Vendiste 5 packs de celdas de litio a $15 por pack.',
    problem: 'Ingreso total por baterías: 5 × 15 = ?',
    num1: 5,
    operator: '×',
    num2: 15,
    financialLesson: '💡 Vender por paquetes incrementa la velocidad de rotación de inventario.',
    incomeImpact: 75,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Compra de Cargador Inteligente',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Adquieres un cargador rápido por $35 teniendo $75 en caja.',
    problem: 'Capital restante: 75 - 35 = ?',
    num1: 75,
    operator: '-',
    num2: 35,
    financialLesson: '💡 Automatizar tareas repetitivas con mejores equipos ahorra tiempo valioso.',
    expenseImpact: 35,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'División de Gastos de Internet entre 3',
    category: 'Gastos',
    operationType: 'divide',
    story: 'La factura de internet del búnker es de $90 y se divide entre 3 compañeros.',
    problem: 'Cuota que te corresponde pagar: 90 ÷ 3 = ?',
    num1: 90,
    operator: '÷',
    num2: 3,
    financialLesson: '💡 Compartir gastos fijos en coworking reduce sustancialmente el costo de vida.',
    expenseImpact: 30,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Venta de Café y Snacks a Programadores',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Durante una hackathon vendiste $95 en café y $65 en barritas de proteína.',
    problem: 'Total recaudado en el evento: 95 + 65 = ?',
    num1: 95,
    operator: '+',
    num2: 65,
    financialLesson: '💡 Identificar nichos de alta concentración de personas maximiza las ventas rápidas.',
    incomeImpact: 160,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Reposición de Café de Grano Especial',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Compras granos de café arábica por $48 de tus $160 recaudados.',
    problem: 'Beneficio neto de la jornada: 160 - 48 = ?',
    num1: 160,
    operator: '-',
    num2: 48,
    financialLesson: '💡 La calidad del producto fideliza a los clientes recurrentes.',
    expenseImpact: 48,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Diseño de Logos Cyberpunk',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Diseñaste 2 avatares corporativos: uno por $120 y otro por $80.',
    problem: 'Facturación por diseño gráfico: 120 + 80 = ?',
    num1: 120,
    operator: '+',
    num2: 80,
    financialLesson: '💡 Las habilidades creativas y digitales no tienen costo de materia prima.',
    incomeImpact: 200,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Licencia del Software de Ilustración',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas la licencia mensual de diseño por $45 de tus $200.',
    problem: 'Saldo en cuenta de diseñador: 200 - 45 = ?',
    num1: 200,
    operator: '-',
    num2: 45,
    financialLesson: '💡 Trabajar con licencias oficiales garantiza soporte, estabilidad y ética profesional.',
    expenseImpact: 45,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Clase Particular de Robótica',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Diste 4 horas de tutoría de programación a $25 la hora.',
    problem: 'Honorarios cobrados: 4 × 25 = ?',
    num1: 4,
    operator: '×',
    num2: 25,
    financialLesson: '💡 Enseñar lo que sabes es una de las fuentes de ingresos más nobles y rentables.',
    incomeImpact: 100,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Compra de Material Didáctico',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Compraste kits de microcontroladores por $32 teniendo $100.',
    problem: 'Saldo tras equipar el taller: 100 - 32 = ?',
    num1: 100,
    operator: '-',
    num2: 32,
    financialLesson: '💡 Reinvertir en materiales pedagógicos atrae más estudiantes satisfechos.',
    expenseImpact: 32,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Premios del Torneo de Esports',
    category: 'Reparto',
    operationType: 'divide',
    story: 'Tu equipo de 4 ganó un torneo local con bolsa de $200 repartida igual.',
    problem: 'Premio individual por jugador: 200 ÷ 4 = ?',
    num1: 200,
    operator: '÷',
    num2: 4,
    financialLesson: '💡 Pactar las reglas de distribución antes de competir evita disputas posteriores.',
    incomeImpact: 50,
    difficulty: 'Básico',
    color: '#10b981'
  },
  {
    title: 'Venta de Teclados Mecánicos Personalizados',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Construiste dos teclados modulares: el primero por $140 y el segundo por $110.',
    problem: 'Facturación por teclados custom: 140 + 110 = ?',
    num1: 140,
    operator: '+',
    num2: 110,
    financialLesson: '💡 La personalización artesanal permite cobrar precios premium frente a productos estándar.',
    incomeImpact: 250,
    difficulty: 'Básico',
    color: '#00f3ff'
  },
  {
    title: 'Importación de Switches y Keycaps',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas a la aduana y proveedor $85 por switches de tus $250.',
    problem: 'Utilidad neta del artesano: 250 - 85 = ?',
    num1: 250,
    operator: '-',
    num2: 85,
    financialLesson: '💡 Comparar proveedores internacionales reduce costos directos de producción.',
    expenseImpact: 85,
    difficulty: 'Básico',
    color: '#ff007f'
  },
  {
    title: 'Balance Consolidado del Nivel Básico',
    category: 'Presupuesto',
    operationType: 'sum',
    story: 'Unificas tu caja chica de $165 con tus ahorros bancarios de $135.',
    problem: 'Capital total consolidado: 165 + 135 = ?',
    num1: 165,
    operator: '+',
    num2: 135,
    financialLesson: '💡 Mantener un balance claro de todas tus cuentas te da visión financiera global.',
    incomeImpact: 300,
    difficulty: 'Básico',
    color: '#fbbf24'
  },

  // --- TIER 2: NIVEL INTERMEDIO (Retos 36 a 70) - Multiplicaciones, Lotes, Divisiones y Presupuestos ---
  {
    title: 'Contrato de Seguridad Informática',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Auditas los servidores de una tienda virtual: $220 por escaneo y $180 por parcheo.',
    problem: 'Total facturado en ciberseguridad: 220 + 180 = ?',
    num1: 220,
    operator: '+',
    num2: 180,
    financialLesson: '💡 La prevención en seguridad informática es una industria de alta demanda.',
    incomeImpact: 400,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Servidores Proxy y VPN Dedicadas',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Contratas túneles cifrados por $95 de tus $400 cobrados.',
    problem: 'Ganancia neta tras costos de red: 400 - 95 = ?',
    num1: 400,
    operator: '-',
    num2: 95,
    financialLesson: '💡 Utiliza infraestructura profesional para asegurar la privacidad de tus clientes.',
    expenseImpact: 95,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Venta de Lote de Sensores IoT',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Un invernadero automatizado te compra 8 placas de sensores a $35 cada una.',
    problem: 'Total de la orden de compra: 8 × 35 = ?',
    num1: 8,
    operator: '×',
    num2: 35,
    financialLesson: '💡 Vender soluciones tecnológicas aplicadas al agro o industria multiplica las ventas.',
    incomeImpact: 280,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Adquisición de Cableado Industrial',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Compras carretes de cable apantallado por $68 de tus $280.',
    problem: 'Beneficio neto en caja: 280 - 68 = ?',
    num1: 280,
    operator: '-',
    num2: 68,
    financialLesson: '💡 El inventario de alta rotación debe reponerse oportunamente.',
    expenseImpact: 68,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Reparto de Ganancias en Startup de Drones',
    category: 'Reparto',
    operationType: 'divide',
    story: 'Tu startup generó $600 de beneficio limpio para repartir entre 3 fundadores.',
    problem: 'Dividendo para cada fundador: 600 ÷ 3 = ?',
    num1: 600,
    operator: '÷',
    num2: 3,
    financialLesson: '💡 La división de dividendos debe formalizarse en los estatutos de la empresa.',
    incomeImpact: 200,
    difficulty: 'Intermedio',
    color: '#10b981'
  },
  {
    title: 'Instalación de Paneles Solares Cyber',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Cobraste $350 por la mano de obra y $175 por los inversores de corriente.',
    problem: 'Ingreso total por instalación ecológica: 350 + 175 = ?',
    num1: 350,
    operator: '+',
    num2: 175,
    financialLesson: '💡 Las energías renovables ofrecen ahorros continuos a los clientes y buen margen.',
    incomeImpact: 525,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Baterías de Almacenamiento Solar',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Compras acumuladores de ciclo profundo por $190 de tus $525.',
    problem: 'Saldo disponible: 525 - 190 = ?',
    num1: 525,
    operator: '-',
    num2: 190,
    financialLesson: '💡 Contar con buenos componentes alarga la vida útil de los sistemas instalados.',
    expenseImpact: 190,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Desarrollo de Aplicación Móvil',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Trabajaste 15 horas programando una app a $30 la hora de código.',
    problem: 'Monto total facturado: 15 × 30 = ?',
    num1: 15,
    operator: '×',
    num2: 30,
    financialLesson: '💡 Cotizar proyectos por horas de trabajo estimadas protege tu rentabilidad.',
    incomeImpact: 450,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Licencia de Publicación en Tienda de Apps',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas la tasa de desarrollador anual de $99 de tus $450.',
    problem: 'Ingreso neto del desarrollador: 450 - 99 = ?',
    num1: 450,
    operator: '-',
    num2: 99,
    financialLesson: '💡 Considera los costos de distribución en plataformas digitales al fijar tus precios.',
    expenseImpact: 99,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Fondo Comunitario entre 5 Emprendedores',
    category: 'Reparto',
    operationType: 'divide',
    story: 'Un fondo de desarrollo de $750 se divide entre 5 proyectos de jóvenes.',
    problem: 'Subsidio por proyecto: 750 ÷ 5 = ?',
    num1: 750,
    operator: '÷',
    num2: 5,
    financialLesson: '💡 Los fondos de capital semilla impulsan la innovación sin ahogar con deudas.',
    incomeImpact: 150,
    difficulty: 'Intermedio',
    color: '#10b981'
  },
  {
    title: 'Venta de Modelos 3D para Videojuegos',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Vendiste 12 paquetes de texturas y modelos 3D a $25 cada paquete.',
    problem: 'Facturación en marketplace digital: 12 × 25 = ?',
    num1: 12,
    operator: '×',
    num2: 25,
    financialLesson: '💡 Los activos digitales se crean una vez y pueden venderse infinitas veces.',
    incomeImpact: 300,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Actualización de Tarjeta Aceleradora GPU',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Compras hardware de renderizado por $135 de tus $300 ganados.',
    problem: 'Saldo tras optimizar tu estación de trabajo: 300 - 135 = ?',
    num1: 300,
    operator: '-',
    num2: 135,
    financialLesson: '💡 Invertir en velocidad de cómputo reduce a la mitad el tiempo de entrega.',
    expenseImpact: 135,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Impresión 3D de Prótesis y Piezas Mecánicas',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Imprimiste piezas de ingeniería: $280 en filamento reforzado y $160 en calibración.',
    problem: 'Total facturado en impresión 3D: 280 + 160 = ?',
    num1: 280,
    operator: '+',
    num2: 160,
    financialLesson: '💡 La manufactura aditiva permite crear prototipos rápidos con bajo desperdicio.',
    incomeImpact: 440,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Carretes de Filamento de Fibra de Carbono',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Compras bobinas de material técnico por $115 de tus $440.',
    problem: 'Margen de ganancia en el taller 3D: 440 - 115 = ?',
    num1: 440,
    operator: '-',
    num2: 115,
    financialLesson: '💡 El control del costo por gramo de filamento es la clave del taller 3D.',
    expenseImpact: 115,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Taller de Inteligencia Artificial para 6 Alumnos',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Organizas un bootcamp intensivo y cobras $75 de matrícula a 6 alumnos.',
    problem: 'Recaudación total del curso: 6 × 75 = ?',
    num1: 6,
    operator: '×',
    num2: 75,
    financialLesson: '💡 La educación grupal maximiza el ingreso por hora trabajada.',
    incomeImpact: 450,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Alquiler del Auditorio y Coffee Break',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas el salón y refrigerios por $130 de tus $450 recaudados.',
    problem: 'Beneficio neto del organizador: 450 - 130 = ?',
    num1: 450,
    operator: '-',
    num2: 130,
    financialLesson: '💡 Cuidar la experiencia del cliente asegura recomendaciones para futuras ediciones.',
    expenseImpact: 130,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Contrato Anual de Dominios y DNS',
    category: 'Gastos',
    operationType: 'multiply',
    story: 'Administras 8 sitios web corporativos y pagas $15 por cada dominio anual.',
    problem: 'Costo total de renovación de dominios: 8 × 15 = ?',
    num1: 8,
    operator: '×',
    num2: 15,
    financialLesson: '💡 Agrupar dominios en un solo registrador facilita la gestión y ahorra dinero.',
    expenseImpact: 120,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Venta de Módulos de Código Abierto Premium',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Tu librería de componentes recibió $310 en licencias comerciales y $140 en soporte.',
    problem: 'Facturación total de software: 310 + 140 = ?',
    num1: 310,
    operator: '+',
    num2: 140,
    financialLesson: '💡 El modelo Open Core (gratis básico + premium de pago) atrae miles de usuarios.',
    incomeImpact: 450,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Certificados SSL y Blindaje Web',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Instalas certificados con validación extendida por $125 de tus $450.',
    problem: 'Ganancia neta restante: 450 - 125 = ?',
    num1: 450,
    operator: '-',
    num2: 125,
    financialLesson: '💡 La seguridad y candado verde inspiran confianza al momento del checkout de compras.',
    expenseImpact: 125,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Reparto de Premios de Hackathon entre 4 Miembros',
    category: 'Reparto',
    operationType: 'divide',
    story: 'Tu escuadrón ganó el primer lugar con un premio de $1200 a repartir entre 4.',
    problem: 'Recompensa por cada miembro: 1200 ÷ 4 = ?',
    num1: 1200,
    operator: '÷',
    num2: 4,
    financialLesson: '💡 Ganar competencias tecnológicas valida tu producto y aporta capital no dilutivo.',
    incomeImpact: 300,
    difficulty: 'Intermedio',
    color: '#10b981'
  },
  {
    title: 'Venta Mayorista de 14 Auriculares Inalámbricos',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Vendiste 14 auriculares con cancelación de ruido a $35 cada uno.',
    problem: 'Total facturado en electrónica: 14 × 35 = ?',
    num1: 14,
    operator: '×',
    num2: 35,
    financialLesson: '💡 Las ventas al por mayor reducen el costo logístico unitario.',
    incomeImpact: 490,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Flete Marítimo y Seguro de Carga',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas el flete de importación por $145 de tus $490 obtenidos.',
    problem: 'Margen comercial en caja: 490 - 145 = ?',
    num1: 490,
    operator: '-',
    num2: 145,
    financialLesson: '💡 El costo landed (precio producto + flete + aranceles) define el precio de venta real.',
    expenseImpact: 145,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Servicio de Streaming para Conferencia Virtual',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Cobraste $450 por la transmisión 4K y $220 por la grabación y edición.',
    problem: 'Total cobrado por la producción audiovisual: 450 + 220 = ?',
    num1: 450,
    operator: '+',
    num2: 220,
    financialLesson: '💡 Los eventos híbridos y virtuales pagan muy bien la estabilidad de señal y audio.',
    incomeImpact: 670,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Alquiler de Cámaras Cinema 4K',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Alquilas dos cuerpos de cámara por $185 de tus $670 cobrados.',
    problem: 'Utilidad neta de producción: 670 - 185 = ?',
    num1: 670,
    operator: '-',
    num2: 185,
    financialLesson: '💡 Alquilar equipos de uso esporádico evita descapitalizarse en activos fijos.',
    expenseImpact: 185,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Distribución de Dividendos entre 6 Socios',
    category: 'Reparto',
    operationType: 'divide',
    story: 'La cooperativa de delivery recaudó $1800 de utilidad neta para 6 socios iguales.',
    problem: 'Dividendo para cada socio: 1800 ÷ 6 = ?',
    num1: 1800,
    operator: '÷',
    num2: 6,
    financialLesson: '💡 Las cooperativas fomentan el crecimiento compartido y la equidad social.',
    incomeImpact: 300,
    difficulty: 'Intermedio',
    color: '#10b981'
  },
  {
    title: 'Desarrollo de Smart Contracts en Blockchain',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Programaste 4 contratos inteligentes auditados a $220 cada uno.',
    problem: 'Ingreso total por desarrollo Web3: 4 × 220 = ?',
    num1: 4,
    operator: '×',
    num2: 220,
    financialLesson: '💡 La programación en sectores de nicho avanzado se cotiza a tarifas preferenciales.',
    incomeImpact: 880,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Auditoría Externa de Seguridad Web3',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Contratas un hacker ético para certificar el código por $260 de tus $880.',
    problem: 'Ganancia neta tras auditoría: 880 - 260 = ?',
    num1: 880,
    operator: '-',
    num2: 260,
    financialLesson: '💡 Una auditoría externa de seguridad protege a los clientes contra hackeos millonarios.',
    expenseImpact: 260,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Consultoría en Automatización de Procesos',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Optimizaste los flujos de una empresa: $520 por diseño y $340 por implementación.',
    problem: 'Facturación total de consultoría: 520 + 340 = ?',
    num1: 520,
    operator: '+',
    num2: 340,
    financialLesson: '💡 Ayudar a otras empresas a ahorrar horas de trabajo te convierte en un aliado indispensable.',
    incomeImpact: 860,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Licencias de Software RPA de Automatización',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas las licencias de bots por $215 de tus $860.',
    problem: 'Margen de consultoría disponible: 860 - 215 = ?',
    num1: 860,
    operator: '-',
    num2: 215,
    financialLesson: '💡 Elige herramientas tecnológicas que escalen sin multiplicar tus costos exponencialmente.',
    expenseImpact: 215,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Reparto de Fondo de I+D entre 8 Investigadores',
    category: 'Reparto',
    operationType: 'divide',
    story: 'Una beca de investigación de $2400 se distribuye equitativamente entre 8 científicos.',
    problem: 'Asignación por investigador: 2400 ÷ 8 = ?',
    num1: 2400,
    operator: '÷',
    num2: 8,
    financialLesson: '💡 La inversión en investigación y desarrollo es la semilla de la ventaja competitiva futura.',
    incomeImpact: 300,
    difficulty: 'Intermedio',
    color: '#10b981'
  },
  {
    title: 'Venta de Lote de 25 Sensores de Presión Cuántica',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Una planta industrial te compra 25 sensores a $36 cada uno.',
    problem: 'Monto total de la factura: 25 × 36 = ?',
    num1: 25,
    operator: '×',
    num2: 36,
    financialLesson: '💡 El comercio B2B (empresa a empresa) mueve volúmenes mucho más grandes que el B2C.',
    incomeImpact: 900,
    difficulty: 'Intermedio',
    color: '#00f3ff'
  },
  {
    title: 'Calibración en Laboratorio Certificado',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Certificas los sensores en banco de pruebas por $240 de tus $900.',
    problem: 'Beneficio neto industrial: 900 - 240 = ?',
    num1: 900,
    operator: '-',
    num2: 240,
    financialLesson: '💡 Las certificaciones de calidad ISO permiten acceder a contratos con multinacionales.',
    expenseImpact: 240,
    difficulty: 'Intermedio',
    color: '#ff007f'
  },
  {
    title: 'Cierre de Ejercicio del Nivel Intermedio',
    category: 'Presupuesto',
    operationType: 'sum',
    story: 'Sumas tu cuenta de operaciones de $570 con tu fondo de reserva de $430.',
    problem: 'Patrimonio líquido total: 570 + 430 = ?',
    num1: 570,
    operator: '+',
    num2: 430,
    financialLesson: '💡 Has completado la fase intermedia consolidando un fondo de $1000 con rigor contable.',
    incomeImpact: 1000,
    difficulty: 'Intermedio',
    color: '#fbbf24'
  },

  // --- TIER 3: NIVEL AVANZADO (Retos 71 a 100) - Alta Escala, Finanzas Corporativas y Desafíos Galácticos ---
  {
    title: 'Ronda de Inversión Semilla Ángel',
    category: 'Inversión',
    operationType: 'sum',
    story: 'Dos inversionistas ángeles aportan capital: $850 el primero y $650 el segundo.',
    problem: 'Total de capital levantado en la ronda: 850 + 650 = ?',
    num1: 850,
    operator: '+',
    num2: 650,
    financialLesson: '💡 El capital ángel financia las etapas iniciales a cambio de una participación accionaria.',
    incomeImpact: 1500,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Constitución Legal y Registro de Patentes',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas abogados y registro de propiedad intelectual por $380 de tus $1500.',
    problem: 'Caja disponible tras blindaje legal: 1500 - 380 = ?',
    num1: 1500,
    operator: '-',
    num2: 380,
    financialLesson: '💡 Proteger tus patentes y marcas evita que terceros copien tus innovaciones.',
    expenseImpact: 380,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Contrato de Desarrollo de Inteligencia Artificial',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Desarrollas 8 modelos neuronales de visión artificial a $175 cada modelo.',
    problem: 'Valor del contrato tecnológico: 8 × 175 = ?',
    num1: 8,
    operator: '×',
    num2: 175,
    financialLesson: '💡 La inteligencia artificial aplicada genera enorme valor añadido en la industria.',
    incomeImpact: 1400,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Consumo de Clúster de GPU en la Nube',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas el entrenamiento de los modelos en la nube por $450 de tus $1400.',
    problem: 'Margen de contribución del proyecto: 1400 - 450 = ?',
    num1: 1400,
    operator: '-',
    num2: 450,
    financialLesson: '💡 Optimizar el código reduce el tiempo de entrenamiento y el gasto de cómputo en servidores.',
    expenseImpact: 450,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Reparto de Dividendos Anuales entre 5 Socios',
    category: 'Reparto',
    operationType: 'divide',
    story: 'La empresa obtuvo $3500 de utilidad neta para distribuir entre 5 socios.',
    problem: 'Dividendo para cada socio inversionista: 3500 ÷ 5 = ?',
    num1: 3500,
    operator: '÷',
    num2: 5,
    financialLesson: '💡 Distribuir dividendos recompensa la confianza de los inversionistas.',
    incomeImpact: 700,
    difficulty: 'Avanzado',
    color: '#10b981'
  },
  {
    title: 'Exportación de Lote de 30 Drones Agrícolas',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Exportas 30 drones de monitoreo de cultivos a $65 por unidad.',
    problem: 'Valor FOB de la exportación: 30 × 65 = ?',
    num1: 30,
    operator: '×',
    num2: 65,
    financialLesson: '💡 La exportación abre mercados internacionales multiplicando la demanda.',
    incomeImpact: 1950,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Costos Portuarios y Aranceles de Aduana',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas aranceles y despacho aduanero por $480 de tus $1950.',
    problem: 'Ingreso neto por exportación: 1950 - 480 = ?',
    num1: 1950,
    operator: '-',
    num2: 480,
    financialLesson: '💡 Aprovechar tratados de libre comercio reduce aranceles y mejora tu competitividad.',
    expenseImpact: 480,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Venta de Licencias Corporativas SaaS',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Firmas dos contratos anuales de software: $1200 con una aerolínea y $850 con un banco.',
    problem: 'Facturación anual recurrente (ARR): 1200 + 850 = ?',
    num1: 1200,
    operator: '+',
    num2: 850,
    financialLesson: '💡 Los ingresos recurrentes anuales (ARR) dan estabilidad financiera a largo plazo.',
    incomeImpact: 2050,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Infraestructura de Servidores Dedicados y CDN',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas el clúster global con balanceadores de carga por $580 de tus $2050.',
    problem: 'Flujo de caja libre tras costos de servidor: 2050 - 580 = ?',
    num1: 2050,
    operator: '-',
    num2: 580,
    financialLesson: '💡 Una arquitectura escalable con CDN garantiza tiempos de respuesta bajo 50ms.',
    expenseImpact: 580,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Reparto de Fondo de Innovación entre 6 Equipos',
    category: 'Reparto',
    operationType: 'divide',
    story: 'Un presupuesto corporativo de I+D de $4200 se reparte entre 6 equipos de ingenieros.',
    problem: 'Presupuesto asignado a cada equipo: 4200 ÷ 6 = ?',
    num1: 4200,
    operator: '÷',
    num2: 6,
    financialLesson: '💡 Descentralizar presupuestos da autonomía y velocidad a los equipos de producto.',
    incomeImpact: 700,
    difficulty: 'Avanzado',
    color: '#10b981'
  },
  {
    title: 'Fabricación y Venta de 40 Baterías de Grafeno',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Vendes 40 celdas de batería ultrarrápida a $55 cada una.',
    problem: 'Ingreso total por manufactura avanzada: 40 × 55 = ?',
    num1: 40,
    operator: '×',
    num2: 55,
    financialLesson: '💡 La economía de escala abarata el costo de los nanomateriales por unidad producida.',
    incomeImpact: 2200,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Materia Prima: Láminas de Grafeno Sintético',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas al laboratorio químico $650 de materia prima de tus $2200.',
    problem: 'Beneficio bruto de manufactura: 2200 - 650 = ?',
    num1: 2200,
    operator: '-',
    num2: 650,
    financialLesson: '💡 Negociar contratos de suministro a largo plazo congela los precios de materias primas.',
    expenseImpact: 650,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Contrato de Modernización de Red Eléctrica Smart Grid',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Instalación de sensores de red inteligente: $1600 en hardware y $950 en software SCADA.',
    problem: 'Valor total del contrato con la ciudad: 1600 + 950 = ?',
    num1: 1600,
    operator: '+',
    num2: 950,
    financialLesson: '💡 Los contratos de infraestructura pública con ciudades inteligentes son de alta solvencia.',
    incomeImpact: 2550,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Póliza de Seguro de Responsabilidad Civil de Obra',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Contratas seguro contra contingencias por $720 de tus $2550.',
    problem: 'Utilidad neta disponible: 2550 - 720 = ?',
    num1: 2550,
    operator: '-',
    num2: 720,
    financialLesson: '💡 Toda gran obra de ingeniería debe contar con pólizas que mitiguen riesgos operativos.',
    expenseImpact: 720,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Reparto de Utilidades a Empleados (7 Áreas)',
    category: 'Reparto',
    operationType: 'divide',
    story: 'La empresa reparte un bono de utilidades de $4900 entre 7 departamentos clave.',
    problem: 'Bono para cada departamento: 4900 ÷ 7 = ?',
    num1: 4900,
    operator: '÷',
    num2: 7,
    financialLesson: '💡 Compartir utilidades alinea los incentivos de los trabajadores con el éxito de la empresa.',
    incomeImpact: 700,
    difficulty: 'Avanzado',
    color: '#10b981'
  },
  {
    title: 'Venta de 50 Servidores Edge Computing Reacondicionados',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Reacondicionas y vendes 50 mini-servidores para sucursales a $60 cada uno.',
    problem: 'Facturación del lote de servidores: 50 × 60 = ?',
    num1: 50,
    operator: '×',
    num2: 60,
    financialLesson: '💡 La economía circular en tecnología genera márgenes superiores al 40%.',
    incomeImpact: 3000,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Renovación de Procesadores y Memoria ECC',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Inviertes en nuevos módulos de memoria ECC por $850 de tus $3000.',
    problem: 'Saldo restante en el centro de datos: 3000 - 850 = ?',
    num1: 3000,
    operator: '-',
    num2: 850,
    financialLesson: '💡 La memoria con corrección de errores (ECC) es obligatoria en servidores de misión crítica.',
    expenseImpact: 850,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Adquisición de Licencia de Satélites Órbita Baja',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Recibes fondos gubernamentales: $2200 de subsidio espacial y $1100 de telemetría.',
    problem: 'Presupuesto total del proyecto aeroespacial: 2200 + 1100 = ?',
    num1: 2200,
    operator: '+',
    num2: 1100,
    financialLesson: '💡 La industria aeroespacial combina fondos públicos de investigación con clientes privados.',
    incomeImpact: 3300,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Pruebas en Cámara de Vacío y Vibración Térmica',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas los ensayos de certificación orbital por $940 de tus $3300.',
    problem: 'Capital remanente para el lanzamiento: 3300 - 940 = ?',
    num1: 3300,
    operator: '-',
    num2: 940,
    financialLesson: '💡 Fallar en la Tierra cuesta miles de dólares; fallar en órbita cuesta millones.',
    expenseImpact: 940,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Fondo de Venture Capital para 8 Startups Tecnológicas',
    category: 'Reparto',
    operationType: 'divide',
    story: 'Tu fondo de inversión asigna un pool de $5600 entre 8 startups aceleradas.',
    problem: 'Inversión semilla por startup: 5600 ÷ 8 = ?',
    num1: 5600,
    operator: '÷',
    num2: 8,
    financialLesson: '💡 Diversificar la inversión entre varias empresas prometedoras mitiga el riesgo de pérdida.',
    incomeImpact: 700,
    difficulty: 'Avanzado',
    color: '#10b981'
  },
  {
    title: 'Despliegue de 60 Puntos de Carga Rápida Eléctrica',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Instalas 60 cargadores de vehículos eléctricos cobrando $65 por terminal.',
    problem: 'Total facturado en infraestructura de movilidad: 60 × 65 = ?',
    num1: 60,
    operator: '×',
    num2: 65,
    financialLesson: '💡 La transición energética hacia vehículos eléctricos es uno de los mayores motores económicos.',
    incomeImpact: 3900,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Transformadores de Media Tensión y Cable Subterráneo',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas la acometida eléctrica y transformadores por $1150 de tus $3900.',
    problem: 'Beneficio neto de instalación: 3900 - 1150 = ?',
    num1: 3900,
    operator: '-',
    num2: 1150,
    financialLesson: '💡 Los transformadores de alta eficiencia amortizan su costo con menor pérdida térmica.',
    expenseImpact: 1150,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Desarrollo de Gemelo Digital para Fábrica Inteligente',
    category: 'Ingresos',
    operationType: 'sum',
    story: 'Programas la simulación 3D: $2800 por la arquitectura y $1450 por los algoritmos predictivos.',
    problem: 'Valor del gemelo digital industrial: 2800 + 1450 = ?',
    num1: 2800,
    operator: '+',
    num2: 1450,
    financialLesson: '💡 Los gemelos digitales permiten simular procesos y predecir fallas antes de que ocurran.',
    incomeImpact: 4250,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Licencia de Motor de Física y Simulación en Tiempo Real',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas el software de simulación física por $1280 de tus $4250.',
    problem: 'Ganancia neta del proyecto digital: 4250 - 1280 = ?',
    num1: 4250,
    operator: '-',
    num2: 1280,
    financialLesson: '💡 Utilizar motores gráficos consolidados acelera el time-to-market del producto.',
    expenseImpact: 1280,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Distribución de Dividendos Galácticos entre 9 Socios',
    category: 'Reparto',
    operationType: 'divide',
    story: 'La corporación reparte $6300 de superávit acumulado entre 9 directores.',
    problem: 'Dividendo para cada director: 6300 ÷ 9 = ?',
    num1: 6300,
    operator: '÷',
    num2: 9,
    financialLesson: '💡 Los dividendos premian la visión estratégica y la disciplina de gestión financiera.',
    incomeImpact: 700,
    difficulty: 'Avanzado',
    color: '#10b981'
  },
  {
    title: 'Venta Mayorista de 80 Nodos de Cómputo Cuántico',
    category: 'Ingresos',
    operationType: 'multiply',
    story: 'Un centro universitario te compra 80 procesadores criogénicos a $75 cada uno.',
    problem: 'Facturación mayorista cuántica: 80 × 75 = ?',
    num1: 80,
    operator: '×',
    num2: 75,
    financialLesson: '💡 La computación cuántica resolverá los desafíos matemáticos y logísticos del futuro.',
    incomeImpact: 6000,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Sistema de Refrigeración Criogénica de Helio Líquido',
    category: 'Gastos',
    operationType: 'subtract',
    story: 'Pagas la recarga de helio a 4 Kelvin por $1850 de tus $6000.',
    problem: 'Margen neto cuántico: 6000 - 1850 = ?',
    num1: 6000,
    operator: '-',
    num2: 1850,
    financialLesson: '💡 El control térmico extremo es el costo operativo vital para evitar la decoherencia cuántica.',
    expenseImpact: 1850,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Fusión y Adquisición de Empresa de Ciberdefensa',
    category: 'Inversión',
    operationType: 'sum',
    story: 'Tu empresa absorbe dos firmas aliadas: una valorada en $4500 y otra en $2850.',
    problem: 'Valoración total combinada tras la fusión: 4500 + 2850 = ?',
    num1: 4500,
    operator: '+',
    num2: 2850,
    financialLesson: '💡 Las fusiones y adquisiciones (M&A) consolidan cuota de mercado y crean sinergias.',
    incomeImpact: 7350,
    difficulty: 'Avanzado',
    color: '#00f3ff'
  },
  {
    title: 'Fondo Soberano de Reserva y Bóveda Anti-Crisis',
    category: 'Presupuesto',
    operationType: 'subtract',
    story: 'De tu capital consolidado de $7350, resguardas $2350 en una bóveda de máxima seguridad.',
    problem: 'Capital de trabajo activo en circulación: 7350 - 2350 = ?',
    num1: 7350,
    operator: '-',
    num2: 2350,
    financialLesson: '💡 Un fondo soberano de reserva garantiza liquidez perpetua ante cualquier crisis galáctica.',
    expenseImpact: 2350,
    difficulty: 'Avanzado',
    color: '#ff007f'
  },
  {
    title: 'Gran Balance Maestro: Coronación del Imperio Financiero',
    category: 'Ingresos',
    operationType: 'sum',
    story: '¡Has alcanzado la cima del ciberespacio! Tu capital operativo de $5000 se suma a las ganancias maestras finales de $4850.',
    problem: 'Balance Final del Maestro Galáctico: 5000 + 4850 = ?',
    num1: 5000,
    operator: '+',
    num2: 4850,
    financialLesson: '💡 ¡FELICITACIONES! Has completado los 100 Retos Financieros: Dominas Sumas, Restas, Multiplicaciones, Divisiones, Presupuestos y Estrategia de Capital.',
    incomeImpact: 4850,
    difficulty: 'Avanzado',
    color: '#fbbf24'
  }
];

// Helper to generate 4 distinct multiple-choice options with realistic distractors
function generateOptions(correctAnswer: number, operator: string): number[] {
  const optionsSet = new Set<number>();
  optionsSet.add(correctAnswer);

  const deltas = operator === '×'
    ? [-20, 20, -50, 50, -10, 10, -100, 100]
    : operator === '÷'
    ? [-10, 10, -25, 25, -5, 5, -50, 50]
    : [-10, 10, -15, 15, -20, 20, -5, 5, -100, 100];

  for (const delta of deltas) {
    if (optionsSet.size >= 4) break;
    const candidate = correctAnswer + delta;
    if (candidate > 0 && candidate !== correctAnswer) {
      optionsSet.add(candidate);
    }
  }

  // Fallback if needed
  let offset = 1;
  while (optionsSet.size < 4) {
    const candidate = correctAnswer + (offset * 10);
    if (candidate > 0) {
      optionsSet.add(candidate);
    }
    offset++;
  }

  return Array.from(optionsSet).sort(() => Math.random() - 0.5);
}

// Build the fully hydrated 100 FINANCIAL_MISSIONS
export const FINANCIAL_MISSIONS: FinancialMission[] = RAW_100_MISSIONS.map((raw, idx) => {
  const id = idx + 1;
  let correctAnswer = 0;
  if (raw.operator === '+') correctAnswer = raw.num1 + raw.num2;
  else if (raw.operator === '-') correctAnswer = raw.num1 - raw.num2;
  else if (raw.operator === '×') correctAnswer = raw.num1 * raw.num2;
  else if (raw.operator === '÷') correctAnswer = Math.round(raw.num1 / raw.num2);

  const options = generateOptions(correctAnswer, raw.operator);

  return {
    id,
    title: raw.title,
    category: raw.category,
    operationType: raw.operationType,
    story: raw.story,
    problem: raw.problem,
    equationDisplay: {
      num1: raw.num1,
      operator: raw.operator,
      num2: raw.num2
    },
    correctAnswer,
    options,
    financialLesson: raw.financialLesson,
    incomeImpact: raw.incomeImpact ?? (raw.category === 'Gastos' ? 0 : correctAnswer),
    expenseImpact: raw.expenseImpact ?? (raw.category === 'Gastos' ? raw.num2 : 0),
    difficulty: raw.difficulty,
    gridCoordinates: getMissionCoordinates(idx),
    color: raw.color || (raw.category === 'Gastos' ? '#ff007f' : '#00f3ff')
  };
});

export const FINANCIAL_TIPS = [
  {
    title: 'Ingresos vs Gastos (Cobres que entran vs cobres que salen)',
    concept: 'El flujo de caja es la diferencia entre todo el dinero que entra a tu cuenta y lo que gastas. ¡Pilas para mantener el saldo siempre positivo!',
    formula: 'Saldo Disponible = Ingresos Totales - Gastos Totales'
  },
  {
    title: 'Margen de Ganancia Limpia',
    concept: 'Es el porcentaje de cada venta que te queda en el bolsillo después de pagar insumos y costos. ¡Así sabes si el negocio está dando la talla!',
    formula: 'Margen (%) = (Ganancia Neta ÷ Ingresos) × 100'
  },
  {
    title: 'Regla de Ahorro 50/30/20',
    concept: '50% para lo indispensable, 30% para gustos y 20% guardado para tu fondo de inversión. ¡Cuidar cada locha te da libertad financiera!',
    formula: '50% Necesidades • 30% Gustos • 20% Ahorro Inteligente'
  },
  {
    title: 'Interés Compuesto (La bola de nieve)',
    concept: 'Ganar intereses sobre los mismos rendimientos generados con el tiempo. Pone a tus cobres a trabajar por ti a millón.',
    formula: 'Capital Final = Capital Inicial × (1 + tasa)^tiempo'
  }
];
