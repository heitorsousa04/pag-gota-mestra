import React from 'react';
import { Button } from '../ui/Button';
import { ShieldCheck, Zap, Clock } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-bg-alt pt-6 pb-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ink leading-tight mb-6">
          <span className="text-primary">+50 Receitas Caseiras de Resgate</span>{' '}
          <span className="block">para Reviver suas Plantinhas Sentidas</span>{' '}
          <span className="block text-primary">Sem Química e Sem precisar de Dedo Verde</span>
        </h1>

        <div className="my-8 flex justify-center">
          <img
            src="https://i.imgur.com/CJh6VOa.jpeg"
            alt="Dossiê Gota Mestra"
            className="w-[340px] md:w-[420px] h-auto object-contain drop-shadow-2xl rounded-3xl"
            width="420"
            height="280"
          />
        </div>
        
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Dossiê visual para identificar o problema e ver a vida brotar novamente na sua casa.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-10 text-sm font-medium text-gray-800 text-center">
          <div className="flex items-center gap-2 justify-center text-center">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>7 dias de garantia</span>
          </div>
          <div className="flex items-center gap-2 justify-center text-center">
            <Zap className="w-5 h-5 text-primary" />
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2 justify-center text-center">
            <Clock className="w-5 h-5 text-primary" />
            <span>Método passo a passo; mesmo sem dedo verde</span>
          </div>
        </div>

        <a href="#pricing-complete" className="inline-block w-full sm:w-auto">
          <Button variant="primary" className="text-lg py-5 px-10 shadow-[0_8px_30px_rgb(45,106,79,0.4)] hover:shadow-[0_8px_40px_rgb(45,106,79,0.6)] transition-all duration-300 hover:-translate-y-1">
            SALVAR MINHAS PLANTAS AGORA
          </Button>
        </a>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-600 font-medium">
          <span className="text-lg">🌿</span>
          <p><span className="font-bold text-primary">+2.340</span> pessoas já salvaram suas plantinhas com esse Dossiê</p>
        </div>
      </div>
    </section>
  );
}
