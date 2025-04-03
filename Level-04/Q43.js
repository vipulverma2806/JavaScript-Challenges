// 43. **Find the Average of Digits**

//    * Input: `N = 4567`
//    * Output: `Average = 5.5`
//    * ✨ *Combines digit sum and count for average computation.*

let number = 4567;
let n = number;
let arr = []
while(n>0){
 arr.unshift(n % 10)
 n = Math.floor(n/10)
}
// console.log(arr)
let total = 0;
for(let i=0; i < arr.length; i++){
total += arr[i]
}

let avg = total / arr.length
console.log("Average of digits are", avg.toFixed(3))