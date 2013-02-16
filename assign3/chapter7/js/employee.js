// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: employee.js
// Chapter: 7 
// Assignment: 3 
// Date: 02.14.13

// Function called when the form is submitted.
// Function creates a new object.
function process() {
    'use strict';

    // Get form references:
    // var firstName = document.getElementById('firstName').value;
    // var lastName = document.getElementById('lastName').value;
    // var department = document.getElementById('department').value;
    
    // Calls the function instead
    var firstName = $('firstName').value;
    var lastName = $('lastName').value;
    var department = $('department').value;

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // Create a new object:
    var employee = {
        firstName: firstName,
        lastName: lastName,
        department: department,
        getName: function() {
            return this.lastName + ', ' + this.firstName;
        },
        hireDate: new Date()
    }; // Don't forget the semicolon!
    
    // Create the ouptut as HTML:
    var message = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br>';
    message += 'Department: ' + employee.department + '<br>';
    message += 'Hire Date: ' + employee.hireDate.toDateString();
    
    // Display the employee object:
    output.innerHTML = message;
        
    // Return false:
    return false;
    
} // End of process() function.

// Allows us to get references from the form elements
function $(id) {
		'use strict';
    if (typeof id != 'undefined') {
    		return document.getElementById(id);
    }
} // End of $ function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;