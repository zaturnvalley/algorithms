//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  var splStr = str.split('');
  var boolean = true;
  if (boolean === true);
  for (var i = 0; i < splStr.length; i++){
    var charCode = splStr[i].toString().charCodeAt(0);
    if (splStr[i] === ' ' || splStr[i] === '_') {
      splStr[i] = '-';
    } 
    else if(i > 0 && charCode >= 65 && charCode <= 90){
      splStr.splice(i - 1, 0, '-');
    }
  }
  return splStr.join('').toLowerCase();
}
console.log('p'.charCodeAt(0));
spinalCase('This IsSpinal Tap');

// var a = [2];
// a.splice(1-1, 0, 'o');
// console.log(a);