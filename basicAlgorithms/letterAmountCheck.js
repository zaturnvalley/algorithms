// returns number of letters that are sequential 

function letterAmountCheck(str){
  var count = 1;
  var splStr = str.split('');
  var final = "";
  
  for (var i = 1; i <= splStr.length; i++) {
    if (splStr[i] != splStr[i-1]) {
      final += splStr[i-1] + count;
      count = 1;
    } else {
      count++;
    }
  }
  return final;
}

letterAmountCheck('aaabccaab')