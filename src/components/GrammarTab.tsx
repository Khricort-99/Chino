import React from 'react';
import { GrammarRule, SpeedMode } from '../types/curriculum';
import { AudioButton } from './AudioButton';
import { Bookmark, Sparkles, CheckCircle2 } from 'lucide-react';

interface GrammarTabProps {
  grammar: GrammarRule[];
  pinyinVisible: boolean;
  speedMode: SpeedMode;
}

export const GrammarTab: React.FC<GrammarTabProps> = ({
  grammar,
  pinyinVisible,
  speedMode,
}) => {
  const roleStyles = {
    subject: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800',
    verb: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
    particle: 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800',
    object: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
    time: 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800',
    place: 'bg-teal-100 text-teal-800 border-teal-300 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800',
    adjective: 'bg-pink-100 text-pink-800 border-pink-300 dark:bg-pink-950/60 dark:text-pink-300 dark:border-pink-800',
    number: 'bg-cyan-100 text-cyan-800 border-cyan-300 dark:bg-cyan-950/60 dark:text-cyan-300 dark:border-cyan-800',
    measure: 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800',
    negative: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800',
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-50 to-red-50 dark:from-amber-950/20 dark:to-red-950/20 rounded-2xl p-5 border border-amber-200/60 dark:border-amber-900/40">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-amber-600 text-white shrink-0 mt-0.5">
            <Bookmark size={22} />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Gramática Visual y Fórmulas de Construcción
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              El chino mandarín es una lengua de orden analítico: no tiene conjugaciones de verbos, ni géneros (masculino/femenino), ni plurales complicados. Cada oración sigue un orden de piezas como un rompecabezas.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {grammar.map((rule, idx) => (
          <div
            key={rule.id}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-7 rounded-full bg-red-700 text-white flex items-center justify-center text-xs font-bold shrink-0">
                {idx + 1}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {rule.title}
              </h3>
            </div>

            {/* Formula Block */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 my-4 border border-slate-200/80 dark:border-slate-700">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                Estructura Sintáctica de la Fórmula:
              </div>
              {rule.formulaTokens ? (
                <div className="flex flex-wrap items-center gap-2">
                  {rule.formulaTokens.map((token, tIdx) => {
                    const style = roleStyles[token.role] || 'bg-slate-200 text-slate-800 border-slate-300';
                    return (
                      <div
                        key={tIdx}
                        className={`px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold flex flex-col items-center shadow-2xs ${style}`}
                      >
                        <span>{token.text}</span>
                        {token.description && (
                          <span className="text-[10px] opacity-80 font-normal">
                            {token.description}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 px-3 py-2 rounded-xl inline-block border border-slate-200 dark:border-slate-700">
                  {rule.formula}
                </div>
              )}
            </div>

            {/* Explanation */}
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {rule.explanation}
            </p>

            {/* Rules Highlights */}
            {rule.rulesHighlight && rule.rulesHighlight.length > 0 && (
              <div className="bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 rounded-2xl p-4 mb-5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-red-800 dark:text-red-300 flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>Reglas Críticas para Evitar Errores Comunes:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {rule.rulesHighlight.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Examples */}
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                Ejemplos Auditivos en Contexto Real:
              </div>
              <div className="space-y-2.5">
                {rule.examples.map((ex, exIdx) => (
                  <div
                    key={exIdx}
                    className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:bg-slate-100/70 dark:hover:bg-slate-800/80 transition-colors"
                  >
                    <div>
                      <div className="text-base font-serif font-bold text-slate-900 dark:text-slate-100">
                        {ex.hanzi}
                      </div>
                      {pinyinVisible && (
                        <div className="text-xs font-mono font-medium text-red-700 dark:text-red-400">
                          {ex.pinyin}
                        </div>
                      )}
                      <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                        {ex.es}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <AudioButton text={ex.hanzi} speedMode="normal" size="sm" variant="primary" label="Normal" />
                      <AudioButton text={ex.hanzi} speedMode="slow" size="sm" variant="slow" label="🐢" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
