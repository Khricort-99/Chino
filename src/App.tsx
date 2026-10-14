import React, { useState, useEffect } from 'react';
import { CURRICULUM_DATA, getLevelData } from './data/curriculumData';
import {
  UserProgress,
  CertificateData,
  SpeedMode,
  Module,
} from './types/curriculum';
import {
  loadProgress,
  saveProgress,
  isModuleUnlocked,
  isExamUnlocked,
} from './services/storage';
import { Header } from './components/Header';
import { PhoneticsTab } from './components/PhoneticsTab';
import { VocabularyTab } from './components/VocabularyTab';
import { GrammarTab } from './components/GrammarTab';
import { ExercisesTab } from './components/ExercisesTab';
import { ExamModal } from './components/ExamModal';
import { CertificateModal } from './components/CertificateModal';
import { DashboardStats } from './components/DashboardStats';
import { DevSettingsModal } from './components/DevSettingsModal';
import {
  Lock,
  CheckCircle2,
  Award,
  BookOpen,
  Mic,
  FileText,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Flame,
} from 'lucide-react';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress);
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [activeModuleId, setActiveModuleId] = useState<string>('hsk1-m1');
  const [activeTab, setActiveTab] = useState<'phonetics' | 'vocabulary' | 'grammar' | 'exercises'>('phonetics');

  // Modals state
  const [isExamOpen, setIsExamOpen] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [activeCert, setActiveCert] = useState<CertificateData | null>(null);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Synchronize progress to localStorage whenever it changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const levelData = getLevelData(currentLevel);
  const activeModule: Module | undefined =
    levelData.modules.find((m) => m.id === activeModuleId) || levelData.modules[0];

  // Check if current level is unlocked
  const isCurrentLevelUnlocked =
    progress.devMode || progress.unlockedLevels.includes(currentLevel);

  // Check if HSK 1 exam is unlocked
  const isFinalExamUnlocked = isExamUnlocked(1, 6, progress);
  const hasPassedCurrentLevelExam = !!progress.certificates[currentLevel];

  // Handlers for toggles
  const handleTogglePinyin = () => {
    setProgress((prev) => ({ ...prev, pinyinVisible: !prev.pinyinVisible }));
  };

  const handleToggleSpeed = () => {
    setProgress((prev) => ({
      ...prev,
      audioSpeed: prev.audioSpeed === 'normal' ? 'slow' : 'normal',
    }));
  };

  const handleToggleMasteredVocab = (vocabId: string) => {
    setProgress((prev) => {
      const exists = prev.masteredVocab.includes(vocabId);
      return {
        ...prev,
        masteredVocab: exists
          ? prev.masteredVocab.filter((id) => id !== vocabId)
          : [...prev.masteredVocab, vocabId],
      };
    });
  };

  const handleCompleteModule = (scorePct: number) => {
    if (!activeModule) return;
    const moduleId = activeModule.id;
    setProgress((prev) => {
      const completed = prev.completedModules.includes(moduleId)
        ? prev.completedModules
        : [...prev.completedModules, moduleId];

      return {
        ...prev,
        completedModules: completed,
        moduleScores: {
          ...prev.moduleScores,
          [moduleId]: Math.max(scorePct, prev.moduleScores[moduleId] || 0),
        },
      };
    });
  };

  const handlePassExam = (cert: CertificateData) => {
    setProgress((prev) => {
      const nextLevel = cert.level + 1;
      const updatedLevels = prev.unlockedLevels.includes(nextLevel)
        ? prev.unlockedLevels
        : [...prev.unlockedLevels, nextLevel];

      return {
        ...prev,
        unlockedLevels: updatedLevels,
        certificates: {
          ...prev.certificates,
          [cert.level]: cert,
        },
      };
    });
    setActiveCert(cert);
    setIsCertOpen(true);
  };

  const handleUpdateDevMode = (devMode: boolean) => {
    setProgress((prev) => ({ ...prev, devMode }));
  };

  const handleUpdateStudentName = (studentName: string) => {
    setProgress((prev) => ({ ...prev, studentName }));
  };

  const handleResetProgress = () => {
    const fresh: UserProgress = {
      unlockedLevels: [1],
      completedModules: [],
      moduleScores: {},
      masteredVocab: [],
      certificates: {},
      devMode: false,
      studentName: 'Estudiante HSK',
      pinyinVisible: true,
      audioSpeed: 'normal',
    };
    setProgress(fresh);
    setCurrentLevel(1);
    setActiveModuleId('hsk1-m1');
    setActiveTab('phonetics');
  };

  const handleGoToLevel2 = () => {
    setCurrentLevel(2);
    setActiveModuleId('hsk2-m1');
    setActiveTab('phonetics');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans flex flex-col antialiased">
      {/* Top Navigation Bar */}
      <Header
        currentLevel={currentLevel}
        onSelectLevel={(lvl) => {
          setCurrentLevel(lvl);
          const newLevel = getLevelData(lvl);
          if (newLevel.modules.length > 0) {
            setActiveModuleId(newLevel.modules[0].id);
          }
        }}
        unlockedLevels={progress.unlockedLevels}
        pinyinVisible={progress.pinyinVisible}
        onTogglePinyin={handleTogglePinyin}
        speedMode={progress.audioSpeed}
        onToggleSpeed={handleToggleSpeed}
        onOpenStats={() => setIsStatsOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        progress={progress}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Level Hero Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-amber-900 rounded-3xl text-white p-6 sm:p-8 mb-8 shadow-lg border border-red-950">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-red-950 text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              <span>Nivel HSK {levelData.hskLevel} • Oficial</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-tight">
              {levelData.title}
            </h2>
            <p className="text-red-100 text-sm sm:text-base mt-2 leading-relaxed opacity-90">
              {levelData.description}
            </p>

            {/* Quick Stats Pill */}
            <div className="flex flex-wrap items-center gap-4 mt-5 text-xs text-red-200">
              <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <BookOpen size={15} className="text-amber-300" />
                <span>{levelData.modules.length} Módulos Interactivos</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <Flame size={15} className="text-amber-400" />
                <span>
                  Vocabulario Dominado: {progress.masteredVocab.length} palabras
                </span>
              </div>
              {hasPassedCurrentLevelExam && (
                <button
                  type="button"
                  onClick={() => {
                    const cert = progress.certificates[currentLevel];
                    if (cert) {
                      setActiveCert(cert);
                      setIsCertOpen(true);
                    }
                  }}
                  className="flex items-center gap-1.5 bg-amber-400 text-red-950 font-bold px-3 py-1.5 rounded-xl cursor-pointer hover:bg-amber-300 transition-colors"
                >
                  <Award size={15} />
                  <span>Ver Certificado Obtenido</span>
                </button>
              )}
            </div>
          </div>

          {/* Decorative Background Calligraphy */}
          <div className="absolute right-4 -bottom-10 opacity-10 font-serif text-[180px] font-black select-none pointer-events-none text-white">
            HSK
          </div>
        </div>

        {/* Level Locked View (for HSK > 1 when not unlocked yet) */}
        {!isCurrentLevelUnlocked ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-dashed border-red-300 dark:border-red-900/60 p-8 sm:p-12 text-center max-w-2xl mx-auto my-8 shadow-sm">
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 mb-4">
              <Lock size={36} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-2">
              Nivel HSK {currentLevel} Bloqueado
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Para acceder a este nivel superior, debes aprobar el <strong>Examen de Certificación Oficial de HSK {currentLevel - 1}</strong> con una calificación mínima del <strong>80%</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setCurrentLevel(1);
                  setIsExamOpen(true);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white text-sm font-bold shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Award size={16} />
                <span>Rendir Examen HSK 1</span>
              </button>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-sm font-semibold cursor-pointer"
              >
                Activar Modo Desarrollador (Pruebas)
              </button>
            </div>
          </div>
        ) : levelData.modules.length === 0 ? (
          /* Scalable Level Preview (HSK 3 - 6) */
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 text-center max-w-2xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 mb-4">
              <Sparkles size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Currículo Escalable: HSK {currentLevel}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              La arquitectura de datos de la aplicación está lista para recibir los módulos del nivel {currentLevel}. Completa y domina los niveles 1 y 2 para continuar la progresión oficial.
            </p>
            <button
              type="button"
              onClick={() => {
                setCurrentLevel(1);
                setActiveModuleId('hsk1-m1');
              }}
              className="px-6 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-sm font-semibold cursor-pointer"
            >
              Volver a HSK 1
            </button>
          </div>
        ) : (
          /* Active Level View with Modules and Tabs */
          <div className="space-y-8">
            {/* Module Selector Carousel / Row */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Módulos de Formación ({levelData.modules.length}):
                </h3>
                <span className="text-xs text-slate-400">
                  Completa los ejercicios de cada módulo para desbloquear el siguiente
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {levelData.modules.map((m, mIdx) => {
                  const isUnlocked = isModuleUnlocked(m.id, currentLevel, mIdx, progress);
                  const isCompleted = progress.completedModules.includes(m.id);
                  const isActive = activeModule?.id === m.id;
                  const score = progress.moduleScores[m.id];

                  return (
                    <button
                      key={m.id}
                      type="button"
                      disabled={!isUnlocked}
                      onClick={() => {
                        if (isUnlocked) {
                          setActiveModuleId(m.id);
                        }
                      }}
                      className={`text-left p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                        isActive
                          ? 'bg-white dark:bg-slate-900 border-red-600 shadow-md ring-2 ring-red-500/20'
                          : isUnlocked
                          ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
                          : 'bg-slate-100/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/60 opacity-65 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center ${
                            isActive
                              ? 'bg-red-700 text-white'
                              : isCompleted
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {m.number}
                        </span>

                        <div className="flex items-center gap-1">
                          {isCompleted ? (
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1">
                              <CheckCircle2 size={12} /> {score ? `${score}%` : 'Listo'}
                            </span>
                          ) : !isUnlocked ? (
                            <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                              <Lock size={12} /> Bloqueado
                            </span>
                          ) : (
                            <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                              En progreso
                            </span>
                          )}
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                        {m.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Module Detail Area */}
            {activeModule && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-xs">
                {/* Module Header */}
                <div className="border-b border-slate-100 dark:border-slate-800 pb-5 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300">
                          Módulo {activeModule.number} de {levelData.modules.length}
                        </span>
                        {progress.completedModules.includes(activeModule.id) && (
                          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                            <CheckCircle2 size={14} /> Completado
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                        {activeModule.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {activeModule.description}
                      </p>
                    </div>
                  </div>

                  {/* 4 Interactive Pedagogical Tabs */}
                  <div className="flex flex-wrap items-center gap-2 mt-6">
                    <button
                      type="button"
                      onClick={() => setActiveTab('phonetics')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        activeTab === 'phonetics'
                          ? 'bg-red-700 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      <Mic size={16} />
                      <span>1. Pronunciación & Tonos</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('vocabulary')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        activeTab === 'vocabulary'
                          ? 'bg-red-700 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      <BookOpen size={16} />
                      <span>2. Vocabulario ({activeModule.vocabulary.length})</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('grammar')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        activeTab === 'grammar'
                          ? 'bg-red-700 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      <FileText size={16} />
                      <span>3. Bloques Gramaticales ({activeModule.grammar.length})</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('exercises')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        activeTab === 'exercises'
                          ? 'bg-red-700 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      <Award size={16} />
                      <span>4. Práctica Interactiva ({activeModule.exercises.length})</span>
                    </button>
                  </div>
                </div>

                {/* Tab Content Rendering */}
                <div>
                  {activeTab === 'phonetics' && (
                    <PhoneticsTab
                      phonetics={activeModule.phoneticsGuide}
                      moduleNumber={activeModule.number}
                      speedMode={progress.audioSpeed}
                    />
                  )}

                  {activeTab === 'vocabulary' && (
                    <VocabularyTab
                      vocabulary={activeModule.vocabulary}
                      masteredVocab={progress.masteredVocab}
                      onToggleMastered={handleToggleMasteredVocab}
                      pinyinVisible={progress.pinyinVisible}
                      speedMode={progress.audioSpeed}
                    />
                  )}

                  {activeTab === 'grammar' && (
                    <GrammarTab
                      grammar={activeModule.grammar}
                      pinyinVisible={progress.pinyinVisible}
                      speedMode={progress.audioSpeed}
                    />
                  )}

                  {activeTab === 'exercises' && (
                    <ExercisesTab
                      moduleId={activeModule.id}
                      moduleNumber={activeModule.number}
                      exercises={activeModule.exercises}
                      isCompleted={progress.completedModules.includes(activeModule.id)}
                      onCompleteModule={handleCompleteModule}
                      speedMode={progress.audioSpeed}
                      pinyinVisible={progress.pinyinVisible}
                    />
                  )}
                </div>
              </div>
            )}

            {/* Official Certification Exam Callout Banner (at bottom of HSK 1) */}
            {currentLevel === 1 && (
              <div className="bg-gradient-to-r from-red-800 via-red-900 to-amber-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-red-900 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-red-950 text-xs font-black uppercase tracking-wider mb-2">
                      <Award size={14} />
                      <span>Examen Oficial de Certificación HSK 1</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-black">
                      ¿Listo para obtener tu Diploma Oficial HSK 1?
                    </h3>
                    <p className="text-xs sm:text-sm text-red-100 mt-1.5 leading-relaxed opacity-90">
                      Un simulacro cronometrado de 20 preguntas con audio nativo real, fonética, gramática y lectura Hanzi. Al aprobar con <strong>&ge; 80%</strong>, se desbloqueará automáticamente el <strong>Nivel HSK 2</strong> y recibirás tu certificado oficial acreditado.
                    </p>
                  </div>

                  <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                    {hasPassedCurrentLevelExam ? (
                      <button
                        type="button"
                        onClick={() => {
                          const cert = progress.certificates[1];
                          if (cert) {
                            setActiveCert(cert);
                            setIsCertOpen(true);
                          }
                        }}
                        className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-red-950 font-black text-sm shadow-lg cursor-pointer flex items-center justify-center gap-2 transition-transform active:scale-95"
                      >
                        <Award size={18} />
                        <span>Ver Mi Certificado HSK 1</span>
                      </button>
                    ) : isFinalExamUnlocked ? (
                      <button
                        type="button"
                        onClick={() => setIsExamOpen(true)}
                        className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-red-950 font-black text-sm shadow-lg cursor-pointer flex items-center justify-center gap-2 transition-transform active:scale-95"
                      >
                        <Award size={18} />
                        <span>Rendir Examen de Certificación (20 Preguntas)</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-black/40 px-5 py-3 rounded-2xl border border-white/20 text-xs text-red-200">
                        <Lock size={16} />
                        <span>
                          Bloqueado: Completa los 6 módulos formativos para rendir el examen
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif font-black text-red-700">华语</span>
            <span>HuáYǔ HSK Master • Sistema de Certificación de Mandarín para Hispanohablantes</span>
          </div>
          <div>
            Pronunciación nativa con Web Speech API • Currículo HSK 1 a HSK 6
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ExamModal
        levelNumber={currentLevel}
        levelTitle={levelData.title}
        exam={levelData.finalExam}
        studentName={progress.studentName}
        isOpen={isExamOpen}
        onClose={() => setIsExamOpen(false)}
        onPassExam={handlePassExam}
        speedMode={progress.audioSpeed}
      />

      {activeCert && (
        <CertificateModal
          certificate={activeCert}
          isOpen={isCertOpen}
          onClose={() => setIsCertOpen(false)}
          onGoToLevel2={handleGoToLevel2}
        />
      )}

      <DashboardStats
        progress={progress}
        curriculum={CURRICULUM_DATA}
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        onViewCertificate={(lvl) => {
          const cert = progress.certificates[lvl];
          if (cert) {
            setActiveCert(cert);
            setIsStatsOpen(false);
            setIsCertOpen(true);
          }
        }}
      />

      <DevSettingsModal
        progress={progress}
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onUpdateDevMode={handleUpdateDevMode}
        onUpdateStudentName={handleUpdateStudentName}
        onResetProgress={handleResetProgress}
      />
    </div>
  );
}
