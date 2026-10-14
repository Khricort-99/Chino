import { CertificateData, SpeedMode, UserProgress } from '../types/curriculum';

const STORAGE_KEY = 'hanyu_master_progress_v1';

const DEFAULT_PROGRESS: UserProgress = {
  unlockedLevels: [1],
  completedModules: [],
  moduleScores: {},
  masteredVocab: [],
  certificates: {},
  devMode: false,
  studentName: 'Estudiante HSK',
  pinyinVisible: true,
  audioSpeed: 'normal',
};

export const loadProgress = (): UserProgress => {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      unlockedLevels: parsed.unlockedLevels?.length ? parsed.unlockedLevels : [1],
    };
  } catch (e) {
    console.error('Error loading progress from localStorage:', e);
    return DEFAULT_PROGRESS;
  }
};

export const saveProgress = (progress: UserProgress): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Error saving progress to localStorage:', e);
  }
};

export const isModuleUnlocked = (
  moduleId: string,
  levelNumber: number,
  moduleIndex: number,
  progress: UserProgress
): boolean => {
  if (progress.devMode) return true;
  // If the level itself is not unlocked, module is locked
  if (!progress.unlockedLevels.includes(levelNumber)) return false;

  // First module of any unlocked level is unlocked by default
  if (moduleIndex === 0) return true;

  // For subsequent modules (N+1), module N must be in completedModules
  // For HSK 1: m1 -> m2 -> m3 -> m4 -> m5 -> m6
  const prevModuleId = `hsk${levelNumber}-m${moduleIndex}`;
  return progress.completedModules.includes(prevModuleId);
};

export const isExamUnlocked = (
  levelNumber: number,
  totalModulesInLevel: number,
  progress: UserProgress
): boolean => {
  if (progress.devMode) return true;
  if (!progress.unlockedLevels.includes(levelNumber)) return false;

  // All modules in this level must be completed
  for (let i = 1; i <= totalModulesInLevel; i++) {
    const modId = `hsk${levelNumber}-m${i}`;
    if (!progress.completedModules.includes(modId)) {
      return false;
    }
  }
  return true;
};

export const isLevelUnlocked = (levelNumber: number, progress: UserProgress): boolean => {
  if (progress.devMode) return true;
  return progress.unlockedLevels.includes(levelNumber);
};
