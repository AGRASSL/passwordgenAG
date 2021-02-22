// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// have user click button before prompts
// function startPrompts() {
//   var lwrConfirm = confirm("Would you like lowercase letters?");
// }

//when the user arrives at the page, they are greeted with an alert
  //use the variables for the alerts
  
var lwrConfirm = confirm("Would you like lowercase letters?");
var uprConfirm = confirm("Would you like uppercase letters?");
var nbrConfirm = confirm("Would you like numbers?");
var symConfirm = confirm("Would you like special characters?");
var lengthPrompt = prompt("How long would you like your password? Choose 8-128.")

//make an array of functions with the user input
var inputs = []
  //use if/else statements to decide which functions to push to be right
  if (lwrConfirm == true) {
    //  block of code to be executed if the condition is true
    for (let i = 0; i < 25; i++) {
      inputs.push(getLwr());

    }
  }
  if (uprConfirm == true) {
      //  block of code to be executed if the condition is true
    for (let i = 0; i < 25; i++) {
        inputs.push(getUpr());
  
      }
    }
  if (nbrConfirm == true) {
        //  block of code to be executed if the condition is true
    for (let i = 0; i < 98; i++) {
          inputs.push(getNbr());
    
        }
      }
  if (symConfirm == true) {
          //  block of code to be executed if the condition is true
    for (let i = 0; i < 14; i++) {
            inputs.push(getSym());
      
          }

  } 
  console.log(inputs)
//after inputs are taken, the inputs are put together randomly
function generatePassword () {
  var password = []
  for (let i = 0; i < lengthPrompt; i++) {
      password.push(inputs[(Math.floor(Math.random() * inputs.length))])
  }
  
  return password.join("")

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate lowercase letter characters  

function getLwr () {
return String.fromCharCode((Math.floor(Math.random() * 26) + 97));
}
console.log(getLwr());

//generate uppercase letter characters
function getUpr () {
  return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
  }
  console.log(getUpr());

//generate number character
  function getNbr () {
    return String.fromCharCode((Math.floor(Math.random() * 10) + 48));
  }
  console.log(getNbr());

  //generate symbol character
  function getSym () {
    const symbols = "!@#$%^&*🙌🎉✌🤦‍♂️🐱‍👤👀💋";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  console.log(getSym());


  