// given a string, return number of times
// a char occurs the most in that string

function maxChar(str){
  var splStr = str.split('');
  var strObj = {};
  var biggestNum = 0;
  for(var i = 0; i < splStr.length; i++){
    if(!strObj.hasOwnProperty(`${splStr[i]}`)){
      console.log('hit')
      strObj[splStr[i]] = 1;
    } else {
      console.log('hit2')
      strObj[splStr[i]] += 1;
    }
  }
  for (key in strObj){
    if(strObj[key] > biggestNum){
      biggestNum = strObj[key];
    }
  }
  return biggestNum;
}