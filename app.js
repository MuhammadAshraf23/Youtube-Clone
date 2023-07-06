let menu = document.getElementsByClassName("menu-bar")[0];
let slides = document.getElementsByClassName("slider");
let container = document.getElementsByClassName("large-main");

menu.onclick = function() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.toggle("small-slider");
  }
  for (let i = 0; i < container.length; i++) {
    container[i].classList.toggle("large-main");
  }
}