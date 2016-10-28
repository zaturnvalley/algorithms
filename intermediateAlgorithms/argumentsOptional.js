//Create a function that sums two arguments together. 
//If only one argument is provided, then return a function that expects 
//one argument and returns the sum.
function addTogether() {
  //if arguments are integers, return sum
  if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number'){
    return arguments[0] + arguments[1];
  //if there's only one argument, call function again, apply first call arg to second
  } else if (typeof arguments[0] === 'number' && !arguments[1]){
    return addTogether.apply(arguments[0], []);
  }
  //else return undefined
  return undefined;
}
addTogether(4)(3)


