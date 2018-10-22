/*------------getCoordsById------------*/

describe('getCoordsById', function() {
    describe('the function returns an object containing the latitude and longitude of the region with the specified id', function() {
        it("returns the correct coordinates of the region with identifier 'UA-05'", function() {
            var coords = getCoordsById('UA-05'); // Vinnytsya
            assert.equal(coords.latitude, 49.2327800);
            assert.equal(coords.longitude, 28.4809700);
        });
        it("returns the correct coordinates of the region with identifier 'UA-07'", function() {
            var coords = getCoordsById('UA-07'); // Volyn
            assert.equal(coords.latitude, 50.7593200);
            assert.equal(coords.longitude, 25.3424400);
        });
        it("returns the correct coordinates of the region with identifier 'UA-09'", function() {
            var coords = getCoordsById('UA-09'); // Luhans'k
            assert.equal(coords.latitude, 48.5670500);
            assert.equal(coords.longitude, 39.3170600);
        });
        it("returns the correct coordinates of the region with identifier 'UA-12'", function() {
            var coords = getCoordsById('UA-12'); // Dnipro
            assert.equal(coords.latitude, 48.4500000);
            assert.equal(coords.longitude, 34.9833300);
        });
        it("returns the correct coordinates of the region with identifier 'UA-14'", function() {
            var coords = getCoordsById('UA-14'); // Donets'k
            assert.equal(coords.latitude, 48.0230000);
            assert.equal(coords.longitude, 37.8022400);
        });
        it("returns the correct coordinates of the region with identifier 'UA-18'", function() {
            var coords = getCoordsById('UA-18'); // Zhytomyr
            assert.equal(coords.latitude, 50.2648700);
            assert.equal(coords.longitude, 28.6766900);
        });
        it("returns the correct coordinates of the region with identifier 'UA-21'", function() {
            var coords = getCoordsById('UA-21'); // Transcarpathia
            assert.equal(coords.latitude, 48.6166700);
            assert.equal(coords.longitude, 22.3000000);
        });
        it("returns the correct coordinates of the region with identifier 'UA-23'", function() {
            var coords = getCoordsById('UA-23'); // Zaporizhzhya
            assert.equal(coords.latitude, 47.8228900);
            assert.equal(coords.longitude, 35.1903100);
        });
        it("returns the correct coordinates of the region with identifier 'UA-26'", function() {
            var coords = getCoordsById('UA-26'); // Ivano-Frankivs'k
            assert.equal(coords.latitude, 48.9215000);
            assert.equal(coords.longitude, 24.7097200);
        });
        it("returns the correct coordinates of the region with identifier 'UA-30'", function() {
            var coords = getCoordsById('UA-30'); // Kyiv city
            assert.equal(coords.latitude, 50.4546600);
            assert.equal(coords.longitude, 30.5238000);
        });
        it("returns the correct coordinates of the region with identifier 'UA-32'", function() {
            var coords = getCoordsById('UA-32'); // Kyiv region
            assert.equal(coords.latitude, 50.4546600);
            assert.equal(coords.longitude, 30.5238000);
        });
        it("returns the correct coordinates of the region with identifier 'UA-35'", function() {
            var coords = getCoordsById('UA-35'); // Kropivnitskiy
            assert.equal(coords.latitude, 48.5132000);
            assert.equal(coords.longitude, 32.2597000);
        });
        it("returns the correct coordinates of the region with identifier 'UA-40'", function() {
            var coords = getCoordsById('UA-40'); // Sevastpol' city
            assert.equal(coords.latitude, 44.952116);
            assert.equal(coords.longitude, 34.102411);
        });
        it("returns the correct coordinates of the region with identifier 'UA-43'", function() {
            var coords = getCoordsById('UA-43'); // Crimea
            assert.equal(coords.latitude, 44.952116);
            assert.equal(coords.longitude, 34.102411);
        });
        it("returns the correct coordinates of the region with identifier 'UA-46'", function() {
            var coords = getCoordsById('UA-46'); // L'viv
            assert.equal(coords.latitude, 49.8382600);
            assert.equal(coords.longitude, 24.0232400);
        });
        it("returns the correct coordinates of the region with identifier 'UA-48'", function() {
            var coords = getCoordsById('UA-48'); // Mykolayiv
            assert.equal(coords.latitude, 46.9659100);
            assert.equal(coords.longitude, 31.9974000);
        });
        it("returns the correct coordinates of the region with identifier 'UA-51'", function() {
            var coords = getCoordsById('UA-51'); // Odessa
            assert.equal(coords.latitude, 46.4774700);
            assert.equal(coords.longitude, 30.7326200);
        });
        it("returns the correct coordinates of the region with identifier 'UA-53'", function() {
            var coords = getCoordsById('UA-53'); // Poltava
            assert.equal(coords.latitude, 49.5937300);
            assert.equal(coords.longitude, 34.5407300);
        });
        it("returns the correct coordinates of the region with identifier 'UA-56'", function() {
            var coords = getCoordsById('UA-56'); // Rivne
            assert.equal(coords.latitude, 50.6230800);
            assert.equal(coords.longitude, 26.2274300);
        });
        it("returns the correct coordinates of the region with identifier 'UA-59'", function() {
            var coords = getCoordsById('UA-59'); // Sumy
            assert.equal(coords.latitude, 50.9216000);
            assert.equal(coords.longitude, 34.8002900);
        });
        it("returns the correct coordinates of the region with identifier 'UA-61'", function() {
            var coords = getCoordsById('UA-61'); // Ternopil'
            assert.equal(coords.latitude, 49.5558900);
            assert.equal(coords.longitude, 25.6055600);
        });
        it("returns the correct coordinates of the region with identifier 'UA-63'", function() {
            var coords = getCoordsById('UA-63'); // Kharkiv
            assert.equal(coords.latitude, 49.9808100);
            assert.equal(coords.longitude, 36.2527200);
        });
        it("returns the correct coordinates of the region with identifier 'UA-65'", function() {
            var coords = getCoordsById('UA-65'); // Kherson
            assert.equal(coords.latitude, 46.6558100);
            assert.equal(coords.longitude, 32.6178000);
        });
        it("returns the correct coordinates of the region with identifier 'UA-68'", function() {
            var coords = getCoordsById('UA-68'); // Khmel'nyts'kiy
            assert.equal(coords.latitude, 49.4216100);
            assert.equal(coords.longitude, 26.9965300);
        });
        it("returns the correct coordinates of the region with identifier 'UA-71'", function() {
            var coords = getCoordsById('UA-71'); // Cherkasy
            assert.equal(coords.latitude, 49.4285400);
            assert.equal(coords.longitude, 32.0620700);
        });
        it("returns the correct coordinates of the region with identifier 'UA-74'", function() {
            var coords = getCoordsById('UA-74'); // Chernihiv
            assert.equal(coords.latitude, 51.5055100);
            assert.equal(coords.longitude, 31.2848700);
        });
        it("returns the correct coordinates of the region with identifier 'UA-77'", function() {
            var coords = getCoordsById('UA-77'); // Chernivtsi
            assert.equal(coords.latitude, 48.5422500);
            assert.equal(coords.longitude, 28.1147300);
        });
        it("returns nothing if the region with the specified identifier does not exist", function() {
            var coords = getCoordsById('0123');
            assert.isUndefined(coords.latitude);
            assert.isUndefined(coords.longitude);
        });
    });
});

/*-----------getWeatherReport----------*/

describe('getWeatherReport', function() {
    describe('the function receives weather data from the API at the specified coordinates and returns it as an object', function() {
        it("returns an object with data about the current weather in Cherkasy", function() {
            var coords = getCoordsById('UA-71'); // Cherkasy
            var weatherInfo = getWeatherReport(coords.latitude, coords.longitude);
            console.log(weatherInfo);
            assert.notEqual(weatherInfo, {});
        });
        it("returns an object with data about the current weather in Chernivtsi", function() {
            var coords = getCoordsById('UA-77'); // Chernivtsi
            var weatherInfo = getWeatherReport(coords.latitude, coords.longitude);
            assert.notEqual(weatherInfo, {});
        });
        it("returns an object without weather data, because latitude and longitude are incorrect", function() {
            var weatherInfo = getWeatherReport(undefined, undefined);
            assert.deepEqual(weatherInfo, {});
        });
    });
});

/*--------fahrenheit-to-celsius--------*/

describe('fToC', function() {
    describe('the function converts degrees from Fahrenheit to Celsius', function() {
        it("converts 50 degrees Fahrenheit to 10 degrees Celsius", function() {
            assert.equal(fToC(50),10);
        });
        it("converts 32 degrees Fahrenheit to 0 degrees Celsius", function() {
            assert.equal(fToC(32),0);
        });
        it("converts 5 degrees Fahrenheit to -15 degrees Celsius", function() {
            assert.equal(fToC(5),-15);
        });
        it("converts -4 degrees Fahrenheit to -20 degrees Celsius", function() {
            assert.equal(fToC(-4),-20);
        });
    });
});

/*--------------math-round-------------*/

describe('roundPlus', function() {
    describe('the function rounds a fractional number to a specified number of decimal places', function() {
        it("rounds the given number to 0 decimal places", function() {
            assert.equal(roundPlus(32.123456,0),32);
        });
        it("rounds the given number to 1 decimal place", function() {
            assert.equal(roundPlus(32.123456,1),32.1);
        });
        it("rounds the given number to 5 decimal places", function() {
            assert.equal(roundPlus(32.123456,5),32.12346);
        });
    });
});