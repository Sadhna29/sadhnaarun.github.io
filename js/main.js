document.addEventListener("DOMContentLoaded", () => {
    // 1. Automatically update copyright year
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  
    // 2. Dynamic card background color on hover
    const projectCards = document.querySelectorAll(".project-card");
  
    projectCards.forEach((card) => {
      const defaultColor = "#ffffff";
      const hoverColor = card.dataset.color || "#e0e0e0";
  
      card.addEventListener("mouseenter", () => {
        card.style.backgroundColor = hoverColor;
      });
  
      card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = defaultColor;
      });
    });
  });