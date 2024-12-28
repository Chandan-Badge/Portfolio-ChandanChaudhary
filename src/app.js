let btn = document.querySelector(".about-btn");
let container = document.querySelector(".container");
let closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", () => {
    container.classList.add("open-popup");
})

closeBtn.addEventListener("click", () => {
    container.classList.remove("open-popup");
})