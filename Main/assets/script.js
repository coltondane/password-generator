// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// define more varibales
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialChars

console.log(upperCase);
console.log(lowerCase);
// gather promps from user for password specifications
function passwordSpecs() {
  do {
    var charLength = prompt(
      "How Many Characters Would You Like Your Password to be?"
    );
  } while (charLength < 8 || charLength > 128);
  console.log(charLength);
}

// write generate password function
function generatePassword() {}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordSpecs();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// makse function to clear values
function init() {}
init();
ners;
