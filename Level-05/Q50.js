// 50. **Print All Multiples of a Number up to N**

//    * **Input:** `Number = 4, Limit = 30`
//    * **Output:** `[4, 8, 12, 16, 20, 24, 28]`

// ---

let number = 4;
let limit = 30;
let arr = []

for( let i = number ; i<=limit ; i += number){
    // console.log(i)
    arr.push(i)
}
console.log(arr)