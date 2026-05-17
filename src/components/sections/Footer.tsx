import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#111] text-gray-500 py-6 px-4 text-center text-xs">
      <div className="max-w-2xl mx-auto space-y-1">
        <div className="flex justify-center gap-4 mb-2">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
        </div>
        <p>© {new Date().getFullYear()} Dossiê Gota Mestra. Todos os direitos reservados.</p>
        <p className="opacity-60">Este site não é endossado pelo Facebook; FACEBOOK é uma marca comercial da Meta Platforms; Inc.</p>
      </div>
    </footer>
  );
}
