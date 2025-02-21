// Array of background images for a dynamic effect
const images = [
    'p6.jpg',
];

let currentIndex = 0;

// Function to change background image dynamically
function changeBackground() {
    document.querySelector('.overlay').style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Load first background image on start
window.onload = changeBackground;
