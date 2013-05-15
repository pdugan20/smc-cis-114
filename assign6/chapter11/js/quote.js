// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: quote.js
// Chapter: 11 
// Assignment: 6 
// Date: 04.19.13

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// Create the Ajax object:
	var ajax = getXMLHttpRequestObject();
	
	// Function to be called when the readyState changes:
	ajax.onreadystatechange = function() {

		// Check the readyState property:
		if (ajax.readyState == 4) {
		
			// Check the status code:
		    if ( (ajax.status >= 200 && ajax.status < 300) 
		    || (ajax.status == 304) ) {

				// Parse the response:
				var stockData = JSON.parse(ajax.responseText);

				// Update the page:
				var output = document.getElementById('quotes');
				for (var stockSymb in stockData){
					if (document.getElementById(stockData[stockSymb].symb) != undefined) {
						
						document.getElementById(stockData[stockSymb].symb).innerHTML = "<p>" + stockData[stockSymb].name + 
						" (" + stockData[stockSymb].symb + ")" +
						" $<span>" + stockData[stockSymb].quote + "</span></p>"; 
							
					} else {
					
						var stockSymbDiv = document.createElement("div")
						stockSymbDiv.setAttribute("id", stockData[stockSymb].symb)
						stockSymbDiv.innerHTML = "<p>" + stockData[stockSymb].name + 
						" (" + stockData[stockSymb].symb + ")" +
						" $<span>" + stockData[stockSymb].quote + "</span></p>";
						output.appendChild(stockSymbDiv);
						
					}
				}
			}			
		} // End of readyState IF.
	}; // End of onreadystatechange function.
	
	// Fetch the initial stockData:
	ajax.open('GET', 'resources/quote.json', true);
	ajax.send(null);
	
	// Use a timer to fetch the stockData again:
	var stockTimer = setInterval(function() {
	
	    ajax.open('GET', 'resources/quote.json', true);
		ajax.send(null);
	
	}, 60000);
		
    
}; // End of onload anonymous function.