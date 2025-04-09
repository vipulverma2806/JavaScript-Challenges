// 67. **Generate Fibonacci Numbers Within a Range**

//    - **Input:** `Start = 10, End = 100`
//    - **Output:** `13, 21, 34, 55, 89`
let start = 10;
let end = 100;
let sum = 0;
let Series = [0, 1];
let result = [];
let i = 2;
while (sum <= end) {
  sum = Series[i - 1] + Series[i - 2];

  Series.push(sum);
  if (sum >= start) {
    if (sum !== 1) {
      result.push(sum);
    }
  }

  if (Series[i] + Series[i - 1] > end) {
    break;
  }
  i++;
}
console.log(result);
