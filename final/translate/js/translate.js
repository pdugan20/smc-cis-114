// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: translate.js
// Chapter: Final 
// Assignment: Final
// Date: 05.23.13

// Function called when the form is submitted.
// Function performs the translation and returns false.
function translate() {   

    var transLangId = 'en|es';
    var newTrans = '';
    var transLang = document.getElementById('transLang').value;
    var engPhrase = document.getElementById('engPhrase').value;
		var engReplace = engPhrase.split(' ').join('+');
		
		$('#output').html("<div>Translating...</div>");
		
		switch (transLang) {
    	case 'Spanish':
      	transLangId = 'en|es';
        break;
    }
    
    transLang = transLang + ': ';
		
		$.getJSON("http://api.apertium.org/json/translate?q=" + engReplace + "&langpair=" + transLangId + "&callback=?", 
			function(json) {
				jsonDataCallback(json);
			}	
		);
		
		function jsonDataCallback(json) {
			if (json.responseStatus == '200') {
				newTrans = json.responseData.translatedText.toLowerCase();
				$('#output').html("<div>English: "+ engPhrase + '<br>' + transLang + newTrans + "</div>");	
			} 
		}	
	return false;
}

function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = translate;
}
window.onload = init;