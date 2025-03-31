// 10. **Print the cubes of numbers from 1 to N**

//    * Input: `5`
//    * Output: `1 8 27 64 125`
//    * ✨ *Extends arithmetic pattern logic beyond squares.*

console.time();
let num = 10;
for (let i = 1; i <= num; i++) {
  console.log(i ** 3)
}

console.timeEnd();