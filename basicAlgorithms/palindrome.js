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
// alternative version 1
function palindromeAlt(str){
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

// alternative version 2
function palindromeEveryVersion(str){
  return str.split('').every((char, i)=>{
    return char == str[str.length - i - 1];
  });
}

palindrome("eye");
