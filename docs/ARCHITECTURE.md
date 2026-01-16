# 📚 Estrutura do Projeto Aurevo Finance

## Visão Geral

Este documento descreve a estrutura e organização profissional do projeto Aurevo Finance após a refatoração v2.0.

## 📁 Estrutura de Diretórios

```
Finan-as-2.0/
│
├── 📄 index.html                    # Página inicial
├── 📄 index.js                      # Script global (refatorado v2.0)
│
├── 📁 js/                           # Código JavaScript modular
│   ├── 📁 modules/                  # Módulos de funcionalidade
│   │   ├── theme.js                 # Gerenciar tema (dark/light)
│   │   ├── navigation.js            # Gerenciar navegação mobile
│   │   ├── footer.js                # Gerenciar rodapé
│   │   ├── state.js                 # Estado global da aplicação
│   │   ├── dashboard-summary.js     # Resumo financeiro (cards)
│   │   ├── dashboard-transactions.js # Tabela de transações
│   │   ├── dashboard-chart.js       # Gráfico de desempenho
│   │   ├── dashboard-modal.js       # Modal de transações
│   │   └── dashboard-quick-actions.js # Ações rápidas
│   │
│   └── 📁 utils/                    # Utilitários/funções helpers
│       ├── formatting.js            # Formatação (moeda, datas)
│       └── dom.js                   # Manipulação DOM segura
│
├── 📁 css/                          # Estilos CSS organizados
│   ├── 📁 base/                     # Base (variáveis, reset, utilities)
│   │   ├── _variables.css           # Tokens de design (cores, spacing, etc)
│   │   ├── _reset.css               # Normalizações CSS
│   │   └── _utilities.css           # Classes utilitárias
│   │
│   ├── 📁 components/               # Componentes reutilizáveis
│   │   ├── _buttons.css             # Estilos de botões
│   │   ├── _cards.css               # Estilos de cards
│   │   ├── _forms.css               # Estilos de formulários
│   │   └── _tables.css              # Estilos de tabelas
│   │
│   ├── 📁 layout/                   # Layout principal
│   │   ├── _header.css              # Estilo do header/nav
│   │   └── _footer.css              # Estilo do footer
│   │
│   ├── 📁 pages/                    # Estilos específicos por página
│   │   ├── _home.css                # Página inicial
│   │   ├── _dashboard.css           # Página dashboard
│   │   └── _auth.css                # Páginas login/cadastro
│   │
│   ├── 📁 themes/                   # Temas adicionais
│   │   └── _light.css               # Tema claro overrides
│   │
│   └── main.css                     # Importação central (substitui style.css)
│
├── 📁 assets/                       # Arquivos estáticos
│   ├── style.css                    # DESCONTINUADO (use css/main.css)
│   ├── dashboard.css                # DESCONTINUADO (use css/main.css)
│   └── dashboard.js                 # Script do dashboard (refatorado v2.0)
│
├── 📁 pages/                        # Páginas HTML
│   ├── login.html
│   ├── cadastro.html
│   ├── dashboard.html
│   └── transacoes.html
│
├── 📁 docs/                         # Documentação
│   ├── ARCHITECTURE.md              # Este arquivo
│   ├── GUIDE.md                     # Guia de desenvolvimento
│   └── COMPONENTS.md                # Documentação de componentes
│
├── 📁 templates/                    # Templates/snippets HTML reutilizáveis
│   └── (estrutura para futuros componentes)
│
└── 📄 README.md                     # Documentação principal
```

## 🏗️ Arquitetura

### Camadas

```
┌─────────────────────────────────────────┐
│          HTML (Pages)                   │
├─────────────────────────────────────────┤
│         CSS (Styling)                   │
│    (Variáveis → Base → Components)      │
├─────────────────────────────────────────┤
│        JavaScript Modules               │
│  (Utils → Modules → Init)               │
├─────────────────────────────────────────┤
│         Browser APIs                    │
│    (DOM, LocalStorage, Fetch)           │
└─────────────────────────────────────────┘
```

### Módulos JavaScript

#### **utils/** - Funções Auxiliares

- `formatting.js` - Formata valores (moeda, datas)
- `dom.js` - Manipulação segura do DOM

#### **modules/** - Lógica de Funcionalidade

**Globais:**

- `theme.js` - Tema (light/dark)
- `navigation.js` - Navegação mobile
- `footer.js` - Rodapé dinâmico

**Dashboard:**

- `state.js` - Estado centralizado (imutável)
- `dashboard-summary.js` - Cards de resumo
- `dashboard-transactions.js` - Tabela e ações
- `dashboard-chart.js` - Gráfico SVG
- `dashboard-modal.js` - Modal de formulário
- `dashboard-quick-actions.js` - Botões de ação rápida

### Arquitetura CSS (SMACSS)

```
VARIABLES (_variables.css)
     ↓
RESET (_reset.css)
     ↓
UTILITIES (_utilities.css)
     ↓
COMPONENTS (buttons, cards, forms, tables)
     ↓
LAYOUT (header, footer)
     ↓
PAGES (home, dashboard, auth)
     ↓
THEMES (light theme overrides)
```

## 🎨 Design Tokens

### Cores

```css
--color-accent: #4f46e5 /* Azul primário */ --color-accent-2: #06b6d4
  /* Ciano */ --color-success: #10b981 /* Verde */ --color-danger: #ef4444
  /* Vermelho */;
```

### Espaçamento (Escala 8px)

```css
--space-xs: 0.25rem (4px) --space-sm: 0.5rem (8px) --space-md: 1rem (16px)
  --space-lg: 1.5rem (24px) --space-xl: 2rem (32px);
```

### Border Radius

```css
--radius-sm: 8px --radius-md: 12px --radius-lg: 14px --radius-round: 30px;
```

## 📖 Como Usar

### Adicionar Nova Página

1. Criar arquivo em `pages/`
2. Criar CSS em `css/pages/_newpage.css`
3. Importar em `css/main.css`

### Adicionar Novo Módulo JS

1. Criar arquivo em `js/modules/` ou `js/utils/`
2. Exportar funções como `export function myFunction() {}`
3. Importar no arquivo que precisa (ex: index.js)

### Adicionar Novo Componente CSS

1. Criar arquivo em `css/components/`
2. Importar em `css/main.css`
3. Usar classes em HTML

## 🔄 Fluxo de Inicialização

```
page load
    ↓
index.js carrega
    ↓
├─ initTheme() → Aplica tema salvo
├─ initNavigation() → Setup mobile menu
├─ initFooter() → Ano dinâmico
    ↓
Se página = dashboard:
    ├─ populateSummary() → Cards
    ├─ populateTransactions() → Tabela
    ├─ renderDashboardChart() → Gráfico
    ├─ attachModalHandlers() → Formulário
    └─ attachQuickActions() → Botões
```

## 📝 Convenções

### Nomenclatura de Classes CSS

- `.btn-primary` - Componentes
- `.mt-2` - Utilities
- `.hero` - Seções de página

### Nomenclatura de Variáveis JS

- `camelCase` para funções
- `UPPER_SNAKE_CASE` para constantes
- `PascalCase` para classes (se usadas)

### Nomenclatura de Arquivos

- `index.js` - Entrada principal
- `_component.css` - Underscore para arquivos parciais
- `module-name.js` - Kebab-case para módulos

## ✅ Benefícios da Refatoração

1. **Manutenibilidade** - Código organizado em responsabilidades
2. **Escalabilidade** - Fácil adicionar novos módulos
3. **Testabilidade** - Funções puras e isoladas
4. **Documentação** - JSDoc em funções importantes
5. **Auditoria** - Estrutura clara para análise
6. **Performance** - CSS otimizado com variáveis
7. **Acessibilidade** - Semântica preservada

## 🔮 Próximos Passos

- [ ] Migrar para ES modules completo (remover .js duplicados)
- [ ] Adicionar bundler (Webpack/Vite)
- [ ] Integração com backend/API
- [ ] Testes unitários
- [ ] CI/CD pipeline
- [ ] Build otimizado para produção

---

**Versão:** 2.0.0  
**Data:** Janeiro 2026  
**Autor:** Aurevo Finance Team
