// These are the variables 
var characterLength = 8;
var choiceArray = [];


var specialCharacterArray = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','?','@','[',']','^','_',"`",'{','|','}','~'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];


// Assignment Code
var generateBtn = document.querySelector("#generate");




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var correctPromts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPromts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = '';
  }

}

// this generates the password
function generatePassword() {
  var password = '';
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

// this gives us the prompts that when given said text/data.. Generates our password!
function getPrompts() {

  choiceArray = [];

  var characterLengthAlert = false;

  characterLength = parseInt(prompt('How many characters would you like in your password? (Must be 8-128 characters)'));
  
  while (!characterLengthAlert) {
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert('Character length must be a number, 8 - 128 digits! Try again!');
      characterLength = parseInt(prompt('How many characters would you like in your password? (Must be 8-128 characters)'));
    }
    else {
      characterLengthAlert = true;
    }
  }

  if (confirm('Do you want lowercase letters in your password?')) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  if (confirm('Do you want uppercase letters in your password?')) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if (confirm('Do you want special characters in your password?')) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }

  if (confirm('Do you want numbers in your password?')) {
    choiceArray = choiceArray.concat(numberArray);
  }

  return true;

}


