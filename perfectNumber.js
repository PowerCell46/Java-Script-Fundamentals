function perfectNumber(number) {
let array = []
let sumOfTheDividers = 0;

for(let currentDivider = 1; currentDivider < number; currentDivider++) {

if(number % currentDivider === 0) {
array.push(currentDivider);
sumOfTheDividers+= currentDivider;
}
}

if(number === sumOfTheDividers) {
console.log(`We have a perfect number!`);
} else {
console.log(`It's not so perfect.`)
}
}
perfectNumber(6);