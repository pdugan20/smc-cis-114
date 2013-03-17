// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: popup.js
// Chapter: 9 
// Assignment: 4 
// Date: 03.12.13

// Function called when the link is clicked.
function createPopup() {
    'use strict';
    
    // Create the window:
    var popup = window.open('popup-b.html', 'PopUp', 'height=100,width=100,top=100,left=100,location=no,resizable=yes,scrollbars=yes');
    
    // Give the window focus if it's open:
    if ( (popup !== null) && !popup.closed) {
        popup.focus();
        return false; // Prevent the default behavior.
    }
    
} // End of createPopup() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';
    document.getElementById('link').onclick = createPopup;
};