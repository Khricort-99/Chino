import React from 'react';
import { PhoneticConcept, SpeedMode } from '../types/curriculum';
import { AudioButton } from './AudioButton';
import { ToneVisualizer } from './ToneVisualizer';
import { Mic, Sparkles, AlertCircle } from 'lucide-react';

interface PhoneticsTabProps {
  phonetics: PhoneticConcept[];
  moduleNumber: number;
  speedMode: SpeedMode;
}

export const PhoneticsTab: React.FC<PhoneticsTabProps> = ({
  phonetics,
  moduleNumber,
}) => {
  return (
    <div className="space-y-6">
      {/* Show ToneVisualizer on Module 1 */}
      {moduleNumber === 1 && <ToneVisualizer />}

      <div className="bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-950/20 dark:to-amber-950/20 rounded-2xl p-5 border border-red-100 dark:border-red-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-red-600 text-white shrink-0 mt-0.5">
            <Mic size={22} />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Guía Fonética y Muscular para Hispanohablantes
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              El chino mandarín utiliza músculos vocales distintos al español. Escucha cada regla en velocidad normal y lenta (🐢), y repite en voz alta imitando la melodía exacta.
            </p>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <AudioButton text="你好，欢迎学习汉语" speedMode="normal" variant="primary" size="sm" label="🔊 Probar Audio" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {phonetics.map((p) => (
          <div
            key={p.id}
            className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs hover:border-red-300 dark:hover:border-red-800/60 transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 mb-1.5">
                  Concepto Clave
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {p.concept}
                </h4>
              </div>
              {p.pitchContour && (
                <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  {p.pitchContour}
                </span>
              )}
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              {p.rule}
            </p>

            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 mb-3 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                  Ejemplo Práctico
                </div>
                <div className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {p.example}
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <AudioButton text={p.audioText} speedMode="normal" size="sm" variant="primary" label="Normal" />
                <AudioButton text={p.audioText} speedMode="slow" size="sm" variant="slow" label="Lento" />
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2 text-xs text-amber-800 dark:text-amber-300 bg-amber-50/60 dark:bg-amber-950/30 p-2.5 rounded-lg">
              <Sparkles size={16} className="shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
              <span>
                <strong>Truco para hispanohablantes:</strong> {p.spanishTip}
              </span>
            </div>
          </div>
        ))}
      </div>

      {moduleNumber === 1 && (
        <div className="bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <AlertCircle size={22} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-sm font-bold text-blue-950 dark:text-blue-200">
                Experimento del Papel para Consonantes Aspiradas (P, T, K, Q, CH)
              </h5>
              <p className="text-xs text-blue-800 dark:text-blue-300 mt-1 leading-relaxed">
                Toma una tira de papel y sostenla a 5 cm de tu boca. Di <strong>&ldquo;bàba&rdquo;</strong>: la hoja debe quedarse casi inmóvil. Ahora di <strong>&ldquo;pà&rdquo;</strong> (temer): la hoja debe doblarse bruscamente con la ráfaga de aire. Esta diferencia es la que separa dos palabras totalmente distintas en chino.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
