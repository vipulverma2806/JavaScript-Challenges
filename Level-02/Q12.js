// 12. **Find the Maximum of Three Numbers**

//    * Input: `10 20 5`
//    * Output: `20`
//    * ✨ *Teaches nested or chained conditional logic and comparative reasoning.*

let a = 500;
let b = 10000;
let c = 2500;

if (a > b) {
  if (a > c) {
    console.log(`${a} is biggest`);
  } else {
    console.log(`${c} is biggest`);
  }
} else {
  if (c > b) {
    console.log(`${c} is biggest`);
  } else {
    console.log(`${b} is biggest`);
  }
}

if (a > b && a > c) {
  console.log(`${a} is biggest`);
} else if (b > c && b > a) {
  console.log(`${b} is biggest`);
} else if (c > a && c > b) {
  console.log(`${c} is biggest`);
}
