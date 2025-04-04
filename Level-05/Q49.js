// 49. **Print All Factors of a Number**

//    * **Input:** `N = 24`
//    * **Output:** `[1, 2, 3, 4, 6, 8, 12, 24]`

// ---

let num = 12;
let factors = []
for(let i = 1 ; i<= Math.sqrt(num); i++ ){
    if(num % i === 0){
        factors.splice(factors.length/2 , 0, i)
        otherPair = num/i
        if(otherPair !== i) factors.splice(factors.length/2 + 1 , 0, otherPair)
    }
}
console.log(factors)