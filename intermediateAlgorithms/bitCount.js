// Bit counter alg
var countBits = function(n) {
  var binary = Number(n).toString(2);
  var splStr = binary.split('');
  var answer = 0;
  for (var i = 0; i < splStr.length; i++){
    if (splStr[i] == 1){
      answer++;
    }
  }
  return answer;
};