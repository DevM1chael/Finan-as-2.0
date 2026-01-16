/**
 * @file navigation.js
 * @description Módulo para gerenciar navegação mobile/desktop
 * @module modules/navigation
 */

/**
 * Inicializa o toggle de navegação mobile
 */
export function initNavigation() {
  const navToggle = document.getElementById("navToggle")
  const siteNav = document.getElementById("siteNav")

  if (!navToggle || !siteNav) return

  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open")
    navToggle.classList.toggle("open")
  })
}

/**
 * Fecha o menu de navegação
 */
export function closeNavigation() {
  const navToggle = document.getElementById("navToggle")
  const siteNav = document.getElementById("siteNav")

  if (siteNav) siteNav.classList.remove("open")
  if (navToggle) navToggle.classList.remove("open")
}

/**
 * Abre o menu de navegação
 */
export function openNavigation() {
  const navToggle = document.getElementById("navToggle")
  const siteNav = document.getElementById("siteNav")

  if (siteNav) siteNav.classList.add("open")
  if (navToggle) navToggle.classList.add("open")
}
