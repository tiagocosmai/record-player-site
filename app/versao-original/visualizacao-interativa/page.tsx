'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function VisualizacaoInterativaOriginal() {
  useEffect(() => {
    // Redireciona para o HTML estático depois de 2 segundos
    const timer = setTimeout(() => {
      window.location.href = '/visualizacoes/vitrola-interativa.html';
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-50 via-amber-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border-4 border-label-blue">
          <div className="text-8xl mb-6 animate-spin" style={{animationDuration: '3s'}}>📀</div>
          
          <h1 className="text-4xl font-display font-bold text-vinyl-900 mb-4">
            Carregando Visualização Interativa...
          </h1>
          
          <p className="text-lg text-vinyl-700 mb-8">
            Você será redirecionado para a visualização completa em instantes!
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="w-16 h-2 bg-label-blue/20 rounded-full overflow-hidden">
              <div className="h-full bg-label-blue rounded-full animate-pulse" style={{width: '70%'}}></div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-xl mb-6">
            <p className="text-sm text-vinyl-700">
              💡 <strong>Dica:</strong> Use as teclas <kbd className="bg-white px-2 py-1 rounded border">1</kbd> 
              <kbd className="bg-white px-2 py-1 rounded border ml-1">2</kbd> 
              <kbd className="bg-white px-2 py-1 rounded border ml-1">3</kbd> 
              <kbd className="bg-white px-2 py-1 rounded border ml-1">4</kbd> 
              <kbd className="bg-white px-2 py-1 rounded border ml-1">5</kbd> para navegar entre as vistas!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/visualizacoes/vitrola-interativa.html"
              className="btn-happy bg-gradient-to-r from-label-blue to-blue-600"
            >
              Ir Agora →
            </a>
            <Link 
              href="/versao-original"
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
