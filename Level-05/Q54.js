// 54. **Sum of All Factors of a Number**

//    * **Input:** `N = 12`
//    * **Output:** `Sum = 28`

// ---

let N = 24;
let factors = []
let sum = 0;
for(i=1;i<=N;i++){
    if(N%i == 0){
        factors.push(i)
        sum += i;
    }
}
console.log(factors)
console.log("sum",sum)