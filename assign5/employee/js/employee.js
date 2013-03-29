// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: employee.js
// Chapter: 14 
// Assignment: 5 
// Date: 03.28.13

function process() {
    'use strict';
    
    // Calls the function instead
    var firstName = $('firstName').value;
    var lastName = $('lastName').value;
    var department = $('department').value;

    // Reference to where the output goes:
    var output = $('output');
    
    var employee = new Employee(firstName, lastName, department);
    
    // Create the ouptut as HTML:
    var message = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br>';
    message += 'Department: ' + employee.department + '<br>';
    message += 'Hire Date: ' + employee.hireDate.toDateString();
    
    // Display the employee object:
    output.innerHTML = message;
        
    return false;   
}

// Custom employee function
function Employee(firstName, lastName, department) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.department = department;
		this.hireDate = new Date();
		
		this.getName = function() {
		return this.firstName + ' ' + this.lastName;
		};
		
		this.toString = function() {
		return 'Name: ' + this.firstName + ' ' + this.lastName + '\nDepartment: ' + this.department;
		};	
}

// Custom department function
function Department(name) {
		this.name = name;
		this.employees = [];
		this.addEmployee = function(emp) {
				this.employees.push(emp);
				emp.department = this.name;
		};
}

// Add some new departments and stuff
function AddDepartments() {
		var hr = new Department('Human Resources');
		var it = new Department('IT');
		var cs = new Department('Customer Service');
}

// Allows us to get references from the form elements
function $(id) {
		'use strict';
    if (typeof id != 'undefined') {
    		return document.getElementById(id);
    }
}

function init() {
    'use strict';
    AddDepartments();
    $('theForm').onsubmit = process;
}
window.onload = init;