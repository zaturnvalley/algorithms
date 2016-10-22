//Find the missing letter in the passed letter range and return it.
function fearNotLetter(str) {
  var alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var strSpl = str.split('');
  var alphRange = [];
  for (var i = 0; i < strSpl.length; i++){
    if(strSpl[0] === alph[i]){
      alphRange.push(strSpl[0]);
    } else if (alphRange.length > 0){
        alphRange.push(alph[i]);  
    } 
  }
  var solution = matcher(alphRange, strSpl);
  return solution;
}
function matcher(alphRange, strSpl){
  for (var j = 0; j < alphRange.length; j++){
    if(alphRange[j] !== strSpl[j]){
      return alphRange[j];
    }
  }
}