//sections:    home, world, national, politics, nyregion, business, opinion, technology, science, health, sports, arts, fashion, dining, travel, magazine, realestate

var key = "183ad2bf28a3be20c722ae96bf684a5c:4:73708337";
var responseType = "json";
var sections = "world,national,technology,science"
var newsURL = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/" + sections + "/1.json?api-key=" + key;

function getHeadlines(){
	$(document).ready(function(){
		$.ajax({  
		    type: "GET",  
		    url: newsURL,
		    datatype: 'json',  
		    success: function(data){  
		    	var headline = data.results[Math.floor(Math.random()*data.results.length)].title;
		    	var abstract = data.results[Math.floor(Math.random()*data.results.length)].abstract;
       			document.getElementById("headlines").innerHTML += ('<div>'+headline+'</div>');
       			document.getElementById("headlines").innerHTML += ('<div>'+abstract+'</div>');
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
