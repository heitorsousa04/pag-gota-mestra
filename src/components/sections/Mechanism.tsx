import React from 'react';

const cards = [
  {
    icon: "💧",
    title: "A Gota Mestra",
    desc: "Aprenda a mistura caseira que ferve na terra; destrói fungos e oxigena as raízes das suas plantinhas sentidas. Tudo explicado com as proporções exatas e seguras dentro do seu Dossiê."
  },
  {
    icon: "🛡️",
    title: "Substrato Blindado",
    desc: "Chega de terra compactada que sufoca sua urban jungle. Aprenda a mistura ideal que substitui o substrato industrial; garantindo drenagem perfeita para suas filhas nunca mais apodrecerem."
  },
  {
    icon: "📸",
    title: "Pare de Adivinhar",
    desc: "Entenda o que as folhas meladas ou pontas secas querem dizer. Traduza os sinais de socorro das suas plantas com o passo a passo visual para cada sintoma específico."
  },
  {
    icon: "⚡",
    title: "Resultado em 24h",
    desc: "Veja a vida brotar novamente em apenas um dia; sem precisar de lojas caras ou técnicas difíceis. Recupere sua selva urbana; mesmo se você acha que não tem dedo verde."
  }
];

export function Mechanism() {
  return (
    <section className="py-20 bg-[#fafaef] px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center max-w-xs mx-auto md:max-w-none mb-12 text-ink">
          Como a Gota Mestra Funciona
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-6 rounded-[24px] border border-[#e5e5d8] hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="font-display font-bold text-lg mb-2 text-primary-dark">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a href="#pricing-complete" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white font-display font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1 shadow-lg">
              SALVAR MINHAS PLANTINHAS
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
