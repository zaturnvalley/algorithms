//Drop the elements of an array (first argument), 
//starting from the front, until the predicate (second argument) returns true.

function dropElements(arr, func) {
  for (var i = 0; i < arr.length; i++){
    if (func(arr[0]) && func(arr[i + 1])){
      return arr;
    } else {
      arr.splice(0,1);
    }
  } return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})
