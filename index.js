// Seleciona elementos
const toggleButton = document.getElementById("toggle-mode");
const body = document.body;
const icon = toggleButton.querySelector("i");

// Verifica se já existe preferência salva
if (localStorage.getItem("theme") === "light") {
    body.classList.remove("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
} else {
    body.classList.add("dark-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}

// Evento de clique
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "light");
    }
});