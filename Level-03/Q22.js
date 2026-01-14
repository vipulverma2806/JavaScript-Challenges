// 3. **Print Pyramid Pattern**

//    - Input: `Rows = 5`
//    - Output:

//      ```
//          *
//         ***
//        *****
//       *******
//      *********
//      ```

//    - ✨ _Teaches alignment using spaces and nested loops._


let rows = 10;
for(let i =1 ; i<=rows; i++){
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



