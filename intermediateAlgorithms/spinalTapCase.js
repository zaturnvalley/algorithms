//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  var splStr = str.split('');
  for (var i = 0; i < splStr; i++){
    if (splStr[i] === ' ' || spl[i] === '_') {
      splStr[i] = '-';
    } else if (90 <= splStr[i].charCodeAt >= 65 ) {
      splStr[i - 1] = '-';
    }
  }
  return splStr.join('');
}

spinalCase('This Is Spinal Tap');
