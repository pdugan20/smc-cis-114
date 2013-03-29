// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: tasks.js
// Chapter: 14 
// Assignment: 5 
// Date: 03.28.13

// Function for creating Task objects.
// Function takes two arguments: the task name and its priority.
function Task(name, priority) {
    'use strict';
	
	// Assign the paremeters to variables:
	this.name = name;
	this.priority = priority;

	// Set the completion to false (i.e., not completed).
	this.completed = false;
	
	// Define a toString() method:
	this.toString = function() {
		return this.name + ' (' + this.priority + ')';
	};
	
} // End of Task function.

function ModifyDateObject() {
		Date.prototype.getMonthName = function() {
				var d = new Date();
				var n = d.getMonth();
				if (n == 2) {
						var currentMonthName = 'March';
				}
				return currentMonthName;
		}
}

// Function that sets up the work:
window.onload = function(){
	'use strict';

	// Form references:
	var task = document.getElementById('task');
	var priority = document.getElementById('priority');
	var output = document.getElementById('output');

	// Variable that stores the tasks:
	var tasks = []; 

	// Function called when the form is submitted.
	// Function adds a task to the array.
	
	document.getElementById('theForm').onsubmit = function() {
		// Create a new Task:
		var t = new Task(task.value, priority.value);

		// Add it to the array:
		tasks.push(t);
    
    output.innerHTML = '';
		var message = 'There are now <b>' + tasks.length + '</b> item(s) in the to-do list. <br>Just added:<br>' + t.toString() + '<p>';
    for (var i = 0, count = tasks.length; i < count; i++) {
    		message += '<li>' + tasks[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;
    
    // Clear task afterward
    task.value = '';
    
    // Modify date
    ModifyDateObject();
    var d = new Date();
    var currentMonthName = d.getMonthName();
    console.log(currentMonthName);
        
    // Return false to prevent submission:
    return false;
		};
		
}; 