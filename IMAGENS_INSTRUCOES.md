# Instruções para Imagens - Passa Bola

## 📸 Imagens Fornecidas

Você forneceu as seguintes imagens que foram integradas ao site:

### 1. Logo Principal
- **Arquivo**: `logo.png`
- **Uso**: Logo principal do site, aparece no cabeçalho de todas as páginas
- **Localização**: Raiz do projeto
- **Descrição**: Emblema com símbolos feministas, punho erguido e engrenagem em tons de roxo

### 2. Imagens de Fundo (Rotação Automática)
As seguintes imagens são alternadas automaticamente no fundo da seção hero:

#### Imagem 1: `hero-bg-1.jpg`
- **Descrição**: Jogadoras brasileiras em celebração com uniformes amarelos e azuis
- **Uso**: Primeira imagem do ciclo de rotação

#### Imagem 2: `hero-bg-2.jpg`
- **Descrição**: Jogadoras do Corinthians celebrando à noite com uniformes azul escuro e dourado
- **Uso**: Segunda imagem do ciclo de rotação

#### Imagem 3: `hero-bg-3.jpg`
- **Descrição**: Jogadoras do São Paulo FC em campo com uniformes brancos, vermelhos e pretos
- **Uso**: Terceira imagem do ciclo de rotação

#### Imagem 4: `hero-bg-4.jpg`
- **Descrição**: Jogadoras do Palmeiras celebrando com uniformes verdes e brancos
- **Uso**: Quarta imagem do ciclo de rotação

## 🔧 Como Adicionar as Imagens

### Passo 1: Salvar as Imagens
1. Salve a imagem do logo como `logo.png` na raiz do projeto
2. Salve as imagens de fundo como:
   - `hero-bg-1.jpg`
   - `hero-bg-2.jpg`
   - `hero-bg-3.jpg`
   - `hero-bg-4.jpg`

### Passo 2: Verificar o Funcionamento
- O logo aparecerá automaticamente no cabeçalho
- As imagens de fundo alternarão automaticamente a cada 5 segundos na seção hero
- A animação CSS está configurada no arquivo `styles.css`

## 🎨 Características das Imagens

### Paleta de Cores Femininas
Todas as imagens foram escolhidas para complementar a paleta de cores femininas do site:
- **Roxo**: `#a855f7`
- **Rosa**: `#ec4899`
- **Rosa-Choque**: `#be185d`

### Temas Representados
- **Empoderamento Feminino**: Todas as imagens mostram mulheres fortes e determinadas
- **Celebração**: Momentos de vitória e alegria
- **Diversidade**: Diferentes times e contextos do futebol feminino
- **Profissionalismo**: Atletas em ação durante jogos oficiais

## 📱 Responsividade

As imagens são automaticamente responsivas:
- **Desktop**: Imagens completas com efeito parallax
- **Tablet**: Adaptação para telas médias
- **Mobile**: Scroll normal para melhor performance

## ⚡ Performance

- **Lazy Loading**: Imagens carregam conforme necessário
- **Otimização**: Compressão automática pelo navegador
- **Cache**: Service Worker armazena imagens em cache
- **Fallback**: Texto alternativo para acessibilidade

## 🔄 Animação de Rotação

A rotação das imagens de fundo é controlada por CSS:
```css
@keyframes backgroundRotate {
    0% { background-image: url('hero-bg-1.jpg'); }
    25% { background-image: url('hero-bg-2.jpg'); }
    50% { background-image: url('hero-bg-3.jpg'); }
    75% { background-image: url('hero-bg-4.jpg'); }
    100% { background-image: url('hero-bg-1.jpg'); }
}
```

## 🎯 Resultado Final

Com essas imagens integradas, o site terá:
- ✅ Logo profissional no cabeçalho
- ✅ Fundo dinâmico com imagens de jogadoras
- ✅ Paleta de cores femininas consistente
- ✅ Experiência visual impactante
- ✅ Representação do futebol feminino brasileiro

## 📝 Notas Importantes

1. **Formato**: Use JPG para imagens de fundo e PNG para o logo
2. **Tamanho**: Otimize as imagens para web (máximo 2MB cada)
3. **Qualidade**: Mantenha alta qualidade para melhor experiência visual
4. **Acessibilidade**: Todas as imagens têm texto alternativo configurado

---

**As imagens fornecidas são perfeitas para representar o empoderamento feminino no futebol brasileiro!** ⚽👩‍⚽
