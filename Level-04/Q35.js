// 35.Remove the Decimal Point Mathematically**

//    Input: `N = 12.34`
//    Output: `1234`
//    ✨ *Do not use string operations.*

let n = 12.34
while (n % 1 !== 0 ){
 n = n*10;
}
console.log(n)
