// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: tasks.js
// Chapter: 6 
// Assignment: 3 
// Date: 02.13.13

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    var randomTaskDiv = document.getElementById('random-task');
    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks[tasks.length] = task.value;
        
        // Insert random task
        
        // Use this for testing no longer needed
        // var taskArray = ['Eat', 'Sleep', 'Play', 'Run', 'Swim'];
				
				var randomNumber = Math.floor((Math.random()*tasks.length));
				var currentRandomTask = tasks[randomNumber];
				randomTaskDiv.innerText = 'Current Random Task: ' + currentRandomTask;
				
				// Remove value after submission
				task.value = "";
        
        console.log('randomNumber: ' + randomNumber);
        console.log('tasks: ' + tasks);
        
        // Update the page:
        // New message with join()
        message = [
        		'You have ',
        		tasks.length,
        		' task(s) in your to-do list.'
        ];
        message = message.join("");
        
        // old message
        // message = 'You have ' + tasks.length + ' task(s) in your to-do list.';
        
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;