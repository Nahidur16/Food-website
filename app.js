//jshint esversion:6
const icons = document.querySelectorAll(".section-1-icons i");
i = 1;
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
