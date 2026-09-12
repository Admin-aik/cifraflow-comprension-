import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, User, School, FileText, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { StudentProfile } from '../types';
import { cyberAudio } from '../utils/audio';
import { CIFRAFLOW_BANNER_IMAGE, CIFRA_AVATARS } from '../data/avatars';
import { CifraFlowLogo } from './CifraFlowLogo';

interface CifraLoginScreenProps {
  onLoginSuccess: (student: StudentProfile) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  bcvRate: number;
}

export const CifraLoginScreen: React.FC<CifraLoginScreenProps> = ({
  onLoginSuccess,
  soundEnabled,
  onToggleSound,
  bcvRate
}) => {
  const [fullName, setFullName] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Por favor introduce tu Nombre y Apellido');
      cyberAudio.playError();
      return;
    }
    if (!nationalId.trim()) {
      setErrorMsg('Por favor introduce tu Cédula de Identidad');
      cyberAudio.playError();
      return;
    }
    if (!schoolName.trim()) {
      setErrorMsg('Por favor introduce tu Institución Educativa');
      cyberAudio.playError();
      return;
    }

    setErrorMsg('');
    cyberAudio.narrateCifraFlowWelcome();
    onLoginSuccess({
      fullName: fullName.trim(),
      nationalId: nationalId.trim(),
      schoolName: schoolName.trim(),
      nombre: fullName.trim(),
      cedula: nationalId.trim(),
      institucion: schoolName.trim(),
      registrationTimestamp: Date.now()
    });
  };

  const handleAutofillDemo = () => {
    setFullName('Alejandro Rodríguez');
    setNationalId('V-31.849.204');
    setSchoolName('U.E. Nacional Simón Bolívar (Caracas)');
    setErrorMsg('');
    cyberAudio.playClick(900);
  };

  return (
    <div
      id="cifra-login-screen"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/90 backdrop-blur-2xl p-4 sm:p-6"
    >
      {/* Background Cyber Glow Grids */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#00f3ff14_1px,transparent_1px)] [background-size:20px_20px] opacity-70" />
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />

      {/* Main Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-cyan-500/40 bg-slate-900/85 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,243,255,0.25)] ring-1 ring-fuchsia-500/30"
      >
        {/* Top Sound & Engine Bar with Official CifraFlow Logo */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <CifraFlowLogo size="sm" variant="horizontal" />
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MATRIZ: <strong>75 RETOS EN SECUENCIA</strong></span>
            </div>
          </div>

          <button
            id="login-sound-toggle-btn"
            onClick={onToggleSound}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/80 border border-cyan-500/30 text-cyan-300 hover:text-cyan-100 hover:border-cyan-400 text-xs font-mono transition-colors cursor-pointer"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">Audio Latino Neutro ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">Audio OFF</span>
              </>
            )}
          </button>
        </div>

        {/* Panoramic Adolescent Team Banner with Complete Avatars & Centered CifraFlow Logo */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-cyan-500/40 shadow-[0_0_30px_rgba(0,243,255,0.2)] mb-5 group bg-slate-950">
          <div className="w-full aspect-[16/9] max-h-[340px] sm:max-h-[380px] relative overflow-hidden flex items-center justify-center">
            <img
              src={CIFRAFLOW_BANNER_IMAGE}
              alt="CifraFlow Equipo Adolescente con Logotipo Central"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain sm:object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Subtle bottom edge gradient for readability without obscuring faces or heads */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/30 border border-cyan-400/60 text-cyan-200 text-[10px] font-mono uppercase tracking-widest font-bold backdrop-blur-sm">
                    FASE 0: IDENTIFICACIÓN TÁCTICA
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/30 border border-emerald-400/60 text-emerald-200 text-[10px] font-mono uppercase tracking-widest font-bold backdrop-blur-sm">
                    PENSAMIENTO LÓGICO-MATEMÁTICO
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  CifraFlow Lógico-Matemático
                </h1>
              </div>

              <button
                type="button"
                onClick={handleAutofillDemo}
                className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/20 hover:text-white text-xs font-mono transition-all shadow-md cursor-pointer shrink-0 backdrop-blur-sm"
              >
                Cargar Ejemplo
              </button>
            </div>
          </div>
        </div>

        {/* Adolescent Avatars Showcase Strip */}
        <div className="mb-5 p-3 rounded-2xl bg-slate-950/70 border border-cyan-500/20">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-2 text-center sm:text-left">
            AVATARES ADOLESCENTES DE ENTRENAMIENTO COGNITIVO:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {CIFRA_AVATARS.map((avatar) => (
              <div
                key={avatar.id}
                className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-xl border border-slate-800"
              >
                <img
                  src={avatar.imageSrc}
                  alt={avatar.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-lg object-cover border border-cyan-400/40 shrink-0"
                />
                <div className="overflow-hidden">
                  <div className="text-xs font-bold font-mono text-white truncate">{avatar.name}</div>
                  <div className="text-[10px] font-mono text-cyan-300 truncate">15-16 años</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unified Platform Description in Single Color (Plata Neón / Blanco Cristal #f8fafc) */}
        <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-3.5 mb-6 text-center">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-100 leading-relaxed font-sans">
            "Plataforma interactiva de simulación que integra Comprensión Lectora, Pensamiento Aritmético, Lógica Deductiva, Patrones y Combinatoria, y Problemas Lógicos Complejos"
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Field 1: Nombre del Estudiante */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                Nombre del Estudiante
              </label>
              <input
                id="student-name-input"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ej. Sofía Mendoza"
                className="w-full rounded-xl bg-slate-950/80 border border-cyan-500/40 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all font-sans"
              />
            </div>

            {/* Field 2: Cédula de Identidad */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-fuchsia-300 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-fuchsia-400" />
                Cédula de Identidad
              </label>
              <input
                id="student-id-input"
                type="text"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                placeholder="Ej. V-32.124.567"
                className="w-full rounded-xl bg-slate-950/80 border border-fuchsia-500/40 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 transition-all font-sans"
              />
            </div>

            {/* Field 3: Institución Educativa */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                <School className="w-3.5 h-3.5 text-emerald-400" />
                Institución Educativa
              </label>
              <input
                id="student-school-input"
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                placeholder="Ej. U.E. Colegio San Francisco"
                className="w-full rounded-xl bg-slate-950/80 border border-emerald-500/40 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 transition-all font-sans"
              />
            </div>
          </div>

          {errorMsg && (
            <div className="text-xs font-mono text-rose-400 bg-rose-950/40 border border-rose-500/40 rounded-xl p-2.5 text-center">
              ⚠️ {errorMsg}
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Conexión cifrada TLS con verificación Zero Trust</span>
            </div>

            <button
              id="cifra-login-submit-btn"
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500 text-slate-950 font-black uppercase tracking-wider text-sm hover:opacity-95 shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>ACCEDER AL SISTEMA CIFRAFLOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
