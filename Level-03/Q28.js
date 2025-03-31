// 28. **Print Butterfly Pattern**

//    - Input: `Rows = 5` only odd
//    - Output:

//      ```
//      *   *
//      ** **
//      *****
//      ** **
//      *   *
//      ```

//    - ✨ _Combines multiple sections with symmetry logic._

const n = 5;
let line = "";
for (let i = 1; i < n / 2; i++) {
  line += "*".repeat(i);
  line += " ".repeat(n - i * 2);
  line += "*".repeat(i);
  line += "\n";
}
line += "*".repeat(n);
line += "\n";
for (let i = 0; i < (n + 1) / 2; i++) {
  let middleLine = (n + 1) / 2;
  line += "*".repeat(middleLine - 1 - i);
  line += " ".repeat(2 * i + 1);
  line += "*".repeat(middleLine - 1 - i);
  line += "\n";
}
console.log(line);
