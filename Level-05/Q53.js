// 53. **Count the Total Number of Factors of a Number**

//    * **Input:** `N = 24`
//    * **Output:** `8 Factors`

// ---
let N = 24;
let factors = []
for(i=1;i<=N;i++){
    if(N%i == 0){
        factors.push(i)
    }
}
console.log(factors)
console.log(factors.length + " factors")