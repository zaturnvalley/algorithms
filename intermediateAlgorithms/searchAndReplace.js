//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
function myReplace(str, before, after) {
  var splStr = str.split(' ');
  for (var i = 0; i < splStr.length; i++){
    if (splStr[i] === before){
      if(splStr[i].charCodeAt(0) >= 65 && splStr[i].charCodeAt(0) <= 90){
        splStr[i] = after;
        var splitWord = splStr[i].split('');
        splitWord[0] = splitWord[0].toUpperCase();
        splStr[i] = splitWord.join('');
      } else {
        splStr[i] = after;  
      }
    }
  }
  return splStr.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
