function passwordValidator(password) {

passwordLengthCorrect = false;
theDigitsAreFine = false;
theNumberOfNumbersIsFine = false;

let currentDigitIsTrue = 0;
let numberOfnumbers = 0;

if(Number(password.length) >= 6 && Number(password.length <= 10)) {
passwordLengthCorrect = true;
} else {
console.log("Password must be between 6 and 10 characters")
}

for(let index = 0; index < Number(password.length); index++) { // the For cycle, responsible for the current digit
let currentDigit = password[index];

for(let index1 = 48; index1 <= 57; index1++ ) { // the For cycle checking the numbers 0-9

if(currentDigit === String.fromCharCode(index1)) { 
numberOfnumbers++;
currentDigitIsTrue++;
}
}

for(let index2 = 65; index2 <= 90; index2++) { // the For cycle checking the letters A-Z

if(currentDigit === String.fromCharCode(index2)) {
currentDigitIsTrue++;
}
}

for(let index3 = 97; index3 <= 122; index3++) { // the For cycle checking the letters a-z

if(currentDigit === String.fromCharCode(index3)) {
currentDigitIsTrue++;
}
}

}

if(currentDigitIsTrue === Number(password.length)) {
theDigitsAreFine = true;
} else {
console.log("Password must consist only of letters and digits")
}

if(numberOfnumbers < 2) {
console.log("Password must have at least 2 digits")
} else {
theNumberOfNumbersIsFine = true;
}

if(passwordLengthCorrect === true && theDigitsAreFine === true && theNumberOfNumbersIsFine === true) {
console.log("Password is valid");
}
}
