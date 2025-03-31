// 14. **Calculate Electricity Bill**

// * Input: `Units = 230`
// * Output: `Total Bill = ₹1500`
// * ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
// * Example Logic:

//   * 0–100 units → ₹5 per unit
//   * 101–200 units → ₹7 per unit
//   * 201–300 units → ₹10 per unit
//   * Above 300 units → ₹12 per unit
// * 🔍 *Teaches:* cumulative calculation + condition chaining.

let units =281;
let bill;
if(units <= 100){
    console.log(`Electricity bill is ${units*5} rupees`)
}else if(units>100 && units<=200 ){
    bill = 100*5;
    units = units - 100;
    bill = bill + units*7
    console.log(`Electricity bill is ${bill} rupees`)
}else if(units>200 && units<=300 ){
    bill = 100*5 + 100*7;
    units = units - 200 
    bill = bill + units*10
    console.log(`Electricity bill is ${bill} rupees`)
}else{

    bill = 100*5 + 100*7 + 100*10;
    units = units - 300 
    bill = bill + units*12
    console.log(`Electricity bill is ${bill} rupees`)
}