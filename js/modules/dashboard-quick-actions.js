/**
 * @file dashboard-quick-actions.js
 * @description Módulo para gerenciar ações rápidas
 * @module modules/dashboard-quick-actions
 */

import { showToast, safeSelectAll } from "../utils/dom.js"
import { openTxModal } from "./dashboard-modal.js"

/**
 * Anexa handlers aos botões de ações rápidas
 */
export function attachQuickActions() {
  const quickBtns = safeSelectAll(".quick-btn[data-action]")

  quickBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()

      const action = btn.getAttribute("data-action")

      switch (action) {
        case "add-transaction":
          openTxModal()
          break
        case "add-reminder":
          showToast("Registrar lembrete (simulado)")
          break
        case "view-bills":
          showToast("Mostrando contas pendentes (simulado)")
          break
        case "export-csv":
          showToast("Exportando CSV (simulado)")
          break
        default:
          showToast(`Ação não implementada: ${action}`)
      }

      // Feedback visual
      btn.classList.add("pressed")
      setTimeout(() => btn.classList.remove("pressed"), 160)
    })
  })
}
