import React, { useState, useEffect } from 'react';
import { CyberScene3D } from './components/CyberScene3D';
import { FinancialHUD } from './components/FinancialHUD';
import { MissionPathwayOverlay } from './components/MissionPathwayOverlay';
import { CifraLoginScreen } from './components/CifraLoginScreen';
import { CifraAvatarSelection } from './components/CifraAvatarSelection';
import { CifraModuleSelection } from './components/CifraModuleSelection';
import { CifraChallengeModal } from './components/CifraChallengeModal';
import { CifraGameOverModal } from './components/CifraGameOverModal';
import { CifraFinalMissionModal } from './components/CifraFinalMissionModal';
import { FinancialLedgerModal } from './components/FinancialLedgerModal';
import { FinancialGlossaryModal } from './components/FinancialGlossaryModal';

import { ALL_CHALLENGES } from './data/allChallenges';
import { CIFRA_AVATARS, CIFRA_MODULES } from './data/avatars';
import { StudentProfile, CifraChallenge, LedgerEntry } from './types';
import { cyberAudio } from './utils/audio';

type CifraFlowPhase =
  | 'FASE_0_LOGIN'
  | 'FASE_1_AVATAR'
  | 'FASE_2_MODULE_SELECT'
  | 'FASE_3_SIMULATION'
  | 'FASE_4_GAMEOVER'
  | 'FASE_5_FINAL_MISSION';

export default function App() {
  // Phase state machine
  const [currentPhase, setCurrentPhase] = useState<CifraFlowPhase>('FASE_0_LOGIN');

  // Student Profile
  const [student, setStudent] = useState<StudentProfile | null>(null);

  // Selected Avatar (Default to Ircar)
  const [selectedAvatarId, setSelectedAvatarId] = useState<string>(CIFRA_AVATARS[0].id);

  // BCV Official Exchange Rate (Dynamic simulation)
  const [bcvRate, setBcvRate] = useState<number>(36.50);

  // Financial Balance (Starts with 500 seed capital, supports negative balance)
  const [totalBalance, setTotalBalance] = useState<number>(500);

  // Completed challenges tracking
  const [completedChallengeIds, setCompletedChallengeIds] = useState<number[]>([]);

  // Current active challenge in simulation
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState<number>(0);
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState<boolean>(false);

  // Secondary Modals
  const [activeSecondaryModal, setActiveSecondaryModal] = useState<'none' | 'ledger' | 'glossary'>('none');

  // 3D Canvas Telemetry
  const [lastActionStatus, setLastActionStatus] = useState<'advance' | 'defeat' | 'idle'>('idle');
  const [cameraMode, setCameraMode] = useState<'orbital' | 'portal_focus' | 'cinematic'>('orbital');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Accounting Ledger
  const [ledgerEntries, setLedgerEntries] = useState<LedgerEntry[]>([
    {
      id: 'init-seed',
      timestamp: 'Inicio de Misión',
      concept: 'Capital Semilla Asignado CifraFlow',
      type: 'ingreso',
      amount: 500,
      runningBalance: 500,
      operationText: 'Saldo Inicial = +500 pts'
    }
  ]);

  // Audio Toggle
  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    cyberAudio.enabled = nextState;
  };

  // Avatar Switcher
  const handleToggleAvatar = () => {
    const currentIndex = CIFRA_AVATARS.findIndex((a) => a.id === selectedAvatarId);
    const nextIndex = (currentIndex + 1) % CIFRA_AVATARS.length;
    const nextAvatar = CIFRA_AVATARS[nextIndex];
    setSelectedAvatarId(nextAvatar.id);
    cyberAudio.narrateAvatarSelect(nextAvatar.name);
  };

  // Camera Switcher
  const handleToggleCameraMode = () => {
    setCameraMode((prev) => {
      if (prev === 'orbital') return 'portal_focus';
      if (prev === 'portal_focus') return 'cinematic';
      return 'orbital';
    });
  };

  // FASE 0 -> FASE 1
  const handleLoginSuccess = (profile: StudentProfile) => {
    setStudent(profile);
    setCurrentPhase('FASE_1_AVATAR');
  };

  // Unified Space Navigation
  const handleNavigateToSpace = (space: CifraFlowPhase) => {
    if (!student && space !== 'FASE_0_LOGIN') {
      setStudent({
        nationalId: 'V-30.123.456',
        fullName: 'Estudiante CifraFlow',
        schoolName: 'U.E. República de Venezuela'
      });
    }

    // Always close open modals when switching spaces
    setIsChallengeModalOpen(false);
    setActiveSecondaryModal('none');

    setCurrentPhase(space);
    if (space === 'FASE_0_LOGIN') {
      cyberAudio.speak('Regresando al inicio de sesión.');
    } else if (space === 'FASE_1_AVATAR') {
      cyberAudio.speak('Regresando a la portada de avatares.');
    } else if (space === 'FASE_2_MODULE_SELECT') {
      cyberAudio.speak('Abriendo módulos de entrenamiento.');
    } else if (space === 'FASE_3_SIMULATION') {
      cyberAudio.speak('Ingresando al cyber-space de simulación.');
    }
  };

  // Dedicated Logo Click Behavior:
  // - From Avatar Selection -> Returns to Login
  // - From any other screen/modal -> Returns to Avatar Selection
  const handleLogoClick = () => {
    if (currentPhase === 'FASE_1_AVATAR') {
      handleNavigateToSpace('FASE_0_LOGIN');
    } else {
      handleNavigateToSpace('FASE_1_AVATAR');
    }
  };

  // FASE 1 -> FASE 2
  const handleConfirmAvatar = () => {
    setCurrentPhase('FASE_2_MODULE_SELECT');
  };

  // FASE 2 -> FASE 3 (Specific Module or Complexity Tier selected)
  const handleSelectModule = (moduleId: string, targetChallengeId?: number) => {
    const targetModule = CIFRA_MODULES.find((m) => m.id === moduleId);
    if (!targetModule) return;

    let targetChallenge: (typeof ALL_CHALLENGES)[0] | undefined;

    if (targetChallengeId) {
      targetChallenge = ALL_CHALLENGES.find((c) => c.id === targetChallengeId);
    }

    if (!targetChallenge) {
      // Find the first challenge of this module or the next incomplete challenge
      const moduleChallenges = ALL_CHALLENGES.filter((c) => c.moduleId === moduleId);
      const incomplete = moduleChallenges.find((c) => !completedChallengeIds.includes(c.id));
      targetChallenge = incomplete || moduleChallenges[0] || ALL_CHALLENGES[0];
    }

    const idx = ALL_CHALLENGES.findIndex((c) => c.id === targetChallenge!.id);
    setCurrentChallengeIndex(idx >= 0 ? idx : 0);
    setCurrentPhase('FASE_3_SIMULATION');
    setIsChallengeModalOpen(true);
  };

  // FASE 2 -> FASE 3 (Start All 75 sequentially)
  const handleStartAllChallenges = () => {
    setCurrentChallengeIndex(0);
    setCurrentPhase('FASE_3_SIMULATION');
    setIsChallengeModalOpen(true);
  };

  // Challenge resolution (Correct or Wrong with negative penalty)
  const handleAnswerResolved = (pointsDelta: number, isCorrect: boolean) => {
    const activeCh = ALL_CHALLENGES[currentChallengeIndex];
    const newBalance = totalBalance + pointsDelta;
    setTotalBalance(newBalance);

    if (isCorrect) {
      setLastActionStatus('advance');
      setTimeout(() => setLastActionStatus('idle'), 3500);

      if (!completedChallengeIds.includes(activeCh.id)) {
        setCompletedChallengeIds((prev) => {
          const updated = [...prev, activeCh.id];
          // Check if all 75 challenges completed
          if (updated.length >= 75) {
            setTimeout(() => {
              setIsChallengeModalOpen(false);
              setCurrentPhase('FASE_5_FINAL_MISSION');
            }, 1200);
          }
          return updated;
        });
      }

      // Record to Ledger
      const entry: LedgerEntry = {
        id: `tx-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        concept: `${activeCh.title} (Acierto)`,
        type: 'ingreso',
        amount: pointsDelta,
        runningBalance: newBalance,
        operationText: `Reto #${activeCh.id} superado (+${pointsDelta} pts)`
      };
      setLedgerEntries((prev) => [entry, ...prev]);
    } else {
      setLastActionStatus('defeat');
      setTimeout(() => setLastActionStatus('idle'), 3500);

      // Record penalty to Ledger
      const entry: LedgerEntry = {
        id: `tx-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        concept: `${activeCh.title} (Penalización)`,
        type: 'gasto',
        amount: Math.abs(pointsDelta),
        runningBalance: newBalance,
        operationText: `Error en Reto #${activeCh.id} (${pointsDelta} pts)`
      };
      setLedgerEntries((prev) => [entry, ...prev]);

      // Check for bankruptcy (Saldo <= 0)
      if (newBalance <= 0) {
        setTimeout(() => {
          setIsChallengeModalOpen(false);
          setCurrentPhase('FASE_4_GAMEOVER');
          cyberAudio.narrateGameOver();
        }, 1200);
      }
    }
  };

  // Next Challenge handler - Lleva al siguiente reto y continúa sumando
  const handleNextChallenge = () => {
    if (currentChallengeIndex < ALL_CHALLENGES.length - 1) {
      const nextIdx = currentChallengeIndex + 1;
      setCurrentChallengeIndex(nextIdx);
      setIsChallengeModalOpen(true);
      const nextCh = ALL_CHALLENGES[nextIdx];
      if (nextCh) {
        cyberAudio.narrateChallengeStart(nextCh.challengeIndexInModule, nextCh.title, nextCh.moduleTitle);
      }
    } else {
      // Completed all 75 challenges
      setIsChallengeModalOpen(false);
      setCurrentPhase('FASE_5_FINAL_MISSION');
      cyberAudio.narrateMissionAccomplished(totalBalance);
    }
  };

  // Restart with seed capital after Game Over
  const handleRestartWithSeedCapital = () => {
    setTotalBalance(500);
    setCurrentPhase('FASE_3_SIMULATION');
    setIsChallengeModalOpen(true);

    const restartEntry: LedgerEntry = {
      id: `restart-${Date.now()}`,
      timestamp: 'Inyección de Rescate',
      concept: 'Capital Semilla de Reactivación',
      type: 'ingreso',
      amount: 500,
      runningBalance: 500,
      operationText: 'Rescate de liquidez: +500 pts'
    };
    setLedgerEntries((prev) => [restartEntry, ...prev]);
  };

  // Full restart for a new cycle
  const handleRestartAll = () => {
    setTotalBalance(500);
    setCompletedChallengeIds([]);
    setCurrentChallengeIndex(0);
    setCurrentPhase('FASE_2_MODULE_SELECT');
  };

  // Derived current challenge & avatar
  const activeChallenge = ALL_CHALLENGES[currentChallengeIndex] || ALL_CHALLENGES[0];
  const currentAvatar = CIFRA_AVATARS.find((a) => a.id === selectedAvatarId) || CIFRA_AVATARS[0];

  // Module Progress mapping for FASE 2
  const moduleProgress: Record<string, number> = {};
  CIFRA_MODULES.forEach((mod) => {
    const modChallenges = ALL_CHALLENGES.filter((c) => c.moduleId === mod.id);
    const count = modChallenges.filter((c) => completedChallengeIds.includes(c.id)).length;
    moduleProgress[mod.id] = count;
  });

  // Calculate totals for ledger
  const totalIngresos = ledgerEntries
    .filter((e) => e.type === 'ingreso')
    .reduce((acc, e) => acc + e.amount, 0);
  const totalGastos = ledgerEntries
    .filter((e) => e.type === 'gasto')
    .reduce((acc, e) => acc + e.amount, 0);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#040313] text-slate-100 font-sans select-none">
      {/* 3D WebGL Three.js Cyber-Space Canvas */}
      <CyberScene3D
        currentMissionIndex={currentChallengeIndex}
        completedMissions={completedChallengeIds}
        selectedAvatarId={selectedAvatarId}
        aciertos={completedChallengeIds.length}
        defeatsCount={ledgerEntries.filter((e) => e.type === 'gasto').length}
        lastActionStatus={lastActionStatus}
        onSelectMission={(idx) => {
          setCurrentChallengeIndex(idx);
          setIsChallengeModalOpen(true);
        }}
        onOpenPortal={() => setIsChallengeModalOpen(true)}
        cameraMode={cameraMode}
      />

      {/* Persistent Upper Left HUD (Visible during Simulation and Game Modes) */}
      {currentPhase !== 'FASE_0_LOGIN' && currentPhase !== 'FASE_1_AVATAR' && (
        <FinancialHUD
          student={student}
          selectedAvatarId={selectedAvatarId}
          totalBalance={totalBalance}
          completedChallengesCount={completedChallengeIds.length}
          activeModuleTitle={activeChallenge.moduleTitle}
          activeChallengeIndex={activeChallenge.challengeIndexInModule}
          totalModuleChallenges={15}
          bcvRate={bcvRate}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onOpenLedger={() => setActiveSecondaryModal('ledger')}
          onOpenGlossary={() => setActiveSecondaryModal('glossary')}
          onOpenModules={() => setCurrentPhase('FASE_2_MODULE_SELECT')}
          onChangeAvatar={() => handleNavigateToSpace('FASE_1_AVATAR')}
          onLogoClick={handleLogoClick}
          onNavigateToSpace={handleNavigateToSpace}
        />
      )}

      {/* Persistent Bottom Pathway Dock */}
      {currentPhase === 'FASE_3_SIMULATION' && (
        <MissionPathwayOverlay
          currentChallengeIndex={currentChallengeIndex}
          completedChallengeIds={completedChallengeIds}
          selectedAvatarId={selectedAvatarId}
          cameraMode={cameraMode}
          onSelectChallenge={(idx) => {
            setCurrentChallengeIndex(idx);
            setIsChallengeModalOpen(true);
          }}
          onOpenChallengeModal={() => setIsChallengeModalOpen(true)}
          onToggleAvatar={handleToggleAvatar}
          onToggleCameraMode={handleToggleCameraMode}
          onOpenModuleSelect={() => setCurrentPhase('FASE_2_MODULE_SELECT')}
        />
      )}

      {/* FASE 0: PANTALLA DE LOGIN / REGISTRO */}
      {currentPhase === 'FASE_0_LOGIN' && (
        <CifraLoginScreen
          onLoginSuccess={handleLoginSuccess}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          bcvRate={bcvRate}
          onNavigateToSpace={handleNavigateToSpace}
        />
      )}

      {/* FASE 1: SELECCIÓN DE AVATAR (Ircar, Jorge, Iván, Carlos) */}
      {currentPhase === 'FASE_1_AVATAR' && student && (
        <CifraAvatarSelection
          student={student}
          selectedAvatarId={selectedAvatarId}
          onSelectAvatar={setSelectedAvatarId}
          onConfirmAvatar={handleConfirmAvatar}
          onBackToLogin={() => handleNavigateToSpace('FASE_0_LOGIN')}
          onNavigateToSpace={handleNavigateToSpace}
        />
      )}

      {/* FASE 2: SELECCIÓN DE MÓDULOS EDUCATIVOS (5 Módulos, Emprendimiento en Esmeralda) */}
      {currentPhase === 'FASE_2_MODULE_SELECT' && student && (
        <CifraModuleSelection
          student={student}
          selectedAvatarId={selectedAvatarId}
          avatarName={currentAvatar.name}
          completedChallengeIds={completedChallengeIds}
          moduleProgress={moduleProgress}
          totalBalance={totalBalance}
          onSelectModule={handleSelectModule}
          onStartAllChallenges={handleStartAllChallenges}
          onChangeAvatar={() => handleNavigateToSpace('FASE_1_AVATAR')}
          onLogoClick={handleLogoClick}
          onNavigateToSpace={handleNavigateToSpace}
        />
      )}

      {/* FASE 3: DESAFÍO ACTIVO / MODAL DE RETO */}
      {currentPhase === 'FASE_3_SIMULATION' && isChallengeModalOpen && (
        <CifraChallengeModal
          key={activeChallenge.id}
          challenge={activeChallenge}
          currentBalance={totalBalance}
          onAnswerResolved={handleAnswerResolved}
          onNextChallenge={handleNextChallenge}
          onClose={() => setIsChallengeModalOpen(false)}
          onOpenGlossary={() => setActiveSecondaryModal('glossary')}
          onReturnToLevelSelector={() => setCurrentPhase('FASE_2_MODULE_SELECT')}
          onLogoClick={handleLogoClick}
          onNavigateToSpace={handleNavigateToSpace}
        />
      )}

      {/* FASE 4: GAME OVER / QUIEBRA FINANCIERA (SALDO <= 0) */}
      {currentPhase === 'FASE_4_GAMEOVER' && (
        <CifraGameOverModal
          finalBalance={totalBalance}
          onRestartWithSeedCapital={handleRestartWithSeedCapital}
          onReturnToModules={() => {
            setTotalBalance(500);
            setCurrentPhase('FASE_2_MODULE_SELECT');
          }}
          onOpenGlossary={() => setActiveSecondaryModal('glossary')}
          onLogoClick={handleLogoClick}
          onNavigateToSpace={handleNavigateToSpace}
        />
      )}

      {/* FASE 5: MISIÓN CUMPLIDA / CERTIFICACIÓN Y GRADUACIÓN */}
      {currentPhase === 'FASE_5_FINAL_MISSION' && student && (
        <CifraFinalMissionModal
          student={student}
          avatarName={currentAvatar.name}
          avatarImage={currentAvatar.imageSrc}
          totalScore={totalBalance}
          totalCompletedChallenges={completedChallengeIds.length}
          onRestartAll={handleRestartAll}
          onClose={() => setCurrentPhase('FASE_2_MODULE_SELECT')}
          onLogoClick={handleLogoClick}
          onNavigateToSpace={handleNavigateToSpace}
        />
      )}

      {/* MODAL SECUNDARIO: LIBRO CONTABLE */}
      {activeSecondaryModal === 'ledger' && (
        <FinancialLedgerModal
          ledgerEntries={ledgerEntries}
          totalSumasIngresos={totalIngresos}
          totalRestasGastos={totalGastos}
          saldoDisponible={totalBalance}
          onClose={() => setActiveSecondaryModal('none')}
          onLogoClick={handleLogoClick}
          onNavigateToSpace={handleNavigateToSpace}
        />
      )}

      {/* MODAL SECUNDARIO: GLOSARIO & FÓRMULAS FINANCIERAS */}
      {activeSecondaryModal === 'glossary' && (
        <FinancialGlossaryModal
          onClose={() => setActiveSecondaryModal('none')}
          onLogoClick={handleLogoClick}
          onNavigateToSpace={handleNavigateToSpace}
        />
      )}
    </div>
  );
}
