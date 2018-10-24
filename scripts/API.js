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
        return Weather.Clear;
    if(define == "Partly Cloudy")
        return Weather.Partly;
    if(define == "Mostly Cloudy" || define == "Overcast")
        return Weather.Mostly;
    if(define == "Light Rain")
        return Weather.LightRain;
    if(define == "Rain" || define == "Drizzle")
        return Weather.Rain;
    if(define == "Snow")
        return Weather.Snow;
	if (define == "Drizzle and Breezy" || define == "Light Rain and Breezy" || define == "Drizzle and Windy")
		return Weather.WINDWRAIN;
	if (define == "Breezy and Mostly Cloudy" || define == "Breezy and Overcast")
		return Weather.CLOUDSANDWIND;
	if (define == "Foggy")
		return Weather.FOGGY;
    return Weather.Clear;
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
        var Rez = {};
        Rez.tempFahrenheit = forecast.currently.temperature; //текущая темп.
        Rez.apparentTempFahrenheit = forecast.currently.apparentTemperature; //по ощущениям
        Rez.visibility = forecast.currently.visibility; //видимость
        Rez.cloudCover = forecast.currently.cloudCover; //облачность
        Rez.dewPoint = forecast.currently.dewPoint; //точка росы
        Rez.humidity = forecast.currently.humidity; //влажность
        Rez.ozone = forecast.currently.ozone; //озон
        Rez.pressure = forecast.currently.pressure; //давление
        Rez.summary = forecast.currently.summary; //вывод(словами)
        Rez.windBearing = forecast.currently.windBearing; //направление ветра
        Rez.windSpeed = forecast.currently.windSpeed; //скорость ветра
        Rez.timezone = forecast.timezone; //где это

        // Сonvert degrees to celsius for general forecast report
        Rez.tempCelsius = fToC(Rez.tempFahrenheit);
        Rez.apparentTempCelsius = fToC(Rez.apparentTempFahrenheit);

        // Round temperature to the 1st sign after coma
        Rez.tempCelsius = roundPlus(Rez.tempCelsius, 1);
        Rez.apparentTempCelsius = roundPlus(Rez.apparentTempCelsius, 1);

        console.log(Rez);
        // Put values into the tooltip
        $('#temperature').html(Rez.tempCelsius + ' &deg;C');
        $('#weather').html(Rez.summary);
        $('#weather_icon').css({backgroundPosition: `${chooseIcon(Rez.summary)[0]}px ${chooseIcon(Rez.summary)[1]}px`});
        $('#wind').html(windDirect(Rez.windBearing) + ' - '+ roundPlus(mphToKmh(Rez.windSpeed),2) + ' km/h');
        $('#pressure').html(roundPlus(hpaToMmhg(Rez.pressure),2) + ' mmHg');
        $('#humid').html(Rez.humidity*100 + '%');
    });
}