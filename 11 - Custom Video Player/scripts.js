// Custom Video Player Interface
// Cameron Yick
// 1/22/2016
// Project Goal: Customize the video player!
// build custom controls

// select elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build out basic functions
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method](); // same effect as below
    // if (video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log('update the button');
}

// Applies to all things that contain a 
// data-skip attribute
function skip() {
    // console.log('Skipping');
    // console.log(this.dataset); // data attributes. is parsefloat beat + cast
    video.currentTime += this.parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // console.log(this.name);
    // console.log(this.value);
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`; 
}

// update progress bar when clicked
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    // console.log(e);
    video.currentTime = scrubTime;

}

// Hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton); // agnostic to button
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

// Buttons on bottom
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

// slider
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// pattern for mousedown
let mousedown = false;
progress.addEventListener('click', scrub);
// fire only if held down
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);