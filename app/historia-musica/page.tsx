import Link from "next/link";

export default function HistoriaMusicaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="text-7xl mb-4 animate-bounce-slow">🎧</div>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 gradient-text">
          A História da Música
        </h1>
        <p className="text-2xl text-vinyl-700 mb-2">
          Dos Primeiros Sons aos Streamings
        </p>
        <p className="text-lg text-vinyl-600 max-w-3xl mx-auto">
          Uma viagem no tempo pelos aparelhos que trouxeram a música para nossas casas
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-label-yellow via-label-orange to-label-red"></div>

        {/* SLIDE 1 - Fonógrafo */}
        <div className="mb-20 relative">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 md:pr-12">
              <div className="card-happy p-8 border-l-8 border-label-yellow">
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">🕰️</span>
                  <div>
                    <div className="text-sm font-bold text-label-yellow uppercase">1877</div>
                    <h2 className="text-3xl font-display font-bold text-vinyl-900">
                      Quando a Música Começou a Ser Ouvida em Casa
                    </h2>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-label-orange mb-3">🔊 A invenção que mudou tudo!</h3>
                
                <p className="text-vinyl-700 mb-4">
                  No final do século XIX (por volta de <strong>1877</strong>), o inventor americano 
                  <strong> Thomas Edison</strong> criou o <strong>fonógrafo</strong> — o primeiro 
                  aparelho capaz de gravar e reproduzir som!
                </p>
                
                <p className="text-vinyl-700 mb-4">
                  Ele usava <strong>cilindros metálicos</strong> e uma agulha que riscava o som, 
                  transformando vibrações em gravações.
                </p>
                
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <p className="text-vinyl-800">
                    <strong>🔊 Antes disso</strong>, as pessoas só conseguiam ouvir música <strong>ao vivo</strong> 
                    — em teatros, praças ou festas. Com o fonógrafo, a música podia &quot;viajar&quot; até as casas das pessoas!
                  </p>
                </div>
                
                <div className="bg-music-gold/20 p-4 rounded-lg border-l-4 border-music-gold">
                  <p className="text-sm font-semibold text-vinyl-800">
                    💡 <strong>Curiosidade:</strong> O som era mecânico, sem eletricidade! A agulha vibrava 
                    e o som saía por uma corneta (como um megafone).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-12 text-center shadow-xl border-4 border-label-yellow">
                <div className="text-9xl mb-4">📯</div>
                <div className="text-6xl mb-4">🎙️</div>
                <p className="text-lg font-bold text-vinyl-800">
                  Primeiro reprodutor de som da história (1877)
                </p>
                <p className="text-vinyl-600 mt-2">Fonógrafo de Thomas Edison</p>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 2 - Vitrola */}
        <div className="mb-20 relative">
          <div className="md:flex md:items-center md:flex-row-reverse">
            <div className="md:w-1/2 md:pl-12">
              <div className="card-happy p-8 border-r-8 border-label-red">
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">📀</span>
                  <div>
                    <div className="text-sm font-bold text-label-red uppercase">1900 - 1980</div>
                    <h2 className="text-3xl font-display font-bold text-vinyl-900">
                      A Era da Vitrola e dos Discos de Vinil
                    </h2>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-label-red mb-3">🎵 O som redondo!</h3>
                
                <p className="text-vinyl-700 mb-4">
                  Com o tempo, os cilindros viraram <strong>discos planos de vinil</strong>. 
                  Por volta de <strong>1900</strong>, surgiram as <strong>vitrolas</strong>, 
                  também chamadas de gramofones.
                </p>
                
                <p className="text-vinyl-700 mb-4">
                  Elas tinham um <strong>prato giratório</strong>, uma <strong>agulha</strong> e 
                  uma corneta ou alto-falante. Os discos eram riscados em espiral, e a agulha 
                  percorria o sulco, vibrando para produzir som.
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <p className="text-vinyl-800">
                    Durante o século XX, a vitrola foi o <strong>grande símbolo da música em casa</strong>. 
                    As famílias se reuniam para ouvir sambas, boleros, rock e clássicos, e cada disco 
                    era tratado como um tesouro.
                  </p>
                </div>
                
                <div className="bg-label-red/20 p-4 rounded-lg border-l-4 border-label-red">
                  <p className="text-sm font-semibold text-vinyl-800">
                    💡 <strong>Curiosidade:</strong> Havia discos pequenos (7&quot;), médios (10&quot;) e 
                    grandes (12&quot;), e a velocidade podia ser de 33 ou 45 rotações por minuto (RPM).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pr-12 mt-6 md:mt-0">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-12 text-center shadow-xl border-4 border-label-red">
                <div className="relative inline-block">
                  <div className="text-9xl mb-4 animate-spin" style={{animationDuration: '8s'}}>📀</div>
                  <div className="absolute -top-4 -right-4 text-5xl">🎵</div>
                </div>
                <div className="text-6xl mb-4">🎺</div>
                <p className="text-lg font-bold text-vinyl-800">
                  A vitrola girava o disco e a agulha lia o som
                </p>
                <p className="text-vinyl-600 mt-2">Gramofone / Vitrola (1900s)</p>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 3 - Fita K7 */}
        <div className="mb-20 relative">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 md:pr-12">
              <div className="card-happy p-8 border-l-8 border-label-blue">
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">📼</span>
                  <div>
                    <div className="text-sm font-bold text-label-blue uppercase">1970 - 1990</div>
                    <h2 className="text-3xl font-display font-bold text-vinyl-900">
                      A Música Vai para o Bolso: as Fitas K7
                    </h2>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-label-blue mb-3">⏯️ O som em fita!</h3>
                
                <p className="text-vinyl-700 mb-4">
                  Nos anos <strong>1970</strong>, chegou a <strong>fita cassete (K7)</strong> — 
                  um pequeno retângulo com duas bobinas de fita magnética dentro.
                </p>
                
                <p className="text-vinyl-700 mb-4">
                  Com ela, as pessoas podiam <strong>gravar suas próprias músicas</strong>! 
                  Era possível fazer &quot;mixtapes&quot;, coleções pessoais de canções gravadas do rádio 
                  ou de discos.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-vinyl-800">
                    Logo depois, surgiu o <strong>Walkman</strong>, um tocador de fitas portátil 
                    com fone de ouvido — uma verdadeira revolução!
                  </p>
                </div>
                
                <div className="bg-label-blue/20 p-4 rounded-lg border-l-4 border-label-blue">
                  <p className="text-sm font-semibold text-vinyl-800">
                    💡 <strong>Curiosidade:</strong> As fitas podiam &quot;engarrafar&quot; (enroscar), 
                    e era comum usar uma caneta Bic para rebobinar manualmente! 😄
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-12 text-center shadow-xl border-4 border-label-blue">
                <div className="text-9xl mb-4">📼</div>
                <div className="text-6xl mb-4">🎧</div>
                <div className="text-5xl mb-4">🚶</div>
                <p className="text-lg font-bold text-vinyl-800">
                  Nos anos 80, as pessoas ouviam música andando na rua!
                </p>
                <p className="text-vinyl-600 mt-2">Walkman + Fita Cassete</p>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 4 - CD */}
        <div className="mb-20 relative">
          <div className="md:flex md:items-center md:flex-row-reverse">
            <div className="md:w-1/2 md:pl-12">
              <div className="card-happy p-8 border-r-8 border-label-purple">
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">💿</span>
                  <div>
                    <div className="text-sm font-bold text-label-purple uppercase">1980 - 2000</div>
                    <h2 className="text-3xl font-display font-bold text-vinyl-900">
                      O Som Digital: os CDs
                    </h2>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-label-purple mb-3">💽 A música brilha!</h3>
                
                <p className="text-vinyl-700 mb-4">
                  Nos anos <strong>1980 e 1990</strong>, surgiram os <strong>CDs (Compact Discs)</strong> 
                  — discos prateados que usavam <strong>luz de laser</strong> para ler as músicas 
                  gravadas digitalmente.
                </p>
                
                <p className="text-vinyl-700 mb-4">
                  O som era <strong>limpo, sem chiados</strong>, e cabia até <strong>80 minutos de música</strong>!
                </p>
                
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="text-vinyl-800">
                    Os <strong>CD Players</strong> podiam ser de mesa, de carro ou portáteis, como 
                    o Discman. As pessoas começaram a colecionar centenas de CDs — e era moda ter 
                    estantes cheias deles.
                  </p>
                </div>
                
                <div className="bg-label-purple/20 p-4 rounded-lg border-l-4 border-label-purple">
                  <p className="text-sm font-semibold text-vinyl-800">
                    💡 <strong>Curiosidade:</strong> O primeiro CD lançado comercialmente foi 
                    &quot;The Visitors&quot;, do ABBA, em 1982.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pr-12 mt-6 md:mt-0">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-12 text-center shadow-xl border-4 border-label-purple">
                <div className="relative">
                  <div className="text-9xl mb-4">💿</div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl animate-pulse">✨</div>
                </div>
                <div className="text-6xl mb-4">💽</div>
                <p className="text-lg font-bold text-vinyl-800">
                  O laser substituiu a agulha — o som ficou digital
                </p>
                <p className="text-vinyl-600 mt-2">CD Player / Discman (1980s)</p>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 5 - MP3 */}
        <div className="mb-20 relative">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 md:pr-12">
              <div className="card-happy p-8 border-l-8 border-label-green">
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">💾</span>
                  <div>
                    <div className="text-sm font-bold text-label-green uppercase">1997 - 2010</div>
                    <h2 className="text-3xl font-display font-bold text-vinyl-900">
                      A Música Vira Arquivo: MP3 e Pen Drives
                    </h2>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-label-green mb-3">🎧 A revolução do MP3</h3>
                
                <p className="text-vinyl-700 mb-4">
                  No final dos anos <strong>1990</strong>, o formato <strong>MP3</strong> permitiu 
                  que as músicas fossem compactadas em arquivos pequenos.
                </p>
                
                <p className="text-vinyl-700 mb-4">
                  Isso fez com que as pessoas guardassem <strong>milhares de músicas</strong> no 
                  computador ou em pequenos aparelhos como os <strong>MP3 Players</strong>.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-vinyl-800">
                    Mais tarde vieram os <strong>iPods</strong> e os <strong>celulares com música</strong> 
                    — e a coleção física (discos e CDs) começou a desaparecer.
                  </p>
                </div>
                
                <div className="bg-label-green/20 p-4 rounded-lg border-l-4 border-label-green">
                  <p className="text-sm font-semibold text-vinyl-800">
                    💡 <strong>Curiosidade:</strong> O nome &quot;MP3&quot; vem de <em>MPEG Audio Layer III</em>, 
                    o formato de compressão digital.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-12 text-center shadow-xl border-4 border-label-green">
                <div className="text-9xl mb-4">🎧</div>
                <div className="flex justify-center space-x-4 text-6xl mb-4">
                  <span>💾</span>
                  <span>📱</span>
                </div>
                <p className="text-lg font-bold text-vinyl-800">
                  Cabia o som de uma estante inteira no bolso!
                </p>
                <p className="text-vinyl-600 mt-2">MP3 Player / iPod (1990s-2000s)</p>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 6 - Streaming */}
        <div className="mb-20 relative">
          <div className="md:flex md:items-center md:flex-row-reverse">
            <div className="md:w-1/2 md:pl-12">
              <div className="card-happy p-8 border-r-8 border-music-gold">
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">🌐</span>
                  <div>
                    <div className="text-sm font-bold text-music-gold uppercase">2010 - Hoje</div>
                    <h2 className="text-3xl font-display font-bold text-vinyl-900">
                      Hoje: O Som que Vem da Nuvem!
                    </h2>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-music-gold mb-3">🎵 Música sem disco, sem fita e sem CD</h3>
                
                <p className="text-vinyl-700 mb-4">
                  Hoje, com a internet, a música é transmitida por <strong>streaming</strong>, 
                  ou seja, vem direto da &quot;nuvem&quot; — de servidores na internet.
                </p>
                
                <p className="text-vinyl-700 mb-4">
                  Plataformas como <strong>Spotify, YouTube Music, Deezer e Apple Music</strong> 
                  permitem ouvir milhões de músicas instantaneamente, sem precisar baixar.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <p className="text-vinyl-800">
                    Podemos criar <strong>playlists</strong>, compartilhar com amigos e ouvir em 
                    qualquer lugar — até pelo relógio!
                  </p>
                </div>
                
                <div className="bg-music-gold/20 p-4 rounded-lg border-l-4 border-music-gold">
                  <p className="text-sm font-semibold text-vinyl-800">
                    💡 <strong>Curiosidade:</strong> Em 2020, o Spotify já tinha mais de 
                    <strong> 60 milhões de músicas</strong> disponíveis!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pr-12 mt-6 md:mt-0">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-12 text-center shadow-xl border-4 border-music-gold">
                <div className="text-9xl mb-4">📱</div>
                <div className="flex justify-center space-x-4 text-5xl mb-4">
                  <span>☁️</span>
                  <span>🎵</span>
                  <span>🌍</span>
                </div>
                <p className="text-lg font-bold text-vinyl-800">
                  O som agora mora na internet!
                </p>
                <p className="text-vinyl-600 mt-2">Spotify / Streaming (2010 - Hoje)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusão */}
      <div className="bg-gradient-to-r from-wood-800 via-vinyl-800 to-wood-800 rounded-3xl p-12 text-white text-center border-4 border-music-gold shadow-2xl mb-12">
        <div className="flex justify-center space-x-4 mb-6">
          <span className="text-5xl">🎤</span>
          <span className="text-5xl">🎵</span>
          <span className="text-5xl">❤️</span>
        </div>
        
        <h2 className="text-4xl font-display font-bold mb-6 text-music-gold">
          O Som Que Nunca Para de Girar
        </h2>
        
        <p className="text-xl text-wood-100 mb-4 max-w-4xl mx-auto leading-relaxed">
          &quot;Do fonógrafo de Edison ao streaming de hoje, a música sempre encontrou um jeito 
          de chegar até nós. Mesmo que os aparelhos mudem, o desejo de ouvir e sentir a 
          música continua o mesmo — <strong className="text-label-yellow">um som que nunca para de girar!</strong>&quot;
        </p>
      </div>

      {/* Timeline Visual Summary */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border-4 border-label-orange shadow-xl">
        <h3 className="text-3xl font-display font-bold text-center mb-8 text-vinyl-900">
          📅 Linha do Tempo da Música
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          <div className="text-center">
            <div className="text-6xl mb-2">📯</div>
            <div className="font-bold text-label-yellow">1877</div>
            <div className="text-sm text-vinyl-600">Fonógrafo</div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-2">📀</div>
            <div className="font-bold text-label-red">1900</div>
            <div className="text-sm text-vinyl-600">Vitrola</div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-2">📼</div>
            <div className="font-bold text-label-blue">1970</div>
            <div className="text-sm text-vinyl-600">Fita K7</div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-2">💿</div>
            <div className="font-bold text-label-purple">1980</div>
            <div className="text-sm text-vinyl-600">CD</div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-2">🎧</div>
            <div className="font-bold text-label-green">1997</div>
            <div className="text-sm text-vinyl-600">MP3</div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-2">📱</div>
            <div className="font-bold text-music-gold">2010</div>
            <div className="text-sm text-vinyl-600">Streaming</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-vinyl-700 mb-6 text-lg">
          Agora que você conhece a história, que tal construir sua própria vitrola?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/versao-original"
            className="btn-happy bg-gradient-to-r from-label-blue to-blue-600 text-lg px-8 py-3 shadow-xl shadow-label-blue/30"
          >
            📦 Construir Vitrola →
          </Link>
          <Link 
            href="/"
            className="btn-happy bg-gradient-to-r from-music-gold to-label-yellow text-lg px-8 py-3 shadow-xl shadow-music-gold/30"
          >
            🏠 Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}

