document.addEventListener("DOMContentLoaded", function() {
    const musicButton = document.getElementById('music-button');
    const musicIcon = document.getElementById('music-icon');
    const backgroundMusic = document.getElementById('background-music');
    const unmuteIconPath = 'path_to_unmute_icon.png'; // Path to the unmute icon
    const muteIconPath = 'path_to_mute_icon.png'; // Path to the mute icon
    const joinForm = document.getElementById('join-form');
    const thankYouOverlay = document.getElementById('thank-you-overlay');
    const closeOverlayButton = document.getElementById('close-overlay');

    musicButton.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicIcon.src = Home/mute.png;
            musicIcon.alt = 'Mute';
        } else {
            backgroundMusic.pause();
            musicIcon.src = Home/unmute.png;
            musicIcon.alt = 'Unmute';
        }
    });

    joinForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        thankYouOverlay.style.display = 'block'; // Show the overlay
    });

    closeOverlayButton.addEventListener('click', function() {
        thankYouOverlay.style.display = 'none'; // Hide the overlay
    });
});

function goBack() {
    window.location.href = 'Home.html'; // Change 'index.html' to the appropriate home page URL
}
