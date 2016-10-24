//Write a function that takes two or more arrays and returns 
//a new array of unique values in the order of the original provided arrays.
function uniteUnique(arr) {
  var array = [];
  for (var keys in arguments){
    array.push(arguments[keys]);
  }

  var flat = array.reduce(function(a, b){
    return a.concat(b);
  });
  return flat;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
