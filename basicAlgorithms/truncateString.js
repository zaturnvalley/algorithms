//takes string and number. truncate string to number and add ... . if longer or equal to 
//num, return string without ... 

function truncateString(str, num) {
  var strSpl = str.split('');
  var strArr = [];
  if (num >= strSpl.length){
    return str;
  }
  if(num > 3) {
    for (var i = 0; i < num - 3; i++) {
     strArr.push(strSpl[i]); 
    }
    var joined = strArr.join('');
    var dots = joined + '...';
    return dots;
  }
  for (var j = 0; j < num; j++) {
    strArr.push(strSpl[j]);
  }
  var joinSmall = strArr.join('');
  var smallDot = joinSmall + '...';
  return smallDot;

}