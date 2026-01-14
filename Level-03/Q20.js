// 1. **Print Right-Angled Star Triangle**

//    - Input: `Rows = 5`
//    - Output:

//      ```
//      *
//      **
//      ***
//      ****
//      *****
//      ```

//    - ✨ _Teaches nested loops and increasing sequence printing._

// ---
let rows = 25;
for (let i = 1; i <= rows; i++) {
    let str = " "
  for (let j = 1; j <= i; j++) {
    str = str + " * "
  }
  console.log(str)
}
