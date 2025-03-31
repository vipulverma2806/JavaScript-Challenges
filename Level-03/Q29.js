// 29. **Print Diamond Pattern**

//    - Input: `Rows = 5` only odd no.
//    - Output:

//      ```
//          *
//         ***
//        *****
//         ***
//          *
//      ```

//    - ✨ _Combines upper and lower pyramid logic for symmetry._

// ---
const n = 7;
let line = "";
for (let i = 0; i < (n / 2)-1; i++) {
  line += " ".repeat((n-(2*i+1))/2);
  line += "*".repeat(2*i+1);
  line += " ".repeat((n-(2*i+1))/2);
  line += "\n";
}
line += "*".repeat(n);
line += "\n";
for (let i = 1; i < n/2 ; i++) {
  line += " ".repeat(i);
  line += "*".repeat(n-(2*i));
  line += " ".repeat(i);
  line += "\n";
}
console.log(line);

