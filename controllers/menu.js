$(document).keydown(function (event) {
    if (event.key === "ArrowDown"){
        if ( $("#start").hasClass("selected")){
            $( "#start" ).removeClass( "selected" );
            $("#option").addClass("selected");

        }else if ( $('#option').hasClass('selected')){
            $("#option").removeClass("selected");
            $("#support").addClass("selected");
        }else if ($("#support").hasClass("selected")){
            $("#support").removeClass("selected");
            $("#quite").addClass("selected");
        }
    }
    else if (event.key === "ArrowUp"){
        if ($('#option').hasClass('selected')){
            $( "#start" ).addClass( "selected" );
            $("#option").removeClass("selected");
        }else if ($("#support").hasClass("selected")){
            $("#support").removeClass("selected");
            $("#option").addClass("selected");
        }else if ($("#quite").hasClass("selected")){
            $("#quite").removeClass("selected");
            $("#support").addClass("selected");
        }
    }
})



