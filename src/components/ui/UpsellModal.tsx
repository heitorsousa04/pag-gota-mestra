import React from 'react';
import { Check, X } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UpsellModal({ isOpen, onClose }: UpsellModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: 'rgba(0,0,0,0.75)' }}>
      <div className="bg-white rounded-[28px] w-full max-w-sm p-7 relative text-center shadow-2xl">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="text-5xl mb-4">🎁</div>

        <h2 className="font-display font-bold text-xl text-ink mb-3 leading-snug">
          Espera! Você está deixando 5 bônus pra trás.
        </h2>

        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          O Socorro é ótimo pra começar. Mas a Selva Blindada tem tudo isso por uma pequena diferença:
        </p>

        <ul className="text-left space-y-2 mb-6">
          {[
            "Fábrica de Mudas",
            "Checklist de Iluminação",
            "Guia de Plant Styling",
            "Detox de Folhas",
            "Dossiê Invasão Zero"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-[#f0fdf4] rounded-2xl py-4 px-6 mb-6">
          <p className="text-gray-400 text-sm line-through mb-1">De R$47,90</p>
          <p className="font-display font-bold text-3xl text-primary">Por R$34,90</p>
        </div>

        <a href="https://pay.wiapy.com/iPtQHIhqjt" className="block mb-3">
          <button className="w-full py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-display font-bold text-sm uppercase tracking-widest transition-all hover:-translate-y-0.5 shadow-lg">
            SIM! QUERO A SELVA BLINDADA POR R$34,90
          </button>
        </a>

        <a href="https://pay.wiapy.com/w7o_dtC5RT" className="block">
          <button className="w-full py-3 rounded-xl border-0 text-gray-400 text-xs font-medium hover:text-gray-600 transition-colors">
            Não, quero continuar pagando mais caro
          </button>
        </a>

      </div>
    </div>
  );
}
