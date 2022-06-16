
    $(window).on("load", function () {
    $(".loader").fadeOut(1000);
});


    $(function () {
    $(".progressbar").progressbar({
        value: 5,
        max: 100,
        complete: function (event, ui) {
            levelUp();
            value = 0;
            $(".progressbar").progressbar("option", "value", 0);
        }
    });

});


    setInterval(bulletMove, 10);

    var bulletUp = parseInt($(".bullet").css("bottom"))

    function bulletMove(e) {
    bulletUp = bulletUp + 20;
    $(".bullet").css("bottom", bulletUp);
    if (bulletUp == 790) {
    bulletUp = 110;
    $(".bullet").css("bottom", bulletUp);
    ufoKill();
} else {
    $(".ufo > img").css("display", "block");
}
}

    var imgLeft = $('.plane').offset().left;
    var bulletLeft = $(".bullet").offset().left;

    $(window).keydown(function (event) {
    if (event.key == "ArrowRight") {

    imgLeft = imgLeft + 10;
    bulletLeft = bulletLeft + 10;
    $('.plane').css("left", imgLeft)
    $('.bullet').css("left", bulletLeft)

} else if (event.key == "ArrowLeft") {

    imgLeft = imgLeft - 10;
    bulletLeft = bulletLeft - 10;
    $(".plane").css("left", imgLeft)
    $('.bullet').css("left", bulletLeft)

}

});


    function ufoKill() {
    var max = $(".ufo").offset().left + 100;
    var min = $(".ufo").offset().left;
    var ufoUp = parseInt($(".ufo").css("bottom"));
    var bulletPosition = $(".bullet").offset().left;

    if (max > bulletPosition && min < bulletPosition) {
    console.log("Max:" + max)
    console.log("Min:" + min)
    console.log("UFO up:" + ufoUp)
    console.log("bullet posi:" + bulletPosition)

    $(".ufo > img").css("display", "none");
    respawnUFO();
    /*levelUp();*/
    fillProgressbar();
}
}


    //get progressbar value
    var value = 5;

    function fillProgressbar() {
    value = value + 5;
    //set progress bar value
    $(".progressbar").progressbar("option", "value", value);
}

    let level = 1;

    function levelUp() {
    level = level + 1;
    $(".level").text("Level : " + level);
}


    function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 38) + min)
}

    function respawnUFO() {
    const rndInt = randomIntFromInterval(100, 1000)
    $(".ufo").css("left", rndInt);
}


