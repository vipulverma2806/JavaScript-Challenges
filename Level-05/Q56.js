// 56. **Check if a Number is a Perfect Number**

//    * **Input:** `N = 28`
//    * **Output:** `Perfect Number`
//    * If sum of all proper divisors = number → Perfect Number.

// ---
let N = 8130;
let factors = []
let sum = 0;
for(i=1;i<=N;i++){
    if(N%i == 0){
        factors.push(i)
        sum += i;
    }
}
console.log(factors)

if(sum - N == N){
console.log(N + " is perfect number")
}else{
console.log(N + " is not perfect number")
}

