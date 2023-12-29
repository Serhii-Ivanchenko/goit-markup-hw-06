let menuOpenBtn = document.querySelector(".burger-btn");
let menu = document.querySelector(".mobile-menu");
let menuCloseBtn = document.querySelector(".menu-close-btn");

if (menuBtn) {
    menuOpenBtn.addEventListener("click", function () {
        menu.classList.add("is-open");
    })

    menuCloseBtn.addEventListener("click", function () {
        menu.classList.remove('is-open')
    })
}