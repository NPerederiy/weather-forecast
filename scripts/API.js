// @docs
// https://darksky.net/dev/docs

// =================================================
// Stagger Fade-In
// =================================================

function staggerFade() {
	setTimeout(function() {
        $('.fadein-stagger > *').each(function () {
            $(this).addClass('js-animated');
        })
	}, 30);
}


// =================================================
// Skycons
// =================================================

function skycons() {
	var i,
			icons = new Skycons({
				"color" : "#FFFFFF",
				"resizeClear": true // nasty android hack
			}),
			list  = [ // listing of all possible icons
				"clear-day",
				"clear-night",
				"partly-cloudy-day",
				"partly-cloudy-night",
				"cloudy",
				"rain",
				"sleet",
				"snow",
				"wind",
				"fog"
			];

	// loop thru icon list array
	for(i = list.length; i--;) {
		var weatherType = list[i], // select each icon from list array
				// icons will have the name in the array above attached to the
				// canvas element as a class so let's hook into them.
				elements    = document.getElementsByClassName( weatherType );

		// loop thru the elements now and set them up
		for (e = elements.length; e--;) {
			icons.set(elements[e], weatherType);
		}
	}

	// animate the icons
	icons.play();
}


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
// Weather Reporter
// =================================================
function weatherReport(city_name) {

    var latitude, longitude; 
    switch (city_name) {
        case "Sevastpol' City":
        case 'Crimea':
            latitude = '44.952116';
            longitude = '34.102411';
            break;
        case 'Cherkasy':
            latitude = '49.4285400';
            longitude = '32.0620700';
            break;
        case 'Chernihiv':
            latitude = '51.5055100';
            longitude = '31.2848700';
            break;
        case 'Chernivtsi':
            latitude = '48.5422500';
            longitude = '28.1147300';
            break;
        case 'Dnipro':
            latitude = '48.4500000';
            longitude = '34.9833300';
            break;
        case "Donets'k":
            latitude = '48.0230000';
            longitude = '37.8022400';
            break;
        case "Ivano-Frankivs'k":
            latitude = '48.9215000';
            longitude = '24.7097200';
            break;
        case 'Kharkiv':
            latitude = '49.9808100';
            longitude = '36.2527200';
            break;
        case 'Kherson':
            latitude = '46.6558100';
            longitude = '32.6178000';
            break;
        case "Khmel'nyts'kiy":
            latitude = '49.4216100';
            longitude = '26.9965300';
            break;
        case 'Kyiv City':
        case 'Kyiv':
            latitude = '50.4546600';
            longitude = '30.5238000';
            break;
        case 'Kropivnitskiy':
            latitude = '48.5132000';
            longitude = '32.2597000';
            break;
        case "Luhans'k":
            latitude = '48.5670500';
            longitude = '39.3170600';
            break;
        case "L'viv":
            latitude = '49.8382600';
            longitude = '24.0232400';
            break;
        case 'Mykolayiv':
            latitude = '46.9659100';
            longitude = '31.9974000';
            break;
        case 'Odessa':
            latitude = '46.4774700';
            longitude = '30.7326200';
            break;
        case 'Poltava':
            latitude = '49.5937300';
            longitude = '34.5407300';
            break;
        case 'Rivne':
            latitude = '50.6230800';
            longitude = '26.2274300';
            break;
        case 'Sumy':
            latitude = '50.9216000';
            longitude = '34.8002900';
            break;
        case "Ternopil'":
            latitude = '49.5558900';
            longitude = '25.6055600';
            break;
        case 'Transcarpathia':
            latitude = '48.6166700';
            longitude = '22.3000000';
            break;
        case 'Vinnytsya':
            latitude = '49.2327800';
            longitude = '28.4809700';
            break;
        case 'Volyn':
            latitude = '50.7593200';
            longitude = '25.3424400';
            break;
        case 'Zaporizhzhya':
            latitude = '47.8228900';
            longitude = '35.1903100';
            break;
        case 'Zhytomyr':
            latitude = '50.2648700';
            longitude = '28.6766900';
            break;
        default:
            alert('� ����� �������� �� ���� (� ���� �� �������)');
    }

    var apiKey = '383d16ca6466f351cb25cf3639e1fa01',
			url          = 'https://api.darksky.net/forecast/',
			lati         = latitude,
			longi        = longitude,
			api_call     = url + apiKey + "/" + lati + "," + longi + "?extend=hourly&callback=?";

	// Hold our days of the week for reference later.
	var days = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
        'Saturday',
        'Sunday'
	];

	// Hold hourly values for each day of the week.
	// This will store our 24 hour forecast results.
	var monday    = [],
		tuesday   = [],
		wednesday = [],
		thursday  = [],
		friday    = [],
        saturday  = [],
        sunday    = [];

	// Hourly report method to reference in our daily loop
	function hourlyReport(day, selector) {
		for(var i = 0, l = day.length; i < l; i++) {
			$("." + selector + " " + "ul").append('<li>' + Math.round(day[i]) + '</li>');
		}
	}

	// Call to the DarkSky API to retrieve JSON
	$.getJSON(api_call, function(forecast) {

		// Loop thru hourly forecasts
		for(var j = 0, k = forecast.hourly.data.length; j < k; j++) {
			var hourly_date    = new Date(forecast.hourly.data[j].time * 1000),
					hourly_day     = days[hourly_date.getDay()],
					hourly_temp    = forecast.hourly.data[j].temperature;

			// �onvert degrees to celsius for general forecast report.
				hourly_temp = fToC(hourly_temp);
				hourly_temp = Math.round(hourly_temp);

			// push 24 hour forecast values to our empty days array
			switch(hourly_day) {
				case 'Monday':
					monday.push(hourly_temp);
					break;
				case 'Tuesday':
					tuesday.push(hourly_temp);
					break;
				case 'Wednesday':
					wednesday.push(hourly_temp);
					break;
				case 'Thursday':
					thursday.push(hourly_temp);
					break;
				case 'Friday':
					friday.push(hourly_temp);
					break;
				case 'Saturday':
					saturday.push(hourly_temp);
					break;
				case 'Sunday':
					sunday.push(hourly_temp);
					break;
				default: console.log(hourly_date.toLocaleTimeString());
					break;
			}
		}

		// Loop thru daily forecasts
		for(var i = 0, l = forecast.daily.data.length; i < l - 1; i++) {

			var date     = new Date(forecast.daily.data[i].time * 1000),
					day      = days[date.getDay()],
					skicons  = forecast.daily.data[i].icon,
					time     = forecast.daily.data[i].time,
					humidity = forecast.daily.data[i].humidity,
					summary  = forecast.daily.data[i].summary,
					temp    = Math.round(forecast.hourly.data[i].temperature),
					tempMax = Math.round(forecast.daily.data[i].temperatureMax);

			// �onvert degrees to celsius for 24 hour forecast results
				temp    = fToC(temp);
				tempMax = fToC(tempMax);
				temp = Math.round(temp);
				tempMax = Math.round(tempMax);

			// Append Markup for each Forecast of the 7 day week, HERE CREATE A NEW ELEVENT BOX
			$("#forecast").append(
				'<li class="shade-'+ skicons +'"><div class="card-container"><div><div class="front card"><div>' +
					"<div class='graphic'><canvas class=" + skicons + "></canvas></div>" +
					"<div><b>Day</b>: " + date.toLocaleDateString() + "</div>" +
					"<div><b>Temperature</b>: " + temp + "</div>" +
					"<div><b>Max Temp.</b>: " + tempMax + "</div>" +
					"<div><b>Humidity</b>: " + humidity + "</div>" +
					'<p class="summary">' + summary + '</p>' +
					'</div></div><div class="back card">' +
					'<div class="hourly' + ' ' + day + '"><b>24hr Forecast</b><ul class="list-reset"></ul></div></div></div></div></li>'
			);

			// Daily forecast report for each day of the week
			switch(day) {
				case 'Monday':
					hourlyReport(monday, days[0]);
					break;
				case 'Tuesday':
					hourlyReport(tuesday, days[1]);
					break;
				case 'Wednesday':
					hourlyReport(wednesday, days[2]);
					break;
				case 'Thursday':
					hourlyReport(thursday, days[3]);
					break;
				case 'Friday':
					hourlyReport(friday, days[4]);
					break;
				case 'Saturday':
					hourlyReport(saturday, days[5]);
					break;
				case 'Sunday':
					hourlyReport(sunday, days[6]);
					break;
			}
		}

		skycons(); // inject skycons for each forecast
		staggerFade(); // fade-in forecast cards in a stagger-esque fashion

	});
}


// =================================================
// Get Weather State Event
// =================================================
$('.area').on('click', function () {
    var city_name = $(this).attr("title");

		// !!!  Inject here all interface of the pop up box with weather !!!

        weatherReport(city_name);

});