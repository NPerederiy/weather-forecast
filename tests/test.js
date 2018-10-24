/*------------getCoordsById------------*/

describe('getCoordsById', () => {
    describe('the function returns an object containing the latitude and longitude of the region with the specified id', () => {
        function checkCoordinates(id, expectedLatitude, expectedLongitude) {
            var coords = getCoordsById(id);
            assert.equal(coords.latitude, expectedLatitude);
            assert.equal(coords.longitude, expectedLongitude);
        }
        it("returns the correct coordinates of the region with identifier 'UA-05'", () => {
            checkCoordinates('UA-05', 49.2327800, 28.4809700); // Vinnytsya
        });
        it("returns the correct coordinates of the region with identifier 'UA-07'", () => {
            checkCoordinates('UA-07', 50.7593200, 25.3424400); // Volyn
        });
        it("returns the correct coordinates of the region with identifier 'UA-09'", () => {
            checkCoordinates('UA-09', 48.5670500, 39.3170600); // Luhans'k
        });
        it("returns the correct coordinates of the region with identifier 'UA-12'", () => {
            checkCoordinates('UA-12', 48.4500000, 34.9833300); // Dnipro
        });
        it("returns the correct coordinates of the region with identifier 'UA-14'", () => {
            checkCoordinates('UA-14', 48.0230000, 37.8022400); // Donets'k
        });
        it("returns the correct coordinates of the region with identifier 'UA-18'", () => {
            checkCoordinates('UA-18', 50.2648700, 28.6766900);  // Zhytomyr
        });
        it("returns the correct coordinates of the region with identifier 'UA-21'", () => {
            checkCoordinates('UA-21', 48.6166700, 22.3000000); // Transcarpathia
        });
        it("returns the correct coordinates of the region with identifier 'UA-23'", () => {
            checkCoordinates('UA-23', 47.8228900, 35.1903100); // Zaporizhzhya
        });
        it("returns the correct coordinates of the region with identifier 'UA-26'", () => {
            checkCoordinates('UA-26', 48.9215000, 24.7097200); // Ivano-Frankivs'k
        });
        it("returns the correct coordinates of the region with identifier 'UA-30'", () => {
            checkCoordinates('UA-30', 50.4546600, 30.5238000); // Kyiv city
        });
        it("returns the correct coordinates of the region with identifier 'UA-32'", () => {
            checkCoordinates('UA-32', 50.4546600, 30.5238000); // Kyiv region
        });
        it("returns the correct coordinates of the region with identifier 'UA-35'", () => {
            checkCoordinates('UA-35', 48.5132000, 32.2597000); // Kropivnitskiy
        });
        it("returns the correct coordinates of the region with identifier 'UA-40'", () => {
            checkCoordinates('UA-40', 44.952116, 34.102411); // Sevastpol' city
        });
        it("returns the correct coordinates of the region with identifier 'UA-43'", () => {
            checkCoordinates('UA-43', 44.952116, 34.102411); // Crimea
        });
        it("returns the correct coordinates of the region with identifier 'UA-46'", () => {
            checkCoordinates('UA-46', 49.8382600, 24.0232400); // L'viv
        });
        it("returns the correct coordinates of the region with identifier 'UA-48'", () => {
            checkCoordinates('UA-48', 46.9659100, 31.9974000); // Mykolayiv
        });
        it("returns the correct coordinates of the region with identifier 'UA-51'", () => {
            checkCoordinates('UA-51', 46.4774700, 30.7326200); // Odessa
        });
        it("returns the correct coordinates of the region with identifier 'UA-53'", () => {
            checkCoordinates('UA-53', 49.5937300, 34.5407300); // Poltava
        });
        it("returns the correct coordinates of the region with identifier 'UA-56'", () => {
            checkCoordinates('UA-56', 50.6230800, 26.2274300); // Rivne
        });
        it("returns the correct coordinates of the region with identifier 'UA-59'", () => {
            checkCoordinates('UA-59', 50.9216000, 34.8002900); // Sumy
        });
        it("returns the correct coordinates of the region with identifier 'UA-61'", () => {
            checkCoordinates('UA-61', 49.5558900, 25.6055600); // Ternopil'
        });
        it("returns the correct coordinates of the region with identifier 'UA-63'", () => {
            checkCoordinates('UA-63', 49.9808100, 36.2527200); // Kharkiv
        });
        it("returns the correct coordinates of the region with identifier 'UA-65'", () => {
            checkCoordinates('UA-65', 46.6558100, 32.6178000); // Kherson
        });
        it("returns the correct coordinates of the region with identifier 'UA-68'", () => {
            checkCoordinates('UA-68', 49.4216100, 26.9965300); // Khmel'nyts'kiy
        });
        it("returns the correct coordinates of the region with identifier 'UA-71'", () => {
            checkCoordinates('UA-71', 49.4285400, 32.0620700); // Cherkasy
        });
        it("returns the correct coordinates of the region with identifier 'UA-74'", () => {
            checkCoordinates('UA-74', 51.5055100, 31.2848700); // Chernihiv
        });
        it("returns the correct coordinates of the region with identifier 'UA-77'", () => {
            checkCoordinates('UA-77', 48.5422500, 28.1147300); // Chernivtsi
        });
        it("returns nothing if the region with the specified identifier does not exist", () => {
            checkCoordinates('0123', undefined, undefined);
        });
    });
});

/*-----------getWeatherReport----------*/

describe('getWeatherReport', () => {
    describe('the function receives weather data from the API at the specified coordinates and returns it as an object', () => {
        it("returns an object with data about the current weather in Cherkasy", () => {
            var coords = getCoordsById('UA-71'); // Cherkasy
            var weatherInfo = getWeatherReport(coords.latitude, coords.longitude);
            console.log(weatherInfo);
            assert.notEqual(weatherInfo, {});
        });
        it("returns an object with data about the current weather in Chernivtsi", () => {
            var coords = getCoordsById('UA-77'); // Chernivtsi
            var weatherInfo = getWeatherReport(coords.latitude, coords.longitude);
            assert.notEqual(weatherInfo, {});
        });
        it("returns nothing, because latitude and longitude are incorrect", () => {
            var weatherInfo = getWeatherReport(undefined, undefined);
            assert.isUndefined(weatherInfo);
        });
    });
});

/*--------fahrenheit-to-celsius--------*/

describe('fToC', () => {
    describe('the function converts degrees from Fahrenheit to Celsius', () => {
        it("converts 50 degrees Fahrenheit to 10 degrees Celsius", () => {
            assert.equal(fToC(50),10);
        });
        it("converts 32 degrees Fahrenheit to 0 degrees Celsius", () => {
            assert.equal(fToC(32),0);
        });
        it("converts 5 degrees Fahrenheit to -15 degrees Celsius", () => {
            assert.equal(fToC(5),-15);
        });
        it("converts -4 degrees Fahrenheit to -20 degrees Celsius", () => {
            assert.equal(fToC(-4),-20);
        });
    });
});

/*--------------math-round-------------*/

describe('roundPlus', () => {
    describe('the function rounds a fractional number to a specified number of decimal places', () => {
        it("rounds the given number to 0 decimal places", () => {
            assert.equal(roundPlus(32.123456,0),32);
        });
        it("rounds the given number to 1 decimal place", () => {
            assert.equal(roundPlus(32.123456,1),32.1);
        });
        it("rounds the given number to 5 decimal places", () => {
            assert.equal(roundPlus(32.123456,5),32.12346);
        });
    });
});