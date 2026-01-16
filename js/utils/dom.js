/**
 * @file dom.js
 * @description Utilitários para manipulação do DOM
 * @module utils/dom
 */

/**
 * Mostra um toast (notificação) temporária
 * @param {string} message - Mensagem a ser exibida
 * @param {number} duration - Duração em ms (padrão: 3000)
 * @example showToast("Transação adicionada!")
 */
export function showToast(message, duration = 3000) {
  try {
    const toast = document.createElement("div")
    toast.className = "qa-toast"
    toast.textContent = message
    document.body.appendChild(toast)

    setTimeout(() => toast.classList.add("visible"), 10)
    setTimeout(() => {
      toast.remove()
    }, duration)
  } catch (e) {
    console.warn("Toast error:", e)
  }
}

/**
 * Seleciona um elemento de forma segura com fallback
 * @param {string} selector - Seletor CSS
 * @returns {HTMLElement|null} Elemento ou null
 * @example safeSelect('.transactions-body')
 */
export function safeSelect(selector) {
  try {
    return document.querySelector(selector)
  } catch (e) {
    console.warn("Query selector error:", selector, e)
    return null
  }
}

/**
 * Seleciona múltiplos elementos
 * @param {string} selector - Seletor CSS
 * @returns {NodeList} Lista de elementos
 * @example safeSelectAll('button[data-action]')
 */
export function safeSelectAll(selector) {
  try {
    return document.querySelectorAll(selector)
  } catch (e) {
    console.warn("Query selector all error:", selector, e)
    return []
  }
}

/**
 * Cria um elemento DOM com classes opcionais
 * @param {string} tag - Tag HTML
 * @param {string} classes - Classes CSS (separadas por espaço)
 * @param {string} text - Conteúdo de texto
 * @returns {HTMLElement} Elemento criado
 * @example createElement('div', 'card active', 'Conteúdo')
 */
export function createElement(tag, classes = "", text = "") {
  const el = document.createElement(tag)
  if (classes) el.className = classes
  if (text) el.textContent = text
  return el
}

/**
 * Adiciona múltiplos event listeners a um elemento
 * @param {HTMLElement} el - Elemento alvo
 * @param {Object} events - { 'event': callback }
 * @example addEventListeners(btn, { 'click': handleClick, 'focus': handleFocus })
 */
export function addEventListeners(el, events) {
  if (!el) return
  Object.entries(events).forEach(([event, handler]) => {
    el.addEventListener(event, handler)
  })
}

/**
 * Define múltiplos atributos em um elemento
 * @param {HTMLElement} el - Elemento alvo
 * @param {Object} attrs - { 'attr': 'value' }
 * @example setAttributes(el, { 'data-id': '123', 'role': 'button' })
 */
export function setAttributes(el, attrs) {
  if (!el) return
  Object.entries(attrs).forEach(([attr, value]) => {
    el.setAttribute(attr, value)
  })
}
