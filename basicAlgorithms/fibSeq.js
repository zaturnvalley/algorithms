//returns solution of num placement from fibonacci sequence
function fib(num){
  var a = 1;
  var b = 0;
  var temp;
  var i = 0;
  while (i < num) {
    temp = a;
    a = a + b;
    b = temp;
    i++;
  } return b;
}
fib(46);