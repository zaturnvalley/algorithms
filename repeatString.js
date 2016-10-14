//repeat string n times. if n is neg, return empty string

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return '';
  }
  return str.repeat(num) ;
}

repeatStringNumTimes("abc", 4);
