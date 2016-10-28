//Return true if the passed string is a valid US phone number.

function telephoneCheck(str) {
  var splStr = str.split('');
  var number = [];
  if(! typeof splStr[0] === 'number'){
    return false;
  }
  if(splStr[0] === '-'){
    return false;
  }
  for(var i = 0; i < splStr.length; i++){
    if (splStr[i] === '(' && splStr[i + 4] !== ')'){
      return false;
    } else if (splStr[i] === ')' && splStr[i - 4] !== '('){
      return false;
    } else if (splStr[i] === '?'){
      return false;
    } else if (splStr[i].charCodeAt(0) >= 48 && splStr[i].charCodeAt(0) <= 57){
      number.push(splStr[i]);
    }
  }
  console.log(number)
  if (number.length === 10) {
    return true;
  } else if(number[0] == 1 && number.length === 11){
    return true;  
  } else return false;
}



telephoneCheck("1 555-555-5555")