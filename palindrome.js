//check and see if a word is a palindrome
function palindrome(str) {
  var noChar = str.replace(/[^a-z0-9+]+/gi, '');
  var strLower = noChar.toLowerCase();
  for (var i = 0; i < Math.floor(strLower.length / 2); i++){
    if (strLower[i] !== (strLower[strLower.length - 1 - i])) {
      return false;
    }
}
  return true;
}



palindrome("eye");
