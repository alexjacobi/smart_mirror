<?php
	//$json_data = file_get_contents('http://api.openweathermap.org/data/2.5/weather?id=6254928&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial');
	//$decoded_data = json_decode($json_data);
	//$temp = $decoded_data->main->temp;
?>

<html>
	<head>
		<title>Smart Mirror</title>
		<!-- Import CSS -->
		<link rel="stylesheet" href="../css/main.css"></link >
		<link rel="stylesheet" href="../css/owfont-regular.css"></link>

		<!-- Import Javascript files -->
		<script type="text/javascript" src="../js/jquery.js"></script>
		<script type="text/javascript" src="../js/weather.js"></script>
		<script type="text/javascript" src="../js/calender.js"></script>
		<script type="text/javascript" src="../js/news.js"></script>
		
	</head>
	<body>
		<!-- Will need to create a single JS file to make all these calls and return data -->
		
		
		<div class="top left" name="weather">
			<div id="current_weather" class="weather"></div>
			<div id="icon" class="weather"></div>
			<table id="forecast" class="Sfont"></table>
		</div>

		<div class="top right" name="today">
			<div id="time"></div>
			<div id="day"></div>
			<div id="date"></div>
		</div>

		<div class="bottom" name="news">
			<div id="headlines"></div>
		</div>		

		<script type="text/javascript">
			getWeather(); 
			getForecast();
			startClock();
			getDay();
			getDate();
			getHeadlines();
		</script>
	</body>
</html>