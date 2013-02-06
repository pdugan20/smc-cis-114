// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: shopping.js
// Chapter: 4 
// Assignment: 1 
// Date: 01.27.13

// Function called when the form is submitted.
// Function performs the calculation and returns false.

function calculate() {
	'use strict';
	var total;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;
    var shippingCost = document.getElementById('shippingCost').value;
    
    // verify shippingCost amount
    console.log('shippingCost: ' + shippingCost);
    
	total = quantity * price;
	tax /= 100;
	tax++;
	total *= tax;
	total -= discount;
	
	// Convert values to floats so addition doesn't get jacked up
	total = parseFloat(total) + parseFloat(shippingCost);
	total = total.toFixed(2);
	
	// Verify total before returning
	console.log('total: ' + total);
	
	document.getElementById('total').value = total;
	return false;    
} // End of calculate() function.

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;