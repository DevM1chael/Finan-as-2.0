/**
 * @file footer.js
 * @description Módulo para gerenciar rodapé (ano dinâmico, etc.)
 * @module modules/footer
 */

/**
 * Define o ano atual no rodapé dinamicamente
 */
export function setFooterYear() {
  try {
    const year = new Date().getFullYear()

    // Preenche todos os elementos com data-attribute
    const elements = document.querySelectorAll("[data-current-year]")
    if (elements && elements.length) {
      elements.forEach((el) => {
        el.textContent = year
      })
    }

    // Compatibilidade retroativa para elemento com id
    const fallback = document.getElementById("currentYear")
    if (fallback) {
      fallback.textContent = year
    }
  } catch (e) {
    console.warn("Footer year setup error:", e)
  }
}

/**
 * Inicializa o rodapé
 */
export function initFooter() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setFooterYear)
  } else {
    setFooterYear()
  }
}
