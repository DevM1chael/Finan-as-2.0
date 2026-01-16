# 🧩 Componentes - Aurevo Finance

Documentação de todos os componentes e padrões reutilizáveis do projeto.

## 📦 Botões

### Primário

```html
<button class="btn primary">Clique aqui</button>
```

**Uso:** Ação principal da página  
**Variáveis:** `--color-accent`, `--color-on-primary`

### Ghost (Outline)

```html
<button class="btn ghost">Cancelar</button>
```

**Uso:** Ações secundárias  
**Variáveis:** `--color-glass`

### Small

```html
<button class="btn small">Ação</button>
```

**Uso:** Ações em tabelas, inline  
**Variáveis:** Herda do primário

### Estado Pressed

```html
<button class="btn pressed">...</button>
```

Automático quando clicado (160ms de duração)

## 🎴 Cards

### Card Padrão

```html
<div class="card">
  <h3>Título</h3>
  <p class="large">Subtítulo</p>
  <p>Conteúdo</p>
</div>
```

### Card de Resumo (Summary Card)

Tipos: `income`, `expense`, `balance`, `pending`

```html
<article class="summary-card income" data-key="incomeMonth">
  <div class="card-head">
    <svg class="icon"><!-- ícone --></svg>
    <span class="muted">Receitas (mês)</span>
  </div>
  <div class="card-value">R$ <span class="value">0,00</span></div>
  <div class="card-meta muted">Última atualização: <small>agora</small></div>
</article>
```

**Classes:**

- `.card-head` - Cabeçalho com ícone
- `.card-value` - Valor principal
- `.card-meta` - Metadados

**Uso em JS:**

```javascript
import { populateSummary } from "./js/modules/dashboard-summary.js"
populateSummary() // Preenche automaticamente
```

## 📝 Formulários

### Input de Texto

```html
<div class="form-row">
  <label for="name">Nome</label>
  <input id="name" type="text" required />
</div>
```

### Select

```html
<div class="form-row">
  <label for="category">Categoria</label>
  <select id="category" required>
    <option value="">Selecione</option>
    <option value="food">Alimentação</option>
  </select>
</div>
```

### Checkbox

```html
<div class="form-row">
  <label> <input type="checkbox" /> Lembrar-me </label>
</div>
```

### Formulário Completo

```html
<form class="auth-form">
  <div class="form-row">
    <label for="email">E-mail</label>
    <input id="email" type="email" required />
  </div>

  <div class="form-row">
    <label for="password">Senha</label>
    <input id="password" type="password" required />
  </div>

  <button type="submit" class="btn primary">Entrar</button>
</form>
```

## 📊 Tabelas

### Estrutura Básica

```html
<div class="table-wrap">
  <table class="transactions-table">
    <thead>
      <tr>
        <th scope="col">Data</th>
        <th scope="col">Descrição</th>
        <th scope="col">Valor</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
    <tbody class="transactions-body">
      <!-- Preenchido por JS -->
    </tbody>
  </table>
</div>
```

### Cores de Valor

```html
<!-- Entrada (positivo) -->
<td class="pos">R$ 1.200,00</td>

<!-- Saída (negativo) -->
<td class="neg">R$ 350,50</td>
```

## 🎨 Layout

### Container

```html
<div class="container">
  <!-- Conteúdo com max-width de 1100px -->
</div>
```

### Grid

```html
<div class="grid gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

Classes de gap: `gap-1`, `gap-2`, `gap-3`

### Flexbox

```html
<div class="flex gap-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="flex-center">Centralizado</div>
```

## 📈 Gráfico

### SVG Gráfico

```html
<svg class="chart-svg" viewBox="0 0 600 300">
  <defs>
    <linearGradient id="lineGradientIncome">
      <stop offset="0%" stop-color="var(--color-accent)" />
      <stop offset="100%" stop-color="var(--color-accent-2)" />
    </linearGradient>
  </defs>

  <path class="chart-area-income" fill="url(#lineGradientIncome)"></path>
  <path class="chart-line-income" stroke="url(#lineGradientIncome)"></path>
  <g class="chart-dots-income"></g>
</svg>
```

**Uso em JS:**

```javascript
import { renderDashboardChart } from "./js/modules/dashboard-chart.js"
renderDashboardChart() // Renderiza automaticamente
```

## 🔔 Notificações

### Toast

```javascript
import { showToast } from "./js/utils/dom.js"

showToast("Transação adicionada!", 3000)
```

**Classes CSS:** `.qa-toast`, `.qa-toast.visible`

## 🪟 Modal

### Estrutura

```html
<div id="txModal" class="modal" aria-hidden="true">
  <div class="modal-backdrop"></div>

  <div class="modal-dialog">
    <header class="modal-head">
      <h3>Título do Modal</h3>
      <button class="modal-close">×</button>
    </header>

    <form id="txForm" class="modal-form">
      <!-- Formulário -->
    </form>
  </div>
</div>
```

**Uso em JS:**

```javascript
import { openTxModal, closeTxModal } from "./js/modules/dashboard-modal.js"

openTxModal() // Abre
closeTxModal() // Fecha
```

**Estados:**

- `.show` - Visível (opacity: 1)
- `aria-hidden="true"` - Oculto para screen readers

## 🎯 Ações Rápidas

### Botões

```html
<div class="qa-grid">
  <button class="quick-btn" data-action="add-transaction">
    <svg><!-- ícone --></svg>
    <span>Adicionar</span>
  </button>
</div>
```

**Ações disponíveis:**

- `add-transaction` - Novo registro
- `add-reminder` - Lembrete
- `view-bills` - Contas pendentes
- `export-csv` - Exportar

## 🎨 Utilities

### Tipografia

```html
<p class="large">Texto grande</p>
<p class="muted">Texto mutado</p>
<h2>Título</h2>
```

### Espaçamento

```html
<!-- Margin Top -->
<div class="mt-1">xs (4px)</div>
<div class="mt-2">sm (8px)</div>
<div class="mt-3">md (16px)</div>
<div class="mt-4">lg (32px)</div>

<!-- Margin Bottom -->
<div class="mb-1">...</div>

<!-- Gap (flex/grid) -->
<div class="flex gap-1">...</div>
```

### Alignment

```html
<div class="text-center">Centralizado</div>
<div class="flex-center">Flex Centralizado</div>
```

## 🌙 Temas

### Aplicar Tema

```javascript
import { applyTheme, toggleTheme } from "./js/modules/theme.js"

applyTheme("light") // Aplica light theme
toggleTheme() // Alterna entre light/dark
```

### Variáveis por Tema

Dark (padrão):

```css
--color-text-primary: #e6eef8 --color-bg-primary: #0f1724;
```

Light:

```css
--color-text-primary: #0b1220 --color-bg-primary: #f7fafc;
```

## 📱 Responsividade

### Breakpoints

```css
/* Mobile-first */
@media (max-width: 640px) {
  /* Mobile */
}
@media (max-width: 900px) {
  /* Tablet */
}
@media (max-width: 1280px) {
  /* Desktop pequeno */
}
```

### Grid Responsivo

```html
<div class="features grid">
  <!-- 3 colunas em desktop -->
  <!-- 2 colunas em tablet -->
  <!-- 1 coluna em mobile -->
</div>
```

## ✅ Padrões

### Seletor Seguro

```javascript
import { safeSelect } from "./js/utils/dom.js"

const el = safeSelect(".maybe-exists")
// Retorna null se não existir (sem erro)
```

### Elemento Criado

```javascript
import { createElement } from "./js/utils/dom.js"

const btn = createElement("button", "btn primary", "Clique")
document.body.appendChild(btn)
```

### State Management

```javascript
import { AurevoState } from "./js/modules/state.js"

AurevoState.updateSummary({ balance: 5000 })
const data = AurevoState.getAll()
```

---

**Versão:** 2.0.0  
**Última atualização:** Janeiro 2026
