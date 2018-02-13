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

// ALT way to do this algorithm

function maxCharTwo(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str){
    charMap[char] = charMap[char] + 1 || 1;

    // same as above
    // if (!charMap[char]){
    //   charMap[char] = 1;
    // } else {
    //   charMap[char]++;
    // }
  }

  for (let char in charMap){
    if (charMap > max ){
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}