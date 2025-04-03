// 47. **Find the Frequency of Each Digit**

//    * Input: `N = 112233`
//    * Output: `1 → 2, 2 → 2, 3 → 2`
//    * ✨ *Combines loops and conditionals for counting repetitions.*
let number = 111563256985632;
let n = number;
let arr = [];
let timesAppear = {};
while (n > 0) {
  arr.unshift(n % 10);
  n = Math.floor(n / 10);
}
for (let i = 0; i < arr.length; i++) {
  if (timesAppear[arr[i]] === undefined) {
    let times = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        times++;
      }
    }
    timesAppear[arr[i]] = times;
  }
}
const timesAppearKeys = Object.keys(timesAppear);
const timesAppearValues = Object.values(timesAppear);
for (let i = 0; i < timesAppearKeys.length; i++) {
  console.log(
    `Digit ${timesAppearKeys[i]} appear ${timesAppearValues[i]} times`
  );
}
