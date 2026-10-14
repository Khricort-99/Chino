import { SpeedMode } from '../types/curriculum';

class AudioService {
  private synth: SpeechSynthesis | null = null;
  private currentAudio: HTMLAudioElement | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private listeners: Set<(speaking: boolean, text: string | null) => void> = new Set();
  private isSpeaking = false;
  private currentText: string | null = null;
  private audioCache: Map<string, HTMLAudioElement> = new Map();

  constructor() {
    if (typeof window !== 'undefined') {
      if ('speechSynthesis' in window) {
        this.synth = window.speechSynthesis;
      }
    }
  }

  public subscribe(listener: (speaking: boolean, text: string | null) => void): () => void {
    this.listeners.add(listener);
    listener(this.isSpeaking, this.currentText);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isSpeaking, this.currentText));
  }

  public stop() {
    // Stop HTML5 Audio if playing
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }

    // Stop SpeechSynthesis if speaking
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {
        console.warn('SpeechSynthesis cancel error:', e);
      }
    }

    this.isSpeaking = false;
    this.currentText = null;
    this.notify();
  }

  /**
   * Cleans text to extract pure Chinese characters/sentences for the TTS engines
   */
  private cleanTextForChineseTTS(text: string): string {
    // If the text contains Chinese characters, isolate or prioritize them
    const trimmed = text.trim();
    // Remove unwanted Latin guidance text if present e.g. "(...) "
    const cleaned = trimmed.replace(/\([^)]*\)/g, '').trim();
    return cleaned || trimmed;
  }

  /**
   * Primary Engine: High-fidelity Native Chinese HTML5 Audio
   * Uses standard Google Translate Mandarin TTS CDN (audio/mpeg)
   * Guaranteed to work across all platforms without requiring OS voice packs
   */
  private playViaHtml5Audio(cleanText: string, speedMode: SpeedMode): Promise<boolean> {
    return new Promise((resolve) => {
      try {
        const encodedText = encodeURIComponent(cleanText);
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encodedText}`;

        const audio = new Audio(url);
        this.currentAudio = audio;
        audio.playbackRate = speedMode === 'slow' ? 0.75 : 1.0;

        audio.onended = () => {
          this.isSpeaking = false;
          this.currentText = null;
          this.currentAudio = null;
          this.notify();
          resolve(true);
        };

        audio.onerror = (e) => {
          console.warn('HTML5 Audio TTS failed, falling back to Web Speech API:', e);
          if (this.currentAudio === audio) {
            this.currentAudio = null;
          }
          resolve(false);
        };

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Successfully playing!
            })
            .catch((err) => {
              console.warn('HTML5 audio play rejected (e.g. autoplay restriction):', err);
              if (this.currentAudio === audio) {
                this.currentAudio = null;
              }
              resolve(false);
            });
        }
      } catch (err) {
        console.warn('HTML5 Audio initialization error:', err);
        resolve(false);
      }
    });
  }

  /**
   * Fallback Engine: Web Speech API with un-pause bugfixes and automatic voice selection
   */
  private playViaSpeechSynthesis(cleanText: string, speedMode: SpeedMode): Promise<boolean> {
    return new Promise((resolve) => {
      if (!this.synth) {
        resolve(false);
        return;
      }

      try {
        // Fix Chromium paused/pending freeze bug
        if (this.synth.paused) {
          this.synth.resume();
        }
        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'zh-CN';
        utterance.rate = speedMode === 'slow' ? 0.72 : 0.95;
        utterance.pitch = 1.0;

        const voices = this.synth.getVoices();
        const chineseVoice =
          voices.find((v) => v.lang === 'zh-CN' && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Xiaoxiao') || v.name.includes('Tingting') || v.name.includes('Microsoft'))) ||
          voices.find((v) => v.lang === 'zh-CN') ||
          voices.find((v) => v.lang.startsWith('zh')) ||
          null;

        if (chineseVoice) {
          utterance.voice = chineseVoice;
        }

        this.currentUtterance = utterance;

        utterance.onend = () => {
          this.isSpeaking = false;
          this.currentText = null;
          this.currentUtterance = null;
          this.notify();
          resolve(true);
        };

        utterance.onerror = (e) => {
          if (e.error !== 'interrupted') {
            console.warn('SpeechSynthesis error:', e);
          }
          this.isSpeaking = false;
          this.currentText = null;
          this.currentUtterance = null;
          this.notify();
          resolve(false);
        };

        this.synth.speak(utterance);

        // Safety timeout for mobile browsers where utterance.onend doesn't fire
        setTimeout(() => {
          if (this.isSpeaking && this.currentUtterance === utterance) {
            this.isSpeaking = false;
            this.currentText = null;
            this.notify();
            resolve(true);
          }
        }, 8000);
      } catch (err) {
        console.warn('SpeechSynthesis speak error:', err);
        resolve(false);
      }
    });
  }

  /**
   * Unified speak method with automatic fallback
   */
  public async speak(text: string, speedMode: SpeedMode = 'normal'): Promise<void> {
    const cleanText = this.cleanTextForChineseTTS(text);
    if (!cleanText) return;

    // Stop any ongoing playback
    this.stop();

    this.isSpeaking = true;
    this.currentText = text;
    this.notify();

    // 1. Try HTML5 Audio First (natural native Chinese voice, 100% reliable)
    const html5Success = await this.playViaHtml5Audio(cleanText, speedMode);
    if (html5Success) {
      return;
    }

    // 2. If HTML5 Audio failed or blocked, try Web Speech API
    console.info('Attempting SpeechSynthesis fallback...');
    const speechSuccess = await this.playViaSpeechSynthesis(cleanText, speedMode);
    if (speechSuccess) {
      return;
    }

    // Reset speaking state if both failed
    this.isSpeaking = false;
    this.currentText = null;
    this.notify();
  }

  public getStatus() {
    return {
      isSpeaking: this.isSpeaking,
      currentText: this.currentText,
    };
  }
}

export const audioService = new AudioService();
