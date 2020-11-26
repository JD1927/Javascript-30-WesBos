// Get items
const player = document.querySelector('.player');
const video = player.querySelector('.player__video.viewer');
const toggle = player.querySelector('.player__button.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenButton = player.querySelector('.player__button.fullscreen');

// Build functions
function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  video.paused ? toggle.textContent = '►' : toggle.textContent = '=';
}

function skip() {
  const { skip } = this.dataset;
  video.currentTime += parseFloat(skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;

}

function handleProgress() {
  const { currentTime, duration } = video;
  const percentage = ((currentTime * 100) / duration);
  progressBar.style.flexBasis = `${percentage}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
}


// Hook up the events

toggle.addEventListener('click', togglePlay);

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach((button) => button.addEventListener('click', skip));

ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreenButton.addEventListener('click', handleFullscreen);