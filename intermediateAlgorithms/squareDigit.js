//Square every digit
function squareDigits(num){
  var stringified = num.toString();
  var numArr = stringified.split('');
  var squaredStr = '';
  for (var i = 0; i < numArr.length; i++){
    squaredStr += squared(numArr[i]);
  }
  var toInt = parseInt(squaredStr);
  return toInt;
}

function squared(num){
  return num * num;
}