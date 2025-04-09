// 63. **Print All Prime Numbers up to N**

//    - **Input:** `N = 20`
//    - **Output:** `2, 3, 5, 7, 11, 13, 17, 19`

let num = 20;
let primes = [];
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
    }
  }
}

console.log(primes);
