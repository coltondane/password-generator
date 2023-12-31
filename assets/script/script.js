// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// define more varibales
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialChars =['!', '#', '$', '%', '&', '(', ')', '*', '+', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];

// add empty array for the confirmed attributes
var availableChars = [];
// gather promps from user for password specifications
function passwordSpecs() {
  do {
    var charLength = prompt(
      "How Many Characters (8-128), Would You Like Your Password to be?"
    );
  } while ((charLength < 8 || charLength > 128));
  
  if (confirm("would you like lowercase characters?")) {
    availableChars = availableChars.concat(lowerCase);
  }
  if (confirm("would you like uppercase characters?")) {
    availableChars = availableChars.concat(upperCase);
  }
  if (confirm("would you like to add numbers?")) {
    availableChars = availableChars.concat(numbers);
  }
  if (confirm("would you like to add special characters?")) {
    availableChars = availableChars.concat(specialChars);
  }
  return charLength;
}

// write generate password function
function generatePassword() {
    var passLength = passwordSpecs();
    // create empty password string
    var password = "";
    // for loop the length of the password
    for (let i = 0; i < passLength; i++) {
        // choose a random number in the range of the password length
        var randInt = Math.floor(Math.random()*availableChars.length);   
        // choose a random character in the array corresponding to that number and add it to the string
        password += (availableChars[randInt]);
    }
    return password;
}
// Write password to the #password input
function writePassword() {
    init();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// makse function to clear values
function init() {
    availableChars = [];
    var clear = document.querySelector("#password");
    clear.textContent = "";
}


