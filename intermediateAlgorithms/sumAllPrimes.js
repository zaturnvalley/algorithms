//Sum all the prime numbers up to and including the provided number.

//finds primes
function sumPrimes(num) {
  var sum = 0;
 for (var i = 0; i <= num; i++){
  if (prime(i)){
    sum += i;
  }
 }
 return sum;
}

function prime(num){
  var square = Math.floor(Math.sqrt(num));
  if (num === 1){
    return false;
  } else if (num === 2){
    return true;
  } else if (num === 3) {
    return true;
  }
  for (var i = 2; i <= square; i++){
    if (num % i === 0){
      return false;
    } 
  } return true;
}

