// Observação:
// O painel esquerdo foi removido do layout. As funções/seletores
// relacionados a esse painel foram limpos. A inicialização principal
// do dashboard (população de summary, tabela e ações rápidas) está
// consolidada mais abaixo e é executada quando o DOM estiver pronto.

/*
  Funções auxiliares para a seção de Resumo Financeiro
  - Mantemos aqui um preenchimento com dados fictícios para dar sensação
    de produto real ao carregar a página.
  - Futuramente, removeremos este placeholder e chamaremos a API:
      fetch('/api/summary').then(r => r.json()).then(populateSummaryFromAPI)
*/
function formatCurrencyBR(value) {
  // formata número para R$ 1.234,56 (pt-BR)
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

function populateSummary(data) {
  // dados fictícios se nenhum objeto for passado
  const fake = data || {
    balance: 5234.5,
    incomeMonth: 12400.0,
    expenseMonth: 7165.5,
    pendingBills: 3,
  }

  // guarda estado global mínimo para facilitar atualizações posteriores
  window.AurevoData = window.AurevoData || {}
  window.AurevoData.summary = fake

  // atualiza elementos que usam data-key, conforme markup em dashboard.html
  updateSummaryDOM()
}

// atualiza apenas o DOM para os elementos do resumo a partir de AurevoData.summary
function updateSummaryDOM() {
  const summary = (window.AurevoData && window.AurevoData.summary) || {}
  Object.keys(summary).forEach((key) => {
    const el = document.querySelector(`[data-key="${key}"]`)
    if (!el) return
    const valueEl = el.querySelector(".value")
    if (!valueEl) return

    if (typeof summary[key] === "number") {
      if (key === "pendingBills") {
        valueEl.textContent = String(summary[key])
      } else {
        valueEl.textContent = formatCurrencyBR(summary[key]).replace(
          /\s?R\$\s?/,
          ""
        )
      }
    } else {
      valueEl.textContent = String(summary[key])
    }
  })
}

/* ---------------------------------------------------------------
   Transactions list: populate table with fake data and attach actions
   - A função create linhas para tbody .transactions-body
   - As actions são simuladas (visualizar / deletar) e usam toast
   - No futuro, substituir populateTransactions(getFromAPI())
   --------------------------------------------------------------- */
function formatDateBR(iso) {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString("pt-BR")
  } catch (e) {
    return iso
  }
}

function populateTransactions(data) {
  const fake = data || [
    {
      id: 1,
      date: "2026-01-12",
      desc: "Salário",
      category: "Renda",
      type: "income",
      value: 2400,
    },
    {
      id: 2,
      date: "2026-01-10",
      desc: "Aluguel",
      category: "Moradia",
      type: "expense",
      value: 1200,
    },
    {
      id: 3,
      date: "2026-01-08",
      desc: "Supermercado",
      category: "Alimentação",
      type: "expense",
      value: 350.5,
    },
    {
      id: 4,
      date: "2026-01-05",
      desc: "Freelance",
      category: "Renda",
      type: "income",
      value: 800,
    },
    {
      id: 5,
      date: "2026-01-02",
      desc: "Internet",
      category: "Serviços",
      type: "expense",
      value: 120,
    },
  ]

  // guarda lista no estado global para facilitar adições/removals posteriores
  window.AurevoData = window.AurevoData || {}
  window.AurevoData.transactions = fake

  const tbody = document.querySelector(".transactions-body")
  if (!tbody) return

  // gera as linhas HTML de forma simples e sem innerHTML perigoso (usamos template)
  tbody.innerHTML = ""
  fake.forEach((tx) => {
    const tr = document.createElement("tr")
    tr.setAttribute("data-id", tx.id)

    const tdDate = document.createElement("td")
    tdDate.textContent = formatDateBR(tx.date)

    const tdDesc = document.createElement("td")
    tdDesc.textContent = tx.desc

    const tdCat = document.createElement("td")
    tdCat.textContent = tx.category

    const tdType = document.createElement("td")
    tdType.textContent = tx.type === "income" ? "Entrada" : "Saída"

    const tdVal = document.createElement("td")
    tdVal.className = tx.type === "income" ? "pos" : "neg"
    tdVal.textContent = formatCurrencyBR(tx.value)

    const tdActions = document.createElement("td")
    tdActions.className = "tx-actions"
    // view button
    const btnView = document.createElement("button")
    btnView.className = "btn small"
    btnView.textContent = "Ver"
    btnView.setAttribute("data-action", "view")
    // delete button
    const btnDel = document.createElement("button")
    btnDel.className = "btn small"
    btnDel.textContent = "Excluir"
    btnDel.setAttribute("data-action", "delete")

    tdActions.appendChild(btnView)
    tdActions.appendChild(btnDel)

    tr.appendChild(tdDate)
    tr.appendChild(tdDesc)
    tr.appendChild(tdCat)
    tr.appendChild(tdType)
    tr.appendChild(tdVal)
    tr.appendChild(tdActions)
    tbody.appendChild(tr)
  })

  // after rendering, attach handlers for action buttons and filter
  attachTransactionActions()
  attachTransactionFilter()
}

function attachTransactionActions() {
  const tbody = document.querySelector(".transactions-body")
  if (!tbody) return
  tbody.querySelectorAll("button[data-action]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const action = btn.getAttribute("data-action")
      const tr = btn.closest("tr")
      const id = tr && tr.getAttribute("data-id")
      if (action === "view") {
        showQuickToast("Visualizar transação (simulado): " + id)
      } else if (action === "delete") {
        // simula remoção
        tr.remove()
        showQuickToast("Transação excluída (simulado): " + id)
      }
    })
  })
}

function attachTransactionFilter() {
  const sel = document.getElementById("txFilter")
  if (!sel) return
  sel.addEventListener("change", () => {
    const val = sel.value
    const rows = document.querySelectorAll(".transactions-body tr")
    rows.forEach((r) => {
      const type = r.children[3] && r.children[3].textContent.toLowerCase()
      if (val === "all") {
        r.style.display = ""
      } else if (type && type.indexOf(val) === -1) {
        r.style.display = "none"
      } else {
        r.style.display = ""
      }
    })
  })
}

/*
  Quick Actions: attach handlers to buttons in the right column.
  - data-action attributes control behavior (add-transaction, add-reminder, ...)
  - For now, actions show a lightweight toast feedback. In the future
    they podem abrir um modal ou navegar para uma rota.
*/
function showQuickToast(message) {
  try {
    const t = document.createElement("div")
    t.className = "qa-toast"
    t.textContent = message
    document.body.appendChild(t)
    setTimeout(() => t.classList.add("visible"), 10)
    // remove after 3s
    setTimeout(() => {
      t.remove()
    }, 3000)
  } catch (e) {
    console.warn("toast error", e)
  }
}

function attachQuickActions() {
  // seleciona botões com data-action na coluna direita
  const qBtns = document.querySelectorAll(".quick-btn[data-action]")
  qBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const action = btn.getAttribute("data-action")
      // ações simuladas; no futuro, cada case chamará um componente/modal
      switch (action) {
        case "add-transaction":
          // abre o modal de adicionar transação (se implementado)
          if (typeof openTxModal === 'function') openTxModal()
          else showQuickToast("Abrir formulário: adicionar transação (simulado)")
          break
        case "add-reminder":
          showQuickToast("Registrar lembrete (simulado)")
          break
        case "view-bills":
          showQuickToast("Mostrando contas pendentes (simulado)")
          break
        case "export-csv":
          showQuickToast("Exportando CSV (simulado)")
          break
        default:
          showQuickToast("Ação não implementada: " + action)
      }
      // feedback visual no botão
      btn.classList.add("pressed")
      setTimeout(() => btn.classList.remove("pressed"), 160)
    })
  })
}

/* ---------------------------------------------------------------
   Gráfico principal (linha) - renderização SVG com dados fictícios
   - função renderDashboardChart constrói paths e pontos dentro do SVG
   - animação simples para dar sensação de produto
   - comentários mostram como trocar por fetch('/api/chart-monthly')
   --------------------------------------------------------------- */
function renderDashboardChart(data) {
  // dados fictícios (últimos 12 meses) se não fornecidos
  const sample = data || {
    months: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    income: [
      800, 1200, 1100, 1500, 1800, 1900, 2100, 1700, 2000, 2300, 2200, 2400,
    ],
    expense: [600, 700, 650, 800, 900, 1100, 900, 1000, 1200, 1300, 1250, 1400],
  }

  const svg = document.querySelector(".chart-svg")
  if (!svg) return

  // area interna de desenho (padding interno)
  const PAD = 40
  const width = 600
  const height = 300
  const innerW = width - PAD * 2
  const innerH = height - PAD * 2

  const months = sample.months
  const income = sample.income
  const expense = sample.expense

  // calcula escala Y com base nos valores máximos
  const maxVal = Math.max(...income, ...expense) * 1.08

  function x(i) {
    return PAD + (i / (months.length - 1)) * innerW
  }
  function y(val) {
    // mapeia valor ao espaço vertical (invertido no SVG)
    const ratio = val / maxVal
    return PAD + innerH - ratio * innerH
  }

  // constrói path 'd' para uma série de pontos
  function buildPath(arr) {
    return arr
      .map(
        (v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(2)} ${y(v).toFixed(2)}`
      )
      .join(" ")
  }

  // area path (linha até baseline)
  function buildArea(arr) {
    const line = arr
      .map(
        (v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(2)} ${y(v).toFixed(2)}`
      )
      .join(" ")
    // desce até baseline e fecha
    return `${line} L ${PAD + innerW} ${PAD + innerH} L ${PAD} ${
      PAD + innerH
    } Z`
  }

  // seleciona elementos
  const pathIncome = svg.querySelector(".chart-line-income")
  const pathExpense = svg.querySelector(".chart-line-expense")
  const areaIncome = svg.querySelector(".chart-area-income")
  const areaExpense = svg.querySelector(".chart-area-expense")
  const dotsIncome = svg.querySelector(".chart-dots-income")
  const dotsExpense = svg.querySelector(".chart-dots-expense")

  // atualiza paths
  const dIncome = buildPath(income)
  const dExpense = buildPath(expense)
  const aIncome = buildArea(income)
  const aExpense = buildArea(expense)
  if (pathIncome) pathIncome.setAttribute("d", dIncome)
  if (pathExpense) pathExpense.setAttribute("d", dExpense)
  if (areaIncome) areaIncome.setAttribute("d", aIncome)
  if (areaExpense) areaExpense.setAttribute("d", aExpense)

  // anima linhas (stroke-dashoffset)
  requestAnimationFrame(() => {
    ;[pathIncome, pathExpense].forEach((p) => {
      if (!p) return
      const len = p.getTotalLength()
      p.style.strokeDasharray = len
      p.style.strokeDashoffset = len
      // pequeno timeout para permitir render + animação
      setTimeout(() => (p.style.strokeDashoffset = "0"), 60)
    })
  })

  // cria pontos (circles)
  function createDots(container, arr, className) {
    if (!container) return
    container.innerHTML = ""
    arr.forEach((v, i) => {
      const cx = x(i)
      const cy = y(v)
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      c.setAttribute("cx", cx)
      c.setAttribute("cy", cy)
      c.setAttribute("r", 3.6)
      c.setAttribute(
        "fill",
        className === "income" ? "var(--accent)" : "#ef4444"
      )
      c.setAttribute("data-month", months[i])
      c.setAttribute("data-value", v)
      container.appendChild(c)
      // pequena animação de entrada
      setTimeout(() => {
        c.style.opacity = "1"
        c.style.transform = "scale(1)"
      }, 200 + i * 30)
    })
  }

  createDots(dotsIncome, income, "income")
  createDots(dotsExpense, expense, "expense")

  // tooltip behavior
  const tooltip = document.querySelector(".chart-tooltip")
  if (tooltip) {
    svg.querySelectorAll("circle").forEach((circle) => {
      circle.addEventListener("mouseenter", (e) => {
        const month = circle.getAttribute("data-month")
        const value = Number(circle.getAttribute("data-value"))
        tooltip.textContent = `${month}: ${formatCurrencyBR(value)}`
        tooltip.style.display = "block"
        tooltip.setAttribute("aria-hidden", "false")
      })
      circle.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.offsetX + "px"
        tooltip.style.top = e.offsetY + "px"
      })
      circle.addEventListener("mouseleave", () => {
        tooltip.style.display = "none"
        tooltip.setAttribute("aria-hidden", "true")
      })
    })
  }
}

// executa o gráfico quando o DOM estiver pronto (se ainda não executado)
/* ---------------------------------------------------------------
   Modal & adição de transações (formulário)
   - cria funções para abrir/fechar modal, submeter formulário e
     inserir a nova transação na tabela + atualizar resumo.
   - implementado de forma imperativa para fácil migração a React.
--------------------------------------------------------------- */

function addTransactionRow(tx, prepend = false) {
  const tbody = document.querySelector('.transactions-body')
  if (!tbody) return

  const tr = document.createElement('tr')
  tr.setAttribute('data-id', tx.id)

  const tdDate = document.createElement('td')
  tdDate.textContent = formatDateBR(tx.date)

  const tdDesc = document.createElement('td')
  tdDesc.textContent = tx.desc

  const tdCat = document.createElement('td')
  tdCat.textContent = tx.category

  const tdType = document.createElement('td')
  tdType.textContent = tx.type === 'income' ? 'Entrada' : 'Saída'

  const tdVal = document.createElement('td')
  tdVal.className = tx.type === 'income' ? 'pos' : 'neg'
  tdVal.textContent = formatCurrencyBR(tx.value)

  const tdActions = document.createElement('td')
  tdActions.className = 'tx-actions'
  const btnView = document.createElement('button')
  btnView.className = 'btn small'
  btnView.textContent = 'Ver'
  btnView.setAttribute('data-action', 'view')
  const btnDel = document.createElement('button')
  btnDel.className = 'btn small'
  btnDel.textContent = 'Excluir'
  btnDel.setAttribute('data-action', 'delete')
  tdActions.appendChild(btnView)
  tdActions.appendChild(btnDel)

  tr.appendChild(tdDate)
  tr.appendChild(tdDesc)
  tr.appendChild(tdCat)
  tr.appendChild(tdType)
  tr.appendChild(tdVal)
  tr.appendChild(tdActions)

  if (prepend && tbody.firstChild) tbody.insertBefore(tr, tbody.firstChild)
  else tbody.appendChild(tr)

  // (re)anexa handlers apenas para os novos botões
  attachTransactionActions()
}

function addTransaction(tx) {
  // garante estado global
  window.AurevoData = window.AurevoData || {}
  window.AurevoData.transactions = window.AurevoData.transactions || []
  // adiciona no topo (mais recente primeiro)
  window.AurevoData.transactions.unshift(tx)
  // insere linha na tabela
  addTransactionRow(tx, true)
  // atualiza sumário
  const s = window.AurevoData.summary || { balance: 0, incomeMonth: 0, expenseMonth: 0, pendingBills: 0 }
  if (tx.type === 'income') {
    s.incomeMonth = (s.incomeMonth || 0) + Number(tx.value)
    s.balance = (s.balance || 0) + Number(tx.value)
  } else {
    s.expenseMonth = (s.expenseMonth || 0) + Number(tx.value)
    s.balance = (s.balance || 0) - Number(tx.value)
  }
  window.AurevoData.summary = s
  updateSummaryDOM()
}

function openTxModal() {
  const modal = document.getElementById('txModal')
  const form = document.getElementById('txForm')
  if (!modal || !form) return
  form.reset()
  // preenche data com hoje
  const dateInput = document.getElementById('txDate')
  if (dateInput) dateInput.value = new Date().toISOString().slice(0, 10)
  modal.classList.add('show')
  modal.setAttribute('aria-hidden', 'false')
  // foco inicial
  const first = document.getElementById('txDesc')
  if (first) first.focus()
}

function closeTxModal() {
  const modal = document.getElementById('txModal')
  if (!modal) return
  modal.classList.remove('show')
  modal.setAttribute('aria-hidden', 'true')
}

function attachModalHandlers() {
  const modal = document.getElementById('txModal')
  const form = document.getElementById('txForm')
  if (!modal || !form) return

  // close buttons
  modal.querySelectorAll('.modal-close').forEach((btn) => btn.addEventListener('click', closeTxModal))

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const date = document.getElementById('txDate').value
    const desc = document.getElementById('txDesc').value.trim()
    const category = document.getElementById('txCategory').value.trim()
    const type = document.getElementById('txType').value
    const value = parseFloat(document.getElementById('txValue').value)

    // validações simples
    if (!desc || !category || !date || !type || Number.isNaN(value) || value <= 0) {
      showQuickToast('Preencha todos os campos corretamente')
      return
    }

    const tx = {
      id: Date.now(),
      date: date,
      desc: desc,
      category: category,
      type: type,
      value: value,
    }

    addTransaction(tx)
    showQuickToast('Transação adicionada (simulado)')
    closeTxModal()
  })
}

function attachAddTxButton() {
  const btn = document.getElementById('addTxBtn')
  if (!btn) return
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    openTxModal()
  })
}

// inicializações adicionais: modal handlers e botão de adicionar
// Inicialização principal do dashboard: assegura que populadores e handlers
// essenciais rodem quando o DOM estiver pronto.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    attachModalHandlers()
    attachAddTxButton()
    // preenche resumo, tabela de transações e anexa ações rápidas
    populateSummary()
    populateTransactions()
    attachQuickActions()
    // renderiza o gráfico principal
    renderDashboardChart()
  })
} else {
  attachModalHandlers()
  attachAddTxButton()
  populateSummary()
  populateTransactions()
  attachQuickActions()
  renderDashboardChart()
}

// executa o gráfico quando o DOM estiver pronto (se ainda não executado)
// (renderDashboardChart já é chamado na inicialização consolidada acima)
