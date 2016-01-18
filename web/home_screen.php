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
		
		
		<div class="top left" id="weather">
			<table id="current_weather" class="weather"></table>
			<!--<div id="icon" class="weather"></div>-->
			<table id="forecast"></table>
		</div>

		<div class="top right" id="today">
			<div id="time"></div>
			<div id="day"></div>
			<div id="date"></div>
		</div>

		<div class="bottom" id="news">
			<div class="center">
				<div id="headline"></div>
				<div id="abstract"></div>
			</div>
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