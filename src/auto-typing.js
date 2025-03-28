// Auto Typing
const autoType = document.querySelector(".auto-type");

let typeList = ["Java(DSA)", "MERN Stack Developer", "Javascript", "C++", "Python", "Git & GitHub", "HTML", "CSS", "MongoDB", "Express.js", "React.js", "Node.js", "Figma", "Terminal", "Bootstrap", "Tailwind"];


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