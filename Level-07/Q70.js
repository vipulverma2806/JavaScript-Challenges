// ## **70. Find the Prime Factorization (Return as an Array)**
// - **Input:** `N = 84`
// - **Output:** `[2, 2, 3, 7]`

function getFactors(num) {
  let factors = [];
  if (num <= 1) {
    return "Enter no. greater than 1";
  } else {
    for (let i = 2; i <= num; i++) {
        // console.log(i)
      while (num % i == 0) {
        // console.log(num,i)
        factors.push(i);
        num = num / i;
        // console.log(num)
      }
    }
    return factors;
  }
}

console.log(getFactors(10001));

