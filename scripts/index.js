// Giving access to hamburger and nav-menu classes
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

//Activates the X animation on click when opening/closing menu on mobile
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//Closes nav menu when you click a link in it
document.querySelectorAll("nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))