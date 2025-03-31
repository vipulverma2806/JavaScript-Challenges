// 15. **Check if a Character is a Vowel or Consonant**

//    * Input: `e`
//    * Output: `Vowel`
//    * ✨ *Combines logical OR (`||`) operator and string comparisons.*

function checkVowelConsonant(char) {
  if ("aeiou".includes(char.toLowerCase()) && char !== "") {
    return "Vowel";
  } else if (/[a-z]/.test(char.toLowerCase()) && char !== "") {
    return "Consonant";
  } else {
    return "Not a valid character";
  }
}

console.log(checkVowelConsonant("5"))
