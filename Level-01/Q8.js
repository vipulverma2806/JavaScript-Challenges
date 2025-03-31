// 8. **Print all numbers divisible by 3 and 5 up to N**

//    * Input: `30`
//    * Output: `15 30`
//    * ✨ *Reinforces conditional checks inside loops.*

// ---

console.time();
let num = 60;
for (let i = 1; i <= num; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}

console.timeEnd();
