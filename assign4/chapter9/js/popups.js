// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: popups.js
// Chapter: 9 
// Assignment: 4 
// Date: 03.12.13

// Function called when the link is clicked.
function createPopup(e) {
    'use strict';
    
    console.log('createPopup function fired!');

    
    // Get the event object:
    if (typeof e == 'undefined') var e = window.event;

    // Get the event target:
    var target = e.target || e.srcElement;

    // Create the window:
    var popup = window.open(target.href, 'PopUp', 'height=100,width=100,top=100,left=100,location=no,resizable=yes,scrollbars=yes');
    
    // Give the window focus if it's open:
    if ( (popup !== null) && !popup.closed) {
        popup.focus();
        return false; // Prevent the default behavior.
    } else { // Allow the default behavior.
        return true;
    }
    
} // End of createPopup() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';
    
    // Add the click handler to each link:
    // Firsts checks for getElementsByClassName
    if (document.getElementsByClassName) {
    		var popupLinks = document.getElementsByClassName('fire-popup');
    
    // If its not there, just grab every link on the page
    } else {
    		var popupLinks = document.links;
    }
    
    // Now lets start iterating through our list
		for (var i = 0, count = popupLinks.length; i < count; i++) {
    		// Grabs the class name
    		var urlClass = document.links[i].className;
    		console.log('urlClass: ' + urlClass);
    		
    		// Checks to make sure the link is actually one that requires a popup window
    		if (urlClass == 'fire-popup') {
    				document.links[i].onclick = createPopup;
    				console.log('listener attached');
    		} else {
						continue;
    		}
    } // End of for loop.
    
}; // End of onload function.