// ## **76. Check if a Number Is a Smith Number**

// A composite number whose **sum of digits = sum of digits of prime factors**.

// - **Input:** `N = 666`
// - **Output:** `Smith Number`

function isNotValid(num) {
  if (num <= 1) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}

function getFactors(inputNum) {
  let num = inputNum;

  let factors = [];
  if (isNotValid(num)) {
    return "Number not valid (Prime numbers are not smith number) ";
  } else {
    for (let i = 2; i <= num; i++) {
      // console.log(i)
      while (num % i == 0) {
        // console.log(num,i)
        factors.push(i);
        num = num / i;
        // console.log(num)
      }
    }
    let forSmith = [];

    for (let i = 0; i < factors.length; i++) {
      let num = factors[i];
      while (num > 0) {
        forSmith.push(num % 10);
        num = Math.floor(num / 10);
      }
    }

    let sum = 0;
    console.log(forSmith);
    for (let i = 0; i < forSmith.length; i++) {
      sum = sum + forSmith[i];
    }

    let inputArr = [];
    // for (let i = 0; i < factors.length; i++) {
    //   let num = factors[i];
    while (inputNum > 0) {
      // console.log(inputNum)
      inputArr.push(inputNum % 10);
      inputNum = Math.floor(inputNum / 10);
    }
    // }

    let inputSum = 0;

    for (let i = 0; i < inputArr.length; i++) {
      inputSum = inputSum + inputArr[i];
    }
    console.log(inputArr);
    if (sum === inputSum) {
      return "Smith number";
    } else {
      return "Not smith number";
    }
  }
}

console.log(getFactors(862));
