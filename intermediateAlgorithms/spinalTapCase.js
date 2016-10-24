//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  var splStr = str.split('');

  for (var i = splStr.length - 1; i > 0; i--){
    var charCode = splStr[i].toString().charCodeAt(0);
    if (splStr[i] === ' ' || splStr[i] === '_') {
      splStr[i] = '-';
    } 
    else if(i > 0 && charCode >= 65 && charCode <= 90 && splStr[i -1] !== ' ' && splStr[i - 1] != '_'){
      splStr.splice(i, 0, '-');
    }
  } 

  return splStr.join('').toLowerCase();
}

spinalCase('This IsSpinal Tap');