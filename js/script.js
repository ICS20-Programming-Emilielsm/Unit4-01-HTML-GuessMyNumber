
"use strict"

/**
 * This function displays a greeting based on the hour of the day
 */
function displayNumber () {
  // initialize variables
	let answer = ""
	
// get user input
	let guess = parseInt(document.getElementById('guess').value)
  let randomNumber = Math.floor(Math.random() * 6) + 1


  	// if guess is right says correct
	if (guess == randomNumber){
		answer = "CORRECT!!!"
	} 
	//if not says incorrect	
	else {
		answer = "INCORRECT. The correct answer was " + randomNumber + "."
	}

  // display the results
  document.getElementById('answer').innerHTML = answer
}