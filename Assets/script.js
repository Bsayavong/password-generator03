//Begin the assignment code by identifying the element (btn) & specifying "generate" as the id selector. 
var generateBtn = document.querySelector("#generate");

//4 variables that are determined with a string of 26 letters in "lowerCase" & "upperCase" and numbers with special characters.
const lowerCase = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z"];
const upperCase = ["A" ,"B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
const numbers = ["0,1,2,3,4,5,6,7,8,9"];
const specialCharacters = ["'","!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]",":",";","?",">","<",",",".","/","-","="];

//Declaring the variables that are assigned to my block statements & strings.
let userChoice = [];
let generatedPassword = "";

//By using function it produces a password to the selected "id" class.
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//My initial prompt with "if" & "return" statement when the user uses an invalid number that is <8 and >128, it is verified with a logical operator "||".
function generatePassword() {
  function userInput() {
    let userPassLength = window.prompt(
      "Please select your password length between 8-128 characters");
      if (userPassLength<8 || userPassLength>128) {
        alert("Password length must be between 8-128 characters");
        return userInput();  
      }
      console.log(userPassLength);
      return [userPassLength];
  }

  //My series of 4 prompts utilizing console.log with TRUE/FALSE boolean.
  function userConfirms() {
      let userLower = confirm("Would you like to use lowercase letters in your password?");
      console.log(userLower);
      let userUpper = confirm("Would you like to use uppercase letters in your password?");
      console.log(userUpper); 
      let userNumber = confirm("Would you like to use numbers in your password?");
      console.log(userNumber);
      let userSpecial = confirm("A special character is not required but recommended, for added security would you like to use special characters?");
      console.log(userSpecial);

    //If all of the console logs are "false" another prompt is activated by using "if" & "return" statement to notify user has not met at least 1 requirement.
    if (!userLower && !userUpper && !userNumber && !userSpecial) {
      alert("At least one Lowercase, Uppercase, Number, Special Character must be selected.");
      return userConfirms();
    }
  
    return [userLower, userUpper, userNumber, userSpecial]; 
  }
  let userPassLengthHolder = userInput();
  userPassLength = userPassLengthHolder[0];
  console.log(userPassLength);

  //Defining each of the 4 boolean values
  let userBoolean = userConfirms();
  console.log(userBoolean);
  userLower = userBoolean[0];
  userUpper = userBoolean[1];
  userNumber = userBoolean[2];
  userSpecial = userBoolean[3];

  //Usage of "if" statements for userChoice arrays & concatenation to combine my strings for my 4 variables.
  if (userLower) {
    userChoice = userChoice.concat(lowerCase);
    console.log(userChoice);
  }
  if (userUpper) {
    userChoice = userChoice.concat(upperCase);
    console.log(userChoice);
  }
  if (userNumber) {
    userChoice = userChoice.concat(numbers);
    console.log(userChoice);
  }
  if (userSpecial) {
    userChoice = userChoice.concat(specialCharacters);
    console.log(userChoice);
  }

//Created a for loop for my random password to populate within the chosen character count (<8 & >128).
for (let i = 0; i < userPassLength; i++) {
  let randomIndex = Math.floor(Math.random()*userChoice.length);
  let randomCharacter = userChoice[randomIndex];
  generatedPassword = generatedPassword.concat(randomCharacter);
  console.log(generatedPassword);
}
return generatedPassword;
}

// Add event listener which reacts to the "click" event which tells JavaScript to write password to the webpage.
generateBtn.addEventListener("click", writePassword);
