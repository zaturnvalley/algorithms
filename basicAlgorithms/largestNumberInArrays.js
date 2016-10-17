//return the largest numbers in each nested array within an array

function largestOfFour(arr) {
  var newArr = [];
  for (var i = 0; i< arr.length; i++) {
    var biggest = 0;
    for (var j = 0; j < arr[i].length; j++) {
      var big = arr[i][j];
      if(arr[i][j] > biggest) {
        biggest = arr[i][j];
      } 
    } newArr.push(biggest);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
