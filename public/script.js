let currentUser = null;

function connect() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();
    if (!username) {
        alert('Please enter a username.');
        return;
    }
    currentUser = username;
    document.getElementById('login').style.display = 'none';
    document.getElementById('chat').style.display = 'block';
}

function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();
    if (!message) return;
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.innerText = `${currentUser}: ${message}`;
    chatBox.appendChild(messageElement);
    messageInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

function exitChat() {
    alert("You have exited the chat.");
    currentUser = null;
    document.getElementById('chat').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}
