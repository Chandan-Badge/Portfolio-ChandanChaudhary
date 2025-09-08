// Button for scroll on footer
let aboutFoot = document.querySelector(".about-foot");
// let resumeFoot = document.querySelector(".resume-foot");
let projectFoot = document.querySelector(".project-foot");
let servicesFoot = document.querySelector(".services-foot");
let principlesFoot = document.querySelector(".principles-foot");
let connectFoot = document.querySelector(".connect-foot");
let testimonialsFoot = document.querySelector(".testimonials-foot");

const home = document.querySelector("#home-section");
const projects = document.querySelector("#projects-section");
const services = document.querySelector("#services-section");
const principles = document.querySelector("#principles-section");
const connect = document.querySelector("#connect-section");
const testimonials = document.querySelector("#testimonials-section");
const footer = document.querySelector("#footer-section");

aboutFoot.addEventListener("click", () => {
    home.scrollIntoView({ behavior: 'smooth' });
});

projectFoot.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: 'smooth' });
});

servicesFoot.addEventListener("click", () => {
    services.scrollIntoView({ behavior: 'smooth' });
});

principlesFoot.addEventListener("click", () => {
    principles.scrollIntoView({ behavior: 'smooth' });
});

connectFoot.addEventListener("click", () => {
    connect.scrollIntoView({ behavior: 'smooth' });
});

testimonialsFoot.addEventListener("click", () => {
    testimonials.scrollIntoView({ behavior: 'smooth' });
});

// ==> Old Way
// aboutFoot.addEventListener("click", () => {
//     window.scrollTo(0, 0);
// })

// resumeFoot.addEventListener("click", () => {
//     window.scrollTo(0, 0);
// })

// projectFoot.addEventListener("click", () => {
//     window.scrollTo(0, 700);
// })

// servicesFoot.addEventListener("click", () => {
//     window.scrollTo(0, 2950);
// })

// principlesFoot.addEventListener("click", () => {
//     window.scrollTo(0, 3450);
// })

// connectFoot.addEventListener("click", () => {
//     window.scrollTo(0, 4150);
// })

// testimonialsFoot.addEventListener("click", () => {
//     window.scrollTo(0, 4800);
// });