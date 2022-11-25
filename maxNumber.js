function maxNumber(array) {
    
let index = 0;
let currentNumberIndex = index;;
let currentNumInex = index + 1;
while(true) {
let firstNumber  = Number(array[currentNumberIndex]);
index++; 
let secondNumber = Number(array[index]);
currentNumInex = index;
if(firstNumber > secondNumber) {

while(firstNumber > secondNumber && index < Number(array.length) -1) {
index++;
secondNumber = Number(array[index]);
}
if (firstNumber > secondNumber && index === Number(array.length) - 1) {
console.log(firstNumber);
currentNumberIndex++;
currentNumInex = index;
}
} else {
currentNumberIndex++;
}
}



}
maxNumber([1, 4, 3, 2]);