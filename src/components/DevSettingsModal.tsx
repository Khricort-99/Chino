import React, { useState } from 'react';
import { UserProgress } from '../types/curriculum';
import { Settings, ShieldCheck, RotateCcw, User, X, Check, AlertCircle } from 'lucide-react';

interface DevSettingsModalProps {
  progress: UserProgress;
  isOpen: boolean;
  onClose: () => void;
  onUpdateDevMode: (devMode: boolean) => void;
  onUpdateStudentName: (name: string) => void;
  onResetProgress: () => void;
}

export const DevSettingsModal: React.FC<DevSettingsModalProps> = ({
  progress,
  isOpen,
  onClose,
  onUpdateDevMode,
  onUpdateStudentName,
  onResetProgress,
}) => {
  const [nameInput, setNameInput] = useState(progress.studentName);
  const [confirmReset, setConfirmReset] = useState(false);

  if (!isOpen) return null;

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onUpdateStudentName(nameInput.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <Settings size={18} />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Configuración y Modo Desarrollador
            </h3>
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
        <div className="p-6 space-y-6">
          {/* Student Name */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5 flex items-center gap-1.5">
              <User size={14} />
              <span>Nombre del Estudiante (Para el Certificado Oficial):</span>
            </label>
            <form onSubmit={handleSaveName} className="flex gap-2">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Ej. Juan Pérez"
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-semibold cursor-pointer shadow-xs"
              >
                Guardar
              </button>
            </form>
          </div>

          {/* Dev Mode Toggle */}
          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-sm font-bold text-amber-900 dark:text-amber-200">
                  <ShieldCheck size={16} />
                  <span>Modo Desarrollador (Desbloquear Todo)</span>
                </div>
                <p className="text-xs text-amber-800/80 dark:text-amber-300/80 mt-1 leading-relaxed">
                  Permite acceder a cualquier módulo de HSK 1, rendir el examen directamente y probar los niveles superiores de HSK sin completar los prerrequisitos en secuencia.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={progress.devMode}
                  onChange={(e) => onUpdateDevMode(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
              </label>
            </div>
            {progress.devMode && (
              <div className="text-[11px] font-bold text-amber-800 dark:text-amber-300 mt-2 flex items-center gap-1">
                <Check size={12} />
                <span>Modo de pruebas activo: todos los módulos y exámenes están desbloqueados.</span>
              </div>
            )}
          </div>

          {/* Audio Test & Diagnostics */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
              <span>🔊 Diagnóstico y Prueba de Audio:</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
              El sistema utiliza un motor dual con pronunciación nativa en alta definición y soporte para cualquier navegador. Haz clic para probar:
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  import('../utils/audio').then(({ audioService }) => {
                    audioService.speak('你好，欢迎学习汉语！', 'normal');
                  });
                }}
                className="px-3 py-1.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-semibold cursor-pointer shadow-xs flex items-center gap-1.5"
              >
                <span>🔊 Probar: "Nǐ hǎo" (Normal)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  import('../utils/audio').then(({ audioService }) => {
                    audioService.speak('你好，欢迎学习汉语！', 'slow');
                  });
                }}
                className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs font-semibold cursor-pointer flex items-center gap-1.5 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-700"
              >
                <span>🐢 Probar: "Nǐ hǎo" (Lento)</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              💡 Recuerda revisar que el volumen de tu equipo esté activo y las bocinas encendidas.
            </p>
          </div>

          {/* Reset Progress */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Zona de Reinicio:
            </div>
            {!confirmReset ? (
              <button
                type="button"
                onClick={() => setConfirmReset(true)}
                className="w-full py-2.5 rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 dark:border-rose-900 dark:text-rose-400 dark:hover:bg-rose-950/30 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <RotateCcw size={14} />
                <span>Reiniciar Progreso de la Aplicación</span>
              </button>
            ) : (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-900 space-y-2">
                <div className="text-xs text-rose-900 dark:text-rose-200 font-semibold flex items-center gap-1">
                  <AlertCircle size={14} />
                  <span>¿Estás seguro? Se borrarán todos los módulos completados y certificados.</span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onResetProgress();
                      setConfirmReset(false);
                      onClose();
                    }}
                    className="flex-1 py-1.5 rounded-lg bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold cursor-pointer"
                  >
                    Sí, Reiniciar Todo
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmReset(false)}
                    className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
