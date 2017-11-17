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

// using es6 logic
function reverseAlt(str){
  let reversed = '';
  for (let character of str){
    reversed = character + reversed;
  }
  return reversed;
}

// using reduce
function reverseString(str){
  return str.split('').reduce(function(a,b){return [b].concat(a);}, []).join('');
}

// using reduce
function reverseTwo(str){
  return str.split('').reduce((reversed,character)=>{return character + reversed;}, '');
}

module.exports = reverse;

reverseString("hello");