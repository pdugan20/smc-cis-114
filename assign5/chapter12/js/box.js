// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: box.js
// Chapter: 12 
// Assignment: 5 
// Date: 03.24.13

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
    
    // Convert strings into numbers
    length = parseFloat(length);
    width = parseFloat(width);
    height = parseFloat(height);
    
    // Assertions
    try {
    		assertCheck(((typeof length == 'number') && (length > 0)), 'The length must be a positive number.');
    		assertCheck(((typeof width == 'number') && (width > 0)), 'The width must be a positive number.');
    		assertCheck(((typeof height == 'number') && (height > 0)), 'The height must be a positive number.');
    } catch (err) {
    		console.log('Caught: ' + err.name + ', because: ' + err.message);
    }

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

// Asserts box variables are positive numbers
function assertCheck(expression, message) {
    // Test if assertion is true
		if (!expression) {
				throw {name: 'Not a Positive Number', message: message};
		}
}

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;