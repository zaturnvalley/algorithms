//return true if target matches ending of str input, else otherwise


function confirmEnding(str, target) {
  var splitStr = str.split('');
  if (target !== splitStr[splitStr.length -1]) {
    return false;
  }
  return true;
}

confirmEnding("Bastian", "n");

//this works for single words as str and single letter as targ, but not if target is a word, str is sent