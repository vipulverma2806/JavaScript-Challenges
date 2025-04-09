// 65. **Check if Two Numbers are Twin Primes**
//    - **Input:** `(3, 5)`
//    - **Output:** `Twin Primes`

function isTwinPrimes(num1, num2) {
  let bignum = Math.max(num1, num2);
  let smallnum = Math.min(num1, num2);
  if (bignum - smallnum === 2) {
    if (bignum <= 1 || smallnum <= 1) {
      return "Not twin Prime";
    } else {
      for (let i = 2; i <= Math.sqrt(bignum); i++) {
        if (bignum % i == 0 || smallnum % i == 0) {
          return "Not twin Prime";
        }
      }
      return "Twin Prime";
    }
  } else {
    return "Not twin prime";
  }
}

console.log(isTwinPrimes())