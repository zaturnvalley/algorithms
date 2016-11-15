//find how many visible holes are in a given number. 8 has two holes. 0 as 1. 1 as none, etc
function countHoles(num) {
    var noHoles = [1,2,3,5,7];
    var oneHole = [4,6,9,0];
    var twoHoles = [8];
    var counter = 0;
    
    var numStr = "'" + num + "'";
    var splNum = numStr.split('');

  for (var i = 0; i < splNum.length; i++){
    for (var j = 0; j < oneHole.length; j++){
      if (splNum[i] == oneHole[j]){
        counter += 1;
      }
    } 
    if (splNum[i] == twoHoles[0]){
        counter += 2;
    }
  }
    return counter;
}

countHoles(84)