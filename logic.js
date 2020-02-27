
 
    // $("#green").on("click",function(random) {
    //     var green = Math.floor(Math.random()* 10 + 1);
    //     //console.log (green);

    // });
    // $("#yellow").on("click",function(random) {
    //     var yellow = Math.floor(Math.random()* 10 + 1);
    //     //console.log (yellow);

    // });
    // $("#red").on("click",function(random) {
    //     var red = Math.floor(Math.random()* 10 + 1);
    //     //console.log (red);

    // });

    //scope global
var computer;
var blue;
var green;
var yellow;
var red;
var userScore;
var wins = 0;
var looses = 0;
 
$(".crystal").on("click",function() {
    console.log(this)

    var value =$(this).attr("value")
    console.log(value)
    userScore = userScore + parseInt(value)
    $("#your-score").text(userScore)
    // verification
    if(userScore === computer){
        alert("win")
        wins++;
        $("#win-count").text(wins)
        play()

    } else if (userScore>computer){
        alert("lost")
        looses ++;
        $("#loss-count").text(looses);
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

    //document.getElementById("target-score").textContent= computer 
    $("#target-score").text(computer)
    $("#blue").attr("value", blue)
    $("#green").attr("value", green)
    $("#yellow").attr("value", yellow)
    $("#red").attr("value", red)
}

play()
// calculate computer
// calculate crystals
// game start 

// you recalculate for new game 
// wins looses computer number  guess number  numbers for the crystals

// every time a crystal is clicked we need to know wich one we need to get the frandom number was created for this crystal / we need to add this to the guess number // verifycations (if big than computer ===> looses, ==== means wins)
// we need to be able to restart the game every time win or lost
