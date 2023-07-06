// footer year
let mydate = new Date();
const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = mydate.getFullYear();

//hamburger meniu for small screen
const menuBurger = document.querySelector(".burgerMenu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function seeMenu() {
  if (menuBurger.classList.contains("showMenu")) {
    menuBurger.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menuBurger.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
hamburger.addEventListener("click", seeMenu);
menuItems.forEach((menuItem) => menuItem.addEventListener("click", seeMenu));
