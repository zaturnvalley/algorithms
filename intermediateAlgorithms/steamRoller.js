//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  var flat = [];
  //thinking that i may need to use recursion 
  for (var i = arr.length - 1; i > 0; i++){
    if(arr[i].constructor === Array){
      steamrollArray(arr[i]);
    } else {
      flat.push[i];
    }
  } return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
