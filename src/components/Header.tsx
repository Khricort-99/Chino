import React from 'react';
import { SpeedMode, UserProgress } from '../types/curriculum';
import { Eye, EyeOff, Turtle, Volume2, Trophy, Settings, Lock, Sparkles, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentLevel: number;
  onSelectLevel: (lvl: number) => void;
  unlockedLevels: number[];
  pinyinVisible: boolean;
  onTogglePinyin: () => void;
  speedMode: SpeedMode;
  onToggleSpeed: () => void;
  onOpenStats: () => void;
  onOpenSettings: () => void;
  progress: UserProgress;
}

export const Header: React.FC<HeaderProps> = ({
  currentLevel,
  onSelectLevel,
  unlockedLevels,
  pinyinVisible,
  onTogglePinyin,
  speedMode,
  onToggleSpeed,
  onOpenStats,
  onOpenSettings,
  progress,
}) => {
  const levels = [1, 2, 3, 4, 5, 6];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectLevel(1)}>
              {/* Imperial Chinese Seal */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-700 via-red-800 to-amber-900 text-white flex items-center justify-center font-serif font-black text-xl shadow-md border border-amber-400/40 select-none">
                华
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                    HuáYǔ HSK Master
                  </h1>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-red-100 text-red-800 dark:bg-red-950/80 dark:text-red-300">
                    HSK 1-6
                  </span>
                  {progress.devMode && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 flex items-center gap-0.5">
                      <ShieldCheck size={11} /> Dev
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Aprende Chino Mandarín desde Cero • Fonética, Audio & Certificación
                </p>
              </div>
            </div>

            {/* Mobile Controls quick access */}
            <div className="flex items-center gap-1 md:hidden">
              <button
                type="button"
                onClick={onOpenStats}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                title="Estadísticas"
              >
                <Trophy size={18} />
              </button>
              <button
                type="button"
                onClick={onOpenSettings}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                title="Configuración"
              >
                <Settings size={18} />
              </button>
            </div>
          </div>

          {/* Controls & Level Badges */}
          <div className="flex flex-wrap items-center justify-between md:justify-end gap-2.5">
            {/* Level Tabs */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              {levels.map((lvl) => {
                const isUnlocked = progress.devMode || unlockedLevels.includes(lvl);
                const isActive = currentLevel === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => {
                      if (isUnlocked) onSelectLevel(lvl);
                    }}
                    title={
                      isUnlocked
                        ? `Nivel HSK ${lvl} disponible`
                        : `HSK ${lvl} Bloqueado. Aprueba el examen anterior para desbloquearlo.`
                    }
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-red-700 text-white shadow-xs'
                        : isUnlocked
                        ? 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                        : 'text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-60'
                    }`}
                  >
                    <span>HSK {lvl}</span>
                    {!isUnlocked && <Lock size={11} className="shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Pinyin Global Toggle */}
            <button
              type="button"
              onClick={onTogglePinyin}
              title={pinyinVisible ? 'Ocultar Pinyin para leer sólo Hanzi' : 'Mostrar Pinyin fonético'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                pinyinVisible
                  ? 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-900'
                  : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
              }`}
            >
              {pinyinVisible ? <Eye size={14} /> : <EyeOff size={14} />}
              <span className="hidden sm:inline">Pinyin:</span>
              <span>{pinyinVisible ? 'Visible' : 'Oculto'}</span>
            </button>

            {/* Audio Speed Global Toggle */}
            <button
              type="button"
              onClick={onToggleSpeed}
              title={speedMode === 'slow' ? 'Cambiar a velocidad normal' : 'Cambiar a modo lento 🐢'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                speedMode === 'slow'
                  ? 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800'
                  : 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
              }`}
            >
              {speedMode === 'slow' ? <Turtle size={14} className="text-amber-600" /> : <Volume2 size={14} />}
              <span className="hidden sm:inline">Audio:</span>
              <span>{speedMode === 'slow' ? '🐢 Lento' : '1.0x'}</span>
            </button>

            {/* Stats & Settings desktop buttons */}
            <div className="hidden md:flex items-center gap-1.5">
              <button
                type="button"
                onClick={onOpenStats}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 text-xs font-semibold cursor-pointer transition-colors"
                title="Ver Progreso y Vocabulario"
              >
                <Trophy size={14} className="text-amber-600" />
                <span>Progreso</span>
                <span className="px-1.5 py-0.2 rounded-md bg-amber-200/80 text-amber-900 text-[10px] font-bold">
                  {progress.masteredVocab.length}
                </span>
              </button>

              <button
                type="button"
                onClick={onOpenSettings}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 cursor-pointer transition-colors"
                title="Configuración y Modo Desarrollador"
              >
                <Settings size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
