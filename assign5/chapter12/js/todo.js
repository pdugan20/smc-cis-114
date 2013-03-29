// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: todo.js
// Chapter: 12 
// Assignment: 5 
// Date: 03.24.13

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
		
		try {
				var selectedTask = tasks[taskNumberPos];
				console.log('selectedTask: ' + selectedTask);
				if (selectedTask == undefined) {
						throw {name: 'Index Out of Range', message: 'Cannot delete a non-existent index from an array.'};
				}
				
				tasks.splice(taskNumberPos, 1);
				updateTaskPage(tasks);
				console.log(tasks);
				
		} catch (err) {
				console.log('Caught: ' + err.name + ', because: ' + err.message);
		} finally {
				// Cleanup if necessary
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