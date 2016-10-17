// Return true if the string in the first element of the array contains all of the letters of 
// the string in the second element of the array.
function mutation(arr) {
  var lower = arr[0].toLowerCase()
  for (var i = 0; i < arr[1].length; i++) {
    if(!lower.includes(arr[1][i].toLowerCase())){
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);