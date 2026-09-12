// Motor de Voz & Efectos de Audio - Español Latinoamericano Neutro
// Configurado con prosodia clara, tono motivador y selección prioritaria de voces es-419, es-MX, es-US y es-CO.

class NeutralLatinAudioEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;
  public voiceVolume: number = 0.95;
  private selectedVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoiceSelection();
      window.speechSynthesis.onvoiceschanged = () => {
        this.initVoiceSelection();
      };
    }
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private initVoiceSelection() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    // Prioridad estricta para voces en español latinoamericano neutro
    const preferredOrder = [
      (v: SpeechSynthesisVoice) => v.lang === 'es-419',
      (v: SpeechSynthesisVoice) => v.lang === 'es-MX',
      (v: SpeechSynthesisVoice) => v.lang.startsWith('es-') && (
        v.name.includes('Latin') ||
        v.name.includes('Paulina') ||
        v.name.includes('Sabina') ||
        v.name.includes('Raul') ||
        v.name.includes('Jorge') ||
        v.name.includes('Mia') ||
        v.name.includes('Diego') ||
        v.name.includes('Carlos') ||
        v.name.includes('Alonso') ||
        v.name.includes('Lupe') ||
        v.name.includes('Monica')
      ),
      (v: SpeechSynthesisVoice) => v.lang.startsWith('es-US'),
      (v: SpeechSynthesisVoice) => v.lang.startsWith('es-CO'),
      (v: SpeechSynthesisVoice) => v.lang.startsWith('es-AR'),
      (v: SpeechSynthesisVoice) => v.lang.startsWith('es-CL'),
      (v: SpeechSynthesisVoice) => v.lang.startsWith('es')
    ];

    for (const matcher of preferredOrder) {
      const match = voices.find(matcher);
      if (match) {
        this.selectedVoice = match;
        break;
      }
    }
  }

  /**
   * Sintetiza y narra mensajes con acento español latinoamericano neutro.
   */
  public speak(phrase: string, options?: { rate?: number; pitch?: number; cancelPrevious?: boolean }) {
    if (!this.enabled) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    try {
      if (options?.cancelPrevious !== false) {
        window.speechSynthesis.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(phrase);
      if (!this.selectedVoice) {
        this.initVoiceSelection();
      }

      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
        utterance.lang = this.selectedVoice.lang;
      } else {
        utterance.lang = 'es-419';
      }

      utterance.volume = this.voiceVolume;
      utterance.rate = options?.rate ?? 1.0; // Cadencia natural y comprensible
      utterance.pitch = options?.pitch ?? 1.0;

      window.speechSynthesis.speak(utterance);
    } catch {
      // Speech synthesis fallback
    }
  }

  // --- NARRACIONES TÁCTICAS EN ESPAÑOL LATINOAMERICANO NEUTRO ---

  /**
   * Finalización de cada reto:
   * Al finalizar cada reto debe decir: "Game over, fin de este reto, vamos al siguiente."
   * Y llevar el acumulado de sumas hasta el gran final.
   */
  public narrateChallengeCompleted(challengeNumber: number, isLast: boolean, pointsWon: number, newTotal: number) {
    this.playSuccess();
    this.playCashRegister();
    if (isLast) {
      this.speak(
        `Game over, fin de este reto, vamos al siguiente. ¡Reto final completado! Has sumado todos los retos completos con un total de ${newTotal} puntos. ¡Felicitaciones, misión cumplida!`
      );
    } else {
      this.speak(
        `Game over, fin de este reto, vamos al siguiente. Sumas ${pointsWon} puntos. Total acumulado: ${newTotal} puntos.`
      );
    }
  }

  // Selección de Avatar Adolescente
  public narrateAvatarSelect(avatarName: string) {
    this.playClick(880);
    const lower = avatarName.toLowerCase();
    if (lower.includes('ircar')) {
      this.speak('¡Ircar seleccionada! Estudiante adolescente especialista en comprensión lectora y detección de distractores en problemas lógicos.');
    } else if (lower.includes('jorge')) {
      this.speak('¡Jorge seleccionado! Estudiante adolescente táctico en cálculo mental rápido y pensamiento aritmético.');
    } else if (lower.includes('iván') || lower.includes('ivan')) {
      this.speak('¡Iván seleccionado! Estudiante adolescente estratega de lógica deductiva, silogismos y validación de premisas.');
    } else if (lower.includes('carlos')) {
      this.speak('¡Carlos seleccionado! Estudiante adolescente arquitecto de patrones secuenciales, combinatoria y enigmas complejos.');
    } else {
      this.speak(`¡Excelente elección! ${avatarName} listo para el entrenamiento cognitivo.`);
    }
  }

  // Bienvenida CifraFlow
  public narrateCifraFlowWelcome() {
    this.playPortalOpen();
    this.speak('¡Bienvenido a CifraFlow! Plataforma de simulación interactiva para el desarrollo del Pensamiento Lógico-Matemático, Aritmética y Comprensión Lectora. Elige tu avatar adolescente para comenzar.');
  }

  // Selección de Módulo
  public narrateModuleSelect(moduleTitle: string) {
    this.playClick(920);
    this.speak(`Módulo seleccionado: ${moduleTitle}. ¡Atención a los enunciados y máxima concentración!`);
  }

  // Inicio de Reto
  public narrateChallengeStart(challengeIndex: number, title: string, moduleTitle?: string, complexity?: string) {
    this.playPortalOpen();
    const modTxt = moduleTitle ? ` en ${moduleTitle}` : '';
    const compTxt = complexity ? `, nivel ${complexity}` : '';
    this.speak(`Reto número ${challengeIndex}: ${title}${modTxt}${compTxt}. Lee el enunciado con atención y deduce la respuesta correcta.`);
  }

  // Respuesta Correcta Tradicional
  public narrateCifraFlowCorrect(delta: number) {
    this.playSuccess();
    this.playCashRegister();
    const phrases = [
      `¡Excelente deducción! Sumas ${delta} puntos a tu récord cognitivo.`,
      `¡Muy bien pensado! Razonamiento lógico exacto. Has ganado ${delta} puntos.`,
      `¡Respuesta correcta! Tu agilidad matemática suma ${delta} puntos.`,
      `¡Perfecto! Inferencia impecable. Agregas ${delta} puntos a tu balance.`
    ];
    this.speak(phrases[Math.floor(Math.random() * phrases.length)]);
  }

  // Respuesta Incorrecta (Penalización sin revelar la respuesta)
  public narrateCifraFlowWrong(delta: number) {
    this.playError();
    const phrases = [
      `Atención: se ha detectado una inconsistencia lógica. Se descuentan ${Math.abs(delta)} puntos. Lee nuevamente las premisas con calma.`,
      `Esa respuesta no satisface las condiciones del enunciado. Se te penaliza con ${Math.abs(delta)} puntos. ¡Inténtalo de nuevo!`,
      `Cuidado con los distractores. Pierdes ${Math.abs(delta)} puntos. Revisa el caso paso a paso.`,
      `El cálculo o la inferencia no coincide. Se restan ${Math.abs(delta)} puntos. Analiza las opciones y vuelve a intentarlo.`
    ];
    this.speak(phrases[Math.floor(Math.random() * phrases.length)]);
  }

  // Game Over por agotamiento de balance
  public narrateGameOver() {
    this.playError();
    this.speak('¡Alerta! Tu energía cognitiva ha llegado a cero por errores consecutivos. Protocolo de reactivación disponible. Revisa las reglas de inferencia y reinicia con mayor precisión.');
  }

  // Gran Cierre Final
  public narrateMissionAccomplished(totalPoints: number) {
    this.playSuccess();
    this.speak(`¡Gran triunfo final! Has conquistado los 75 retos de CifraFlow sumando un total acumulado de ${totalPoints} puntos. ¡Felicitaciones por tu maestría en comprensión lectora y pensamiento lógico-matemático!`);
  }

  // Selector de Dificultad
  public narrateDifficultySelect(level: string) {
    this.playClick(1020);
    this.speak(`Nivel ${level} configurado para el entrenamiento.`);
  }

  // Inicio de partida
  public narrateStartGame(avatarName: string, _difficulty?: string) {
    this.playSuccess();
    this.speak(`¡Iniciamos el simulador con ${avatarName}! Mucho éxito en cada reto.`);
  }

  // Apertura de Portal
  public narrateOpenPortal(missionId: number) {
    this.playPortalOpen();
    this.speak(`Portal abierto para el reto número ${missionId}.`);
  }

  // Bitácora / Ledger
  public narrateOpenLedger() {
    this.playClick(750);
    this.speak('Abriendo la bitácora de desempeño lógico y registro de puntajes acumulados.');
  }

  // Glosario / Compendio
  public narrateOpenGlossary() {
    this.playClick(850);
    this.speak('Abriendo el compendio táctico de lógica y matemáticas.');
  }

  // Toggle Cámara 3D
  public narrateCameraToggle(mode: string) {
    this.playClick(700);
    if (mode === 'orbital') {
      this.speak('Vista orbital activa.');
    } else if (mode === 'portal_focus') {
      this.speak('Cámara enfocada en el portal.');
    } else {
      this.speak('Modo cinematográfico activado.');
    }
  }

  // Toggle Sonido
  public narrateToggleSound(enabled: boolean) {
    if (enabled) {
      this.speak('Efectos y voz en español latinoamericano neutro activados.');
    }
  }

  // Compatibilidad con portal numérico
  public narrateOptionClick(value: number) {
    this.playClick(880);
    this.speak(`Seleccionaste ${value}.`);
  }

  public narrateCorrectAnswer(points: number, _category?: string) {
    this.playSuccess();
    this.speak(`¡Excelente! Has resuelto el ejercicio sumando ${points} puntos.`);
  }

  public narrateWrongAnswer(value?: number) {
    this.playError();
    if (value !== undefined) {
      this.speak(`El valor ${value} no es correcto. Revisa el planteamiento y vuelve a intentar.`);
    } else {
      this.speak('Respuesta incorrecta. Revisa el planteamiento e inténtalo nuevamente.');
    }
  }

  // --- EFECTOS DE SONIDO SINTETIZADOS (Web Audio API) ---

  public playClick(freq = 800) {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Audio fallback
    }
  }

  public playCashRegister() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.15, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.25);
      });
    } catch {
      // Audio fallback
    }
  }

  public playPortalOpen() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {
      // Audio fallback
    }
  }

  public playSuccess() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const freqs = [440, 554.37, 659.25, 880];
      freqs.forEach((f, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + i * 0.08);

        gain.gain.setValueAtTime(0.18, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.4);
      });
    } catch {
      // Audio fallback
    }
  }

  public playError() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(90, now + 0.2);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch {
      // Audio fallback
    }
  }
}

export const cyberAudio = new NeutralLatinAudioEngine();
