import React from 'react';

export function Author() {
  return (
    <section className="py-24 bg-[#fafaef] px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-2/5 shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-wood/20 rounded-[40px] transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://i.imgur.com/vLyLqNb.jpeg" 
              alt="Luciana" 
              className="relative w-full h-auto aspect-[4/5] object-cover rounded-[40px] shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="w-full md:w-3/5">
          <div className="inline-block px-4 py-1.5 bg-white border border-[#e5e5d8] text-primary font-bold text-xs uppercase tracking-wider rounded-full mb-6">
            Quem Criou
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-ink">
            Luciana
          </h2>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 italic">
            "Perdi minha Monstera mais cara por podridão de raízes fazendo tudo que mandavam fazer. Foi só quando parei de seguir dicas aleatórias e fui estudar a ciência por trás das raízes que descobri a Gota Mestra; o mesmo método que uso até hoje na minha própria Urban Jungle e que já salvou plantas que qualquer especialista daria como mortas."
          </p>

          <div className="flex gap-8">
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-1">+12</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Anos de Experiência</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-1">+3.200</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Plantas Resgatadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
