// 27. **Print Hollow Inverted Pyramid**

//    - Input: `Rows = 5`
//    - Output:

//      ```
//      *********
//       *     *
//        *   *
//         * *
//          *
//      ```

//    - ✨ _Focuses on conditionally printing edges and spaces._

// ---


let rows = 10;
for (let i = rows; i >=1 ; i--) {
  let currentRowStar = i * 2 - 1;
  let currentRowSpace = rows - i;
  let str = "";
  for (let j = 1; j <= currentRowSpace; j++) {
    str = str + " ";
  }
  if (i === 1 || i === rows) {
    for (let k = 1; k <= currentRowStar; k++) {
      str = str + "*";
    }
  } else {
    for (let k = 1; k <= currentRowStar; k++) {
      if (k === 1 || k === currentRowStar) {
        str = str + "*";
      }else{
        str =str + " "
      }
    }
  }

  console.log(str);
}
