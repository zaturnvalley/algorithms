//Create a function that sums two arguments together. 
//If only one argument is provided, then return a function that expects 
//one argument and returns the sum.

function addTogether() {
  var arg = arguments[0];
  if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number'){
    return arguments[0] + arguments[1];
  } else if (typeof arguments[0] === 'number' && !arguments[1]){
    return function(arg2){ 
      if (Array.isArray(arg2)){
        return undefined;
      }
          return arg + arg2;
        };
  }
  return undefined;
}
addTogether(4)([3]);