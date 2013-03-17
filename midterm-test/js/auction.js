// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: auction.js
// Chapter: 6 
// Assignment: 3 
// Date: 02.13.13

function init() {
    
    // Want to be strict:
    'use strict';
    
    var days = ["Monday", "Tuesday",  "Wednesday", "Thursday", "Friday"];
    days.unshift("Sunday");  
    console.log('days: ' + days);
    days.push("Saturday");    
    console.log('days: ' + days);
    days.sort(); 
    console.log('days: ' + days);
    days.pop();   
    console.log('days: ' + days);
    
} // End of init() function.

window.onload = init;