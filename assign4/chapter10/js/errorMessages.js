// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: errorMessages.js
// Chapter: 10 
// Assignment: 4 
// Date: 03.12.13

// This function adds the error message.
// It takes two arguments: the form element ID and the message.
function addErrorMessage(id, msg) {
   	'use strict';
    
    // Get the form element reference:
    var elem = document.getElementById(id);
    
    // Define the new span's ID value:
    var newId = id + 'Error';
    
    // Check for the existence of the span:
    var span = document.getElementById(newId);
    if (span) {
        span.firstChild.value = msg; // Update
    } else { // Create new.
    
        // Create the span:
        span = document.createElement('span');
        span.id = newId;
				span.className = 'error'
        span.appendChild(document.createTextNode(msg));
        
        // Add the span to the parent:
        elem.parentNode.appendChild(span);
        // elem.previousSibling.className = 'error';
        
        var errorClasses = ['someClass', 'error'];
    		var errorClassString = '';
    
    		for (var i = 0; i < errorClasses.length; i++) {
    				errorClassString += errorClasses[i];
    				    				
    				if (i == (errorClasses.length - 1)) {
    						// add no whitespace
    				} else {
    						errorClassString += ' ';
    				}
    				console.log(errorClassString);
    				
    		}
    		elem.previousSibling.className = errorClassString;

    } // End of main IF-ELSE.

} // End of addErrorMessage() function.

// This function removes the error message.
// It takes one argument: the form element ID.
function removeErrorMessage(id) {
   	'use strict';

    // Get a reference to the span:
    var span = document.getElementById(id + 'Error');
	if (span) {
    
	    // Remove the class from the label:
	    span.previousSibling.previousSibling.className = null;
    
	    // Remove the span:
	    span.parentNode.removeChild(span);

	} // End of IF.
    
} // End of removeErrorMessage() function.