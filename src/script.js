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

lightBtn.addEventListener("click", () => {
    darkBtn.classList.add("visible");
    darkBtn.classList.remove("hidden");
    lightBtn.classList.add("hidden");

    body.classList.add("light");

    // body.style.background = "#fff";
})

darkBtn.addEventListener("click", () => {
    lightBtn.classList.add("visible");
    lightBtn.classList.remove("hidden");
    darkBtn.classList.add("hidden");

    body.classList.remove("light");
})