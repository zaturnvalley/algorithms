// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

//working code, doesn't fully work yet
function destroyer(arr) {
  var newArr = [];
  for (var i = 1; i < arguments.length; i++){
    newArr.push(arguments[i]);
  }
  function checker(){
    newArr.forEach(function(val){
      if(arr[j] === val){
        arr.splice(j, 1);
      }
    });
  }
  for (var j = arr.length -1; j > 0; j--) {
    checker();
  }
  return arr; 
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
