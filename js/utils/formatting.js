/**
 * @file formatting.js
 * @description Utilitários para formatação de dados (moeda, datas, etc.)
 * @module utils/formatting
 */

/**
 * Formata um número para padrão brasileiro de moeda (R$ X.XXX,XX)
 * @param {number} value - Valor a ser formatado
 * @returns {string} String formatada em BRL
 * @example formatCurrencyBR(1234.56) => "R$ 1.234,56"
 */
export function formatCurrencyBR(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

/**
 * Formata uma data ISO para padrão brasileiro (DD/MM/YYYY)
 * @param {string} iso - Data em formato ISO (YYYY-MM-DD)
 * @returns {string} Data formatada em padrão pt-BR
 * @example formatDateBR("2026-01-12") => "12/01/2026"
 */
export function formatDateBR(iso) {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString("pt-BR")
  } catch (e) {
    return iso
  }
}

/**
 * Remove a parte de moeda de uma string formatada
 * @param {string} formatted - String já formatada com moeda
 * @returns {string} Valor sem o símbolo de moeda
 * @example removeFormattedCurrency("R$ 1.234,56") => "1.234,56"
 */
export function removeFormattedCurrency(formatted) {
  return formatted.replace(/\s?R\$\s?/, "")
}
