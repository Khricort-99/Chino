import React, { useState } from 'react';
import { VocabularyItem, SpeedMode } from '../types/curriculum';
import { AudioButton } from './AudioButton';
import { Search, CheckCircle2, RotateCw, Layers, Table as TableIcon, Sparkles } from 'lucide-react';

interface VocabularyTabProps {
  vocabulary: VocabularyItem[];
  masteredVocab: string[];
  onToggleMastered: (vocabId: string) => void;
  pinyinVisible: boolean;
  speedMode: SpeedMode;
}

export const VocabularyTab: React.FC<VocabularyTabProps> = ({
  vocabulary,
  masteredVocab,
  onToggleMastered,
  pinyinVisible,
  speedMode,
}) => {
  const [viewMode, setViewMode] = useState<'table' | 'flashcards'>('table');
  const [searchQuery, setSearchQuery] = useState('');
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const filteredVocab = vocabulary.filter((v) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      v.hanzi.includes(q) ||
      v.pinyin.toLowerCase().includes(q) ||
      v.es.toLowerCase().includes(q)
    );
  });

  const currentCard = filteredVocab[cardIndex] || filteredVocab[0];
  const isCurrentCardMastered = currentCard ? masteredVocab.includes(currentCard.id) : false;

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % filteredVocab.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + filteredVocab.length) % filteredVocab.length);
  };

  return (
    <div className="space-y-5">
      {/* Search and Mode Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por Hanzi, Pinyin o Español..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCardIndex(0);
              setIsFlipped(false);
            }}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-white dark:bg-slate-900 text-red-700 dark:text-red-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <TableIcon size={15} />
              <span>Lista / Tabla</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setViewMode('flashcards');
                setIsFlipped(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'flashcards'
                  ? 'bg-white dark:bg-slate-900 text-red-700 dark:text-red-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Layers size={15} />
              <span>Modo Flashcards ({filteredVocab.length})</span>
            </button>
          </div>
        </div>
      </div>

      {filteredVocab.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500">
          No se encontraron palabras que coincidan con &ldquo;{searchQuery}&rdquo;.
        </div>
      ) : viewMode === 'flashcards' ? (
        /* Flashcard 3D Mode */
        <div className="flex flex-col items-center max-w-xl mx-auto py-4">
          <div className="flex items-center justify-between w-full mb-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span>Tarjeta {cardIndex + 1} de {filteredVocab.length}</span>
            <button
              type="button"
              onClick={() => onToggleMastered(currentCard.id)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full cursor-pointer transition-all ${
                isCurrentCardMastered
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              <CheckCircle2 size={14} className={isCurrentCardMastered ? 'text-emerald-600' : ''} />
              <span>{isCurrentCardMastered ? 'Dominada' : 'Marcar como dominada'}</span>
            </button>
          </div>

          {/* Interactive Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[340px] p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-red-300 dark:hover:border-red-900 transition-all cursor-pointer flex flex-col items-center justify-center text-center relative select-none group"
          >
            <div className="absolute top-4 right-4 text-xs font-semibold text-slate-400 flex items-center gap-1">
              <RotateCw size={13} className="group-hover:rotate-180 transition-transform duration-500" />
              <span>Toca para voltear</span>
            </div>

            {!isFlipped ? (
              /* Front of Card */
              <div className="flex flex-col items-center space-y-4">
                <span className="text-7xl sm:text-8xl font-serif font-black text-slate-900 dark:text-white tracking-wider">
                  {currentCard.hanzi}
                </span>

                {pinyinVisible && (
                  <span className="text-2xl font-mono font-bold text-red-600 dark:text-red-400">
                    {currentCard.pinyin}
                  </span>
                )}

                <div className="flex items-center gap-2 pt-2" onClick={(e) => e.stopPropagation()}>
                  <AudioButton text={currentCard.hanzi} speedMode="normal" variant="primary" label="Pronunciación" />
                  <AudioButton text={currentCard.hanzi} speedMode="slow" variant="slow" label="🐢 Lento" />
                </div>
              </div>
            ) : (
              /* Back of Card */
              <div className="flex flex-col items-center space-y-3 w-full animate-fadeIn">
                <span className="text-3xl font-serif font-bold text-slate-800 dark:text-slate-200">
                  {currentCard.hanzi} {pinyinVisible && <span className="text-red-600 font-mono text-xl">({currentCard.pinyin})</span>}
                </span>

                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  {currentCard.es}
                </div>

                {currentCard.tip && (
                  <div className="text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-900/60 max-w-md">
                    💡 {currentCard.tip}
                  </div>
                )}

                <div className="w-full bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 mt-2 text-left border border-slate-100 dark:border-slate-800">
                  <div className="text-xs uppercase font-semibold text-slate-400 mb-1">
                    Oración de Ejemplo:
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="text-base font-medium text-slate-900 dark:text-slate-100">
                        {currentCard.exampleHanzi}
                      </div>
                      {pinyinVisible && (
                        <div className="text-xs font-mono text-red-600 dark:text-red-400">
                          {currentCard.examplePinyin}
                        </div>
                      )}
                      <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                        {currentCard.exampleEs}
                      </div>
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                      <AudioButton text={currentCard.exampleHanzi} speedMode={speedMode} size="sm" variant="ghost" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-full mt-4 gap-3">
            <button
              type="button"
              onClick={handlePrevCard}
              className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-all cursor-pointer"
            >
              ← Anterior
            </button>
            <button
              type="button"
              onClick={handleNextCard}
              className="flex-1 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-sm font-semibold shadow-xs transition-all cursor-pointer"
            >
              Siguiente →
            </button>
          </div>
        </div>
      ) : (
        /* Table View */
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/70 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <th className="py-3.5 px-4 w-12 text-center">Estado</th>
                  <th className="py-3.5 px-4">Hanzi (Carácter)</th>
                  {pinyinVisible && <th className="py-3.5 px-4">Pinyin & Tonos</th>}
                  <th className="py-3.5 px-4">Significado Español</th>
                  <th className="py-3.5 px-4">Ejemplo en Contexto</th>
                  <th className="py-3.5 px-4 text-right">Audio Nativo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                {filteredVocab.map((v) => {
                  const isMastered = masteredVocab.includes(v.id);
                  return (
                    <tr
                      key={v.id}
                      className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="py-3 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => onToggleMastered(v.id)}
                          title={isMastered ? 'Marcada como aprendida' : 'Marcar como aprendida'}
                          className="cursor-pointer text-slate-300 hover:text-emerald-500 transition-colors"
                        >
                          <CheckCircle2
                            size={18}
                            className={isMastered ? 'text-emerald-600 fill-emerald-100 dark:fill-emerald-950' : ''}
                          />
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-2xl font-serif font-black text-slate-900 dark:text-slate-100">
                          {v.hanzi}
                        </span>
                      </td>
                      {pinyinVisible && (
                        <td className="py-3 px-4">
                          <span className="font-mono font-bold text-red-700 dark:text-red-400 text-sm">
                            {v.pinyin}
                          </span>
                        </td>
                      )}
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          {v.es}
                        </div>
                        {v.tip && (
                          <div className="text-xs text-amber-700 dark:text-amber-400 flex items-center gap-1 mt-0.5">
                            <Sparkles size={12} className="shrink-0" />
                            <span>{v.tip}</span>
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                          <span>{v.exampleHanzi}</span>
                          <AudioButton text={v.exampleHanzi} speedMode="normal" size="sm" variant="icon" />
                        </div>
                        {pinyinVisible && (
                          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                            {v.examplePinyin}
                          </div>
                        )}
                        <div className="text-xs text-slate-600 dark:text-slate-300">
                          {v.exampleEs}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="inline-flex items-center gap-1">
                          <AudioButton text={v.hanzi} speedMode="normal" size="sm" variant="primary" label="🔊" />
                          <AudioButton text={v.hanzi} speedMode="slow" size="sm" variant="slow" label="🐢" />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
