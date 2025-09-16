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

#### 🌐 Consumo de APIs Reais
- **NewsAPI**: Notícias reais de futebol feminino em tempo real 
- **MailerLite**: Newsletter profissional com gestão de assinantes 
- **RSS Feeds**: Fallback automático com feeds do GloboEsporte e Lance
- **Formulário de Contato**: Armazenamento local para mensagens
- Sistema de cache inteligente para otimizar requisições

#### ⚠️ Tratamento de Erros
- Gestão de exceções e falhas durante a execução
- Mensagens de erro amigáveis ao usuário
- Sistema de toast notifications
- Fallbacks para falhas de rede

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
- `ShopPage`: Sistema completo de loja com carrinho
- `RealAPIManager`: Gerenciamento de APIs e fallbacks
- `APIConfig`: Configuração centralizada de APIs
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
- Otimização de recursos
- Compressão de assets

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

### Página Loja (`pages/shop.html`)
- Catálogo de produtos do futebol feminino
- Sistema de filtros por categoria
- Carrinho de compras funcional
- Modais de produto e carrinho
- Persistência no localStorage

## 🎯 Objetivos Alcançados

✅ **Cores Femininas**: Paleta rosa/roxo implementada  
✅ **Imagens Dinâmicas**: Sistema de rotação de fundos  
✅ **TailwindCSS 4**: Framework implementado  
✅ **HTML Semântico**: Estrutura semântica completa  
✅ **Layout Moderno**: Design contemporâneo e atrativo  
✅ **Responsividade**: Adaptação para todos os dispositivos  
✅ **Autenticação**: Sistema de login funcional  
✅ **Roteamento**: Navegação entre páginas  
✅ **APIs Reais**: NewsAPI e MailerLite configurados  
✅ **Tratamento de Erros**: Gestão completa de exceções  
✅ **Loja Online**: Sistema completo de e-commerce implementado  
✅ **Testes Unitários**: 54 testes automatizados com 100% de sucesso  
✅ **Documentação**: APIs documentadas em `docs/api-endpoints.md`  
✅ **Script de Seed**: Geração automática de dados de teste  

## 🧪 Testes e Qualidade

### Testes Unitários
- **54 testes implementados** com 100% de sucesso
- Cobertura completa de todas as classes JavaScript
- Framework de testes customizado integrado
- Execução automatizada com `node tests/run-all-tests.js`

### Arquivos de Teste
- `tests/unit/PassaBolaApp.test.js` - Aplicação principal
- `tests/unit/RealAPIManager.test.js` - Gerenciamento de APIs
- `tests/unit/NewsPage.test.js` - Página de notícias
- `tests/unit/ShopPage.test.js` - Sistema de loja

### Seed e Dados de Teste
- `src/js/seed.js` - Gerador automático de dados
- Notícias, produtos, usuários e assinantes ficcionais
- Dados organizados e reutilizáveis

## 📖 Documentação

### Documentação de APIs
- `docs/api-endpoints.md` - Documentação completa das APIs
- Endpoints detalhados do NewsAPI e MailerLite
- Estruturas de dados e códigos de erro
- Estratégias de fallback documentadas

## 🔮 Próximos Passos

- Integração com APIs reais de notícias esportivas
- Sistema de loja online completo
- Testes unitários automatizados
- Sistema de comentários em notícias
- Área de membros com dashboard
- Chat em tempo real para torcedoras
- Sistema de notificações push
- Integração com redes sociais
- Analytics e métricas de engajamento

## 🌐 APIs Configuradas

### 📰 Notícias Reais
- **NewsAPI**: Notícias de futebol feminino em tempo real
- **RSS Feeds**: GloboEsporte e Lance como fallback
- **Cache**: 5 minutos para otimizar performance

### 📧 Comunicação Real
- **MailerLite**: Newsletter profissional (até 1.000 assinantes grátis) 
- **Formulário Local**: Mensagens armazenadas localmente para revisão

### 🛍️ E-commerce
- **Sistema de Produtos**: 12 produtos ficcionais do futebol feminino
- **Carrinho de Compras**: Funcionalidade completa com localStorage
- **Modais Customizados**: Design exclusivo para produto e carrinho
- **Filtros por Categoria**: Organização por tipo de produto

### 🔄 Fallbacks Automáticos
- **RSS Feeds**: GloboEsporte e Lance como backup de notícias
- **localStorage**: Backup para newsletter e formulários

## 👨‍💻 Desenvolvedores

Arthur Canaverde da Cruz (RM:563029)
Lucas Costa Zago (RM:562028)

---

**Desenvolvido com ❤️ para promover o futebol feminino brasileiro**
