//Reverse a string
function reverseString(str) {
  var splitStr = str.split('');
  var revStr = splitStr.reverse();
  var joinStr = revStr.join('');
  return joinStr;
}

reverseString("hello");