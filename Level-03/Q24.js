// 24. **Print Hollow Square Pattern**

//    - Input: `Rows = 5`
//    - Output:

//      ```
//      *****
//      *   *
//      *   *
//      *   *
//      *****
//      ```

//    - ✨ _Practices conditional printing within nested loops._

// ---

let rows = 10;
for (let i = 1; i <= rows; i++) {
  let str = "";

  if (i === rows || i === 1) {
    for (let j = 1; j <= rows; j++) {
      str = str + "*";
    }
  } else {
    for (let j = 1; j <= rows; j++) {
      if (j === 1 || j === rows) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
  }
  console.log(str);
}
