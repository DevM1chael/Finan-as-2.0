// Lógica leve da dashboard: atualizar contagem de contas e attach de botões
;(function () {
  // Nota: removi qualquer escrita/leitura em localStorage por segurança.
  // A contagem de contas permanece como placeholder (0) até integração manual.
  const billsEl = document.querySelector(".bills-count strong")

  function refreshBills() {
    const val = 0
    if (billsEl) billsEl.textContent = val
  }

  // Attach click handlers aos botões do painel esquerdo (placeholders)
  function attachActions() {
    const buttons = document.querySelectorAll(".left-actions .btn")
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        const label = btn.textContent.trim()
        console.info("[Dashboard] Ação:", label)
        // Feedback visual breve
        btn.classList.add("pressed")
        setTimeout(() => btn.classList.remove("pressed"), 160)
      })
    })
  }

  // init quando DOM estiver pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      refreshBills()
      attachActions()
    })
  } else {
    refreshBills()
    attachActions()
  }

  // Expõe para debug / futuros usos
  window.AurevoDashboard = { refreshBills }
})()
