// showing area description by hover
$('.area').hover(function() { 
    console.log($(this));
	$(this).css({stroke-width: 3});
    //$('#description').html($(this).attr('title'));
    //$('#description').fadeIn();
},
function(){
    //$('#description').fadeOut();
});
// changing the color of the area by click
$('.area').click(function() {      
    $('.area').animate(
	{
		fill: '#0069cc'
	}, 500, function () {$('.area').css({fill: '#0069cc'})});
	//css({ fill: '#0069cc' });
    $(this).animate(
	{
		fill: '#8ecaff'
	}, 500, function () {$('.area').css({fill: '#8ecaff'})});
	//css({ fill: '#8ecaff' });
});