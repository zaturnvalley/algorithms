// Narcissistic Numbers Alg
function narcissistic( value ) {
  if(value === narcCheck(value)){
    return true;
  } return false;
}
function narcCheck(value){
  var stringified = value.toString();
  var numArr = stringified.split('');
  var narcInt = 0;
  for (var i = 0; i < numArr.length; i++){
    narcInt += (Math.pow(numArr[i], numArr.length));
  }
  return narcInt;
}