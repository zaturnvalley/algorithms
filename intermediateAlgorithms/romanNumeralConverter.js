function convert(num){
  var options = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romans = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  var workingNum = num;

  for (var i = 0; i < options.length; i++) {
    
  }
}

//this is the incredibly non-dry awful coding way to solve this
function convertToRoman(num) {

  var numArr = num.toString().split('');

  if (numArr[numArr.length - 1] === '0') {
    numArr[numArr.length - 1] = '';
  }
  if (numArr[numArr.length - 1] === '1') {
    numArr[numArr.length - 1] = 'I';
  }
  if (numArr[numArr.length - 1] === '2') {
    numArr[numArr.length - 1] = 'II';
  }
  if (numArr[numArr.length - 1] === '3') {
    numArr[numArr.length - 1] = 'III';
  }
  if (numArr[numArr.length - 1] === '4') {
    numArr[numArr.length - 1] = 'IV';
  }
  if (numArr[numArr.length - 1] === '5') {
    numArr[numArr.length - 1] = 'V';
  }
  if (numArr[numArr.length - 1] === '6') {
    numArr[numArr.length - 1] = 'VI';
  }
  if (numArr[numArr.length - 1] === '7') {
    numArr[numArr.length - 1] = 'VII';
  }
  if (numArr[numArr.length - 1] === '8') {
    numArr[numArr.length - 1] = 'VIII';
  }
  if (numArr[numArr.length - 1] === '9') {
    numArr[numArr.length - 1] = 'IX';
  }
  if (numArr[numArr.length - 2] === '0') {
    numArr[numArr.length - 2] = '';
  }
  if (numArr[numArr.length - 2] === '1') {
    numArr[numArr.length - 2] = 'X';
  }
  if (numArr[numArr.length - 2] === '2') {
    numArr[numArr.length - 2] = 'XX';
  }
 if (numArr[numArr.length - 2] === '3') {
    numArr[numArr.length - 2] = 'XXX';
  }
 if (numArr[numArr.length - 2] === '4') {
    numArr[numArr.length - 2] = 'XL';
  }
 if (numArr[numArr.length - 2] === '5') {
    numArr[numArr.length - 2] = 'L';
  }
 if (numArr[numArr.length - 2] === '6') {
    numArr[numArr.length - 2] = 'LX';
  }
 if (numArr[numArr.length - 2] === '7') {
    numArr[numArr.length - 2] = 'LXX';
  }
 if (numArr[numArr.length - 2] === '8') {
    numArr[numArr.length - 2] = 'LXXX';
  }
 if (numArr[numArr.length - 2] === '9') {
    numArr[numArr.length - 2] = 'XC';
  }
  if (numArr[numArr.length - 3] === '0') {
    numArr[numArr.length - 3] = '';
  }
 if (numArr[numArr.length - 3] === '1') {
    numArr[numArr.length - 3] = 'C';
  }
 if (numArr[numArr.length - 3] === '2') {
    numArr[numArr.length - 3] = 'CC';
  }
 if (numArr[numArr.length - 3] === '3') {
    numArr[numArr.length - 3] = 'CCC';
  }
 if (numArr[numArr.length - 3] === '4') {
    numArr[numArr.length - 3] = 'CD';
  }
 if (numArr[numArr.length - 3] === '5') {
    numArr[numArr.length - 3] = 'D';
  }
 if (numArr[numArr.length - 3] === '6') {
    numArr[numArr.length - 3] = 'DC';
  }
 if (numArr[numArr.length - 3] === '7') {
    numArr[numArr.length - 3] = 'DCC';
  }
 if (numArr[numArr.length - 3] === '8') {
    numArr[numArr.length - 3] = 'DCCC';
  }
 if (numArr[numArr.length - 3] === '9') {
    numArr[numArr.length - 3] = 'CM';
  }
  if (numArr[numArr.length - 4] === '0') {
    numArr[numArr.length - 4] = '';
  }
 if (numArr[numArr.length - 4] === '1') {
    numArr[numArr.length - 4] = 'M';
  }
 if (numArr[numArr.length - 4] === '2') {
    numArr[numArr.length - 4] = 'MM';
  }
 if (numArr[numArr.length - 4] === '3') {
    numArr[numArr.length - 4] = 'MMM';
  }
 return numArr.join('');
}



convertToRoman(3252);
