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
            $("#quit").addClass("selected");
        }
    }
    else if (event.key === "ArrowUp"){
        if ($('#option').hasClass('selected')){
            $( "#start" ).addClass( "selected" );
            $("#option").removeClass("selected");
        }else if ($("#support").hasClass("selected")){
            $("#support").removeClass("selected");
            $("#option").addClass("selected");
        }else if ($("#quit").hasClass("selected")){
            $("#quit").removeClass("selected");
            $("#support").addClass("selected");
        }
    }
})



$(".button-glow").mouseenter(function () {
    $( "#start" ).removeClass( "selected" );
    $(this).addClass("selected");

});
$(".button-glow").mouseleave(function () {
    $(this).removeClass("selected")
});


