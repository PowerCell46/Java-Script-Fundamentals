function decimalToBinary(decimal) {

decimal = Number(decimal);
let binaryNumber = "";

while (decimal !== 0) {

if (decimal % 2 === 0) {
binaryNumber += 0;
decimal = decimal / 2;
} else if (decimal % 2 !== 0) {
binaryNumber += 1;
decimal -= 1;
if (decimal === 0) {
continue;
}
decimal = decimal / 2;
}
}

while (Number(binaryNumber.length) < 8) {
binaryNumber += 0;
}

let arrayPrint = [];

for (let index = (Number(binaryNumber.length)); index >= 0 ; index--) {
arrayPrint.push(binaryNumber[index]);
}
console.log(arrayPrint.join(""));
}
decimalToBinary("6");