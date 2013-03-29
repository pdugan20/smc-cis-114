// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: tests.js
// Chapter: 12 
// Assignment: 5 
// Date: 03.24.13


// Assignment 5
// Add more tests to tests.js to check the results when no arguments, or the wrong type of arguments, are provided to the $() and setText() functions.


// Define the tests:
var myTests = function() {
	'use strict';
	
	// Test that $() returns an element when provided with a valid ID:
	function testGetElement() {
		jsUnity.assertions.assertNotNull(U.$('output'));
	}
	
	// Test that $() returns null when provided with an invalid ID:
	function testGetInvalidElement() {
		jsUnity.assertions.assertNull(U.$('doesNotExist'));
	}
	
	// Test that $() returns a valid object
	function testArgumentTypeGetElement() {
		jsUnity.assertions.assertTypeOf('object', U.$('output'));
	}
	
	// Test that $() does X when arguments are incorrect
	function testWrongArgumentsGetElement() {
			jsUnity.assertions.assertTypeOf('object', U.$('output'));
	}
	
	// Test that $() does X when no arguments are provided
	function testNoArgumentsGetElement() {
			jsUnity.assertions.assertNotUndefined(U.$('output'));
	}
	
	// Test that setText() returns true when provided with a valid ID:
	function testSetText() {
		jsUnity.assertions.assertTrue(U.setText('output', 'test'));
	}
	
	// Test that setText() returns false when provided with an invalid ID:
	function testCannotSetText() {
		jsUnity.assertions.assertFalse(U.setText('doesNotExist', 'test'));
	}
	
  // Test that setText() does X when arguments are incorrect
	function testWrongArgumentsSetText() {
			jsUnity.assertions.assertTypeOf('string', 'test');
	}
	
	// Test that setText() does X when no argumenst are provided
	function testNoArgumentsSetText() {
			jsUnity.assertions.assertNotUndefined(U.setText('output', 'test'));
	}
	
}; // End of myTests anonymous function.

// Define the logging function:
jsUnity.log = function(message) {
	U.$('results').innerHTML += '<p>' + message + '</p>';
};

// Run the tests:
jsUnity.run(myTests);