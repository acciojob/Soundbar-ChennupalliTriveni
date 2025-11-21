// All sound names
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Create audio objects
const audioMap = {};

sounds.forEach(sound => {
    audioMap[sound] = new Audio(`./sounds/${sound}.mp3`);
});

// Play selected sound
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        stopAllSounds();
        const soundName = btn.dataset.sound;
        audioMap[soundName].play();
    });
});

// Stop button
document.querySelector(".stop").addEventListener("click", stopAllSounds);

// Function to stop all sounds
function stopAllSounds() {
    sounds.forEach(sound => {
        audioMap[sound].pause();
        audioMap[sound].currentTime = 0;
    });
}
