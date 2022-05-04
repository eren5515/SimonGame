var buttonColors= ["red", "blue", "green", "yellow"];
var gamePattern=[];
var userPattern=[];
var level =0;
var soundAdressWrong="sounds/wrong.mp3";
var audioWrong = new Audio(soundAdressWrong);


function nextSequence(){
    level++;
    userPattern.length=0;
    $("h1").text("Level "+ level);
    var randomNumber=Math.random()*4;
    randomNumber=Math.floor(randomNumber);
    var randomColor=buttonColors[randomNumber];
    gamePattern.push(randomColor);
    playSound(randomColor);
    $("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    
}
$(".btn").click(function () { 
    var userChosenColor = $(this).attr("id");
    userPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    var currentLevel=userPattern.length;
    currentLevel=currentLevel-1;
    checkAnswer(currentLevel);

});
$( "body" ).keypress(function() {
    if(level==0){
        nextSequence();
    }
    
  });

function playSound(name){
    var soundAdress="sounds/"+name+".mp3";
    var audio = new Audio(soundAdress);
    audio.play();
}


function animatePress(color){
    $("."+color).addClass("pressed");
    setTimeout(() => {
        $("."+color).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    
   


   

    if (userPattern[currentLevel] != gamePattern[currentLevel]){
        
        userPattern.length=0;
        gamePattern.length=0;
        level=0;
        
        audioWrong.play();
        
        $("h1").text("GAME OVER! Press any key to Restart");
        $("body").addClass("bgRed");
        setTimeout(() => {
            $("body").removeClass("bgRed");
            
           }, 400);
        
    }
    if (userPattern.length==gamePattern.length && userPattern[currentLevel] == gamePattern[currentLevel] && userPattern.length!=0 ) {
        userPattern.length=0;
        
        setTimeout(() => {
            nextSequence();
           }, 1000);
        
    }
  
}