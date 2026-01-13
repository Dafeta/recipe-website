// Navbar scroll effect
const navbar = document.getElementById("nav");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Sidebar toggle functionality
const menuButton = document.getElementById("sidebar-menu-button");
const sidebar = document.getElementById("sidebar-links-section");
const closeButton = document.getElementById("close-button");

if (menuButton && sidebar) {
  menuButton.addEventListener("click", () => {
    sidebar.classList.add("active");
  });
}

if (closeButton && sidebar) {
  closeButton.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}


// Close with Escape key
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape" && sidebar && sidebar.classList.contains("active")) {
//     sidebar.classList.remove("active");
//   }
// });


