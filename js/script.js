// Audio files 
const audioFiles = [
    'Audio/song 1.mp3',
    'Audio/song.mp3',
    'Audio/song 2.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
];

const buttons = [
    document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3'),
    document.getElementById('btn4')
];

const audios = audioFiles.map(url => new Audio(url));
let currentPlaying = null;

// Add event listeners to all buttons
buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const audio = audios[index];

        // If clicking the same button
        if (currentPlaying === audio) {
            if (audio.paused) {
                playAudio(audio, button);
            } else {
                pauseAudio(audio, button);
            }
        }
        // If clicking a different button
        else {
            // Stop currently playing audio
            if (currentPlaying) {
                pauseAudio(currentPlaying, buttons[audios.indexOf(currentPlaying)]);
            }
            // Play new audio
            playAudio(audio, button);
            currentPlaying = audio;
        }
    });
});

function playAudio(audio, button) {
    audio.play();
    button.classList.add('playing');
    createSparkles(button);
}

function pauseAudio(audio, button) {
    audio.pause();
    button.classList.remove('playing');
    clearSparkles(button);
}

// Create sparkle effects
function createSparkles(button) {
    const sparklesContainer = button.querySelector('.sparkles-container');
    sparklesContainer.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.innerHTML = '✨';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparklesContainer.appendChild(sparkle);
    }
}

function clearSparkles(button) {
    const sparklesContainer = button.querySelector('.sparkles-container');
    sparklesContainer.innerHTML = '';
}

// Reset when audio ends
audios.forEach((audio, index) => {
    audio.addEventListener('ended', function () {
        buttons[index].classList.remove('playing');
        clearSparkles(buttons[index]);
        currentPlaying = null;
    });
});

// Fireworks effect
function createFirework() {
    const fireworks = document.getElementById('fireworks');
    const firework = document.createElement('div');
    firework.classList.add('firework');
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random color
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random movement
    const tx = (Math.random() - 0.5) * 200;
    const ty = (Math.random() - 0.5) * 200;
    
    firework.style.left = `${x}%`;
    firework.style.top = `${y}%`;
    firework.style.backgroundColor = color;
    firework.style.boxShadow = `0 0 10px 2px ${color}`;
    firework.style.setProperty('--tx', `${tx}px`);
    firework.style.setProperty('--ty', `${ty}px`);
    
    fireworks.appendChild(firework);
    
    // Remove after animation
    setTimeout(() => {
        firework.remove();
    }, 1500);
}

// Create multiple fireworks
setInterval(createFirework, 200);

// Add decorative elements
const decorations = ['🎉', '✨', '🎊', '🎇', '🎆', '🥳', '🌟'];
for (let i = 0; i < 15; i++) {
    const decor = document.createElement('div');
    decor.classList.add('decoration');
    decor.textContent = decorations[Math.floor(Math.random() * decorations.length)];

    // Random position
    decor.style.left = `${Math.random() * 100}%`;
    decor.style.top = `${Math.random() * 100}%`;

    // Random animation delay
    decor.style.animationDelay = `${Math.random() * 5}s`;

    document.body.appendChild(decor);
}

// Page navigation function
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show the requested page
    document.getElementById(pageId).classList.add('active');
}

// Shayari data
const shayaris = [
    {
        text: "नया साल लाया है खुशियों की बहार,\nहर दिन हो मुबारक, हर पल हो प्यार।\nमिले सफलता आपको हर कदम पर,\nयही दुआ है हमारी बार-बार।",
        author: "- Er. Dipu Singh Kushwaha"
    },
    {
        text: "पुराने साल की विदाई लेकर आया हूं,\nनए साल की शुभकामनाएं लेकर आया हूं।\nआपकी जिंदगी में खुशियां भर दूं,\nइसी ख्वाहिश के साथ आया हूं।",
        author: "- Er. Dipu Singh Kushwaha"
    },
    {
        text: "हर सुबह नई उम्मीद लेकर आती है,\nहर शाम नई खुशी दे जाती है।\nनया साल आपके लिए लेकर आए,\nवो सब कुछ जो आपकी दुआएं मांगती हैं।",
        author: "- Er. Dipu Singh Kushwaha"
    },
    {
        text: "नया साल आपके जीवन में लाए,\nसुख, शांति और समृद्धि की बहार।\nहर मुश्किल आसान हो जाए,\nहर दिन हो आपके लिए खास।",
        author: "- Er. Dipu Singh Kushwaha"
    }
];

let currentShayariIndex = 0;

// Event Listeners for page navigation
document.getElementById('wishBtn').addEventListener('click', function() {
    showPage('wishPage');
});

document.getElementById('backBtn1').addEventListener('click', function() {
    showPage('mainPage');
});

document.getElementById('shayariBtn').addEventListener('click', function() {
    showPage('shayariPage');
});

document.getElementById('songBtn').addEventListener('click', function() {
    showPage('songPage');
});

document.getElementById('giftBtn').addEventListener('click', function() {
    showPage('giftPage');
});

document.getElementById('backBtn2').addEventListener('click', function() {
    showPage('wishPage');
});

document.getElementById('backBtn3').addEventListener('click', function() {
    showPage('wishPage');
});

document.getElementById('backBtn4').addEventListener('click', function() {
    showPage('wishPage');
});

// Next Shayari functionality
document.getElementById('nextShayariBtn').addEventListener('click', function() {
    currentShayariIndex = (currentShayariIndex + 1) % shayaris.length;
    const shayari = shayaris[currentShayariIndex];
    document.getElementById('shayariText').innerHTML = shayari.text.replace(/\n/g, '<br>');
    document.getElementById('shayariAuthor').textContent = shayari.author;
});

// Open Gift functionality
document.getElementById('openGiftBtn').addEventListener('click', function() {
    document.querySelector('.gift-box').style.display = 'none';
    document.getElementById('giftMessage').style.display = 'block';
});