// 6. **Sum of All Even Numbers up to N**

//    * Input: `10`
//    * Output: `30` (`2+4+6+8+10`)
//    * ✨ *Combines loops + condition + accumulation.*
console.time();
let num = 13;
let sum = 0;
for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}

console.log(sum);
console.timeEnd();
