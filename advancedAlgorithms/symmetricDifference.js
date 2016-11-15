//Create a function that takes two or more arrays and returns an array of 
//the symmetric difference (△ or ⊕) of the provided arrays

//pass this into sort to change it to numeric sorting
function sortNum(a,b){
  return a - b;
}
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
  //function that loops through array and checks if int is in array
  function compareTwo(arrOne, arrTwo){
    var combined = arrOne.concat(arrTwo).sort(sortNum);
    var intersect = [];
  for (var i = combined.length - 1; i > 0; i--){
    if (combined[i] === combined[i + 1]){
      intersect.push(combined[i]);
      combined.splice(i, 2);
    }
  }
  console.log(intersect);
  console.log(combined)
  // for (var j = 0; j < combined.length; j++){
  //  for (var k = 0; k < intersect.length; k++){
      
  //  }
  // }
  }
  compareTwo([3,2,1,4,5],[2,5,7,3])
  //symmetricDifference.push(argumentsArray[0]);
  //for (var j = 1; j < argumentsArray.length; j++){
  //  for (var k = 0; k < symmetricDifference.length; k++){
  //    if (inArray(symmetricDifference[k], argumentsArray[j][k])){
  //      symmetricDifference.push(inArray(symmetricDifference[k], argumentsArray[j][k]));
  //    }
  //  }
    
  //}
  return symmetricDifference;
}

sym([1, 2, 3], [5, 2, 1, 4]);

//create recursive function
//dump first array into set or new arr
//if second array value isn't in array, push it

//function that takes in 2 arrays, finds intersect, loops through combined array and sees if combined matches with intersect, drop

