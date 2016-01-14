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
			<table id="current_weather" class="weather"></table>
			<!--<div id="icon" class="weather"></div>-->
			<table id="forecast" class="Sfont"></table>
		</div>

		<div class="top right" name="today">
			<div id="time"></div>
			<div id="day"></div>
			<div id="date"></div>
		</div>

		<div class="bottom" name="news">
			<div id="headline"></div>
			<div id="abstract"></div>
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