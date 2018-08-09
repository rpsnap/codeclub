// Add your code below...

const myName = "Rebecca"
const myLastName = "Pennington"
const myFullName = myName + " " + myLastName

const number1 = 4
const number2 = 2
const sumNumbers = number1 + number2

alert("Hi " + myFullName + ". Your favourite number is: " + sumNumbers)

function flipCoin(threshold) {

	const myRandomNumber = Math.random()
	if (myRandomNumber > threshold) {
		alert("You won, " + myName)
		alert("You really won!")
	}	else {
		alert("You lost, " + myName)
		alert("Loser!")
	}
}


function resizeButton() {
	const newRadius = Math.random() * 20;
	$('.button').css('border-radius', newRadius + 'px');
}

function slideImage() {
	$('.myProfile').slideUp();
	$('.myProfile').slideDown();

	}

