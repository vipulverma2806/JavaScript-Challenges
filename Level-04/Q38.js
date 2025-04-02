// 38. **Generate a Decimal Number from Whole and Fractional Digits**

//    * Input: `Whole = [1, 2], Fraction = [3, 4]`
//    * Output: `12.34`
//    * ✨ *Form the number mathematically by combining the digits from both arrays using powers of 10.*
// ---

let Whole = [1, 2, 5, 4, 6];
let Fraction = [3, 4, 9, 8, 6, 4];
let wholeLength = Whole.length;
let fractionLength = Fraction.length;
let finalWholeNo = 0;
let finalFractionNo = 0;
let power = wholeLength - 1;
let power2 = fractionLength;
for (i = 0; i < Whole.length; i++) {
  finalWholeNo += Whole[i] * 10 ** power;
  //   console.log(finalWholeNo)
  //   console.log(Whole[i])
  power -= 1;
}
for (i = 0; i < Fraction.length; i++) {
  finalFractionNo += Fraction[i] * 10 ** (-1 - i);
  //   console.log(Fraction[i]);
  //   console.log(finalFractionNo);
}

// console.log(finalWholeNo);
// console.log(finalFractionNo);
console.log("Final No. is =", finalWholeNo + finalFractionNo);
