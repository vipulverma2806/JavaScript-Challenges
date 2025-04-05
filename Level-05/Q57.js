// 57. **Find the HCF and LCM of Three Numbers**

//    * **Input:** `8, 12, 16`
//    * **Output:** `HCF = 4, LCM = 48`

function getLCM(num1, num2, num3) {
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

  let A = LCM;
  while (A % smallestNo != 0) {
    A += LCM;
    
  }

  return A;
}

console.log(getLCM(11, 15, 16));
