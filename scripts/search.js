'use strict';

var IS_BAR_OPENED = false;

var changeFormState = function changeFormState() {
	//if(!IS_BAR_OPENED){
		document.getElementById('form').classList.toggle('open');
		if ($('form').className != 'open') 
			$('input').focus();
		else 
			$('input').value = '';
			
		
	//}
};

$('form').click(function ( event ) {
	changeFormState();
	changeBarBackground()
	showSearchBar();
});

$('form').submit(function ( event ) {
	e.preventDefault();
	changeFormState();
});

function changeBarBackground() {
	if(!IS_BAR_OPENED){
		if (NIGHTMODE) {
			$("#search").css({
				backgroundColor: NIGHT_TOOLTIP_BACKGROUND
			});
		} else {
			$("#search").css({
				backgroundColor: DAY_TOOLTIP_BACKGROUND
			});
		}
	} else {
		if (NIGHTMODE) {
			$("#search").css({
				backgroundColor: NIGHT_BACKGROUND
			});
		} else {
			$("#search").css({
				backgroundColor: DAY_BACKGROUND
			});
		}
	}
	IS_BAR_OPENED = ! IS_BAR_OPENED;
}

function showSearchBar() {
    $(".search-region").css({ fontWeight: "normal" });
    if ($("#regions").css("display") == "none") {
        $("#regions").slideDown();
    }
    else {
        $("#regions").slideUp();
        $("#keyword").val("");
        $("li").css({ display: "list-item" });
        if (NIGHTMODE) {
            $(".area").css({
                fill: NIGHT_REGION_NORMAL
            });
        } else {
            $(".area").css({
                fill: DAY_REGION_NORMAL
            });
        }
    }
}

//document.getElementById('#keyword	').addEventListener('keyup', keywordChange(sender))
/*
$('#keyword').onkeyup = function (event) 
{
	
}
/*onchange="keywordChange(this)

*/
function keywordChange(sender) {
    $("li").css({ display: "list-item" });
    var key = $(sender).val().toLowerCase();

    var el = $(`li`);

    for (var i = 0; i < el.length; i++) {
        if ($(el[i]).html().toLowerCase().indexOf(key) == -1) {
            $(el[i]).css({display: "none"});
        }
    }
}