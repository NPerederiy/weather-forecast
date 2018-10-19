var selected = "";

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
$('.area').click(function() {      
    $('.area').css({
        fill: '#0069cc'
    });
    $(this).css({
        fill: '#8ecaff'
    });
    $('#district').html($(this).parent().attr("xlink:title"));    
    selected = $(this).attr("id");
});

function ScaleMap() {
    var oH = document.documentElement.clientHeight;
    oH -= oH * 0.1;

    var scale = oH / 420;
    console.log("scale = " + scale);
    $('#map').css({ transform: `scale(${scale})` });
}