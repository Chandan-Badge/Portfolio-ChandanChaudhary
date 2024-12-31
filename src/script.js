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


// Auto Typing
const autoType = document.querySelector(".auto-type");

let typeList = ["Java(DSA)", "Full Stack Developer", "C++", "Python"];


function multiType(typeList, element, time) {

    let listIndex = 0;
    let charIndex = 0;
    let skipUpdate = 0;
    let reverseText = false;
    
    let intervalId = setInterval(() => {
    
        if(skipUpdate) {
            skipUpdate--;
            return;
        }
    
        if(!reverseText) {
            skipUpdate = 1;
            element.innerText = element.innerText +  typeList[listIndex][charIndex];
            charIndex++;
        } else {
            element.innerText = element.innerText.slice(0, element.innerText.length - 1);
            charIndex--;
        }
    
        if(charIndex === typeList[listIndex].length) {
            skipUpdate = 5;
            reverseText = true;
        }
    
        if(element.innerText.length === 0 && reverseText) {
            reverseText = false;
            charIndex = 0;
    
            listIndex++;
        }
    
        if(listIndex === typeList.length) {
            listIndex = 0;
        }
    }, 200)
}

multiType(typeList, autoType);