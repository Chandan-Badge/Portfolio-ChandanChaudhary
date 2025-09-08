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

// Back to Top & Scroll on footer logo
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
});

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

// Real time clock
function updateClock() {
    const now = new Date();

    // Time formatting
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let timeString = hours + ":" + minutes;
    let ampmString = ampm;

    // Date formatting
    const options = { month: "long", day: "numeric" };
    const dateString = now.toLocaleDateString("en-US", options);

    document.getElementById("time").textContent = timeString;
    document.getElementById("am-pm").textContent = ampmString;
    document.getElementById("date").textContent = dateString;
}

// Update every second
setInterval(updateClock, 1000);
updateClock();