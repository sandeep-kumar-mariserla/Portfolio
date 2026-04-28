// MENU TOGGLE
const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// SMOOTH SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// TYPING EFFECT
const text = ["Frontend Developer", "Tech Enthusiast", "Problem Solver"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];
  
  if (!isDeleting) {
    document.querySelector(".typing").textContent =
      currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.querySelector(".typing").textContent =
      currentText.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

type();