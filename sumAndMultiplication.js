function sumAndMultiplication(input) {

let inputedNumber = Number(input[0]);
let stringNumber = inputedNumber + ""; 
let numberOfDigits = (stringNumber.length);
let finishingNumber = null;
finishingNumber = stringNumber[numberOfDigits - 1];
finishingNumber = Number(finishingNumber);
let result = null;
let theNumberIsFound = false;
let theResultIsPrinted = false;

for(let a = 1; a <= 9; a++) {

    if(theNumberIsFound === true) {
    break;
}
for(let b = 9; b >= a; b--) {

    if(theNumberIsFound === true) {
    break;
}
for(let c = 0; c <= 9; c++) {

    if(theNumberIsFound === true) {
    break;
}
for(let d = 9; d >= c; d--) {

if((a + b + c + d) === (a * b * c * d) && finishingNumber === 5) {

console.log(a + "" + b + "" + c + "" + d);
theResultIsPrinted = true;
theNumberIsFound = true;
break;
}

result = ((a * b * c * d) / (a + b + c + d));
if(Math.trunc(result) === 3 && inputedNumber % 3 === 0) {
console.log(d + "" + c + "" + b + "" + a);
theResultIsPrinted = true;
theNumberIsFound = true;
break;
}

}
}
}
}

if(theResultIsPrinted === false) {
console.log('Nothing found');
}
}
sumAndMultiplication(["214"])