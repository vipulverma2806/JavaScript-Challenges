// 64. **Sum of All Prime Numbers till N**
//    - **Input:** `N = 10`
//    - **Output:** `Sum = 17`

let num = 10;
let primes = [];
let sum = 0;
if (num <= 1) {
  return console.log("Not Prime");
} else {
  for (let j = 2; j <= num; j++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(j); i++) {
      if (j % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      primes.push(j);
      sum = sum + j;
    }
  }
}

console.log(primes,sum);