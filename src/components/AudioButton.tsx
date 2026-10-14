import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Turtle } from 'lucide-react';
import { audioService } from '../utils/audio';
import { SpeedMode } from '../types/curriculum';

interface AudioButtonProps {
  text: string;
  speedMode?: SpeedMode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon' | 'slow';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  speedMode = 'normal',
  variant = 'secondary',
  size = 'md',
  label,
  className = '',
}) => {
  const [isPlayingThis, setIsPlayingThis] = useState(false);

  useEffect(() => {
    return audioService.subscribe((isSpeaking, currentText) => {
      setIsPlayingThis(isSpeaking && currentText === text);
    });
  }, [text]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlayingThis) {
      audioService.stop();
    } else {
      audioService.speak(text, speedMode);
    }
  };

  const sizeClasses = {
    sm: 'text-xs p-1.5 gap-1',
    md: 'text-sm py-1.5 px-2.5 gap-1.5',
    lg: 'text-base py-2 px-3.5 gap-2',
  }[size];

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  }[size];

  let variantClasses = '';
  if (variant === 'primary') {
    variantClasses = 'bg-red-700 hover:bg-red-800 text-white shadow-sm active:scale-95';
  } else if (variant === 'slow') {
    variantClasses = 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 active:scale-95 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-700';
  } else if (variant === 'ghost') {
    variantClasses = 'hover:bg-slate-100 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 active:scale-95';
  } else if (variant === 'icon') {
    variantClasses = 'p-1.5 rounded-full hover:bg-red-100 text-red-700 dark:hover:bg-red-950/50 dark:text-red-400 active:scale-90';
  } else {
    variantClasses = 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 active:scale-95';
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      title={speedMode === 'slow' ? `Escuchar lento: "${text}"` : `Escuchar pronunciación: "${text}"`}
      className={`inline-flex items-center justify-center font-medium rounded-lg transition-all select-none cursor-pointer ${sizeClasses} ${variantClasses} ${
        isPlayingThis ? 'ring-2 ring-red-500 ring-offset-1 animate-pulse' : ''
      } ${className}`}
    >
      {speedMode === 'slow' ? (
        <Turtle size={iconSizes} className={isPlayingThis ? 'text-amber-600 animate-bounce' : ''} />
      ) : isPlayingThis ? (
        <VolumeX size={iconSizes} className="text-red-600" />
      ) : (
        <Volume2 size={iconSizes} />
      )}
      {label && <span>{label}</span>}
      {isPlayingThis && (
        <span className="flex items-center gap-0.5 ml-1">
          <span className="w-1 h-2 bg-red-600 rounded-full animate-ping"></span>
          <span className="w-1 h-3 bg-red-600 rounded-full animate-pulse"></span>
        </span>
      )}
    </button>
  );
};
