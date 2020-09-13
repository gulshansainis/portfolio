const navMenu = document.querySelector("#nav-menu");
const menuIcon = document.querySelector("#nav-menu-icon");

menuIcon.addEventListener("click", (e) => {
  navMenu.classList.contains("show")
    ? navMenu.classList.remove("show")
    : navMenu.classList.add("show");
});
