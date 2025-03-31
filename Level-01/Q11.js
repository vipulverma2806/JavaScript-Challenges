// 11. **Print only the numbers that are both even and perfect squares**

//    * Input: `1 to 20`
//    * Output: `4 16`
//    * ✨ *Encourages combining two conditions within one loop.*

console.time();
let num = 20;
for (let i = 1; i <= num; i++) {
  if(i % 2 === 0 && Number.isInteger(Math.sqrt(i))){
   console.log(i)
  }
  
}

console.timeEnd();