const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");
const navlink = document.querySelectorAll(".navlink");
hamburger.addEventListener("click", function() {
    console.log(navlinks);
    navlinks.classList.toggle("navlinks");
    navlinks.classList.toggle("nav-open");
    for (let i = 0; i < navlink.length; i++) {
        navlink[i].classList.toggle("navlink");
        navlink[i].classList.toggle("navlink-open");
    }
});