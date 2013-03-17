// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: os.js
// Chapter: 10 
// Assignment: 4 
// Date: 03.12.13

// Function called when the first menu's value changes.
// Function updates the second menu.
function updateMenu(os, options) {
    'use strict';
    
    // Creates element for sub-menu
		var os2 = document.getElementById('os2');
	     
		// Empty the second menu:
		while (os2.firstChild) {
				os2.removeChild(os2.firstChild);
		}
		
		// Update the menu:
		if (options) {
				os2.disabled = false;
			
				// Add the options to the menu:
				for (var i = 0, count = options.length; i < count; i++) {
						var opt = document.createElement('option');
						opt.text = opt.value = options[i];
						os2.appendChild(opt);
				}
			
		} else { // No selection!
	  		os2.disabled = true;
		}
} 

// Establish functionality on window load:
function createInitialMenu(os, options) {
    'use strict';

	// Clear out the existing options:
	while (os.firstChild) {
		os.removeChild(os.firstChild);
	}
	
	// Add the new options:
	var options = ['Choose', 'Windows', 'Mac OS X'];
	for (var i = 0, count = options.length; i < count; i++) {
		var opt = document.createElement('option');
		opt.text = opt.value = options[i];
	    os.appendChild(opt);
	}
}

// Create sub-menus
function createSubMenu(os) {
		// Create the other select menu:
		var os2 = document.createElement('select');
		os2.id = 'os2';
		os2.disabled = true;
		os.parentNode.appendChild(os2); 
}

// Wrapper that holds top-level values for updateMenu
function updateMenuWrapper() {

		// For storing the options:
		var options = null;
		
		// Determine the options in the menus
    if (os.value == 'Windows') {
				options = ['7 Home Basic', '7 Home Premium', '7 Professional', '7 Ultimate', 'Vista', 'XP'];
 		} else if (os.value == 'Mac OS X') {
				options = ['10.7 Lion', '10.6 Snow Leopard', '10.5 Leopard', '10.4 Tiger'];
    }
    
    // Actually update the menu
    updateMenu(os, options);
    
}

// Call this function when the page has loaded:
function init() {
    'use strict';
		
		// Figure out what os we are using
		var os = document.getElementById('os');
		// Set OS options
		var options = ['Choose', 'Windows', 'Mac OS X'];
		
		// Create the primary menu
		createInitialMenu(os, options);
		
		// Create the sub menu
		createSubMenu(os); 
    
    // Set event-listener that updates both menus
    // os.addEventListener('change', updateMenuWrapper, false);
    
    os.onchange = updateMenuWrapper;
    
} // End of init() function.

window.onload = init;