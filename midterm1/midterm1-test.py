1. Do you have to specify the data type when creating variables in JavaScript?  Explain?
No. Javascript is a weakly typed programming language. This means that variables are not strictly confined to one type or another.

2. Write JavaScript code to do a case-insensitive comparison of two strings str1 and str2. You cannot use < or > in your answer?
if (str1.toLowerCase() == str2.toLowerCase()) { 
	// they are equal!
} else {
  // they are not equal!
}

3. A variable declared but not initialized has the value undefined?
True

4. Create a Date object named july4 with the date of this year's holiday (July 4). Then output the number of days until the 4th of July (use the day you take the test to compute this).
var today = new Date('28 Feb 2013 PDT');
var july4 = new Date('4 July 2013 PDT');
var daysUntilHoliday;

daysUntilHoliday =  (july4 - today)/1000/60/60/24;
console.log('daysUntilHoliday: ' + daysUntilHoliday);

5. Create an array named weekDays 2 different ways. The array contents will be: "Mon", "Tues", "Wed", "Thu", "Fri".
var weekDays = new Array("Mon", "Tues", "Wed", "Thu", "Fri");
var weekDays = ["Mon", "Tues", "Wed", "Thu", "Fri"];

6. Debug the following code. Explain what is wrong and how to fix it.
function init() {
   'use strict'; 
   document.getElementById('myForm').onsubmit = addTask();
} // End of init() function. 
window.onload = init();

When trying to call the addTask function via onsubmit addTask should not have parenthesis.

7. Using delete to remove an array element will change the array's length value.
False

8. State whether the following statements are true or false:
a) null == undefined
b) "" == 0
c) 1 == true
d) null === undefined
e) NaN === NaN
f) 'dog' > 'Dog'

a. true
b. true
c. true
d. false
e. false
f. true

9. In JavaScript, functions are also objects.
True

10. What are the two ways that values in JavaScript can be represented? Give examples of each.
Literal or object.
Examples of literal: 2, 'Javascript', false
Examples of formal objects: var number = new Number(2); var fullName = new String(‘JavaScript’);
When declaring a formal object, you actually type out the full syntax new, follower by type of variable, and then include the variable value in parenthesis.

11. There is an array days containing "Monday", "Tuesday",  "Wednesday", "Thursday", "Friday".   
What are the contents of the array after each line has executed?  You MUST assume that the statements will be executed in order.
 a) days.unshift("Sunday");  
 array contents:
 b) days.push("Saturday");   
 array contents:

 c) days.sort();   
  array contents:

 d) days.pop(); 
 array contents: 
 
a. days: Sunday,Monday,Tuesday,Wednesday,Thursday,Friday
b. days: Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
c. days: Friday,Monday,Saturday,Sunday,Thursday,Tuesday,Wednesday
d. days: Friday,Monday,Saturday,Sunday,Thursday,Tuesday 

12. Explain the difference between pass by value and pass by reference in JavaScript. Use examples in your answer.
Pass by value means you are making a copy in memory of the actual parameter's value that is passed in, a copy of the contents of the actual parameter. Simple values (numbers, strings, booleans) are passed by value.

function willNotChange(x) {
    x = 20;
}
var y = 1;
willNotChange(y);
// in this example y remains 1 even though we set its reference to 20 in the function

Pass by reference, a copy of the address of the actual parameter is stored. Use pass by reference when you are changing the parameter passed in. Objects and arrays are passed by reference.

function willChange(x) {
    x.num = 20;
}
var y = {num: 10};
willChange(y);

13. What is an anonymous function? Why would you use one?
An anonymous function is just a function without a name. They are normally used for the following:
Assigned to a variable
Assigned to an object property
Used as a value being passed in a function call
Its useful because it can be used to separate your variables and other code from the global scope.

14. What is the this reference? What does it refer to?
The this variable normally represents the object on which a method was called (or the window object, if the function call was not made directly on an object). 
Regarding event handling, the this variable may represent the HTML element that triggered the event.