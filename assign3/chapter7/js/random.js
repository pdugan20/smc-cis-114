// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: random.js
// Chapter: 7 
// Assignment: 3 
// Date: 02.14.13

// This function acts as a shortcut for document.getElementById().
function $(id) {
    'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
} // End of $ function.

function setText(elementId, message) {
    'use strict';
    if ( (typeof elementId == 'string')
    && (typeof message == 'string') ) {
        var output = $(elementId);
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
    } // End of main IF.
} // End of setText() function.

// This function returns a random number.
// The function takes an argument, limiting the maximum random number value.
function getRandomNumber(max) {
    'use strict';
    
    // Generate the random number:
    var n = Math.random();
    
    // If a max value was provided, multiply times it,
    // and parse n to an integer:
    if (typeof max == 'number') {
        n *= max;
        n = Math.floor(n);
    }
    
    // Return the number:
    return n;

} // End of getRandomNumber() function.

// Function called when the window is loaded.
// Function finds six random numbers and displays them in a paragraph element.
function showNumbers() {
    'use strict';

    // Variable to store the lucky numbers:
    var numbers = '';
    
    // Assign a maxValue
    var maxValue = 100;

    for (var i = 0; i < 6; i++) {
        numbers += getRandomNumber(maxValue) + ' ';
    }

    // Show the numbers:
    setText('output', numbers);

} // End of showNumbers() function.
window.onload = showNumbers;