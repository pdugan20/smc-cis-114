// Name: Patrick Dugan 
// Course: CIS114 OL 
// File Name: twitter.js
// Chapter: 3 
// Assignment: 7 
// Date: 05.02.13

$(document).ready(function() {		
	$.getJSON(
		"http://api.twitter.com/1/statuses/user_timeline.json?screen_name=pdugan19&count=15&callback=?",
		function(data) {
			twitDataCallback(data);
		}
	);

	function twitDataCallback(twitData) {
		var userData = twitData[0].user;	
		var ct = "<div><img src='"+ userData.profile_image_url + "' alt='twitter pic'>";
		ct += "<a href='http://www.twitter.com/" + userData.screen_name + "'>"
		ct += userData.name + "</a><br>Friends: " + userData.friends_count;
		ct += "<br>Followers: " + userData.followers_count;
		ct += "<br>Listed: " + userData.listed_count;
		ct += "<br>" + userData.description + "</div><br clear='all'>";
		$("#jstweets").append(ct);
		
		$.each(twitData, function(i, item) {
			ct = "<div class='twitline'>" + item.text;
			ct = ct.replace(/http:\/\/\S+/g, '<a href="$&">$&</a>');

			ct += " (<a class='tdate' href='http://www.twitter.com/";
			ct += userData.screen_name + "/status/" + item.id_str;
			ct += "'>" + item.created_at.substr(4,6) + "</a>)</div>";
			$("#jstweets").append(ct);
		});
	}
});
