
// 32. **Print Rhombus Pattern**

//    - Input: `Rows = 5`
//    - Output:

//      ```
//          *****
//         *****
//        *****
//       *****
//      *****
//      ```

//    - ✨ _Practices offset alignment for uniform patterns._

//    ***


const n = 10;
let line = ""
for(i=n;i>=1;i--){
line += " ".repeat(i-1)
line += "*".repeat(n)
line += "\n"
}
console.log(line)