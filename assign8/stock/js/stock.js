// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: stock.js
// Chapter: 7 
// Assignment: 8 
// Date: 05.16.13

var jQT = $.jQTouch({ 
    icon: 'kilo.png'
}); 

var db;
$(document).ready(function(){
		$('#stockstuff form').click(grabStockInfo);
});

function grabStockInfo() {	
		var stockSymbol = document.getElementById('symbol').value;
		var stockQuote = "http://www.google.com/finance/info?infotype=infoquoteall&q=" + stockSymbol + "&format=json&callback=?";
		$.getJSON(stockQuote, function(data) {				
				getActualStock(data);
		}
	);		
}
		
function getActualStock(data) {
		var googStockResultReturn = data[0];	
		var today = new Date();
		var stockImportVar = "<div id='stock-entry'><span class='stock-info'>Company:</span> " + googStockResultReturn.name + "</div>";
		stockImportVar += "<div id='stock-entry'><span class='stock-info'>Symbol:</span> " + googStockResultReturn.t + "</div>";
		stockImportVar += "<div id='stock-entry'><span class='stock-info'>Date:</span> " + today.toLocaleString() + "</div>";
		stockImportVar += "<div id='stock-entry'><span class='stock-info'>Current:</span> " + googStockResultReturn.l + "</div>";
		stockImportVar += "<div id='stock-entry'><span class='stock-info'>High:</span> " + googStockResultReturn.hi + "</div>";
		stockImportVar += "<div id='stock-entry'><span class='stock-info'>Low:</span> " + googStockResultReturn.lo + "</div>";
		stockImportVar += "<div id='stock-entry'><span class='stock-info'>Volume:</span> " + googStockResultReturn.vo + "</div>";
		output.innerHTML = stockImportVar;
}
