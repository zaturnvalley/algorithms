//Given a positive integer num, 
//return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  var a = 0; 
  var b = 1; 
  var temp;
  var i = 0;
  var sum = 0;
  while (i < num){
    temp = b;
    b = a + b;
    a = temp;
    i++;
    if (a % 2 !== 0 && a <= num){
      sum += a;
    }
  }
  return sum;
}

sumFibs(4);
