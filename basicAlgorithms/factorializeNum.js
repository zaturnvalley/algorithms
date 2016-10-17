//Return factorial of provided integer

function factorialize(num) {
  var product = 1;
  for (var i = 1; i<= num; i++){
    product *= i;
  }
  return product;
}

factorialize(5);
