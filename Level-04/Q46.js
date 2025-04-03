// 46. **Check if a Number is an Automorphic Number**

//    * Input: `N = 25`
//    * Output: `Automorphic Number` *(since 25² = 625 ends with 25)*
//    * ✨ *Practices modulus-based pattern matching.*
let number = 625;
let n = number;
let square = number ** 2;
let arr = [];
while (n > 0) {
  arr.unshift(n % 10);
  n = Math.floor(n / 10);
}

let lastDigits = square % 10 ** arr.length;
console.log(lastDigits)
if (number == lastDigits) {
  console.log("Automorphic Number");
} else {
  console.log("Not an Automorphic Number");
}
