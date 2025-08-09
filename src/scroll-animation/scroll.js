// ==> Animation on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("show-animation");
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

// ==> New animation
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("show-move");
        } else {
            // entry.target.classList.remove("show-move");
        }
    });
});

const hiddenElementsLeft_sm = document.querySelectorAll(".move-from-left-sm");
const hiddenElementsRight_sm = document.querySelectorAll(".move-from-right-sm");
const hiddenElementsTop_sm = document.querySelectorAll(".move-from-top-sm");
const hiddenElementsBottom_sm = document.querySelectorAll(".move-from-bottom-sm");

const hiddenElementsLeft_md = document.querySelectorAll(".move-from-left-md");
const hiddenElementsRight_md = document.querySelectorAll(".move-from-right-md");
const hiddenElementsTop_md = document.querySelectorAll(".move-from-top-md");
const hiddenElementsBottom_md = document.querySelectorAll(".move-from-bottom-md");

hiddenElementsLeft_sm.forEach((e1) => observer2.observe(e1));
hiddenElementsRight_sm.forEach((e1) => observer2.observe(e1));
hiddenElementsTop_sm.forEach((e1) => observer2.observe(e1));
hiddenElementsBottom_sm.forEach((e1) => observer2.observe(e1));

hiddenElementsLeft_md.forEach((e1) => observer2.observe(e1));
hiddenElementsRight_md.forEach((e1) => observer2.observe(e1));
hiddenElementsTop_md.forEach((e1) => observer2.observe(e1));
hiddenElementsBottom_md.forEach((e1) => observer2.observe(e1));