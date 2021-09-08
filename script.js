// responsive navigation for mobiles etc
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");
const navlink = document.querySelectorAll(".navlink");
const btnHero = document.querySelector(".btn-hero");
hamburger.addEventListener("click", function() {
    console.log(navlinks);
    navlinks.classList.toggle("navlinks");
    navlinks.classList.toggle("nav-open");
    for (let i = 0; i < navlink.length; i++) {
        navlink[i].classList.toggle("navlink");
        navlink[i].classList.toggle("navlink-open");
    }
});

window.addEventListener("load", function() {
    btnHero.classList.add("btn-hero-show");
});