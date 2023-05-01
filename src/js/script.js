let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")

burger.onclick = function () {
  menu.classList.toggle ("active-burger")
  burger.classList.toggle ("burger-open")
}
