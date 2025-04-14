// ## **74. Find the Product of All Distinct Prime Factors**

// - **Input:** `N = 150`
// - **Output:** `Product = 2 × 3 × 5 = 30`

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

  let distinctArr = Object.keys(exObj);
  let product = 1;
  for (let i = 0; i < distinctArr.length; i++) {
    product = product * distinctArr[i];
  }

  return product;
}

console.log(factorsExponent(150));
