const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navlink");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});