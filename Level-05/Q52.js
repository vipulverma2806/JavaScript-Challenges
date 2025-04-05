// 52. **Find the LCM (Least Common Multiple) of Two Numbers**

//    * **Input:** `12, 18`
//    * **Output:** `LCM = 36`

// ---

function getLCM(num1, num2) {
  let biggerNo = Math.max(num1, num2);
  let smallNo = Math.min(num1, num2);
  let LCM;
  let multiples = [];
  for (i = 1; i <= biggerNo; i++) {
    multiples.push(smallNo * i)
  }

//   console.log(multiples)
  for(i=0;i<biggerNo;i++){
   if(multiples[i] % biggerNo == 0 ){
    LCM = multiples[i]
    break;
   }  
   continue;
  }
  return LCM;
  ;
}

console.log(getLCM(42,9));
