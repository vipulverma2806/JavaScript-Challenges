// 66. **Print All Fibonacci Numbers up to a Given Limit**

//    - **Input:** `Limit = 100`
//    - **Output:** `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`

let N = 200;
let sum = 0;
let Series = [0, 1];
let i = 2;
while (sum <= N) {
  sum = Series[i - 1] + Series[i - 2];
  Series.push(sum);
  if (Series[i] + Series[i - 1] > N) {
    break;
  }
  i++;
}
console.log(Series);
