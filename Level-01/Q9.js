// 9. **Find the sum of all odd numbers up to N**

//    * Input: `10`
//    * Output: `25` (`1 + 3 + 5 + 7 + 9`)
//    * ✨ *Combines looping with conditional accumulation.*

console.time();
let num = 100;
let sum = 0;
for (let i = 1; i <= num; i++) {
  if (i % 2 === 1 ) {
    sum = sum + i;
  }
}
console.log(sum)
console.timeEnd();