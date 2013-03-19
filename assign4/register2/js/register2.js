// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: register2.js
// Chapter: 10 
// Assignment: 4 
// Date: 03.12.13

// Function called when the form is submitted.
// Function validates the form data.
function validateForm(e) {
    'use strict';

  // Get the event object:
	if (typeof e == 'undefined') e = window.event;
	
  // Get form references:
  var password = U.$('password');
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var phone = U.$('phone');
	var address = U.$('address');
	var city = U.$('city');
	var state = U.$('state');
	var zip = U.$('zip');
	var ccnum = U.$('ccnum');
	var expdate = U.$('exp-date');
	var terms = U.$('terms');

	// Flag variable:
	var error = false;
	
	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Please enter your email address.');
		error = true;
	}

	// Validate the password:
	if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/.test(password.value)) {
		removeErrorMessage('password');
	} else {
		addErrorMessage('password', 'Please strengthen your password.');
		error = true;
	}

	// Validate the first name:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
	} else {
		addErrorMessage('firstName', 'Please enter your first name.');
		error = true;
	}
	
	// Validate the last name:
	if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
		removeErrorMessage('lastName');
	} else {
		addErrorMessage('lastName', 'Please enter your last name.');
		error = true;
	}
	
	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		error = true;
	}
	
	// Validate the address:
	if (/[0-9]+\s[A-Za-z0-9\s\-]{2,20}$/.test(address.value)) {
		removeErrorMessage('address');
	} else {
		addErrorMessage('address', 'Please enter a valid address.');
		error = true;
	}
	
	// Validate the  city:
	if (/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(city.value)) {	
		removeErrorMessage('city');
	} else {
		addErrorMessage('city', 'Please enter a valid city name.');
		error = true;
	}
	
	// Validate the state:
	if (state.selectedIndex != 0) {
		removeErrorMessage('state');
	} else {
		addErrorMessage('state', 'Please select your state.');
		error = true;
	}
	
	// Validate the zip code:
	if (/^\d{5}(-\d{4})?$/.test(zip.value)) {
		removeErrorMessage('zip');
	} else {
			addErrorMessage('zip', 'Please enter your zip code.');
		error = true;
	}
	
	// Validate the credit card number:
	if (/\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/.test(ccnum.value)) {
		removeErrorMessage('ccnum');
	} else {
			addErrorMessage('ccnum', 'Please enter a valid credit card number.');
		error = true;
	}
  
  // Validate the credit card's expiration date:
	if (/20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d/.test(expdate.value)) {
	  
		  var d = new Date();
			var curMonth = d.getMonth();
			var curYear = d.getFullYear();
			var expSplit = (expdate.value).split("/");
			var expMonth = expSplit[0];
			var expYear = expSplit[1];
			
			console.log('curYear: ' + curYear);
			console.log('curMonth: ' + curMonth);
			console.log('expMonth: ' + expMonth);
			console.log('expYear: ' + expYear);
			
			if (expYear >= curYear) {
					if (expMonth >= curMonth) {
					
							console.log('date passed validity checks');
							removeErrorMessage('exp-date');
					
					}
			} else {
					addErrorMessage('exp-date', 'Please enter a valid expiration date.');
					error = true;
			}
			
	} else {
			addErrorMessage('exp-date', 'Please enter a valid expiration date.');
			error = true;
	}
  
  // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = U.$('submit');
	
	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
    U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enbable tooltips on the phone number:
	U.enableTooltips('phone');
    
};