//return true if target matches ending of str input, else otherwise



function confirmEnding(str, target) {
  var end = target.length;
  var start = str.length - end;
  if (target !== str.substr(start,end)) {
    return false;
  }
  return true;
}
