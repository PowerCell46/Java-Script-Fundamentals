function sortNums(first, second, third) {
let array = [];
array.push(first, second, third);

let smallestNum = 10000;
let biggestNum = -10000;
let biggestNumIndex = 0;
let smallestNumIndex = 0;

for(let index = 0; index < Number(array.length); index++) {
let currentNum = array[index];

if(currentNum < smallestNum) {
smallestNum = currentNum;
smallestNumIndex = index;
}
if(currentNum > biggestNum) {
biggestNum = currentNum;
biggestNumIndex = index;
}

}
delete array[biggestNumIndex];
delete array[smallestNumIndex];

console.log(biggestNum);
console.log(array.join(""));
console.log(smallestNum);
}
