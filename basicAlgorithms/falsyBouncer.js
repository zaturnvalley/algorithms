//Remove all falsy values from an array.
function bouncer(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (!arr[i]){
      arr.splice(i, 1);
    }
  }
  return arr;
}

bouncer([7, "ate", "", false, 9]);