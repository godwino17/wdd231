const navBtn = document.querySelector("#nav-btn");
const navMenu = document.querySelector("#menu");

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("show");
    navMenu.classList.toggle("show");
})
