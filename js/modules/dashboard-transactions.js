/**
 * @file dashboard-transactions.js
 * @description Módulo para gerenciar tabela de transações e ações
 * @module modules/dashboard-transactions
 */

import { formatDateBR, formatCurrencyBR } from "../utils/formatting.js"
import { showToast, safeSelect, safeSelectAll } from "../utils/dom.js"
import { AurevoState } from "./state.js"
import { updateSummaryDOM } from "./dashboard-summary.js"

/**
 * Popula a tabela de transações
 * @param {Array} data - Array de transações
 */
export function populateTransactions(data) {
  const mockData = data || [
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

  AurevoState.transactions = mockData
  renderTransactionsTable(mockData)
  attachTransactionActions()
  attachTransactionFilter()
}

/**
 * Renderiza a tabela de transações
 * @param {Array} transactions - Array de transações
 */
function renderTransactionsTable(transactions) {
  const tbody = safeSelect(".transactions-body")
  if (!tbody) return

  tbody.innerHTML = ""

  transactions.forEach((tx) => {
    const tr = createTransactionRow(tx)
    tbody.appendChild(tr)
  })
}

/**
 * Cria uma linha de transação
 * @param {Object} tx - Objeto de transação
 * @returns {HTMLTableRowElement}
 */
function createTransactionRow(tx) {
  const tr = document.createElement("tr")
  tr.setAttribute("data-id", tx.id)

  const cells = [
    formatDateBR(tx.date),
    tx.desc,
    tx.category,
    tx.type === "income" ? "Entrada" : "Saída",
    formatCurrencyBR(tx.value),
  ]

  cells.forEach((content) => {
    const td = document.createElement("td")
    td.textContent = content
    if (content === formatCurrencyBR(tx.value)) {
      td.className = tx.type === "income" ? "pos" : "neg"
    }
    tr.appendChild(td)
  })

  // Coluna de ações
  const tdActions = document.createElement("td")
  tdActions.className = "tx-actions"

  const btnView = document.createElement("button")
  btnView.className = "btn small"
  btnView.textContent = "Ver"
  btnView.setAttribute("data-action", "view")

  const btnDel = document.createElement("button")
  btnDel.className = "btn small"
  btnDel.textContent = "Excluir"
  btnDel.setAttribute("data-action", "delete")

  tdActions.appendChild(btnView)
  tdActions.appendChild(btnDel)
  tr.appendChild(tdActions)

  return tr
}

/**
 * Adiciona uma nova linha de transação
 * @param {Object} tx - Transação
 * @param {boolean} prepend - Se deve adicionar no topo
 */
export function addTransactionRow(tx, prepend = false) {
  const tbody = safeSelect(".transactions-body")
  if (!tbody) return

  const tr = createTransactionRow(tx)
  if (prepend && tbody.firstChild) {
    tbody.insertBefore(tr, tbody.firstChild)
  } else {
    tbody.appendChild(tr)
  }

  attachTransactionActions()
}

/**
 * Anexa handlers aos botões de ação
 */
function attachTransactionActions() {
  const tbody = safeSelect(".transactions-body")
  if (!tbody) return

  tbody.querySelectorAll("button[data-action]").forEach((btn) => {
    // Remove listeners antigos
    btn.replaceWith(btn.cloneNode(true))
  })

  // Reaplica listeners
  tbody.querySelectorAll("button[data-action]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const action = btn.getAttribute("data-action")
      const tr = btn.closest("tr")
      const id = tr && tr.getAttribute("data-id")

      if (action === "view") {
        showToast(`Visualizar transação (simulado): ${id}`)
      } else if (action === "delete") {
        tr.remove()
        AurevoState.removeTransaction(Number(id))
        showToast(`Transação excluída (simulado): ${id}`)
      }
    })
  })
}

/**
 * Anexa filtro de transações
 */
function attachTransactionFilter() {
  const sel = document.getElementById("txFilter")
  if (!sel) return

  sel.addEventListener("change", () => {
    const val = sel.value
    const rows = safeSelectAll(".transactions-body tr")

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

/**
 * Adiciona transação ao estado e tabela
 * @param {Object} tx - Transação
 */
export function addTransaction(tx) {
  AurevoState.addTransaction(tx)
  addTransactionRow(tx, true)

  // Atualiza resumo
  const s = AurevoState.summary
  if (tx.type === "income") {
    s.incomeMonth = (s.incomeMonth || 0) + Number(tx.value)
    s.balance = (s.balance || 0) + Number(tx.value)
  } else {
    s.expenseMonth = (s.expenseMonth || 0) + Number(tx.value)
    s.balance = (s.balance || 0) - Number(tx.value)
  }

  updateSummaryDOM()
}
