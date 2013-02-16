// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: today.js
// Chapter: 7 
// Assignment: 3 
// Date: 02.14.13

// The function takes two arguments: the element's ID and the text message.
function setText(elementId, message) {
    'use strict';
    
    // Check to make sure element is string and message is string or number
    if ( (typeof elementId == 'string') && ( (typeof message == 'string') || (typeof message == 'number') ) ) {
    		
    		// Make sure the strings aren't empty
   			if ((elementId == "") || (message == "")) {
   					console.log('replaced an empty string');
						elementId = 'output';
        }
    
    var output = document.getElementById(elementId);
    
    // Check to see if output actually exists
    if (output) {
    		
    		// Update the innerText or textContent property of the paragraph:
				if (output.textContent !== undefined) {
						output.textContent = message;
				
				// Updates the message
				} else {
						output.innerText = message;
				}
				
		// If output does not exist, prints to console
		} else { 
				console.log('could not find output element');
		}
    
    } // End of main if statement

} // End of setText() function

// Call this function when the page has loaded:
function init() {
    'use strict';
    var today = new Date();
    var elementId = 'output';
    var message = 'Right now it is ' + today.toLocaleDateString();
    message += ' at ' + today.getHours() + ':' + today.getMinutes();
		
    // Update the page:
    setText(elementId, message);
    
} // End of init() function.
window.onload = init;