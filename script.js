// Simple JavaScript for our portfolio

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

// Mobile menu
if (menuButton) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

// Close mobile menu after clicking a link
if (navLinks) {
  const links = navLinks.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("show");
    });
  });
}
// Small welcome message when the page loads
console.log("Welcome to our student portfolio!");
