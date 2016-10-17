// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  var newArr = [[]];
  var count = 0;
  for (var i = 0; i < arr.length ; i++) {
    if (newArr[count].length === size){
      count += 1;
      newArr.push([]);
    }
    newArr[count].push(arr[i]);
  }
  return newArr;
}
chunkArrayInGroups(['a','b','c','d'], 2);