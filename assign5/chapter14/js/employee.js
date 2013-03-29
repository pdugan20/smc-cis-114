// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: employee.js
// Chapter: 14 
// Assignment: 5 
// Date: 03.28.13

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
    var output = $('output');

    // Create a new object:
    // var employee = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     department: department,
    //     getName: function() {
    //         return this.lastName + ', ' + this.firstName;
    //     },
    //     hireDate: new Date()
    // }; // Don't forget the semicolon!
    
    var employee = new Employee(firstName, lastName, department);
    
    // Create the ouptut as HTML:
    var message = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br>';
    message += 'Department: ' + employee.department + '<br>';
    message += 'Hire Date: ' + employee.hireDate.toDateString();
    
    // Display the employee object:
    output.innerHTML = message;
        
    // Return false:
    return false;
    
} // End of process() function.

// Custom employee function
function Employee(firstName, lastName, department) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.department = department;
		this.hireDate = new Date();
		this.getName = function() {
		return this.firstName + ' ' + this.lastName;
		};
}

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
    $('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;