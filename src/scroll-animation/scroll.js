// Animation on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("show-animation");
            // entry.target.classList.add("show-simple");
        } else {
            // entry.target.classList.remove("show-animation");
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

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting) {
            // entry.target.classList.add("show-animation");
            entry.target.classList.add("show-simple");
        } else {
            // entry.target.classList.remove("show-animation");
        }
    });
});
const hiddenElementsSM = document.querySelectorAll(".simple");

hiddenElementsSM.forEach((e1) => observer2.observe(e1));