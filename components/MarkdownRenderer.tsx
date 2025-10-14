'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { Components } from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  version?: 'original' | 'frontal';
}

// Mapeia nomes de arquivos para rotas do site
const fileToRoute: Record<string, { url: string; label: string }> = {
  'README': { url: '/versao-original', label: 'Visão Geral' },
  'QUICK_START': { url: '/versao-original/quick-start', label: 'Guia Rápido' },
  'CORRECTED_DIMENSIONS': { url: '/versao-original/dimensoes', label: 'Dimensões Corrigidas' },
  'VISUAL_GUIDE': { url: '/versao-original/guia-visual', label: 'Guia Visual' },
  'MATERIALS_LIST': { url: '/versao-original/materiais', label: 'Lista de Materiais' },
  'TEMPLATES': { url: '/versao-original/templates', label: 'Moldes e Medidas' },
  'ASSEMBLY_INSTRUCTIONS': { url: '/versao-original/montagem', label: 'Instruções de Montagem' },
  'MOTOR_SYSTEM': { url: '/versao-original/sistema-motor', label: 'Sistema Motorizado' },
  'CUSTOMIZATION_IDEAS': { url: '/versao-original/personalizacao', label: 'Ideias de Personalização' },
  'HISTORY': { url: '/versao-original/historia', label: 'História das Vitrolas' },
  'COVERS_AND_LABELS': { url: '/criar-labels', label: 'Criar Capas e Rótulos' },
  
  // Versão Frontal
  'README_VERSAO_FRONTAL': { url: '/versao-frontal', label: 'Visão Geral Frontal' },
  'QUICK_START_FRONTAL': { url: '/versao-frontal/quick-start', label: 'Guia Rápido Frontal' },
  'MATERIALS_LIST_FRONTAL': { url: '/versao-frontal/materiais', label: 'Lista de Materiais Frontal' },
  'TEMPLATES_VERSAO_FRONTAL': { url: '/versao-frontal/templates', label: 'Moldes e Medidas Frontal' },
  'ASSEMBLY_INSTRUCTIONS_FRONTAL': { url: '/versao-frontal/montagem', label: 'Instruções de Montagem Frontal' },
  'VISUAL_GUIDE_FRONTAL': { url: '/versao-frontal/guia-visual', label: 'Guia Visual Frontal' },
  
  'COMPARACAO_VERSOES': { url: '/comparacao', label: 'Comparação de Versões' },
};

function cleanContent(content: string): string {
  let cleaned = content;
  
  // Remove diagramas de estrutura de arquivos (árvores ASCII)
  // Padrão: linhas começando com │, ├, └, ─
  cleaned = cleaned.replace(/^[│├└─\s]+.*$/gm, '');
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n'); // Remove múltiplas linhas vazias
  
  // Remove a frase "a documentação" que foi resultado da substituição anterior
  cleaned = cleaned.replace(/:\s*a documentação\b/gi, '');
  cleaned = cleaned.replace(/\ba documentação\s*\(/gi, '(');
  cleaned = cleaned.replace(/\ba documentação\s*-/gi, '-');
  cleaned = cleaned.replace(/\ba documentação\s*\+/gi, '+');
  cleaned = cleaned.replace(/templates\/a documentação/gi, 'templates');
  
  // Converte referências a arquivos específicos em links internos
  // Padrão: "Veja VISUAL_GUIDE", "Leia MOTOR_SYSTEM", etc
  Object.entries(fileToRoute).forEach(([filename, route]) => {
    const patterns = [
      // Com .md
      new RegExp(`\\b(Veja|Leia|Confira|Consulte|Acesse):\\s*${filename}\\.md\\b`, 'gi'),
      new RegExp(`\\b(Veja|Leia|Confira|Consulte|Acesse)\\s+${filename}\\.md\\b`, 'gi'),
      // Sem .md
      new RegExp(`\\b(Veja|Leia|Confira|Consulte|Acesse):\\s*${filename}\\b(?!\\.txt)`, 'gi'),
      new RegExp(`\\b(Veja|Leia|Confira|Consulte|Acesse)\\s+${filename}\\b(?!\\.txt)`, 'gi'),
    ];
    
    patterns.forEach(pattern => {
      cleaned = cleaned.replace(pattern, (match, verb) => {
        return `${verb}: [${route.label}](${route.url})`;
      });
    });
    
    // Também converte referências diretas (sem verbo) quando estão em contexto claro
    // Ex: "Medidas: CORRECTED_DIMENSIONS e VISUAL_GUIDE"
    const directPattern = new RegExp(`\\b${filename}(?:\\.md)?\\b(?![\\/\\-])`, 'g');
    cleaned = cleaned.replace(directPattern, (match) => {
      // Verifica se está em um contexto de listagem (após : ou e)
      const beforeMatch = cleaned.substring(Math.max(0, cleaned.indexOf(match) - 50), cleaned.indexOf(match));
      if (beforeMatch.match(/[:]\s*$/) || beforeMatch.match(/\be\s*$/)) {
        return `[${route.label}](${route.url})`;
      }
      return match;
    });
  });
  
  // Remove referências genéricas restantes a .md
  cleaned = cleaned.replace(/\b[A-Z][A-Z_]+\.md\b/g, '');
  
  // Limpa frases vazias que sobraram
  cleaned = cleaned.replace(/^[-•]\s*(Leia|Veja|Confira|Consulte|Acesse):\s*$/gmi, '');
  cleaned = cleaned.replace(/^(Leia|Veja|Confira|Consulte|Acesse):\s*\(/gmi, '(');
  
  return cleaned;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const cleanedContent = cleanContent(content);
  
  const components: Components = {
    a: ({ href, children, ...props }) => {
      if (!href) return <a {...props}>{children}</a>;
      
      // Links para arquivos .txt ou templates/ - download
      if (href.endsWith('.txt') || href.includes('templates/')) {
        const filename = href.split('/').pop() || href;
        return (
          <a 
            href={`/downloads/${filename}`}
            download
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-all shadow-sm hover:shadow-md border border-blue-200"
            {...props}
          >
            <span className="text-lg">📥</span>
            <span>{children}</span>
            <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full font-bold">DOWNLOAD</span>
          </a>
        );
      }
      
      // Remove links para arquivos .md
      if (href.endsWith('.md')) {
        return <span className="font-medium text-gray-800">{children}</span>;
      }
      
      // Links externos
      if (href.startsWith('http')) {
        return (
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
            {...props}
          >
            {children}
            <span className="text-sm">🔗</span>
          </a>
        );
      }
      
      // Links internos do site
      if (href.startsWith('/')) {
        return (
          <Link 
            href={href}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold bg-purple-50 px-3 py-1.5 rounded-lg hover:bg-purple-100 transition-all border border-purple-200 hover:shadow-md"
            {...props}
          >
            <span className="text-sm">📄</span>
            <span>{children}</span>
            <span className="text-lg">→</span>
          </Link>
        );
      }
      
      return (
        <a 
          href={href}
          className="text-blue-600 hover:text-blue-800 underline font-medium"
          {...props}
        >
          {children}
        </a>
      );
    },
    
    blockquote: ({ children, ...props }) => {
      const text = children?.toString().toLowerCase() || '';
      
      if (text.includes('importante') || text.includes('atenção') || text.includes('⚠️') || text.includes('aviso')) {
        return (
          <blockquote 
            className="border-l-4 border-red-500 bg-red-50 pl-4 pr-4 py-3 text-gray-800 my-6 rounded-r-lg shadow-md"
            {...props}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0 mt-1">⚠️</span>
              <div className="flex-1 font-medium">{children}</div>
            </div>
          </blockquote>
        );
      }
      
      if (text.includes('dica') || text.includes('💡') || text.includes('sugestão')) {
        return (
          <blockquote 
            className="border-l-4 border-yellow-500 bg-yellow-50 pl-4 pr-4 py-3 text-gray-800 my-6 rounded-r-lg shadow-md"
            {...props}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0 mt-1">💡</span>
              <div className="flex-1">{children}</div>
            </div>
          </blockquote>
        );
      }
      
      if (text.includes('nota') || text.includes('observação') || text.includes('📝')) {
        return (
          <blockquote 
            className="border-l-4 border-blue-500 bg-blue-50 pl-4 pr-4 py-3 text-gray-800 my-6 rounded-r-lg shadow-md"
            {...props}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0 mt-1">📝</span>
              <div className="flex-1">{children}</div>
            </div>
          </blockquote>
        );
      }
      
      if (text.includes('sucesso') || text.includes('✅') || text.includes('pronto')) {
        return (
          <blockquote 
            className="border-l-4 border-green-500 bg-green-50 pl-4 pr-4 py-3 text-gray-800 my-6 rounded-r-lg shadow-md"
            {...props}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0 mt-1">✅</span>
              <div className="flex-1">{children}</div>
            </div>
          </blockquote>
        );
      }
      
      return (
        <blockquote 
          className="border-l-4 border-purple-500 bg-purple-50 pl-4 pr-4 py-3 text-gray-700 my-6 rounded-r-lg shadow-md italic"
          {...props}
        >
          {children}
        </blockquote>
      );
    },
    
    table: ({ children, ...props }) => {
      return (
        <div className="overflow-x-auto my-6 rounded-lg shadow-lg border border-gray-200">
          <table className="w-full border-collapse" {...props}>
            {children}
          </table>
        </div>
      );
    },
    
    code: ({ className, children, ...props }) => {
      const isInline = !className;
      
      if (isInline) {
        return (
          <code 
            className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-pink-600 border border-gray-200"
            {...props}
          >
            {children}
          </code>
        );
      }
      
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    
    p: ({ children, ...props }) => {
      // Remove parágrafos vazios
      if (!children || children.toString().trim() === '') {
        return null;
      }
      return (
        <p className="mb-4 text-gray-700 leading-relaxed" {...props}>
          {children}
        </p>
      );
    },
    
    ul: ({ children, ...props }) => {
      return (
        <ul className="list-disc list-outside ml-6 mb-4 space-y-2" {...props}>
          {children}
        </ul>
      );
    },
    
    ol: ({ children, ...props }) => {
      return (
        <ol className="list-decimal list-outside ml-6 mb-4 space-y-2" {...props}>
          {children}
        </ol>
      );
    },
    
    li: ({ children, ...props }) => {
      // Remove itens de lista vazios
      if (!children || children.toString().trim() === '') {
        return null;
      }
      return (
        <li className="text-gray-700" {...props}>
          {children}
        </li>
      );
    },
  };
  
  return (
    <div className="markdown-content">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {cleanedContent}
      </ReactMarkdown>
    </div>
  );
}
