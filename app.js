let users = {}; // Store active users
let currentUser = null;
let connectedUser = null;
let chatMessages = [];

// Function to handle user connection
function connect() {
    const username = document.getElementById('username').value.trim();
    
    if (!username) {
        alert("Please enter a username.");
        return;
    }
    
    if (users[username]) {
        alert("Username is already taken. Please choose another one.");
        return;
    }
    
    // Set current user and add to users
    currentUser = username;
    users[username] = true;

    // Switch to chat mode
    document.getElementById('login').style.display = 'none';
    document.getElementById('chat').style.display = 'block';
    alert(`Welcome, ${currentUser}!`);

    // Notify the other user if connected
    notifyOtherUser();
}

// Notify other user about connection request
function notifyOtherUser() {
    if (Object.keys(users).length === 2) {
        for (let user in users) {
            if (user !== currentUser) {
                connectedUser = user;
                alert(`${connectedUser} is now connected with you.`);
                break;
            }
        }
    } else {
        alert("Waiting for another user to connect...");
    }
}

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();
    
    if (!message) return;

    // Create message element and display in chat
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerText = `${currentUser}: ${message}`;
    chatBox.appendChild(messageElement);
    
    // Save message in chat history
    chatMessages.push({ user: currentUser, text: message });

    // Clear input and auto-scroll
    messageInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to exit the chat
function exitChat() {
    const exitChoice = confirm("Do you want to save the chat as PDF before exiting?");
    
    if (exitChoice) {
        saveChatAsPDF();
    }
    
    // Clear chat and reset
    resetChat();
}

// Function to save chat as PDF
function saveChatAsPDF() {
    const chatContent = chatMessages.map(msg => `${msg.user}: ${msg.text}`).join('\n');
    const blob = new Blob([chatContent], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${currentUser}_chat.pdf`;
    link.click();
    alert("Chat saved as PDF.");
}

// Function to reset the chat
function resetChat() {
    document.getElementById('chat-box').innerHTML = '';
    document.getElementById('login').style.display = 'block';
    document.getElementById('chat').style.display = 'none';
    
    // Clear current user session
    delete users[currentUser];
    currentUser = null;
    connectedUser = null;
    chatMessages = [];
}
