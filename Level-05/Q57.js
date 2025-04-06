// 57. **Find the HCF and LCM of Three Numbers**

//    * **Input:** `8, 12, 16`
//    * **Output:** `HCF = 4, LCM = 48`

function getLCMandHCF(num1, num2, num3) {
  let sorted = [num1, num2, num3].sort((a, b) => a - b);
  let biggestNo = sorted[2];
  let middleNo = sorted[1];
  let smallestNo = sorted[0];

  let LCM;
  let multiples = [];
  for (i = 1; i <= biggestNo; i++) {
    multiples.push(middleNo * i);
  }

  //   console.log(multiples,sorted)
  for (i = 0; i < biggestNo; i++) {
    if (multiples[i] % biggestNo == 0) {
      LCM = multiples[i];
      break;
    }
    continue;
  }

  let finalLCM = LCM;
  while (finalLCM % smallestNo != 0) {
    finalLCM += LCM;
    
  }

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
  return `LCM is ${finalLCM}, HCF is ${divisor}`;
}

console.log(getLCMandHCF(120,15,18));
