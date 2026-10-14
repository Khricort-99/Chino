import React from 'react';
import { AudioButton } from './AudioButton';

export const ToneVisualizer: React.FC = () => {
  const tones = [
    {
      number: 1,
      name: '1.er Tono (—)',
      pitch: '5-5',
      character: '妈',
      pinyin: 'mā',
      meaning: 'Madre',
      desc: 'Alto y plano constante',
      visual: (
        <svg className="w-full h-12" viewBox="0 0 100 40">
          <line x1="10" y1="10" x2="90" y2="10" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
          <circle cx="90" cy="10" r="3" fill="#DC2626" />
        </svg>
      ),
      tip: 'Canta una nota alta continua ("Ahhh"). No dejes caer la voz.'
    },
    {
      number: 2,
      name: '2.do Tono (ˊ)',
      pitch: '3-5',
      character: '麻',
      pinyin: 'má',
      meaning: 'Cáñamo',
      desc: 'Ascendente de medio a agudo',
      visual: (
        <svg className="w-full h-12" viewBox="0 0 100 40">
          <path d="M 15 32 Q 50 25 85 8" fill="none" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
          <circle cx="85" cy="8" r="3" fill="#F59E0B" />
        </svg>
      ),
      tip: 'Como cuando preguntas en español: "¿Cómo?", "¿Qué?", "¿Sí?".'
    },
    {
      number: 3,
      name: '3.er Tono (ˇ)',
      pitch: '2-1-4',
      character: '马',
      pinyin: 'mǎ',
      meaning: 'Caballo',
      desc: 'Baja al fondo y sube suavemente',
      visual: (
        <svg className="w-full h-12" viewBox="0 0 100 40">
          <path d="M 15 16 Q 50 38 85 12" fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
          <circle cx="85" cy="12" r="3" fill="#2563EB" />
        </svg>
      ),
      tip: 'El más largo y grave. Como cuando dudas resignado: "Bueeeno...".'
    },
    {
      number: 4,
      name: '4.to Tono (ˋ)',
      pitch: '5-1',
      character: '骂',
      pinyin: 'mà',
      meaning: 'Regañar',
      desc: 'Caída seca y tajante',
      visual: (
        <svg className="w-full h-12" viewBox="0 0 100 40">
          <line x1="15" y1="8" x2="85" y2="34" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
          <circle cx="85" cy="34" r="3" fill="#7C3AED" />
        </svg>
      ),
      tip: 'Como una orden tajante: "¡No!", "¡Basta!", "¡Ya!". Cortante y veloz.'
    },
    {
      number: 5,
      name: 'Tono Neutro (·)',
      pitch: 'Suave',
      character: '吗',
      pinyin: 'ma',
      meaning: '¿Sí o no?',
      desc: 'Átono, ligero y corto',
      visual: (
        <svg className="w-full h-12" viewBox="0 0 100 40">
          <circle cx="50" cy="22" r="5" fill="#64748B" />
        </svg>
      ),
      tip: 'Sin esfuerzo vocal, apoyado levemente en la sílaba anterior.'
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-red-600 rounded-full inline-block"></span>
            Los 4 Tonos Sagrados del Mandarín + Tono Neutro
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            En chino mandarín, el tono determina el significado de la palabra. Escucha la diferencia en la sílaba &ldquo;ma&rdquo;:
          </p>
        </div>
        <div className="flex items-center gap-2">
          <AudioButton text="妈 麻 马 骂 吗" label="Escuchar los 5 tonos seguidos" variant="primary" size="sm" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {tones.map((t) => (
          <div
            key={t.number}
            className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 p-3.5 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {t.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono">
                {t.pitch}
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg p-2 mb-3 border border-slate-100 dark:border-slate-800">
              {t.visual}
            </div>

            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-3xl font-serif font-black text-slate-900 dark:text-slate-100">
                  {t.character}
                </span>
                <span className="ml-2 font-mono text-base font-bold text-red-600 dark:text-red-400">
                  {t.pinyin}
                </span>
              </div>
              <AudioButton text={t.character} size="sm" variant="ghost" />
            </div>

            <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Significado: <span className="font-semibold text-slate-900 dark:text-white">{t.meaning}</span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-auto pt-2 border-t border-slate-200/60 dark:border-slate-800">
              💡 {t.tip}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
