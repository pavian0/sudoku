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
function insertValue(number){
  //document.getElementById(this).innerHTML = number;
  document.activeElement.innerHTML = number;
}

function validateValue(number){
  var duplicate = 0;
  //var digits = (""+divid).split("");
  let row = document.activeElement.getAttribute('row');
  let col = document.activeElement.getAttribute('col');
  var temp;
  let values = [];
  console.log("row: " + row + "col: " + col);
  document.activeElement.style.color = "blue";
  for(i=1;i<=9;i++){
    temp = i + col;
    //console.log(temp);
    values.push(document.getElementById(temp).innerHTML);
    if(i != row && document.getElementById(temp).innerHTML == document.activeElement.innerHTML){
      duplicate = 1;
      document.activeElement.style.color = "red";
      break;
    }
  }
  console.log("column: " +values);
  values.length = 0;
  for(i=1;i<=9;i++){
    temp = row + i;
      values.push(document.getElementById(temp).innerHTML);
      if(i != col && document.getElementById(temp).innerHTML == document.activeElement.innerHTML){
        duplicate = 1;
        document.activeElement.style.color = "red";
        break;
      }
  }
  console.log(values);
  console.log("Duplicate: " + duplicate);
}

function fillField(keyCode){
  var divId = document.activeElement.id;
  if(keyCode >= 49 && keyCode <= 57){
    var number = keyCode - 48;
    console.log("You pressed key: " + number);
    console.log("Filling active element with number: " + number);
    insertValue(number);
    validateValue(number);
  } else if (keyCode == 8 || keyCode == 46){
    document.activeElement.innerHTML = '';
  } else {
    console.log("This is not a number between 1 and 9!");
    console.log(keyCode);
  }
}


document.addEventListener("keydown", function(event) {
  fillField(event.which);
  //console.log(event.which);
})

/*document.("#test").hover(function() {
    this.focus();
}, function() {
    this.blur();
}).keydown(function(e) {
    alert(e.keyCode);
});
*/
