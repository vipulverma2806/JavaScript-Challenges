// ## **73. Check if a Number Is a Powerful Number**

// A number is **powerful** if every prime factor appears with an exponent ≥ 2.

// - **Input:** `N = 36`
// - **Output:** `Powerful Number`
//   (36 → 2² × 3² → all exponents ≥ 2)

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
  // let exArr = []
  // for(const key in exObj){
  // exArr.push(`${key}^${exObj[key]}`)
  // }
  // let final = exArr.join(" x ")
  for (const key in exObj) {
    if (exObj[key] < 2) {
        return "Not a Powerfull No."
    }
  }
  return "A Powerful Number"
}

console.log(factorsExponent(100));
