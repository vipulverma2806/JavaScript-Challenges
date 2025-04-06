// 51. **Find the HCF (Highest Common Factor) or GCD of Three Numbers**

//    * **Input:** `8,20,12`
//    * **Output:** `HCF = 4`

// ---

function getHCF(num1, num2,num3) {
  let divisor = num1 > num2 ? num2 : num1;
  let dividend = num1 < num2 ? num2 : num1;
  let remainder;
  while(dividend % divisor !== 0){
    remainder = dividend % divisor
    dividend = divisor;
    divisor = remainder;
  }

while(num3 % divisor  !== 0)
{
  remainder = num3 % divisor
  num3 = divisor;
  divisor = remainder;
}
  return divisor
}

console.log(getHCF(8,20,12))
