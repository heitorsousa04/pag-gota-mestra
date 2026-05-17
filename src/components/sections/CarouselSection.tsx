import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  { img: "https://i.imgur.com/DaMfe01.jpeg", text: "A Gota Mestra; Passo a Passo" },
  { img: "https://i.imgur.com/A4Rqwwi.jpeg", text: "Diagnóstico Visual; Pare de Adivinhar" },
  { img: "https://i.imgur.com/iXLLirB.jpeg", text: "Substrato Blindado; A Mistura Caseira" },
  { img: "https://i.imgur.com/42QRYdD.jpeg", text: "Plano de Resgate em 24h" },
  { img: "https://i.imgur.com/lz1Tlsv.jpeg", text: "Guia por Espécie; Cuidado Personalizado" },
  { img: "https://i.imgur.com/jK98bPY.jpeg", text: "O Dossiê Completo; +50 Receitas" },
  { img: "https://i.imgur.com/6Q6RUct.jpeg", text: "E Muito Mais" },
];

export function CarouselSection() {
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((index: number) => setCurrent(index), []);
  const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

  const resetAutoplay = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    autoRef.current = setInterval(next, 4000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [next]);

  const handleNext = () => { next(); resetAutoplay(); };
  const handlePrev = () => { prev(); resetAutoplay(); };

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? handleNext() : handlePrev(); }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-ink">
          O Que Você Vai Receber
        </h2>
        <div className="relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex"
              style={{ transform: `translateX(-${current * 100}%)`, transition: 'transform 0.4s ease-out' }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="shrink-0 w-full">
                  <img src={slide.img} alt={slide.text} className="w-full h-[320px] md:h-[480px] object-cover" loading="lazy" />
                  <div className="bg-[#f0fdf4] py-4 text-center px-4">
                    <p className="font-display font-semibold text-base text-primary-dark">{slide.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handlePrev} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white text-primary transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={handleNext} aria-label="Próximo" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white text-primary transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); resetAutoplay(); }} aria-label={`Slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-6' : 'bg-gray-300 w-2.5'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
