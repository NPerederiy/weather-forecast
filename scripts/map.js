var selected = "";

// showing area description by hover
$('.area').hover(function() { 
    console.log($(this));
    if ($(this).attr("id") != selected) {
        $(this).css({
            fill: '#1a90ff',
            strokeWidth: '3px'
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
            fill: '#0069cc',
            strokeWidth: '1px'
        });
    }
});
// changing the color of the area by click
$('.area').click(function() {      
    $('.area').css({
        fill: '#0069cc',
        strokeWidth: '1px'
    });
    $(this).css({
        fill: '#8ecaff',
        strokeWidth: '3px'
    });
    selected = $(this).attr("id");
});