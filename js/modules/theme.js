/**
 * @file theme.js
 * @description Módulo para gerenciar tema (claro/escuro)
 * @module modules/theme
 */

const THEME_KEY = "aurevo_theme"

/**
 * Aplica um tema específico
 * @param {string} theme - 'light' ou 'dark'
 */
export function applyTheme(theme) {
  const body = document.body
  const themeToggle = document.getElementById("themeToggle")

  if (theme === "light") {
    body.classList.add("light-theme")
    if (themeToggle) themeToggle.setAttribute("aria-pressed", "true")
  } else {
    body.classList.remove("light-theme")
    if (themeToggle) themeToggle.setAttribute("aria-pressed", "false")
  }
}

/**
 * Obtém o tema atual
 * @returns {string} 'light' ou 'dark'
 */
export function getCurrentTheme() {
  return document.body.classList.contains("light-theme") ? "light" : "dark"
}

/**
 * Alterna entre temas
 */
export function toggleTheme() {
  const current = getCurrentTheme()
  const next = current === "light" ? "dark" : "light"
  applyTheme(next)
  localStorage.setItem(THEME_KEY, next)
}

/**
 * Inicializa o tema salvo
 */
export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "dark"
  applyTheme(saved)

  const themeToggle = document.getElementById("themeToggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }
}
