// ## **79. Check if a Number Is a Happy Number**

// Repeatedly replace the number with the sum of squares of its digits.
// If it becomes **1**, it is Happy.

// - **Input:** `N = 19`
// - **Output:** `Happy Number`

function isHappy(num) {
  let numString = String(num);
  while (true) {
    let sum = 0;

    for (let i = 1; i <= numString.length; i++) {
      let digit = numString.slice(i - 1, i);
      let squareDigit = digit * digit;
      sum = sum + squareDigit;
    }
    if (sum == 4 || sum == 1) {
      if (sum == 4) {
        return "not happy number";
      } else {
        return "Happy number";
      }
    }
    console.log(sum);
    numString = String(sum);
  }
}

console.log(isHappy(23));
