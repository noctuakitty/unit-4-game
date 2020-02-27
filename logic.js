var computer;
var blue;
var green;
var yellow;
var red;
var userScore;
var wins = 0;
var losses = 0;
 
$(".crystal").on("click",function() {
    console.log(this)

    var value =$(this).attr("value")
    console.log(value)
    userScore = userScore + parseInt(value)
    $("#your-score").text(userScore)

    if(userScore === computer){
        alert("win")
        wins++;
        $("#win-count").text(wins)
        play()

    } else if (userScore>computer){
        alert("lost")
        losses ++;
        $("#loss-count").text(losses);
        play()
    }

});

function play(){
    computer = Math.floor(Math.random() * 100) + 20
    blue = Math.floor(Math.random()* 10) + 1;
    green = Math.floor(Math.random()* 10) + 1;
    yellow = Math.floor(Math.random()* 10) + 1;
    red = Math.floor(Math.random()* 10) + 1;
    userScore= 0
 
    $("#your-score").text(userScore)
    $("#target-score").text(computer)
    $("#blue").attr("value", blue)
    $("#green").attr("value", green)
    $("#yellow").attr("value", yellow)
    $("#red").attr("value", red)
}

play()

