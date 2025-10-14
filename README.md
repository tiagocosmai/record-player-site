# 🎵 Viva a Música - Projeto Vitrola

Site educacional completo para construir sua própria vitrola em papelão!

## ✨ Características

- 🎨 **Design Feliz e Vibrante** - Cores alegres e interface moderna
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- 🎵 **Duas Versões** - Original (nicho lateral) e Frontal (abertura superior)
- 📚 **Documentação Completa** - Todos os markdowns convertidos para páginas Next.js
- 🖼️ **Gerador de Labels** - Upload de imagens e criação de capas/rótulos personalizados
- 👁️ **Visualizações Interativas** - HTMLs interativos convertidos para componentes React
- 🔗 **Links para Outros Projetos** - Footer com links para Vamos Estudar, Spelling Bee e Jogo da Forca

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização moderna e responsiva
- **React Markdown** - Renderização de arquivos markdown
- **Vercel** - Hospedagem otimizada

## 📁 Estrutura do Projeto

```
record-player-site/
├── app/                          # App Router do Next.js
│   ├── layout.tsx                # Layout global com header e footer
│   ├── page.tsx                  # Página inicial
│   ├── globals.css               # Estilos globais e classes Tailwind
│   ├── versao-original/          # Páginas da versão original
│   ├── versao-frontal/           # Páginas da versão frontal
│   ├── criar-labels/             # Gerador de labels interativo
│   └── comparacao/               # Página de comparação
├── components/                   # Componentes React reutilizáveis
│   └── MarkdownRenderer.tsx      # Renderizador de markdown
├── docs/                         # Todos os arquivos markdown originais
│   ├── *.md                      # Documentações
│   ├── templates/                # Templates de discos
│   ├── visual-exports/           # HTMLs versão original
│   └── visual-exports-frontal/   # HTMLs versão frontal
├── public/                       # Arquivos estáticos
├── tailwind.config.ts            # Configuração do Tailwind (cores felizes!)
├── next.config.js                # Configuração do Next.js
└── vercel.json                   # Configuração para deploy na Vercel
```

## 🎨 Esquema de Cores "Feliz"

O site usa um esquema de cores vibrante e alegre:

- **Roxo/Rosa** (`purple-500` → `pink-500`) - Gradientes principais
- **Azul/Ciano** (`blue-500` → `cyan-500`) - Versão original
- **Laranja/Amarelo** (`orange-500` → `yellow-500`) - Destaques
- **Verde** (`green-500`) - Confirmações
- **Backgrounds** - Gradientes suaves de `purple-50`, `pink-50`, `blue-50`

## 🛠️ Instalação Local

```bash
# Clone o repositório
cd record-player-site

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

# Abra http://localhost:3000 no navegador
```

## 📦 Build para Produção

```bash
# Crie o build otimizado
npm run build

# Execute a versão de produção localmente
npm start
```

## 🌐 Deploy na Vercel

### Método 1: Via CLI (Recomendado)

```bash
# Instale a CLI da Vercel globalmente
npm i -g vercel

# Na pasta do projeto, execute:
vercel

# Siga as instruções:
# - Set up and deploy? Yes
# - Which scope? (sua conta)
# - Link to existing project? No
# - Project name: record-player-site (ou outro nome)
# - In which directory is your code located? ./
# - Auto-detected Next.js. Continue? Yes
# - Override settings? No

# Para deploy em produção:
vercel --prod
```

### Método 2: Via Interface Web

1. Acesse [vercel.com](https://vercel.com)
2. Faça login/cadastro
3. Clique em "Add New Project"
4. Importe o repositório Git ou faça upload da pasta
5. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Clique em "Deploy"
7. Aguarde o deploy (2-3 minutos)
8. Acesse seu site em: `https://seu-projeto.vercel.app`

### Método 3: Push para Git

1. Crie um repositório no GitHub
2. Push o código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repo.git
   git push -u origin main
   ```
3. Na Vercel, importe o repositório GitHub
4. Deploy automático a cada push!

## 🎯 Funcionalidades Implementadas

### ✅ Página Inicial
- Hero section com animações
- Cards de features
- Escolha de versões (Original vs Frontal)
- Estatísticas do projeto
- CTAs (Call to Actions)

### ✅ Páginas de Versões
- Informações detalhadas de cada versão
- Links para toda documentação
- Cards organizados por tipo de conteúdo
- Design específico para cada versão (cores diferentes)

### ✅ Gerador de Labels
- Upload de até 4 imagens (capa frente/verso, rótulo A/B)
- Preview em tempo real
- Download em alta resolução (300 DPI)
- Instruções e dicas profissionais
- Suporte para formatos PNG, JPG, GIF

### ✅ Página de Comparação
- Tabela comparativa completa
- Helper de decisão
- Quiz rápido
- Links diretos para cada versão

### ✅ Footer Global
- Links para outras versões
- Links para outros projetos educacionais:
  - Vamos Estudar
  - Spelling Bee
  - Jogo da Forca
- Informações do projeto

## 🔄 Próximos Passos (Expansão Futura)

Páginas individuais dos documentos markdown ainda precisam ser criadas. Para adicionar:

1. Criar páginas dinâmicas: `app/versao-original/[slug]/page.tsx`
2. Ler arquivos markdown da pasta `docs/`
3. Renderizar com o componente `MarkdownRenderer`

Exemplo:

```typescript
// app/versao-original/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default async function DocPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'docs', `${params.slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <MarkdownRenderer content={content} />
    </div>
  );
}
```

## 📝 Licença

Projeto educacional de código aberto. Use e compartilhe livremente! 🎉

## 🙏 Créditos

- **Projeto Original**: Vitrola em Papelão - Projeto Educacional
- **Site Desenvolvido com**: Next.js, React, Tailwind CSS
- **Outros Projetos**: Vamos Estudar, Spelling Bee, Jogo da Forca

---

**Feito com ❤️ e muita música! 🎵**
