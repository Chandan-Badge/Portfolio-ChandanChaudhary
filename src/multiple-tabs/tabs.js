const tabs = document.querySelectorAll(".tab-btn");
const allContent = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        tabs.forEach(tab => {tab.classList.remove("active")});
        tab.classList.add("active");

        let line = document.querySelector(".line");
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        allContent.forEach(content => {content.classList.remove("active")});
        allContent[index].classList.add("active");
    })

})