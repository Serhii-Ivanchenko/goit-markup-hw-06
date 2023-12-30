let menuBtn = document.querySelector(".burger-btn");
let menu = document.querySelector(".mobile-menu");
let menuItem = document.querySelectorAll(".close-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("is-open");
    menu.classList.toggle("is-open");
  });

  menuItem.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      menuBtn.classList.toggle("is-open");
      menu.classList.toggle("is-open");
    });
  });
}

let modalOpenBtn = document.querySelector(".hero-button");
let modal = document.querySelector(".backdrop");
let modalCloseBtn = document.querySelector(".close-btn");

if (modalOpenBtn && modalCloseBtn && modal) {
  modalOpenBtn.addEventListener("click", function () {
    modal.classList.add("is-open");
  });

  modalCloseBtn.addEventListener("click", function () {
    modal.classList.remove("is-open");
  });
}