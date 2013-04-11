// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: visit.js
// Chapter: 14 
// Assignment: midterm2 
// Date: 04.08.13

window.onload = function() {
    'use strict';

    var visitCount = COOKIE.getCookie('visits');
    console.log('visitCount: ' + visitCount);
    
    if (visitCount) {
        console.log('got the cookie!');
    } else {
    		visitCount = 0;
    }
    
    var visitDiv = document.getElementById('visit-count');
		visitDiv.innerHTML = 'Looks like you visited this page ' + visitCount + ' time(s).';
		
		COOKIE.setCookie(visitCount);
    
}; // End of onload anonymous function.