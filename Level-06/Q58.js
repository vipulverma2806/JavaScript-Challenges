// 58. **Check if a Number is Prime**

//    - **Input:** `7`
//    - **Output:** `Prime Number`

let num = 5

if(num <= 1){
  return console.log("Not Prime");
}else{
  for(let i=2 ; i <= Math.sqrt(num); i++){
    if(num % i == 0){
      return console.log("Not Prime");
    }
  }
  return console.log("Prime");
}


