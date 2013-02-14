// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: membership.js
// Chapter: 5 
// Assignment: 2 
// Date: 02.05.13

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    
    // Be strict:
    'use strict';

    // Variable to store the total cost:
    var cost;

    // Get a reference to the form elements:
    var type = document.getElementById('type');
    var years = document.getElementById('years');
    
    // Get a reference to the span elements
    var costspan = document.getElementById('cost-span');
    
    // Convert the year to a number:
    if (years && years.value) {
        years = parseInt(years.value, 10);
    }
    
    // Check for valid data: 
   if (type && type.value && years && (years > 0) ) {
        
        // Determine the base cost:
        switch (type.value) {
            case 'basic':
                cost = 10.00;
                break;
            case 'premium':
                cost = 15.00;
                break;
            case 'gold':
                cost = 20.00;
                break;
            case 'platinum':
                cost = 25.00;
                break;
        } // End of switch.
        
        // Factor in the number of years:
        cost *= years;
        
        // Discount multiple years:
        if ((years > 1) && (years < 2)) {
            cost *= 1; // 100% of full price(no discount)
        }
        else if ((years >= 2) && (years <=3)) {
            cost *= .90; // 90% of full-price
        }
        else if ((years >= 3) && (years <=4)) {
            cost *= .85; // 85% of full-price
        }
        else if (years >= 5) {
            cost *= .80; // 80% of full-price
        }
        
        // Show the total amount:
        // Commenting out because using a span now
        // document.getElementById('cost').value = '$' + cost.toFixed(2);
        
        if (costspan.textContent !== undefined) {
    		costspan.innerText = '$' + cost.toFixed(2);
    		console.log('cost: ' + cost);
		}
        
    } else { // Show an error:
        document.getElementById('cost').value = 'Please enter valid values.';
    }
    
    // Return false to prevent submission:
    return false;
    
} // End of calculate() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onmousemove = init;