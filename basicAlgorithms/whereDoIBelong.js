// Return the lowest index at which a value (second argument) 
// should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.

function getIndexToIns(arr, num) {
  var sorted = arr.sort(function(a,b){
    return a - b;
  });
  for (var i = 0; i < sorted.length; i++){
    if(num == sorted[i]){
      return i;
    } else if (num > sorted[i] && num < sorted[i+1] || sorted[i+1] === undefined){
      return i + 1;
    } 
  }
}