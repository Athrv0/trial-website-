function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("open");
}

// Close menu if clicked anywhere outside
document.addEventListener("click", (e) => {
  const navMenu = document.getElementById("navMenu");
  const menuButton = document.querySelector(".menu-btn");
  if (!navMenu.contains(e.target) && !menuButton.contains(e.target)) {
    navMenu.classList.remove("open");
  }
});
