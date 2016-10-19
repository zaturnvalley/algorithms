// Compare two arrays and return a new array with any items only found in one 
// of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
  if(!arr2.includes(arr1[i])){
    newArr.push(arr1[i]);
  }
  }
  for (var j = 0; j < arr2.length; j++) {
  if(!arr1.includes(arr2[j])){
    newArr.push(arr2[j]);
  }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);