//sections:    home, world, national, politics, nyregion, business, opinion, technology, science, health, sports, arts, fashion, dining, travel, magazine, realestate

var key = "183ad2bf28a3be20c722ae96bf684a5c:4:73708337";
var responseType = "json";
var sections = "world,national,technology,science"
var newsURL = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/" + sections + "/1.json?api-key=" + key;

$(document).ready(function(){
    setInterval(getHeadlines, 600000); 
}); 

function getHeadlines(){
	$(document).ready(function(){
		$('#headline').empty();
		$('#abstract').empty();
		$.ajax({  
		    type: "GET",  
		    url: newsURL,
		    datatype: 'json',  
		    success: function(data){  
		    	var article = Math.floor(Math.random()*data.results.length);
		    	var headline = data.results[article].title;
		    	var abstract = data.results[article].abstract;
       			document.getElementById("headline").innerHTML += ('<div>'+headline+'</div>');
       			document.getElementById("abstract").innerHTML += ('<div>'+abstract+'</div>');
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


