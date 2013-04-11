// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: planets.js
// Chapter: 14 
// Assignment: midterm2 
// Date: 04.08.13

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function displayPlanet() {

    // Reference selected planet
    var planetName;
    
    // If the image already exists delete that sucker
    try {
    		var planetImg = document.getElementById('planetimgtag');
				planetImg.parentNode.removeChild(planetImg);
		} catch(e) {
				// No images so do nothing
		}
		
		// If galaxy select exists then nuke it
		try {
    		var galaxySelect = document.getElementById('galaxy-select');
				galaxySelect.parentNode.removeChild(galaxySelect);
				var galaxyLabel = document.getElementById('galaxy-label');
				galaxyLabel.innerHTML = '';
				var galaxyNameDiv = document.getElementById('galaxy-name');
				var galaxyDescDiv = document.getElementById('galaxy-desc');
				galaxyNameDiv.innerHTML = '';
				galaxyDescDiv.innerHTML = '';
				var galaxyImg = document.getElementById('galaxyimgtag');
				galaxyImg.parentNode.removeChild(galaxyImg);
		} catch(e) {
				// No select so do nothing
		}
        
    // Get a reference to the planet image element
    var planetName = document.getElementById('planet').value;
		console.log('planetName: ' + planetName);
		
		var planetImg = document.createElement('img');
		var planetImgDiv = document.getElementById('planetimg');
		var planetNameDiv = document.getElementById('planet-name');
		var planetDescDiv = document.getElementById('planet-desc');
		var planetPos = 0;
		
		// Removes text if it exists
		planetNameDiv.innerHTML = '';
		planetDescDiv.innerHTML = '';
    
    if ((planetName != 'select') && (planetName != 'galaxies')) {
    		
    		if (planetName == 'pluto') {
    				planetImg.src = './images/' + planetName + '.gif';
    		} else {
    				planetImg.src = './images/' + planetName + '.jpg';
    		}
    		
    		planetImg.id = 'planetimgtag';
    		planetImgDiv.appendChild(planetImg);
    		planetNameDiv.innerHTML = planetName;
    		
    		switch (planetName) {
            case 'mercury':
                planetPos = 4;
                break;
            case 'venus':
                planetPos = 9;
                break;
            case 'earth':
                planetPos = 1;
                break;
            case 'mars':
                planetPos = 3;
                break;
            case 'jupiter':
                planetPos = 2;
                break;
            case 'saturn':
                planetPos = 7;
                break;
            case 'uranus':
                planetPos = 8;
                break;
            case 'neptune':
                planetPos = 5;
                break;
            case 'pluto':
                planetPos = 6;
                break;
            default:
            		planetPos = 0;
            		break;
        }
    		planetDescDiv.innerHTML = planetInfo[planetPos];
    }
    
    if (planetName == 'galaxies') {
    		updateMenu();
    }
}

function displayGalaxy() {

    // Reference selected planet
    var galaxyName;
    
    // If the image already exists delete that sucker
    try {
    		var galaxyImg = document.getElementById('galaxyimgtag');
				galaxyImg.parentNode.removeChild(galaxyImg);
		} catch(e) {
				// No images so do nothing
		}
        
    // Get a reference to the planet image element
    var galaxyName = document.getElementById('galaxy-select').value;
		console.log('galaxyName: ' + galaxyName);
		
		var galaxyImg = document.createElement('img');
		var galaxyImgDiv = document.getElementById('galaxyimg');
		var galaxyNameDiv = document.getElementById('galaxy-name');
		var galaxyDescDiv = document.getElementById('galaxy-desc');
		var galaxyPos = 0;
		var galaxyImgName = '';
		
		// Removes text if it exists
		galaxyNameDiv.innerHTML = '';
		galaxyDescDiv.innerHTML = '';
    
    if (galaxyName != 'Select') {
    
    		switch (galaxyName) {
            case 'Andromeda Galaxy':
                galaxyPos = 1;
                galaxyImgName = 'andromeda';
                break;
            case 'M82 Galaxy':
                galaxyPos = 2;
                galaxyImgName = 'm82';
                break;
            case 'Milky Way':
                galaxyPos = 3;
                galaxyImgName = 'milky';
                break;
            case 'NGC 5866':
                galaxyPos = 4;
                galaxyImgName = 'ngc';
                break;
            case 'Omega Centauri':
                galaxyPos = 5;
                galaxyImgName = 'omega';
                break;
            case 'Whirlpool Galaxy':
                galaxyPos = 6;
                galaxyImgName = 'whirlpool';
                break;
            default:
            		galaxyPos = 0;
                galaxyImgName = '';
            		break;
            		
        }
    		
    		galaxyImg.src = './images/' + galaxyImgName + '.jpg';
    		
    		galaxyImg.id = 'galaxyimgtag';
    		galaxyImgDiv.appendChild(galaxyImg);
    		galaxyNameDiv.innerHTML = galaxyName;
    		galaxyDescDiv.innerHTML = planetInfo[galaxyPos];
    }
}


function updateMenu() {
		var galaxySelectElm = document.createElement('select');
		galaxySelectElm.id = 'galaxy-select';
		
		var galaxySelectDiv = document.getElementById('galaxy-select-div');
		var galaxyLabel = document.getElementById('galaxy-label');
		
		galaxyLabel.innerHTML = 'Galaxies';
		
		galaxySelectDiv.appendChild(galaxySelectElm);
		
		var galaxyArray = ['Select', 'Andromeda Galaxy', 'M82 Galaxy', 'Milky Way', 'NGC 5866', 'Omega Centauri', 'Whirlpool Galaxy'];
		
		for (var i = 0, count = galaxyArray.length; i < count; i++) {
	    	var galaxyOpt = document.createElement('option');
  			galaxyOpt.text = galaxyArray[i];
  			galaxyOpt.value = galaxyArray[i];
    		galaxySelectElm.add(galaxyOpt, null);
		}
		
    galaxySelectElm.addEventListener('change', displayGalaxy, false);
}

// Initial setup:
function init() {
    'use strict';
		
		// Figure out what planet we are using
		var planet = document.getElementById('planet');
		
		// Create the sub menu
		// createSubMenu(os); 
    
    // Set event-listener that updates both menus
    // os.addEventListener('change', updateMenuWrapper, false);
    
    // Listens for changes to planet dropdown menu
    planet.onchange = displayPlanet;
    
} // End of init() function.

window.onload = init;