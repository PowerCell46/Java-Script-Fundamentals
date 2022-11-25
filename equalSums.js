function equalSums(array) {
let firstHalf = Number(array.length) / 2;
let index = null;
let indexArray = [];

let firstSum = null;
for(let index = 0; index < firstHalf; index++) {
let currentNumber = Number(array[index]);
firstSum+= currentNumber;

index++;
if(index === firstHalf) {
indexArray.push(index);
index--;
} else {
index--;
}
}

let secondSum = null;

for(let index1 = indexArray[0]; index1 < Number(array.length); index1++) {
let currentNumber = Number(array[index1]);
secondSum += currentNumber;
}

let result = Math.abs(firstSum - secondSum);
if(array.includes(result)) {
console.log(result);
} else {
console.log("no");
}

}
equalSums([1, 2]);