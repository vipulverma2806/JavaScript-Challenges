// 37. **Count Whole and Fractional Digits Separately**

//    * Input: `N = 12.345`
//    * Output: `Whole Count = 2, Fraction Count = 3`
//    * ✨ *Separate the number into whole and fractional parts, then count digits in each part using pure math. Don't use `Math.trunc()` method.*
let N = 12546.4643454;

let whole = Math.floor(N);
let fraction = (N % 1).toFixed(10);
let totalWhole = 1;
let totalFraction = 0;
let remain = whole;

let remain2 = fraction;
while (remain >= 10) {
  remain = Math.floor(remain / 10);
  totalWhole += 1;
}
while (remain2 != 0) {
  let n = (remain2 * 10).toFixed(10);
  remain2 = (n % 1).toFixed(10);
  totalFraction += 1;
}
console.log("Whole =", totalWhole);
console.log("Fraction =", totalFraction);
