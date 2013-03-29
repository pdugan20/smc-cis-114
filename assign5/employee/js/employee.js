// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: employee.js
// Chapter: 14 
// Assignment: 5 
// Date: 03.28.13

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

// Add some new employees and assign departments
function AddNewEmptoDept(employees) {
		// Define departments
		var hr = new Department('Human Resources');
		var it = new Department('IT');
		var cs = new Department('Customer Service');

		// Define employees
		var e1 = new Employee('Blaine', 'Kelly', hr);
		var e2 = new Employee('Dean', 'Ruben', cs);
		var e3 = new Employee('Benton', 'Merlin', it);
		var e4 = new Employee('Lyod', 'Xander', hr);
		var e5 = new Employee('Lowell', 'Norman', cs);
		var e6 = new Employee('Prudence', 'Barney', it);
		var e7 = new Employee('Morley', 'Cletis', hr);
		var e8 = new Employee('Gore', 'Art', cs);
		var e9 = new Employee('Waldo', 'Jeffrey', it);
		var e10 = new Employee('Larrie', 'Barnes', hr);
		
		// Update employees list
		employees.push(e1);
		employees.push(e2);
		employees.push(e3);
		employees.push(e4);
		employees.push(e5);
		employees.push(e6);
		employees.push(e7);
		employees.push(e8);
		employees.push(e9);
		employees.push(e10);
		
		return employees
}

function UpdateEmpPage(employees) {
		// Create the ouptut as HTML:
    		output.innerHTML = '';
    		var message = '<h2>Current Employees</h2>'
		    
		    for (var i = 0, count = employees.length; i < count; i++) {
    		 		message += 'Name: ' + employees[i].getName() + '<br>';
    		 		
    		 		if (employees[i].department.name == undefined) {
    		 				var deptName = employees[i].department;
    		 		} else {
    		 				var deptName = employees[i].department.name;
    		 		}
    		 		
    				message += 'Department: ' + deptName + '<br>';
    				message += 'Hire Date: ' + employees[i].hireDate.toDateString() + '<br><br>';
    	  }
		    
		    // Display the employee object:
		    output.innerHTML = message;		
}

// Allows us to get references from the form elements
function $(id) {
		'use strict';
    if (typeof id != 'undefined') {
    		return document.getElementById(id);
    }
} // End of $ function.

window.onload = function() {
	'use strict';
		
	 // Reference to where the output goes:
	 var output = $('output');
	 var employees = []; 
	 
	 // Preload all the 10 employees
	 employees = AddNewEmptoDept(employees);
	 UpdateEmpPage(employees);

	 document.getElementById('theForm').onsubmit = function() {
	 
	 			var firstName = $('firstName').value;
	 			var lastName = $('lastName').value;
	 			var department = $('department').value;
		    
		    // Variable that stores the employes:
		    var employee = new Employee(firstName, lastName, department);
		    //console.log(employee);
		    
				employees.push(employee);
				console.log(employees);
				
				UpdateEmpPage(employees);
		    
		    // Return false to prevent submission:
		    return false;
		};
};
