//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++) {
    //if the key is not true in this object, return false
    if (!collection[i][pre]){
      return false;
    }
  }
  //if all objects contain pre as key, return true
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
