// JavaScript to toggle the mobile menu
const navbarToggle = document.getElementById("navbar-toggle");
const navMenu = document.querySelector("#nav-menu ul");

navbarToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Js for Auto typed text   
var typed = new Typed('#auto-typing-text', {
  strings: ["Full Stack Web Developer", "Java Backend Developer", "Full Stack Java Developer", "Spring Boot Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});


