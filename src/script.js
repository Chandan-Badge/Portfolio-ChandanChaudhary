let btn = document.querySelector(".about-btn");
let container = document.querySelector(".container");
let closeBtn = document.querySelector(".close-btn");

//  Pop-up Function
btn.addEventListener("click", () => {
    container.classList.add("open-popup");
})

closeBtn.addEventListener("click", () => {
    container.classList.remove("open-popup");
})

// Back to Top & Scroll
let dragBtn = document.querySelector(".drag-btn");
let move = document.querySelector(".move");

dragBtn.addEventListener("click", () => {
    window.scrollTo(0, 700);
})

let backtoTop = document.querySelector(".backtop");

backtoTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

// Dark & Light Button
let darkBtn = document.querySelector(".dark-btn");
let lightBtn = document.querySelector(".light-btn");
let body = document.querySelector("body");
const html = document.querySelector("html");

lightBtn.addEventListener("click", () => {
    darkBtn.classList.add("visible");
    darkBtn.classList.remove("hidden");
    lightBtn.classList.add("hidden");

    html.classList.add("dark");
})

darkBtn.addEventListener("click", () => {
    lightBtn.classList.add("visible");
    lightBtn.classList.remove("hidden");
    darkBtn.classList.add("hidden");

    html.classList.remove("dark");
})

// footer scroll to top
let aboutFoot = document.querySelector(".about-foot");
aboutFoot.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

let resumeFoot = document.querySelector(".resume-foot");
resumeFoot.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

let projectFoot = document.querySelector(".project-foot");
projectFoot.addEventListener("click", () => {
    window.scrollTo(0, 700);
})

let servicesFoot = document.querySelector(".services-foot");

servicesFoot.addEventListener("click", () => {
    window.scrollTo(0, 2650);
})

let connectFoot = document.querySelector(".connect-foot");

connectFoot.addEventListener("click", () => {
    window.scrollTo(0, 3850);
})

// Back to Top
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
})

// Custom Cursor
const cursor = document.querySelector(".coursor");
const cursorDot = document.querySelector(".coursor-dot");
const cursorOutline = document.querySelector(".coursor-outline");

window.addEventListener("mousemove", (e) => {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards"});
});


// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElementsO = document.querySelectorAll(".not-show-odd");
const hiddenElementsE = document.querySelectorAll(".not-show-even");
const hiddenElementsP = document.querySelectorAll(".not-show-pop");
const hiddenElementsPs = document.querySelectorAll(".not-show-pop-slow");
const hiddenElementsT = document.querySelectorAll(".not-show-top");
const hiddenElementsB = document.querySelectorAll(".not-show-bottom");
const hiddenElementsR = document.querySelectorAll(".not-show-right");
const hiddenElementsL = document.querySelectorAll(".not-show-left");
const hiddenElementsRS = document.querySelectorAll(".not-show-right-special");
const hiddenElementsLS = document.querySelectorAll(".not-show-left-special");
const hiddenElementsRH = document.querySelectorAll(".not-show-right-high");
const hiddenElementsLH = document.querySelectorAll(".not-show-left-high");

hiddenElementsO.forEach((e1) => observer.observe(e1));
hiddenElementsE.forEach((e1) => observer.observe(e1));
hiddenElementsP.forEach((e1) => observer.observe(e1));
hiddenElementsPs.forEach((e1) => observer.observe(e1));
hiddenElementsT.forEach((e1) => observer.observe(e1));
hiddenElementsB.forEach((e1) => observer.observe(e1));
hiddenElementsR.forEach((e1) => observer.observe(e1));
hiddenElementsL.forEach((e1) => observer.observe(e1));
hiddenElementsRS.forEach((e1) => observer.observe(e1));
hiddenElementsLS.forEach((e1) => observer.observe(e1));
hiddenElementsRH.forEach((e1) => observer.observe(e1));
hiddenElementsLH.forEach((e1) => observer.observe(e1));