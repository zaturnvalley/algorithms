//Reverse a string using reverse
// function reverseString(str) {
//   var splitStr = str.split('');
//   var revStr = splitStr.reverse();
//   var joinStr = revStr.join('');
//   return joinStr;
// }

// using a for loop
// function reverseString(str) {
//   var splStr = str.split('');
//   var solution = [];
//   for (var i = splStr.length; i >= 0; i--){
//     solution.push(splStr[i]);
//   } return solution.join('');
// }

// using reduce
function reverseString(str){
  var splStr = str.split('');
  return splStr.reduce(function(a,b){return [b].concat(a);}, []).join('');
}
module.exports = reverse;

reverseString("hello");