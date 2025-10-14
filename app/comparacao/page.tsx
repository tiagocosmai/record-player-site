import Link from "next/link";

export default function ComparacaoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="text-7xl mb-4">🤔</div>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 gradient-text">
          Qual Versão Escolher?
        </h1>
        <p className="text-xl text-gray-700">
          Compare as duas versões lado a lado e escolha a melhor para você!
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
              <th className="p-6 text-left font-display text-2xl">Característica</th>
              <th className="p-6 text-center font-display text-2xl bg-blue-500/20">
                Versão Original
                <div className="text-sm font-normal mt-1">Nicho Lateral</div>
              </th>
              <th className="p-6 text-center font-display text-2xl bg-purple-500/20">
                Versão Frontal
                <div className="text-sm font-normal mt-1">Abertura Superior</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-6 font-semibold text-gray-800">📦 Armazenamento</td>
              <td className="p-6 text-center bg-blue-50">
                <div className="font-bold text-blue-700 text-xl">15-20 discos</div>
                <div className="text-sm text-gray-600 mt-1">Lateral</div>
              </td>
              <td className="p-6 text-center bg-purple-50">
                <div className="font-bold text-purple-700 text-xl">8-12 discos</div>
                <div className="text-sm text-gray-600 mt-1">Frontal</div>
              </td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-6 font-semibold text-gray-800">👁️ Visibilidade</td>
              <td className="p-6 text-center bg-blue-50">
                <div className="text-3xl mb-1">❌</div>
                <div className="text-sm text-gray-600">Discos não visíveis</div>
              </td>
              <td className="p-6 text-center bg-purple-50">
                <div className="text-3xl mb-1">✅</div>
                <div className="text-sm text-gray-600">Sempre visíveis</div>
              </td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-6 font-semibold text-gray-800">🎨 Estilo Visual</td>
              <td className="p-6 text-center bg-blue-50">
                <div className="font-bold text-blue-700">Moderno/Clean</div>
                <div className="text-sm text-gray-600 mt-1">Contemporâneo</div>
              </td>
              <td className="p-6 text-center bg-purple-50">
                <div className="font-bold text-purple-700">Vintage/Retro</div>
                <div className="text-sm text-gray-600 mt-1">Anos 60-70</div>
              </td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-6 font-semibold text-gray-800">👌 Acesso aos Discos</td>
              <td className="p-6 text-center bg-blue-50">
                <div className="font-bold text-blue-700">Lateral</div>
                <div className="text-sm text-gray-600 mt-1">Pelo lado</div>
              </td>
              <td className="p-6 text-center bg-purple-50">
                <div className="font-bold text-purple-700">Frontal</div>
                <div className="text-sm text-gray-600 mt-1">Pela frente</div>
              </td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-6 font-semibold text-gray-800">🎵 Posição do Prato</td>
              <td className="p-6 text-center bg-blue-50">
                <div className="font-bold text-blue-700">Frontal</div>
                <div className="text-sm text-gray-600 mt-1">Fácil acesso</div>
              </td>
              <td className="p-6 text-center bg-purple-50">
                <div className="font-bold text-purple-700">Recuado</div>
                <div className="text-sm text-gray-600 mt-1">Parte traseira</div>
              </td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-6 font-semibold text-gray-800">⏱️ Tempo de Construção</td>
              <td className="p-6 text-center bg-blue-50">
                <div className="font-bold text-blue-700">2-3 dias</div>
              </td>
              <td className="p-6 text-center bg-purple-50">
                <div className="font-bold text-purple-700">2-3 dias</div>
              </td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-6 font-semibold text-gray-800">💰 Custo Estimado</td>
              <td className="p-6 text-center bg-blue-50">
                <div className="font-bold text-blue-700">R$ 80-350</div>
              </td>
              <td className="p-6 text-center bg-purple-50">
                <div className="font-bold text-purple-700">R$ 80-412</div>
              </td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-6 font-semibold text-gray-800">🛠️ Nível de Dificuldade</td>
              <td className="p-6 text-center bg-blue-50">
                <div className="text-yellow-500 text-2xl mb-1">⭐⭐⭐</div>
                <div className="text-sm text-gray-600">Médio</div>
              </td>
              <td className="p-6 text-center bg-purple-50">
                <div className="text-yellow-500 text-2xl mb-1">⭐⭐⭐⭐</div>
                <div className="text-sm text-gray-600">Médio-Alto</div>
              </td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-6 font-semibold text-gray-800">✨ Uso Decorativo</td>
              <td className="p-6 text-center bg-blue-50">
                <div className="text-2xl">⭐⭐⭐</div>
              </td>
              <td className="p-6 text-center bg-purple-50">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </td>
            </tr>

            <tr>
              <td className="p-6 font-semibold text-gray-800">📊 Ideal Para:</td>
              <td className="p-6 text-center bg-blue-50">
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Maior capacidade</li>
                  <li>• Proteção dos discos</li>
                  <li>• Visual moderno</li>
                  <li>• Iniciantes</li>
                </ul>
              </td>
              <td className="p-6 text-center bg-purple-50">
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Impacto visual</li>
                  <li>• Decoração</li>
                  <li>• Exibir coleção</li>
                  <li>• Estética vintage</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Decision Helper */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card-happy p-8 border-4 border-blue-300">
          <div className="text-6xl mb-4 text-center">📦</div>
          <h3 className="text-3xl font-display font-bold mb-4 text-center text-blue-700">
            Escolha a Original Se:
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>Você quer <strong>maior capacidade</strong> de armazenamento</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>Prefere <strong>discos protegidos</strong> (não expostos)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>Busca um visual <strong>moderno e clean</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>É sua <strong>primeira vez</strong> construindo algo assim</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>Quer <strong>prato mais acessível</strong> (frontal)</span>
            </li>
          </ul>
          <Link 
            href="/versao-original" 
            className="btn-happy bg-gradient-to-r from-blue-500 to-cyan-500 mt-6 w-full text-center block"
          >
            Ver Versão Original →
          </Link>
        </div>

        <div className="card-happy p-8 border-4 border-purple-300">
          <div className="text-6xl mb-4 text-center">🎵</div>
          <h3 className="text-3xl font-display font-bold mb-4 text-center text-purple-700">
            Escolha a Frontal Se:
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>Valoriza <strong>impacto visual</strong> e estética</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>Quer <strong>discos sempre visíveis</strong> (decorativo)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>Prefere <strong>estilo vintage</strong> anos 60-70</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>Tem <strong>experiência</strong> em artesanato</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>Quer <strong>exibir sua coleção</strong> de discos</span>
            </li>
          </ul>
          <Link 
            href="/versao-frontal" 
            className="btn-happy bg-gradient-to-r from-purple-500 to-pink-500 mt-6 w-full text-center block"
          >
            Ver Versão Frontal →
          </Link>
        </div>
      </div>

      {/* Quick Quiz */}
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-3xl p-12 text-center">
        <h2 className="text-4xl font-display font-bold mb-6 text-gray-800">
          Ainda em dúvida? 🤔
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Responda mentalmente: O que é mais importante para você?
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6">
            <div className="text-4xl mb-3">A</div>
            <p className="font-semibold text-gray-800">
              Capacidade e funcionalidade
            </p>
            <p className="text-sm text-gray-600 mt-2">
              → Versão Original
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="text-4xl mb-3">B</div>
            <p className="font-semibold text-gray-800">
              Estética e visual
            </p>
            <p className="text-sm text-gray-600 mt-2">
              → Versão Frontal
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-700 font-semibold text-lg">
            💡 Dica: Você pode fazer as duas versões! 🎉
          </p>
        </div>
      </div>
    </div>
  );
}

