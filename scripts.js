document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("header nav ul");
    const navToggle = document.createElement("button");
    navToggle.textContent = "Menu";
    navToggle.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
    document.querySelector("header .container").appendChild(navToggle);
});
