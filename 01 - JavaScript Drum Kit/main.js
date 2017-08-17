window.addEventListener('keydown', function(event){
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	// backticks for template literals to allow for interpolating variables
	console.log(audio);
})