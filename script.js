// Import the necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCszRPflrZXxexQ7IE94Azbfbiz6cuMlT8",
  authDomain: "love-massage-1eb41.firebaseapp.com",
  projectId: "love-massage-1eb41",
  storageBucket: "love-massage-1eb41.firebasestorage.app",
  messagingSenderId: "353421617638",
  appId: "1:353421617638:web:dcce91547066745cc40e27",
  measurementId: "G-YGYKVFXM0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// DOM elements
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messagesContainer = document.getElementById("messages-container");

// Unique user ID (for example, could be entered by user)
const userId = "user1";  // This can be changed for testing with another device

// Send a message to Firebase
function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== "") {
    const messageRef = ref(db, 'messages/' + userId);
    set(messageRef, {
      message: message,
      timestamp: Date.now()
    });
    messageInput.value = '';  // Clear input
  }
}

// Display messages from Firebase in real-time
function displayMessages() {
  const messagesRef = ref(db, 'messages/');
  onValue(messagesRef, (snapshot) => {
    const messages = snapshot.val();
    messagesContainer.innerHTML = '';  // Clear previous messages

    for (const user in messages) {
      const message = messages[user];
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.innerHTML = `<span>${message.message}</span>`;
      messagesContainer.appendChild(messageElement);
    }
  });
}

// Add event listener to send button
sendBtn.addEventListener("click", sendMessage);

// Initialize message display
displayMessages();

