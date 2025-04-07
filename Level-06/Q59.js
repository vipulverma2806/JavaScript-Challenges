// 59. **Check if two Numbers are Co-Prime**

//    - **Input:** `(7, 8)`
//    - **Output:** `Co-Prime`

function getHCF(num1, num2, num3) {
  let divisor = num1 > num2 ? num2 : num1;
  let dividend = num1 < num2 ? num2 : num1;
  let remainder;
  while (dividend % divisor !== 0) {
    remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return divisor;
}

let HCF = getHCF(8,30);

if(HCF === 1) return console.log("Co prime")
    console.log("Not Co prime")

