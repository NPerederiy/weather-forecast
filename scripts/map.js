// showing area description by hover
$('.area').hover(function() { 
    console.log($(this));
    //$('#description').html($(this).attr('title'));
    //$('#description').fadeIn();
},
function(){
    //$('#description').fadeOut();
});
// changing the color of the area by click
$('.area').click(function() {      
    $('.area').css({ fill: '#0069cc' });
    $(this).css({ fill: '#8ecaff' });
});