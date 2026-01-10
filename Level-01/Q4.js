// 4. **Sum of First N Natural Numbers**

//    * Input: `5`
//    * Output: `15`
//    * ✨ *Encourages cumulative addition and variable usage.*
console.time();
let num = 1000000;
let sum = 0;
for (i = 1; i <= num; i++) {
  sum = sum + i;
}
console.log(sum);
console.timeEnd();
