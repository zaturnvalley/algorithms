function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for(var i = 0; i < collection.length; i++){
    for (var secondVal in source){
      for (var val in collection[i]){
      if(val === secondVal && !arr.includes(collection[i]) && collection[i][val] === source[secondVal]){
      arr.push(collection[i]);  
      }
      }
    }
  }
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
