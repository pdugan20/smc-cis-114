// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: auction.js
// Chapter: 6 
// Assignment: 3 
// Date: 02.13.13

function init() {
    
    // Want to be strict:
    'use strict';
    
    var today = new Date();
    var endDate = new Date('20 Feb 2013 12:30:00 UTC');
    var endDateLocal = endDate.toTimeString();
    var timeRemaining = (today.getHours() - endDate.getHours());
    
    var auctionLocalTime = document.getElementById('auction-end-local');
    var auctionUTCTime = document.getElementById('auction-end');
    var timeLeft = document.getElementById('auction-time-left');
    
    auctionLocalTime.innerText = endDateLocal; 
	  auctionUTCTime.innerText = endDate;
	  timeLeft.innerText = timeRemaining;
    
} // End of init() function.

window.onload = init;