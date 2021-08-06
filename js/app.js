const menu = document.getElementById("hamburger");
const mainMenu = document.querySelector(".main-menu");

menu.addEventListener("click", () => {
    mainMenu.classList.toggle("active");
})