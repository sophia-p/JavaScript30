// get elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build out functions

function togglePlay(){
	if(video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function updateButton(){
	const icon = this.paused ? '►' : '❚ ❚';  //this is bound to video itself
	toggle.textContent = icon;
	console.log('update the button');
}

function skip(){
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
	video[this.name] = this.value;
}

function handleProgress(){
	const percent = (video.currentTime/video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(event){
	const scrubTime = (event.offsetX/progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}
//hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => mousedown && scrub(event)); //first checks if variable mousedown is true, then moves to run scrub, taking event from mousemove
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = true);

