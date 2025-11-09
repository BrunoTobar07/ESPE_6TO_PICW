// Acordeón accesible: mostrar y ocultar secciones
document.querySelectorAll(".card__head").forEach(btn => {
  btn.addEventListener("click", () => {
    const body = document.getElementById(btn.getAttribute("aria-controls"));
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    body.style.display = expanded ? "none" : "block";
    const chev = btn.querySelector(".chev");
    if (chev) chev.textContent = expanded ? "▸" : "▾";
  });
});

// Resaltado dinámico de habilidades
document.querySelectorAll("[data-skill]").forEach(el => {
  el.addEventListener("mouseenter", () => el.classList.add("is-hover"));
  el.addEventListener("mouseleave", () => el.classList.remove("is-hover"));
});

// Campo en donde se muestra el año en el footer
document.getElementById("year").textContent = new Date().getFullYear();
