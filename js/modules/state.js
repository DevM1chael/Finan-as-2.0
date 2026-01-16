/**
 * @file state.js
 * @description Gerenciamento centralizado do estado da aplicação
 * @module modules/state
 */

/**
 * Estado global da aplicação
 * Mantém sincronização entre dados e UI
 */
export const AurevoState = {
  summary: {
    balance: 0,
    incomeMonth: 0,
    expenseMonth: 0,
    pendingBills: 0,
  },
  transactions: [],

  /**
   * Atualiza o resumo
   */
  updateSummary(data) {
    this.summary = { ...this.summary, ...data }
  },

  /**
   * Adiciona uma transação
   */
  addTransaction(transaction) {
    this.transactions.unshift(transaction)
  },

  /**
   * Remove uma transação por ID
   */
  removeTransaction(id) {
    this.transactions = this.transactions.filter((tx) => tx.id !== id)
  },

  /**
   * Obtém uma transação por ID
   */
  getTransaction(id) {
    return this.transactions.find((tx) => tx.id === id)
  },

  /**
   * Obtém todos os dados
   */
  getAll() {
    return {
      summary: this.summary,
      transactions: this.transactions,
    }
  },
}

// Mantém compatibilidade com código legado que usa window.AurevoData
window.AurevoData = AurevoState
