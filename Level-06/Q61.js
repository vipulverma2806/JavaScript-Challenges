
// 61. **Find the Nth Fibonacci Number**

//    - **Input:** `N = 8`
//    - **Output:** `13`

let N = 15;
let sum = 0;
let Series = [0,1]
for(let i=2;i<N;i++){
   
    sum = Series[i-1] + Series[i-2] 
    Series.push(sum)
}
console.log(Series[N-1])