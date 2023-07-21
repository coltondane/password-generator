// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// define more varibales
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
