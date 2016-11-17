//checks expiration dates
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode != correctCode) {
    return false;
  }
  //turn current date into string numbers
  var splCurrent = currentDate.split(' ');
  var currentYear = splCurrent[2];
  var currentMonth = whatMonth(splCurrent[0]);
  var currentDay = splCurrent[1][0] + splCurrent[1][1];
  var strIntCurrent = currentYear + currentMonth + currentDay;
  //turn expiration date into string numbers
  var splEx = expirationDate.split(' ');
  var exYear = splEx[2];
  var exMonth = whatMonth(splEx[0]);
  var exDay = splEx[1][0] + splEx[1][1];
  var strIntEx = exYear + exMonth + exDay;
  
  if (strIntCurrent >= strIntEx) {
    return false;
  } return true;
  
}
checkCoupon(111,111,'January 12, 2052', 'January 14, 2046');
function whatMonth(month){
  switch(month){
    case 'January':
      m = '01';
      break;
    case 'February':
      m = '02';
      break;
    case 'March':
      m = '03';
      break;
    case 'April':
      m = '04';
      break;
    case 'May':
      m = '05';
      break;
    case 'June':
      m = '06';
      break;
    case 'July':
      m = '07';
      break;
    case 'August':
      m = '08';
      break;
    case 'September':
      m = '09';
      break;
    case 'October':
      m = '10';
      break;
    case 'November':
      m = '11';
      break;
    case 'December':
      m = '12';
      break;
  } return m;
}