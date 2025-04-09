
// 68. **Find the Sum of Even Fibonacci Numbers up to N Terms**

//    - **Input:** `N = 10`
//    - **Output:** `Sum = 44` (`2 + 8 + 34`)

let N = 15;
let sum = 0;
let sumOfEven = 0
let Series = [0,1]
for(let i=2;i<N;i++){
    
    sum = Series[i-1] + Series[i-2] 
    Series.push(sum)
}
for(let i=0;i<=Series.length;i++){
    if(Series[i] % 2 == 0){
        sumOfEven += Series[i] 
    }
}
console.log(Series)
console.log(sumOfEven)