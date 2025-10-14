import Link from "next/link";

export default async function VersaoOriginalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-12 text-white mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-5xl font-display font-bold mb-4">
              Versão Original 📦
            </h1>
            <p className="text-2xl mb-2">Nicho Lateral para Discos</p>
            <p className="text-blue-100 text-lg">
              A versão clássica com compartimento lateral para armazenar até 20 discos!
            </p>
          </div>
          <div className="text-8xl animate-float">
            🎵
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="text-4xl mb-2">📏</div>
          <div className="font-bold text-gray-800">35 x 30 cm</div>
          <div className="text-sm text-gray-600">Dimensões</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="text-4xl mb-2">💿</div>
          <div className="font-bold text-gray-800">15-20 discos</div>
          <div className="text-sm text-gray-600">Capacidade</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="text-4xl mb-2">⏱️</div>
          <div className="font-bold text-gray-800">2-3 dias</div>
          <div className="text-sm text-gray-600">Tempo</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="text-4xl mb-2">💰</div>
          <div className="font-bold text-gray-800">R$ 80-350</div>
          <div className="text-sm text-gray-600">Custo</div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="mb-12">
        <h2 className="text-4xl font-display font-bold mb-8 gradient-text">
          📚 Documentação Completa
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Quick Start */}
          <Link href="/versao-original/quick-start" className="card-happy p-6 hover:scale-105 transition-transform group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-800 group-hover:text-blue-600 mb-2">
                  🚀 Guia Rápido
                </h3>
                <p className="text-gray-600">Comece em 5 passos simples</p>
              </div>
              <span className="text-4xl">→</span>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Iniciante</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">5 min</span>
            </div>
          </Link>

          {/* Materials List */}
          <Link href="/versao-original/materiais" className="card-happy p-6 hover:scale-105 transition-transform group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-800 group-hover:text-blue-600 mb-2">
                  🛒 Lista de Materiais
                </h3>
                <p className="text-gray-600">O que você vai precisar comprar</p>
              </div>
              <span className="text-4xl">→</span>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Essencial</span>
            </div>
          </Link>

          {/* Templates */}
          <Link href="/versao-original/templates" className="card-happy p-6 hover:scale-105 transition-transform group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-800 group-hover:text-blue-600 mb-2">
                  📐 Moldes e Medidas
                </h3>
                <p className="text-gray-600">Templates prontos para corte</p>
              </div>
              <span className="text-4xl">→</span>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">30+ peças</span>
            </div>
          </Link>

          {/* Assembly */}
          <Link href="/versao-original/montagem" className="card-happy p-6 hover:scale-105 transition-transform group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-800 group-hover:text-blue-600 mb-2">
                  🔨 Instruções de Montagem
                </h3>
                <p className="text-gray-600">Passo a passo detalhado</p>
              </div>
              <span className="text-4xl">→</span>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Detalhado</span>
            </div>
          </Link>

          {/* Visual Guide */}
          <Link href="/versao-original/guia-visual" className="card-happy p-6 hover:scale-105 transition-transform group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-800 group-hover:text-blue-600 mb-2">
                  👁️ Guia Visual
                </h3>
                <p className="text-gray-600">Diagramas de todas as vistas</p>
              </div>
              <span className="text-4xl">→</span>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">Ilustrado</span>
            </div>
          </Link>

          {/* Interactive Visualization */}
          <Link href="/versao-original/visualizacao-interativa" className="card-happy p-6 hover:scale-105 transition-transform group relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
              3D
            </div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-800 group-hover:text-blue-600 mb-2">
                  🎨 Visualização Interativa
                </h3>
                <p className="text-gray-600">Explore em 3D todas as vistas</p>
              </div>
              <span className="text-4xl">→</span>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">Interativo</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">5 vistas</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mb-12">
        <h2 className="text-3xl font-display font-bold mb-6 text-gray-800">
          📖 Recursos Adicionais
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/versao-original/sistema-motor" className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all">
            <div className="flex items-center">
              <span className="text-3xl mr-3">⚙️</span>
              <div>
                <div className="font-semibold text-gray-800">Sistema Motorizado</div>
                <div className="text-sm text-gray-600">Faça o prato girar!</div>
              </div>
            </div>
          </Link>

          <Link href="/versao-original/personalizacao" className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all">
            <div className="flex items-center">
              <span className="text-3xl mr-3">✨</span>
              <div>
                <div className="font-semibold text-gray-800">Ideias de Personalização</div>
                <div className="text-sm text-gray-600">Deixe única!</div>
              </div>
            </div>
          </Link>

          <Link href="/versao-original/historia" className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all">
            <div className="flex items-center">
              <span className="text-3xl mr-3">📜</span>
              <div>
                <div className="font-semibold text-gray-800">História das Vitrolas</div>
                <div className="text-sm text-gray-600">Contexto histórico</div>
              </div>
            </div>
          </Link>

          <Link href="/versao-original/dimensoes" className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all border-2 border-red-200">
            <div className="flex items-center">
              <span className="text-3xl mr-3">📏</span>
              <div>
                <div className="font-semibold text-gray-800 flex items-center gap-2">
                  Dimensões Corrigidas
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">IMPORTANTE</span>
                </div>
                <div className="text-sm text-gray-600">Medidas atualizadas!</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white text-center">
        <h3 className="text-3xl font-display font-bold mb-4">
          Pronto para Começar?
        </h3>
        <p className="text-lg mb-6 opacity-90">
          Comece pelo Guia Rápido e construa sua vitrola em 2-3 dias!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/versao-original/quick-start" 
            className="btn-happy bg-white text-blue-600 hover:bg-blue-50"
          >
            Começar Agora 🚀
          </Link>
          <Link 
            href="/comparacao" 
            className="btn-happy bg-blue-700 hover:bg-blue-800"
          >
            Comparar Versões
          </Link>
        </div>
      </div>
    </div>
  );
}

