// Button for scroll on footer
let aboutFoot = document.querySelector(".about-foot");
// let resumeFoot = document.querySelector(".resume-foot");
let projectFoot = document.querySelector(".project-foot");
let servicesFoot = document.querySelector(".services-foot");
let principlesFoot = document.querySelector(".principles-foot");
let connectFoot = document.querySelector(".connect-foot");
let testimonialsFoot = document.querySelector(".testimonials-foot");

aboutFoot.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

// resumeFoot.addEventListener("click", () => {
//     window.scrollTo(0, 0);
// })

projectFoot.addEventListener("click", () => {
    window.scrollTo(0, 700);
})

servicesFoot.addEventListener("click", () => {
    window.scrollTo(0, 2950);
})

principlesFoot.addEventListener("click", () => {
    window.scrollTo(0, 3450);
})

connectFoot.addEventListener("click", () => {
    window.scrollTo(0, 4150);
})

testimonialsFoot.addEventListener("click", () => {
    window.scrollTo(0, 4800);
});