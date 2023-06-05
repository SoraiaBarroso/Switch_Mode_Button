$(document).ready(function() {
    let isMoved = false;

    $("#myButton").click(function () {
        if (isMoved) {
            $("#myButton").css({"left": "0", "background-image": "url(/Toggle_buttom/icons8-sun-48.png)"});
            $("body").css("background", "#a8c5f8");
            $(".container").css("box-shadow", "inset -2px 2px 5px #3e6799")
            isMoved = false;
        }else{
            $("#myButton").css({"left": "80px", "background-image": "url(/Toggle_buttom/icons8-moon-48.png)"});
            $("body").css("background", "#43474b");
            $(".container").css("box-shadow", "inset 2px -2px 5px #becbd9")
            isMoved = true;
        }
    });
});

