/* =====================================================
   ILSENORI
   JavaScript
===================================================== */


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-active");

});


/* =========================
   CLOSE MENU
========================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("mobile-active");

    });

});


/* =========================
   SCROLL HEADER
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   FADE IN ELEMENTS
========================= */

const observerOptions = {

    threshold: 0.12

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, observerOptions);


const animatedElements = document.querySelectorAll(
    ".product-card, .about-content, .about-decoration, .intro"
);

animatedElements.forEach(element => {

    element.classList.add("animate");

    observer.observe(element);

});