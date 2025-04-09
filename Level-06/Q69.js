// 69. **Print First N Prime Fibonacci Numbers**

//    - **Input:** `N = 5`
//    - **Output:** `2, 3, 5, 13, 89`

function isPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(26));

let N = 5;
let sum = 0;
let Series = [0, 1];
let result = [];
let count = 0;
let i = 2;
while (count < N) {
  sum = Series[i - 1] + Series[i - 2];
  Series.push(sum);
  if (isPrime(sum)) {
    result.push(sum);
    count++;
  }

  i++;
}

// console.log(Series);
console.log(result);
