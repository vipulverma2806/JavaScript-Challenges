// 41. **Check if a Number is an Armstrong Number (also called a Narcissistic Number)**

//    * Input: `N = 153`
//    * Output: `Armstrong Number`
//    * ✨ *Armstrong Number: `1³ + 5³ + 3³ = 153, 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634`.*
let number = 8208;
let n = number;
let arr = []
while(n>0){
 arr.unshift(n % 10)
 n = Math.floor(n/10)
}
// console.log(arr)
let total = 0;
for(let i=0; i < arr.length; i++){
total += arr[i]**arr.length
}

if(number === total){
    console.log("This Number is an Armstrong Number")
}else{
    console.log("This Number is not an Armstrong Number")
}
// console.log(total)