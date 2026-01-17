# 🎓 Roadmap de Aprendizado: Do Zero ao Profissional

> **Como usar:** Leia cada seção. Se já souber, **pule para a próxima**. Se não souber, siga os exercícios.

---

## 📋 Índice Rápido

- [PARTE 1: HTML Essencial](#parte-1-html-essencial)
- [PARTE 2: CSS Fundamental](#parte-2-css-fundamental)
- [PARTE 3: JavaScript Básico](#parte-3-javascript-básico)
- [PARTE 4: DOM Manipulation](#parte-4-dom-manipulation)
- [PARTE 5: Funções Avançadas](#parte-5-funções-avançadas)
- [PARTE 6: Arquitetura & Modularização](#parte-6-arquitetura--modularização)

---

# PARTE 1: HTML Essencial

## 1.1 - Estrutura Básica

### O que é HTML?

HTML = **Linguagem de marcação** que cria a estrutura de uma página web.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Minha Página</title>
  </head>
  <body>
    <h1>Olá Mundo!</h1>
  </body>
</html>
```

**Tags importantes:**

- `<html>` — raiz da página
- `<head>` — informações (título, links)
- `<body>` — conteúdo visível
- `<h1>` a `<h6>` — títulos
- `<p>` — parágrafo
- `<a>` — link
- `<button>` — botão

### ✅ Exercício 1.1.1: Criar uma página simples

Crie um arquivo `exercicio-1-1-1.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Meu Primeiro Exercício</title>
  </head>
  <body>
    <h1>Bem-vindo!</h1>
    <p>Este é meu primeiro exercício HTML.</p>
    <a href="https://google.com">Ir para Google</a>
  </body>
</html>
```

**Abra no navegador.** Deve mostrar título, parágrafo e link.

---

## 1.2 - Atributos HTML

### O que são atributos?

São informações **extras** que você passa para um elemento.

```html
<!-- class = atributo -->
<button class="btn-primary">Clique</button>

<!-- id = atributo -->
<div id="myModal">Conteúdo</div>

<!-- data-action = atributo customizado -->
<button data-action="add-transaction">Adicionar</button>
```

**Atributos mais usados:**

- `class` — para estilizar com CSS
- `id` — identificador único
- `data-*` — armazenar informações customizadas
- `href` — link em `<a>`
- `src` — imagem/script
- `type` — tipo de input/button
- `placeholder` — texto de dica

### ✅ Exercício 1.2.1: Usar atributos

```html
<!DOCTYPE html>
<html>
  <body>
    <!-- Botão com class -->
    <button class="btn primary">Botão Primário</button>

    <!-- Botão com data-action (como no projeto) -->
    <button data-action="add-transaction">➕ Adicionar</button>

    <!-- Input com placeholder -->
    <input type="text" placeholder="Digite seu nome" />

    <!-- Div com id -->
    <div id="modal">Este é um modal</div>
  </body>
</html>
```

---

## 1.3 - Formulários HTML

### Por que formulários?

Para **coletar dados** do usuário (email, senha, etc).

```html
<form>
  <!-- Input de texto -->
  <input type="text" placeholder="Nome" />

  <!-- Input de número -->
  <input type="number" placeholder="Valor" />

  <!-- Input de data -->
  <input type="date" />

  <!-- Select (dropdown) -->
  <select>
    <option>Entrada</option>
    <option>Saída</option>
  </select>

  <!-- Textarea (texto longo) -->
  <textarea placeholder="Descrição"></textarea>

  <!-- Botão de envio -->
  <button type="submit">Enviar</button>
</form>
```

### ✅ Exercício 1.3.1: Criar um formulário

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Formulário de Transação</title>
  </head>
  <body>
    <h1>Adicionar Transação</h1>

    <form>
      <label>Data</label>
      <input type="date" required />

      <label>Descrição</label>
      <input type="text" placeholder="Ex: Salário" required />

      <label>Valor</label>
      <input type="number" step="0.01" required />

      <label>Tipo</label>
      <select required>
        <option>Entrada</option>
        <option>Saída</option>
      </select>

      <button type="submit">Salvar</button>
      <button type="button">Cancelar</button>
    </form>
  </body>
</html>
```

---

## 1.4 - Semântica HTML

### O que é semântica?

Usar tags que **fazem sentido** para o que representam.

```html
<!-- ❌ ERRADO (genérico) -->
<div>Título da página</div>

<!-- ✅ CERTO (semântico) -->
<h1>Título da página</h1>

<!-- ❌ ERRADO -->
<div>Conteúdo principal</div>

<!-- ✅ CERTO -->
<main>Conteúdo principal</main>

<!-- ✅ TAGS SEMÂNTICAS -->
<header>Cabeçalho</header>
<nav>Navegação</nav>
<main>Conteúdo principal</main>
<section>Seção</section>
<article>Artigo</article>
<footer>Rodapé</footer>
<aside>Barra lateral</aside>
```

### ✅ Exercício 1.4.1: Estrutura semântica

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Aurevo Finance</title>
  </head>
  <body>
    <header>
      <h1>Aurevo Finance</h1>
      <nav>
        <a href="/">Início</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    </header>

    <main>
      <section>
        <h2>Resumo Financeiro</h2>
        <article>Saldo: R$ 1.000,00</article>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Aurevo</p>
    </footer>
  </body>
</html>
```

---

## 1.5 - Acessibilidade HTML

### Por que acessibilidade?

Para que **deficientes visuais** possam usar o site (leitores de tela).

```html
<!-- ❌ ERRADO -->
<button>×</button>

<!-- ✅ CERTO -->
<button aria-label="Fechar">×</button>

<!-- ❌ ERRADO -->
<div onclick="...">Clique</div>

<!-- ✅ CERTO -->
<button>Clique</button>

<!-- ❌ ERRADO -->
<div id="modal">Título</div>

<!-- ✅ CERTO -->
<div id="modal" role="dialog" aria-labelledby="modalTitle">
  <h2 id="modalTitle">Título</h2>
</div>
```

### ✅ Exercício 1.5.1: Tornar acessível

```html
<!DOCTYPE html>
<html>
  <body>
    <!-- Botões com aria-label -->
    <button aria-label="Alternar tema">🌙</button>
    <button aria-label="Abrir menu">☰</button>

    <!-- Modal com acessibilidade -->
    <div
      id="txModal"
      role="dialog"
      aria-hidden="true"
      aria-labelledby="txTitle"
    >
      <h2 id="txTitle">Adicionar Transação</h2>
      <form>
        <label for="txDesc">Descrição</label>
        <input id="txDesc" type="text" required />

        <button type="submit">Salvar</button>
      </form>
    </div>
  </body>
</html>
```

---

# PARTE 2: CSS Fundamental

## 2.1 - Seletores CSS

### O que são seletores?

**Dizem** qual elemento HTML você quer estilizar.

```css
/* Seletor de tag */
p {
  color: blue;
}

/* Seletor de class (.) */
.btn-primary {
  background-color: #007bff;
}

/* Seletor de id (#) */
#modal {
  display: none;
}

/* Seletor de atributo ([]) */
[data-action="add-transaction"] {
  cursor: pointer;
}

/* Combinadores */
.card .title {
  font-size: 20px;
}

/* Pseudo-classes */
button:hover {
  background-color: darkblue;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: 2px solid gold;
}
```

### ✅ Exercício 2.1.1: Estilizar com seletores

Crie `exercicio-2-1-1.html` e `exercicio-2-1-1.css`:

**HTML:**

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="exercicio-2-1-1.css" />
  </head>
  <body>
    <h1>Meus Botões</h1>

    <button class="btn primary">Primário</button>
    <button class="btn secondary">Secundário</button>
    <button data-action="delete">Deletar</button>

    <div id="modal">Este é um modal</div>
  </body>
</html>
```

**CSS:**

```css
/* Estilize todos os botões */
button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

/* Botão primário */
.btn.primary {
  background-color: #007bff;
  color: white;
}

.btn.primary:hover {
  background-color: #0056b3;
}

/* Botão secundário */
.btn.secondary {
  background-color: #6c757d;
  color: white;
}

/* Botão delete */
button[data-action="delete"] {
  background-color: #dc3545;
  color: white;
}

/* Modal */
#modal {
  display: none;
  padding: 20px;
  background-color: #f0f0f0;
}

#modal.show {
  display: block;
}
```

---

## 2.2 - Box Model

### O que é Box Model?

Todo elemento tem: **conteúdo → padding → border → margin**

```
┌─────────────────────────────────┐
│          MARGIN (externa)        │
│  ┌──────────────────────────┐   │
│  │    BORDER (borda)         │   │
│  │  ┌────────────────────┐   │   │
│  │  │ PADDING (interna)  │   │   │
│  │  │ ┌────────────────┐ │   │   │
│  │  │ │  CONTEÚDO      │ │   │   │
│  │  │ └────────────────┘ │   │   │
│  │  └────────────────────┘   │   │
│  └──────────────────────────┘   │
└─────────────────────────────────┘
```

```css
div {
  /* Conteúdo: width e height */
  width: 200px;
  height: 100px;

  /* Padding: espaço DENTRO */
  padding: 20px;
  /* ou específico */
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;

  /* Border: borda */
  border: 2px solid black;

  /* Margin: espaço FORA */
  margin: 30px;
}
```

### ✅ Exercício 2.2.1: Entender Box Model

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .card {
        width: 200px;
        padding: 20px;
        border: 2px solid blue;
        margin: 30px;
        background-color: lightblue;
      }

      .card-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .card-text {
        font-size: 14px;
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="card-title">Meu Card</div>
      <div class="card-text">Este é um exemplo de card com box model.</div>
    </div>
  </body>
</html>
```

---

## 2.3 - Flexbox

### O que é Flexbox?

Forma **fácil** de alinhar elementos em linha ou coluna.

```css
.container {
  display: flex;

  /* Direção: linha ou coluna */
  flex-direction: row; /* padrão: horizontal */
  /* flex-direction: column;    */ /* vertical */

  /* Espaçamento entre itens */
  justify-content: space-between; /* distribuir horizontalmente */
  /* justify-content: center; */
  /* justify-content: flex-start; */

  /* Alinhamento vertical */
  align-items: center; /* alinhar verticalmente */
  /* align-items: flex-start; */
  /* align-items: flex-end; */

  /* Espaçamento entre itens */
  gap: 10px;
}

.item {
  flex: 1; /* ocupar espaço igual */
}
```

### ✅ Exercício 2.3.1: Usar Flexbox

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        margin: 0;
        font-family: Arial;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #333;
        color: white;
      }

      .logo {
        font-size: 24px;
        font-weight: bold;
      }

      nav {
        display: flex;
        gap: 20px;
      }

      nav a {
        color: white;
        text-decoration: none;
      }

      nav a:hover {
        color: #ffd700;
      }

      .buttons {
        display: flex;
        gap: 10px;
      }

      button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <header>
      <div class="logo">Aurevo Finance</div>

      <nav>
        <a href="/">Início</a>
        <a href="/dashboard">Dashboard</a>
      </nav>

      <div class="buttons">
        <button>Login</button>
        <button>Cadastro</button>
      </div>
    </header>
  </body>
</html>
```

---

## 2.4 - CSS Variables (Custom Properties)

### Por que CSS Variables?

Para **reutilizar valores** (cores, espaçamento, etc) sem repetir.

```css
/* Definir variáveis (no :root para usar em todo site) */
:root {
  /* Cores */
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --danger-color: #dc3545;
  --success-color: #28a745;

  /* Espaçamento */
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;

  /* Fontes */
  --font-size-sm: 12px;
  --font-size-md: 16px;
  --font-size-lg: 24px;

  /* Outras */
  --border-radius: 5px;
  --transition: 0.2s ease;
}

/* Usar as variáveis */
button.primary {
  background-color: var(--primary-color);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  transition: all var(--transition);
}

button.primary:hover {
  background-color: #0056b3;
}

/* Tema claro: override as variáveis */
@media (prefers-color-scheme: light) {
  :root {
    --primary-color: #0056b3;
    --secondary-color: #495057;
  }
}
```

### ✅ Exercício 2.4.1: Usar CSS Variables

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      :root {
        --primary: #3498db;
        --secondary: #e74c3c;
        --success: #2ecc71;
        --padding: 15px;
        --radius: 8px;
      }

      body {
        font-family: Arial;
        margin: 0;
        padding: var(--padding);
      }

      .card {
        padding: var(--padding);
        border-radius: var(--radius);
        margin-bottom: var(--padding);
      }

      .card.primary {
        background-color: var(--primary);
        color: white;
      }

      .card.secondary {
        background-color: var(--secondary);
        color: white;
      }

      .card.success {
        background-color: var(--success);
        color: white;
      }

      button {
        background-color: var(--primary);
        color: white;
        padding: var(--padding);
        border: none;
        border-radius: var(--radius);
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="card primary">Card Primário</div>
    <div class="card secondary">Card Secundário</div>
    <div class="card success">Card Sucesso</div>

    <button>Clique em mim</button>
  </body>
</html>
```

---

## 2.5 - Responsive Design (@media queries)

### Por que responsive?

Para o site funcionar bem em **celular, tablet e desktop**.

```css
/* Mobile first (padrão para celular) */
.container {
  width: 100%;
  padding: 10px;
}

.button {
  width: 100%;
  padding: 15px;
}

/* Tablet (640px ou mais) */
@media (min-width: 640px) {
  .container {
    width: 80%;
    margin: 0 auto;
    padding: 15px;
  }

  .button {
    width: auto;
    padding: 10px 20px;
  }
}

/* Desktop (1024px ou mais) */
@media (min-width: 1024px) {
  .container {
    width: 70%;
    max-width: 1200px;
  }
}
```

### ✅ Exercício 2.5.1: Design responsivo

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin: 0;
        font-family: Arial;
      }

      .grid {
        display: grid;
        gap: 20px;
        padding: 20px;
        grid-template-columns: 1fr; /* Mobile: 1 coluna */
      }

      /* Tablet */
      @media (min-width: 640px) {
        .grid {
          grid-template-columns: 1fr 1fr; /* 2 colunas */
        }
      }

      /* Desktop */
      @media (min-width: 1024px) {
        .grid {
          grid-template-columns: 1fr 1fr 1fr; /* 3 colunas */
        }
      }

      .card {
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 8px;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
      <div class="card">Card 4</div>
      <div class="card">Card 5</div>
      <div class="card">Card 6</div>
    </div>
  </body>
</html>
```

---

# PARTE 3: JavaScript Básico

## 3.1 - Tipos de Dados

### Quais são os tipos?

```javascript
// String (texto)
const nome = "João"
const msg = "Olá"

// Number (número)
const idade = 25
const preco = 19.99
const negativo = -10

// Boolean (verdadeiro/falso)
const ativo = true
const inativo = false

// Array (lista)
const numeros = [1, 2, 3, 4]
const frutas = ["maçã", "banana", "laranja"]
const misto = [1, "texto", true, 3.14]

// Object (objeto - estrutura chave-valor)
const pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
}

// null e undefined
const vazio = null
let indefinido = undefined
```

### ✅ Exercício 3.1.1: Tipos de dados

Abra o console (F12) e experimente:

```javascript
// Strings
const usuario = "Maria"
console.log(usuario)
console.log(typeof usuario) // "string"

// Numbers
const saldo = 1000.5
console.log(saldo)
console.log(typeof saldo) // "number"

// Boolean
const logado = true
console.log(logado)
console.log(typeof logado) // "boolean"

// Array
const transacoes = [100, 200, 300]
console.log(transacoes)
console.log(typeof transacoes) // "object"
console.log(transacoes.length) // 3

// Object
const conta = {
  titular: "João",
  saldo: 5000,
  ativo: true,
}
console.log(conta.titular) // "João"
console.log(conta.saldo) // 5000
```

---

## 3.2 - Variáveis

### const vs let vs var

```javascript
// ✅ const: constante (não pode mudar)
const nome = "João"
// nome = "Maria"  // ❌ ERRO!

// ✅ let: pode mudar
let idade = 25
idade = 26 // ✅ OK
console.log(idade) // 26

// ❌ var: old style (evite)
var dinheiro = 1000 // não use isso

// ✅ REGRA: use const por padrão, let se precisar mudar
```

### ✅ Exercício 3.2.1: Variáveis

```javascript
const Usuario = "Alice"
console.log(Usuario)

let saldo = 1000
console.log(saldo)

saldo = saldo + 500 // saldo agora é 1500
console.log(saldo)

let saldo2 = 2000
saldo2 += 200 // mesma coisa que saldo2 = saldo2 + 200
console.log(saldo2) // 2200
```

---

## 3.3 - Operadores

### Aritméticos

```javascript
const a = 10
const b = 3

console.log(a + b) // 13  (soma)
console.log(a - b) // 7   (subtração)
console.log(a * b) // 30  (multiplicação)
console.log(a / b) // 3.33... (divisão)
console.log(a % b) // 1   (resto)
console.log(a ** b) // 1000 (potência)
```

### Comparação

```javascript
const x = 5

console.log(x == 5) // true (igual)
console.log(x === "5") // false (tipo diferente)
console.log(x !== 5) // false (diferente)
console.log(x > 3) // true (maior)
console.log(x >= 5) // true (maior ou igual)
console.log(x < 10) // true (menor)
console.log(x <= 5) // true (menor ou igual)
```

### Lógicos

```javascript
const logado = true
const admin = false

console.log(logado && admin) // false (E - ambos true?)
console.log(logado || admin) // true  (OU - algum true?)
console.log(!logado) // false (NÃO - inverte)

// Exemplo prático:
if (logado && admin) {
  console.log("Você é admin logado")
} else {
  console.log("Você não é admin")
}
```

### ✅ Exercício 3.3.1: Operadores

```javascript
const preco = 100
const desconto = 20

const precoFinal = preco - desconto
console.log(precoFinal) // 80

const idade = 18
const temCnh = true

if (idade >= 18 && temCnh) {
  console.log("Pode dirigir")
} else {
  console.log("Não pode dirigir")
}
```

---

## 3.4 - Strings

### Métodos de String

```javascript
const texto = "JavaScript"

console.log(texto.length) // 10 (tamanho)
console.log(texto.toUpperCase()) // "JAVASCRIPT" (maiúscula)
console.log(texto.toLowerCase()) // "javascript" (minúscula)
console.log(texto.includes("Script")) // true (contém?)
console.log(texto.indexOf("Script")) // 4 (posição)
console.log(texto.slice(0, 4)) // "Java" (pega parte)
console.log(texto.replace("Java", "Type")) // "TypeScript"
console.log(texto.split("")) // ["J","a","v","a",...] (separa)

// Template strings (com interpolação)
const nome = "João"
const idade = 25

console.log("Olá, " + nome + "!") // concatenação tradicional
console.log(`Olá, ${nome}!`) // template string (mais fácil!)
console.log(`${nome} tem ${idade} anos`)
```

### ✅ Exercício 3.4.1: Strings

```javascript
const email = "usuario@example.com"
const senha = "senha123"

if (email.includes("@")) {
  console.log("Email válido")
}

if (senha.length >= 8) {
  console.log("Senha forte")
} else {
  console.log("Senha fraca (mínimo 8 caracteres)")
}

// Formatação monetária
const valor = 1000
console.log(`R$ ${valor.toFixed(2)}`) // "R$ 1000.00"
```

---

## 3.5 - Arrays

### Métodos de Array

```javascript
const numeros = [10, 20, 30, 40]

// Acessar elementos
console.log(numeros[0]) // 10 (primeira posição)
console.log(numeros.length) // 4 (tamanho)

// Adicionar elementos
numeros.push(50) // adiciona no final: [10, 20, 30, 40, 50]
numeros.unshift(5) // adiciona no início: [5, 10, 20, 30, 40, 50]

// Remover elementos
numeros.pop() // remove último
numeros.shift() // remove primeiro

// Encontrar elementos
console.log(numeros.includes(20)) // true (contém?)
console.log(numeros.indexOf(20)) // índice do elemento
console.log(numeros.find((n) => n > 25)) // 30 (primeiro que atende a condição)

// Transformar array
const dobrados = numeros.map((n) => n * 2) // [20, 40, 60, 80]
const pares = numeros.filter((n) => n % 2 === 0) // elementos pares
const soma = numeros.reduce((total, n) => total + n, 0) // soma todos

// Iterar
numeros.forEach((n) => console.log(n)) // imprime cada elemento
```

### ✅ Exercício 3.5.1: Arrays

```javascript
const transacoes = [100, -50, 200, -30, 150]

// Somar todas
const total = transacoes.reduce((sum, tx) => sum + tx, 0)
console.log(total) // 370

// Apenas despesas (negativas)
const despesas = transacoes.filter((tx) => tx < 0)
console.log(despesas) // [-50, -30]

// Converter em positivos
const despesasPositivas = despesas.map((tx) => Math.abs(tx))
console.log(despesasPositivas) // [50, 30]
```

---

## 3.6 - Objetos

### Criar e acessar objetos

```javascript
// Criar objeto
const conta = {
  titular: "João",
  saldo: 5000,
  ativo: true,
}

// Acessar propriedades
console.log(conta.titular) // "João" (ponto)
console.log(conta["saldo"]) // 5000 (colchetes)

// Adicionar propriedade
conta.limite = 1000

// Modificar propriedade
conta.saldo = 6000

// Deletar propriedade
delete conta.ativo

// Verificar se existe
console.log("titular" in conta) // true

// Pegar todas as chaves
console.log(Object.keys(conta)) // ["titular", "saldo", ...]

// Pegar todos os valores
console.log(Object.values(conta)) // ["João", 6000, ...]
```

### ✅ Exercício 3.6.1: Objetos

```javascript
const transacao = {
  id: 1,
  data: "2025-01-10",
  descricao: "Salário",
  valor: 3000,
  tipo: "entrada",
}

console.log(transacao.descricao) // "Salário"
console.log(transacao.valor) // 3000

// Modificar
transacao.valor = 3500

// Adicionar campo
transacao.categoria = "renda"

console.log(transacao)
```

---

## 3.7 - if/else e switch

### Condicional if

```javascript
const idade = 18

if (idade >= 18) {
  console.log("Maior de idade")
} else if (idade >= 13) {
  console.log("Adolescente")
} else {
  console.log("Criança")
}

// Operador ternário (if compacto)
const categoria = idade >= 18 ? "adulto" : "menor"
console.log(categoria)
```

### Switch

```javascript
const tipo = "entrada"

switch (tipo) {
  case "entrada":
    console.log("É uma receita")
    break
  case "saida":
    console.log("É uma despesa")
    break
  default:
    console.log("Tipo desconhecido")
}
```

### ✅ Exercício 3.7.1: Condicionais

```javascript
const saldo = 500
const valorSaque = 600

if (valorSaque > saldo) {
  console.log("Saldo insuficiente")
} else {
  console.log("Saque realizado")
}

// Switch com categorias
const categoria = "alimentacao"

switch (categoria) {
  case "alimentacao":
    console.log("Categoria: Alimentação")
    break
  case "transporte":
    console.log("Categoria: Transporte")
    break
  default:
    console.log("Categoria: Outros")
}
```

---

## 3.8 - Loops

### for

```javascript
// Repetir 5 vezes
for (let i = 0; i < 5; i++) {
  console.log(i) // imprime: 0, 1, 2, 3, 4
}

// Iterar array
const frutas = ["maçã", "banana", "laranja"]
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}
```

### while

```javascript
let contador = 0
while (contador < 5) {
  console.log(contador)
  contador++
}
```

### forEach (recomendado)

```javascript
const numeros = [10, 20, 30]

numeros.forEach((numero, indice) => {
  console.log(`Posição ${indice}: ${numero}`)
})
```

### ✅ Exercício 3.8.1: Loops

```javascript
const transacoes = [100, -50, 200, -30, 150]

// Somar com for
let total1 = 0
for (let i = 0; i < transacoes.length; i++) {
  total1 += transacoes[i]
}
console.log(total1) // 370

// Somar com forEach
let total2 = 0
transacoes.forEach((tx) => {
  total2 += tx
})
console.log(total2) // 370

// Somar com reduce (melhor forma)
const total3 = transacoes.reduce((sum, tx) => sum + tx, 0)
console.log(total3) // 370
```

---

# PARTE 4: DOM Manipulation

## 4.1 - Selecionando Elementos

### querySelector e querySelectorAll

```javascript
// Selecionar 1 elemento (primeiro que encontrar)
const botao = document.querySelector("button")
const botaoPrimario = document.querySelector(".btn-primary")
const modal = document.querySelector("#myModal")
const acaoAdicionar = document.querySelector('[data-action="add-transaction"]')

// Selecionar vários elementos (retorna lista)
const todosOsBotoes = document.querySelectorAll("button")
const todosOsCards = document.querySelectorAll(".card")

// Iterar sobre todos
document.querySelectorAll("button").forEach((btn) => {
  console.log(btn.textContent)
})
```

### ✅ Exercício 4.1.1: Selecionar elementos

```html
<!DOCTYPE html>
<html>
  <body>
    <button class="btn primary">Botão 1</button>
    <button class="btn secondary">Botão 2</button>
    <button data-action="delete">Deletar</button>

    <div id="myModal">Modal</div>
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>

    <script>
      // Selecione e teste:
      const btn1 = document.querySelector(".btn.primary")
      console.log(btn1)

      const todosOsCards = document.querySelectorAll(".card")
      console.log(todosOsCards.length) // 2

      const botaoDelete = document.querySelector('[data-action="delete"]')
      console.log(botaoDelete.textContent) // "Deletar"
    </script>
  </body>
</html>
```

---

## 4.2 - Ouvir Eventos

### addEventListener

```javascript
const botao = document.querySelector("button")

// Ouvir clique
botao.addEventListener("click", () => {
  console.log("Clicou!")
})

// Ouvir com informação do evento
botao.addEventListener("click", (evento) => {
  console.log(evento) // objeto com informações
  console.log(evento.target) // o elemento clicado
})

// Outros eventos
botao.addEventListener("mouseover", () => {
  console.log("Mouse sobre o botão")
})

botao.addEventListener("mouseout", () => {
  console.log("Mouse saiu do botão")
})

// Input
const input = document.querySelector("input")
input.addEventListener("change", (e) => {
  console.log("Valor: " + e.target.value)
})

input.addEventListener("input", (e) => {
  console.log("Digitando: " + e.target.value)
})

// Formulário
const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault() // impede envio padrão
  console.log("Formulário enviado!")
})
```

### ✅ Exercício 4.2.1: Ouvir eventos

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      button {
        padding: 10px 20px;
        cursor: pointer;
      }

      input {
        padding: 8px;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <button id="myBtn">Clique em mim</button>
    <input type="text" placeholder="Digite aqui" />

    <script>
      const btn = document.querySelector("#myBtn")
      const input = document.querySelector("input")

      btn.addEventListener("click", () => {
        console.log("Botão clicado!")
      })

      input.addEventListener("input", (e) => {
        console.log("Você digitou: " + e.target.value)
      })
    </script>
  </body>
</html>
```

---

## 4.3 - Manipular Conteúdo

### innerHTML, textContent, value

```javascript
const div = document.querySelector("#myDiv")
const input = document.querySelector("input")

// Ler conteúdo
console.log(div.innerHTML) // HTML dentro
console.log(div.textContent) // apenas texto

// Escrever conteúdo
div.textContent = "Novo texto"
div.innerHTML = "<p>Novo HTML</p>"

// Input
console.log(input.value) // ler valor
input.value = "Novo valor" // escrever valor
```

### ✅ Exercício 4.3.1: Manipular conteúdo

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="resultado">Clique no botão</div>
    <input type="text" id="nomeInput" />
    <button id="btn">Enviar</button>

    <script>
      const btn = document.querySelector("#btn")
      const input = document.querySelector("#nomeInput")
      const resultado = document.querySelector("#resultado")

      btn.addEventListener("click", () => {
        const nome = input.value
        resultado.textContent = `Olá, ${nome}!`
        input.value = "" // limpar input
      })
    </script>
  </body>
</html>
```

---

## 4.4 - Manipular Classes CSS

### classList

```javascript
const elemento = document.querySelector("#myElement")

// Adicionar classe
elemento.classList.add("ativo")

// Remover classe
elemento.classList.remove("ativo")

// Alternar classe
elemento.classList.toggle("ativo") // adiciona se não tem, remove se tem

// Verificar se tem classe
if (elemento.classList.contains("ativo")) {
  console.log("Elemento ativo!")
}

// Múltiplas operações
elemento.classList.add("class1", "class2", "class3")
elemento.classList.remove("class1", "class2")
```

### ✅ Exercício 4.4.1: classList

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .card {
        padding: 20px;
        background-color: lightgray;
        margin: 10px;
      }

      .card.active {
        background-color: lightgreen;
        font-weight: bold;
      }

      .card.hidden {
        display: none;
      }
    </style>
  </head>
  <body>
    <button id="toggleBtn">Ativar/Desativar</button>
    <button id="hideBtn">Esconder</button>

    <div class="card">Elemento 1</div>
    <div class="card">Elemento 2</div>

    <script>
      const toggleBtn = document.querySelector("#toggleBtn")
      const hideBtn = document.querySelector("#hideBtn")
      const cards = document.querySelectorAll(".card")

      toggleBtn.addEventListener("click", () => {
        cards.forEach((card) => {
          card.classList.toggle("active")
        })
      })

      hideBtn.addEventListener("click", () => {
        cards[0].classList.add("hidden")
      })
    </script>
  </body>
</html>
```

---

## 4.5 - Atributos

### getAttribute, setAttribute

```javascript
const botao = document.querySelector("button")

// Ler atributo
const acao = botao.getAttribute("data-action")
console.log(acao) // valor do atributo

// Escrever atributo
botao.setAttribute("data-action", "nova-acao")

// Deletar atributo
botao.removeAttribute("data-action")

// Verificar se existe
if (botao.hasAttribute("data-action")) {
  console.log("Tem atributo data-action")
}
```

### ✅ Exercício 4.5.1: Atributos

```html
<!DOCTYPE html>
<html>
  <body>
    <button data-action="add-transaction">Adicionar</button>
    <button data-action="edit">Editar</button>
    <button data-action="delete">Deletar</button>

    <script>
      const botoes = document.querySelectorAll("button")

      botoes.forEach((btn) => {
        btn.addEventListener("click", () => {
          const acao = btn.getAttribute("data-action")
          console.log(`Ação: ${acao}`)

          // Mude o atributo
          btn.setAttribute("disabled", "true")
        })
      })
    </script>
  </body>
</html>
```

---

## 4.6 - Criar e Remover Elementos

### createElement, appendChild, removeChild

```javascript
// Criar elemento
const novoParagrafo = document.createElement("p")
novoParagrafo.textContent = "Novo parágrafo"

// Adicionar à página
document.body.appendChild(novoParagrafo)

// Remover elemento
novoParagrafo.remove()

// Exemplo mais prático:
const lista = document.querySelector("ul")
const novoItem = document.createElement("li")
novoItem.textContent = "Novo item"
lista.appendChild(novoItem)
```

### ✅ Exercício 4.6.1: Criar elementos

```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="lista">
      <li>Item 1</li>
    </ul>

    <input type="text" id="novoItemInput" />
    <button id="addBtn">Adicionar</button>

    <script>
      const lista = document.querySelector("#lista")
      const input = document.querySelector("#novoItemInput")
      const btn = document.querySelector("#addBtn")

      btn.addEventListener("click", () => {
        const texto = input.value

        if (texto.trim() !== "") {
          const novoItem = document.createElement("li")
          novoItem.textContent = texto
          lista.appendChild(novoItem)
          input.value = ""
        }
      })
    </script>
  </body>
</html>
```

---

# PARTE 5: Funções Avançadas

## 5.1 - Arrow Functions

### O que são Arrow Functions?

```javascript
// Função normal
function somar(a, b) {
  return a + b
}

// Arrow function (mesma coisa)
const somar2 = (a, b) => {
  return a + b
}

// Sem chaves (implícita)
const somar3 = (a, b) => a + b

// 1 parâmetro (parênteses opcionais)
const dobrar = (x) => x * 2

// Sem parâmetros
const hello = () => "Olá!"

// Chamando
console.log(somar(5, 3)) // 8
console.log(somar2(5, 3)) // 8
console.log(somar3(5, 3)) // 8
console.log(dobrar(5)) // 10
console.log(hello()) // "Olá!"
```

### ✅ Exercício 5.1.1: Arrow Functions

```javascript
// Converter para arrow functions:

// 1. Multiplicar
const multiplicar = (a, b) => a * b
console.log(multiplicar(3, 4)) // 12

// 2. Verificar se é par
const ehPar = (n) => n % 2 === 0
console.log(ehPar(4)) // true

// 3. Saudar
const saudar = (nome) => `Olá, ${nome}!`
console.log(saudar("Maria")) // "Olá, Maria!"
```

---

## 5.2 - Callbacks

### O que é Callback?

É uma **função passada como parâmetro** para outra função.

```javascript
// Função que recebe um callback
function processar(valor, callback) {
  const resultado = callback(valor)
  console.log(resultado)
}

// Usando callback
processar(5, (x) => x * 2) // imprime: 10
processar(5, (x) => x + 10) // imprime: 15

// Exemplo real: addEventListener (o callback é a função que roda ao clicar)
const botao = document.querySelector("button")
botao.addEventListener("click", () => {
  // ← callback
  console.log("Clicou!")
})

// Exemplo: setTimeout (callback roda após tempo)
setTimeout(() => {
  // ← callback
  console.log("Passaram 2 segundos!")
}, 2000)
```

### ✅ Exercício 5.2.1: Callbacks

```javascript
// Função que calcula e passa resultado para callback
function calcularComCallback(a, b, operacao) {
  const resultado = operacao(a, b)
  console.log(`Resultado: ${resultado}`)
}

// Usando com diferentes callbacks
calcularComCallback(10, 5, (x, y) => x + y) // Resultado: 15
calcularComCallback(10, 5, (x, y) => x - y) // Resultado: 5
calcularComCallback(10, 5, (x, y) => x * y) // Resultado: 50
```

---

## 5.3 - map, filter, reduce

### map - Transformar array

```javascript
const numeros = [1, 2, 3, 4]

// Dobrar cada número
const dobrados = numeros.map((n) => n * 2)
console.log(dobrados) // [2, 4, 6, 8]

// Converter para string
const strings = numeros.map((n) => `número: ${n}`)
console.log(strings) // ["número: 1", "número: 2", ...]
```

### filter - Filtrar array

```javascript
const numeros = [1, 2, 3, 4, 5, 6]

// Apenas pares
const pares = numeros.filter((n) => n % 2 === 0)
console.log(pares) // [2, 4, 6]

// Maiores que 3
const maiores = numeros.filter((n) => n > 3)
console.log(maiores) // [4, 5, 6]
```

### reduce - Agregar array

```javascript
const numeros = [1, 2, 3, 4]

// Somar todos
const soma = numeros.reduce((total, n) => total + n, 0)
console.log(soma) // 10

// Multiplicar todos
const produto = numeros.reduce((total, n) => total * n, 1)
console.log(produto) // 24
```

### ✅ Exercício 5.3.1: map, filter, reduce

```javascript
const transacoes = [
  { descricao: "Salário", valor: 3000, tipo: "entrada" },
  { descricao: "Mercado", valor: 200, tipo: "saida" },
  { descricao: "Bonus", valor: 500, tipo: "entrada" },
  { descricao: "Aluguel", valor: 1200, tipo: "saida" },
]

// map: pegar só descrições e valores
const descricoes = transacoes.map((tx) => `${tx.descricao}: R$ ${tx.valor}`)
console.log(descricoes)

// filter: apenas entradas
const entradas = transacoes.filter((tx) => tx.tipo === "entrada")
console.log(entradas)

// reduce: somar valores das entradas
const totalEntradas = entradas.reduce((total, tx) => total + tx.valor, 0)
console.log(totalEntradas) // 3500
```

---

## 5.4 - find e findIndex

### find - Encontrar 1 elemento

```javascript
const usuarios = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "Pedro" },
]

// Encontrar usuário com id 2
const usuario = usuarios.find((u) => u.id === 2)
console.log(usuario) // { id: 2, nome: "Maria" }

// Encontrar primeiro número > 5
const numeros = [1, 3, 7, 2, 9]
const primeiro = numeros.find((n) => n > 5)
console.log(primeiro) // 7
```

### findIndex - Posição do elemento

```javascript
const transacoes = [
  { id: 1, valor: 100 },
  { id: 2, valor: 200 },
  { id: 3, valor: 150 },
]

// Encontrar posição
const indice = transacoes.findIndex((tx) => tx.id === 2)
console.log(indice) // 1 (segunda posição)

// Deletar elemento
transacoes.splice(indice, 1)
console.log(transacoes) // sem a transação id 2
```

### ✅ Exercício 5.4.1: find e findIndex

```javascript
const contas = [
  { id: 1, titular: "João", saldo: 1000 },
  { id: 2, titular: "Maria", saldo: 2000 },
  { id: 3, titular: "Pedro", saldo: 500 },
]

// Encontrar conta de Maria
const contaMaria = contas.find((c) => c.titular === "Maria")
console.log(contaMaria) // { id: 2, titular: "Maria", saldo: 2000 }

// Encontrar posição de Pedro
const indicePedro = contas.findIndex((c) => c.titular === "Pedro")
console.log(indicePedro) // 2

// Atualizar saldo de Pedro
contas[indicePedro].saldo += 500
console.log(contas[indicePedro]) // saldo agora é 1000
```

---

# PARTE 6: Arquitetura & Modularização

## 6.1 - export e import

### Por que módulos?

Para **separar** código em arquivos diferentes e **reutilizar**.

### Criar um módulo

**utils.js:**

```javascript
export function somar(a, b) {
  return a + b
}

export const PI = 3.14

export const subtrair = (a, b) => a - b
```

### Usar um módulo

**main.js:**

```javascript
import { somar, PI, subtrair } from "./utils.js"

console.log(somar(5, 3)) // 8
console.log(PI) // 3.14
console.log(subtrair(10, 3)) // 7
```

### HTML:

```html
<script type="module" src="main.js"></script>
```

### ✅ Exercício 6.1.1: Criar módulos

**formatting.js:**

```javascript
export function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2)}`
}

export function formatarData(data) {
  return new Date(data).toLocaleDateString("pt-BR")
}
```

**main.js:**

```javascript
import { formatarMoeda, formatarData } from "./formatting.js"

console.log(formatarMoeda(1000)) // "R$ 1000.00"
console.log(formatarData("2025-01-16")) // "16/01/2025"
```

---

## 6.2 - Estrutura de Pastas

### Organização profissional

```
projeto/
├── index.html
├── index.js              (arquivo principal)
├── css/
│   ├── main.css         (import central)
│   ├── base/
│   │   ├── _variables.css
│   │   ├── _reset.css
│   │   └── _utilities.css
│   ├── components/
│   │   ├── _buttons.css
│   │   └── _cards.css
│   └── pages/
│       ├── _home.css
│       └── _dashboard.css
│
├── js/
│   ├── modules/         (lógica de negócio)
│   │   ├── theme.js
│   │   ├── modal.js
│   │   └── dashboard.js
│   │
│   └── utils/           (funções auxiliares)
│       ├── dom.js
│       └── formatting.js
│
└── learning-path/       (documentação)
    └── ROADMAP.md
```

---

## 6.3 - Padrão do seu projeto

### Como você fez no Aurevo Finance:

**index.html:**

```html
<link rel="stylesheet" href="css/main.css" />
<script type="module" src="index.js"></script>
<script type="module" src="assets/dashboard.js"></script>
```

**index.js (entrada principal):**

```javascript
import { initTheme } from "./js/modules/theme.js"
import { initNavigation } from "./js/modules/navigation.js"
import { initFooter } from "./js/modules/footer.js"

initTheme()
initNavigation()
initFooter()
```

**js/modules/theme.js (módulo específico):**

```javascript
export function initTheme() {
  // lógica de tema
}
```

**js/utils/dom.js (funções auxiliares):**

```javascript
export function safeSelect(selector) {
  return document.querySelector(selector)
}

export function showToast(message) {
  // mostra mensagem
}
```

**css/main.css (import central):**

```css
@import "./base/_variables.css";
@import "./base/_reset.css";
@import "./components/_buttons.css";
```

---

## 6.4 - Boas Práticas

### ✅ DO's

```javascript
// 1. Use const por padrão
const nome = "João"

// 2. Nomes descritivos
const formatarValor = (valor) => `R$ ${valor.toFixed(2)}`

// 3. Funções pequenas com 1 responsabilidade
export function abrirModal() { ... }
export function fecharModal() { ... }
export function validarFormulario() { ... }

// 4. Comentários quando necessário
// Calcula o saldo considerando entradas e saídas
const calcularSaldo = (entradas, saidas) => entradas - saidas

// 5. Use arrow functions para callbacks
botoes.forEach(btn => {
  btn.addEventListener("click", () => { ... })
})
```

### ❌ DON'Ts

```javascript
// 1. Não use var
var nome = "João" // ❌

// 2. Não use nomes genéricos
const x = 5 // ❌
const calcular = (a) => a * 2 // ❌ - calcular o quê?

// 3. Não misture responsabilidades
export function fazerTudo() {
  // HTML
  // CSS
  // Lógica
  // API
}

// 4. Não deixe console.log no código
console.log("teste") // ❌ (remove antes de entregar)

// 5. Não modifique globais
window.minhaVariavel = {} // ❌
```

---

## 🎓 Resumo do Roadmap

```
FUNDAÇÃO (2-3 semanas)
├─ HTML: Estrutura, atributos, formulários, semântica
├─ CSS: Seletores, Box Model, Flexbox, Variables, Responsive
└─ JavaScript Básico: Tipos, variáveis, operadores, loops

INTERMEDIÁRIO (2-3 semanas)
├─ DOM: Selecionar, ouvir, manipular conteúdo, classes
├─ Funções: Arrow functions, callbacks, map/filter/reduce
└─ Eventos: click, input, submit, change

AVANÇADO (1-2 semanas)
├─ Modularização: export/import, estrutura de pastas
├─ Boas práticas: nomes, responsabilidades, organização
└─ Arquitetura: padrões profissionais
```

---

## 📚 Recursos Recomendados

| Tópico            | Recurso          | Tempo      |
| ----------------- | ---------------- | ---------- |
| HTML & CSS        | MDN Web Docs     | 1 semana   |
| JavaScript Básico | JavaScript.info  | 2 semanas  |
| DOM               | MDN + Praticar   | 1 semana   |
| Funções           | freeCodeCamp     | 1 semana   |
| Projetos          | GitHub + Codepen | 2+ semanas |

---

## 🚀 Próximos Passos

1. **Escolha um tópico** que não entendeu bem
2. **Pesquise** em: MDN, JavaScript.info, freeCodeCamp
3. **Faça um exemplo** simples em um arquivo novo
4. **Aplique** no projeto Aurevo

**Boa sorte! 🎓**
