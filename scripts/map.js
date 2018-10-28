var SELECTED = "";
var NIGHTMODE = false;

const DAY_BACKGROUND = '#f7f7f7';
const DAY_TEXT_COLOR = 'rgb(96, 120, 155)';
const DAY_REGION_NORMAL = '#d0e3c3';
const DAY_REGION_STROKE = '#76866c';
const DAY_REGION_HOVERED = 'rgb(170, 216, 138)';
const DAY_REGION_CLICKED = 'rgb(125, 193, 78)';
const DAY_TOOLTIP_BACKGROUND = 'rgba(26, 22, 0, 0.4)';

const NIGHT_BACKGROUND = '#232e3c'; // '#17212b' // '#003366'
const NIGHT_TEXT_COLOR = '#ffffff'; // '#ffffff'
const NIGHT_REGION_NORMAL = '#2b5278'; // '#0069cc'
const NIGHT_REGION_STROKE = '#ffffff'; // '#ffffff'
const NIGHT_REGION_HOVERED = 'rgb(64, 115, 164)'; // '#477db5'; // '#1a90ff'
const NIGHT_REGION_CLICKED = '#5288c1'; // '#8ecaff'
const NIGHT_TOOLTIP_BACKGROUND =  'rgba(144, 183, 225, 0.7)' /*'rgba(120, 166, 214, 0.7)'*/; // 'rgba(128, 183, 235, 0.7)'

var WEATHER = {
    MOSTLY: [-50, -120],
    CLEAR: [-130, -120],
    PARTLY: [-210, -120],
    MOONWCLOUDS: [-290, -120],
    LIGHTRAIN: [-370, -120],

    STORMY: [-50, -210],
    RAIN: [-130, -210],
    SNOW: [-210, -210],
    WINDY: [-290, -210],
    MOONWRAIN: [-370, -210],

    SLEET: [-50, -300],
    FOGGY: [-130, -300],
    MOON: [-210, -310],
    WINDWRAIN: [-290, -300],
    WINDWCLOUDSANDRAIN: [-370, -300],
	
	CLOUDSANDWIND: [-50, -380]
};

// change the color of the area by hover
$('.area').hover(function() {
    if ($(this).attr("id") != SELECTED) {
        if(NIGHTMODE){
            $(this).css({
                fill: NIGHT_REGION_HOVERED
            });
        } else {
            $(this).css({
                fill: DAY_REGION_HOVERED
            });
        }
    }
});

$('.area').mouseout(function () {
    if ($(this).attr("id") != SELECTED) {
        if(NIGHTMODE){
            $(this).css({
                fill: NIGHT_REGION_NORMAL
            });
        } else {
            $(this).css({
                fill: DAY_REGION_NORMAL
            });
        }
    }
});

$('.area').click(function ( event ) {    
    if ($(this).attr("id") != SELECTED) {
        // change the color of the area by click
        if(NIGHTMODE){
            $('.area').css({
                fill: NIGHT_REGION_NORMAL
            });
            $(this).css({
                fill: NIGHT_REGION_CLICKED
            });
        } else {
            $('.area').css({
                fill: DAY_REGION_NORMAL
            });
            $(this).css({
                fill: DAY_REGION_CLICKED
            });
        }
       
        $('#district').html($(this).parent().attr("xlink:title"));
        SELECTED = $(this).attr("id");

        // get weather from API
        var coords = getCoordsById($(this).attr("id"));
        getWeatherReport(coords.latitude, coords.longitude);

        // show tooltip
        $('#tooltip').css({visibility: 'visible'});

        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        var tW = $('#tooltip')[0].getBoundingClientRect().width;
        var tH = $('#tooltip')[0].getBoundingClientRect().height;
        var x = $(this)[0].getBoundingClientRect().left + $(this)[0].getBoundingClientRect().width / 2;
        if (x + tW > w) {
            //console.log(`${x} ${x + tW} ${w}`);
            x = w - tW - 10;
            //console.log(`${x}`);
        }
        var y = $(this)[0].getBoundingClientRect().top + $(this)[0].getBoundingClientRect().height / 2;
        if (y + tH > h) {
            //console.log(`${y} ${y + tH} ${h}`);
            y = h - tH -    10;
            //console.log(`${y}`);
        }
        
        //console.log(`x: ${x}; y: ${y}; w: ${w}; h: ${h}`);
        $('#tooltip').css({ top: `${y}`, left: `${x}` });
		$('#teamList').css({display: "none"});
		
		event.cancelBubble = true;
		event.stopPropagation();
    }
});

$('body').click(() => {
	$('#tooltip').css({visibility: 'hidden'});
    if(NIGHTMODE){
        $('#' + SELECTED).css({
            fill: NIGHT_REGION_NORMAL
        });
    } else {
        $('#' + SELECTED).css({
            fill: DAY_REGION_NORMAL
        });
    }
	SELECTED = "";
	
	$('#teamList').css({display: "none"});
});

$("#logo").click(function ( event ) {
    $('#teamList').toggle();
	$("#tooltip").css({visibility: "hidden"});
	
    event.cancelBubble = true;
    event.stopPropagation();
});

$('#mode_switch').click(() => {
    NIGHTMODE = !NIGHTMODE;
    SELECTED = "";
    console.log('nightmode value was switched to: '+NIGHTMODE);
    changeBackgroundImage('mode_switch','src/icon-sun3.png','src/icon-moon3.png');
    changeColorScheme();
});

$('#mode_switch').hover(() => {
    changeBackgroundImage('mode_switch','src/icon-sun3.png','src/icon-moon3.png');
});

$('#mode_switch').mouseout(() => {
    changeBackgroundImage('mode_switch','src/icon-sun1.png','src/icon-moon1.png');
});

function changeColorScheme() {
    if (NIGHTMODE) {
        $('body').css({
            color: NIGHT_TEXT_COLOR,
            backgroundColor: NIGHT_BACKGROUND
        });
        $('.area').css({
            fill: NIGHT_REGION_NORMAL,
            stroke: NIGHT_REGION_STROKE
        });
        $('#mode_switch').css({
            width: '40px',
            height: '40px',
            backgroundSize: '40px'
        });
        $('#tooltip').css({
            backgroundColor: NIGHT_TOOLTIP_BACKGROUND
        });
        $('#teamList').css({
            backgroundColor: NIGHT_TOOLTIP_BACKGROUND
        });
    }
    else {
        $('body').css({
            color: DAY_TEXT_COLOR,
            backgroundColor: DAY_BACKGROUND
        });
        $('.area').css({
            fill: DAY_REGION_NORMAL,
            stroke: DAY_REGION_STROKE
        });
        $('#mode_switch').css({
            width: '36px',
            height: '36px',
            backgroundSize: '36px'
        });
        $('#tooltip').css({
            backgroundColor: DAY_TOOLTIP_BACKGROUND
        });
        $('#teamList').css({
            backgroundColor: DAY_TOOLTIP_BACKGROUND
        });
    }
    changeBackgroundImage('mode_switch','src/icon-sun1.png','src/icon-moon1.png');
    changeBackgroundImage('logo','src/donut-logo.png','src/donut-logo3.png');
}

function changeBackgroundImage(id, resource1, resource2) {
    if (NIGHTMODE) {
        document.getElementById(id).style.backgroundImage = `url(${resource1})`;
    }
    else {
        document.getElementById(id).style.backgroundImage = `url(${resource2})`;
    }
}

// scaling the map when resizing the client window
function scaleMap() {
    var oH = document.documentElement.clientHeight;
    oH -= oH * 0.1;

    var scale = oH / 420;
    //console.log("scale = " + scale);
    $('#map').css({ transform: `scale(${scale})` });
}

function onLoad(){
    changeColorScheme();
    scaleMap();
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