//thread two strings together, merged like sewing 'abc', '123' returns 'a,1,b,2,c,3'
function mergeStrings(a, b) {
    var splA = a.split('');
    var splB = b.split('');
    
    var merged = [];
    if (splA.length > splB.length){
      for (var i = 0; i < splA.length; i++){
        merged.push(splA[i]);
        merged.push(splB[i]);
      }
    } else {
      for (var j = 0; j < splB.length; j++) {
        merged.push(splA[j]);
        merged.push(splB[j]);
      }
    }
  return merged.join('');
}

mergeStrings('123', 'abc');