window.addEventListener('keydown', function(event){
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	// backticks for template literals to allow for interpolating variables
	if(!audio) return; //stop the function from running if key pressed doesn't have sound
	audio.play();
})