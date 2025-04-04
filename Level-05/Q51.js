// 51. **Find the HCF (Highest Common Factor) or GCD of Two Numbers**

//    * **Input:** `12, 18`
//    * **Output:** `HCF = 6`

// ---

function getHCF(num1, num2) {
  let divisor = num1 > num2 ? num2 : num1;
  let dividend = num1 < num2 ? num2 : num1;
  let remainder;
  while(dividend % divisor !== 0){
    remainder = dividend % divisor
    dividend = divisor;
    divisor = remainder;
  }
  return divisor
}

console.log(getHCF(12,18))
