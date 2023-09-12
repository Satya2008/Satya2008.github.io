// JavaScript to toggle the mobile menu
const navbarToggle = document.getElementById("navbar-toggle");
const navMenu = document.querySelector("#nav-menu ul");

navbarToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

