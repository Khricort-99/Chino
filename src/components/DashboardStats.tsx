import React from 'react';
import { UserProgress, CurriculumLevel } from '../types/curriculum';
import { Trophy, BookOpen, CheckCircle, Award, X, Sparkles, Flame } from 'lucide-react';

interface DashboardStatsProps {
  progress: UserProgress;
  curriculum: CurriculumLevel[];
  isOpen: boolean;
  onClose: () => void;
  onViewCertificate: (levelNumber: number) => void;
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({
  progress,
  curriculum,
  isOpen,
  onClose,
  onViewCertificate,
}) => {
  if (!isOpen) return null;

  const hsk1Level = curriculum.find((l) => l.hskLevel === 1);
  const totalHsk1Vocab = hsk1Level ? hsk1Level.modules.flatMap((m) => m.vocabulary).length : 125;
  const masteredCount = progress.masteredVocab.length;
  const vocabPct = Math.min(100, Math.round((masteredCount / totalHsk1Vocab) * 100));

  const completedModulesCount = progress.completedModules.length;
  const totalHsk1Modules = hsk1Level?.modules.length || 6;
  const moduleProgressPct = Math.min(100, Math.round((completedModulesCount / totalHsk1Modules) * 100));

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">
              <Trophy size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Dashboard de Progreso y Estadísticas
              </h3>
              <p className="text-xs text-slate-500">
                Estudiante: <strong>{progress.studentName}</strong>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase text-amber-800 dark:text-amber-300">
                  Vocabulario Dominado
                </span>
                <Flame size={16} className="text-amber-600" />
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-slate-100 font-mono">
                {masteredCount} <span className="text-xs font-normal text-slate-500">/ {totalHsk1Vocab}</span>
              </div>
              <div className="w-full bg-amber-200 dark:bg-amber-900 h-2 rounded-full overflow-hidden mt-2">
                <div
                  className="bg-amber-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${vocabPct}%` }}
                ></div>
              </div>
              <div className="text-[11px] text-amber-700 dark:text-amber-400 mt-1">
                {vocabPct}% de palabras de HSK 1
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-red-50/60 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase text-red-800 dark:text-red-300">
                  Módulos HSK 1
                </span>
                <BookOpen size={16} className="text-red-600" />
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-slate-100 font-mono">
                {completedModulesCount} <span className="text-xs font-normal text-slate-500">/ {totalHsk1Modules}</span>
              </div>
              <div className="w-full bg-red-200 dark:bg-red-900 h-2 rounded-full overflow-hidden mt-2">
                <div
                  className="bg-red-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${moduleProgressPct}%` }}
                ></div>
              </div>
              <div className="text-[11px] text-red-700 dark:text-red-400 mt-1">
                {moduleProgressPct}% completado
              </div>
            </div>
          </div>

          {/* Certificates Badges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Certificaciones Oficiales Emitidas:
            </h4>
            {Object.keys(progress.certificates).length === 0 ? (
              <div className="p-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
                Aún no has rendido el Examen Oficial HSK 1. Completa los 6 módulos y aprueba con &ge; 80% para recibir tu diploma.
              </div>
            ) : (
              <div className="space-y-2">
                {Object.entries(progress.certificates).map(([lvl, cert]) => (
                  <div
                    key={lvl}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-emerald-600 text-white">
                        <Award size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                          Certificado HSK {cert.level} Aprobado ({cert.percentage}%)
                        </div>
                        <div className="text-xs text-slate-500">
                          Emitido: {cert.issueDate} • Reg: {cert.certificateNumber}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onViewCertificate(cert.level)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold cursor-pointer shadow-xs"
                    >
                      Ver Diploma
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Module Practice Scores Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Calificaciones de Módulos HSK 1:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((num) => {
                const modId = `hsk1-m${num}`;
                const isDone = progress.completedModules.includes(modId);
                const score = progress.moduleScores[modId];
                return (
                  <div
                    key={num}
                    className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                      isDone
                        ? 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                        : 'bg-slate-50/50 dark:bg-slate-900/50 border-dashed border-slate-200 dark:border-slate-800 opacity-60'
                    }`}
                  >
                    <span>Módulo {num}</span>
                    <span className="font-mono font-bold text-red-700 dark:text-red-400">
                      {isDone ? `${score ?? 100}%` : 'Bloqueado'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
