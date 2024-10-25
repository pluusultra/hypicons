let buttonMenu = document.querySelector(".menu__btn");
let menuList = document.querySelector(".menu__list");

buttonMenu.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--visible");
});
