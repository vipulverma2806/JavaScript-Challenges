// 60. **Print Fibonacci Series up to N Terms**

//    - **Input:** `N = 10`
//    - **Output:** `0, 1, 1, 2, 3, 5, 8, 13, 21, 34`

let N = 15;
let sum = 0;
let Series = [0,1]
for(i=2;i<N;i++){
    let sum = 0;
    sum += Series[i-1] + Series[i-2] 
    Series.push(sum)
}
console.log(Series)