// Function to capture the proper password length or continue to prompt
var pwLength = function() {
	lengthValue = prompt("Choose Password Length Between: 8 - 128");
	// prompt cannot be empty, be less than 8, more than 128 and cannot contain text
	while (lengthValue === "" || parseInt(lengthValue) < 8 || parseInt(lengthValue) > 128 || isNaN(parseInt(lengthValue))) {
		lengthValue = prompt("Choose Password Length Between: 8 - 128");
	}
	console.log("Password length: " + lengthValue);
	return lengthValue;
}












var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
