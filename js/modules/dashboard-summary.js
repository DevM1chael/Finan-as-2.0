/**
 * @file dashboard-summary.js
 * @description Módulo para gerenciar o resumo financeiro (cards)
 * @module modules/dashboard-summary
 */

import {
  formatCurrencyBR,
  removeFormattedCurrency,
} from "../utils/formatting.js"
import { AurevoState } from "./state.js"

/**
 * Popula o resumo com dados (fictícios ou reais)
 * @param {Object} data - Dados de resumo
 */
export function populateSummary(data) {
  const mockData = data || {
    balance: 5234.5,
    incomeMonth: 12400.0,
    expenseMonth: 7165.5,
    pendingBills: 3,
  }

  AurevoState.updateSummary(mockData)
  updateSummaryDOM()
}

/**
 * Atualiza o DOM do resumo
 */
export function updateSummaryDOM() {
  const summary = AurevoState.summary

  Object.entries(summary).forEach(([key, value]) => {
    const el = document.querySelector(`[data-key="${key}"]`)
    if (!el) return

    const valueEl = el.querySelector(".value")
    if (!valueEl) return

    if (typeof value === "number") {
      if (key === "pendingBills") {
        valueEl.textContent = String(value)
      } else {
        valueEl.textContent = removeFormattedCurrency(formatCurrencyBR(value))
      }
    } else {
      valueEl.textContent = String(value)
    }
  })
}
