function binaryToDecimal(binary) {

let finalResult = 0;
let power = -1;

for (let binaryIndex = (Number(binary.length) - 1); binaryIndex >= 0; binaryIndex--) {

let currentDigit = Number(binary[binaryIndex]);
power++;

let currentResult = currentDigit * (Math.pow(2, power));
finalResult += currentResult;
}

console.log(finalResult);
}
