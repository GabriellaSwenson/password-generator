// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//The code to generate the password and the rules for it
function generatePassword() {
  //The prompts as to whether a certain type of character is included and the length
  const passwordLength = prompt("Password length?");

  const lowerCaseCharacter = confirm("Lowercase?");

  const upperCaseCharacter = confirm("Uppercase?");

  const numberCharacters = confirm("Numbers?");

  const specialCharacters = confirm("Specials?");
  //The different lists of characters
  const lowerCase = "abcdefghijkmnpqrstuvwxyz";

  const upperCase = "ABCDEFGHJKLMNPQRSTUVWXYZ";

  const numbers = "123456789";

  const special = "`~!@#$%^&*()-_=+[{]};:'<>/,?";

  password = "";

  characterList = "";
  //Whether a certain list is included and include that character in the password
  if (lowerCaseCharacter) {
    characterList = characterList.concat(lowerCase);
  }
  if (upperCaseCharacter) {
    characterList = characterList.concat(upperCase);
  }
  if (numberCharacters) {
    characterList = characterList.concat(numbers);
  }
  if (specialCharacters) {
    characterList = characterList.concat(special);
  }
  //The rules for randomizing characters and how many there are
  for (let i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characterList.length);
    var letter = characterList[randomNumber];
    password = password.concat(letter);
  }
  //Let's the password be generated
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("btn", writePassword);
