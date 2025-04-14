// ## **77. Check if a Number Is an Ugly Number**

// Ugly numbers have only **2, 3, 5** as prime factors.

// - **Input:** `N = 18`
// - **Output:** `Ugly`
//   (Because 18 → 2 × 3 × 3 )
// - **Input:** `N = 14`
// - **Output:** `Not Ugly`
//   (Contains 7)

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

// console.log(getFactors(1000));

function factorsExponent(num) {
  let factors = getFactors(num);
  let exObj = {};
  factors.forEach((e) => {
    exObj[e] = (exObj[e] || 0) + 1;
  });
  let distintArr = Object.keys(exObj);
  console.log(distintArr)
  for (let i = 0; i < distintArr.length; i++) {
    // console.log(distintArr[i]);
    if (distintArr[i] > 5) {
      return "Not an Ugly number";
    }
  }
  return "Ugly number";
}

console.log(factorsExponent(1000));
