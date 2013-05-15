// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: itunes.js
// Chapter: 13 
// Assignment: 6 
// Date: 04.19.13

// global request and XML document objects
var ajax = getXMLHttpRequestObject();

// retrieve XML document (reusable generic function);
// parameter is URL string (relative or complete) to
// an .xml file whose Content-Type is a valid XML
// type, such as text/xml; XML source must be from
// same domain as HTML file 
var loadXMLDoc = function(url) {

	// Most browsers:
	if (window.XMLHttpRequest) {
	    ajax = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // Older IE.
	    ajax = new ActiveXObject('MSXML2.XMLHTTP.3.0');
	}
	
	if( ajax ) {
          ajax.onreadystatechange = processReqChange;
          ajax.open("GET", url, true);
		  ajax.send(null);
     } else {
	     alert( "No XMLHttp object!" );
     } 
}

// handle onreadystatechange event of ajax object
var processReqChange = function() {
    // only if ajax shows "loaded"
    if (ajax.readyState == 4) {
        // only if "OK"
        if (ajax.status == 200) {
            clearTopicList();
            buildTopicList();
         } else {
            alert("There was a problem retrieving the XML data:\n" +
                ajax.statusText);
         }
    }
}

// invoked by "Category" select element change;
// loads chosen XML document, clears Topics select
// element, loads new items into Topics select element
var loadDoc = function (evt) {

	 // Get the event object:
	if (typeof evt == 'undefined') evt = window.event;

	// Get the event target:
	var elem = evt.target || evt.srcElement;
 
    try {
        if (elem.selectedIndex > 0) {
            loadXMLDoc(elem.options[elem.selectedIndex].value);
        }	
    } catch(e) {
        var msg = (typeof e == "string") ? e : ((e.message) ? e.message : "Unknown Error");
        alert("Unable to get XML data:\n" + msg);
        return;
    }
}

// retrieve text of an XML document element, including
// elements using namespaces
var getElementTextNS = function (prefix, local, parentElem, index) {
        // Chrome, Safari and Opera's way of handling namespaces
		var result = parentElem.getElementsByTagName(local)[index];
	    if (prefix && !result) { 
		   // IE/Firefox way of handling namespaces
		   result = parentElem.getElementsByTagName(prefix + ":" + local)[index];
	    } 
		
     if (result) {
        // get text, accounting for possible
        // whitespace (carriage return) text nodes 
        if (result.childNodes.length > 1) {
            return result.childNodes[1].nodeValue;
        } else {
            return result.firstChild.nodeValue;    		
        }
     } else return "n/a";
}

// empty Topics select list content
var clearTopicList = function () {
    var select = document.getElementById("topics");
    while (select.length > 0) {
        select.remove(0);
    }
}

// add item to select element the less
// elegant, but compatible way.
var appendToSelect = function (select, value, content) {
    var opt;
    opt = document.createElement("option");
    opt.value = value;
    opt.appendChild(content);
    select.appendChild(opt);
}

// fill Topics select list with items from
// the current XML document
var buildTopicList = function() {
    var select = document.getElementById("topics");
    var items = ajax.responseXML.getElementsByTagName("item");
    // loop through <item> elements, and add each nested
    // <title> element to Topics select element
    for (var i = 0; i < items.length; i++) {
        appendToSelect(select, i,
            document.createTextNode(getElementTextNS("", "title", items[i], 0)));
    }
    // clear detail display
    document.getElementById("details").innerHTML = "";
}

// display details retrieved from XML document
var showDetail = function(evt) {
    evt = (evt) ? evt : ((window.event) ? window.event : null);
    var item, content, div;
    if (evt) {
        var select = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
        if (select && select.options.length > 1) {
            // copy <content:encoded> element text for
            // the selected item
            item = ajax.responseXML.getElementsByTagName("item")[select.value];
            content = getElementTextNS("content", "encoded", item, 0);
            div = document.getElementById("details");
            div.innerHTML = "";
            // blast new HTML content into "details" <div>
            div.innerHTML = content;
        }
    }
}

window.onload = function() {
	'use strict';
	
	//attach onchange event handlers
	document.getElementById("topics").onchange = showDetail;
	document.getElementById("choice").onchange = loadDoc;
}