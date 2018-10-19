        function getWeather(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready: 
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
                var forecast = convertToForecastObject(xmlDoc);
                return forecast;
                }
                return null;
            };
            xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?appid=0a063a4273da60a83d8ef20d5d15f72c&mode=xml&id=703448", true);
            xhttp.send();
        }

        function convertToForecastObject(xml){
            var context = $(xml);
            var forecast = {};
            forecast.city = $("city", context).attr("name");
            forecast.temperature = $("temperature", context).attr("value");
            forecast.humidity = $("humidity", context).attr("value");
            forecast.wind = {};
            forecast.wind.speed = $("wind speed", context).attr("value");
            forecast.wind.direction = $("wind direction", context).attr("value");
            return forecast;
        }