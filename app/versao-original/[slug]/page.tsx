import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Link from 'next/link';

// Mapa de slugs para arquivos markdown
const slugToFile: Record<string, string> = {
  'quick-start': 'QUICK_START.md',
  'materiais': 'MATERIALS_LIST.md',
  'templates': 'TEMPLATES.md',
  'montagem': 'ASSEMBLY_INSTRUCTIONS.md',
  'guia-visual': 'VISUAL_GUIDE.md',
  'sistema-motor': 'MOTOR_SYSTEM.md',
  'personalizacao': 'CUSTOMIZATION_IDEAS.md',
  'historia': 'HISTORY.md',
  'dimensoes': 'CORRECTED_DIMENSIONS.md',
};

// Títulos e ícones para cada página
const pageInfo: Record<string, { title: string; icon: string; description: string }> = {
  'quick-start': {
    title: 'Guia Rápido',
    icon: '🚀',
    description: 'Comece em 5 passos simples'
  },
  'materiais': {
    title: 'Lista de Materiais',
    icon: '🛒',
    description: 'Tudo que você precisa para construir'
  },
  'templates': {
    title: 'Moldes e Medidas',
    icon: '📐',
    description: 'Templates prontos para corte'
  },
  'montagem': {
    title: 'Instruções de Montagem',
    icon: '🔨',
    description: 'Passo a passo detalhado'
  },
  'guia-visual': {
    title: 'Guia Visual',
    icon: '👁️',
    description: 'Diagramas de todas as vistas'
  },
  'sistema-motor': {
    title: 'Sistema Motorizado',
    icon: '⚙️',
    description: 'Faça o prato girar de verdade'
  },
  'personalizacao': {
    title: 'Ideias de Personalização',
    icon: '✨',
    description: 'Deixe sua vitrola única'
  },
  'historia': {
    title: 'História das Vitrolas',
    icon: '📜',
    description: 'Contexto histórico'
  },
  'dimensoes': {
    title: 'Dimensões Corrigidas',
    icon: '📏',
    description: 'Medidas atualizadas e corretas'
  },
};

export async function generateStaticParams() {
  return Object.keys(slugToFile).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function VersaoOriginalDocPage({ params }: PageProps) {
  const { slug } = await params;
  
  const fileName = slugToFile[slug];
  
  if (!fileName) {
    notFound();
  }

  const info = pageInfo[slug] || { title: 'Documentação', icon: '📄', description: '' };

  try {
    const docsDirectory = path.join(process.cwd(), 'docs');
    const filePath = path.join(docsDirectory, fileName);
    const fileContents = await fs.readFile(filePath, 'utf8');

    return (
      <div className="min-h-screen bg-gradient-to-br from-wood-50 via-amber-50 to-orange-50">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center space-x-2 text-sm">
            <Link href="/" className="text-vinyl-600 hover:text-vinyl-800 font-medium">
              Início
            </Link>
            <span className="text-vinyl-400">/</span>
            <Link href="/versao-original" className="text-vinyl-600 hover:text-vinyl-800 font-medium">
              Versão Original
            </Link>
            <span className="text-vinyl-400">/</span>
            <span className="text-vinyl-900 font-semibold">{info.title}</span>
          </nav>

          {/* Header */}
          <div className="bg-gradient-to-r from-label-blue to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{info.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold">
                  {info.title}
                </h1>
                <p className="text-xl text-blue-100 mt-2">
                  {info.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm mt-4">
              <span className="px-3 py-1 bg-white/20 rounded-full">📦 Versão Original</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">Nicho Lateral</span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <MarkdownRenderer content={fileContents} version="original" />
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/versao-original"
              className="btn-happy bg-gradient-to-r from-label-blue to-blue-600 text-center"
            >
              ← Voltar para Versão Original
            </Link>
            <Link 
              href="/versao-frontal"
              className="btn-happy bg-gradient-to-r from-label-red to-label-orange text-center"
            >
              Ver Versão Frontal →
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error reading file:', error);
    notFound();
  }
}

