import React, { useState } from 'react';
import {
  Exercise,
  MultipleChoiceExercise,
  SentenceBuilderExercise,
  ListeningExercise,
  ToneChallengeExercise,
  SpeedMode,
} from '../types/curriculum';
import { AudioButton } from './AudioButton';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Sparkles,
  LockOpen,
} from 'lucide-react';

interface ExercisesTabProps {
  moduleId: string;
  moduleNumber: number;
  exercises: Exercise[];
  isCompleted: boolean;
  onCompleteModule: (scorePercentage: number) => void;
  speedMode: SpeedMode;
  pinyinVisible: boolean;
}

export const ExercisesTab: React.FC<ExercisesTabProps> = ({
  moduleId,
  moduleNumber,
  exercises,
  isCompleted,
  onCompleteModule,
  speedMode,
  pinyinVisible,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [builtTokens, setBuiltTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<string[]>(() => {
    const firstEx = exercises[0];
    return firstEx?.type === 'sentence_builder' ? [...firstEx.tokens] : [];
  });
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentEx = exercises[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(idx);
    const correctIdx =
      currentEx.type === 'multiple_choice' ||
      currentEx.type === 'listening' ||
      currentEx.type === 'tone_challenge'
        ? currentEx.correctIndex
        : -1;

    const correct = idx === correctIdx;
    setIsCorrect(correct);
    setIsAnswerChecked(true);
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: correct }));
  };

  const handleAddToken = (token: string, tokenIdx: number) => {
    if (isAnswerChecked) return;
    setBuiltTokens((prev) => [...prev, token]);
    setAvailableTokens((prev) => prev.filter((_, idx) => idx !== tokenIdx));
  };

  const handleRemoveToken = (token: string, tokenIdx: number) => {
    if (isAnswerChecked) return;
    setAvailableTokens((prev) => [...prev, token]);
    setBuiltTokens((prev) => prev.filter((_, idx) => idx !== tokenIdx));
  };

  const handleCheckSentence = () => {
    if (currentEx.type !== 'sentence_builder') return;
    const isExactMatch =
      builtTokens.length === currentEx.correctOrder.length &&
      builtTokens.every((token, idx) => token === currentEx.correctOrder[idx]);

    setIsCorrect(isExactMatch);
    setIsAnswerChecked(true);
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: isExactMatch }));
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setIsCorrect(false);
      const nextEx = exercises[nextIdx];
      if (nextEx.type === 'sentence_builder') {
        // Shuffle tokens for interest
        setAvailableTokens([...nextEx.tokens].sort(() => Math.random() - 0.5));
        setBuiltTokens([]);
      }
    } else {
      // Calculate final score
      const correctCount = Object.values(userAnswers).filter(Boolean).length + (isCorrect ? 1 : 0);
      const total = exercises.length;
      const scorePct = Math.round((correctCount / total) * 100);
      setIsFinished(true);
      onCompleteModule(scorePct);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setUserAnswers({});
    setIsFinished(false);
    const firstEx = exercises[0];
    if (firstEx.type === 'sentence_builder') {
      setAvailableTokens([...firstEx.tokens].sort(() => Math.random() - 0.5));
      setBuiltTokens([]);
    }
  };

  if (isFinished) {
    const correctCount = Object.values(userAnswers).filter(Boolean).length;
    const scorePct = Math.round((correctCount / exercises.length) * 100);
    const passed = scorePct >= 70;

    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 max-w-xl mx-auto text-center shadow-lg">
        <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-400 mb-4">
          <Trophy size={40} className="animate-bounce" />
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-2">
          {passed ? '¡Módulo Completado con Éxito!' : 'Buen intento, ¡a seguir practicando!'}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
          Has acertado <strong>{correctCount}</strong> de <strong>{exercises.length}</strong> ejercicios ({scorePct}%).
        </p>

        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 mb-6 border border-slate-100 dark:border-slate-800">
          <div className="text-xs uppercase font-bold text-slate-400 mb-1">Resultado del Módulo {moduleNumber}</div>
          <div className="text-3xl font-black text-red-700 dark:text-red-400 font-mono">
            {scorePct}%
          </div>
          {passed && (
            <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-2">
              <LockOpen size={14} />
              <span>¡El siguiente módulo ha sido desbloqueado en tu progreso!</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleRestart}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 font-semibold text-sm transition-all cursor-pointer"
          >
            <RotateCcw size={16} />
            <span>Repetir Práctica</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress Indicator */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
        <div>
          <span className="text-xs uppercase font-bold text-slate-400">Práctica Interactiva</span>
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Ejercicio {currentIndex + 1} de {exercises.length}
          </h4>
        </div>
        <div className="flex items-center gap-1">
          {exercises.map((_, idx) => (
            <span
              key={idx}
              className={`w-3.5 h-3.5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                idx === currentIndex
                  ? 'bg-red-700 text-white ring-2 ring-red-400 ring-offset-1'
                  : userAnswers[idx] === true
                  ? 'bg-emerald-500 text-white'
                  : userAnswers[idx] === false
                  ? 'bg-rose-500 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
              }`}
            >
              {idx + 1}
            </span>
          ))}
        </div>
      </div>

      {/* Main Exercise Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        {/* Type Badge */}
        <div className="mb-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300">
            {currentEx.type === 'multiple_choice' && 'Selección Múltiple'}
            {currentEx.type === 'sentence_builder' && 'Constructor de Oraciones'}
            {currentEx.type === 'listening' && 'Comprensión Auditiva (Listening)'}
            {currentEx.type === 'tone_challenge' && 'Desafío de Tonos y Pinyin'}
          </span>
          {isCompleted && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 size={14} /> Módulo ya completado
            </span>
          )}
        </div>

        {/* 1. Multiple Choice */}
        {currentEx.type === 'multiple_choice' && (
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">
              {(currentEx as MultipleChoiceExercise).question}
            </h3>

            {(currentEx as MultipleChoiceExercise).audioText && (
              <div className="mb-4">
                <AudioButton text={(currentEx as MultipleChoiceExercise).audioText!} label="Escuchar audio" variant="primary" />
              </div>
            )}

            <div className="space-y-2.5">
              {(currentEx as MultipleChoiceExercise).options.map((option, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrectOption = optIdx === (currentEx as MultipleChoiceExercise).correctIndex;

                let optClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-red-400 hover:bg-red-50/30';
                if (isAnswerChecked) {
                  if (isCorrectOption) {
                    optClass = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20';
                  } else if (isSelected) {
                    optClass = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/20';
                  } else {
                    optClass = 'opacity-60 border-slate-200 dark:border-slate-800';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswerChecked}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${optClass}`}
                  >
                    <span>{option}</span>
                    {isAnswerChecked && isCorrectOption && (
                      <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    )}
                    {isAnswerChecked && isSelected && !isCorrectOption && (
                      <XCircle size={18} className="text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. Sentence Builder */}
        {currentEx.type === 'sentence_builder' && (
          <div>
            <div className="text-sm font-semibold text-slate-500 mb-1">Instrucción:</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
              {(currentEx as SentenceBuilderExercise).prompt}
            </h3>

            {pinyinVisible && (
              <div className="text-xs font-mono text-red-600 dark:text-red-400 mb-4 bg-red-50/50 dark:bg-red-950/30 px-3 py-1.5 rounded-lg border border-red-100 dark:border-red-900/30 inline-block">
                Pinyin guía: {(currentEx as SentenceBuilderExercise).pinyinHint}
              </div>
            )}

            {/* Construction Area */}
            <div className="min-h-[70px] p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-wrap items-center gap-2 mb-4">
              {builtTokens.length === 0 ? (
                <span className="text-xs text-slate-400 italic">
                  Haz clic en las palabras de abajo para armar la oración en el orden correcto...
                </span>
              ) : (
                builtTokens.map((token, tIdx) => (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => handleRemoveToken(token, tIdx)}
                    disabled={isAnswerChecked}
                    className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-xs text-lg font-serif font-black text-slate-900 dark:text-slate-100 hover:bg-rose-50 hover:border-rose-300 transition-all cursor-pointer"
                  >
                    {token}
                  </button>
                ))
              )}
            </div>

            {/* Available Tokens */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {availableTokens.map((token, tIdx) => (
                <button
                  key={tIdx}
                  type="button"
                  onClick={() => handleAddToken(token, tIdx)}
                  disabled={isAnswerChecked}
                  className="px-4 py-2.5 rounded-xl bg-red-50 dark:bg-red-950/50 hover:bg-red-100 border border-red-200 dark:border-red-800 text-lg font-serif font-bold text-red-900 dark:text-red-200 shadow-xs transition-all cursor-pointer active:scale-95"
                >
                  {token}
                </button>
              ))}
            </div>

            {!isAnswerChecked && (
              <button
                type="button"
                onClick={handleCheckSentence}
                disabled={builtTokens.length === 0}
                className="w-full py-3 rounded-xl bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white font-semibold text-sm transition-all cursor-pointer shadow-xs"
              >
                Comprobar Orden
              </button>
            )}
          </div>
        )}

        {/* 3. Listening */}
        {currentEx.type === 'listening' && (
          <div>
            <div className="text-center py-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 mb-5">
              <span className="text-xs text-slate-500 uppercase font-bold block mb-2">
                Escucha el Audio en Mandarín:
              </span>
              <div className="inline-flex items-center gap-2">
                <AudioButton
                  text={(currentEx as ListeningExercise).audioText}
                  speedMode="normal"
                  variant="primary"
                  size="lg"
                  label="Reproducir Audio"
                />
                <AudioButton
                  text={(currentEx as ListeningExercise).audioText}
                  speedMode="slow"
                  variant="slow"
                  size="lg"
                  label="🐢 Lento"
                />
              </div>
            </div>

            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">
              {(currentEx as ListeningExercise).question}
            </h3>

            <div className="space-y-2.5">
              {(currentEx as ListeningExercise).options.map((option, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrectOption = optIdx === (currentEx as ListeningExercise).correctIndex;

                let optClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-red-400 hover:bg-red-50/30';
                if (isAnswerChecked) {
                  if (isCorrectOption) {
                    optClass = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20';
                  } else if (isSelected) {
                    optClass = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/20';
                  } else {
                    optClass = 'opacity-60 border-slate-200 dark:border-slate-800';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswerChecked}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${optClass}`}
                  >
                    <span>{option}</span>
                    {isAnswerChecked && isCorrectOption && (
                      <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    )}
                    {isAnswerChecked && isSelected && !isCorrectOption && (
                      <XCircle size={18} className="text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. Tone Challenge */}
        {currentEx.type === 'tone_challenge' && (
          <div>
            <div className="text-center py-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 mb-5">
              <span className="text-5xl sm:text-6xl font-serif font-black text-slate-900 dark:text-slate-100 block mb-2">
                {(currentEx as ToneChallengeExercise).hanzi}
              </span>
              <div className="font-mono text-xl font-bold text-slate-600 dark:text-slate-300">
                Sílaba: &ldquo;{(currentEx as ToneChallengeExercise).pinyinWithoutTone}&rdquo;
              </div>
              <div className="mt-2">
                <AudioButton
                  text={(currentEx as ToneChallengeExercise).hanzi}
                  speedMode="normal"
                  variant="primary"
                  size="sm"
                  label="Escuchar palabra"
                />
              </div>
            </div>

            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">
              ¿Cuál es el tono exacto de este carácter?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(currentEx as ToneChallengeExercise).options.map((option, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrectOption = optIdx === (currentEx as ToneChallengeExercise).correctIndex;

                let optClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-red-400 hover:bg-red-50/30';
                if (isAnswerChecked) {
                  if (isCorrectOption) {
                    optClass = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20';
                  } else if (isSelected) {
                    optClass = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/20';
                  } else {
                    optClass = 'opacity-60 border-slate-200 dark:border-slate-800';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswerChecked}
                    className={`text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${optClass}`}
                  >
                    <span>{option}</span>
                    {isAnswerChecked && isCorrectOption && (
                      <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    )}
                    {isAnswerChecked && isSelected && !isCorrectOption && (
                      <XCircle size={18} className="text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Feedback Section */}
        {isAnswerChecked && (
          <div
            className={`mt-6 p-4 rounded-2xl border transition-all animate-fadeIn ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200'
                : 'bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-200'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-sm mb-1">
              {isCorrect ? (
                <>
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  <span>¡Excelente! Respuesta correcta.</span>
                </>
              ) : (
                <>
                  <XCircle size={18} className="text-rose-600" />
                  <span>Respuesta incorrecta.</span>
                </>
              )}
            </div>
            <p className="text-xs leading-relaxed opacity-90 mt-1">
              💡 {currentEx.explanation}
            </p>

            <button
              type="button"
              onClick={handleNext}
              className="mt-4 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>{currentIndex < exercises.length - 1 ? 'Siguiente Ejercicio' : 'Finalizar y Ver Resultados'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
