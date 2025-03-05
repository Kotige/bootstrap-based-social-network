import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

document.getElementById("theme-toggle").addEventListener("click", function () {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-bs-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);
})