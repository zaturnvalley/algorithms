//Drop the elements of an array (first argument), 
//starting from the front, until the predicate (second argument) returns true.

function dropElements(arr, func) {
  var howLong = arr.length;
  for (var i = 0; i < howLong; i++){
    if (func(arr[0])){
      return arr;
    } else {
    arr.shift();
    }
  } return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})
