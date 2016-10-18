
function rot13(str) { // LBH QVQ VG!
  var newStrArr = [];
  for (var i = 0; i < str.length; i++) {
    //sets blank to blank
    if (str[i] === ' '){
      newStrArr.push(str[i]);
    } 
    //gets char code
    var char = str[i].charCodeAt(0);
    
    //if greater or eq to 77, wrap back to 65 (letter A)
    if (char >= 77) {
    newStrArr.push(String.fromCharCode(char - 13));
  }
    //else add 13 onto number
    else if (char < 77){
      newStrArr.push(String.fromCharCode(char + 13))  
    }
  }
  return newStrArr.join('');
}

// // Change the inputs below to test
rot13("SERR PBQR PNZ");
