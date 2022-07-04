const headerNav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const burgerIcon = document.querySelector(".burger-icon");
const closingX = document.querySelector(".closing-x");

export function dropDownMenu() {
  if (window.outerWidth <= 999) {
    headerNav.classList.toggle("active");
    headerNav.classList.toggle("menu__main-nav");
  } else {
    headerNav.remove.classList(".active");
  }

  if (headerNav.classList.contains("active")) {
    burgerIcon.style.display = "none";
    closingX.style.display = "block";
  } else {
    burgerIcon.style.display = "block";
    closingX.style.display = "none";
  }

  if (headerNav.classList.contains("active")) {
    logo.src = "images/Logo-dark-blue.png";
  } else {
    logo.src = "images/Logo-white.png";
  }
}

// closes the menu when clicking a link

const navLinks = document.querySelectorAll(".menu__main-nav li a");

navLinks.forEach((link) => {
  if (window.outerWidth <= 999) {
    link.addEventListener("click", dropDownMenu);
  }
});
