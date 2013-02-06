// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: zodiac.js
// Chapter: 5 
// Assignment: 2 
// Date: 02.05.13

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {

    // Reference zodiac img name
    var zodiacsign;
    var zodiacimgpath;

    // Get a reference to the form elements:
	var birthmonth = document.getElementById('month');
	var birthyear = document.getElementById('birthyear');
	
	console.log('birthyear: ' + birthyear.value);
	console.log('birthmonth: ' + birthmonth.value);
        
    // Get a reference to the zodiac image element
    var zodiacimg = document.getElementById('zodiacimg');
    var zodimgtag = document.getElementById('zodimgtag');
    
    // Check for valid data: 
	if (birthyear.value >= 1900) {
	    
	    var yearModValue = birthyear.value % 12;
	    // If birthmonth is Jan then change sign to following year
        if (birthmonth.value == '01') {
    		yearModValue -= 1;
    	}
	    console.log('yearModValue: ' + yearModValue);
        
        // Determine the correct lunar animal:
        switch (yearModValue) {
            case 0:
                zodiacsign = 'rat';
                break;
            case 1:
                zodiacsign = 'ox';
                break;
            case 2:
                zodiacsign = 'tiger';
                break;
            case 3:
                zodiacsign = 'rabbit';
                break;
            case 4:
                zodiacsign = 'dragon';
                break;
            case 5:
                zodiacsign = 'snake';
                break;
            case 6:
                zodiacsign = 'horse';
                break;
            case 7:
                zodiacsign = 'goat';
                break;
            case 8:
                zodiacsign = 'monkey';
                break;
            case 9:
                zodiacsign = 'rooster';
                break;
            case 10:
                zodiacsign = 'dog';
                break;
            case 11:
                zodiacsign = 'boar';
                break;
            default:
            	zodiacsign = 'zodiac';
            	break;
        } // End of switch.
        
        console.log('zodiacsign: ' + zodiacsign);
        
        // Even though this works fine we need to update the source of the image itself
        /* if (zodiacimg.textContent !== undefined) {
    		zodiacimg.innerHTML = '<img class="zodiac-sign" src="./images/' + zodiacsign + '.jpg">';
		} */
		
		zodiacimgpath = './images/' + zodiacsign + '.jpg';
		console.log('zodiacimgpath: ' + zodiacimgpath);
		
		if (zodimgtag.src !== undefined) {
			zodimgtag.src = zodiacimgpath;
		}
		
    } else { // Show an error:
        document.getElementById('birthyear').value = 'Enter a year greater than 1900.';
    }
    
    // Return false to prevent submission:
    return false;
    
} // End of calculate() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;