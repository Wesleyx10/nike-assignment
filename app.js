const open = document.querySelector(".open");
const close = document.querySelector(".close");
const links = document.querySelector(".links");

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
  links.style.display = "flex";
});
close.addEventListener("click", () => {
  open.style.display = "block";
  close.style.display = "none";
  links.style.display = "none";
});