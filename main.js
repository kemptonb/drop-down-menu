const navButton = document.querySelector(".navButton");
const navMenu = document.querySelector(".nav-menu");

navButton.addEventListener("click", dropDown);

function dropDown() {
    navButton.classList.toggle("active");
    navMenu.classList.toggle("active");
}