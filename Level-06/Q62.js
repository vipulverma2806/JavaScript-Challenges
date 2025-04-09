// 62. **Check if a Number Belongs to the Fibonacci Series**

//    - **Input:** `21`
//    - **Output:** `Yes`

let N = 5;
let sum = 0;
let Series = [0, 1];
let i = 2;
while (sum < N) {
  sum = Series[i - 1] + Series[i - 2];
  Series.push(sum);
  i++;
}

console.log(Series)
if (sum == N) {
  console.log("Yes");
  
} else {
  console.log("No");
}
