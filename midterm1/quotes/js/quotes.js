// Name: Patrick Dugan
// Email: patridugan@my.smccd.edu   
// Course: CIS114 OL 
// File Name: quotes.js
// Chapter: 8 
// Assignment: Midterm1
// Date: 02.22.13

// Variable that stores the quotes:
var quotes = [
    	"If the freedom of speech is taken away then dumb and silent we may be led, like sheep to the slaughter. (George Washington)", 
			"The spirit of resistance to government is so valuable on certain occasions that I wish it to be always kept alive. (Thomas Jefferson)",
			"It is easier to do a job right than to explain why you didn’t. (Martin Van Buren)"    
]

// Function adds a quote to the global array.
  function addQuote() {
      'use strict';
      var quote = document.getElementById('quote');
      var output = document.getElementById('output');

      if (quote.value) {
          quotes.push(quote.value);
          updateQuotesPage(quotes);        
      } // End of quote.value IF.
			
			quote.value = '';
			
    // Return false to prevent submission:
    return false;
} // End of addQuote() function.

// function for deleting quotes
function deleteQuote() {
		var quoteNumberPos = prompt('What quote would you like to delete?');
		quoteNumberPos -= 1;
		console.log(quoteNumberPos);
		if (quotes[quoteNumberPos]){
				quotes.splice(quoteNumberPos, 1);
				console.log(quotes);
				updateQuotesPage(quotes);
		}
} // End of deleteQuote() function.

//Function for modifying an existing quote
function modifyQuote() {
		'use strict';
    var quoteNumberPos = prompt("Which quote (number) would you like to modify?");
    if (quoteNumberPos) {
		    quoteNumberPos -= 1;
		    if (quotes[quoteNumberPos]){
		    		var newModQuote = prompt("Please modify the quote:", quotes[quoteNumberPos]);
		    		if (newModQuote) {
		    				quotes[quoteNumberPos] = newModQuote;
		    		}
		        updateQuotesPage(quotes);
		    }
    }
} // End of modifyQuote() function.

// function to update page with quote array
function updateQuotesPage(quotes) {
		output.innerHTML = '';
		message = '<h2>Quotes</h2><ol>';
    for (var i = 0, count = quotes.length; i < count; i++) {
    		message += '<li>' + quotes[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;
} // End of updateQuotesPage() function.

function init() {
    'use strict';
    updateQuotesPage(quotes);
    document.getElementById('addbutton').onclick = addQuote;
    document.getElementById('modifybutton').onclick = modifyQuote;
    document.getElementById('deletebutton').onclick = deleteQuote;
    
} // End of init() function.

window.onload = init;