var generateBtn = document.querySelector("#generate");

let randomPassword = [];
let lowerCases= ["a","b","c","d","e","f","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCases=[]
let specialChar =["!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|",";",":","<",">","?","/",",","."];
let numericValues =[];
let finalpassword;

for(i=0;i<10;i++)
{
  numericValues[i] = i;
}

for(i=0;i<lowerCases.length;i++)
{
   upperCases[i] = lowerCases[i].toUpperCase();
}


function generatePassword(length) {
  let isLower = confirm("Do you want to include lowercase?");
  let isUpper = confirm("Do you want to include uppercase?");
  let isSpecial = confirm("Do you want to include special characters?");
  let isNum = confirm("Do you want to include numeric values");
 
  while(!isLower && !isUpper && !isSpecial && !isNum){
    alert("Must include one of the characters")
    isLower = confirm("Do you want to include lowercase?");
    isUpper = confirm("Do you want to include uppercase?");
    isSpecial = confirm("Do you want to include special characters?");
    isNum = confirm("Do you want to include numeric values");
  }

if(isLower){
  randomPassword.push(lowerCases);
}

if(isUpper){
  randomPassword.push(upperCases);
}

if(isSpecial){
  randomPassword.push(specialChar);
}

if(isNum){
  randomPassword.push(numericValues);
}

//Add a loop for finalpassword


  return finalpassword;
}


// Write password to the #password input
function writePassword() {
  var length = parseInt(prompt("Enter the length of password"));
  
  while(length < 8 || length > 128 || isNaN(length) || length === null){
    alert("Your password length should be between 8 and 128");
    length = parseInt(prompt("Enter the length of password"));
  
  }
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

