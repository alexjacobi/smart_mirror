//sections:    home, world, national, politics, nyregion, business, opinion, technology, science, health, sports, arts, fashion, dining, travel, magazine, realestate

var key = "8be904c1c0aa7d5d8f4cd8f98bbc7010:6:73708337";
var responseType = "json";
var sections;
var newsURL;

function getHeadlines(){
	sections = getSection();
	newsURL = "http://api.nytimes.com/svc/topstories/v1/" + sections + "." + responseType + "?api-key=" + key;
	$(document).ready(function(){
		$.ajax({  
		    type: "GET",  
		    url: newsURL,
		    datatype: 'json',  
		    success: function(data){  
		    	var headline = data.results[Math.floor(Math.random()*data.results.length)].title;
       			document.getElementById("headlines").innerHTML += ('<div>'+headline+'</div>');
			},  
		    error: function(e){  
		    	alert("Could not update headlines");  
		    }  
	    });
	});
}

function getSection(){
	var sections = ["world", "national", "technology", "science"];
	var section = sections[Math.floor(Math.random()*sections.length)];
	return section;
}
