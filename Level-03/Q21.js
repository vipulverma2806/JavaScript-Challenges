// 2. **Print Inverted Right-Angled Triangle**

//    - Input: `Rows = 5`
//    - Output:

//      ```
//      *****
//      ****
//      ***
//      **
//      *
//      ```

//    - ✨ _Reinforces decreasing nested loop structure._


let rows = 5;
for (let i = rows; i >= 1; i--) {
    let str = " "
  for (let j = 1; j <= i; j++) {
    str = str + " * "
  }
  console.log(str)
}

