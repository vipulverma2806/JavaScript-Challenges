// 26. **Print Alternating Binary Triangle**

//    - Input: `Rows = 5`
//    - Output:

//      ```
//      1
//      0 1
//      1 0 1
//      0 1 0 1
//      1 0 1 0 1
//      ```

//    - ✨ _Combines parity logic with nested loops._

// ---
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let str = "";
  if (i % 2 === 1) {
    for (let j = 1; j <= i; j++) {
      if (j % 2 === 1) {
        str = str + "1";
      } else {
        str = str + "0";
      }
    }
  } else {
    for (let j = 1; j <= i; j++) {
      if (j % 2 === 1) {
        str = str + "0";
      } else {
        str = str + "1";
      }
    }
  }

  console.log(str);
}
