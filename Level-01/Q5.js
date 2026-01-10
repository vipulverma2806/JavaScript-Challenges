// 5. **Product (Factorial) of N**

//    * Input: `5`
//    * Output: `120`
//    * ✨ *Reinforces loop control with multiplication logic.*

console.time();
let num = 7;
let fact = 1;
for (i = 1; i <= num; i++) {
  fact = fact * i;
}
console.log(fact);
console.timeEnd();

