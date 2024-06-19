document.addEventListener("DOMContentLoaded", function() {
    const musicButton = document.getElementById('music-button');
    const musicIcon = document.getElementById('music-icon');
    const backgroundMusic = document.getElementById('background-music');
    const unmuteIconPath = 'path_to_unmute_icon.png'; // Path to the unmute icon
    const muteIconPath = 'path_to_mute_icon.png'; // Path to the mute icon

    musicButton.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            //musicIcon.src = mute.png;
            //musicIcon.alt = 'Mute';
        } else {
            backgroundMusic.pause();
            //musicIcon.src = unmute.png;
            //musicIcon.alt = 'Unmute';
        }
    });
});

function changeIcon() {
    let x = document.getElementById('music-icon')
    x.classList.toggle("fa-pause");
}

function showMore(){
    var moreEvents = document.getElementById('more');
    var moreBtn = document.getElementById('showmore');

    moreEvents.style.display = "inline";
    moreBtn.style.display = "none";
}