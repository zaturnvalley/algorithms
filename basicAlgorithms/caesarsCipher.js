function rot13(str) { // LBH QVQ VG!
  var newStrArr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === ''){
      newStrArr.push(str[i]);
    } var char = str[i].charCodeAt(0);
    newStrArr.push(String.fromCharCode(char + 13))
  }
  return newStrArr.join('');
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
