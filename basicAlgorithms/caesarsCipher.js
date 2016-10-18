
function rot13(str) { // LBH QVQ VG!
  var newStrArr = [];
  for (var i = 0; i < str.length; i++) {
    //sets blank to blank
    if (str[i] === ''){
      newStrArr.push(str[i]);
    } 
    //gets char code
    var char = str[i].charCodeAt(0);
    
    //if greater or eq to 110, wrap back to 97 (letter a)
    if (char >= 110) {
    newStrArr.push(String.fromCharCode(char - 13))
  }
    //else add 13 onto number
    newStrArr.push(String.fromCharCode(char + 13))
  }
  return newStrArr.join('');
}

// Change the inputs below to test
rot13("LBH QVQ VG!");



