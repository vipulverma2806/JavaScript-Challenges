// 39. **Reverse a Number**

//    * Input: `N = 1234`
//    * Output: `4321`
//    * ✨ *Teaches how to extract and reconstruct digits using `%` and `/`.*

let N = 53486955
let digits = []
let reversedNo = 0
while(N > 0){
digits.unshift(N % 10)
N = Math.floor(N/10)     
}
for(let i=0 ; i < digits.length ; i++){
reversedNo = reversedNo + digits[i] * (10**i)
}

console.log(reversedNo)