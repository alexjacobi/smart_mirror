var time;
var day;
var date;

function startClock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    if(h>12){
   		h=h-12;
    }
    if(m<10){
   		m="0"+m;
    }

    document.getElementById("time").innerHTML = ('<div>'+h+':'+m+'</div>');   
    var t = setTimeout(startClock, 500);
}

function getDay(){
	var today = new Date();
	var dayNum = today.getDay();
	var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var dateText = daysOfWeek[dayNum];
    document.getElementById("day").innerHTML = ('<div>'+dateText+'</div>');   
}

function getDate(){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var today = new Date();
	var date = today.getDate();
	var month = months[today.getMonth()];
	var year = today.getFullYear();
    document.getElementById("date").innerHTML = ('<div>'+month+' '+date+' '+year+'</div>');   
}
