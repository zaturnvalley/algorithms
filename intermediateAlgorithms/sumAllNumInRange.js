//Find the sum of all numbers in range of 2 array values
function sumAll(arr) {
  if (arr[0]>arr[1]){
    var swap = arr[0];
    arr[0] = arr[1];
    arr[1] = swap;
  }
  var nums = [];
  for (var i = arr[0]; i <= arr[1]; i++){
    nums.push(i);
  }
  var added = nums.reduce(function(a,b){
    return a + b;
  });
  return added;
}
sumAll([1, 4]);