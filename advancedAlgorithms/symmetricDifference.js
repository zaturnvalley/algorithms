//Create a function that takes two or more arrays and returns an array of 
//the symmetric difference (△ or ⊕) of the provided arrays

function sym(args) {
  //access to arguments being passed in in object form
  var argumentArray = arguments;

  //will return this as final
  var symmetricDifference = [];
  console.log(argumentArray)

  //if only two args passed in
  if (argumentArray.length === 2){
    for (var i = 0; i < arguments[1].length; i++){
      if (!arguments[0].contains(arguments[1][i])){
      symmetricDifference.push(arguments[1][i])
    }
    }
  }

  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);
