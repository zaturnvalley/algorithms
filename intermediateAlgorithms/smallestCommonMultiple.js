// noprotect

//Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
//as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
  var range = [];
  for (var i = arr[0]; i <= arr[1]; i++){
    range.push(i);
  }
  var multiple = range[range.length - 1];

  var checker = false;
  var checker2 = false;
  
  while(!checker){
    while (!checker2){
      for (var j = range[0]; j <= range[range.length - 1]; j++){
      if (multiple % j !== 0){
        checker2 = false;
        break;
      } checker2 = true;
      } multiple++;
    }

    checker = true;
  }
  return multiple - 1;
}