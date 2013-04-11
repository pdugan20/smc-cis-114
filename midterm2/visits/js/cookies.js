// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: cookies.js
// Chapter: 14 
// Assignment: midterm2 
// Date: 04.08.13

// Create one global object:
var COOKIE = {
    
    // Function for setting a cookie:
    setCookie: function(visitCount) {
        'use strict';
        console.log('visitCount: ' + visitCount);
				visitCount = parseInt(visitCount) + 1;
				var expDays = 7;
				var cookieName = 'visits';
				
				var expDate = new Date();
				expDate.setDate(expDate.getDate() + expDays);

				var cookieValue = cookieName + "=" + visitCount + 
        "; expires=" + expDate.toUTCString();
        
        // document.cookie = '';
        document.cookie = cookieValue;
        console.log('cookieValue: ' + cookieValue);

    }, // End of setCookie() function.
    
    // Function for retrieving a cookie value:
    getCookie: function(cookieName) {
        'use strict';
        
        console.log('cookie-get: ' + cookieName);
				
				var cookies = document.cookie.split(';');
				var visitCount = cookies[0].split('=');
				visitCount = visitCount[1];
								
				return visitCount;
  			
    }, // End of getCookie() function.

}; // End of COOKIE declaration.