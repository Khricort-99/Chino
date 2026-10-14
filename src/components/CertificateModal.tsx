import React from 'react';
import { CertificateData } from '../types/curriculum';
import { Award, Printer, X, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificateData;
  isOpen: boolean;
  onClose: () => void;
  onGoToLevel2: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose,
  onGoToLevel2,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:bg-white">
      <div className="bg-white text-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl border-4 border-amber-500 overflow-hidden relative flex flex-col print:border-none print:shadow-none print:max-w-none">
        {/* Close Button (Hidden on Print) */}
        <div className="absolute top-4 right-4 z-10 print:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer shadow-xs transition-colors"
          >
            <Printer size={15} />
            <span>Imprimir / PDF</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Certificate Ornamental Paper */}
        <div className="p-6 sm:p-10 m-2 border-2 border-dashed border-amber-600/60 rounded-2xl bg-amber-50/40 relative">
          {/* Watermark Seal */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <span className="text-[180px] font-serif font-black text-red-900 select-none">
              汉语
            </span>
          </div>

          {/* Certificate Header */}
          <div className="text-center space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700 text-amber-200 text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} />
              <span>Ministerio de Educación / Instituto HSK Oficial</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-black text-red-900 tracking-wide mt-2">
              CERTIFICADO OFICIAL DE COMPETENCIA
            </h1>
            <div className="text-xs sm:text-sm font-serif font-bold text-slate-600 tracking-widest uppercase">
              HÀNYǓ SHUǏPÍNG KǍOSHÌ (HSK) • 汉语水平考试
            </div>
          </div>

          {/* Certificate Body */}
          <div className="text-center my-6 space-y-4">
            <p className="text-sm text-slate-600">Por la presente se certifica con distinción que:</p>

            <div className="text-2xl sm:text-3xl font-serif font-black text-slate-900 border-b-2 border-amber-500 pb-2 inline-block px-8 min-w-[280px]">
              {certificate.studentName}
            </div>

            <p className="text-sm text-slate-700 max-w-lg mx-auto leading-relaxed pt-2">
              Ha completado rigurosamente los 6 módulos formativos y ha aprobado con éxito el Examen de Certificación Oficial de <strong>Chino Mandarín HSK Nivel {certificate.level}</strong>, demostrando dominio de fonética tonal, 150 caracteres de vocabulario, comprensión auditiva nativa y estructuras sintácticas fundamentales.
            </p>

            {/* Score and Certificate Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto py-4 bg-white/80 rounded-2xl border border-amber-200 shadow-2xs">
              <div className="text-center p-2">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Nivel</div>
                <div className="text-base font-black text-red-800">HSK {certificate.level}</div>
              </div>
              <div className="text-center p-2 border-l border-amber-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Calificación</div>
                <div className="text-base font-black text-red-800 font-mono">{certificate.percentage}%</div>
              </div>
              <div className="text-center p-2 border-l border-amber-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Aciertos</div>
                <div className="text-base font-black text-slate-800">{certificate.score} / {certificate.totalQuestions}</div>
              </div>
              <div className="text-center p-2 border-l border-amber-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Estado</div>
                <div className="text-base font-black text-emerald-700 flex items-center justify-center gap-1">
                  <CheckCircle2 size={14} />
                  <span>Aprobado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Seals & Signatures */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-amber-300 mt-6 text-xs text-slate-600">
            <div className="text-center sm:text-left space-y-1">
              <div><strong>Fecha de Emisión:</strong> {certificate.issueDate}</div>
              <div><strong>Código de Registro:</strong> <span className="font-mono font-bold text-red-900">{certificate.certificateNumber}</span></div>
            </div>

            {/* Official Imperial Seal Stamp */}
            <div className="w-24 h-24 rounded-full border-4 border-red-700 bg-red-50 text-red-700 flex flex-col items-center justify-center p-1 text-center shadow-inner shrink-0 rotate-[-6deg] select-none">
              <span className="text-[9px] font-serif font-black tracking-tighter uppercase">HSK CERTIFIED</span>
              <span className="text-lg font-serif font-black leading-none my-0.5">合格</span>
              <span className="text-[8px] font-bold">EXAM PASSED</span>
            </div>

            <div className="text-center sm:text-right space-y-1">
              <div className="font-serif italic text-slate-800">Prof. Certificador HSK Mandarín</div>
              <div className="border-t border-slate-400 w-36 mx-auto sm:ml-auto pt-1 text-[11px] text-slate-500">
                Firma Autorizada
              </div>
            </div>
          </div>
        </div>

        {/* Action Button to advance to HSK 2 (Hidden on Print) */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
          <div className="text-xs text-slate-600 flex items-center gap-2">
            <Award size={18} className="text-amber-600" />
            <span>¡Nivel HSK 2 desbloqueado automáticamente en tu perfil!</span>
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              onGoToLevel2();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
          >
            <span>Comenzar Ahora Nivel HSK 2</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
