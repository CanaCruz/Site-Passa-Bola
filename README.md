# Passa Bola - Site de Futebol Feminino

Um site completo dedicado ao futebol feminino brasileiro, desenvolvido com tecnologias modernas e foco na experiência do usuário.

## 🚀 Características

### Design e Interface
- **Cores Femininas**: Paleta de cores rosa, roxo e rosa-choque para criar uma identidade visual feminina
- **Layout Dinâmico e Moderno**: Interface contemporânea com animações suaves e transições elegantes
- **Responsividade Completa**: Adaptação perfeita para Desktop, Tablet e Mobile
- **Imagens Dinâmicas**: Sistema de rotação de imagens de fundo das jogadoras fornecidas

### Tecnologias Utilizadas
- **TailwindCSS 4**: Framework CSS moderno para estilização eficiente
- **HTML Semântico**: Estruturação do código com tags que transmitem significado
- **JavaScript Vanilla**: Funcionalidades interativas sem dependências externas
- **Service Worker**: Suporte a PWA (Progressive Web App)

### Funcionalidades Implementadas

#### 🔐 Autenticação
- Sistema de login simples para controle de acesso
- Modal de autenticação responsivo
- Validação de formulários
- Feedback visual para usuários

#### 🧭 Roteamento
- Navegação entre diferentes páginas da aplicação
- Scroll suave entre seções
- Menu mobile responsivo
- Links de navegação ativos

#### 🌐 Consumo de APIs
- Integração com serviços externos para obtenção de dados
- Simulação de chamadas de API para notícias
- Sistema de newsletter
- Formulário de contato com validação

#### ⚠️ Tratamento de Erros
- Gestão de exceções e falhas durante a execução
- Mensagens de erro amigáveis ao usuário
- Sistema de toast notifications
- Fallbacks para falhas de rede

## 📁 Estrutura do Projeto

```
Site Passa Bola/
├── index.html              # Página principal
├── styles.css              # Estilos customizados
├── script.js               # JavaScript principal
├── sw.js                   # Service Worker
├── logo.png                # Logo principal (imagem fornecida)
├── pages/                  # Páginas adicionais
│   ├── about.html          # Página sobre
│   ├── news.html           # Página de notícias
│   └── contact.html        # Página de contato
├── hero-bg-1.jpg          # Imagem de fundo 1 (fornecida)
├── hero-bg-2.jpg          # Imagem de fundo 2 (fornecida)
├── hero-bg-3.jpg          # Imagem de fundo 3 (fornecida)
├── hero-bg-4.jpg          # Imagem de fundo 4 (fornecida)
└── README.md              # Documentação
```

## 🎨 Paleta de Cores

### Cores Principais
- **Roxo**: `#a855f7` (Purple-500)
- **Rosa**: `#ec4899` (Pink-500)
- **Rosa-Choque**: `#be185d` (Rose-700)

### Cores de Apoio
- **Roxo Claro**: `#faf5ff` (Purple-50)
- **Rosa Claro**: `#fdf2f8` (Pink-50)
- **Gradientes**: Combinações suaves entre as cores principais

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adaptações
- Menu hambúrguer para mobile
- Grid responsivo para notícias
- Formulários adaptáveis
- Imagens responsivas

## 🔧 Funcionalidades Técnicas

### JavaScript Classes
- `PassaBolaApp`: Classe principal da aplicação
- `NewsPage`: Funcionalidades específicas da página de notícias
- Sistema de roteamento client-side
- Gerenciamento de estado da aplicação

### CSS Features
- Animações CSS personalizadas
- Gradientes dinâmicos
- Transições suaves
- Suporte a modo escuro (preparado)
- Acessibilidade (ARIA labels, contraste)

### Performance
- Lazy loading de imagens
- Service Worker para cache
- Otimização de recursos
- Compressão de assets

## 🚀 Como Executar

1. **Clone ou baixe o projeto**
2. **Abra o arquivo `index.html` em um navegador moderno**
3. **Para desenvolvimento local com servidor HTTP:**
   ```bash
   # Usando Python
   python -m http.server 8000
   
   # Usando Node.js
   npx serve .
   
   # Usando PHP
   php -S localhost:8000
   ```

## 📋 Funcionalidades por Página

### Página Principal (`index.html`)
- Hero section com imagens rotativas
- Seção sobre com cards informativos
- Grid de notícias dinâmico
- Formulário de contato
- Footer completo

### Página Sobre (`pages/about.html`)
- Missão e valores da empresa
- Equipe com perfis
- Estatísticas de impacto
- Design focado em storytelling

### Página Notícias (`pages/news.html`)
- Sistema de filtros por categoria
- Carregamento dinâmico de notícias
- Newsletter signup
- Layout otimizado para leitura

### Página Contato (`pages/contact.html`)
- Formulário completo de contato
- Informações de contato detalhadas
- Links para redes sociais
- FAQ interativo

## 🎯 Objetivos Alcançados

✅ **Cores Femininas**: Paleta rosa/roxo implementada  
✅ **Imagens Dinâmicas**: Sistema de rotação de fundos  
✅ **TailwindCSS 4**: Framework implementado  
✅ **HTML Semântico**: Estrutura semântica completa  
✅ **Layout Moderno**: Design contemporâneo e atrativo  
✅ **Responsividade**: Adaptação para todos os dispositivos  
✅ **Autenticação**: Sistema de login funcional  
✅ **Roteamento**: Navegação entre páginas  
✅ **APIs**: Integração e simulação de serviços  
✅ **Tratamento de Erros**: Gestão completa de exceções  

## 🔮 Próximos Passos

- Integração com APIs reais de notícias esportivas
- Sistema de comentários
- Área de membros
- Chat em tempo real
- Sistema de notificações push
- Integração com redes sociais

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato através da página de contato do site ou abra uma issue no repositório.

---

**Desenvolvido com ❤️ para promover o futebol feminino brasileiro**
