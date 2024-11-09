// Romantic Poem Content
const letterContent = `
    প্রিয়তমা, 
    চাঁদের আলোয় তোমার মিষ্টি হাসি, 
    এই হৃদয় যেন তোমারই ছায়ায় বাসি।
    তোমার স্পর্শে মুছে যায় সব দুঃখের গাথা,
    তোমার ভালোবাসা আমার জীবনের পথের প্রভা।
    প্রিয়তমা, আমার জীবনের প্রতিটি স্বপ্ন তুমি, 
    তোমার জন্যই সব সুর, সব কবিতা, আর আমার প্রতিটি মুহূর্তের নীরবতা।
    তোমাকে ভালোবাসি চিরকাল, তোমার পাশে রয়েই যাব, চিরদিন।
`;

const letterElement = document.getElementById("letter");

// Function to create the animated text effect for the poem
function createPoemTextEffect(text) {
    const words = text.split(/\s+/);
    words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        span.style.animationDelay = `${index * 0.2}s`;
        letterElement.appendChild(span);
    });
}

// Generate stars for background
function generateStars() {
    const starContainer = document.querySelector(".star-container");
    for (let i = 0; i < 80; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 1 + 1 + "s";
        starContainer.appendChild(star);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createPoemTextEffect(letterContent);
    generateStars();
});
