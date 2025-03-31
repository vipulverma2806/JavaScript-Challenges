//33. **Print Multiplication Table (Single and Upto N)**

//    - Input 1: `Number = 5`
//    - Output:

//      ```
//      5 x 1 = 5
//      5 x 2 = 10
//      ...
//      5 x 10 = 50
//      ```

//    - Input 2: `Upto = 3`
//    - Output:

//      ```
//      Table of 1
//      1 x 1 = 1
//      ...
//      Table of 3
//      3 x 10 = 30
//      ```

//    - ✨ _Practices simple and nested loops for repetitive operations._

let n = 5;

for (i = 1; i <= 10; i++) {
  //   console.log(`${n} X ${i} = ${n * i}`);
}
let upto = 100;
for (i = 1; i <= upto; i++) {
  console.log(`\ntable of ${i} `);
  for (j = 1; j <= 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}
