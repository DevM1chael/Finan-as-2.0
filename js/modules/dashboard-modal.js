/**
 * @file dashboard-modal.js
 * @description Módulo para gerenciar modal de adicionar transações
 * @module modules/dashboard-modal
 */

import { showToast, safeSelect } from "../utils/dom.js"
import { addTransaction } from "./dashboard-transactions.js"

/**
 * Abre o modal de transação
 */
export function openTxModal() {
  const modal = safeSelect("#txModal")
  const form = safeSelect("#txForm")

  if (!modal || !form) return

  form.reset()

  // Preenche data com hoje
  const dateInput = safeSelect("#txDate")
  if (dateInput) {
    dateInput.value = new Date().toISOString().slice(0, 10)
  }

  modal.classList.add("show")
  modal.setAttribute("aria-hidden", "false")

  // Foco inicial
  const first = safeSelect("#txDesc")
  if (first) first.focus()
}

/**
 * Fecha o modal
 */
export function closeTxModal() {
  const modal = safeSelect("#txModal")
  if (!modal) return

  modal.classList.remove("show")
  modal.setAttribute("aria-hidden", "true")
}

/**
 * Anexa handlers ao modal
 */
export function attachModalHandlers() {
  const modal = safeSelect("#txModal")
  const form = safeSelect("#txForm")

  if (!modal || !form) return

  // Botões de fechar
  modal.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", closeTxModal)
  })

  // Submit
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const date = safeSelect("#txDate").value
    const desc = safeSelect("#txDesc").value.trim()
    const category = safeSelect("#txCategory").value.trim()
    const type = safeSelect("#txType").value
    const value = parseFloat(safeSelect("#txValue").value)

    // Validações
    if (
      !desc ||
      !category ||
      !date ||
      !type ||
      Number.isNaN(value) ||
      value <= 0
    ) {
      showToast("Preencha todos os campos corretamente")
      return
    }

    const tx = {
      id: Date.now(),
      date,
      desc,
      category,
      type,
      value,
    }

    addTransaction(tx)
    showToast("Transação adicionada (simulado)")
    closeTxModal()
  })
}

/**
 * Anexa handler ao botão de adicionar
 */
export function attachAddTxButton() {
  const btn = safeSelect("#addTxBtn")
  if (!btn) return

  btn.addEventListener("click", (e) => {
    e.preventDefault()
    openTxModal()
  })
}
