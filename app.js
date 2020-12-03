//jshint esversion:6
const icons = document.querySelectorAll(".section-1-icons i");
const menu = document.querySelector(".menu");
i = 1;

///Slideshow
setInterval(() => {
  i++;
  let icon_el = document.querySelector(".section-1-icons .change");
  icon_el.classList.remove("change");

  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon_el.nextElementSibling.classList.add("change");
  }
}, 3000);

////Navigation menu
menu.addEventListener("click", () => {
  let target = document.querySelectorAll(".target");
  target.forEach((e) => {
    e.classList.toggle("change");
  });
});
