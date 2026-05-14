## Redesign editorial de luxo — NeiaPaz

Redesign completo mantendo todo o conteúdo e estrutura existente (i18n, rotas, portfólio, WhatsApp), elevando o visual a nível editorial premium estilo Vogue Italia / Wallpaper.

### 1. Sistema de design (fundação)
- Atualizar `src/index.css` com nova paleta HSL:
  - background: off-white quente `#FAF8F5`
  - foreground: preto profundo `#0D0D0D`
  - primary: dourado/âmbar `#C9974A`
  - accent: verde-oliva `#4A4A35`
  - dark: `#0D0D0D` / dark-warm `#1A1A14` para cards
- Atualizar `tailwind.config.ts`:
  - Trocar fontes: serif → **Playfair Display**, sans → **Inter**
  - Adicionar token `dark-warm` (#1A1A14)
  - Keyframes extras: `fade-up`, `count-up`, `scroll-progress`
- Importar Playfair Display + Inter no `index.html` (Google Fonts).
- Adicionar utilitários globais: cursor customizado dourado, scroll progress bar, grain texture sutil, link underline animado.

### 2. Navbar
- `Navigation.tsx`: transparente no topo → branco com sombra ao scroll
- Links finos espaçados, hover com sublinhado animado dourado
- Seletor PT | EN | IT | ES como texto discreto (substituir bandeiras grandes do `LanguageSwitcher` por versão inline na nav)
- Botão "Get in Touch" pill com borda dourada, fill ao hover

### 3. Hero
- Manter imagem `/hero-exhibition.png` com parallax + overlay gradiente quente (preto→âmbar baixíssima opacidade)
- Título serif XL bold, palavra-chave ("Brazil–Italy" / "connections") em itálico dourado
- Subtítulo refinado, letter-spacing amplo
- Linha dourada horizontal decorativa abaixo do título
- 2 CTAs: dourado sólido + ghost branco
- Scroll indicator pulsante na base

### 4. Value Props (3 features)
- Substituir ícones por números grandes serif `01 02 03` em dourado
- Layout horizontal, divisor fino entre items no mobile, sem cards/sombras

### 5. Services ("What I Do") — Bento Grid
- Reescrever `Services.tsx` em grid assimétrico (2 cards grandes + 2 menores)
- Fundo `dark-warm` (#1A1A14), título branco, texto cinza, número dourado
- Hover: scale leve + borda dourada
- 1 card destaque com foto de fundo + overlay

### 6. Portfolio ("Selected Projects")
- Reescrever `Portfolio.tsx`: layout magazine alternado (1 grande + 2 empilhadas, invertido na próxima linha)
- Hover: overlay escuro com título + categoria
- Contador "06 Projects" no topo da seção
- Link sublinhado animado em vez de botão "View Full Portfolio"

### 7. About
- Layout split com foto retrato (4/5) + linha/moldura dourada lateral
- Cargo em dourado, key competencies com traço dourado em vez de bullets
- Quote serif itálica grande com aspas decorativas douradas
- Grain texture sutil no fundo

### 8. Testimonials
- Fundo `#0D0D0D`, aspas gigantes douradas semitransparentes no fundo
- Foto cliente em círculo + nome/cargo dourado
- Dots finos minimalistas

### 9. Contact ("Let's Work Together")
- 2 colunas: info+social esquerda, form direita
- Inputs apenas com border-bottom, labels uppercase pequenos com tracking
- Botão dourado full-width
- Ilustração/mapa minimalista de Milão/Brasil no fundo (opacidade 5-10%)

### 10. Footer
- Fundo preto, logo grande centralizado, tagline itálica
- Colunas de links tipografia fina
- Linha dourada divisória + copyright cinza escuro

### 11. Micro-interações
- Hook `useReveal` já existe — manter, melhorar com slide-up suave
- Adicionar componente `ScrollProgress` (barra dourada no topo)
- Adicionar componente `CustomCursor` (círculo dourado, expande no hover de a/button)
- Counter animado em estatísticas (se houver)
- Parallax leve em imagens de fundo via transform on scroll

### 12. Responsividade
- Bento grid → stack vertical no mobile
- Hero centralizado mobile
- Menu hamburger fullscreen elegante (já existe, refinar tipografia)

### Detalhes técnicos
- Não tocar em lógica de i18n nem em chaves de tradução — apenas reestilizar
- Não alterar rotas nem dados de portfólio (`src/data/portfolioProjects.ts`)
- Manter `FloatingWhatsAppButton` mas ajustar para combinar com paleta dourada
- Todos os tokens via `index.css` semantic tokens (HSL), sem cores hardcoded em componentes
- Adicionar `prefers-reduced-motion` guards no cursor custom e parallax

### Arquivos afetados
- Editar: `index.html`, `src/index.css`, `tailwind.config.ts`, `src/components/{Navigation,Hero,ValueProps,Services,Portfolio,About,Testimonials,Contact,Footer,LanguageSwitcher,FloatingWhatsAppButton}.tsx`, `src/pages/Index.tsx`
- Criar: `src/components/ScrollProgress.tsx`, `src/components/CustomCursor.tsx`
