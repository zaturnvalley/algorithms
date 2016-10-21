//if collection contains source, return that collection
function whatIsInAName(collection, source) {

  var sourceKeys = Object.keys(source);

  return collection.filter(function(obj){
    for (var i = 0; i < sourceKeys.length; i++){
      for (var key in collection){
        if (obj[sourceKeys[i]] !== source[sourceKeys[i]] || !obj.hasOwnProperty(sourceKeys[i])){
          return false;
        }
      } 
    } return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
