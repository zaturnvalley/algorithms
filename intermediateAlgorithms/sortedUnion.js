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
  var answer = [];
  for (var i = 0; i < flat.length; i++){
    if (!answer.includes(flat[i])){
      answer.push(flat[i]);
    }
  }
  return answer;
}
