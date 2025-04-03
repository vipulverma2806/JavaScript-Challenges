// 45. **Check if a Number is a Strong Number**

//    * Input: `N = 145`
//    * Output: `Strong Number`
//    * ✨ *Applies factorial of each digit and sums them: `1! + 4! + 5! = 145`.*
let number = 40585;
let n = number;
let arr = [];
while (n > 0) {
  arr.unshift(n % 10);
  n = Math.floor(n / 10);
}
let total = 0;

for (let i = 0; i < arr.length; i++) {
  let factorial = 1;
  for (let j = arr[i]; j >= 1; j--) {
    factorial = factorial * j;
  }
//   console.log(factorial);
  total = total + factorial;
}
console.log("total is ", total);
if (number == total) {
  console.log("number is a strong number");
} else {
  console.log("number is not a strong number");
}
