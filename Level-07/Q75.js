// ## **75. Check if a Number Is a Square-Free Number**

// A number is **square-free** if none of its prime factors repeat.

// - **Input:** `N = 30`
// - **Output:** `Square-Free Number`
//   (2 × 3 × 5 → no repeats)

function getFactors(num) {
  let factors = [];
  if (num <= 1) {
    return "Enter no. greater than 1";
  } else {
    for (let i = 2; i <= num; i++) {
      while (num % i == 0) {
        factors.push(i);
        num = num / i;
      }
    }
    return factors;
  }
}

function factorsExponent(num) {
  let factors = getFactors(num);
  let exObj = {};
  factors.forEach((e) => {
    exObj[e] = (exObj[e] || 0) + 1;
  });

  for (const key in exObj) {
    if (exObj[key] > 1) {
      return "Not a square free number.";
    }
  }
  return "Square free number";
}

console.log(factorsExponent(385));