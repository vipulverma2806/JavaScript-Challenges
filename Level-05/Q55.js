// 55. **Find the Greatest Factor of a Number (Other Than Itself)**

//    * **Input:** `N = 36`
//    * **Output:** `18`

// ---
let N = 24;
let factors = []
for(i=1;i<=N;i++){
    if(N%i == 0){
        factors.push(i)
    }
}
console.log(factors)
console.log("Greatest factor of a number: " + factors[factors.length - 2])
