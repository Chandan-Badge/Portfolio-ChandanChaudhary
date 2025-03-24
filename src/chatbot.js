const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageBtn = document.querySelector(".send-message");

// API setup
const API_KEY = "AIzaSyARrus7KKPz9xd5gZiln5a9wiThXg3YLKw";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const userData = {
    message: null
}

// create message element with dynamic classes and return it
const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);

    div.innerHTML = content;
    return div;
}

// Generate bot response using API
const generateBotResponse = async(incomingMessageDiv) => {
    const messageElement = incomingMessageDiv.querySelector(".message-text");

    const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            contents: [{
                parts: [{text: userData.message}]
            }]
        })
    }

    try {
        // Fetching bot response from API
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        if(!response.ok) throw new Error(data.error.message);

        console.log(data);

        // Extract and display bot's response text
        const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        messageElement.innerText = apiResponseText;

    } catch(error) {
        console.log(error);
        messageElement.innerText = error.message;
        messageElement.style.color = "#ff0000";
    } finally {
        incomingMessageDiv.classList.remove("thinking");
        chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    }
}

// Handle outgoing user message
const handleOutgoingMessage = (e) => {
    e.preventDefault();
    userData.message = messageInput.value.trim();
    messageInput.value = "";

    // create and display user message
    const messageContent = `<div class="message-text py-2 px-4 max-w-[75%] text-[0.95rem] text-white bg-[#5350c4] rounded-l-xl rounded-tr-xl">  </div>`;
    
    const outgoingMessageDiv =  createMessageElement(messageContent, "user-message");
    outgoingMessageDiv.querySelector(".message-text").innerText = userData.message;

    chatBody.appendChild(outgoingMessageDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

    // Simulate bot response with thinking indicator after a delay
    setTimeout(() => {
        const messageContent = `<div class="message bot-message flex gap-3 items-center">
                <img src="./src/assets/botavatar.svg" alt="bot" class="bot-avatar w-9 h-9 p-[6px] fill-white bg-[#5350c4] flex-shrink-0 rounded-full self-end mb-[2px]">
                
                <div class="message-text py-2 px-3 max-w-[75%] text-[0.95rem] bg-[#f2f2ff] rounded-r-xl rounded-tl-xl">
                    <!-- Thinking message -->
                    <div class="thinking-indicator flex gap-1 py-2 px-4">
                        <div class="dot h-2 w-2 rounded-full bg-[#6f6bc2]"></div>
                        <div class="dot h-2 w-2 rounded-full bg-[#6f6bc2]"></div>
                        <div class="dot h-2 w-2 rounded-full bg-[#6f6bc2]"></div>
                    </div>
                </div>
            </div>`;
    
        const incomingMessageDiv =  createMessageElement(messageContent, "bot-message");

        chatBody.appendChild(incomingMessageDiv);
        chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
        generateBotResponse(incomingMessageDiv);
    }, 600)
}

// Handle error key press for sending messages
messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if(e.key == "Enter" && userMessage) {
        handleOutgoingMessage(e);
    }
})

sendMessageBtn.addEventListener("click", (e) => handleOutgoingMessage(e))