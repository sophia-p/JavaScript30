window.addEventListener('keydown', function(event){
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); //for animation 
	// backticks for template literals to allow for interpolating variables
	if(!audio) return; //stop the function from running if key pressed doesn't have sound
	audio.currentTime = 0; //rewind to the start to sounds can be played in succession
	audio.play();
	key.classList.add('playing'); //add playing class to div el
})