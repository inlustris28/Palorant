document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggle");
    const menu = document.querySelector(".navbar-center");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});