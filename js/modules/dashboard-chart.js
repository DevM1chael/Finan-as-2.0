/**
 * @file dashboard-chart.js
 * @description Módulo para gerenciar gráfico de desempenho mensal
 * @module modules/dashboard-chart
 */

import { formatCurrencyBR } from "../utils/formatting.js"
import { safeSelect } from "../utils/dom.js"

/**
 * Renderiza o gráfico de desempenho
 * @param {Object} data - Dados do gráfico
 */
export function renderDashboardChart(data) {
  const mockData = data || {
    months: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    income: [
      800, 1200, 1100, 1500, 1800, 1900, 2100, 1700, 2000, 2300, 2200, 2400,
    ],
    expense: [600, 700, 650, 800, 900, 1100, 900, 1000, 1200, 1300, 1250, 1400],
  }

  const svg = safeSelect(".chart-svg")
  if (!svg) return

  // Constantes de desenho
  const PAD = 40
  const width = 600
  const height = 300
  const innerW = width - PAD * 2
  const innerH = height - PAD * 2

  const { months, income, expense } = mockData
  const maxVal = Math.max(...income, ...expense) * 1.08

  // Funções de mapeamento de coordenadas
  const x = (i) => PAD + (i / (months.length - 1)) * innerW
  const y = (val) => PAD + innerH - (val / maxVal) * innerH

  // Constrói path SVG para série de dados
  const buildPath = (arr) =>
    arr
      .map(
        (v, i) =>
          `${i === 0 ? "M" : "L"} ${x(i).toFixed(2)} ${y(v).toFixed(2)}`,
      )
      .join(" ")

  // Constrói area path (linha + baseline)
  const buildArea = (arr) => {
    const line = arr
      .map(
        (v, i) =>
          `${i === 0 ? "M" : "L"} ${x(i).toFixed(2)} ${y(v).toFixed(2)}`,
      )
      .join(" ")
    return `${line} L ${PAD + innerW} ${PAD + innerH} L ${PAD} ${PAD + innerH} Z`
  }

  // Atualiza paths
  const pathIncome = svg.querySelector(".chart-line-income")
  const pathExpense = svg.querySelector(".chart-line-expense")
  const areaIncome = svg.querySelector(".chart-area-income")
  const areaExpense = svg.querySelector(".chart-area-expense")

  if (pathIncome) pathIncome.setAttribute("d", buildPath(income))
  if (pathExpense) pathExpense.setAttribute("d", buildPath(expense))
  if (areaIncome) areaIncome.setAttribute("d", buildArea(income))
  if (areaExpense) areaExpense.setAttribute("d", buildArea(expense))

  // Anima linhas
  requestAnimationFrame(() => {
    ;[pathIncome, pathExpense].forEach((p) => {
      if (!p) return
      const len = p.getTotalLength()
      p.style.strokeDasharray = len
      p.style.strokeDashoffset = len
      setTimeout(() => (p.style.strokeDashoffset = "0"), 60)
    })
  })

  // Cria dots (círculos)
  const createDots = (container, arr, type) => {
    if (!container) return
    container.innerHTML = ""
    arr.forEach((v, i) => {
      const cx = x(i)
      const cy = y(v)
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      c.setAttribute("cx", cx)
      c.setAttribute("cy", cy)
      c.setAttribute("r", "3.6")
      c.setAttribute("fill", type === "income" ? "var(--accent)" : "#ef4444")
      c.setAttribute("data-month", months[i])
      c.setAttribute("data-value", v)

      container.appendChild(c)

      setTimeout(
        () => {
          c.style.opacity = "1"
          c.style.transform = "scale(1)"
        },
        200 + i * 30,
      )
    })
  }

  const dotsIncome = svg.querySelector(".chart-dots-income")
  const dotsExpense = svg.querySelector(".chart-dots-expense")

  createDots(dotsIncome, income, "income")
  createDots(dotsExpense, expense, "expense")

  // Tooltip
  const tooltip = safeSelect(".chart-tooltip")
  if (tooltip) {
    svg.querySelectorAll("circle").forEach((circle) => {
      circle.addEventListener("mouseenter", () => {
        const month = circle.getAttribute("data-month")
        const value = Number(circle.getAttribute("data-value"))
        tooltip.textContent = `${month}: ${formatCurrencyBR(value)}`
        tooltip.style.display = "block"
        tooltip.setAttribute("aria-hidden", "false")
      })

      circle.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.offsetX + "px"
        tooltip.style.top = e.offsetY + "px"
      })

      circle.addEventListener("mouseleave", () => {
        tooltip.style.display = "none"
        tooltip.setAttribute("aria-hidden", "true")
      })
    })
  }
}
