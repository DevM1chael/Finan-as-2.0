/**
 * @file index.js
 * @description Script principal da aplicação - inicializa módulos globais
 * @version 2.0.0
 * @author Aurevo Finance Team
 *
 * REFATORAÇÃO v2.0:
 * - Importa módulos especializados de js/modules/
 * - Separação de responsabilidades (theme, navigation, footer)
 * - Melhor organização e manutenibilidade
 */

import { initTheme } from "./js/modules/theme.js"
import { initNavigation } from "./js/modules/navigation.js"
import { initFooter } from "./js/modules/footer.js"

/**
 * Inicializa todos os módulos globais
 */
function initializeApp() {
  // Configura tema (claro/escuro)
  initTheme()

  // Configura navegação mobile
  initNavigation()

  // Configura rodapé (ano dinâmico)
  initFooter()

  console.log("✓ Aurevo Finance initialized")
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp)
} else {
  initializeApp()
}
