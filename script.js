function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png");
        localStorage.setItem("theme", "light");
    } else {
        img.setAttribute("src", "./assets/avatar.png");
        localStorage.setItem("theme", "dark");
    }
}

// Mantém o tema salvo ao recarregar a página
window.onload = function () {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        document.documentElement.classList.add("light");
        document.querySelector("#profile img").setAttribute("src", "./assets/avatar-light.png");
    }
};
