

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".ri-menu-line");
  const navMenu = document.querySelector("header nav ul");
  const navLinks = document.querySelectorAll("header nav ul li a");

  // Toggle dropdown menu when icon clicked
  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close menu when a nav link is clicked (on mobile)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 600) {
        navMenu.classList.remove("active");
      }
    });
  });
});

