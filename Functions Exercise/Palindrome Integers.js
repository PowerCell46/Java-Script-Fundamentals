function palindromeIntegers(input) {

for(let currentNumberIndex = 0; currentNumberIndex < Number(input.length); currentNumberIndex++) {
let currentNumber = input[currentNumberIndex] + "";
let reversedCurrentNumber = "";
for(let currentIndex = Number(currentNumber.length) - 1; currentIndex >= 0 ; currentIndex--) {
reversedCurrentNumber += currentNumber[currentIndex];
}
if(currentNumber === reversedCurrentNumber) {
console.log(`true`);
} else {
console.log(`false`);
}
}
}
