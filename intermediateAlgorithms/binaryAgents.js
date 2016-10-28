//Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  var converted = [];
  //put str into split array
  var arrStr = str.split(' ');
  for (var i = 0; i < str.length; i++){
    //loop over arr, push converted binary into converted
    converted.push(String.fromCharCode(parseInt(arrStr[i], 2)));
  } return converted.join(' ');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
