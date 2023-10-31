// Assignment Code
var generateBtn = document.querySelector("#generate");

// All password criteria variables
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function generatePassword(){
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password must be between 8 and 128 characters.");
    var passwordLength = prompt("How many characters would you like your password to contain?");
  }
  var lowercaseLetter = window.confirm("Click OK to confirm including lowercase letters.");
  var uppercaseLetter = window.confirm("Click OK to confirm including uppercase letters.");
  var specialCharacterletter = window.confirm("Click OK to confirm including special characters.");
  var numberLetter = window.confirm("Click OK to confirm including numeric characters.");

  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }
  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);