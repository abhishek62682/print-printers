const menu = document.querySelector("#hamburger");
const close = document.querySelector("#closed");
const slideMenuFrame = document.querySelector(".slide-menu-frame ")
menu.addEventListener("click", function () {
  slideMenuFrame.classList.add("active");

  menu.classList.add("d-none");
  close.classList.remove("d-none");
});

close.addEventListener("click", function () {
  slideMenuFrame.classList.remove("active");

  close.classList.add("d-none");
  menu.classList.remove("d-none");
});

