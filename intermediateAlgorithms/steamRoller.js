//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  var flat = [];
  
  for (var i = 0; i < arr.length; i++){
    if(arr[i] instanceof Array){
      flat = flat.concat(steamrollArray(arr[i]));
    } else {
      flat.push(arr[i]);
    }
  } return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);

