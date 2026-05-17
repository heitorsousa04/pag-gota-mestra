import React from 'react';

const bonuses = [
  {
    img: "https://i.imgur.com/Xl0oX4T.jpeg",
    title: "Fábrica de Mudas",
    subtitle: "Multiplique sua coleção do zero sem gastar nada.",
    oldPrice: "R$47,90",
    color: "from-emerald-400 to-green-600",
    badge: "bg-yellow-400 text-yellow-900"
  },
  {
    img: "https://i.imgur.com/0pa2XVp.jpeg",
    title: "Checklist de Iluminação",
    subtitle: "Descubra o lugar certo para cada plantinha no seu apê.",
    oldPrice: "R$27,90",
    color: "from-sky-400 to-blue-600",
    badge: "bg-sky-200 text-sky-900"
  },
  {
    img: "https://i.imgur.com/3ZMXqW2.jpeg",
    title: "Guia de Plant Styling",
    subtitle: "Monte sua selva urbana do jeito que você sempre quis.",
    oldPrice: "R$37,90",
    color: "from-violet-400 to-purple-600",
    badge: "bg-violet-200 text-violet-900"
  },
  {
    img: "https://i.imgur.com/GT9bTWs.jpeg",
    title: "Detox de Folhas",
    subtitle: "Deixe suas folhas com brilho e vida de vitrine.",
    oldPrice: "R$47,90",
    color: "from-amber-400 to-orange-500",
    badge: "bg-amber-200 text-amber-900"
  },
  {
    img: "https://i.imgur.com/ziTzK7Y.jpeg",
    title: "Dossiê Invasão Zero",
    subtitle: "Mantenha cochonilhas e pulgões longe das suas protegidas.",
    oldPrice: "R$47,90",
    color: "from-rose-400 to-red-600",
    badge: "bg-rose-200 text-rose-900"
  }
];

export function Bonuses() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 text-ink">
            🎁 Bônus Exclusivos
          </h2>
          <p className="text-gray-500 text-lg">Inclusos gratuitamente no Acesso Completo</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((bonus, i) => (
            <div key={i} className={`relative rounded-[28px] overflow-hidden bg-gradient-to-br ${bonus.color} p-[2px] shadow-lg`}>
              <div className="bg-white rounded-[26px] p-5 flex gap-4 items-center h-full">
                <img
                  src={bonus.img}
                  alt={bonus.title}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shrink-0 shadow-md"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-1 ${bonus.badge}`}>
                    BÔNUS {i + 1}
                  </div>
                  <h3 className="font-display font-bold text-base text-ink leading-tight">{bonus.title}</h3>
                  <p className="text-gray-500 text-xs mt-0.5 leading-snug">{bonus.subtitle}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="line-through text-red-500 text-xs font-bold">De {bonus.oldPrice}</span>
                    <span className="font-bold text-green-600 text-sm">GRÁTIS</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-block bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl px-8 py-4 text-lg font-display font-bold text-primary-dark">
            🤎 Total dos bônus: <span className="line-through text-red-500 mr-2 font-bold">R$209,50</span> → <span className="text-green-600">GRÁTIS HOJE</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#pricing-complete" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white font-display font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1 shadow-lg">
              GARANTIR TODOS OS BÔNUS
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
