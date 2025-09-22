const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button");


themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})



menuButton.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden");
    });
});

screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});
if(window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden");
}
