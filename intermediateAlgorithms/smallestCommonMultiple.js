//Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
//as well as by all sequential numbers in the range between these parameters.


function smallestCommons(arr) {
  var range = [];
  for (var i = arr[0]; i <= arr[1]; i++){
    range.push(i);
  }

}


smallestCommons([1,10]);

//find primes
//object contructor -- key value pairs of prime number maps to its max index 
//set values in object to zero
//check if factor is greater than zero, if so, update value
//