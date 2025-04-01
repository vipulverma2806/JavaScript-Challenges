// 34. Split Number into Digits**
//    Input: `N = 12345`
//    Output: `[1, 2, 3, 4, 5]`
//    ✨ *Extract each digit mathematically using, and return them in an array. 
//    Do not use string operations.*

let n = '76'
let arr = [];

while(n>0){
    let digit = Math.floor(n % 10);
    arr.push(digit)
    n = Math.floor(n / 10)
}

console.log(arr.reverse())