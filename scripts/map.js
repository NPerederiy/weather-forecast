var selected = "";

// change the color of the area by hover
$('.area').hover(function() {
    if ($(this).attr("id") != selected) {
        $(this).css({
            fill: '#1a90ff'
        });
    }
});

$('.area').mouseout(function () {
    if ($(this).attr("id") != selected) {
        $(this).css({
            fill: '#0069cc'
        });
    }
});

$('.area').click(function () {    
    if ($(this).attr("id") != selected) {
        // change the color of the area by click
        $('.area').css({
            fill: '#0069cc'
        });
        $(this).css({
            fill: '#8ecaff'
        });
        $('#district').html($(this).parent().attr("xlink:title"));
        selected = $(this).attr("id");

        // get weather from API
        console.log(getCoordsById($(this).attr("id")));
        // var weather = getWeather(getCoordsById($(this).attr("id")));

        // show tooltip
        $('#tooltip').css({visibility: 'visible'});

        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        var tW = $('#tooltip')[0].getBoundingClientRect().width;
        var tH = $('#tooltip')[0].getBoundingClientRect().height;
        var x = $(this)[0].getBoundingClientRect().left + $(this)[0].getBoundingClientRect().width / 2;
        if (x + tW > w) {
            console.log(`${x} ${x + tW} ${w}`);
            x = w - tW - 10;
            console.log(`${x}`);
        }
        var y = $(this)[0].getBoundingClientRect().top + $(this)[0].getBoundingClientRect().height / 2;
        if (y + tH > h) {
            console.log(`${y} ${y + tH} ${h}`);
            y = h - tH -    10;
            console.log(`${y}`);
        }
        
        console.log(`x: ${x}; y: ${y}; w: ${w}; h: ${h}`);
        $('#tooltip').css({ top: `${y}`, left: `${x}` });
    }
});

// scaling the map when resizing the client window
function ScaleMap() {
    var oH = document.documentElement.clientHeight;
    oH -= oH * 0.1;

    var scale = oH / 420;
    console.log("scale = " + scale);
    $('#map').css({ transform: `scale(${scale})` });
}

function getCoordsById(id) { // TODO: Add Crimea's and Kyiv region's coordinates.
    var coords = {};
    switch (id) {
        case 'UA-40': // Sevastpol' city
        case 'UA-43': // Crimea
            coords.latitude = '44.952116';
            coords.longitude = '34.102411';
            break;
        case 'UA-71': // Cherkasy
            coords.latitude = '49.4285400';
            coords.longitude = '32.0620700';
            break;
        case 'UA-74': // Chernihiv
            coords.latitude = '51.5055100';
            coords.longitude = '31.2848700';
            break;
        case 'UA-77': // Chernivtsi
            coords.latitude = '48.5422500';
            coords.longitude = '28.1147300';
            break;
        case 'UA-12': // Dnipro
            coords.latitude = '48.4500000';
            coords.longitude = '34.9833300';
            break;
        case 'UA-14': // Donets'k
            coords.latitude = '48.0230000';
            coords.longitude = '37.8022400';
            break;
        case 'UA-26': // Ivano-Frankivs'k
            coords.latitude = '48.9215000';
            coords.longitude = '24.7097200';
            break;
        case 'UA-63': // Kharkiv
            coords.latitude = '49.9808100';
            coords.longitude = '36.2527200';
            break;
        case 'UA-65': // Kherson
            coords.latitude = '46.6558100';
            coords.longitude = '32.6178000';
            break;
        case 'UA-68': // Khmel'nyts'kiy
            coords.latitude = '49.4216100';
            coords.longitude = '26.9965300';
            break;
        case 'UA-30': // Kyiv city
        case 'UA-32': // Kyiv region
            coords.latitude = '50.4546600';
            coords.longitude = '30.5238000';
            break;
        case 'UA-35': // Kropivnitskiy
            coords.latitude = '48.5132000';
            coords.longitude = '32.2597000';
            break;
        case 'UA-09': // Luhans'k
            coords.latitude = '48.5670500';
            coords.longitude = '39.3170600';
            break;
        case 'UA-46': // L'viv
            coords.latitude = '49.8382600';
            coords.longitude = '24.0232400';
            break;
        case 'UA-48': // Mykolayiv
            coords.latitude = '46.9659100';
            coords.longitude = '31.9974000';
            break;
        case 'UA-51': // Odessa
            coords.latitude = '46.4774700';
            coords.longitude = '30.7326200';
            break;
        case 'UA-53': // Poltava
            coords.latitude = '49.5937300';
            coords.longitude = '34.5407300';
            break;
        case 'UA-56': // Rivne
            coords.latitude = '50.6230800';
            coords.longitude = '26.2274300';
            break;
        case 'UA-59': // Sumy
            coords.latitude = '50.9216000';
            coords.longitude = '34.8002900';
            break;
        case 'UA-61': // Ternopil'
            coords.latitude = '49.5558900';
            coords.longitude = '25.6055600';
            break;
        case 'UA-21': // Transcarpathia
            coords.latitude = '48.6166700';
            coords.longitude = '22.3000000';
            break;
        case 'UA-05': // Vinnytsya
            coords.latitude = '49.2327800';
            coords.longitude = '28.4809700';
            break;
        case 'UA-07': // Volyn
            coords.latitude = '50.7593200';
            coords.longitude = '25.3424400';
            break;
        case 'UA-23': // Zaporizhzhya
            coords.latitude = '47.8228900';
            coords.longitude = '35.1903100';
            break;
        case 'UA-18': // Zhytomyr
            coords.latitude = '50.2648700';
            coords.longitude = '28.6766900';
            break;
        default:
            console.log("incorrect region's id");
    }
    return coords;
}