//function returns ROT13 cipher of string
function rot13(str) { // LBH QVQ VG!
  var newStrArr = [];
  for (var i = 0; i < str.length; i++) {
    //gets char code
    var char = str[i].charCodeAt(0);
    
    //if greater or eq to 77, wrap back to 65 (letter A)
    if (char >= 78) {
    newStrArr.push(String.fromCharCode(char - 13));
  }
    //else add 13 onto number
    else if (char < 78 && char >= 65){
      newStrArr.push(String.fromCharCode(char + 13)); 
    } 
    //sets all other characters to itself
    else newStrArr.push(str[i]);
  }
  return newStrArr.join('');
}

// // Change the inputs below to test
rot13("SERR CVMMN!");
