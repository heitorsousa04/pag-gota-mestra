import React from 'react';

export function Guarantee() {
  return (
    <section className="py-24 bg-primary-dark text-white px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-white blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-wood blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 shrink-0 flex justify-center">
          <img 
            src="https://i.imgur.com/l32PNI3.jpeg" 
            alt="Selo de 7 Dias de Garantia" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl rounded-full overflow-hidden"
            loading="lazy"
          />
        </div>
        
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[#f0fdf4]">
            7 DIAS ; Garantia Incondicional
          </h2>
          
          <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
            Siga esse passo a passo por 7 dias. Se sua planta não mostrar sinais de recuperação 
            ou se você não ficar satisfeita por qualquer motivo, devolvemos cada centavo. 
            Sem burocracia, sem perguntas. <strong className="text-white">O risco é todo nosso.</strong>
          </p>
          
          <div className="mt-8">
            <a href="#pricing-complete" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white font-display font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1 shadow-lg">
                COMPRAR COM SEGURANÇA
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
