import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  weight: ['400', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Viva a Música - Projeto Vitrola",
  description: "Aprenda a construir sua própria vitrola em papelão! Projeto educacional com duas versões: nicho lateral e abertura frontal.",
  keywords: "vitrola, papelão, DIY, projeto escolar, educacional, artesanato",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased bg-gradient-to-br from-wood-50 via-amber-50 to-orange-50 min-h-screen">
        {/* Header */}
        <header className="bg-gradient-to-r from-wood-800 via-wood-700 to-wood-800 shadow-lg sticky top-0 z-50 border-b-4 border-music-gold">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <span className="text-4xl group-hover:animate-spin transition-transform duration-700">📀</span>
                  <span className="absolute -top-1 -right-1 text-lg animate-bounce-slow">🎵</span>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-music-gold via-label-yellow to-label-orange bg-clip-text text-transparent">
                    Viva a Música
                  </h1>
                  <p className="text-sm text-wood-200 font-medium">Projeto Vitrola em Papelão</p>
                </div>
              </Link>
              
              <div className="hidden md:flex items-center space-x-4">
                <Link 
                  href="/versao-original" 
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-label-blue to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-label-blue/50 transform hover:-translate-y-1 transition-all duration-200"
                >
                  📦 Original
                </Link>
                <Link 
                  href="/versao-frontal" 
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-label-red to-label-orange text-white font-semibold hover:shadow-lg hover:shadow-label-red/50 transform hover:-translate-y-1 transition-all duration-200"
                >
                  🎵 Frontal
                </Link>
                <Link 
                  href="/criar-labels" 
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-music-gold to-label-yellow text-white font-semibold hover:shadow-lg hover:shadow-music-gold/50 transform hover:-translate-y-1 transition-all duration-200"
                >
                  🎨 Labels
                </Link>
                <Link 
                  href="/historia-musica" 
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-label-purple to-label-green text-white font-semibold hover:shadow-lg hover:shadow-label-purple/50 transform hover:-translate-y-1 transition-all duration-200"
                >
                  📚 História
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <button className="md:hidden p-2 rounded-lg hover:bg-wood-600 transition-colors">
                <svg className="w-6 h-6 text-wood-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="min-h-[calc(100vh-200px)]">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-vinyl-900 via-wood-900 to-vinyl-800 text-white mt-20 border-t-4 border-music-gold">
          <div className="container mx-auto px-4 py-12">
            {/* Decorative vinyl records */}
            <div className="flex justify-center mb-8 space-x-4">
              <span className="text-4xl animate-spin" style={{animationDuration: '10s'}}>📀</span>
              <span className="text-4xl">🎵</span>
              <span className="text-4xl animate-spin" style={{animationDuration: '15s'}}>📀</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* About */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-4 flex items-center text-music-gold">
                  <span className="mr-2">🎵</span>
                  Projeto Vitrola
                </h3>
                <p className="text-wood-200">
                  Aprenda a construir sua própria vitrola em papelão! 
                  Projeto educacional completo com instruções detalhadas.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-label-yellow">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/versao-original" className="text-wood-200 hover:text-label-blue transition-colors flex items-center">
                      <span className="mr-2">📦</span>
                      Versão Original (Nicho Lateral)
                    </Link>
                  </li>
                  <li>
                    <Link href="/versao-frontal" className="text-wood-200 hover:text-label-red transition-colors flex items-center">
                      <span className="mr-2">🎵</span>
                      Versão Frontal (Abertura Superior)
                    </Link>
                  </li>
                  <li>
                    <Link href="/criar-labels" className="text-wood-200 hover:text-music-gold transition-colors flex items-center">
                      <span className="mr-2">🎨</span>
                      Criar Capas de Discos
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Other Projects */}
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-label-orange">Outros Projetos Educacionais</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://vamosestudar.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wood-200 hover:text-label-green transition-colors flex items-center"
                    >
                      <span className="mr-2">📚</span>
                      Vamos Estudar
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://spellingbee-da-mali.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wood-200 hover:text-label-yellow transition-colors flex items-center"
                    >
                      <span className="mr-2">🐝</span>
                      Spelling Bee
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://portinari-forca.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wood-200 hover:text-label-purple transition-colors flex items-center"
                    >
                      <span className="mr-2">🎨</span>
                      Jogo da Forca
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-8 pt-8 border-t border-wood-700 text-center">
              <div className="flex items-center justify-center space-x-2 text-music-gold">
                <span>🎵</span>
                <p>Criado com ❤️ e muita música para fins educacionais | 2025</p>
                <span>📀</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
