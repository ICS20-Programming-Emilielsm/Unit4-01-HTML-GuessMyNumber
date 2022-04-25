// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a greeting based on the hour of the day
 */
function displayNumber () {
  // initialize variables
	let answer = ""
	
	// get user input
	let guess = parseInt(document.getElementById('guess').value)


  // determine the greeting based on the hour of the day in 24-hour format
	if (guess == Math.floor((Math.random() * 6) + 1)) {
		answer = "Correct!"
	}

  // display the results
  document.getElementById('answer').innerHTML = answer
}