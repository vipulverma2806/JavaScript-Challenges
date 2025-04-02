// 40. **Check if a Number is a Palindrome**

//    * Input: `N = 121`
//    * Output: `Palindrome`
//    * ✨ *Compares original and reversed numbers to detect symmetry.*

let Num = 12321;
let N = Num;
let digits = [];
let reversedNo = 0;
while (N > 0) {
  digits.unshift(N % 10);
  N = Math.floor(N / 10);
}
for (let i = 0; i < digits.length; i++) {
  reversedNo = reversedNo + digits[i] * 10 ** i;
}
console.log(reversedNo);
if (reversedNo == Num) {
  console.log("It is a palindrom number");
} else {
  console.log("It is NOT a palindrom number");
}
