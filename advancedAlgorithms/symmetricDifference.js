//Create a function that takes two or more arrays and returns an array of 
//the symmetric difference (△ or ⊕) of the provided arrays


function sym(args) {
  //access args
  var argumentObj = arguments;
  //converting to arr
  var argumentsArray = [];
  //solution
  var symmetricDifference = [];
  //converting obj to arr
  for (var key in argumentObj){
    argumentsArray.push(argumentObj[key]);
  }
  console.log(argumentsArray)
  // if (argumentArray.length === 2){
  //  if (argumentArray[0].length > argumentsArray[1].length){
  //    var temp = argumentArray[1];
  //    argumentArray[1] = argumentArray[0];
  //    argumentArray[0] = temp;
  //  }
  //  for (var i = 0; i < argumentArray[1].length; i++){
  //    if (!arguments[0].contains(arguments[1][i])){
  //    symmetricDifference.push(arguments[1][i])
  //    }
  //  }
  // }

  //return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);
