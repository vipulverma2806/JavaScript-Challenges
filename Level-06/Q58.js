// 58. **Check if a Number is Prime**

//    - **Input:** `7`
//    - **Output:** `Prime Number`

function isPrime(n) {
  if (n <= 3 ) {
    return "Prime";
  } else {
    let result = "";
    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        result = "not prime";
        return result;
        
      }
      result = "prime";
      return result;
    }
  }
}

console.log(isPrime(24));
