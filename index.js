const buttonOpenMenu = document.querySelector(".button-open");
const menu = document.querySelector(".menu");

buttonOpenMenu.addEventListener("click", () => {
  menu.classList.toggle("menu_active");
});
