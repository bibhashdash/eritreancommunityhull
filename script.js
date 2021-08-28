// responsive navigation for mobiles etc
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

// modal for activities page
const modalBackground = document.querySelector("#modal-background");
const activityCards = document.querySelectorAll(".activity-card");
const btnModalClose = document.querySelectorAll(".btn-modal-close");

activityCards.forEach(function(e) {
    e.addEventListener("click", function() {
        modalBackground.classList.remove("modal-background-closed");
        modalBackground.classList.add("modal-background-open");
        e.nextElementSibling.classList.remove("modal-closed");
        e.nextElementSibling.classList.add("modal-open");
    });
});

btnModalClose.forEach(function(el) {
    el.addEventListener("click", function() {
        modalBackground.classList.remove("modal-background-open");
        modalBackground.classList.add("modal-background-closed");
        el.parentElement.classList.remove("modal-open");
        el.parentElement.classList.add("modal-closed");
    });
});