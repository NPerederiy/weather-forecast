// @docs
// https://darksky.net/dev/docs


// =================================================
// Temperature Conversion
// =================================================

// convert fahrenheit to celsius
function fToC(degrees) {
    degrees = (degrees - 32) * (5 / 9);
	return degrees;
}

// =================================================
// Speed Conversion 
// =================================================

// convert MPH to KMH
function mphToKmh(speed) {
    speed *= 1.609344;
	return speed;
}

// =================================================
// Conversion of atmospheric pressure units
// =================================================

// convert hPa to mmHg
function hpaToMmhg(pressure) {
    pressure /= 1.333333;
	return pressure;
}

// =================================================
// Math round
// =================================================

// round float
function roundPlus(x, n) { //x - float number, n - count signs after coma
    if (isNaN(x) || isNaN(n)) return false;
    var m = Math.pow(10, n);
    return Math.round(x * m) / m;
}

// =================================================
// Wind Direction
// =================================================

// calculate direction of the wind
function windDirect(x) { //x - wind direction in degrees
    if (isNaN(x)) return false;
    if((x >= 0 & x <= 22.5) || (x > 337.5))
        return "N";
    else if(x <= 67.5)
        return "NE";
    else if(x <= 112.5)
        return "E";
    else if(x <= 157.5)
        return "SE";
    else if(x <= 202.5)
        return "S";
    else if(x <= 247.5)
        return "SW";
    else if(x <= 292.5)
        return "W";
    else return "NW";
}

// =================================================
// Icon Definition
// =================================================


// choose appropriate icon

function chooseIcon(define) { //x - wind direction in degrees
    if (define == null) return false;
    if(define == "Clear")
        return WEATHER.CLEAR;
    if(define == "Partly Cloudy")
        return WEATHER.PARTLY;
    if(define == "Mostly Cloudy" || define == "Overcast")
        return WEATHER.MOSTLY;
    if(define == "Light Rain")
        return WEATHER.LIGHTRAIN;
    if(define == "Rain" || define == "Drizzle")
        return WEATHER.RAIN;
    if(define == "Snow")
        return WEATHER.SNOW;
	if (define == "Drizzle and Breezy" || define == "Light Rain and Breezy" || define == "Drizzle and Windy")
		return WEATHER.WINDWRAIN;
	if (define == "Breezy and Mostly Cloudy" || define == "Breezy and Overcast" || define == "Breezy and Partly Cloudy")
		return WEATHER.CLOUDSANDWIND;
	if (define == "Foggy")
		return WEATHER.FOGGY;
    return WEATHER.CLEAR;
}


// =================================================
// Weather Reporter
// =================================================
function getWeatherReport(latitude, longitude) {

    var apiKey = '383d16ca6466f351cb25cf3639e1fa01',
			url          = 'https://api.darksky.net/forecast/',
			lati         = latitude,
			longi        = longitude,
			api_call     = url + apiKey + "/" + lati + "," + longi + "?extend=hourly&callback=?";

    // Call to the DarkSky API to retrieve JSON
    $.getJSON(api_call, function (forecast)
    {
        var report = {};
        report.tempFahrenheit = forecast.currently.temperature; //текущая темп.
        report.apparentTempFahrenheit = forecast.currently.apparentTemperature; //по ощущениям
        report.visibility = forecast.currently.visibility; //видимость
        report.cloudCover = forecast.currently.cloudCover; //облачность
        report.dewPoint = forecast.currently.dewPoint; //точка росы
        report.humidity = forecast.currently.humidity; //влажность
        report.ozone = forecast.currently.ozone; //озон
        report.pressure = forecast.currently.pressure; //давление
        report.summary = forecast.currently.summary; //вывод(словами)
        report.windBearing = forecast.currently.windBearing; //направление ветра
        report.windSpeed = forecast.currently.windSpeed; //скорость ветра
        report.timezone = forecast.timezone; //где это

        // Сonvert degrees to celsius for general forecast report
        report.tempCelsius = fToC(report.tempFahrenheit);
        report.apparentTempCelsius = fToC(report.apparentTempFahrenheit);

        // Round temperature to the 1st sign after coma
        report.tempCelsius = roundPlus(report.tempCelsius, 1);
        report.apparentTempCelsius = roundPlus(report.apparentTempCelsius, 1);

        console.log(report);
        // Put values into the tooltip
        $('#temperature').html(report.tempCelsius + ' &deg;C');
        $('#weather').html(report.summary);
        $('#weather_icon').css({backgroundPosition: `${chooseIcon(report.summary)[0]}px ${chooseIcon(report.summary)[1]}px`});
        $('#wind').html(windDirect(report.windBearing) + ' - '+ roundPlus(mphToKmh(report.windSpeed),2) + ' km/h');
        $('#pressure').html(roundPlus(hpaToMmhg(report.pressure),2) + ' mmHg');
        $('#humid').html(report.humidity*100 + '%');
    });
}