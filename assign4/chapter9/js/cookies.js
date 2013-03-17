// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: cookies.js
// Chapter: 9 
// Assignment: 4 
// Date: 03.12.13

// Create one global object:
var COOKIE = {
    
    // Function for setting a cookie:
    setCookie: function(name, value, expire, cookiePath, cookieDomain) {
        'use strict';

        if ((name != undefined) && (value != undefined)) {

		        // Begin creating the value string:
		        var str =  encodeURIComponent(name) + '=' + encodeURIComponent(value);
		    
		        // Add validation to ensure expire is a date object
		        if (expire.toGMTString()) {
		        		// Do nothing because its a date value
		        } else {
		        		var expire = new Date();
		    				expire.setDate(expire.getDate() + 7);
		        }
		        
		        // Concatenate the date onto the cookie string
		        str += ';expires=' + expire.toGMTString();
		        
		        // Concatenate the date onto the cookie string
		        if ((cookiePath != undefined) && (cookieDomain != undefined)) {
		        		str += ';path=' + cookiePath + ';domain=' + cookieDomain;
		        } else {
		        		// Just use default values instead
		        }
		    
		        // Create the cookie:
		        document.cookie = str;
		        
		        console.log('cookie-set: ' + str);
		        
				} else {
						console.log('cookie not set. passed 1 or more invalid values.');
				}

    }, // End of setCookie() function.
    
    // Function for retrieving a cookie value:
    getCookie: function(name) {
        'use strict';
        
        console.log('cookie-get: ' + name);

        // Useful to know how long the cookie name is:
        var len = name.length;
        
        // Split the cookie value:
        var cookies = document.cookie.split(';');

        // Loop through the values:
        for (var i = 0, count = cookies.length; i < count; i++) {

            // Lop off an initial space:
            var value = (cookies[i].slice(0,1) == ' ') ? cookies[i].slice(1) : cookies[i];

			// Decode the value:
			value = decodeURIComponent(value);

            // Check if this iteration matches the name:
            if (value.slice(0,len) == name) {

                // Return the part after the equals sign:
                return value.split('=')[1];

            } // End of IF.
            
        } // End of FOR loop.
            
        // Return false if nothing's been returned yet:
        return false;

    }, // End of getCookie() function.
    
    // Function for deleting cookies:
    deleteCookie: function(name, cookiePath, cookieDomain) {
        'use strict';
        
        // Perform argument validation
		    if ((cookiePath != undefined) && (cookieDomain != undefined)) {
		    		name += ';path=' + cookiePath + ';domain=' + cookieDomain;
		    } else {
		    		// Dont add path or domain to name, just leave as is
		    }
        
        document.cookie = encodeURIComponent(name) + '=;expires=Thu, 01-Jan-1970 00:00:01 GMT';
        console.log('cookie-delete: ' + name);
    } // End of deleteCookie() function.

}; // End of COOKIE declaration.