// from 1 to n, console log n, unless
// n is divisible by 3, then console log fizz
// n is divisible by 5, console log buzz
// or n is divisible by 3 and 5 console log fizzbuzz

function fizzBuzz(n) {
  for (let i = 0; i <= n; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("fizbuzz");
    } else if(i % 3 === 0){
      console.log("fizz");
    } else if (i % 5 === 0){
      console.log("buzz");
    } else {
      console.log(i)
    }
  }
}
