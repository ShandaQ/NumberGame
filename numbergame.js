debugger

var randomNumer = Math.floor((Math.random() * 100) + 1);
var playersguess = 0;

  while(playersguess !== randomNumer){
    for(var i = 1; i <=7; i++){
      playersguess = Number(prompt("Guess a number between 1 - 100"));
      if(playersguess === randomNumer) {
        console.log("Correct! it was " + playersguess);
        console.log("It took you " + i + " times to guess the correct number");
        break;
      }
      else if(playersguess > randomNumer)
          console.log(playersguess + " is too HIGH");
      else
        console.log(playersguess + " is too LOW");
    }
  }
