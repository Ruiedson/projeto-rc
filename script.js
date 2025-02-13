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

window.onload = function () {
    const theme = localStorage.getItem("theme");
    const html = document.documentElement;
    const img = document.querySelector("#profile img");

    if (theme === "light") {
        html.classList.add("light");
        if (img) img.setAttribute("src", "./assets/avatar-light.png");
    }
};
