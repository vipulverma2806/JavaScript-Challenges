// 18. **Check Triangle Type Using Sides and Angles**

// * **Input:** `Sides = 3, 4, 5`
// * **Output:** `Right-Angled Triangle`
// * ✨ *Combines geometric reasoning + Pythagoras theorem check.*
// * Example Logic:

//   * If `a² + b² = c²` → Right-angled
//   * Else if all sides equal → Equilateral
//   * Else if any two equal → Isosceles
//   * Else → Scalene

function checkTriangleType(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Only Positive value Allowed";
  }
  const sorted = [a, b, c].sort((a, b) => a - b);
  const istrianglePossible = sorted[0] + sorted[1] > sorted[2];
  if (!istrianglePossible) {
    return "Triangle not possible ";
  }
  const isRightAngled = sorted[0] ** 2 + sorted[1] ** 2 === sorted[2] ** 2;
  const isIsosceles = a === b || b === c || c === a;
  if (isRightAngled && isIsosceles) {
    return "It is Right Angled Isosceles triangle ";
  } else if (isRightAngled) {
    return "It is Right Angled triangle";
  } else if (a === b && b === c) {
    return "Equilateral";
  } else if (isIsosceles) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

console.log(checkTriangleType(2, 3, 3));
