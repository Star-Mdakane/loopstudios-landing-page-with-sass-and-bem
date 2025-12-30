const burger = document.getElementById("burger");
const burgerClose = document.getElementById("close-burger");
const burgerMenu = document.getElementById("burger-menu");



burger.addEventListener("click", () => {
    burgerMenu.classList.add("open")
})

burgerClose.addEventListener("click", () => {
    burgerMenu.classList.remove("open")
})