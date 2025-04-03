// 44. **Find the Largest and Smallest Digit in a Number**

//    * Input: `N = 9483`
//    * Output: `Largest = 9, Smallest = 3`
//    * ✨ *Enhances comparison logic using loops.*
let number = 987654329;
let n = number;
let arr = []
while(n>0){
 arr.unshift(n % 10)
 n = Math.floor(n/10)
}
let biggest = -Infinity;
let smallest = Infinity;
for(let i=0; i < arr.length; i++){   // arr = 9871
    if(arr[i] >= biggest){
        biggest = arr[i]           // 0 - 0, 1 - 0,2 - 0
    }
     if(arr[i] <= smallest){
        smallest = arr[i]           // 0 - 0, 1 - 0,2 - 0
    }
}
console.log("smallest = ", smallest , " biggest =", biggest)