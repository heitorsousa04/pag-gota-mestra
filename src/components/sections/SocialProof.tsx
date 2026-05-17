import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const reviews = [
  "https://i.imgur.com/Mz0kuuG.jpeg",
  "https://i.imgur.com/9cCeaPV.jpeg",
  "https://i.imgur.com/5bBTx2i.jpeg",
  "https://i.imgur.com/XuYkUUK.jpeg",
  "https://i.imgur.com/ehKOfdn.jpeg",
  "https://i.imgur.com/QGh7zPb.jpeg"
];

export function SocialProof() {
  const total = reviews.length;
  const [current, setCurrent] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((index: number) => setCurrent(index), []);
  const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

  const resetAutoplay = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 4500);
  }, [next]);

  useEffect(() => {
    autoRef.current = setInterval(next, 4500);
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
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16 text-ink">
          O Que Dizem Sobre o Método
        </h2>
        <div className="relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="overflow-hidden rounded-[32px] shadow-lg">
            <div className="flex" style={{ transform: `translateX(-${current * 100}%)`, transition: 'transform 0.4s ease-out' }}>
              {reviews.map((img, i) => (
                <div key={i} className="shrink-0 w-full">
                  <img src={img} alt={`Depoimento ${i + 1}`} className="w-full aspect-[9/16] object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <button onClick={handlePrev} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg text-primary transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={handleNext} aria-label="Próximo" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg text-primary transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); resetAutoplay(); }} aria-label={`Slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-6' : 'bg-gray-300 w-2.5'}`} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#pricing-complete">
            <button className="bg-primary text-white font-display font-bold px-8 py-4 rounded-xl uppercase tracking-widest text-sm shadow-lg hover:bg-primary-dark transition-all hover:-translate-y-1">
              COMEÇAR AGORA
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
