//find the longest word in string, return length value
function findLongestWord(str) {
  var splitSent = str.split(' ');
  var stringLength = 0;
  for (var i=0; i < splitSent.length; i++){
    if(splitSent[i].length > stringLength){
      stringLength = splitSent[i].length;
    }
  }
  return stringLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
