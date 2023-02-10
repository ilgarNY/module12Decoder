// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  let lookup = "abcdefghijklmnopqrstuvwxyz";
  //   123456789 10 11

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1; // If encode is false, the shift should be reversed.

    input = input.toLowerCase(); // Capital letters can be ignored.
    let result = ""; // empty string to hold the result

    for (let i = 0; i < input.length; i++) {
      let charCode = input.charCodeAt(i); // charCodeAt() method = The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
      // Returns the Unicode value of the character at the specified location.
      if (charCode >= 97 && charCode <= 122) {
        // if the character code is between 97 and 122, it is a letter
        charCode += shift; // shift the letter
        if (charCode < 97) charCode += 26; // if the letter is less than 97, add 26 to the letter
        if (charCode > 122) charCode -= 26; // if the letter is greater than 122, subtract 26 from the letter
      }
      result += String.fromCharCode(charCode); // String.fromCharCode() method = Converts Unicode values to characters.
    }
    return result;
  }

  // let encripted = "";
  // //  input = input.toLowerCase();
  // for (let i = 0; i < input.length; i++) {
  //   let currentChar = input[i];
  //   let index = lookup.indexOf(currentChar); //  find index in lookup and shif it left or right;
  //   let shiftIndex = index + shift; // returns shifted index, and then need to switch back to letter

  //   if (shiftIndex >= lookup.length) {
  //     shiftIndex = shiftIndex - lookup.length; //NUMBER
  //   }
  //   encripted += lookup[shiftIndex];
  //   // ading chars to string
  //  }

  //   return encripted;
  // }

  return {
    caesar,
  };
})();

// let text = "HIZ";
// let ecripted = ceasar(text, 1, true);
// console.log(ecripted); // should print IJA

module.exports = { caesar: caesarModule.caesar };
