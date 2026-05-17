import React, { useState } from 'react';
import { Check, Shield, Lock, CreditCard } from 'lucide-react';
import { UpsellModal } from '../ui/UpsellModal';

export function Pricing() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-[#f5f0e8] px-4">
      <div className="max-w-md mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-ink">
          Escolha o melhor pra você 👇
        </h2>

        {/* Card 1 — Socorro para Plantinhas */}
        <div className="bg-[#f5f5f5] rounded-[24px] p-7 border border-gray-200 shadow-sm mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">R$19,90</p>
          <h3 className="font-display text-2xl font-bold text-gray-500 mb-1">Socorro para Plantinhas</h3>
          <p className="text-xs text-gray-400 line-through mb-1">Sem os 5 bônus exclusivos</p>
          <p className="text-gray-400 text-sm line-through mb-1">De R$37,00</p>
          <div className="text-4xl font-bold text-gray-600 mb-1">R$19,90</div>
          <p className="text-gray-500 text-sm mb-1">pagamento único</p>
          <p className="text-gray-400 font-semibold text-sm mb-6">Acesso imediato após a compra</p>

          <ul className="space-y-3 mb-7">
            {[
              "+50 Receitas Caseiras de Resgate",
              "Acesso digital imediato",
              "Garantia de 7 dias",
              "Sem os 5 bônus exclusivos",
              "Sem Checklist de Iluminação",
              "Sem Dossiê Invasão Zero"
            ].map((item, i) => (
              <li key={i} className={`flex items-center gap-2 text-sm ${i >= 3 ? 'text-gray-300 line-through' : 'text-gray-400'}`}>
                <Check className={`w-4 h-4 shrink-0 ${i >= 3 ? 'text-gray-300' : 'text-gray-400'}`} />
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsUpsellOpen(true)}
            className="w-full py-4 rounded-xl border border-gray-200 text-gray-400 font-display font-bold uppercase tracking-widest text-sm transition-all"
          >
            QUERO O SOCORRO
          </button>
        </div>

        {/* Card 2 — Selva Blindada */}
        <div id="pricing-complete" className="relative bg-[#1b4332] text-white rounded-[24px] p-7 shadow-2xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4a574] text-[#1b4332] font-bold px-5 py-1.5 rounded-full text-sm tracking-wider shadow">
            MAIS VENDIDO
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-green-300 mb-1 mt-2">R$47,90</p>
          <h3 className="font-display text-2xl font-bold mb-1">Selva Blindada</h3>
          <img
            src="https://i.imgur.com/vpuPqPb.jpeg"
            alt="Selva Blindada"
            className="w-full h-48 md:h-56 object-cover rounded-2xl mb-4"
            loading="lazy"
          />
          <p className="text-green-300 text-sm line-through mb-1">De R$87,00</p>
          <div className="text-4xl font-bold mb-1">R$47,90</div>
          <p className="text-green-200 text-sm mb-1">pagamento único</p>
          <p className="text-[#d4a574] font-semibold text-sm mb-6">Economize R$19,10 + R$209,50 em bônus</p>

          <ul className="space-y-3 mb-4">
            {[
              "+50 Receitas Caseiras de Resgate",
              "Fórmula completa da Gota Mestra",
              "Substrato Blindado incluso",
              "Acesso vitalício",
              "Garantia Incondicional 7 dias"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-green-100">
                <Check className="w-4 h-4 text-[#d4a574] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-white/10 rounded-2xl p-4 mb-6 border border-white/20">
            <p className="font-bold text-[#d4a574] text-sm mb-3">🎁 + 5 BÔNUS EXCLUSIVOS (R$209,50)</p>
            <ul className="space-y-1.5">
              {[
                "Fábrica de Mudas",
                "Checklist de Iluminação",
                "Guia de Plant Styling",
                "Detox de Folhas",
                "Dossiê Invasão Zero"
              ].map((b, i) => (
                <li key={i} className="text-xs text-green-200 flex items-center gap-2">
                  <span>🎁</span> BÔNUS {i + 1}: {b}
                </li>
              ))}
            </ul>
          </div>

          <a href="https://pay.wiapy.com/hrGwtDGaaC" className="block">
            <button className="w-full py-4 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white font-display font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-0.5 shadow-lg">
              QUERO A SELVA BLINDADA
            </button>
          </a>

          <div className="flex justify-center items-center gap-8 mt-5 text-green-200">
            <div className="flex flex-col items-center justify-center gap-1 text-xs text-center">
              <Shield className="w-5 h-5" />
              <span>Compra Segura</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 text-xs text-center">
              <Lock className="w-5 h-5" />
              <span>Privacidade Protegida</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 text-xs text-center">
              <CreditCard className="w-5 h-5" />
              <span>Pagamento Seguro</span>
            </div>
          </div>

          <p className="text-center text-green-300 text-xs mt-4">
            Acesso enviado por <strong className="text-white">E-mail</strong> e <strong className="text-white">WhatsApp</strong> após a compra
          </p>
        </div>
      </div>

      <UpsellModal isOpen={isUpsellOpen} onClose={() => setIsUpsellOpen(false)} />
    </section>
  );
}
