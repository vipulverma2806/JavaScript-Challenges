// 36. **Separate Whole and Fractional Parts of a Number**

//    * Input: `N = 5.75`
//    * Output: `Whole = 5, Fraction = 0.75`
//    * ✨ *Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use `Math.trunc()` method.*

let N = 8.86;

let whole = Math.floor(N);
let fraction = (N % 1).toFixed(10);

console.log("Whole =", whole);
console.log("Fraction =", fraction);






