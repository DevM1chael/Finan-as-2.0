/**
 * @file assets/dashboard.js
 * @description Script principal do dashboard - inicializa todos os módulos
 * @version 2.0.0
 * @author Aurevo Finance Team
 *
 * REFATORAÇÃO v2.0:
 * - Importa módulos especializados do diretório js/modules/
 * - Responsabilidade única para cada módulo
 * - Separação clara entre dados, UI e eventos
 * - Melhor testabilidade e manutenibilidade
 */

import { populateSummary } from "../js/modules/dashboard-summary.js"
import { populateTransactions } from "../js/modules/dashboard-transactions.js"
import { renderDashboardChart } from "../js/modules/dashboard-chart.js"
import {
  attachModalHandlers,
  attachAddTxButton,
} from "../js/modules/dashboard-modal.js"
import { attachQuickActions } from "../js/modules/dashboard-quick-actions.js"

/**
 * Inicializa o dashboard completo
 */
function initializeDashboard() {
  // 1. Preenche resumo financeiro (cards no topo)
  populateSummary()

  // 2. Preenche tabela de transações
  populateTransactions()

  // 3. Renderiza gráfico de desempenho
  renderDashboardChart()

  // 4. Anexa handlers do modal
  attachModalHandlers()
  attachAddTxButton()

  // 5. Anexa handlers das ações rápidas
  attachQuickActions()

  console.log("✓ Dashboard initialized")
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeDashboard)
} else {
  initializeDashboard()
}
