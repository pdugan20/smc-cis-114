// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: movie.js
// Chapter: 7 
// Assignment: 8 
// Date: 05.16.13

$(document).ready(function(){

	$('#term').focus(function(){
		var full = $("#poster").has("img").length ? true : false;
		if(full == false){
			$('#poster').empty();
		}
	});
	var getPoster = function(){
        var film = $('#term').val();
			if(film == ''){
				$('#poster').html("<h2 class='loading'>Please enter something</h2>");
			} else {
				$('#poster').html("<h2 class='loading'>Your movie is on its way!</h2>");
				$.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/23afca60ebf72f8d88cdcae2c4f31866/" + film + "?callback=?", function(json) {
					if (json != "Nothing found."){
						var extraVar = '<h2 class="loading">We found something!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />';
							extraVar += '<div class="movie-stuff"><p>Title: ' + json[0].name + ' (' + (json[0].released).slice(0,4) + ')';
							extraVar += '<br>Rating: ' + json[0].rating;
							extraVar += '<br>Summary: ' + json[0].overview + '</div>';
			   			$('#poster').html(extraVar);
			   		} else {
			   			$.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/23afca60ebf72f8d88cdcae2c4f31866/matrix?callback=?", function(json) {
			   				console.log(json);
			   				$('#poster').html('<h2 class="loading">Nothing found. Try The Matrix?</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
			   			});
			   		}
			 	});	
		 	}
      return false;
		}
		$('#search').click(getPoster);
		$('#term').keyup(function(event){
	    if(event.keyCode == 13){
	       getPoster();
	  	}
	});
});