import React, { useState, useEffect } from 'react';
import { FinalExam, CertificateData, SpeedMode } from '../types/curriculum';
import { AudioButton } from './AudioButton';
import confetti from 'canvas-confetti';
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  Award,
  ChevronRight,
  ChevronLeft,
  X,
  Volume2,
} from 'lucide-react';

interface ExamModalProps {
  levelNumber: number;
  levelTitle: string;
  exam: FinalExam;
  studentName: string;
  isOpen: boolean;
  onClose: () => void;
  onPassExam: (cert: CertificateData) => void;
  speedMode: SpeedMode;
}

export const ExamModal: React.FC<ExamModalProps> = ({
  levelNumber,
  levelTitle,
  exam,
  studentName,
  isOpen,
  onClose,
  onPassExam,
  speedMode,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(exam.timeLimitMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [examResult, setExamResult] = useState<{
    score: number;
    total: number;
    percentage: number;
    passed: boolean;
  } | null>(null);

  // Timer effect
  useEffect(() => {
    if (!isOpen || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, isSubmitted]);

  if (!isOpen) return null;

  const currentQ = exam.questions[currentQuestionIndex];
  const minutes = Math.floor(timeLeftSeconds / 60);
  const seconds = timeLeftSeconds % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleSubmitExam = () => {
    let correctCount = 0;
    exam.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / exam.questions.length) * 100);
    const passed = percentage >= exam.passingScore;

    const result = {
      score: correctCount,
      total: exam.questions.length,
      percentage,
      passed,
    };
    setExamResult(result);
    setIsSubmitted(true);

    if (passed) {
      // Fire confetti!
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch (e) {
        console.warn('Confetti error:', e);
      }

      const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
      const cert: CertificateData = {
        certificateNumber: `HSK${levelNumber}-${new Date().getFullYear()}-${randomId}`,
        studentName: studentName || 'Estudiante HSK',
        level: levelNumber,
        score: correctCount,
        totalQuestions: exam.questions.length,
        percentage,
        issueDate: new Date().toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      };
      onPassExam(cert);
    }
  };

  const sectionNames = {
    listening: '1. Comprensión Auditiva (Listening)',
    phonetics: '2. Fonética, Tonos y Pinyin',
    grammar: '3. Gramática y Sintaxis',
    reading: '4. Lectura Hanzi y Comprensión',
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-red-800 via-red-700 to-amber-700 text-white p-4 sm:p-5 flex items-center justify-between shadow-md shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-red-950 uppercase tracking-wider">
                Examen Oficial HSK {levelNumber}
              </span>
              <span className="text-xs text-red-100 hidden sm:inline">
                Requisito de Aprobación: &ge; {exam.passingScore}%
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black mt-0.5">
              Certificación Oficial de Chino Mandarín Nivel {levelNumber}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {!isSubmitted && (
              <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/20 text-sm font-mono font-bold">
                <Clock size={16} className={timeLeftSeconds < 180 ? 'text-amber-300 animate-pulse' : ''} />
                <span className={timeLeftSeconds < 180 ? 'text-amber-300' : ''}>{timeFormatted}</span>
              </div>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted && examResult ? (
            /* Results View */
            <div className="text-center py-6 max-w-xl mx-auto space-y-4">
              <div
                className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${
                  examResult.passed
                    ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-300'
                }`}
              >
                {examResult.passed ? <Award size={44} /> : <AlertTriangle size={44} />}
              </div>

              <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                {examResult.passed ? '¡FELICITACIONES! HAS APROBADO EL HSK 1' : 'NO ALCANZASTE EL 80% REQUERIDO'}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300">
                {examResult.passed
                  ? `Has obtenido un puntaje de ${examResult.percentage}% (${examResult.score} de ${examResult.total} aciertos). Tu certificado oficial ha sido generado y el nivel HSK 2 está desbloqueado.`
                  : `Obtuviste ${examResult.score} de ${examResult.total} respuestas correctas (${examResult.percentage}%). Necesitas un mínimo de 80% para desbloquear el HSK 2. ¡Repasa los módulos y vuelve a intentarlo!`}
              </p>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex justify-around">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Aciertos</div>
                  <div className="text-2xl font-black text-slate-900 dark:text-slate-100">
                    {examResult.score} / {examResult.total}
                  </div>
                </div>
                <div className="border-r border-slate-200 dark:border-slate-700"></div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Porcentaje</div>
                  <div className={`text-2xl font-black font-mono ${examResult.passed ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {examResult.percentage}%
                  </div>
                </div>
                <div className="border-r border-slate-200 dark:border-slate-700"></div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Estado</div>
                  <div className={`text-lg font-bold ${examResult.passed ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {examResult.passed ? 'APROBADO' : 'NO APROBADO'}
                  </div>
                </div>
              </div>

              {/* Review Mistakes Section */}
              <div className="text-left mt-6 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Revisión Detallada de Preguntas:
                </h4>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {exam.questions.map((q, idx) => {
                    const userAns = selectedAnswers[idx];
                    const isCorrect = userAns === q.correctIndex;
                    return (
                      <div
                        key={q.id}
                        className={`p-3 rounded-xl border text-xs leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-50/60 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900'
                            : 'bg-rose-50/60 border-rose-200 dark:bg-rose-950/20 dark:border-rose-900'
                        }`}
                      >
                        <div className="font-semibold flex items-center justify-between mb-1">
                          <span>Pregunta {idx + 1}: {q.question}</span>
                          <span className={isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                            {isCorrect ? '✓ Correcto' : '✗ Incorrecto'}
                          </span>
                        </div>
                        <div>Respuesta correcta: <strong>{q.options[q.correctIndex]}</strong></div>
                        <div className="text-slate-500 dark:text-slate-400 mt-0.5">💡 {q.explanation}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold text-sm cursor-pointer shadow-sm"
                >
                  {examResult.passed ? 'Ver Certificado y Comenzar HSK 2' : 'Cerrar y Repasar'}
                </button>
              </div>
            </div>
          ) : (
            /* Live Exam Question View */
            <div className="space-y-5">
              {/* Question Navigation Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400">
                  {sectionNames[currentQ.section] || currentQ.section}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Pregunta {currentQuestionIndex + 1} de {exam.questions.length}
                </span>
              </div>

              {/* Question Grid Navigator */}
              <div className="flex flex-wrap gap-1.5 justify-center py-1">
                {exam.questions.map((_, idx) => {
                  const isAnswered = selectedAnswers[idx] !== undefined;
                  const isCurrent = idx === currentQuestionIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-red-700 text-white ring-2 ring-red-400 ring-offset-1'
                          : isAnswered
                          ? 'bg-red-100 text-red-900 dark:bg-red-950/60 dark:text-red-300'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Active Question Box */}
              <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {currentQ.question}
                </h3>

                {/* Audio Text for Listening questions */}
                {currentQ.audioText && (
                  <div className="my-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase mb-0.5">Audio Oficial HSK:</div>
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Presiona para escuchar atentamente la frase
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <AudioButton
                        text={currentQ.audioText}
                        speedMode="normal"
                        variant="primary"
                        label="Reproducir Audio"
                      />
                      <AudioButton
                        text={currentQ.audioText}
                        speedMode="slow"
                        variant="slow"
                        label="🐢 Lento"
                      />
                    </div>
                  </div>
                )}

                {/* Prompt Hanzi if Reading question */}
                {currentQ.promptHanzi && (
                  <div className="my-4 p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-100 dark:border-red-900/40 text-center">
                    <span className="text-2xl sm:text-3xl font-serif font-black text-slate-900 dark:text-slate-100 tracking-wider">
                      {currentQ.promptHanzi}
                    </span>
                    <div className="mt-2">
                      <AudioButton text={currentQ.promptHanzi} size="sm" variant="ghost" label="Escuchar texto" />
                    </div>
                  </div>
                )}

                {/* Options List */}
                <div className="space-y-2.5 mt-4">
                  {currentQ.options.map((option, optIdx) => {
                    const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelectOption(optIdx)}
                        className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-red-50 border-red-500 text-red-900 dark:bg-red-950/60 dark:border-red-600 dark:text-red-200 ring-2 ring-red-400/20'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                              isSelected
                                ? 'bg-red-700 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                            }`}
                          >
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{option}</span>
                        </div>
                        {isSelected && <CheckCircle2 size={18} className="text-red-700" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        {!isSubmitted && (
          <div className="bg-slate-50 dark:bg-slate-800/80 p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between shrink-0">
            <button
              type="button"
              onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
            >
              <ChevronLeft size={16} />
              <span>Anterior</span>
            </button>

            <div className="text-xs text-slate-500">
              Respondidas: {Object.keys(selectedAnswers).length} de {exam.questions.length}
            </div>

            {currentQuestionIndex < exam.questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-sm font-semibold cursor-pointer flex items-center gap-1.5"
              >
                <span>Siguiente</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmitExam}
                className="px-5 py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white text-sm font-bold shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <Award size={16} />
                <span>Entregar Examen</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
