var selected = "";

var Weather = {
    CLOUDY: [-50, -120],
    SUNNY: [-130, -120],
    SUNNYWCLOUDS: [-210, -120],
    MOONWCLOUDS: [-290, -120],
    SUNNYWRAIN: [-370, -120],

    STORMY: [-50, -210],
    RAINY: [-130, -210],
    SNOWY: [-210, -210],
    WINDY: [-290, -210],
    MOONWRAIN: [-370, -210],

    SLEET: [-50, -300],
    FOGGY: [-130, -300],
    MOON: [-210, -300],
    WINDWRAIN: [-290, -300],
    WINDWCLOUDSANDRAIN: [-370, -300]
};

// showing area description by hover
$('.area').hover(function() {
    if ($(this).attr("id") != selected) {
        $(this).css({
            fill: '#1a90ff'
        });
    }
    //$('#description').html($(this).attr('title'));
    //$('#description').fadeIn();
},
function(){
    //$('#description').fadeOut();
    });

$('.area').mouseout(function () {
    if ($(this).attr("id") != selected) {
        $(this).css({
            fill: '#0069cc'
        });
    }
});
// changing the color of the area by click
$('.area').click(function () {    
    if ($(this).attr("id") != selected) {
        $('.area').css({
            fill: '#0069cc'
        });
        $(this).css({
            fill: '#8ecaff'
        });
        $('#district').html($(this).parent().attr("xlink:title"));
        selected = $(this).attr("id");

        // var weather = getWeather();
      
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

function ScaleMap() {
    var oH = document.documentElement.clientHeight;
    oH -= oH * 0.1;

    var scale = oH / 420;
    console.log("scale = " + scale);
    $('#map').css({ transform: `scale(${scale})` });
}