// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: departments_new.js
// Chapter: Final 
// Assignment: Final 
// Date: 05.23.13

$(function() {
	var empData = {
		departments: [{
			deptName: "Human Resources",
			employees: [
				{firstName: "Kelly", lastName: "Blaine", phoneNumber: "(811) 533-3519", empPhoto: "./images/01.jpg"},
				{firstName: "Ruben", lastName: "Dean", phoneNumber: "(844) 252-6439", empPhoto: "./images/02.jpg"},
				{firstName: "Merlin", lastName: "Benton", phoneNumber: "(822) 626-0422", empPhoto: "./images/03.jpg"}
			]
		},
		{
			deptName: "IT Support",
			employees: [
				{firstName: "Xander", lastName: "Lyod", phoneNumber: "(855) 536-0119", empPhoto: "./images/04.png"},
				{firstName: "Norman", lastName: "Lowell", phoneNumber: "(822) 531-0505", empPhoto: "./images/05.jpg"},
				{firstName: "Barney", lastName: "Prudence", phoneNumber: "(822) 584-9147", empPhoto: "./images/06.png"}
			]
		},
		{
			deptName: "Customer Service",
			employees: [
				{firstName: "Cletis", lastName: "Morley", phoneNumber: "(811) 649-1614", empPhoto: "./images/07.png"},
				{firstName: "Art", lastName: "Gore", phoneNumber: "(855) 402-6224", empPhoto: "./images/08.png"},
				{firstName: "Jeffrey", lastName: "Waldo", phoneNumber: "(822) 657-1539", empPhoto: "./images/09.jpg"},
				{firstName: "Barnes", lastName: "Larrie", phoneNumber: "(899) 141-3881", empPhoto: "./images/10.jpg"},
			]
		}
	]};
	 
	var topLevelStrut = "{{#departments}}" +
		"<h2>{{deptName}}</h2>" + 
		"<ul>{{#employees}}{{>employee}}{{/employees}}" + 
		"</ul>{{/departments}}";
	
	var indvEmp = {employee:
	  "<div id='single-emp-div'>" + 
	  "<img class='emp-photo' src='{{empPhoto}}'/>" +
		"<div id='emp-data'><li>First: {{firstName}}, Last: {{lastName}}" + 
		"<br>Phone: {{phoneNumber}}</div></li></div>"
	};
	
	var finalOutput = Mustache.to_html(topLevelStrut, empData, indvEmp);
	$('#output').html(finalOutput);
	
});