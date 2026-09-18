// Simple JavaScript for our portfolio

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const themeButton = document.querySelector(".theme-button");

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

// Simple light/dark mode
if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      themeButton.textContent = "☾";
    } else {
      themeButton.textContent = "☀";
    }
  });
}

// Small welcome message when the page loads
console.log("Welcome to our student portfolio!");
