// var video;

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")

// });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    
    // Initialize the video element
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
    video.volume = 1; // Set initial volume to 100%
    document.getElementById("volume").textContent = (video.volume * 100) + "%";

    // Play Button
    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        document.getElementById("volume").textContent = (video.volume * 100) + "%";
    });

    // Pause Button
    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

    // Slow Down
    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed: " + video.playbackRate);
    });

    // Speed Up
    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("New speed: " + video.playbackRate);
    });

    // Skip Ahead
    document.querySelector("#skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current location: " + video.currentTime);
    });

    // Mute
    document.querySelector("#mute").addEventListener("click", function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
    });

    // Volume Slider
    document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.getElementById("volume").textContent = (video.volume * 100) + "%";
    });

    // Old School Styling
    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    // Original Styling
    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});