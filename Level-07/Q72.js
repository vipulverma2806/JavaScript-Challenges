// ## **72. Distinct Prime Factor Count**

// - **Input:** `N = 100`
// - **Output:** `Distinct Prime Factors = 2`
//   (Because 100 → 2, 5)

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
    let factors = getFactors(num)
  let exObj = {};
  factors.forEach((e) => {
    exObj[e] = (exObj[e] || 0) + 1;
  });
let exArr = []
for(const key in exObj){
exArr.push(`${key}^${exObj[key]}`)
}

  return exArr.length;
}

console.log(factorsExponent(100));