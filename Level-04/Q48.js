// 48. **Check if a Number is a Harshad Number**

//    * Input: `N = 18`
//    * Output: `Harshad Number` *(since 18 is divisible by 1 + 8 = 9)*
//    * ✨ *Applies divisibility and digit-sum logic together.*

let number = 39;
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

if(number % total === 0){
    console.log("Harshad number")
}else{
    console.log("Not Harshad number")
}