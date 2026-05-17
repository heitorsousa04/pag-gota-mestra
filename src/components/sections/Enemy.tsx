import React from 'react';

export function Enemy() {
  return (
    <section className="py-20 bg-[#1b4332] text-white px-4">
      <div className="max-w-3xl mx-auto text-center">

        <div className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          ⚠️ O que ninguém te conta
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
          A terra preta que você compra na floricultura foi feita para matar sua planta
        </h2>

        <p className="text-green-200 text-lg leading-relaxed mb-8">
          Ela compacta com o tempo e sufoca as raízes por dentro. Sua plantinha fica travada e sentida enquanto você continua comprando terra nova sem entender o motivo.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "🌱", label: "A planta parece saudável por fora" },
            { icon: "💀", label: "A raiz apodrece por dentro em silêncio" },
            { icon: "🔄", label: "Você compra uma nova e o ciclo repete" }
          ].map((item, i) => (
            <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm text-green-100 font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-2xl p-6">
          <p className="text-[#d4a574] font-display font-bold text-lg mb-2">
            A culpa não é sua. É do substrato errado.
          </p>
          <p className="text-green-200 text-sm leading-relaxed">
            O Método da Gota Mestra foi criado exatamente para quebrar esse ciclo; 
            resgatando a raiz que ainda tem vida e blindando o solo para que isso nunca mais aconteça.
          </p>
        </div>

        <div className="mt-8">
          <a href="#pricing-complete" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white font-display font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1 shadow-lg">
              ACABAR COM ESSE CICLO AGORA
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}
