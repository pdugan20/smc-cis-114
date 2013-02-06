// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: box.js
// Chapter: 4 
// Assignment: 1 
// Date: 01.27.13

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
	'use strict';
	
	// For storing the volume:
	var volume;
    
    // Get a reference to the form values:
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;

	// Verify box measurements
    console.log('length: ' + length);
    console.log('width: ' + width);
    console.log('height: ' + height);
    
	// Format the volume:
	volume = parseFloat(length) * parseFloat(width) * parseFloat(height);
	volume = volume.toFixed(4);
	
	// Display the volume:
	document.getElementById('volume').value = volume;
	
	// Return false to prevent submission:
	return false;
    
} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;