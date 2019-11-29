
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");


// This section will generate a string that varies in content based upon the checked boxes of special characters, lower case, upper case, and numbers.

function generateAlphabet() {
    var alphabet = "";


    // if special char
    if (document.getElementById("SpecialCharacters").checked) {
        alphabet = alphabet + "!@#$%^&*()_+=-";
    }

    // if upper case
    if (document.getElementById("UpperCase").checked) {
        alphabet = alphabet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    }

    // if lower case
    if (document.getElementById("LowerCase").checked) { 
        alphabet = alphabet + "abcdefghijklmnopqrstuvwxyz" ;
    }

    //if numeRick included
    if (document.getElementById("NumeRick").checked) {
        alphabet = alphabet + "0123456789";
    }
    
    
    return alphabet;
    
}



//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    var alphabet = generateAlphabet ();
    var passwordLength = document.getElementById("PasswordLength").value;
    var result = "";
    
    if (passwordLength <8 || passwordLength >32) {
        alert ("Password Length must be between 8 and 32.");
    } 
    else if (alphabet.length ==0){
        alert ("No Character Type Selected");
    }
    else {  

        for (let index = 0; index < passwordLength; index++) {
            var r=Math.floor(Math.random()*alphabet.length);
            var c=alphabet[r];
            result = result +c;        
        }
    }

    //YOUR CODE HERE
    // alert("ive been clicked");
    return result;
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // alert("I've been copied");
    var passwordText = document.querySelector("#password");
    passwordText.select ();

    document.execCommand('copy');
    // BONUS 
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER