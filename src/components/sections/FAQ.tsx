import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Como vou acessar o Dossiê?",
    a: "Após a compra você recebe acesso imediato por e-mail. Funciona no celular, tablet ou computador."
  },
  {
    q: "Preciso ter experiência com plantas?",
    a: "Não. O Dossiê foi feito para quem está perdendo plantas e não sabe o motivo. Você abre, compara a foto e segue o passo a passo."
  },
  {
    q: "Os ingredientes da Gota Mestra são difíceis de encontrar?",
    a: "Não. São ingredientes caseiros simples que você provavelmente já tem em casa ou encontra em qualquer farmácia ou mercado."
  },
  {
    q: "Funciona para qualquer tipo de planta?",
    a: "Sim. O Dossiê traz diagnósticos para as espécies ornamentais mais comuns em apartamentos; incluindo Jiboias; Monsteras; Zamioculcas; Suculentas (as gorduchas!); Orquídeas e Rosas do Deserto. Se sua plantinha está travada ou sentida; o método tem o diagnóstico certo pra ela."
  },
  {
    q: "O material é físico ou digital?",
    a: "100% digital. Acesse pelo celular na hora que precisar ou imprima se preferir."
  },
  {
    q: "As receitas da Gota Mestra são seguras para pets e crianças?",
    a: "Sim. Todo o método foi desenvolvido com ingredientes caseiros não tóxicos; exatamente porque a maioria das nossas clientes tem pets ou crianças em casa. Sem químicos agressivos; sem venenos; sem risco para sua família."
  },
  {
    q: "Tem garantia?",
    a: "Sim. 7 dias de garantia incondicional. Se não salvar sua planta ou não gostar por qualquer motivo, devolvemos 100% do seu dinheiro sem perguntas."
  },
  {
    q: "A Gota Mestra pode queimar minha planta?",
    a: "Não. O segredo está na diluição exata que ensinamos no Dossiê. É uma solução de oxigenação radicular que substitui químicos agressivos por ingredientes que você já tem em casa; aplicados na proporção certa."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16 text-ink">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-[#e5e5d8] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between bg-white hover:bg-[#fafaef] font-display font-semibold text-base md:text-lg text-ink"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a href="#pricing-complete" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white font-display font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1 shadow-lg">
              GARANTIR MEU ACESSO
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
