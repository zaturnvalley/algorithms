//The DNA strand is missing the pairing element. 
//Take each character, get its pair, and return the results as a 2d array.
function pairElement(str) {
  var splStr = str.split('');
  var atPair = ['A', 'T'];
  var gcPair = ['G', 'C'];
  var result = [];
  for (var i = 0; i < splStr.length; i++){
    if (splStr[i] === atPair[0]){
      result.push([splStr[i], atPair[1]]);
    } else if(splStr[i] === atPair[1]){
      result.push([splStr[i], atPair[0]]);  
    } else if(splStr[i] === gcPair[0]){
      result.push([splStr[i], gcPair[1]]);
    } else if (splStr[i] === gcPair[1]){
      result.push([splStr[i], gcPair[0]]);  
    }
  }
  return result;
}