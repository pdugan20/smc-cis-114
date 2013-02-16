// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: todo.js
// Chapter: 7 
// Assignment: 3 
// Date: 02.14.13

// Variable that stores the tasks:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
  function addTask() {
      'use strict';
      var task = document.getElementById('task');
      var output = document.getElementById('output');
      var message = '';

      if (task.value) {
          tasks.push(task.value);
          updateTaskPage(tasks);        
      } // End of task.value IF.

    // Return false to prevent submission:
    return false;

} // End of addTask() function.

// function for deleting tasks
function deletePrompt() {
		var taskNumberPos = prompt('What task would you like to delete?');
		taskNumberPos -= 1;
		console.log(taskNumberPos);
		if (task.value) {
				tasks.splice(taskNumberPos, 1);
				updateTaskPage(tasks);
				console.log(tasks);
		}
} // End of deletePrompt() function.

// function to update page with task array
function updateTaskPage(tasks) {
		output.innerHTML = '';
		message = '<h2>To-Do</h2><ol>';
    for (var i = 0, count = tasks.length; i < count; i++) {
    		message += '<li>' + tasks[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;
} // End of updateTaskPage() function.

function init() {
    'use strict';
    document.getElementById('addbutton').onclick = addTask;
    document.getElementById('deletebutton').onclick = deletePrompt;
} // End of init() function.

window.onload = init;