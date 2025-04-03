// 42. **Find the Sum of Digits**

//    * Input: `N = 987`
//    * Output: `24`
//    * ✨ *Builds understanding of digit extraction and accumulation.*

let number = 987128;
let n = number;
let arr = [];
while (n > 0) {
  arr.unshift(n % 10);
  n = Math.floor(n / 10);
}
// console.log(arr)
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}

console.log("Sum of digits are", total);
