const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageBtn = document.querySelector(".send-message");
const fileInput = document.querySelector("#file-input");
const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
const fileCancelButton = document.querySelector("#file-cancel");
const chatBotToggler = document.querySelector(".chatbot-toggler");
const closeChatbot = document.querySelector(".close-chatbot");

const chatbotPopup = document.querySelector(".chatbot-popup");

// API setup
const API_KEY = "AIzaSyARrus7KKPz9xd5gZiln5a9wiThXg3YLKw";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const userData = {
    message: null,
    file: {
        data: null,
        mime_type: null
    }
}

const chatHistory = [];

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
    
    // Add user message to chat history
    chatHistory.push({
        role: "user",
        parts: [{ text: userData.message }, ...(userData.file.data ? [{ inline_data: userData.file }] : [])]
    })

    // API request option
    const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            contents: chatHistory
        })
    }

    try {
        // Fetching bot response from API
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        if(!response.ok) throw new Error(data.error.message);

        // console.log(data);

        // Extract and display bot's response text
        const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        messageElement.innerText = apiResponseText;

        // Add bot response to chat history
        chatHistory.push({
            role: "model",
            parts: [{ text: apiResponseText }]
        });

    } catch(error) {
        // Handle error in API response
        console.log(error);
        messageElement.innerText = error.message;
        messageElement.style.color = "#ff0000";
    } finally {
        // Reset user's file data, removing thinking indicator and scroll chat to bottom
        userData.file = {};
        incomingMessageDiv.classList.remove("thinking");
        chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    }
}

// Handle outgoing user message
const handleOutgoingMessage = (e) => {
    e.preventDefault();
    userData.message = messageInput.value.trim();
    messageInput.value = "";
    fileUploadWrapper.classList.remove("file-uploaded");

    // create and display user message
    const messageContent = `<div class="message-text py-2 px-4 max-w-[75%] text-[12px] sm:text-[14px] text-white bg-[#0f6dbf] rounded-l-xl rounded-tr-xl">  </div>
                            ${userData.file.data ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="attachment w-[40%] mt-1 rounded-l-lg rounded-tr-lg" />` : ""}`;
    
    const outgoingMessageDiv =  createMessageElement(messageContent, "user-message");
    outgoingMessageDiv.querySelector(".message-text").innerText = userData.message;

    chatBody.appendChild(outgoingMessageDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

    // Simulate bot response with thinking indicator after a delay
    setTimeout(() => {
        const messageContent = `<div class="message bot-message text-black flex gap-3 items-center">
                <img src="./assets/bot-icons/botavatar.svg" alt="bot" class="bot-avatar w-8 sm:w-9 h-8 sm:h-9 p-[6px] fill-white bg-[#0f6dbf] flex-shrink-0 rounded-full self-end mb-[2px]">
                
                <div class="message-text py-2 px-3 max-w-[75%] text-[12px] sm:text-[14px] bg-[#f2f2ff] dark:bg-gray-700 text-black dark:text-[#fff] rounded-r-xl rounded-tl-xl">
                    <!-- Thinking message -->
                    <div class="thinking-indicator flex gap-1 py-2 px-4">
                        <div class="dot h-2 w-2 rounded-full bg-[#0f84bf]"></div>
                        <div class="dot h-2 w-2 rounded-full bg-[#0f84bf]"></div>
                        <div class="dot h-2 w-2 rounded-full bg-[#0f84bf]"></div>
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
});

// handle file input changes and preview the selected file
fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if(!file) return;

    const render = new FileReader();
    render.onload = (e) => {
        fileUploadWrapper.querySelector("img").src = e.target.result;
        fileUploadWrapper.classList.add("file-uploaded");
        const base64String = e.target.result.split(",")[1];

        // Store file data in userData
        userData.file = {
            data: base64String,
            mime_type: file.type
        }

        console.log(userData);
        fileInput.value = "";
    }

    render.readAsDataURL(file);
})

// Cancel the upload
fileCancelButton.addEventListener("click", () => {
    userData.file = {};
    fileUploadWrapper.classList.remove("file-uploaded");
});

// Initialize emoji picker and handle emoji section
const picker = new EmojiMart.Picker({
    theme: "light",
    skinTonePosition: "none",
    previewPosition: "none",
    onEmojiSelect: (emoji) => {
        const { selectionStart: start, selectionEnd: end } = messageInput;
        messageInput.setRangeText(emoji.native, start, end, "end");
        messageInput.focus();
    },
    onClickOutside: (e) => {
        if(e.target.id === "emoji-picker") {
            document.body.classList.toggle("show-emoji-picker");
        } else {
            document.body.classList.remove("show-emoji-picker");
        }
    }
});

document.querySelector(".chat-form").appendChild(picker);

sendMessageBtn.addEventListener("click", (e) => handleOutgoingMessage(e));
document.querySelector("#file-upload").addEventListener("click", () => fileInput.click());

chatBotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
closeChatbot.addEventListener("click", () => document.body.classList.remove("show-chatbot"));