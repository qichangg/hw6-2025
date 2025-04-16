var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.getElementById("volume").textContent = Math.round(video.volume * 100) + "%";
});


// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
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

// Old School
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
