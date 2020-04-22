$("#button").on("click", function () {
    console.log("button works");
    var randomNumbers = "";

    for (var i = 0; i < 9; i++) {
        var randomNum = Math.floor(Math.random() * 9) + 1;
        randomNumbers = randomNum + randomNumbers;
        console.log(randomNumbers);
    }

    $("#randomNumbers").append("<br><hr>" + "<h1>" + randomNumbers + "</h1>");


});