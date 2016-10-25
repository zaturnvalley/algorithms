//Sum all the prime numbers up to and including the provided number.

//finds primes
function prime(num){
  var square = Math.floor(Math.sqrt(num));
  
  for (var i = 2; i <= square; i++){
    if (num % i ===0){
      return false;
    } return true;
  }
}
prime(31);