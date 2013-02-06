// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: calculator.js
// Chapter: 4 
// Assignment: 1 
// Date: 01.27.13

// Function called when the form is submitted.
// Function performs the calculation and returns false.

function calculate() {
	'use strict';
	var futureValue;
    var initialInvestment = document.getElementById('initialInvestment').value;
    var interestRate = document.getElementById('interestRate').value;
    var investmentYears = document.getElementById('investmentYears').value;
    
    // Calculator logic
    // fv = p * (1 + r)^n
	// p is the principal, r is the interest rate, and n is the number of years
    
	interestRate /= 100;
	// This basically another way of doing interestRate += 1
	interestRate++;
	console.log('interestRate: ' + interestRate);
	
	// Takes the interestRate out to the power of investmentYears
	futureValue = Math.pow(interestRate,investmentYears);
	console.log('futureValue: ' + futureValue);
	
	// Multiply by the principle
	futureValue = parseFloat(initialInvestment) * parseFloat(futureValue)
	futureValue = futureValue.toFixed(2);
	console.log('futureValue: ' + futureValue);
	
	document.getElementById('futureValue').value = futureValue;
	return false;    
} // End of calculate() function.

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;