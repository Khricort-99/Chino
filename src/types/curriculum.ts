export type SpeedMode = 'normal' | 'slow';

export interface PhoneticConcept {
  id: string;
  concept: string;
  rule: string;
  example: string;
  pinyin: string;
  audioText: string;
  pitchContour?: string; // e.g. "55", "35", "214", "51"
  toneNumber?: number; // 1, 2, 3, 4, 5
  spanishTip: string;
}

export interface VocabularyItem {
  id: string;
  hanzi: string;
  pinyin: string;
  es: string;
  tip?: string;
  exampleHanzi: string;
  examplePinyin: string;
  exampleEs: string;
  category?: string;
  audioText?: string;
}

export interface FormulaToken {
  text: string;
  role: 'subject' | 'verb' | 'particle' | 'object' | 'time' | 'place' | 'adjective' | 'number' | 'measure' | 'negative';
  description?: string;
}

export interface GrammarExample {
  hanzi: string;
  pinyin: string;
  es: string;
  audioText?: string;
  breakdown?: string;
}

export interface GrammarRule {
  id: string;
  title: string;
  formula: string;
  formulaTokens?: FormulaToken[];
  explanation: string;
  rulesHighlight?: string[];
  examples: GrammarExample[];
}

export type ExerciseType = 'multiple_choice' | 'sentence_builder' | 'listening' | 'tone_challenge';

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  explanation: string;
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple_choice';
  question: string;
  options: string[];
  correctIndex: number;
  audioText?: string;
}

export interface SentenceBuilderExercise extends BaseExercise {
  type: 'sentence_builder';
  prompt: string;
  tokens: string[];
  correctOrder: string[];
  pinyinHint: string;
  translation: string;
}

export interface ListeningExercise extends BaseExercise {
  type: 'listening';
  audioText: string;
  question: string;
  options: string[];
  correctIndex: number;
  pinyinHint?: string;
}

export interface ToneChallengeExercise extends BaseExercise {
  type: 'tone_challenge';
  hanzi: string;
  pinyinWithoutTone: string;
  options: string[]; // ['1.er tono (ˉ)', '2.do tono (ˊ)', '3.er tono (ˇ)', '4.to tono (ˋ)']
  correctIndex: number;
  correctPinyin: string;
}

export type Exercise = 
  | MultipleChoiceExercise 
  | SentenceBuilderExercise 
  | ListeningExercise 
  | ToneChallengeExercise;

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  phoneticsGuide: PhoneticConcept[];
  vocabulary: VocabularyItem[];
  grammar: GrammarRule[];
  exercises: Exercise[];
}

export interface ExamQuestion {
  id: string;
  section: 'listening' | 'phonetics' | 'grammar' | 'reading';
  type: 'multiple_choice';
  question: string;
  promptHanzi?: string;
  promptPinyin?: string;
  audioText?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FinalExam {
  passingScore: number; // e.g. 80
  timeLimitMinutes: number; // e.g. 15
  questions: ExamQuestion[];
}

export interface CurriculumLevel {
  hskLevel: number;
  title: string;
  subtitle: string;
  description: string;
  unlocked: boolean;
  modules: Module[];
  finalExam: FinalExam;
}

export interface CertificateData {
  certificateNumber: string;
  studentName: string;
  level: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  issueDate: string;
}

export interface UserProgress {
  unlockedLevels: number[];
  completedModules: string[];
  moduleScores: Record<string, number>;
  masteredVocab: string[];
  certificates: Record<number, CertificateData>;
  devMode: boolean;
  studentName: string;
  pinyinVisible: boolean;
  audioSpeed: SpeedMode;
}
