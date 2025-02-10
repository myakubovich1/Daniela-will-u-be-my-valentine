// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        playSound('yes-sound.mp3'); // Play "Yes" sound
        playMusic(); // Play background music
        launchConfetti(); // Launch confetti
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
            spawnHeartExplosion(); // Heart explosion
            displayMessage(); // Show personalized message
        });
    } else if (option === 'no') {
        playSound('no-sound.mp3'); // Play "No" sound
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to play the background music
function playMusic() {
    var music = document.getElementById('background-music');
    music.play().catch(function (error) {
        console.error("Music playback blocked by browser:", error);
    });
}

// Function to play sound effects
function playSound(effect) {
    var audio = new Audio(effect);
    audio.play();
}

// Function to launch confetti
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

// Flash rainbow colors function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD'; // Reset background to pink
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function to display a personalized message
function displayMessage() {
    var message = document.createElement('div');
    message.id = 'valentine-message';
    message.innerHTML = '👁️💖🫵, Daniela'; // Adjusted message
    document.body.appendChild(message);
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = ''; // Clear the container first
    const imageContainer = document.getElementById('image-container');
    const catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.id = 'cat-heart'; // Add an ID for styling
    imageContainer.appendChild(catHeartImage);
    document.getElementById('options').style.display = 'none'; // Hide the buttons
}

// Easter egg: Dancing panda on click
document.body.addEventListener('click', function (e) {
    const panda = document.createElement('img');
    panda.src = 'dancing-panda.gif'; // Replace with your panda gif
    panda.className = 'panda';
    panda.style.left = e.pageX + 'px';
    panda.style.top = e.pageY + 'px';
    document.body.appendChild(panda);
    setTimeout(() => panda.remove(), 3000); // Remove after 3 seconds
});

// Heart explosion on button click
function spawnHeartExplosion() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'explosion-heart';
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${Math.random() * window.innerHeight}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500); // Remove after animation
    }
}

// Display the cat.gif initially
displayCat();
