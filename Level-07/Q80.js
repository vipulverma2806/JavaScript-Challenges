// ## **80. Number Base Conversion (Any Base to Any Base)**

// - **Input:** `Number = "101101", From Base = 2, To Base = 10`
// - **Output:** `45`

function toDecimal(num, from) {
  let numString = String(num);

  if (from > 10) {
    let sum = 0;
    for (let i = 1; i <= numString.length; i++) {
      let hexText = numString.slice(i - 1, i);
      let hexDigit;
      let power = numString.length;
      switch (hexText) {
        case "A":
          hexDigit = 10;
          break;

        case "B":
          hexDigit = 11;
          break;

        case "C":
          hexDigit = 12;
          break;

        case "D":
          hexDigit = 13;

          break;
        case "E":
          hexDigit = 14;

          break;
        case "F":
          hexDigit = 15;
          break;

        default:
          hexDigit = hexText;
      }

      sum = sum + hexDigit * from ** (power - i);
    }
    // console.log(sum);
    return sum;
  } else {
    let sum = 0;
    for (let i = 1; i <= numString.length; i++) {
      let power = numString.length;
      sum = sum + numString.slice(i - 1, i) * from ** (power - i);
      // console.log(from ** (power - i));
      // console.log()
    }

    // console.log(sum);
    return sum;
  }
}

function conversion(num, from, to) {
  if (from != 16 && typeof (num) === "string") return "Format is wrong";
  let decimal = toDecimal(num, from);
  let targetArr = [];

  if (to > 10) {
    // let hexDigits = [A, B, C, D, E, F];
    while (decimal > 0) {
      let toDigit = decimal % to;
      switch (toDigit) {
        case 10:
          targetArr.unshift("A");
          break;

        case 11:
          targetArr.unshift("B");
          break;

        case 12:
          targetArr.unshift("C");
          break;

        case 13:
          targetArr.unshift("D");

          break;
        case 14:
          targetArr.unshift("E");

          break;
        case 15:
          targetArr.unshift("F");
          break;

        default:
          targetArr.unshift(toDigit);
      }
      decimal = Math.floor(decimal / to);
    }
    let finalOutput = "";
    for (let i = 0; i < targetArr.length; i++) {
      finalOutput = finalOutput + targetArr[i];
      //   console.log(targetArr)
    }
    return finalOutput;
  } else {
    while (decimal > 0) {
      let toDigit = decimal % to;
      targetArr.unshift(toDigit);
      decimal = Math.floor(decimal / to);
    }
  }
  let finalOutput = "";
  for (let i = 0; i < targetArr.length; i++) {
    finalOutput = finalOutput + targetArr[i];
  }
  return finalOutput;
}

console.log(conversion(6455523726, 8, 16));

// console.log(toDecimal("4AB56DE", 16));
