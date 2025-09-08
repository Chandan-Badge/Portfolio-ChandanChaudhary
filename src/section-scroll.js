// Button for scroll on footer
let aboutFoot = document.querySelector(".about-foot");
aboutFoot.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

// let resumeFoot = document.querySelector(".resume-foot");
// resumeFoot.addEventListener("click", () => {
//     window.scrollTo(0, 0);
// })

let projectFoot = document.querySelector(".project-foot");
projectFoot.addEventListener("click", () => {
    window.scrollTo(0, 700);
})

let servicesFoot = document.querySelector(".services-foot");

servicesFoot.addEventListener("click", () => {
    window.scrollTo(0, 2950);
})

let principlesFoot = document.querySelector(".principles-foot");

principlesFoot.addEventListener("click", () => {
    window.scrollTo(0, 3450);
})

let connectFoot = document.querySelector(".connect-foot");

connectFoot.addEventListener("click", () => {
    window.scrollTo(0, 4150);
})

let testimonialsFoot = document.querySelector(".testimonials-foot");

testimonialsFoot.addEventListener("click", () => {
    window.scrollTo(0, 4800);
})

// Main Back to Top bottom
let totopBtn = document.querySelector(".totop-btn");
totopBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        totopBtn.classList.add("visible");
    }
    else {
        totopBtn.classList.remove("visible");
    }
});