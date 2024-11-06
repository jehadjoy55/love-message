document.getElementById('sendBtn').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const chatBox = document.getElementById('chatBox');

    if (messageInput.value.trim() === "") return;  // Don't send empty messages

    // Create a new message element
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'sender');
    newMessage.textContent = messageInput.value;

    // Add the message to the chat box
    chatBox.appendChild(newMessage);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input field
    messageInput.value = "";
});
