import { CurriculumLevel } from '../types/curriculum';
import { HSK1_DATA } from './hsk1Data';
import { HSK2_DATA } from './hsk2Data';

export const CURRICULUM_DATA: CurriculumLevel[] = [
  HSK1_DATA,
  HSK2_DATA,
  {
    hskLevel: 3,
    title: 'HSK 3 - Conversación Independiente y Expresión de Opinión',
    subtitle: 'Nivel Umbral B1: 600 palabras acumuladas, conectores avanzados, complementos de resultado.',
    description: 'Comunícate en viajes, trabajo y estudio con fluidez básica. Se desbloquea aprobando la certificación HSK 2.',
    unlocked: false,
    modules: [],
    finalExam: { passingScore: 80, timeLimitMinutes: 25, questions: [] }
  },
  {
    hskLevel: 4,
    title: 'HSK 4 - Fluidez Profesional y Textos Complejos',
    subtitle: 'Nivel B2: 1200 palabras, debates culturales, noticias y lenguaje formal.',
    description: 'Capacidad para debatir temas variados y ver contenido audiovisual en chino nativo.',
    unlocked: false,
    modules: [],
    finalExam: { passingScore: 80, timeLimitMinutes: 30, questions: [] }
  },
  {
    hskLevel: 5,
    title: 'HSK 5 - Dominio Avanzado y Lectura Literaria',
    subtitle: 'Nivel C1: 2500 palabras, periódicos, literatura y discursos.',
    description: 'Comprensión de conferencias especializadas y redacción de artículos extensos.',
    unlocked: false,
    modules: [],
    finalExam: { passingScore: 80, timeLimitMinutes: 35, questions: [] }
  },
  {
    hskLevel: 6,
    title: 'HSK 6 - Maestría y Competencia Nativa Total',
    subtitle: 'Nivel C2: Más de 5000 palabras y chengyu (modismos idiomáticos clásicos).',
    description: 'Capacidad para comunicarse y expresarse de forma análoga a un hablante nativo culto.',
    unlocked: false,
    modules: [],
    finalExam: { passingScore: 80, timeLimitMinutes: 40, questions: [] }
  }
];

export const getLevelData = (levelNumber: number): CurriculumLevel => {
  return CURRICULUM_DATA.find(lvl => lvl.hskLevel === levelNumber) || HSK1_DATA;
};

export const getAllVocabForLevel = (levelNumber: number) => {
  const level = getLevelData(levelNumber);
  return level.modules.flatMap(m => m.vocabulary);
};
