const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds/60) * 360) + 90; //percentage * 360, plus 90 to offset default 90deg
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	//minutes
	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes/60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	//hours
	const hours = now.getHours();
	const hoursDegrees = ((hours/12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	console.log(hours);

}

setInterval(setDate, 1000);