// Mobile nav toggle
const navToggle = document.getElementById("navToggle")
const siteNav = document.getElementById("siteNav")
navToggle &&
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open")
    navToggle.classList.toggle("open")
  })

// Theme toggle (dark / light) - persists in localStorage
const themeToggle = document.getElementById("themeToggle")
const body = document.body
const THEME_KEY = "aurevo_theme"

function applyTheme(theme) {
  if (theme === "light") {
    body.classList.add("light-theme")
    themeToggle.setAttribute("aria-pressed", "true")
  } else {
    body.classList.remove("light-theme")
    themeToggle.setAttribute("aria-pressed", "false")
  }
}

// init
const saved = localStorage.getItem(THEME_KEY) || "dark"
applyTheme(saved)

themeToggle &&
  themeToggle.addEventListener("click", () => {
    const current = body.classList.contains("light-theme") ? "light" : "dark"
    const next = current === "light" ? "dark" : "light"
    applyTheme(next)
    localStorage.setItem(THEME_KEY, next)
  })

// seta o ano do rodapé dinamicamente (se houver elemento com id `currentYear`)
function setFooterYear() {
  try {
    const year = new Date().getFullYear()
    // preenche todos os elementos que usam o data-attribute
    const els = document.querySelectorAll("[data-current-year]")
    if (els && els.length) {
      els.forEach((el) => (el.textContent = year))
    }
    // compatibilidade retroativa: se existir um elemento com id currentYear
    const fallback = document.getElementById("currentYear")
    if (fallback) fallback.textContent = year
  } catch (e) {
    /* ignore */
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => setFooterYear())
} else {
  setFooterYear()
}
