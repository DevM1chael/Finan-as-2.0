# 🚀 Guia de Desenvolvimento - Aurevo Finance

## Começando

### Prerequisitos

- Navegador moderno (Chrome, Firefox, Safari)
- Editor de código (VS Code recomendado)
- Conhecimento básico de HTML/CSS/JavaScript

### Como Rodar

1. Clone o repositório
2. Abra `index.html` no navegador
3. Ou use um servidor local:
   ```bash
   python -m http.server 8000
   # ou
   npx http-server
   ```

## 📝 Estrutura de Desenvolvimento

### Adicionar Funcionalidade

#### 1. Criar Novo Módulo JS

```javascript
// js/modules/my-feature.js
export function initMyFeature() {
  // Seu código aqui
  console.log("✓ My Feature initialized")
}

export function doSomething(param) {
  return param.toUpperCase()
}
```

#### 2. Importar no Arquivo Principal

```javascript
// index.js ou assets/dashboard.js
import { initMyFeature } from "./js/modules/my-feature.js"

function initializeApp() {
  initMyFeature()
}
```

#### 3. Criar Estilos CSS

```css
/* css/components/_my-feature.css */

.my-feature {
  background: var(--color-card);
  padding: var(--space-md);
  border-radius: var(--radius-md);
}

.my-feature:hover {
  box-shadow: 0 6px 20px var(--shadow-medium);
}
```

#### 4. Importar em main.css

```css
/* css/main.css */
@import "./components/_my-feature.css";
```

### Usar Componentes Existentes

#### Botão

```html
<!-- Primário -->
<button class="btn primary">Clique aqui</button>

<!-- Ghost (outline) -->
<button class="btn ghost">Cancelar</button>

<!-- Pequeno -->
<button class="btn small">Ação</button>
```

#### Card

```html
<div class="card">
  <h3>Título</h3>
  <p>Conteúdo do card</p>
</div>
```

#### Formulário

```html
<form class="auth-form">
  <div class="form-row">
    <label for="email">E-mail</label>
    <input id="email" type="email" required />
  </div>

  <button type="submit" class="btn primary">Enviar</button>
</form>
```

#### Card de Resumo

```html
<article class="summary-card income" data-key="incomeMonth">
  <div class="card-head">
    <span class="muted">Receitas (mês)</span>
  </div>
  <div class="card-value">R$ <span class="value">0,00</span></div>
</article>
```

### Usar Utilitários

#### Formatação

```javascript
import { formatCurrencyBR, formatDateBR } from "./js/utils/formatting.js"

const valor = 1234.56
console.log(formatCurrencyBR(valor)) // "R$ 1.234,56"

const data = "2026-01-12"
console.log(formatDateBR(data)) // "12/01/2026"
```

#### DOM

```javascript
import { showToast, safeSelect, createElement } from "./js/utils/dom.js"

// Toast
showToast("Operação realizada!", 3000)

// Seletor seguro
const element = safeSelect(".my-element")

// Criar elemento
const div = createElement("div", "card active", "Conteúdo")
```

### Gerenciar Estado

```javascript
import { AurevoState } from "./js/modules/state.js"

// Obter resumo
const summary = AurevoState.summary
console.log(summary.balance)

// Atualizar resumo
AurevoState.updateSummary({ balance: 5000 })

// Adicionar transação
AurevoState.addTransaction({
  id: 1,
  date: "2026-01-12",
  desc: "Salário",
  type: "income",
  value: 2400,
})

// Obter tudo
const all = AurevoState.getAll()
```

## 🎨 Editar Tema

### Variáveis de Cor

Edite em `css/base/_variables.css`:

```css
:root {
  --color-accent: #4f46e5; /* Mude a cor primária */
  --color-success: #10b981; /* Mude a cor de sucesso */
  /* ... */
}
```

### Adicionar Tema Novo

1. Criar arquivo em `css/themes/_mytheme.css`
2. Adicionar seletores body com o tema
3. Importar em `css/main.css`

Exemplo:

```css
/* css/themes/_high-contrast.css */

body.high-contrast {
  --color-accent: #ff0000;
  --color-text-primary: #ffffff;
  --color-bg-primary: #000000;
}
```

## 📊 Adicionar Página

### 1. Criar HTML

```html
<!-- pages/my-page.html -->
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minha Página — Aurevo Finance</title>
    <link rel="stylesheet" href="../css/main.css" />
  </head>
  <body>
    <header class="site-header">
      <!-- header comum -->
    </header>

    <main class="container">
      <h1>Minha Página</h1>
    </main>

    <footer class="site-footer">
      <!-- footer comum -->
    </footer>

    <script src="../index.js"></script>
  </body>
</html>
```

### 2. Criar CSS

```css
/* css/pages/_my-page.css */

.my-page-hero {
  padding: 3rem 0;
  text-align: center;
}

.my-page-content {
  margin-top: 2rem;
}
```

### 3. Importar CSS

```css
/* css/main.css */
@import "./pages/_my-page.css";
```

## 🐛 Debug

### Console

```javascript
// Ver estado
console.log("State:", window.AurevoData)

// Ver tema atual
console.log(
  "Current theme:",
  document.body.classList.contains("light-theme") ? "light" : "dark",
)

// Ver elemento
console.table(document.querySelector(".summary-card"))
```

### DevTools

1. Abra DevTools (F12)
2. Aba **Elements** - Inspecionar HTML/CSS
3. Aba **Console** - Executar JS
4. Aba **Network** - Ver requisições
5. Aba **Application** - LocalStorage

### Validação HTML

Use https://validator.w3.org/

### Validação CSS

Use https://jigsaw.w3.org/css-validator/

## 📚 Referências

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [W3C Web Accessibility](https://www.w3.org/WAI/)

## ✅ Checklist para Pull Request

- [ ] Código segue convenções (camelCase, etc)
- [ ] Funções têm JSDoc
- [ ] CSS usa variáveis (não hardcoded)
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Acessibilidade (ARIA, alt text)
- [ ] Testado em 2+ navegadores
- [ ] Sem console errors/warnings
- [ ] Sem mudanças não relacionadas

## 🚫 Erros Comuns

### Imports Incorretos

❌ Errado:

```javascript
import theme from "theme.js"
```

✅ Correto:

```javascript
import { initTheme } from "./js/modules/theme.js"
```

### CSS Variáveis Não Funcionam

❌ Errado:

```css
color: $accent; /* Não é SCSS */
```

✅ Correto:

```css
color: var(--color-accent);
```

### Elementos Não Encontrados

❌ Errado:

```javascript
document.querySelector(".not-exists").textContent = "x" // Erro!
```

✅ Correto:

```javascript
const el = safeSelect(".maybe-exists")
if (el) el.textContent = "x"
```

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique a documentação em `docs/`
2. Procure por issue similar
3. Crie uma issue nova com detalhes

---

**Última atualização:** Janeiro 2026  
**Versão:** 2.0.0
