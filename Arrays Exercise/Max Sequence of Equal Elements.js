function maxSequenceOfElements(array) {

let newArray = [];
let printedArray = [];

for(let index = 0; index < Number(array.length); index++) {
let currentNumber = array[index];
index++;
let nextNumber = array[index];
let index1 = index;

while(currentNumber === nextNumber) {
newArray.push(currentNumber);
index1++;
nextNumber = array[index1];
}

if(Number(newArray.length) > Number(printedArray.length)) {
printedArray = newArray;   
}

newArray = [];
index--;
}

if(Number(printedArray.length) > 0) {
printedArray.push(printedArray[0]);
}
console.log(printedArray.join(" "));
}
