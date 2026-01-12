//  **Check if a Year is a Leap Year**

//    * Input: `2024`
//    * Output: `Leap Year`
//    * ✨ *Builds compound condition logic using multiple `if` statements (`%4`, `%100`, `%400`).*

//    A year is a **leap year** if it satisfies these conditions:

//    1. It is **divisible by 4**,
//       ➜ `year % 4 === 0`
//    2. **But not divisible by 100**,
//       ➜ `year % 100 !== 0`
//    3. **Unless** it is also **divisible by 400**,
//       ➜ `year % 400 === 0`

//    🧩 **In Simple Words**
//    - If a year is divisible by **4**, it’s a leap year.
//    - **Except** if it’s also divisible by **100**, then it’s **not** a leap year.
//    - **But** if it’s divisible by **400**, it **is** a leap year again.

function checkLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return "leap year";
  } else if (year % 4 === 0 && year % 400 === 0) {
    return "leap year";
  } else {
    return "not leap year";
  }
}

console.log(checkLeapYear("1900"))