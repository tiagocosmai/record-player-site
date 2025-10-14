import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Expo Portinari Banner */}
      <section className="mb-16 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 rounded-3xl p-8 md:p-12 border-4 border-orange-400 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center">
              <span className="text-7xl">🎓</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
              📚 EXPO PORTINARI - 4º ANO A
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-vinyl-900 mb-4">
              Colégio Portinari
            </h2>
            <p className="text-lg text-vinyl-700 mb-3 leading-relaxed">
              Este projeto faz parte da <strong>Expo Portinari</strong>, onde os alunos do <strong>4º Ano A</strong> 
              exploraram diferentes temas educativos e criativos.
            </p>
            <div className="bg-white/80 p-4 rounded-xl border-2 border-orange-300">
              <p className="text-vinyl-800 leading-relaxed">
                <strong className="text-orange-600">Maria Alice Cruz Cosmai</strong> escolheu criar uma vitrola em papelão 
                porque seus pais são grandes amantes de música! 🎶 A família tem uma coleção especial 
                com muitos discos de diversos estilos musicais, onde o <strong className="text-red-600">rock n&apos; roll</strong> 🎸 
                se destaca e faz a alegria de todos!
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 hidden lg:block">
            <div className="text-8xl">
              📀
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="text-center mb-20 relative">
        {/* Vinyl records decoration */}
        <div className="absolute top-0 left-10 text-6xl opacity-20 animate-spin" style={{animationDuration: '20s'}}>📀</div>
        <div className="absolute top-20 right-10 text-6xl opacity-20 animate-spin" style={{animationDuration: '25s'}}>📀</div>
        
        <div className="animate-float mb-8 relative">
          <div className="inline-block relative">
            <span className="text-9xl block mb-4">📀</span>
            <span className="absolute top-0 right-0 text-5xl animate-bounce-slow">🎵</span>
            <span className="absolute bottom-0 left-0 text-4xl animate-pulse">♪</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-music-gold via-label-orange to-label-red bg-clip-text text-transparent animate-pulse-slow">
          Viva a Música!
        </h1>
        <p className="text-2xl md:text-3xl text-vinyl-800 mb-4 font-medium">
          Construa sua própria <span className="text-wood-700 font-bold">Vitrola em Papelão</span>
        </p>
        <p className="text-lg text-vinyl-600 max-w-3xl mx-auto mb-8">
          Projeto educacional completo com instruções detalhadas, templates, 
          visualizações interativas e muito mais! ✨
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="#escolha-versao" 
            className="btn-happy bg-gradient-to-r from-label-red to-label-orange text-xl px-8 py-4 shadow-xl shadow-label-red/30"
          >
            Começar Agora 🚀
          </Link>
          <Link 
            href="/criar-labels" 
            className="btn-happy bg-gradient-to-r from-music-gold to-label-yellow text-xl px-8 py-4 shadow-xl shadow-music-gold/30"
          >
            Criar Capas de Discos 🎨
          </Link>
        </div>
      </section>

      {/* Choose Version */}
      <section id="escolha-versao" className="mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 gradient-text">
          Escolha Sua Versão
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Duas versões incríveis para você escolher! 🎉
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Versão Original */}
          <Link href="/versao-original" className="group">
            <div className="card-happy h-full overflow-hidden group-hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-display font-bold">Versão Original</h3>
                  <span className="text-5xl">📦</span>
                </div>
                <p className="text-lg mb-4">Nicho Lateral para Discos</p>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="px-3 py-1 bg-white/20 rounded-full">Clássica</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full">Funcional</span>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="font-bold text-lg mb-3 text-gray-800">✨ Características:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Nicho lateral para armazenar discos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Maior capacidade (15-20 discos)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Prato frontal e acessível</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Discos mais protegidos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Visual moderno e clean</span>
                  </li>
                </ul>
                
                <div className="btn-happy bg-gradient-to-r from-blue-500 to-cyan-500 text-center w-full">
                  Ver Documentação →
                </div>
              </div>
            </div>
          </Link>

          {/* Versão Frontal */}
          <Link href="/versao-frontal" className="group">
            <div className="card-happy h-full overflow-hidden group-hover:scale-105 transition-transform relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold animate-bounce-slow z-10">
                NOVO! ✨
              </div>
              
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-display font-bold">Versão Frontal</h3>
                  <span className="text-5xl">🎵</span>
                </div>
                <p className="text-lg mb-4">Abertura Frontal Superior</p>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="px-3 py-1 bg-white/20 rounded-full">Vintage</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full">Decorativa</span>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="font-bold text-lg mb-3 text-gray-800">✨ Características:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Abertura frontal inclinada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Discos sempre visíveis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Visual vintage anos 60-70</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Acesso frontal mais fácil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Perfeito para exibição</span>
                  </li>
                </ul>
                
                <div className="btn-happy bg-gradient-to-r from-purple-500 to-pink-500 text-center w-full">
                  Ver Documentação →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Comparison link */}
        <div className="text-center mt-8">
          <Link 
            href="/comparacao" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-lg"
          >
            🤔 Não sabe qual escolher? Compare as duas versões →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-wood-800 via-vinyl-800 to-wood-800 rounded-3xl p-12 text-white text-center mb-20 border-4 border-music-gold shadow-2xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-5xl font-bold mb-2 text-label-yellow">2</div>
            <div className="text-lg text-wood-200">Versões Disponíveis</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 text-label-orange">17+</div>
            <div className="text-lg text-wood-200">Documentos Completos</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 text-label-red">100+</div>
            <div className="text-lg text-wood-200">Diagramas Visuais</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 text-music-gold">6</div>
            <div className="text-lg text-wood-200">Vistas Interativas</div>
          </div>
        </div>
      </section>

      {/* História da Música - Destaque */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-3xl p-12 border-4 border-label-purple shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="text-6xl mb-4">🎧📚✨</div>
              <h2 className="text-4xl font-display font-bold mb-4 text-vinyl-900">
                Descubra a História da Música!
              </h2>
              <p className="text-xl text-vinyl-700 mb-6">
                Uma viagem no tempo desde o fonógrafo de Edison até o streaming de hoje. 
                Veja como a música evoluiu e chegou até nossas casas!
              </p>
              <Link 
                href="/historia-musica"
                className="btn-happy bg-gradient-to-r from-label-purple to-label-green text-lg px-8 py-4 inline-block shadow-xl shadow-label-purple/30"
              >
                📯 Explorar a História →
              </Link>
            </div>
            <div className="flex-shrink-0">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-5xl">📯</div>
                <div className="text-5xl">📀</div>
                <div className="text-5xl">📼</div>
                <div className="text-5xl">💿</div>
                <div className="text-5xl">🎧</div>
                <div className="text-5xl">📱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mb-20">
        <h2 className="text-4xl font-display font-bold text-center mb-12 gradient-text">
          Ferramentas e Recursos
        </h2>
        
        <div className="flex justify-center">
          <Link href="/criar-labels" className="card-happy p-8 hover:scale-105 transition-transform group max-w-md w-full">
            <div className="text-6xl mb-4 text-center">🎨</div>
            <h3 className="text-2xl font-display font-bold mb-3 text-gray-800 group-hover:text-purple-600 text-center">
              Gerador de Capas de Discos
            </h3>
            <p className="text-gray-600 text-center text-lg">
              Crie capas e rótulos personalizados para seus discos!
            </p>
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center bg-gradient-to-br from-amber-100 via-orange-100 to-amber-100 rounded-3xl p-12 border-4 border-label-orange shadow-2xl relative overflow-hidden">
        {/* Musical notes decoration */}
        <div className="absolute top-4 left-4 text-4xl opacity-20">🎵</div>
        <div className="absolute bottom-4 right-4 text-4xl opacity-20">🎶</div>
        <div className="absolute top-1/2 left-4 text-3xl opacity-20">♪</div>
        <div className="absolute top-1/2 right-4 text-3xl opacity-20">♫</div>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-display font-bold mb-4 text-wood-900">
            Pronto para Começar? 🎉
          </h2>
          <p className="text-xl text-vinyl-700 mb-8 max-w-2xl mx-auto">
            Escolha sua versão favorita e comece a construir sua vitrola hoje mesmo!
            É educacional, divertido e o resultado é incrível! 🌟
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/versao-original" 
              className="btn-happy bg-gradient-to-r from-label-blue to-blue-600 text-xl px-8 py-4 shadow-xl shadow-label-blue/30"
            >
              📦 Versão Original →
            </Link>
            <Link 
              href="/versao-frontal" 
              className="btn-happy bg-gradient-to-r from-label-red to-label-orange text-xl px-8 py-4 shadow-xl shadow-label-red/30"
            >
              🎵 Versão Frontal →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
