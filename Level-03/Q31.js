// 31. **Print Hollow Diamond Pattern**

//    - Input: `Rows = 3`
//    - Output:

//      ```
//          *
//         * *
//        *   *
//         * *
//          *
//      ```

//    - ✨ _Teaches combining upward and downward hollow pyramids._

// ---

const n = 5;
let line = "";
line += " ".repeat(n-1);
line += "* \n";

for (let i = 1; i <= n - 1; i++) {
  line += " ".repeat(n - 1 - i);
  line += "*".repeat(1);
  line += " ".repeat(2 * i - 1);
  line += "*".repeat(1);
  //   line += " ".repeat((n-(2*i+1))/2);
  line += "\n";
}
// line += "*".repeat(n);
// line += "\n";
for (let i = 1; i < n - 1; i++) {
  line += " ".repeat(i);
  line += "*".repeat(1);
  line += " ".repeat(2 * n - 3 - i * 2);
  line += "*".repeat(1);
  //   line += " ".repeat((n-(2*i+1))/2);
  line += "\n";
}
line += " ".repeat(n - 1);
line += "*";
console.log(line);
