const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked; 
function handleCheck(event) {
	//check if they had the shift key down
	// and check that they are checking the box (not unchecking)
	let inBetween = false;
	if(event.shiftKey && this.checked) {
		//loop over every single checkbox
		checkboxes.forEach(checkbox=> {
			if(checkbox === this || checkbox === lastChecked){
				inBetween = !inBetween; //for going both ways up and down
			}

			if(inBetween){
				checkbox.checked = true; //programatically check it
			}
		})
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));