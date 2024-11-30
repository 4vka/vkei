document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundAudio');
    const volumeSlider = document.getElementById('volume-slider');
    const playMusicButton = document.getElementById('play-music');
    const stopMusicButton = document.getElementById('stop-music');

    // Set initial volume
    audio.volume = 0.3;

    // Adjust volume dynamically
    volumeSlider.addEventListener('input', () => {
        audio.volume = parseFloat(volumeSlider.value); // Use slider's value
    });

    // Play music when Play Music button is clicked
    playMusicButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play(); // Resume playback from the current position
        }
    });

    // Stop music without resetting currentTime
    stopMusicButton.addEventListener('click', () => {
        audio.pause(); // Pause playback
        // `currentTime` is not reset, so it resumes from the same position
    });
});
