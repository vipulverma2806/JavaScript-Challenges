// 4. **Print Inverted Pyramid Pattern**

//    - Input: `Rows = 5`
//    - Output:

//      ```
//      *********
//       *******
//        *****
//         ***
//          *
//      ```

//    - ✨ _Teaches reverse space-star pattern alignment._

// ---


let rows = 5;
for(let i =rows ; i>=1; i--){
let currentRowStar = (i*2)-1
let currentRowSpace = rows- i
let str = "";
    for(let j =1; j<=currentRowSpace; j++ ){
        str = str + " "
    }
    for(let k = 1; k<= currentRowStar;k++){
        str = str + "*"
    }
    console.log(str)
}

