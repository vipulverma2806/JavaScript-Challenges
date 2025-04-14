// ## **78. Check if a Number Is a Kaprekar Number**

// Square the number → split → sum should give the original number.

// - **Input:** `N = 45`
// - **Output:** `Kaprekar Number`
//   (45² = 2025 → 20 + 25 = 45)
function isKaprekar(N) {
  let num = N * N;
  let numString = String(num);
  let NString = String(N);
  let numLength = numString.length;
  let NLength = NString.length;
  console.log(numLength);

  for (let i = 0; i < numLength; i++) {
    let firstPart = numString.slice(0, i);
    let secondPart = numString.slice(i);
    if (Number(firstPart) + Number(secondPart) == N) {
      return "Kaprekar number";
    }
  }
  return "Not A Kaprekar number";
}

console.log(isKaprekar(999999999));
