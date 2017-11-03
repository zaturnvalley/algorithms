// Alphanumeric String tester using RegEx and charCode (2 versions)
function alphanumeric(string){
  // version 1
  // var splStr = string.split("");
  // for (var i = 0; i < splStr.length; i++){
  //   if (/[^a-zA-Z0-9]/.test(splStr[i])){
  //     return false;
  //   }
  // } return true;

  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
}
// alphanumeric("hi")
alphanumeric("07ZZg")