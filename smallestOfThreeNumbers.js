function smallestOfThreeNumbers(number1, number2, number3) {
let array = [];
array.push(number1);
array.push(number2);
array.push(number3);
let smallestNum = 100000;

for(let index = 0; index < Number(array.length); index++) {
let currentNumber = Number(array[index]);

if(currentNumber < smallestNum) {
smallestNum = currentNumber;
}

}
return smallestNum;
}
console.log(smallestOfThreeNumbers(-2,
    -2000000,
    -1324213
    ));