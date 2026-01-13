//  **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

//    * Input: `A`
//    * Output: `Uppercase Letter`
//    * ✨ *Teaches use of character code ranges (`charCodeAt`) and compound logical conditions.*
//    * 🔍 *Concepts:* ASCII range checks, compound `&&` and `||` operators.

function checkCharOfASCII(char) {
  char = char.charCodeAt();
  if (char >= 48 && char <= 57) {
    return "Number";
  } else if (
    (char >= 58 && char <= 64) ||
    (char >= 91 && char <= 96) ||
    (char >= 123 && char <= 126) ||
    (char >= 33 && char <= 47)
  ) {
    return "Special Character";
  } else if (char >= 65 && char <= 90) {
    return "Uppercase letter";
  } else if (char >= 97 && char <= 122) {
    return "Lowercase letter";
  }
}

console.log(checkCharOfASCII("9"));
