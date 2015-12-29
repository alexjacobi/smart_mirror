// set up variables to call OpenWeather API
var city = "6254928";
var key = "2de143494c0b295cca9337e1e96b00e0";
var unit = "imperial";
var weatherURL = "http://api.openweathermap.org/data/2.5/weather?id=" + city + "&appid=" + key + "&units=" + unit;
var forecastURL = "http://api.openweathermap.org/data/2.5/forecast/daily?id=" + city + "&appid=" + key + "&units=" + unit +"&cnt=6";

// http://api.openweathermap.org/data/2.5/weather?id=6254928&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial

// retrieve current weather
function getWeather() {
    $(document).ready(function(){
		$.ajax({  
		    type: "GET",  
		    url: weatherURL,
		    datatype: 'json',  
		    success: function(data){  
		    	var iconCode = getIcon(data.weather[0].id, data.weather[0].icon);
		    	var temperature = Math.round(data.main.temp);
		    	document.getElementById("current_weather").innerHTML += ('<div class="owf owf-' + iconCode + '">'+temperature+'\u00B0'+'</div>');
       			//document.getElementById("icon").innerHTML += ('<div class="owf owf-' +iconCode+'"></div>');
			},  
		    error: function(e){  
		    	alert("Could not update weather");  
		    }  
	    });
	});
}

// retrieve 5-day forecast
function getForecast(){
	$(document).ready(function(){
		$.ajax({  
		    type: "GET",  
		    url: forecastURL,
		    datatype: 'json',  
		    success: function(data){  
	        	var forecastTemp = [];
	        	var forecastDay = getNext5Days();
	        	var dayCount = 0;
	        	for(i=1; i<6; i++){
	        		forecastTemp[i] = Math.round(data.list[i].temp.day);
	        		document.getElementById("forecast").innerHTML += ('<tr><td>'+forecastDay[dayCount]+' '+forecastTemp[i]+'\u00B0'+'</td></tr>');
	        		dayCount++;
	        	}
	        	
	        },  
	        error: function(e){  
	        	alert("Could not update forecast");  
	        }  
	    });
	});
}

// Return the days of the week for the next 5 days
function getNext5Days(){
	var x = new Date;
	var tomorrow = x.getDay() + 1;
	var nextDays = [];
	for(i=0; i<5; i++){
		switch(tomorrow){
			case 0:
		        nextDays[i] = "Su"; //Sunday
		        break;
			case 1:
		        nextDays[i] = "Mo"; //Monday
		        break;
		    case 2:
		        nextDays[i] = "Tu"; //Tuesday
		        break;
		    case 3:
		        nextDays[i] = "We"; //Wednesday
		        break;
		    case 4:
		        nextDays[i] = "Th"; //Thursday
		        break;
		    case 5:
		        nextDays[i] = "Fr"; //Friday
		        break;
		    case 6:
		        nextDays[i] = "Sa"; //Saturday
		        break;
		    
		}
		tomorrow++;
		if(tomorrow == 7)
			tomorrow = 0;
    }
    return nextDays;
}

// Return weather icon
function getIcon(id, code){
	var tod = code.substr(code.length - 1);
	var icon = id + "-" + tod;
	return icon;
}