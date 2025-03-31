// 19. **Calculate Income Tax Based on Slabs**

// * **Input:** `Income = ₹7,50,000`
// * **Output:** `Tax = ₹62,500`
// * ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
// * Example Logic (example slabs):

//   * Up to ₹2,50,000 → No tax
//   * ₹2,50,001 – ₹5,00,000 → 5%
//   * ₹5,00,001 – ₹10,00,000 → 20%
//   * Above ₹10,00,000 → 30%
// * 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*


let tax;
let taxableIncome;

function calculateTax(Income) {
  if (Income <= 250000) {
    return `No Tax`;
  } else if (Income > 250000 && Income <= 500000) {
    taxableIncome = Income - 250000;
    tax = (taxableIncome * 5) / 100;
    return `tax is ${tax} rupees`;
  } else if (Income > 500000 && Income <= 1000000) {
    tax = (250000 * 5) / 100;
    taxableIncome = Income - 500000;
    tax = (taxableIncome * 20) / 100 + tax;
    return `tax is ${tax} rupees`;
  } else {
    tax = (250000 * 5) / 100 + (500000 * 20) / 100;
    taxableIncome = Income - 1000000;
    tax = (taxableIncome * 30) / 100 + tax;
    return `tax is ${tax} rupees`;
  }
}

console.log(calculateTax(2000000))