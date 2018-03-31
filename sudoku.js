function createNewGame(level){
  var toFill = 0;
  switch(level){
    case "easy":
      toFill = 40;
      break;
    case "medium":
      toFill = 30;
      break;
    case "hard":
      toFill = 20;
      break;
  }

}

function resetGame(){

}

function checkValue(x,y,value) {
  valueCheck = 0;

  if(valueCheck == 1){
    return 1
  }
  else{
    return 0
  }
}
