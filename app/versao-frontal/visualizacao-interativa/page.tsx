'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function VisualizacaoInterativaFrontal() {
  useEffect(() => {
    // Redireciona para o HTML estático depois de 2 segundos
    const timer = setTimeout(() => {
      window.location.href = '/visualizacoes/vitrola-frontal-interativa.html';
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-50 via-amber-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border-4 border-label-red">
          <div className="relative inline-block mb-6">
            <div className="text-8xl animate-spin" style={{animationDuration: '3s'}}>📀</div>
            <div className="absolute top-0 right-0 text-4xl bg-yellow-400 rounded-full p-2 animate-bounce">✨</div>
          </div>
          
          <h1 className="text-4xl font-display font-bold text-vinyl-900 mb-4">
            Carregando Visualização Interativa...
          </h1>
          
          <p className="text-lg text-vinyl-700 mb-8">
            Você será redirecionado para a visualização completa em instantes!
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="w-16 h-2 bg-label-red/20 rounded-full overflow-hidden">
              <div className="h-full bg-label-red rounded-full animate-pulse" style={{width: '70%'}}></div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-xl mb-6">
            <p className="text-sm text-vinyl-700">
              💡 <strong>Dica:</strong> Use as teclas <kbd className="bg-white px-2 py-1 rounded border">1</kbd> 
              <kbd className="bg-white px-2 py-1 rounded border ml-1">2</kbd> 
              <kbd className="bg-white px-2 py-1 rounded border ml-1">3</kbd> 
              <kbd className="bg-white px-2 py-1 rounded border ml-1">4</kbd> 
              <kbd className="bg-white px-2 py-1 rounded border ml-1">5</kbd> 
              <kbd className="bg-white px-2 py-1 rounded border ml-1">6</kbd> para navegar entre as vistas!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/visualizacoes/vitrola-frontal-interativa.html"
              className="btn-happy bg-gradient-to-r from-label-red to-label-orange"
            >
              Ir Agora →
            </a>
            <Link 
              href="/versao-frontal"
              className="btn-happy bg-gradient-to-r from-vinyl-700 to-vinyl-900"
            >
              ← Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
