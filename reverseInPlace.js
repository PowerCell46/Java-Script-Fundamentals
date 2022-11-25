function reverseInPlace(input) {
let lengthOfTheArray = input.length;
lengthOfTheArray = Number(lengthOfTheArray);
let newArray = [];

for(let currentSumbol = lengthOfTheArray; currentSumbol >= 0; currentSumbol--) {
newArray.push(input[currentSumbol]);
}
console.log(newArray.join(" "));
}
reverseInPlace(['33', '123', '0', 'dd'])