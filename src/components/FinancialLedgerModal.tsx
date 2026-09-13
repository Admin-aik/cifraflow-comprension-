import React from 'react';
import { Layers, TrendingUp, TrendingDown, DollarSign, X, CheckCircle, FileText } from 'lucide-react';
import { LedgerEntry } from '../types';
import { cyberAudio } from '../utils/audio';
import { CifraFlowLogo, CifraFlowSpace } from './CifraFlowLogo';

interface FinancialLedgerModalProps {
  ledgerEntries: LedgerEntry[];
  totalSumasIngresos: number;
  totalRestasGastos: number;
  saldoDisponible: number;
  onClose: () => void;
  onLogoClick?: () => void;
  onNavigateToSpace?: (space: CifraFlowSpace) => void;
}

export const FinancialLedgerModal: React.FC<FinancialLedgerModalProps> = ({
  ledgerEntries,
  totalSumasIngresos,
  totalRestasGastos,
  saldoDisponible,
  onClose,
  onLogoClick,
  onNavigateToSpace
}) => {
  return (
    <div
      id="financial-ledger-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-950/90 backdrop-blur-2xl border-2 border-fuchsia-500/70 p-5 sm:p-7 shadow-[0_0_50px_rgba(255,0,127,0.35)] ring-1 ring-cyan-500/40">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-fuchsia-500/30 pb-4 gap-3">
          <div className="flex items-center gap-3">
            <CifraFlowLogo
              size="sm"
              variant="horizontal"
              showSubtitle={false}
              currentSpace="FASE_3_SIMULATION"
              onClick={onLogoClick}
              tooltipText="Clic para regresar a la Portada de Avatares"
              onNavigateToSpace={onNavigateToSpace}
              showSpaceMenu={true}
            />
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/20 border border-fuchsia-400 shadow-[0_0_15px_#ff007f] shrink-0">
                <Layers className="h-5 w-5 text-fuchsia-300" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-fuchsia-400">
                  Bitácora Cognitiva Cyber-Space
                </span>
                <h2 className="text-lg sm:text-xl font-black text-white">
                  Registro de Razonamiento & Aciertos
                </h2>
              </div>
            </div>
          </div>
          <button
            id="ledger-close-btn"
            onClick={() => {
              cyberAudio.playClick(500);
              cyberAudio.speak('Cerrando bitácora cognitiva.');
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-900/80 border border-fuchsia-500/30 text-fuchsia-300 hover:text-white hover:bg-fuchsia-500/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Summary Overview Cards */}
        <div className="mt-4 grid grid-cols-3 gap-2.5 font-mono text-center">
          <div
            onClick={() => {
              cyberAudio.playClick(600);
              cyberAudio.speak(`Total puntos por acierto acumulados: ${totalSumasIngresos} puntos.`);
            }}
            className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 cursor-pointer hover:border-cyan-400 transition-all"
          >
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Aciertos Totales</div>
            <div className="text-sm sm:text-base font-bold text-cyan-300">+{totalSumasIngresos.toLocaleString()} pts</div>
          </div>
          <div
            onClick={() => {
              cyberAudio.playClick(600);
              cyberAudio.speak(`Total penalizaciones acumuladas: ${totalRestasGastos} puntos.`);
            }}
            className="p-2.5 rounded-xl bg-fuchsia-950/40 border border-fuchsia-500/30 cursor-pointer hover:border-fuchsia-400 transition-all"
          >
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Penalizaciones</div>
            <div className="text-sm sm:text-base font-bold text-fuchsia-300">-{totalRestasGastos.toLocaleString()} pts</div>
          </div>
          <div
            onClick={() => {
              cyberAudio.playClick(600);
              cyberAudio.speak(`Balance cognitivo final: ${saldoDisponible} puntos.`);
            }}
            className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 cursor-pointer hover:border-emerald-400 transition-all"
          >
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Balance Final</div>
            <div className="text-sm sm:text-base font-bold text-emerald-300">{saldoDisponible.toLocaleString()} pts</div>
          </div>
        </div>

        {/* Transactions Table / List */}
        <div className="mt-5 max-h-72 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
          {ledgerEntries.map((entry) => (
            <div
              key={entry.id}
              onClick={() => {
                cyberAudio.playClick(700);
                cyberAudio.speak(`${entry.concept}: ${entry.type === 'gasto' ? 'penalización de' : 'bonificación de'} ${entry.amount} puntos.`);
              }}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all font-mono text-xs cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    entry.type === 'ingreso' || entry.type === 'balance_inicial'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30'
                  }`}
                >
                  {entry.type === 'ingreso' || entry.type === 'balance_inicial' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <p className="font-sans font-semibold text-slate-200">{entry.concept}</p>
                  <p className="text-[10px] text-slate-400">{entry.timestamp} • {entry.operationText}</p>
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`font-bold ${
                    entry.type === 'ingreso' || entry.type === 'balance_inicial'
                      ? 'text-cyan-300'
                      : 'text-fuchsia-400'
                  }`}
                >
                  {entry.type === 'ingreso' || entry.type === 'balance_inicial' ? '+' : '-'}{entry.amount} pts
                </div>
                <div className="text-[10px] text-slate-500">
                  Saldo: {entry.runningBalance} pts
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cognitive Formula Footer */}
        <div className="mt-5 p-3 rounded-xl bg-slate-900 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Fórmula: Balance = Energía Base + ∑Aciertos - ∑Penalizaciones</span>
          </div>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" /> Lógica Formal
          </span>
        </div>
      </div>
    </div>
  );
};
