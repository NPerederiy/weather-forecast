// @docs
// https://darksky.net/dev/docs


// =================================================
// Temperature Converter
// =================================================

// convert degrees to celsius
function fToC(fahrenheit) {
	var fTemp  = fahrenheit,
			fToCel = (fTemp - 32) * 5 / 9;

	return fToCel;
}

// =================================================
// Math round
// =================================================

// Round flout
function roundPlus(x, n) { //x - flout number, n - count signs after coma
    if (isNaN(x) || isNaN(n)) return false;
    var m = Math.pow(10, n);
    return Math.round(x * m) / m;
}

// =================================================
// Weather Reporter
// =================================================
function weatherReport(latitude, longitude) {

    var apiKey = '383d16ca6466f351cb25cf3639e1fa01',
			url          = 'https://api.darksky.net/forecast/',
			lati         = latitude,
			longi        = longitude,
			api_call     = url + apiKey + "/" + lati + "," + longi + "?extend=hourly&callback=?";

	// Call to the DarkSky API to retrieve JSON
    $.getJSON(api_call, function (forecast)
    {
        var Rez = new Object();
        Rez.temperature = forecast.currently.temperature; //текущая темп.
        Rez.apparentTemperature = forecast.currently.apparentTemperature; //по ощущениям
        Rez.visibility = forecast.currently.visibility; //видимость
        Rez.cloudCover = forecast.currently.cloudCover; //облачность
        Rez.dewPoint = forecast.currently.dewPoint; //Точка росы
        Rez.humidity = forecast.currently.humidity; //влажность
        Rez.ozone = forecast.currently.ozone; //озон
        Rez.pressure = forecast.currently.pressure; //давление
        Rez.summary = forecast.currently.summary; //вивод(словами)
        Rez.windBearing = forecast.currently.windBearing; //направление ветра
        Rez.windSpeed = forecast.currently.windSpeed; //скорость ветра
        Rez.timezone = forecast.timezone; //где это

        // Сonvert degrees to celsius for general forecast report
        Rez.temp = fToC(Rez.temp);
        Rez.apptemp = fToC(Rez.apptemp);

        // Round temperature to the second sign after coma
        Rez.temp = roundPlus(Rez.temp, 2);
        Rez.apptemp = roundPlus(Rez.apptemp, 2);
    });
}


// =================================================
// Get Weather State Event
// =================================================
$('.area').on('click', function () {
    var latitude = $(this).attr("latitude"); ///!!!
    var longitude = $(this).attr("longitude"); ///!!!
    weatherReport(latitude, longitude);
});